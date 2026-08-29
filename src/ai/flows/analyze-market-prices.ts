
'use server';

/**
 * @fileOverview Market price analysis flow.
 *
 * - analyzeMarketPrices - Analyzes market prices and recommends whether to sell or wait.
 * - AnalyzeMarketPricesInput - The input type for the analyzeMarketPrices function.
 * - AnalyzeMarketPricesOutput - The return type for the analyzeMarketPrices function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeMarketPricesInputSchema = z.object({
  query: z.string().describe('The user query about market prices, can be voice or text. Should include crop and location.'),
  language: z.string().describe('The language for the response (e.g., "en", "hi", "kn", "bn", "bho").'),
});
export type AnalyzeMarketPricesInput = z.infer<typeof AnalyzeMarketPricesInputSchema>;

const AnalyzeMarketPricesOutputSchema = z.object({
  recommendation: z.string().describe('The recommendation on whether to sell or wait.'),
  analysis: z.string().describe('The analysis of market trends, citing specific prices.'),
});
export type AnalyzeMarketPricesOutput = z.infer<typeof AnalyzeMarketPricesOutputSchema>;

// Function to fetch live market data
async function fetchLiveMarketData() {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_APP_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:9002");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const response = await fetch(`${baseUrl}/api/market-prices`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      cache: 'no-store',
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Failed to fetch market data: ${response.status}`);
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.warn('Live market data fetch timed out or offline, using fallback data:', (error as any).message);
    return null;
  }
}

// Fallback mock data if live data fails
const fallbackMarketData = {
  wheat: { price: 2400, trend: 'stable', recommendation: 'moderate' },
  rice: { price: 3200, trend: 'rising', recommendation: 'good' },
  maize: { price: 1850, trend: 'stable', recommendation: 'moderate' },
  pulses: { price: 4100, trend: 'rising', recommendation: 'good' },
  cotton: { price: 6750, trend: 'falling', recommendation: 'wait' },
  guar: { price: 8500, trend: 'stable', recommendation: 'moderate' },
  soybean: { price: 4200, trend: 'rising', recommendation: 'good' },
  mustard: { price: 5200, trend: 'stable', recommendation: 'moderate' }
};

const analysisPrompt = ai.definePrompt({
  name: 'marketAnalysisPrompt',
  input: {
    schema: z.object({
      query: z.string(),
      language: z.string(),
      marketData: z.any(),
    }),
  },
  output: {schema: AnalyzeMarketPricesOutputSchema},
  prompt: `You are a market analyst providing advice to farmers in India.
  
  The farmer's preferred language is {{language}}. All of your text output (recommendation, analysis) MUST be in this language.

  A farmer has the following query: "{{query}}".
  
  Here is the current LIVE market data for various commodities:
  {{marketData}}
  
  Based on this LIVE market data and the user's query, provide:
  
  1. A recommendation on whether to sell, wait, or buy based on current market conditions
  2. A brief analysis explaining the market situation and price trends
  
  IMPORTANT: Always mention the CURRENT LIVE PRICES from the data provided. For example:
  - "Current wheat price is ₹X per quintal"
  - "Live rice price shows ₹Y per quintal"
  - "Guar is currently trading at ₹Z per quintal"
  
  Make your response practical and actionable for farmers. If the requested language is Hindi, the response should be entirely in Hindi.
  If it's Kannada, respond in Kannada. If it's Bengali, respond in Bengali.`,
});

export async function analyzeMarketPrices(input: AnalyzeMarketPricesInput): Promise<AnalyzeMarketPricesOutput> {
  return analyzeMarketPricesFlow(input);
}

const analyzeMarketPricesFlow = ai.defineFlow(
  {
    name: 'analyzeMarketPricesFlow',
    inputSchema: AnalyzeMarketPricesInputSchema,
    outputSchema: AnalyzeMarketPricesOutputSchema,
  },
  async ({query, language}) => {
    try {
      // Fetch LIVE market data from NCDEX scraper
      let marketData = await fetchLiveMarketData();
      
      if (!marketData || marketData.length === 0) {
        // Fallback to mock data if live data fails
        console.log('Live market data unavailable, using fallback data');
        marketData = Object.entries(fallbackMarketData).map(([commodity, data]) => ({
          commodity: commodity.charAt(0).toUpperCase() + commodity.slice(1),
          price: data.price,
          trend: data.trend,
          recommendation: data.recommendation,
          unit: 'per quintal'
        }));
      } else {
        // Transform live data to include trend analysis
        marketData = marketData.map((item: any) => {
          // Analyze trend based on price change
          let trend = 'stable';
          let recommendation = 'moderate';
          
          if (item.change) {
            const changeValue = parseFloat(item.change.replace(/[^\d.-]/g, ''));
            if (changeValue > 0) {
              trend = 'rising';
              recommendation = 'good';
            } else if (changeValue < 0) {
              trend = 'falling';
              recommendation = 'wait';
            }
          }
          
          return {
            commodity: item.commodity,
            price: item.price,
            trend: trend,
            recommendation: recommendation,
            unit: 'per quintal',
            change: item.change || '0.00'
          };
        });
      }

      // Call the analysis prompt with LIVE market data
      const { output: analysisResult } = await analysisPrompt({
        query,
        language,
        marketData: JSON.stringify(marketData, null, 2)
      });
      
      if (!analysisResult) {
        throw new Error("Analysis result was empty.");
      }

      return analysisResult;
    } catch (error) {
      console.error("Error in analyzeMarketPricesFlow: ", error);
      
      // Provide helpful fallback responses in multiple languages
      const fallbackResponses = {
        en: {
          recommendation: "Based on current market trends, consider holding your produce for now.",
          analysis: "Market conditions are showing mixed signals. Wheat and rice prices are stable, while pulses show upward momentum. Monitor local mandi prices for the best selling opportunities."
        },
        hi: {
          recommendation: "वर्तमान बाजार के रुझानों के आधार पर, अभी अपनी उपज को रखने पर विचार करें।",
          analysis: "बाजार की स्थिति मिश्रित संकेत दिखा रही है। गेहूं और चावल के दाम स्थिर हैं, जबकि दालों में ऊपर की ओर गति दिख रही है। सर्वोत्तम बिक्री के अवसरों के लिए स्थानीय मंडी के दामों की निगरानी करें।"
        },
        kn: {
          recommendation: "ಪ್ರಸ್ತುತ ಮಾರುಕಟ್ಟೆ ಪ್ರವೃತ್ತಿಗಳ ಆಧಾರದಲ್ಲಿ, ಈಗ ನಿಮ್ಮ ಉತ್ಪನ್ನವನ್ನು ಹಿಡಿದಿಡಲು ಪರಿಗಣಿಸಿ.",
          analysis: "ಮಾರುಕಟ್ಟೆ ಪರಿಸ್ಥಿತಿಗಳು ಮಿಶ್ರ ಸಂಕೇತಗಳನ್ನು ತೋರಿಸುತ್ತಿವೆ. ಗೋಧಿ ಮತ್ತು ಅಕ್ಕಿಯ ಬೆಲೆಗಳು ಸ್ಥಿರವಾಗಿವೆ, ಆದರೆ ಬೇಳೆಕಾಳುಗಳಲ್ಲಿ ಮೇಲ್ಮುಖ ಚಲನೆ ತೋರಿಸುತ್ತಿವೆ. ಉತ್ತಮ ಮಾರಾಟದ ಅವಕಾಶಗಳಿಗಾಗಿ ಸ್ಥಳೀಯ ಮಂಡಿ ಬೆಲೆಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ."
        },
        bn: {
          recommendation: "বর্তমান বাজার প্রবণতার ভিত্তিতে, এখন আপনার উৎপাদন ধরে রাখার কথা বিবেচনা করুন।",
          analysis: "বাজার পরিস্থিতি মিশ্র সংকেত দেখাচ্ছে। গম এবং চালের দাম স্থিতিশীল, তবে ডালে ঊর্ধ্বমুখী গতি দেখা যাচ্ছে। সর্বোত্তম বিক্রয়ের সুযোগের জন্য স্থানীয় মণ্ডির দাম পর্যবেক্ষণ করুন।"
        },
        bho: {
          recommendation: "मौजूदा बाजार के रुझान के आधार पर, अभी अपनी उपज रखे के बारे में सोचीं।",
          analysis: "बाजार की स्थिति मिलावट संकेत दे रही बा। गेहूं आ चावल के दाम स्थिर बा, जबकि दाल में ऊपर की तरफ गति देखा जा रहा बा। सबसे अच्छा बिक्री के मौके के लिए स्थानीय मंडी के दाम की निगरानी करीं।"
        }
      };

      const response = fallbackResponses[language as keyof typeof fallbackResponses] || fallbackResponses.en;
      
      return {
        recommendation: response.recommendation,
        analysis: response.analysis,
      };
    }
  }
);
