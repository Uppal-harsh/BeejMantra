import { NextRequest, NextResponse } from 'next/server';

// Mock data for testing when scraping fails
const mockData = [
  {
    timestamp: new Date().toLocaleString(),
    commodity: 'Wheat',
    location: 'Delhi',
    time: '14:30',
    price: '2,450',
    change: '+25'
  },
  {
    timestamp: new Date().toLocaleString(),
    commodity: 'Rice',
    location: 'Mumbai',
    time: '14:30',
    price: '3,200',
    change: '-15'
  },
  {
    timestamp: new Date().toLocaleString(),
    commodity: 'Maize',
    location: 'Karnataka',
    time: '14:30',
    price: '1,850',
    change: '+10'
  },
  {
    timestamp: new Date().toLocaleString(),
    commodity: 'Pulses',
    location: 'Rajasthan',
    time: '14:30',
    price: '4,100',
    change: '+30'
  },
  {
    timestamp: new Date().toLocaleString(),
    commodity: 'Cotton',
    location: 'Gujarat',
    time: '14:30',
    price: '6,750',
    change: '-45'
  }
];

export async function GET(request: NextRequest) {
  try {
    const apiKey = process.env.MARKET_DATA_API_KEY;

    // 1. Try to fetch from official Data.gov.in AGMARKNET API
    if (apiKey && apiKey !== 'your-market-data-api-key') {
      try {
        const url = new URL('https://api.data.gov.in/resource/9ef842f8-24b4-4749-8c46-97ef4d317424');
        url.searchParams.set('api-key', apiKey);
        url.searchParams.set('format', 'json');
        url.searchParams.set('limit', '50');

        const response = await fetch(url.toString(), {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
          next: { revalidate: 3600 } // Cache results for 1 hour
        });

        if (response.ok) {
          const result = await response.json();
          if (result && Array.isArray(result.records) && result.records.length > 0) {
            const mappedData = result.records.map((record: any) => {
              const modalPriceStr = record.modal_price || '0';
              const modalPriceVal = parseFloat(modalPriceStr);
              const displayPrice = isNaN(modalPriceVal) ? modalPriceStr : modalPriceVal.toLocaleString('en-IN');
              
              return {
                timestamp: new Date().toLocaleString(),
                commodity: record.commodity || 'Unknown',
                location: `${record.market || ''}${record.district ? ', ' + record.district : ''}`,
                time: record.arrival_date || new Date().toLocaleDateString(),
                price: displayPrice,
                change: '0' // Flat change as daily data does not supply historical delta
              };
            });

            return NextResponse.json({
              success: true,
              data: mappedData,
              timestamp: new Date().toISOString(),
              count: mappedData.length,
              source: 'Data.gov.in (AGMARKNET)'
            });
          }
        }
      } catch (apiError) {
        console.error('Data.gov.in API fetch failed, proceeding to scraper:', (apiError as any).message);
      }
    }

    // 2. Fallback to Puppeteer web scraping
    let puppeteer: any;
    try {
      // Dynamic import to avoid build-time issues
      if (!puppeteer) {
        puppeteer = await import('puppeteer');
      }

      const browser = await puppeteer.default.launch({
        headless: 'new',
        args: [
          '--no-sandbox', 
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-gpu'
        ],
      });

      const page = await browser.newPage();
      
      // Set a reasonable timeout
      page.setDefaultTimeout(30000);
      
      await page.goto('https://www.ncdex.com/markets/livespot', {
        waitUntil: 'networkidle2',
      });

      // Wait for the table to load
      await page.waitForSelector('table.table', { timeout: 10000 });

      const data = await page.evaluate(() => {
        const rows = Array.from(document.querySelectorAll('table.table tbody tr'));
        return rows.map(row => {
          const cols = row.querySelectorAll('td');
          return {
            timestamp: new Date().toLocaleString(),
            commodity: cols[0]?.innerText.trim() || '',
            location: cols[2]?.innerText.trim() || '',
            time: cols[3]?.innerText.trim() || '',
            price: cols[4]?.innerText.trim() || '',
            change: cols[5]?.innerText.trim() || ''
          };
        }).filter(item => item.commodity && item.price); // Filter out empty rows
      });

      await browser.close();

      // If we got real data, return it
      if (data && data.length > 0) {
        return NextResponse.json({
          success: true,
          data,
          timestamp: new Date().toISOString(),
          count: data.length,
          source: 'NCDEX Live Scraper'
        });
      }
    } catch (scrapingError) {
      console.log('Scraping failed, using mock data:', (scrapingError as any).message);
    }

    // 3. Ultimate fallback to local mock data
    return NextResponse.json({
      success: true,
      data: mockData,
      timestamp: new Date().toISOString(),
      count: mockData.length,
      source: 'Mock Data (API & Scraper Offline)'
    });

  } catch (error) {
    console.error('Market prices API error:', error);
    
    // Return mock data even on complete failure
    return NextResponse.json({
      success: true,
      data: mockData,
      timestamp: new Date().toISOString(),
      count: mockData.length,
      source: 'Mock Data (Error Fallback)'
    });
  }
}
