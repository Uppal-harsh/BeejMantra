'use server';

/**
 * @fileOverview Recommends crops based on user input with Groq, Gemini, and Regional Agronomy Engine.
 *
 * - recommendCrops - A function that handles the crop recommendation process.
 * - RecommendCropsInput - The input type for the recommendCrops function.
 * - RecommendCropsOutput - The return type for the recommendCrops function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { isGroqConfigured, groqClient } from '@/ai/groq';

const RecommendCropsInputSchema = z.object({
  location: z.string().describe("The user's location (e.g., district, state)."),
  farmType: z.enum(['irrigated', 'rainfed']).describe('The type of farm (irrigated or rainfed/dry).'),
  landSize: z.string().describe('The size of the land (e.g., "2 acres").'),
  soilType: z.string().optional().describe('The type of soil (e.g., "black soil", "red soil").'),
  waterSource: z.string().optional().describe('The primary source of water (e.g., "borewell", "canal", "rain-only").'),
  season: z.string().optional().describe('The current farming season (e.g., "Kharif", "Rabi").'),
  previousCrop: z.string().optional().describe('The crop grown in the previous season.'),
  budget: z.string().optional().describe('The approximate budget for cultivation.'),
  cropPreference: z.string().optional().describe('Any specific crop preference the user might have.'),
  language: z.string().describe('The language for the response (e.g., "en", "hi", "kn", "bn", "bho", "pa").'),
});
export type RecommendCropsInput = z.infer<typeof RecommendCropsInputSchema>;

const RecommendedCropSchema = z.object({
  cropName: z.string().describe("The name of the recommended crop."),
  icon: z.enum(['Leaf', 'Sprout', 'Carrot', 'Wheat', 'Grape']).describe("A relevant Lucide icon name."),
  plantingDates: z.string().describe("Recommended planting date range."),
  reasoning: z.string().describe("Why this crop is a good choice."),
  benefits: z.array(z.string()).min(2).max(3).describe("Key benefits."),
  imageHint: z.string().describe("Keywords for crop image."),
});

const RecommendCropsOutputSchema = z.object({
  recommendations: z.array(RecommendedCropSchema).length(3).describe('A list of exactly 3 recommended crops.'),
});
export type RecommendCropsOutput = z.infer<typeof RecommendCropsOutputSchema>;

// Dynamic Regional Agronomy Rule Engine for smart fallback
function getDynamicAgronomyRecommendations(input: RecommendCropsInput): RecommendCropsOutput {
  const season = (input.season || "kharif").toLowerCase();
  const isIrrigated = input.farmType === 'irrigated';
  const lang = input.language || 'en';

  if (season.includes("rabi") || season.includes("winter") || season.includes("रबी")) {
    return {
      recommendations: [
        {
          cropName: lang === 'hi' ? "उन्नत गेहूं (HD-3086 / PBW-550)" : lang === 'pa' ? "ਉੱਨਤ ਕਣਕ (PBW-550 / HD-3086)" : "High-Yield Wheat (HD-3086)",
          icon: "Wheat",
          plantingDates: "Oct 25 - Nov 20",
          reasoning: lang === 'hi' 
            ? `${input.location} में रबी मौसम के लिए सबसे भरोसेमंद फसल, सरकारी समर्थन मूल्य (MSP) पर सीधी खरीद उपलब्ध।`
            : lang === 'pa'
            ? `${input.location} ਵਿੱਚ ਹਾੜ੍ਹੀ ਦੀ ਸਭ ਤੋਂ ਲਾਹੇਵੰਦ ਫ਼ਸਲ, ਮੰਡੀ ਵਿੱਚ ਪੱਕੀ ਖਰੀਦ।`
            : `Guaranteed government MSP procurement and ideal climate fit for ${input.location}.`,
          benefits: [
            lang === 'hi' ? "सरकारी एमएसपी ₹2,425/क्विंटल की गारंटी" : "Guaranteed MSP ₹2,425/quintal",
            lang === 'hi' ? "दोमट मिट्टी में 22-25 क्विंटल प्रति एकड़ पैदावार" : "High yield of 22-25 quintals/acre",
            lang === 'hi' ? "स्थिर बाजार मांग और कम जोखिम" : "Stable market demand and low risk"
          ],
          imageHint: "wheat golden field"
        },
        {
          cropName: lang === 'hi' ? "पूसा सरसों (Mustard / Sarson)" : lang === 'pa' ? "ਪੂਸਾ ਸਰ੍ਹੋਂ (Mustard / Sarson)" : "Pusa Mustard (Brassica juncea)",
          icon: "Leaf",
          plantingDates: "Oct 1 - Oct 25",
          reasoning: lang === 'hi'
            ? "कम पानी और कम लागत में बंपर मुनाफा देने वाली नकदी फसल, गेहूं के साथ फसल चक्र के लिए सर्वोत्तम।"
            : "High-margin cash crop requiring 60% less water than cereals, perfect for rotation.",
          benefits: [
            lang === 'hi' ? "कम सिंचाई (केवल 2-3 पानी की आवश्यकता)" : "Low water requirement (only 2-3 irrigations)",
            lang === 'hi' ? "₹5,950/क्विंटल का ऊंचा सरकारी समर्थन मूल्य" : "High MSP support of ₹5,950/quintal",
            lang === 'hi' ? "कम लागत में ₹40,000+ प्रति एकड़ शुद्ध मुनाफा" : "Net profit of ₹40,000+/acre with low input cost"
          ],
          imageHint: "mustard yellow blossom"
        },
        {
          cropName: lang === 'hi' ? "देसी चना / काबुली चना (Chickpea)" : lang === 'pa' ? "ਦੇਸੀ ਛੋਲੇ (Gram / Chickpea)" : "Desi Chickpea / Gram",
          icon: "Sprout",
          plantingDates: "Oct 15 - Nov 10",
          reasoning: lang === 'hi'
            ? "दलहनी फसल जो मिट्टी में नाइट्रोजन जोड़कर भूमि की उपजाऊ शक्ति बढ़ाती है और रासायनिक खाद का खर्च घटाती है।"
            : "Legume crop that fixes atmospheric nitrogen, restoring soil fertility and lowering fertilizer bills.",
          benefits: [
            lang === 'hi' ? "मिट्टी की उर्वरता और नाइट्रोजन में भारी सुधार" : "Rejuvenates soil health through biological nitrogen fixation",
            lang === 'hi' ? "मंडी में हमेशा मजबूत और स्थिर मांग" : "Resilient commodity prices in local APMC mandis",
            lang === 'hi' ? "कम पानी और सूखे के प्रति अत्यधिक सहनशील" : "Highly drought tolerant"
          ],
          imageHint: "chickpea crop farm"
        }
      ]
    };
  }

  // Kharif / Summer Season
  if (isIrrigated) {
    return {
      recommendations: [
        {
          cropName: lang === 'hi' ? "बासमती / उन्नत धान (Paddy PB-1509)" : lang === 'pa' ? "ਬਾਸਮਤੀ ਝੋਨਾ (Paddy PB-1509)" : "Basmati Paddy (Pusa 1509/1121)",
          icon: "Sprout",
          plantingDates: "June 15 - July 15",
          reasoning: lang === 'hi'
            ? `${input.location} में नहरी सिंचाई और दोमट मिट्टी के लिए सबसे उपयुक्त और अधिक कीमत देने वाली खरीफ फसल।`
            : lang === 'pa'
            ? `ਨਹਿਰੀ ਸਿੰਚਾਈ ਅਤੇ ਉਪਜਾਊ ਜ਼ਮੀਨ ਲਈ ਸਭ ਤੋਂ ਵੱਧ ਮੁਨਾਫ਼ਾ ਦੇਣ ਵਾਲੀ ਬਾਸਮਤੀ ਕਿਸਮ।`
            : `High commercial realization in local and export mandis with available canal/borewell irrigation in ${input.location}.`,
          benefits: [
            lang === 'hi' ? "बाजार में ₹3,500-₹4,200/क्विंटल तक ऊंचा प्रीमियम" : "Premium market price (₹3,500 - ₹4,200/quintal)",
            lang === 'hi' ? "120 दिन की कम अवधि वाली उन्नत किस्म" : "Early maturing 120-day cycle saving irrigation costs",
            lang === 'hi' ? "गेहूं की समय पर बुवाई के लिए खेत जल्दी खाली" : "Clears field on time for winter wheat sowing"
          ],
          imageHint: "rice paddy lush field"
        },
        {
          cropName: lang === 'hi' ? "बीटी कपास / नरमा (Cotton)" : lang === 'pa' ? "ਬੀਟੀ ਨਰਮਾ / ਕਪਾਹ (BT Cotton)" : "Hybrid BT Cotton",
          icon: "Leaf",
          plantingDates: "May 1 - May 31",
          reasoning: lang === 'hi'
            ? "मजबूत औद्योगिक मांग वाली प्रमुख नकदी फसल जो दोमट और उचित जल निकासी वाली भूमि में भरपूर लाभ देती है।"
            : "High-value commercial cash crop with consistent textile mill procurement in North India.",
          benefits: [
            lang === 'hi' ? "₹7,500+/क्विंटल का आकर्षक बाजार भाव" : "Attractive market realization (₹7,500+/quintal)",
            lang === 'hi' ? "गुलाबी सुंडी प्रतिरोधी उन्नत किस्में उपलब्ध" : "Pest-tolerant certified hybrid varieties",
            lang === 'hi' ? "प्रति एकड़ ₹50,000+ का शुद्ध लाभ" : "High return on investment (₹50,000+/acre)"
          ],
          imageHint: "cotton field white bolls"
        },
        {
          cropName: lang === 'hi' ? "हाइब्रिड मक्का (Hybrid Maize / Corn)" : lang === 'pa' ? "ਹਾਈਬ੍ਰਿਡ ਮੱਕੀ (Maize / Corn)" : "Hybrid Maize / Sweet Corn",
          icon: "Wheat",
          plantingDates: "June 20 - July 20",
          reasoning: lang === 'hi'
            ? "धान की तुलना में 70% कम पानी और पोल्ट्री/एथेनॉल उद्योगों से लगातार बढ़ती मांग वाली सुरक्षित फसल।"
            : "Consumes 70% less water than paddy with skyrocketing demand from feed and food industries.",
          benefits: [
            lang === 'hi' ? "90-100 दिन में बंपर पैदावार (30 क्विंटल/एकड़)" : "Fast 90-100 day cycle yielding 30+ quintals/acre",
            lang === 'hi' ? "धान से 70% कम पानी और कम बिजली खर्च" : "Saves 70% groundwater compared to traditional rice",
            lang === 'hi' ? "फसल कटाई के तुरंत बाद आलू या सरसों की बुवाई संभव" : "Leaves soil rich for winter vegetable or mustard rotation"
          ],
          imageHint: "maize corn field"
        }
      ]
    };
  }

  // Rainfed Kharif
  return {
    recommendations: [
      {
        cropName: lang === 'hi' ? "संकर बाजरा (Hybrid Pearl Millet)" : lang === 'pa' ? "ਹਾਈਬ੍ਰਿਡ ਬਾਜਰਾ (Bajra)" : "Hybrid Pearl Millet (Bajra)",
        icon: "Wheat",
        plantingDates: "July 1 - July 25",
        reasoning: lang === 'hi'
          ? "कम बारिश और सूखे के प्रति सबसे मजबूत फसल, पशु चारे और अनाज दोनों में दोहरा मुनाफा।"
          : "Highly resilient to erratic rainfall with dual revenue from grain and nutritious fodder.",
      benefits: [
        lang === 'hi' ? "अत्यधिक सूखा प्रतिरोधी और न्यूनतम लागत" : "Survives harsh dry spells with minimal fertilizer",
        lang === 'hi' ? "सरकारी एमएसपी ₹2,625/क्विंटल पर खरीद" : "MSP backing at ₹2,625/quintal",
        lang === 'hi' ? "75-80 दिनों में पककर तैयार" : "Rapid harvest in 75-80 days"
      ],
      imageHint: "pearl millet field"
    },
    {
      cropName: lang === 'hi' ? "उड़द / मूंग (Moong / Black Gram)" : lang === 'pa' ? "ਮੂੰਗੀ / ਮਾਂਹ (Moong Dal)" : "Short-Duration Green Gram (Moong)",
      icon: "Sprout",
      plantingDates: "June 25 - July 20",
      reasoning: lang === 'hi'
        ? "कम समय (60 दिन) में तैयार होने वाली दलहनी फसल जो मिट्टी में 30-40 किलो नाइट्रोजन जोड़ती है।"
        : "60-day catch crop that fixes nitrogen, generating fast cash flow with low water needs.",
      benefits: [
        lang === 'hi' ? "₹8,500+/क्विंटल का सबसे ऊंचा दाल बाजार भाव" : "Highest pulse price in mandis (₹8,500+/quintal)",
        lang === 'hi' ? "मात्र 60 दिनों में पूरी फसल तैयार" : "Ultra-fast harvest in just 60 days",
        lang === 'hi' ? "अगली फसल के लिए यूरिया की 25% बचत" : "Reduces next crop's chemical fertilizer costs by 25%"
      ],
      imageHint: "green gram moong farm"
    },
    {
      cropName: lang === 'hi' ? "ग्वार (Cluster Bean / Guar)" : lang === 'pa' ? "ਗੁਆਰਾ (Guar)" : "Commercial Cluster Bean (Guar)",
      icon: "Leaf",
      plantingDates: "July 10 - July 31",
      reasoning: lang === 'hi'
        ? "सूखे क्षेत्रों के लिए वरदान नकदी फसल जिसकी अंतर्राष्ट्रीय बाजार में भारी औद्योगिक मांग है।"
        : "Hardy industrial cash crop with strong gum export demand and zero irrigation requirement.",
      benefits: [
        lang === 'hi' ? "कम बारिश में भी शानदार उत्पादन" : "Thrives in rain-dependent arid soils",
        lang === 'hi' ? "ग्वार गम की भारी निर्यात मांग" : "Lucrative industrial export demand",
        lang === 'hi' ? "न्यूनतम कीटनाशक और खाद की आवश्यकता" : "Near-zero pesticide and minimal fertilizer input"
      ],
      imageHint: "cluster bean farm"
    }
  ]
};
}

export async function recommendCrops(input: RecommendCropsInput): Promise<RecommendCropsOutput> {
  const { location, farmType, landSize, soilType, waterSource, season, previousCrop, budget, cropPreference, language } = input;

  // 1. Try Groq Cloud (Ultra-Fast Llama 3.3 70B with JSON Mode)
  if (isGroqConfigured && groqClient) {
    try {
      const promptText = `You are a chief agronomist in India. Recommend exactly 3 highly profitable and realistic crops for a farmer in India.
Farmer Details:
- Location: ${location}
- Farm Type: ${farmType} (${farmType === 'irrigated' ? 'Ample water/irrigation available' : 'Rainfed / dependent on monsoon'})
- Land Size: ${landSize}
- Soil Type: ${soilType || 'Loamy / Alluvial'}
- Water Source: ${waterSource || 'Canal / Tube-well'}
- Season: ${season || 'Kharif'}
- Previous Crop: ${previousCrop || 'None'} (Recommend smart rotation benefits)
- Budget: ${budget || 'Standard'}
- Preference: ${cropPreference || 'None'}
- Language: ${language}

CRITICAL RULES:
1. All text (cropName, reasoning, benefits) MUST be written in the farmer's language: "${language}".
2. Recommendations must be varied (not generic repeats) and specifically suited for ${location} in ${season} season with ${farmType} farming.
3. Output MUST be valid JSON strictly matching this schema:
{
  "recommendations": [
    {
      "cropName": "Crop Name",
      "icon": "Leaf" or "Sprout" or "Carrot" or "Wheat" or "Grape",
      "plantingDates": "e.g. June 15 - July 15",
      "reasoning": "1 clear sentence explaining why this crop is ideal for their soil, water, and season.",
      "benefits": ["Distinct Benefit 1", "Distinct Benefit 2", "Distinct Benefit 3"],
      "imageHint": "crop keyword"
    }
  ]
}`;

      const completion = await groqClient.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "user", content: promptText }],
        temperature: 0.3,
        response_format: { type: "json_object" },
      });

      const parsed = JSON.parse(completion.choices[0]?.message?.content || "{}");
      if (parsed.recommendations && Array.isArray(parsed.recommendations) && parsed.recommendations.length === 3) {
        return parsed as RecommendCropsOutput;
      }
    } catch (groqErr) {
      console.warn("Groq crop recommendation failed, falling back to Genkit/Agronomy engine:", groqErr);
    }
  }

  // 2. Try Gemini via Genkit
  try {
    const recommendCropsPrompt = ai.definePrompt({
      name: 'recommendCropsPromptDynamic',
      input: { schema: RecommendCropsInputSchema },
      output: { schema: RecommendCropsOutputSchema },
      prompt: `You are an expert agricultural advisor in India. Recommend exactly 3 profitable crops for a farmer in {{location}} for season {{season}}. Preferred language is {{language}}.`,
    });
    const { output } = await recommendCropsPrompt(input);
    if (output && Array.isArray(output.recommendations) && output.recommendations.length === 3) {
      return output;
    }
  } catch (geminiErr) {
    console.warn("Genkit flow failed, using dynamic agronomy engine:", geminiErr);
  }

  // 3. Guaranteed Dynamic Regional Agronomy Engine
  return getDynamicAgronomyRecommendations(input);
}
