module.exports = {

"[project]/.next-internal/server/app/api/market-prices/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@opentelemetry/api", () => require("@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/api/market-prices/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
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
async function GET(request) {
    try {
        // Try to use Puppeteer for real scraping
        let puppeteer;
        try {
            // Dynamic import to avoid build-time issues
            if (!puppeteer) {
                puppeteer = await __turbopack_context__.r("[externals]/puppeteer [external] (puppeteer, esm_import, async loader)")(__turbopack_context__.i);
            }
            const browser = await puppeteer.default.launch({
                headless: 'new',
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                    '--disable-dev-shm-usage',
                    '--disable-gpu'
                ]
            });
            const page = await browser.newPage();
            // Set a reasonable timeout
            page.setDefaultTimeout(30000);
            await page.goto('https://www.ncdex.com/markets/livespot', {
                waitUntil: 'networkidle2'
            });
            // Wait for the table to load
            await page.waitForSelector('table.table', {
                timeout: 10000
            });
            const data = await page.evaluate(()=>{
                const rows = Array.from(document.querySelectorAll('table.table tbody tr'));
                return rows.map((row)=>{
                    const cols = row.querySelectorAll('td');
                    return {
                        timestamp: new Date().toLocaleString(),
                        commodity: cols[0]?.innerText.trim() || '',
                        location: cols[2]?.innerText.trim() || '',
                        time: cols[3]?.innerText.trim() || '',
                        price: cols[4]?.innerText.trim() || '',
                        change: cols[5]?.innerText.trim() || ''
                    };
                }).filter((item)=>item.commodity && item.price); // Filter out empty rows
            });
            await browser.close();
            // If we got real data, return it
            if (data && data.length > 0) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: true,
                    data,
                    timestamp: new Date().toISOString(),
                    count: data.length,
                    source: 'NCDEX Live'
                });
            }
        } catch (scrapingError) {
            console.log('Scraping failed, using mock data:', scrapingError.message);
        }
        // Fallback to mock data
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: mockData,
            timestamp: new Date().toISOString(),
            count: mockData.length,
            source: 'Mock Data (Scraping Unavailable)'
        });
    } catch (error) {
        console.error('Market prices API error:', error);
        // Return mock data even on complete failure
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: mockData,
            timestamp: new Date().toISOString(),
            count: mockData.length,
            source: 'Mock Data (Error Fallback)'
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__0c0e81d4._.js.map