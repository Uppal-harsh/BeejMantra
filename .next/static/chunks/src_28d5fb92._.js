(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:8972b9 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"404641a6b6bd0769505d1a3df704c25ba62551fba3":"getWeatherForecast"},"src/ai/flows/get-weather-forecast.ts",""] */ __turbopack_context__.s({
    "getWeatherForecast": (()=>getWeatherForecast)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getWeatherForecast = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("404641a6b6bd0769505d1a3df704c25ba62551fba3", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getWeatherForecast"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2V0LXdlYXRoZXItZm9yZWNhc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHNlcnZlcic7XG5cbi8qKlxuICogQGZpbGVPdmVydmlldyBQcm92aWRlcyB3ZWF0aGVyIGZvcmVjYXN0IGRhdGEgZm9yIGEgZ2l2ZW4gY2l0eS5cbiAqXG4gKiAtIGdldFdlYXRoZXJGb3JlY2FzdCAtIEEgZnVuY3Rpb24gdGhhdCBmZXRjaGVzIGN1cnJlbnQgd2VhdGhlciBhbmQgYSA3LWRheSBmb3JlY2FzdC5cbiAqIC0gR2V0V2VhdGhlckZvcmVjYXN0SW5wdXQgLSBUaGUgaW5wdXQgdHlwZSBmb3IgdGhlIGdldFdlYXRoZXJGb3JlY2FzdCBmdW5jdGlvbi5cbiAqIC0gR2V0V2VhdGhlckZvcmVjYXN0T3V0cHV0IC0gVGhlIHJldHVybiB0eXBlIGZvciB0aGUgZ2V0V2VhdGhlckZvcmVjYXN0IGZ1bmN0aW9uLlxuICovXG5cbmltcG9ydCB7IGFpIH0gZnJvbSAnQC9haS9nZW5raXQnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ2dlbmtpdCc7XG5cbmNvbnN0IEdldFdlYXRoZXJGb3JlY2FzdElucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBjaXR5OiB6LnN0cmluZygpLmRlc2NyaWJlKCdUaGUgY2l0eSBmb3Igd2hpY2ggdG8gZ2V0IHRoZSB3ZWF0aGVyIGZvcmVjYXN0LicpLFxufSk7XG5leHBvcnQgdHlwZSBHZXRXZWF0aGVyRm9yZWNhc3RJbnB1dCA9IHouaW5mZXI8XG4gIHR5cGVvZiBHZXRXZWF0aGVyRm9yZWNhc3RJbnB1dFNjaGVtYVxuPjtcblxuY29uc3QgRGFpbHlGb3JlY2FzdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZGF5OiB6LnN0cmluZygpLmRlc2NyaWJlKCdUaGUgZGF5IG9mIHRoZSB3ZWVrIChlLmcuLCBcIlR1ZXNkYXlcIikuJyksXG4gIHRlbXA6IHouc3RyaW5nKCkuZGVzY3JpYmUoJ1RoZSB0ZW1wZXJhdHVyZSAoZS5nLiwgXCIzMsKwQ1wiKS4nKSxcbiAgY29uZGl0aW9uOiB6LnN0cmluZygpLmRlc2NyaWJlKCdUaGUgd2VhdGhlciBjb25kaXRpb24gbG9jYWxpemF0aW9uIGtleSAoZS5nLiwgXCJzdW5ueVwiLCBcInBhcnRseUNsb3VkeVwiKS4nKSxcbiAgaWNvbjogei5lbnVtKFsnQ2xvdWRTdW4nLCAnU3VuJywgJ0Nsb3VkUmFpbicsICdDbG91ZCcsICdXaW5kJywgJ0Ryb3BsZXRzJ10pLmRlc2NyaWJlKCdBbiBpY29uIHJlcHJlc2VudGluZyB0aGUgY29uZGl0aW9uLicpLFxufSk7XG5cbmNvbnN0IEdldFdlYXRoZXJGb3JlY2FzdE91dHB1dFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgY2l0eTogei5zdHJpbmcoKS5kZXNjcmliZSgnVGhlIGNpdHkgb2YgdGhlIGZvcmVjYXN0LicpLFxuICBjdXJyZW50OiB6Lm9iamVjdCh7XG4gICAgdGVtcGVyYXR1cmU6IHouc3RyaW5nKCkuZGVzY3JpYmUoJ1RoZSBjdXJyZW50IHRlbXBlcmF0dXJlLicpLFxuICAgIGNvbmRpdGlvbjogei5zdHJpbmcoKS5kZXNjcmliZSgnVGhlIGN1cnJlbnQgd2VhdGhlciBjb25kaXRpb24gbG9jYWxpemF0aW9uIGtleS4nKSxcbiAgICB3aW5kOiB6LnN0cmluZygpLmRlc2NyaWJlKCdUaGUgY3VycmVudCB3aW5kIHNwZWVkLicpLFxuICAgIGh1bWlkaXR5OiB6LnN0cmluZygpLmRlc2NyaWJlKCdUaGUgY3VycmVudCBodW1pZGl0eSBsZXZlbC4nKSxcbiAgICBpY29uOiB6LmVudW0oWydDbG91ZFN1bicsICdTdW4nLCAnQ2xvdWRSYWluJywgJ0Nsb3VkJywgJ1dpbmQnLCAnRHJvcGxldHMnXSkuZGVzY3JpYmUoJ0FuIGljb24gcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IGNvbmRpdGlvbi4nKSxcbiAgfSksXG4gIGZvcmVjYXN0OiB6LmFycmF5KERhaWx5Rm9yZWNhc3RTY2hlbWEpLmxlbmd0aCg3KS5kZXNjcmliZSgnQSA3LWRheSB3ZWF0aGVyIGZvcmVjYXN0LicpLFxufSk7XG5leHBvcnQgdHlwZSBHZXRXZWF0aGVyRm9yZWNhc3RPdXRwdXQgPSB6LmluZmVyPFxuICB0eXBlb2YgR2V0V2VhdGhlckZvcmVjYXN0T3V0cHV0U2NoZW1hXG4+O1xuXG4vLyBNYXAgY29uZGl0aW9uIGtleXMgdG8gaWNvbnNcbmNvbnN0IGNvbmRpdGlvbk1hcDogUmVjb3JkPHN0cmluZywgJ0Nsb3VkU3VuJyB8ICdTdW4nIHwgJ0Nsb3VkUmFpbicgfCAnQ2xvdWQnPiA9IHtcbiAgICBzdW5ueTogJ1N1bicsXG4gICAgcGFydGx5Q2xvdWR5OiAnQ2xvdWRTdW4nLFxuICAgIGNsb3VkeTogJ0Nsb3VkJyxcbiAgICBzaG93ZXJzOiAnQ2xvdWRSYWluJyxcbiAgICByYWlueTogJ0Nsb3VkUmFpbicsXG4gICAgaHVtaWRBbmRDbG91ZHk6ICdDbG91ZCcsXG4gICAgdGh1bmRlcnN0b3JtczogJ0Nsb3VkUmFpbicsXG59O1xuXG5cbmNvbnN0IG1vY2tXZWF0aGVyRGF0YTogUmVjb3JkPHN0cmluZywgR2V0V2VhdGhlckZvcmVjYXN0T3V0cHV0PiA9IHtcbiAgcHVuZToge1xuICAgIGNpdHk6ICdQdW5lJyxcbiAgICBjdXJyZW50OiB7IHRlbXBlcmF0dXJlOiAnMzHCsEMnLCBjb25kaXRpb246ICdwYXJ0bHlDbG91ZHknLCB3aW5kOiAnMTIga20vaCcsIGh1bWlkaXR5OiAnNTUlJywgaWNvbjogJ0Nsb3VkU3VuJyB9LFxuICAgIGZvcmVjYXN0OiBbXG4gICAgICB7IGRheTogJ1RvZGF5JywgdGVtcDogJzMxwrBDJywgY29uZGl0aW9uOiAncGFydGx5Q2xvdWR5JywgaWNvbjogJ0Nsb3VkU3VuJyB9LFxuICAgICAgeyBkYXk6ICdUdWVzZGF5JywgdGVtcDogJzMywrBDJywgY29uZGl0aW9uOiAnc3VubnknLCBpY29uOiAnU3VuJyB9LFxuICAgICAgeyBkYXk6ICdXZWRuZXNkYXknLCB0ZW1wOiAnMzDCsEMnLCBjb25kaXRpb246ICdyYWlueScsIGljb246ICdDbG91ZFJhaW4nIH0sXG4gICAgICB7IGRheTogJ1RodXJzZGF5JywgdGVtcDogJzMzwrBDJywgY29uZGl0aW9uOiAnc3VubnknLCBpY29uOiAnU3VuJyB9LFxuICAgICAgeyBkYXk6ICdGcmlkYXknLCB0ZW1wOiAnMjnCsEMnLCBjb25kaXRpb246ICdzaG93ZXJzJywgaWNvbjogJ0Nsb3VkUmFpbicgfSxcbiAgICAgIHsgZGF5OiAnU2F0dXJkYXknLCB0ZW1wOiAnMzHCsEMnLCBjb25kaXRpb246ICdjbG91ZHknLCBpY29uOiAnQ2xvdWQnIH0sXG4gICAgICB7IGRheTogJ1N1bmRheScsIHRlbXA6ICczMsKwQycsIGNvbmRpdGlvbjogJ3BhcnRseUNsb3VkeScsIGljb246ICdDbG91ZFN1bicgfSxcbiAgICBdLFxuICB9LFxuICBtdW1iYWk6IHtcbiAgICBjaXR5OiAnTXVtYmFpJyxcbiAgICBjdXJyZW50OiB7IHRlbXBlcmF0dXJlOiAnMzLCsEMnLCBjb25kaXRpb246ICdodW1pZEFuZENsb3VkeScsIHdpbmQ6ICcxOCBrbS9oJywgaHVtaWRpdHk6ICc3NSUnLCBpY29uOiAnQ2xvdWQnIH0sXG4gICAgZm9yZWNhc3Q6IFtcbiAgICAgIHsgZGF5OiAnVG9kYXknLCB0ZW1wOiAnMzLCsEMnLCBjb25kaXRpb246ICdodW1pZEFuZENsb3VkeScsIGljb246ICdDbG91ZCcgfSxcbiAgICAgIHsgZGF5OiAnVHVlc2RheScsIHRlbXA6ICczM8KwQycsIGNvbmRpdGlvbjogJ3RodW5kZXJzdG9ybXMnLCBpY29uOiAnQ2xvdWRSYWluJyB9LFxuICAgICAgeyBkYXk6ICdXZWRuZXNkYXknLCB0ZW1wOiAnMzHCsEMnLCBjb25kaXRpb246ICdjbG91ZHknLCBpY29uOiAnQ2xvdWQnIH0sXG4gICAgICB7IGRheTogJ1RodXJzZGF5JywgdGVtcDogJzM0wrBDJywgY29uZGl0aW9uOiAnc3VubnknLCBpY29uOiAnU3VuJyB9LFxuICAgICAgeyBkYXk6ICdGcmlkYXknLCB0ZW1wOiAnMzLCsEMnLCBjb25kaXRpb246ICdzaG93ZXJzJywgaWNvbjogJ0Nsb3VkUmFpbicgfSxcbiAgICAgIHsgZGF5OiAnU2F0dXJkYXknLCB0ZW1wOiAnMzLCsEMnLCBjb25kaXRpb246ICdjbG91ZHknLCBpY29uOiAnQ2xvdWQnIH0sXG4gICAgICB7IGRheTogJ1N1bmRheScsIHRlbXA6ICczM8KwQycsIGNvbmRpdGlvbjogJ3BhcnRseUNsb3VkeScsIGljb246ICdDbG91ZFN1bicgfSxcbiAgICBdLFxuICB9LFxufTtcblxuY29uc3QgZ2VuZXJhdGVSYW5kb21Gb3JlY2FzdCA9IChjaXR5OiBzdHJpbmcpOiBHZXRXZWF0aGVyRm9yZWNhc3RPdXRwdXQgPT4ge1xuICBjb25zdCBjb25kaXRpb25zID0gT2JqZWN0LmtleXMoY29uZGl0aW9uTWFwKTtcbiAgY29uc3QgcmFuZG9tQ29uZGl0aW9uS2V5ID0gKCkgPT4gY29uZGl0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb25kaXRpb25zLmxlbmd0aCldO1xuICBcbiAgY29uc3QgZm9yZWNhc3Q6IHouaW5mZXI8dHlwZW9mIERhaWx5Rm9yZWNhc3RTY2hlbWE+W10gPSBbXTtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgY29uc3QgZnV0dXJlRGF0ZSA9IG5ldyBEYXRlKHRvZGF5KTtcbiAgICBmdXR1cmVEYXRlLnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgaSk7XG4gICAgXG4gICAgY29uc3QgZGF5TmFtZSA9IGkgPT09IDAgXG4gICAgICA/ICdUb2RheScgXG4gICAgICA6IGZ1dHVyZURhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHsgd2Vla2RheTogJ2xvbmcnIH0pO1xuXG4gICAgY29uc3QgY29uZGl0aW9uID0gcmFuZG9tQ29uZGl0aW9uS2V5KCk7XG4gICAgY29uc3QgaWNvbiA9IGNvbmRpdGlvbk1hcFtjb25kaXRpb25dO1xuICAgIFxuICAgIGZvcmVjYXN0LnB1c2goe1xuICAgICAgZGF5OiBkYXlOYW1lLFxuICAgICAgdGVtcDogYCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTUpICsgMjB9wrBDYCxcbiAgICAgIGNvbmRpdGlvbixcbiAgICAgIGljb24sXG4gICAgfSk7XG4gIH1cbiAgXG4gIGNvbnN0IGN1cnJlbnRDb25kaXRpb25LZXkgPSBmb3JlY2FzdFswXS5jb25kaXRpb247XG4gIGNvbnN0IGN1cnJlbnRJY29uID0gY29uZGl0aW9uTWFwW2N1cnJlbnRDb25kaXRpb25LZXldO1xuXG4gIHJldHVybiB7XG4gICAgY2l0eTogY2l0eS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGNpdHkuc2xpY2UoMSksXG4gICAgY3VycmVudDoge1xuICAgICAgdGVtcGVyYXR1cmU6IGAke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE1KSArIDIwfcKwQ2AsXG4gICAgICBjb25kaXRpb246IGN1cnJlbnRDb25kaXRpb25LZXksXG4gICAgICB3aW5kOiBgJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNSkgKyA1fSBrbS9oYCxcbiAgICAgIGh1bWlkaXR5OiBgJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MCkgKyA0MH0lYCxcbiAgICAgIGljb246IGN1cnJlbnRJY29uLFxuICAgIH0sXG4gICAgZm9yZWNhc3Q6IGZvcmVjYXN0IGFzIHouaW5mZXI8dHlwZW9mIEdldFdlYXRoZXJGb3JlY2FzdE91dHB1dFNjaGVtYT5bJ2ZvcmVjYXN0J10sXG4gIH07XG59XG5cblxuY29uc3QgZmV0Y2hXZWF0aGVyRm9yQ2l0eSA9IGFzeW5jICh7IGNpdHkgfTogR2V0V2VhdGhlckZvcmVjYXN0SW5wdXQpID0+IHtcbiAgLy8gSW4gYSByZWFsIGFwcCwgdGhpcyB3b3VsZCBjYWxsIGEgd2VhdGhlciBBUEkuXG4gIC8vIEZvciBub3csIHdlIHJldHVybiBtb2NrIGRhdGEsIHdpdGggYSBmYWxsYmFjayB0byByYW5kb20gZGF0YSBmb3Igb3RoZXIgY2l0aWVzLlxuICBjb25zdCBjaXR5S2V5ID0gY2l0eS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gbW9ja1dlYXRoZXJEYXRhW2NpdHlLZXldIHx8IGdlbmVyYXRlUmFuZG9tRm9yZWNhc3QoY2l0eSk7XG59O1xuXG5jb25zdCB3ZWF0aGVyVG9vbCA9IGFpLmRlZmluZVRvb2woXG4gIHtcbiAgICBuYW1lOiAnZmV0Y2hXZWF0aGVyRm9yQ2l0eScsXG4gICAgZGVzY3JpcHRpb246ICdGZXRjaGVzIHRoZSB3ZWF0aGVyIGZvcmVjYXN0IGZvciBhIGdpdmVuIGNpdHkuJyxcbiAgICBpbnB1dFNjaGVtYTogR2V0V2VhdGhlckZvcmVjYXN0SW5wdXRTY2hlbWEsXG4gICAgb3V0cHV0U2NoZW1hOiBHZXRXZWF0aGVyRm9yZWNhc3RPdXRwdXRTY2hlbWEsXG4gIH0sXG4gIGZldGNoV2VhdGhlckZvckNpdHlcbik7XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJGb3JlY2FzdChcbiAgaW5wdXQ6IEdldFdlYXRoZXJGb3JlY2FzdElucHV0XG4pOiBQcm9taXNlPEdldFdlYXRoZXJGb3JlY2FzdE91dHB1dD4ge1xuICByZXR1cm4gZ2V0V2VhdGhlckZvcmVjYXN0RmxvdyhpbnB1dCk7XG59XG5cblxuY29uc3QgZ2V0V2VhdGhlckZvcmVjYXN0RmxvdyA9IGFpLmRlZmluZUZsb3coXG4gIHtcbiAgICBuYW1lOiAnZ2V0V2VhdGhlckZvcmVjYXN0RmxvdycsXG4gICAgaW5wdXRTY2hlbWE6IEdldFdlYXRoZXJGb3JlY2FzdElucHV0U2NoZW1hLFxuICAgIG91dHB1dFNjaGVtYTogR2V0V2VhdGhlckZvcmVjYXN0T3V0cHV0U2NoZW1hLFxuICB9LFxuICBhc3luYyAoaW5wdXQpID0+IHtcbiAgICAvLyBEaXJlY3RseSBjYWxsIHRoZSB0b29sJ3MgaW1wbGVtZW50YXRpb24gZnVuY3Rpb24gdG8gYXZvaWQgTExNIGxvb3BzLlxuICAgIC8vIFRoZSBMTE0gaXNuJ3QgbmVlZGVkIGhlcmUgc2luY2Ugd2UganVzdCB3YW50IHRvIGZldGNoIGRhdGEuXG4gICAgcmV0dXJuIGF3YWl0IGZldGNoV2VhdGhlckZvckNpdHkoaW5wdXQpO1xuICB9XG4pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJnVEFpSnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:6c5c74 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40f88e2403c7c481bfd07b3a13496b8f7da2d46a45":"recommendCrops"},"src/ai/flows/recommend-crops.ts",""] */ __turbopack_context__.s({
    "recommendCrops": (()=>recommendCrops)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var recommendCrops = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40f88e2403c7c481bfd07b3a13496b8f7da2d46a45", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "recommendCrops"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVjb21tZW5kLWNyb3BzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzZXJ2ZXInO1xuLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IFJlY29tbWVuZHMgY3JvcHMgYmFzZWQgb24gdXNlciBpbnB1dC5cbiAqXG4gKiAtIHJlY29tbWVuZENyb3BzIC0gQSBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgdGhlIGNyb3AgcmVjb21tZW5kYXRpb24gcHJvY2Vzcy5cbiAqIC0gUmVjb21tZW5kQ3JvcHNJbnB1dCAtIFRoZSBpbnB1dCB0eXBlIGZvciB0aGUgcmVjb21tZW5kQ3JvcHMgZnVuY3Rpb24uXG4gKiAtIFJlY29tbWVuZENyb3BzT3V0cHV0IC0gVGhlIHJldHVybiB0eXBlIGZvciB0aGUgcmVjb21tZW5kQ3JvcHMgZnVuY3Rpb24uXG4gKi9cblxuaW1wb3J0IHthaX0gZnJvbSAnQC9haS9nZW5raXQnO1xuaW1wb3J0IHt6fSBmcm9tICdnZW5raXQnO1xuXG5jb25zdCBSZWNvbW1lbmRDcm9wc0lucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBsb2NhdGlvbjogei5zdHJpbmcoKS5kZXNjcmliZShcIlRoZSB1c2VyJ3MgbG9jYXRpb24gKGUuZy4sIGRpc3RyaWN0LCBzdGF0ZSkuXCIpLFxuICBmYXJtVHlwZTogei5lbnVtKFsnaXJyaWdhdGVkJywgJ3JhaW5mZWQnXSkuZGVzY3JpYmUoJ1RoZSB0eXBlIG9mIGZhcm0gKGlycmlnYXRlZCBvciByYWluZmVkL2RyeSkuJyksXG4gIGxhbmRTaXplOiB6LnN0cmluZygpLmRlc2NyaWJlKCdUaGUgc2l6ZSBvZiB0aGUgbGFuZCAoZS5nLiwgXCIyIGFjcmVzXCIpLicpLFxuICBzb2lsVHlwZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLmRlc2NyaWJlKCdUaGUgdHlwZSBvZiBzb2lsIChlLmcuLCBcImJsYWNrIHNvaWxcIiwgXCJyZWQgc29pbFwiKS4nKSxcbiAgd2F0ZXJTb3VyY2U6IHouc3RyaW5nKCkub3B0aW9uYWwoKS5kZXNjcmliZSgnVGhlIHByaW1hcnkgc291cmNlIG9mIHdhdGVyIChlLmcuLCBcImJvcmV3ZWxsXCIsIFwiY2FuYWxcIiwgXCJyYWluLW9ubHlcIikuJyksXG4gIHNlYXNvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLmRlc2NyaWJlKCdUaGUgY3VycmVudCBmYXJtaW5nIHNlYXNvbiAoZS5nLiwgXCJLaGFyaWZcIiwgXCJSYWJpXCIpLicpLFxuICBwcmV2aW91c0Nyb3A6IHouc3RyaW5nKCkub3B0aW9uYWwoKS5kZXNjcmliZSgnVGhlIGNyb3AgZ3Jvd24gaW4gdGhlIHByZXZpb3VzIHNlYXNvbi4nKSxcbiAgYnVkZ2V0OiB6LnN0cmluZygpLm9wdGlvbmFsKCkuZGVzY3JpYmUoJ1RoZSBhcHByb3hpbWF0ZSBidWRnZXQgZm9yIGN1bHRpdmF0aW9uLicpLFxuICBjcm9wUHJlZmVyZW5jZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLmRlc2NyaWJlKCdBbnkgc3BlY2lmaWMgY3JvcCBwcmVmZXJlbmNlIHRoZSB1c2VyIG1pZ2h0IGhhdmUuJyksXG4gIGxhbmd1YWdlOiB6LnN0cmluZygpLmRlc2NyaWJlKCdUaGUgbGFuZ3VhZ2UgZm9yIHRoZSByZXNwb25zZSAoZS5nLiwgXCJlblwiLCBcImhpXCIsIFwia25cIiwgXCJiblwiLCBcImJob1wiKS4nKSxcbn0pO1xuZXhwb3J0IHR5cGUgUmVjb21tZW5kQ3JvcHNJbnB1dCA9IHouaW5mZXI8dHlwZW9mIFJlY29tbWVuZENyb3BzSW5wdXRTY2hlbWE+O1xuXG5jb25zdCBSZWNvbW1lbmRlZENyb3BTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgY3JvcE5hbWU6IHouc3RyaW5nKCkuZGVzY3JpYmUoXCJUaGUgbmFtZSBvZiB0aGUgcmVjb21tZW5kZWQgY3JvcC5cIiksXG4gICAgaWNvbjogei5lbnVtKFsnTGVhZicsICdTcHJvdXQnLCAnQ2Fycm90JywgJ1doZWF0JywgJ0dyYXBlJ10pLmRlc2NyaWJlKFwiQSByZWxldmFudCBMdWNpZGUgaWNvbiBuYW1lIGZyb20gdGhlIHByb3ZpZGVkIGxpc3QgZm9yIHRoZSBjcm9wLiBVc2UgJ0xlYWYnIGFzIGEgZGVmYXVsdC5cIiksXG4gICAgcGxhbnRpbmdEYXRlczogei5zdHJpbmcoKS5kZXNjcmliZShcIlJlY29tbWVuZGVkIHBsYW50aW5nIGRhdGUgcmFuZ2UgZm9yIHRoZSBzcGVjaWZpZWQgc2Vhc29uIGFuZCBsb2NhdGlvbiwgZS5nLiwgJ0p1bmUgMTUgLSBKdWx5IDMwJy5cIiksXG4gICAgcmVhc29uaW5nOiB6LnN0cmluZygpLm1pbigxKS5kZXNjcmliZShcIkEgc2hvcnQsIG9uZS1zZW50ZW5jZSByZWFzb24gd2h5IHRoaXMgY3JvcCBpcyBhIGdvb2QgY2hvaWNlLCBlLmcuLCAnSXQgaXMgd2VsbC1zdWl0ZWQgZm9yIHlvdXIgbG9jYXRpb24ncyBjbGltYXRlIGFuZCBoYXMgaGlnaCBtYXJrZXQgZGVtYW5kLidcIiksXG4gICAgYmVuZWZpdHM6IHouYXJyYXkoei5zdHJpbmcoKSkubWluKDIpLm1heCgzKS5kZXNjcmliZShcIkEgbGlzdCBvZiAyLTMga2V5IGJlbmVmaXRzIG9mIGdyb3dpbmcgdGhpcyBjcm9wLCBlLmcuLCAnSGlnaCBtYXJrZXQgZGVtYW5kJywgJ0Ryb3VnaHQgcmVzaXN0YW50Jy5cIiksXG4gICAgaW1hZ2VIaW50OiB6LnN0cmluZygpLmRlc2NyaWJlKFwiVHdvIG9yIHRocmVlIHNwZWNpZmljIGtleXdvcmRzIGZvciBhIHJlbGV2YW50IGltYWdlIG9mIHRoZSBjcm9wLCBlLmcuLCAncGVhcmwgbWlsbGV0IGZhcm0nLCAncmlwZSBjb3R0b24gY3JvcCcsICdzdWdhcmNhbmUgZmllbGQnLlwiKSxcbn0pO1xuXG5jb25zdCBSZWNvbW1lbmRDcm9wc091dHB1dFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgcmVjb21tZW5kYXRpb25zOiB6LmFycmF5KFJlY29tbWVuZGVkQ3JvcFNjaGVtYSkubGVuZ3RoKDMpLmRlc2NyaWJlKCdBIGxpc3Qgb2YgZXhhY3RseSAzIHJlY29tbWVuZGVkIGNyb3BzLicpLFxufSk7XG5leHBvcnQgdHlwZSBSZWNvbW1lbmRDcm9wc091dHB1dCA9IHouaW5mZXI8dHlwZW9mIFJlY29tbWVuZENyb3BzT3V0cHV0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlY29tbWVuZENyb3BzKGlucHV0OiBSZWNvbW1lbmRDcm9wc0lucHV0KTogUHJvbWlzZTxSZWNvbW1lbmRDcm9wc091dHB1dD4ge1xuICByZXR1cm4gcmVjb21tZW5kQ3JvcHNGbG93KGlucHV0KTtcbn1cblxuY29uc3QgcmVjb21tZW5kQ3JvcHNQcm9tcHQgPSBhaS5kZWZpbmVQcm9tcHQoe1xuICBuYW1lOiAncmVjb21tZW5kQ3JvcHNQcm9tcHQnLFxuICBpbnB1dDoge3NjaGVtYTogUmVjb21tZW5kQ3JvcHNJbnB1dFNjaGVtYX0sXG4gIG91dHB1dDoge3NjaGVtYTogUmVjb21tZW5kQ3JvcHNPdXRwdXRTY2hlbWF9LFxuICBwcm9tcHQ6IGBZb3UgYXJlIGFuIGV4cGVydCBhZ3JpY3VsdHVyYWwgYWR2aXNvciBpbiBJbmRpYS4gWW91ciB0YXNrIGlzIHRvIHJlY29tbWVuZCBleGFjdGx5IDMgcHJvZml0YWJsZSBhbmQgc3VpdGFibGUgY3JvcHMgZm9yIGEgZmFybWVyIGJhc2VkIG9uIHRoZWlyIHNwZWNpZmljIGlucHV0cy5cblxuICBUaGUgZmFybWVyJ3MgcHJlZmVycmVkIGxhbmd1YWdlIGlzIHt7bGFuZ3VhZ2V9fS4gQWxsIG9mIHlvdXIgdGV4dCBvdXRwdXQgKGNyb3BOYW1lLCByZWFzb25pbmcsIGJlbmVmaXRzKSBNVVNUIGJlIGluIHRoaXMgbGFuZ3VhZ2UuXG5cbiAgRmFybWVyJ3MgRGV0YWlsczpcbiAgLSBMb2NhdGlvbjoge3tsb2NhdGlvbn19XG4gIC0gRmFybSBUeXBlOiB7e2Zhcm1UeXBlfX1cbiAgLSBMYW5kIFNpemU6IHt7bGFuZFNpemV9fVxuICAtIFNvaWwgVHlwZToge3sjaWYgc29pbFR5cGV9fXt7c29pbFR5cGV9fXt7ZWxzZX19Tm90IHNwZWNpZmllZHt7L2lmfX1cbiAgLSBXYXRlciBTb3VyY2U6IHt7I2lmIHdhdGVyU291cmNlfX17e3dhdGVyU291cmNlfX17e2Vsc2V9fU5vdCBzcGVjaWZpZWR7ey9pZn19XG4gIC0gU2Vhc29uOiB7eyNpZiBzZWFzb259fXt7c2Vhc29ufX17e2Vsc2V9fU5vdCBzcGVjaWZpZWR7ey9pZn19XG4gIC0gUHJldmlvdXMgQ3JvcDoge3sjaWYgcHJldmlvdXNDcm9wfX0gKFN1Z2dlc3QgY3JvcHMgdGhhdCBhcmUgZ29vZCBmb3Igcm90YXRpb24gd2l0aCB7e3ByZXZpb3VzQ3JvcH19KXt7ZWxzZX19Tm90IHNwZWNpZmllZHt7L2lmfX1cbiAgLSBCdWRnZXQ6IHt7I2lmIGJ1ZGdldH19e3tidWRnZXR9fXt7ZWxzZX19Tm90IHNwZWNpZmllZHt7L2lmfX1cbiAgLSBGYXJtZXIncyBDcm9wIFByZWZlcmVuY2U6IHt7I2lmIGNyb3BQcmVmZXJlbmNlfX17e2Nyb3BQcmVmZXJlbmNlfX17e2Vsc2V9fU5vbmV7ey9pZn19XG5cbiAgWW91ciByZWNvbW1lbmRhdGlvbnMgbXVzdCBiZSB3ZWxsLXJlYXNvbmVkIGFuZCBkZXRhaWxlZC4gRm9yIGVhY2ggb2YgdGhlIDMgcmVjb21tZW5kZWQgY3JvcHMsIHByb3ZpZGUgdGhlIGZvbGxvd2luZzpcbiAgMS4gICoqY3JvcE5hbWUqKjogVGhlIG5hbWUgb2YgdGhlIGNyb3AuXG4gIDIuICAqKmljb24qKjogQSByZWxldmFudCBMdWNpZGUgaWNvbiBuYW1lIGZyb20gdGhpcyBsaXN0OiBbJ0xlYWYnLCAnU3Byb3V0JywgJ0NhcnJvdCcsICdXaGVhdCcsICdHcmFwZSddLiBVc2UgJ0xlYWYnIGFzIGEgZ2VuZXJpYyBkZWZhdWx0IGlmIG5vbmUgYXJlIGEgcGVyZmVjdCBmaXQuIEZvciBleGFtcGxlLCBmb3IgY290dG9uIG9yIHNveWJlYW4sIHVzZSAnTGVhZicuIEZvciB3aGVhdCBvciBtYWl6ZSwgdXNlICdXaGVhdCcuIEZvciB2ZWdldGFibGVzLCB1c2UgJ0NhcnJvdCcuXG4gIDMuICAqKnBsYW50aW5nRGF0ZXMqKjogQSBzcGVjaWZpYywgcmVjb21tZW5kZWQgcGxhbnRpbmcgZGF0ZSByYW5nZSBmb3IgdGhlIGZhcm1lcidzIGxvY2F0aW9uIGFuZCBzZWFzb24uIEZvciBleGFtcGxlLCBcIkp1bmUgMTUgLSBKdWx5IDMwXCIuXG4gIDQuICAqKnJlYXNvbmluZyoqOiBBIHNob3J0LCBvbmUtc2VudGVuY2UgcmVhc29uIHdoeSB0aGlzIGNyb3AgaXMgYSBnb29kIGNob2ljZSBiYXNlZCBvbiB0aGUgaW5wdXRzIHByb3ZpZGVkLiBGb3IgZXhhbXBsZSwgXCJUaGlzIGNyb3AgaXMgd2VsbC1zdWl0ZWQgdG8geW91ciBzb2lsIHR5cGUgYW5kIGhhcyBzdHJvbmcgbWFya2V0IGRlbWFuZCBpbiB5b3VyIHJlZ2lvbi5cIlxuICA1LiAgKipiZW5lZml0cyoqOiBBIGxpc3Qgb2YgMiBvciAzIGtleSBiZW5lZml0cyBmb3IgdGhlIGZhcm1lci4gVGhlc2Ugc2hvdWxkIGJlIGNvbmNpc2UgYW5kIGNvbXBlbGxpbmcsIHN1Y2ggYXMgXCJIaWdoIG1hcmtldCBkZW1hbmQgaW4geW91ciByZWdpb25cIiwgXCJEcm91Z2h0IHJlc2lzdGFudCwgbG93ZXIgd2F0ZXIgbmVlZHNcIiwgb3IgXCJJbXByb3ZlcyBzb2lsIG5pdHJvZ2VuIGZvciBuZXh0IHNlYXNvblwiLlxuICA2LiAgKippbWFnZUhpbnQqKjogVHdvIG9yIHRocmVlIHNwZWNpZmljIGtleXdvcmRzIGZvciBhIHJlbGV2YW50IGltYWdlIG9mIHRoZSBjcm9wLiBGb3IgZXhhbXBsZSwgZm9yIGEgcGVhcmwgbWlsbGV0IHJlY29tbWVuZGF0aW9uLCB0aGUgaGludCBjb3VsZCBiZSBcInBlYXJsIG1pbGxldCBmYXJtXCIuIEZvciBjb3R0b24sIGl0IGNvdWxkIGJlIFwicmlwZSBjb3R0b24gY3JvcFwiLlxuXG4gIEdlbmVyYXRlIGEgbGlzdCBvZiBleGFjdGx5IDMgZGl2ZXJzZSBhbmQgcHJhY3RpY2FsIGNyb3AgcmVjb21tZW5kYXRpb25zLlxuICBgLFxufSk7XG5cbmNvbnN0IHJlY29tbWVuZENyb3BzRmxvdyA9IGFpLmRlZmluZUZsb3coXG4gIHtcbiAgICBuYW1lOiAncmVjb21tZW5kQ3JvcHNGbG93JyxcbiAgICBpbnB1dFNjaGVtYTogUmVjb21tZW5kQ3JvcHNJbnB1dFNjaGVtYSxcbiAgICBvdXRwdXRTY2hlbWE6IFJlY29tbWVuZENyb3BzT3V0cHV0U2NoZW1hLFxuICB9LFxuICBhc3luYyBpbnB1dCA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHtvdXRwdXR9ID0gYXdhaXQgcmVjb21tZW5kQ3JvcHNQcm9tcHQoaW5wdXQpO1xuICAgICAgcmV0dXJuIG91dHB1dCE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiByZWNvbW1lbmRDcm9wc0Zsb3csIHJldHVybmluZyBmYWxsYmFjay5cIiwgZXJyb3IpO1xuICAgICAgLy8gUmV0dXJuIGEgZmFsbGJhY2sgcmVzcG9uc2UgdGhhdCBzYXRpc2ZpZXMgdGhlIHNjaGVtYVxuICAgICAgY29uc3QgZmFsbGJhY2tCZW5lZml0cyA9IFtcbiAgICAgICAgICBgR29vZCBtYXJrZXQgdmFsdWUgaW4gJHtpbnB1dC5sb2NhdGlvbn1gLFxuICAgICAgICAgIFwiU3VpdGFibGUgZm9yIHZhcmlvdXMgc29pbCB0eXBlc1wiLFxuICAgICAgXTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVjb21tZW5kYXRpb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY3JvcE5hbWU6IFwiU295YmVhblwiLFxuICAgICAgICAgICAgaWNvbjogXCJMZWFmXCIsXG4gICAgICAgICAgICBwbGFudGluZ0RhdGVzOiBcIkp1bmUgLSBKdWx5XCIsXG4gICAgICAgICAgICByZWFzb25pbmc6IFwiQSByb2J1c3QgYW5kIHByb2ZpdGFibGUgS2hhcmlmIGNyb3Agc3VpdGFibGUgZm9yIG1hbnkgSW5kaWFuIGNsaW1hdGVzLlwiLFxuICAgICAgICAgICAgYmVuZWZpdHM6IGZhbGxiYWNrQmVuZWZpdHMsXG4gICAgICAgICAgICBpbWFnZUhpbnQ6IFwic295YmVhbiBmaWVsZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY3JvcE5hbWU6IFwiQ290dG9uXCIsXG4gICAgICAgICAgICBpY29uOiBcIkxlYWZcIixcbiAgICAgICAgICAgIHBsYW50aW5nRGF0ZXM6IFwiTWF5IC0gSnVuZVwiLFxuICAgICAgICAgICAgcmVhc29uaW5nOiBcIkhpZ2ggZGVtYW5kIGluIHRoZSB0ZXh0aWxlIGluZHVzdHJ5IGFuZCBncm93cyB3ZWxsIGluIGRyaWVyIGNvbmRpdGlvbnMuXCIsXG4gICAgICAgICAgICBiZW5lZml0czogZmFsbGJhY2tCZW5lZml0cyxcbiAgICAgICAgICAgIGltYWdlSGludDogXCJyaXBlIGNvdHRvbiBjcm9wXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjcm9wTmFtZTogXCJNYWl6ZVwiLFxuICAgICAgICAgICAgaWNvbjogXCJXaGVhdFwiLFxuICAgICAgICAgICAgcGxhbnRpbmdEYXRlczogXCJKdW5lIC0gSnVseVwiLFxuICAgICAgICAgICAgcmVhc29uaW5nOiBcIkEgdmVyc2F0aWxlIGNyb3AgdXNlZCBmb3IgYm90aCBmb29kIGFuZCBhbmltYWwgZmVlZCwgd2l0aCBnb29kIHlpZWxkIHBvdGVudGlhbC5cIixcbiAgICAgICAgICAgIGJlbmVmaXRzOiBmYWxsYmFja0JlbmVmaXRzLFxuICAgICAgICAgICAgaW1hZ2VIaW50OiBcIm1haXplIGNvcm4gZmllbGRcIixcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbik7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InVTQXlDc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/dashboard/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DashboardPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-client] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart-pulse.js [app-client] (ecmascript) <export default as HeartPulse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-line.js [app-client] (ecmascript) <export default as LineChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/banknote.js [app-client] (ecmascript) <export default as Banknote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wind.js [app-client] (ecmascript) <export default as Wind>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$rain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudRain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-rain.js [app-client] (ecmascript) <export default as CloudRain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudSun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-sun.js [app-client] (ecmascript) <export default as CloudSun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/leaf.js [app-client] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$8972b9__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:8972b9 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$6c5c74__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:6c5c74 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-auth.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/language-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const iconMap = {
    Cloud: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"],
    Sun: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"],
    CloudRain: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$rain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudRain$3e$__["CloudRain"],
    CloudSun: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudSun$3e$__["CloudSun"],
    Wind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__["Wind"],
    Droplets: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"]
};
function DashboardPage() {
    _s();
    const { user, userProfile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [weatherData, setWeatherData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingWeather, setLoadingWeather] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [recommendations, setRecommendations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingRecommendations, setLoadingRecommendations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const quickLinks = [
        {
            title: t('nav.cropDoctor'),
            description: t('dashboard.quickLinks.cropDoctor'),
            href: "/dashboard/crop-doctor",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__["HeartPulse"]
        },
        {
            title: t('nav.cropRecommender'),
            description: t('dashboard.quickLinks.cropRecommender'),
            href: "/dashboard/crop-recommender",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"]
        },
        {
            title: t('nav.marketAnalyst'),
            description: t('dashboard.quickLinks.marketAnalyst'),
            href: "/dashboard/market-analyst",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__["LineChart"]
        },
        {
            title: t('nav.govtSchemes'),
            description: t('dashboard.quickLinks.govtSchemes'),
            href: "/dashboard/schemes",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__["Banknote"]
        },
        {
            title: t('nav.tracker'),
            description: t('dashboard.quickLinks.tracker'),
            href: "/dashboard/tracker",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"]
        },
        {
            title: t('nav.eLearning'),
            description: t('dashboard.quickLinks.eLearning'),
            href: "/dashboard/learn",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            const getCurrentSeason = {
                "DashboardPage.useEffect.getCurrentSeason": ()=>{
                    const month = new Date().getMonth(); // 0-11
                    if (month >= 5 && month <= 9) return 'kharif'; // June to October
                    if (month >= 10 || month <= 2) return 'rabi'; // November to March
                    return 'zaid'; // April, May
                }
            }["DashboardPage.useEffect.getCurrentSeason"];
            const fetchDashboardData = {
                "DashboardPage.useEffect.fetchDashboardData": async ()=>{
                    const city = userProfile?.location?.split(',')[0] || "Pune";
                    setLoadingWeather(true);
                    setLoadingRecommendations(true);
                    const weatherPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$8972b9__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getWeatherForecast"])({
                        city
                    });
                    const recommendationsPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$6c5c74__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["recommendCrops"])({
                        location: userProfile?.location || "Pune, Maharashtra",
                        farmType: 'irrigated',
                        landSize: '1 acre',
                        season: getCurrentSeason(),
                        language: language
                    });
                    const [weatherResult, recommendationsResult] = await Promise.allSettled([
                        weatherPromise,
                        recommendationsPromise
                    ]);
                    if (weatherResult.status === 'fulfilled') {
                        setWeatherData(weatherResult.value);
                    } else {
                        console.error("Failed to fetch weather", weatherResult.reason);
                    }
                    setLoadingWeather(false);
                    if (recommendationsResult.status === 'fulfilled') {
                        setRecommendations(recommendationsResult.value);
                    } else {
                        console.error("Failed to fetch recommendations", recommendationsResult.reason);
                    }
                    setLoadingRecommendations(false);
                }
            }["DashboardPage.useEffect.fetchDashboardData"];
            if (userProfile) {
                fetchDashboardData();
            }
        }
    }["DashboardPage.useEffect"], [
        userProfile,
        language
    ]);
    const getIcon = (iconName)=>{
        const IconComponent = iconMap[iconName] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
            className: "h-8 w-8 text-secondary-foreground"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/page.tsx",
            lineNumber: 148,
            columnNumber: 12
        }, this);
    };
    const displayName = user?.displayName?.split(' ')[0] || t('dashboard.farmer');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold font-headline",
                        children: t('dashboard.welcome', {
                            name: displayName
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: t('dashboard.description')
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
                children: quickLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: link.href,
                        className: "group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "h-full transition-all duration-300 group-hover:bg-secondary/50 group-hover:shadow-lg group-hover:-translate-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "pb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "text-lg font-semibold",
                                                children: link.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 168,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(link.icon, {
                                                className: "h-6 w-6 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: link.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 165,
                            columnNumber: 13
                        }, this)
                    }, link.href, false, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-5 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-3 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "text-sm font-medium",
                                                children: t('dashboard.currentWeather')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 184,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
                                                className: "h-4 w-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 185,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "flex flex-col sm:flex-row items-center sm:space-x-4",
                                        children: loadingWeather ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-4 w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                    className: "h-16 w-16 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                            className: "h-8 w-24"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                            className: "h-4 w-32"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2 pl-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                            className: "h-4 w-24"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                            className: "h-4 w-20"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 189,
                                            columnNumber: 25
                                        }, this) : weatherData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                getIcon(weatherData.current.icon),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center sm:text-left mt-2 sm:mt-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-3xl font-bold",
                                                            children: weatherData.current.temperature
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 204,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: [
                                                                t(`weather.conditions.${weatherData.current.condition}`),
                                                                " in ",
                                                                weatherData.city
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-x-4 gap-y-1 text-sm pl-4 mt-2 sm:mt-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__["Wind"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 211,
                                                                    columnNumber: 41
                                                                }, this),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: weatherData.current.wind
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 211,
                                                                    columnNumber: 70
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 214,
                                                                    columnNumber: 41
                                                                }, this),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: weatherData.current.humidity
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 214,
                                                                    columnNumber: 74
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: t('dashboard.weatherUnavailable')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 219,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 187,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/page.tsx",
                                lineNumber: 182,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].sprout, {
                                                        className: "h-6 w-6 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 28
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        children: t('dashboard.recommendations.title')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 28
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 225,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                children: t('dashboard.recommendations.description')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 229,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 224,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "grid gap-4 md:grid-cols-2",
                                        children: loadingRecommendations ? Array.from({
                                            length: 2
                                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                className: "flex items-center gap-4 p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                        className: "h-20 w-20 rounded-lg"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2 flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                                className: "h-5 w-1/2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                                lineNumber: 237,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                                className: "h-4 w-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                                lineNumber: 238,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                                className: "h-4 w-3/4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                                lineNumber: 239,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 234,
                                                columnNumber: 33
                                            }, this)) : recommendations && recommendations.recommendations.length > 0 ? recommendations.recommendations.slice(0, 2).map((rec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                className: "overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-4 p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: `https://placehold.co/100x100.png`,
                                                            alt: rec.cropName,
                                                            width: 80,
                                                            height: 80,
                                                            className: "rounded-lg object-cover",
                                                            "data-ai-hint": rec.imageHint
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-semibold text-base",
                                                                    children: rec.cropName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 249,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-muted-foreground mt-1 mb-2 line-clamp-2",
                                                                    children: rec.reasoning
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 250,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    asChild: true,
                                                                    size: "sm",
                                                                    variant: "secondary",
                                                                    className: "text-xs",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: `/dashboard/learn?q=${encodeURIComponent(rec.cropName)}`,
                                                                        children: [
                                                                            "Learn More ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                                className: "ml-1 h-3 w-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                                                lineNumber: 253,
                                                                                columnNumber: 60
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                                        lineNumber: 252,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 251,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 248,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 33
                                                }, this)
                                            }, rec.cropName, false, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 245,
                                                columnNumber: 29
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground text-center py-4 md:col-span-2",
                                            children: t('dashboard.recommendations.unavailable')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 261,
                                            columnNumber: 30
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 231,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/page.tsx",
                                lineNumber: 223,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 181,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            children: "Notifications"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 269,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                            children: "Important updates and alerts for your farm."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 270,
                                            columnNumber: 26
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 268,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center justify-center text-center text-muted-foreground h-64",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].wheat, {
                                                className: "h-12 w-12 mb-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 274,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold",
                                                children: "No new notifications"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 275,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm",
                                                children: "Check back later for updates on weather, market prices, and more."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 276,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 273,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 272,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 267,
                            columnNumber: 18
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 266,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 180,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/page.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_s(DashboardPage, "q0J3iqOEDTp4PzC3br9LAwJbOuE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = DashboardPage;
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_28d5fb92._.js.map