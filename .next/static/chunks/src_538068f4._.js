(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/hooks/use-toast.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "reducer": (()=>reducer),
    "toast": (()=>toast),
    "useToast": (()=>useToast)
});
// Inspired by react-hot-toast library
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(memoryState);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useToast.useEffect": ()=>{
            listeners.push(setState);
            return ({
                "useToast.useEffect": ()=>{
                    const index = listeners.indexOf(setState);
                    if (index > -1) {
                        listeners.splice(index, 1);
                    }
                }
            })["useToast.useEffect"];
        }
    }["useToast.useEffect"], [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}
_s(useToast, "SPWE98mLGnlsnNfIwu/IAKTSZtk=");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/toast.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Toast": (()=>Toast),
    "ToastAction": (()=>ToastAction),
    "ToastClose": (()=>ToastClose),
    "ToastDescription": (()=>ToastDescription),
    "ToastProvider": (()=>ToastProvider),
    "ToastTitle": (()=>ToastTitle),
    "ToastViewport": (()=>ToastViewport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const ToastProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"];
const ToastViewport = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, this));
_c1 = ToastViewport;
ToastViewport.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"].displayName;
const toastVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Toast = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, variant, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(toastVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
});
_c3 = Toast;
Toast.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
const ToastAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 62,
        columnNumber: 3
    }, this));
_c5 = ToastAction;
ToastAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].displayName;
const ToastClose = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/toast.tsx",
            lineNumber: 86,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 77,
        columnNumber: 3
    }, this));
_c7 = ToastClose;
ToastClose.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"].displayName;
const ToastTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, this));
_c9 = ToastTitle;
ToastTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const ToastDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm opacity-90", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 107,
        columnNumber: 3
    }, this));
_c11 = ToastDescription;
ToastDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "ToastViewport$React.forwardRef");
__turbopack_context__.k.register(_c1, "ToastViewport");
__turbopack_context__.k.register(_c2, "Toast$React.forwardRef");
__turbopack_context__.k.register(_c3, "Toast");
__turbopack_context__.k.register(_c4, "ToastAction$React.forwardRef");
__turbopack_context__.k.register(_c5, "ToastAction");
__turbopack_context__.k.register(_c6, "ToastClose$React.forwardRef");
__turbopack_context__.k.register(_c7, "ToastClose");
__turbopack_context__.k.register(_c8, "ToastTitle$React.forwardRef");
__turbopack_context__.k.register(_c9, "ToastTitle");
__turbopack_context__.k.register(_c10, "ToastDescription$React.forwardRef");
__turbopack_context__.k.register(_c11, "ToastDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/toaster.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Toaster": (()=>Toaster)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/toast.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Toaster() {
    _s();
    const { toasts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastProvider"], {
        children: [
            toasts.map(function({ id, title, description, action, ...props }) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastTitle"], {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/toaster.tsx",
                                    lineNumber: 22,
                                    columnNumber: 25
                                }, this),
                                description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastDescription"], {
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/toaster.tsx",
                                    lineNumber: 24,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/toaster.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this),
                        action,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastClose"], {}, void 0, false, {
                            fileName: "[project]/src/components/ui/toaster.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this)
                    ]
                }, id, true, {
                    fileName: "[project]/src/components/ui/toaster.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastViewport"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/toaster.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/toaster.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(Toaster, "1YTCnXrq2qRowe0H/LBWLjtXoYc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = Toaster;
var _c;
__turbopack_context__.k.register(_c, "Toaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/firebase-config.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "allConfigured": (()=>allConfigured),
    "auth": (()=>auth),
    "db": (()=>db),
    "firebaseApp": (()=>firebaseApp),
    "storage": (()=>storage),
    "usingEnvConfig": (()=>usingEnvConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/esm2017/index-8e6e89cb.js [app-client] (ecmascript) <export p as getAuth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/storage/dist/index.esm2017.js [app-client] (ecmascript)");
;
;
;
;
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyCtbNLRoSjEeO6CmYqpUUAgekswCE8-msI") || "AIzaSyCtbNLRoSjEeO6CmYqpUUAgekswCE8-msI",
    authDomain: ("TURBOPACK compile-time value", "poetic-inkwell-464523-j5.firebaseapp.com") || "poetic-inkwell-464523-j5.firebaseapp.com",
    projectId: ("TURBOPACK compile-time value", "poetic-inkwell-464523-j5") || "poetic-inkwell-464523-j5",
    storageBucket: ("TURBOPACK compile-time value", "poetic-inkwell-464523-j5.firebasestorage.app") || "poetic-inkwell-464523-j5.firebasestorage.app",
    messagingSenderId: ("TURBOPACK compile-time value", "396048445465") || "396048445465",
    appId: ("TURBOPACK compile-time value", "1:396048445465:web:573c785cc1945377533a88") || "1:396048445465:web:573c785cc1945377533a88",
    measurementId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-5279197F2J"
};
let app;
// Check if we're using environment variables or fallback config
const usingEnvVars = !!("TURBOPACK compile-time value", "AIzaSyCtbNLRoSjEeO6CmYqpUUAgekswCE8-msI");
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
}
try {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApps"])().length === 0) {
        app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig);
    } else {
        app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApp"])();
    }
} catch (error) {
    console.error("Firebase initialization error:", error);
    // Create a dummy app for development
    app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])({
        apiKey: "demo-api-key",
        authDomain: "demo-project.firebaseapp.com",
        projectId: "demo-project",
        storageBucket: "demo-project.appspot.com",
        messagingSenderId: "123456789",
        appId: "1:123456789:web:abcdef123456"
    });
}
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__["getAuth"])(app);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStorage"])(app);
const firebaseApp = app;
const allConfigured = Object.values(firebaseConfig).every((v)=>!!v);
const usingEnvConfig = usingEnvVars;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/use-auth.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthProvider": (()=>AuthProvider),
    "useAuth": (()=>useAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/esm2017/index-8e6e89cb.js [app-client] (ecmascript) <export z as onAuthStateChanged>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__signOut$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/esm2017/index-8e6e89cb.js [app-client] (ecmascript) <export D as signOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Y__as__GoogleAuthProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/esm2017/index-8e6e89cb.js [app-client] (ecmascript) <export Y as GoogleAuthProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__d__as__signInWithPopup$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/esm2017/index-8e6e89cb.js [app-client] (ecmascript) <export d as signInWithPopup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ab__as__createUserWithEmailAndPassword$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/esm2017/index-8e6e89cb.js [app-client] (ecmascript) <export ab as createUserWithEmailAndPassword>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ac__as__signInWithEmailAndPassword$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/esm2017/index-8e6e89cb.js [app-client] (ecmascript) <export ac as signInWithEmailAndPassword>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__al__as__updateProfile$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/esm2017/index-8e6e89cb.js [app-client] (ecmascript) <export al as updateProfile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/storage/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const AuthProvider = ({ children })=>{
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userProfile, setUserProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "AuthProvider.useEffect.unsubscribe": async (currentUser)=>{
                    setUser(currentUser);
                    if (currentUser) {
                        await getUserProfile(currentUser);
                    } else {
                        setUserProfile(null);
                    }
                    setLoading(false);
                }
            }["AuthProvider.useEffect.unsubscribe"]);
            return ({
                "AuthProvider.useEffect": ()=>unsubscribe()
            })["AuthProvider.useEffect"];
        }
    }["AuthProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            if (user) {
                const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "users", user.uid, "transactions"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])("date", "desc"));
                const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q, {
                    "AuthProvider.useEffect.unsubscribe": (querySnapshot)=>{
                        const txs = [];
                        querySnapshot.forEach({
                            "AuthProvider.useEffect.unsubscribe": (doc)=>{
                                txs.push({
                                    id: doc.id,
                                    ...doc.data()
                                });
                            }
                        }["AuthProvider.useEffect.unsubscribe"]);
                        setTransactions(txs);
                    }
                }["AuthProvider.useEffect.unsubscribe"]);
                return ({
                    "AuthProvider.useEffect": ()=>unsubscribe()
                })["AuthProvider.useEffect"];
            }
        }
    }["AuthProvider.useEffect"], [
        user
    ]);
    const getUserProfile = async (firebaseUser)=>{
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "users", firebaseUser.uid);
        const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
        if (docSnap.exists()) {
            setUserProfile(docSnap.data());
        } else {
            // Create a profile if it doesn't exist
            const newUserProfile = {
                uid: firebaseUser.uid,
                email: firebaseUser.email,
                displayName: firebaseUser.displayName,
                photoURL: firebaseUser.photoURL,
                location: 'Pune, Maharashtra',
                language: 'en',
                crops: ''
            };
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(docRef, newUserProfile);
            setUserProfile(newUserProfile);
        }
    };
    const signInWithGoogle = async ()=>{
        setLoading(true);
        const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Y__as__GoogleAuthProvider$3e$__["GoogleAuthProvider"]();
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__d__as__signInWithPopup$3e$__["signInWithPopup"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], provider);
        } catch (error) {
            console.error("Error during Google sign-in", error);
            setLoading(false);
            throw error;
        }
    };
    const signInWithEmail = async (email, pass)=>{
        setLoading(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ac__as__signInWithEmailAndPassword$3e$__["signInWithEmailAndPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], email, pass);
        } catch (error) {
            setLoading(false);
            throw error; // Re-throw the error to be caught by the UI
        }
    };
    const signUpWithEmail = async (email, pass)=>{
        setLoading(true);
        try {
            const userCredential = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ab__as__createUserWithEmailAndPassword$3e$__["createUserWithEmailAndPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], email, pass);
            const user = userCredential.user;
            // Create a profile for the new user
            const newUserProfile = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                location: 'Pune, Maharashtra',
                language: 'en',
                crops: ''
            };
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "users", user.uid), newUserProfile);
            setUserProfile(newUserProfile);
        } catch (error) {
            console.error("Error during email sign-up", error);
            throw error; // Re-throw the error to be caught by the UI
        } finally{
            setLoading(false);
        }
    };
    const signOut = async ()=>{
        setLoading(true);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__signOut$3e$__["signOut"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"]);
        setUser(null);
        setUserProfile(null);
        setLoading(false);
    };
    const updateUserProfile = async (data)=>{
        const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!currentUser) {
            throw new Error("No user is currently signed in.");
        }
        const authUpdateData = {};
        if (data.displayName !== undefined && data.displayName !== currentUser.displayName) {
            authUpdateData.displayName = data.displayName;
        }
        if (data.photoURL !== undefined && data.photoURL !== currentUser.photoURL) {
            authUpdateData.photoURL = data.photoURL;
        }
        if (Object.keys(authUpdateData).length > 0) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__al__as__updateProfile$3e$__["updateProfile"])(currentUser, authUpdateData);
        }
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "users", currentUser.uid);
        const currentProfileSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
        const existingProfile = currentProfileSnap.exists() ? currentProfileSnap.data() : {};
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(docRef, {
            ...existingProfile,
            ...data
        }, {
            merge: true
        });
        const updatedUser = {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser
        };
        setUser(updatedUser);
        await getUserProfile(updatedUser);
    };
    const uploadProfileImage = async (file)=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allConfigured"]) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                variant: "destructive",
                title: "Firebase Not Configured",
                description: "Image upload requires a configured Firebase project. Please set up your .env file."
            });
            throw new Error("Firebase not configured");
        }
        const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!currentUser) {
            throw new Error("No user is currently signed in.");
        }
        const filePath = `profile-images/${currentUser.uid}/${file.name}`;
        const storageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storage"], filePath);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadBytes"])(storageRef, file);
            const downloadURL = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDownloadURL"])(storageRef);
            await updateUserProfile({
                photoURL: downloadURL
            });
        } catch (error) {
            console.error("Error uploading profile image:", error);
            if (error.code === 'storage/retry-limit-exceeded' || error.code === 'storage/unauthorized') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                    variant: "destructive",
                    title: "Storage Rules Error",
                    description: "The upload failed due to storage security rules. Please go to the Firebase Console, navigate to Storage -> Rules, and ensure they allow authenticated users to write to their own 'profile-images' directory. Refer to the 'storage.rules' file in the project for the correct rules."
                });
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                    variant: "destructive",
                    title: "Upload Failed",
                    description: "Could not upload profile image. Please try again later."
                });
            }
            throw error;
        }
    };
    // Transaction Management
    const addTransaction = async (data)=>{
        if (!user) throw new Error("User not authenticated");
        const txData = {
            ...data,
            date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timestamp"].fromDate(data.date)
        };
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "users", user.uid, "transactions"), txData);
    };
    const updateTransaction = async (id, data)=>{
        if (!user) throw new Error("User not authenticated");
        const txRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "users", user.uid, "transactions", id);
        const txData = data.date ? {
            ...data,
            date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timestamp"].fromDate(data.date)
        } : data;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(txRef, txData);
    };
    const deleteTransaction = async (id)=>{
        if (!user) throw new Error("User not authenticated");
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "users", user.uid, "transactions", id));
    };
    const value = {
        user,
        userProfile,
        transactions,
        loading,
        signInWithGoogle,
        signInWithEmail,
        signUpWithEmail,
        signOut,
        updateUserProfile,
        uploadProfileImage,
        addTransaction,
        updateTransaction,
        deleteTransaction
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/hooks/use-auth.tsx",
        lineNumber: 265,
        columnNumber: 5
    }, this);
};
_s(AuthProvider, "SXS1k2awvrCbXE9nFTAuGMNTUvo=");
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/locales/en.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"common\":{\"loading\":\"Loading\",\"initializing\":\"Initializing your dashboard...\"},\"nav\":{\"dashboard\":\"Dashboard\",\"cropDoctor\":\"Crop Doctor\",\"marketAnalyst\":\"Market Analyst\",\"govtSchemes\":\"Govt Schemes\",\"weather\":\"Weather\",\"community\":\"Community\",\"shop\":\"Shop\",\"eLearning\":\"E-Learning\",\"tracker\":\"Tracker\",\"cropRecommender\":\"Crop Recommender\",\"profile\":\"Profile\",\"settings\":\"Settings\"},\"userNav\":{\"profile\":\"Profile\",\"settings\":\"Settings\",\"logout\":\"Log out\"},\"dashboardLayout\":{\"toggleMenu\":\"Toggle Menu\",\"menuTitle\":\"Navigation Menu\",\"menuDescription\":\"Main navigation links for the application.\"},\"login\":{\"imageAlt\":\"Image of a lush farm\",\"tagline\":\"Empowering Agriculture Through Technology\",\"subTagline\":\"Join a community of modern farmers leveraging AI for better yields and sustainable practices.\",\"createAccountPrompt\":\"Create your account to get started.\",\"signInPrompt\":\"Welcome back! Sign in to your dashboard.\",\"emailLabel\":\"Email\",\"passwordLabel\":\"Password\",\"processing\":\"Processing...\",\"createAccountButton\":\"Create Account\",\"signInButton\":\"Sign In\",\"alreadyHaveAccount\":\"Already have an account?\",\"dontHaveAccount\":\"Don't have an account?\",\"signInLink\":\"Sign In\",\"signUpLink\":\"Sign Up\"},\"dashboard\":{\"welcome\":\"Welcome back, {{name}}!\",\"description\":\"Here's a quick overview of your farm and market.\",\"farmer\":\"Farmer\",\"quickLinks\":{\"cropDoctor\":\"Diagnose crop diseases instantly.\",\"cropRecommender\":\"Get AI-powered crop suggestions.\",\"marketAnalyst\":\"Get real-time price analysis.\",\"govtSchemes\":\"Find government schemes for you.\",\"tracker\":\"Track your farm expenses and profits.\",\"eLearning\":\"Browse guides and tutorials.\"},\"currentWeather\":\"Current Weather\",\"weatherUnavailable\":\"Weather data unavailable.\",\"recommendations\":{\"title\":\"Seasonal Crop Recommendations\",\"description\":\"Crops suggested for the current season based on your location and weather.\",\"unavailable\":\"Could not load recommendations at this time.\"}},\"cropDoctor\":{\"title\":\"AI Crop Doctor\",\"description\":\"Upload a clear image of an affected crop leaf to get an instant diagnosis and suggested solutions.\",\"client\":{\"uploadTitle\":\"Diagnose Your Crop\",\"uploadDescription\":\"Upload an image, describe the issue, or both for the most accurate diagnosis.\",\"imageLabel\":\"Upload Image\",\"changeFile\":\"Change File\",\"chooseFile\":\"Choose File\",\"cropPreview\":\"Crop preview\",\"descriptionLabel\":\"Describe the Issue\",\"descriptionPlaceholder\":\"e.g., 'My tomato leaves have yellow spots with brown centers.' or click the mic to speak.\",\"diagnosing\":\"Diagnosing...\",\"diagnoseButton\":\"Diagnose Disease\",\"resultTitle\":\"Diagnosis Result\",\"diagnosis\":\"Diagnosis\",\"solutions\":\"Suggested Solutions\",\"readDocs\":\"Read Docs\",\"watchVideo\":\"Watch Video\",\"resultPlaceholder\":\"Your diagnosis result will appear here.\"}},\"marketAnalyst\":{\"title\":\"Market Analyst\",\"description\":\"Get real-time market price analysis and recommendations. Ask a question like \\\"What is the price of onions in Pune Mandi?\\\"\",\"faqTitle\":\"Frequently Asked Questions\",\"faqs\":{\"q1\":\"What kind of questions can I ask?\",\"a1\":\"You can ask about current crop prices in specific locations, price trends, and get recommendations on whether to sell or hold your produce. For example: 'What is the price of tomatoes in Pune?' or 'Should I sell my wheat stock now?'\",\"q2\":\"How accurate is the price information?\",\"a2\":\"The price information is based on real-time data from various agricultural markets (mandis). While we strive for accuracy, prices can fluctuate rapidly. Use the information as a guide for your decisions.\",\"q3\":\"Can I ask about future price predictions?\",\"a3\":\"Yes, you can ask for price trend analysis and predictions. The AI will provide insights based on historical data and current market conditions, but please note that these are forecasts and not guarantees.\",\"q4\":\"What locations and crops are supported?\",\"a4\":\"The assistant covers a wide range of major crops and markets across India. You can ask about vegetables, grains, fruits, and more in various cities and their main agricultural markets.\"},\"client\":{\"askTitle\":\"Ask Your Market Question\",\"placeholder\":\"e.g., What are the chances of tomato prices increasing in the next week in Bangalore? Or click the mic to speak.\",\"analyzing\":\"Analyzing...\",\"getAnalysis\":\"Get Analysis\",\"stopRecording\":\"Stop Recording\",\"useVoice\":\"Use Voice\",\"resultTitle\":\"Analysis Result\",\"recommendation\":\"Recommendation\",\"marketAnalysis\":\"Market Analysis\",\"resultPlaceholder\":\"Your market analysis will appear here.\"}},\"schemes\":{\"title\":\"Scheme & Information Hub\",\"description\":\"Discover key government schemes, stay updated with the latest news, and find information tailored for you.\",\"keySchemesTitle\":\"Key Government Schemes\",\"latestNewsTitle\":\"Latest News & Updates\",\"visitSite\":\"Visit Site\",\"readMore\":\"Read More\",\"keySchemes\":{\"pmkisan\":{\"title\":\"PM-KISAN Scheme\",\"description\":\"Financial support of ₹6,000 per year for small and marginal farmer families.\"},\"pmfby\":{\"title\":\"Pradhan Mantri Fasal Bima Yojana\",\"description\":\"Insurance coverage against crop failure due to natural calamities, pests or diseases.\"},\"kcc\":{\"title\":\"Kisan Credit Card (KCC)\",\"description\":\"Provides farmers with timely access to credit for their cultivation and other needs.\"}},\"latestNews\":{\"kharifMsp\":{\"title\":\"Government increases MSP for Kharif crops\",\"description\":\"The Cabinet has approved a significant hike in the Minimum Support Price for all mandated Kharif crops for the upcoming marketing season.\"},\"subsidyPortal\":{\"title\":\"New portal launched for farm subsidy disbursal\",\"description\":\"A new unified portal has been launched to streamline the process of subsidy application and disbursal for various farming equipment.\"},\"horticultureMission\":{\"title\":\"Guidelines issued for National Horticulture Mission\",\"description\":\"The Department of Agriculture has released updated guidelines for the NHM to boost the horticulture sector, with a focus on post-harvest management.\"},\"enamMilestone\":{\"title\":\"e-NAM reaches new milestone with 1,000 mandis integrated\",\"description\":\"The electronic National Agriculture Market (e-NAM) platform has now connected over 1,000 agricultural produce markets across the country.\"},\"solarPump\":{\"title\":\"Solar pump scheme extended for another year\",\"description\":\"The PM-KUSUM scheme, aimed at providing solar-powered irrigation pumps to farmers, has been extended until March 2025.\"}},\"client\":{\"title\":\"Find a Specific Scheme\",\"description\":\"Use our AI assistant to get details on any government scheme by asking a question.\",\"placeholder\":\"e.g., Tell me about PM-KISAN scheme\",\"searching\":\"Searching...\",\"findScheme\":\"Find Scheme\",\"stopRecording\":\"Stop Recording\",\"useVoice\":\"Use Voice\",\"eligibility\":\"Eligibility\",\"applyNow\":\"Apply Now\",\"resultPlaceholder\":\"Ask a question to see scheme details here.\"}},\"weather\":{\"title\":\"Live Weather Forecast\",\"description\":\"Plan your farming activities accordingly.\",\"enterCity\":\"Enter city name...\",\"currentWeather\":\"Current Weather\",\"rightNowIn\":\"Right now in {{city}}\",\"wind\":\"Wind\",\"humidity\":\"Humidity\",\"weeklyForecast\":\"Weekly Forecast\",\"noData\":\"No weather data available. Please try a different location.\",\"conditions\":{\"sunny\":\"Sunny\",\"partlyCloudy\":\"Partly Cloudy\",\"cloudy\":\"Cloudy\",\"showers\":\"Showers\",\"rainy\":\"Rainy\",\"humidAndCloudy\":\"Humid & Cloudy\",\"thunderstorms\":\"Thunderstorms\"},\"days\":{\"today\":\"Today\",\"monday\":\"Monday\",\"tuesday\":\"Tuesday\",\"wednesday\":\"Wednesday\",\"thursday\":\"Thursday\",\"friday\":\"Friday\",\"saturday\":\"Saturday\",\"sunday\":\"Sunday\"}},\"community\":{\"title\":\"Community Forum\",\"description\":\"Connect with other farmers, share knowledge, and grow together.\",\"chatRooms\":\"Chat Rooms\",\"you\":\"You\",\"attachmentPreview\":\"Attachment Preview:\",\"removeAttachment\":\"Remove attachment\",\"typeMessage\":\"Type a message...\",\"stopRecording\":\"Stop recording\",\"startRecording\":\"Start recording\",\"sendPhoto\":\"Send Photo\",\"send\":\"Send\",\"rooms\":{\"general\":\"General Discussion\",\"tomato\":\"Tomato Farming\",\"pest\":\"Pest Control\",\"organic\":\"Organic Methods\",\"market\":\"Market Prices\"},\"users\":{\"ramesh\":\"Ramesh\",\"suresh\":\"Suresh\",\"geeta\":\"Geeta\",\"ravi\":\"Ravi\",\"priya\":\"Priya\",\"amit\":\"Amit\"},\"messages\":{\"general\":{\"0\":\"Has anyone tried the new organic fertilizer? Seeing good results here.\",\"1\":\"Yes, I have! My tomato yield has increased by almost 15%.\",\"2\":\"That's great to hear! I was thinking of buying it. Is it good for leafy greens?\",\"3\":\"Absolutely! My spinach has never been healthier.\"},\"tomato\":{\"0\":\"My tomato plants are showing some yellow leaves. Any advice?\",\"1\":\"Could be a nitrogen deficiency. Have you tested your soil recently?\"},\"pest\":{\"0\":\"Whiteflies are a major issue in my cotton crop. What's the best way to handle them?\"},\"organic\":{\"0\":\"I'm looking for good organic composting techniques. Any resources?\",\"1\":\"The E-Learning Hub has some great articles on vermicomposting!\"},\"market\":{\"0\":\"Onion prices in Pune seem to be dropping. Should I sell now or wait?\"}}},\"shop\":{\"title\":\"Krishi Store\",\"description\":\"Choose where you want to buy your farming supplies from.\",\"govStoreAlt\":\"Government Store\",\"govStoreTitle\":\"Government Stores\",\"govStoreDescription\":\"Purchase subsidized seeds, fertilizers, and equipment directly from government-approved outlets. Ensures quality and fair pricing.\",\"govStoreButton\":\"Explore Government Portals\",\"privateMarketplaceAlt\":\"Private Marketplace\",\"privateMarketplaceTitle\":\"Private Marketplace\",\"privateMarketplaceDescription\":\"Browse a wide variety of products from different sellers. Find competitive prices and a larger selection of brands and items.\",\"privateMarketplaceButton\":\"Go to Marketplace\",\"government\":{\"title\":\"Government Portal\",\"showingContentFrom\":\"Showing content from\",\"backToStore\":\"Back to Store\",\"openInNewTab\":\"Open in New Tab\",\"embedNote\":\"Note: Some government websites may not work correctly when embedded. If you experience issues, please use the \\\"Open in New Tab\\\" button.\",\"iframeTitle\":\"Government Agri Coop Portal\"},\"marketplace\":{\"title\":\"Private Marketplace\",\"description\":\"Quality products for all your farming needs from various sellers.\",\"backToStore\":\"Back to Store\",\"addToCart\":\"Add to Cart\",\"comingSoonTitle\":\"Coming Soon!\",\"comingSoonMessage\":\"We couldn't find a product matching '{{query}}'. We are constantly expanding our inventory, so please check back later!\",\"irrelevantProductTitle\":\"Unrelated Product Search\",\"irrelevantProductMessage\":\"What you are looking for is not available. Only agriculture-related products are sold here.\",\"products\":{\"organicFertilizer\":\"Organic Fertilizer\",\"pesticideSpray\":\"Pesticide Spray\",\"highYieldSeeds\":\"High-Yield Seeds\",\"gardeningToolsSet\":\"Gardening Tools Set\",\"dripIrrigationKit\":\"Drip Irrigation Kit\",\"soilTestKit\":\"Soil Test Kit\",\"protectiveGloves\":\"Protective Gloves\",\"powerSprayer\":\"Power Sprayer\",\"greenhousePolythene\":\"Greenhouse Polythene\",\"waterPump\":\"Water Pump (1HP)\",\"cowManure\":\"Cow Manure (50kg)\",\"neemOil\":\"Neem Oil Pesticide\"}}},\"learn\":{\"title\":\"E-Learning Hub\",\"description\":\"Expand your knowledge with our collection of farming guides and tutorials.\",\"searchPlaceholder\":\"Search for articles, videos, or products...\",\"stopRecording\":\"Stop Recording\",\"startVoiceSearch\":\"Start Voice Search\",\"closePlayer\":\"Close Player\",\"watchOnYoutube\":\"Watch on YouTube\",\"tabs\":{\"articles\":\"Articles & Guides\",\"videos\":\"Video Tutorials\"},\"webSearchResults\":\"Web Search Results\",\"irrelevantTopic\":\"Irrelevant Topic\",\"irrelevantTopicMessage\":\"Your search for \\\"{{query}}\\\" seems to be unrelated to agriculture. Please try a different search term.\",\"readFullArticle\":\"Read Full Article\",\"ourGuides\":\"Our Guides\",\"readMore\":\"Read More\",\"watchNow\":\"Watch Now\",\"noVideosFound\":\"No Videos Found\",\"noVideosFoundMessage\":\"Your search for \\\"{{query}}\\\" did not return any videos. Please try a different search term.\",\"noArticlesFound\":\"No Matching Guides or Web Results\",\"noArticlesFoundMessage\":\"Your search for \\\"{{query}}\\\" did not match any of our guides or find any articles on the web. Please try a different search term.\",\"searchOnGoogle\":\"Search on Google\",\"articles\":{\"dripIrrigation\":{\"title\":\"Mastering Drip Irrigation\",\"description\":\"A comprehensive guide to setting up and maintaining drip irrigation systems for maximizing water efficiency and boosting crop yields. Covers component selection, layout planning, and troubleshooting common issues.\"},\"ipm\":{\"title\":\"Integrated Pest Management (IPM)\",\"description\":\"Explore sustainable, eco-friendly strategies to manage pests. This guide covers biological controls, cultural practices, and the targeted use of pesticides to protect your crops and the environment.\"},\"soilHealth\":{\"title\":\"Soil Health and Nutrition\",\"description\":\"Unlock the secrets to rich, fertile soil. This article delves into the fundamentals of soil science, including composition, pH balance, and how to enrich your soil for healthier, more productive plants.\"},\"composting\":{\"title\":\"Advanced Composting Techniques\",\"description\":\"Learn to transform farm waste into 'black gold'. This guide details various composting methods, including hot and cold composting, vermicomposting, and how to create balanced compost piles.\"},\"cropRotation\":{\"title\":\"Understanding Crop Rotation\",\"description\":\"Discover the benefits of strategic crop rotation, including improved soil fertility, pest and disease cycle disruption, and increased biodiversity. Includes sample rotation plans for common crops.\"},\"organicFarming\":{\"title\":\"Basics of Organic Farming\",\"description\":\"An essential introduction to the core principles and practices of organic agriculture. Covers certification, natural fertilization, weed control, and marketing organic produce for sustainable farming.\"}}},\"profile\":{\"title\":\"Farmer Profile\",\"description\":\"Manage your personal information and preferences.\",\"backToDashboard\":\"Back to Dashboard\",\"cardTitle\":\"Personal Information\",\"cardDescription\":\"Keep your details up to date to receive personalized recommendations.\",\"uploading\":\"Uploading...\",\"changePhoto\":\"Change Photo\",\"fullName\":\"Full Name\",\"email\":\"Email Address\",\"location\":\"Location (District)\",\"selectDistrict\":\"Select district...\",\"searchDistrict\":\"Search district...\",\"noDistrictFound\":\"No district found.\",\"language\":\"Preferred Language\",\"selectLanguage\":\"Select language\",\"myCrops\":\"My Crops\",\"myCropsDescription\":\"Add crops you cultivate to get relevant alerts and advice (comma-separated).\",\"saving\":\"Saving...\",\"saveChanges\":\"Save Changes\"},\"settings\":{\"title\":\"Application Settings\",\"description\":\"Customize the look and feel of the application.\",\"theme\":{\"title\":\"Theme\",\"description\":\"Select a theme for the application.\",\"light\":\"Light\",\"dark\":\"Dark\",\"system\":\"System\"},\"about\":{\"title\":\"About KishanBhai\",\"description\":\"KishanBhai is an AI-powered farming assistant designed to support small-scale Indian farmers with real-time crop diagnosis, mandi prices, government schemes, and personalized farming advice in local languages.\"},\"version\":{\"title\":\"App Version\"},\"poweredBy\":{\"title\":\"Powered By\",\"tech1\":\"Google Cloud Vertex AI\",\"tech2\":\"Firebase\",\"tech3\":\"Gemini Multimodal Models\"},\"developedBy\":{\"title\":\"Developed By\",\"teamName\":\"Team WinnerBoys\"},\"contact\":{\"title\":\"Contact Us\",\"emailLabel\":\"Email\",\"whatsappLabel\":\"WhatsApp\"},\"legal\":{\"privacy\":\"Privacy Policy\",\"terms\":\"Terms of Use\"}},\"privacy\":{\"description\":\"Our commitment to your privacy.\",\"backToSettings\":\"Back to Settings\",\"lastUpdated\":{\"title\":\"Last Updated\",\"date\":\"August 25, 2025\"},\"introduction\":{\"title\":\"Introduction\",\"content\":\"Welcome to KishanBhai. We are committed to protecting your privacy and handling your data in an open and transparent manner. This privacy policy sets out how we collect, use, and protect your information.\"},\"information\":{\"title\":\"Information We Collect\",\"personal\":{\"title\":\"Personal Information\",\"content\":\"When you register, we collect your name, email, and location to create and manage your account.\"},\"usage\":{\"title\":\"Usage Data\",\"content\":\"We collect information on how you interact with our services, such as features used and frequency of access.\"},\"image\":{\"title\":\"Image Data\",\"content\":\"For our Crop Doctor feature, we collect images you upload. These are used solely for diagnosis and are not shared with third parties.\"}},\"useOfInfo\":{\"title\":\"How We Use Your Information\",\"content\":\"We use your information to provide and improve our services, personalize your experience, and communicate with you.\"},\"dataSharing\":{\"title\":\"Data Sharing\",\"content\":\"We do not sell your personal data. We may share anonymized data with partners for research purposes, but never your personal identifiable information without your consent.\"},\"dataSecurity\":{\"title\":\"Data Security\",\"content\":\"We implement a variety of security measures to maintain the safety of your personal information.\"},\"yourRights\":{\"title\":\"Your Rights\",\"content\":\"You have the right to access, correct, or delete your personal data at any time through your profile settings or by contacting us.\"},\"changes\":{\"title\":\"Changes to This Policy\",\"content\":\"We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.\"},\"contact\":{\"title\":\"Contact Us\",\"content\":\"If you have any questions about this Privacy Policy, please contact us at support@KishanBhai.in.\"}},\"terms\":{\"description\":\"Rules for using our service.\",\"backToSettings\":\"Back to Settings\",\"lastUpdated\":{\"title\":\"Last Updated\",\"date\":\"July 26, 2024\"},\"acceptance\":{\"title\":\"Acceptance of Terms\",\"content\":\"By accessing and using KishanBhai, you accept and agree to be bound by the terms and provision of this agreement.\"},\"useOfService\":{\"title\":\"Use of Service\",\"content\":\"You agree to use our services for lawful purposes only and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the service.\",\"item1\":\"You are responsible for maintaining the confidentiality of your account and password.\",\"item2\":\"The advice provided by the AI is for informational purposes only and should not be considered a substitute for professional agricultural advice.\",\"item3\":\"You must not misuse our services by knowingly introducing viruses or other material that is malicious or technologically harmful.\"},\"disclaimer\":{\"title\":\"Disclaimer of Warranties\",\"content\":\"The service is provided on an 'as is' and 'as available' basis without any warranties of any kind, either express or implied.\"},\"limitation\":{\"title\":\"Limitation of Liability\",\"content\":\"In no event shall KishanBhai or its developers be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.\"},\"termination\":{\"title\":\"Termination\",\"content\":\"We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.\"},\"governingLaw\":{\"title\":\"Governing Law\",\"content\":\"These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.\"},\"changes\":{\"title\":\"Changes\",\"content\":\"We reserve the right, at our sole discretion, to modify or replace these Terms at any time.\"}},\"toast\":{\"browserNotSupported\":\"Browser Not Supported\",\"noVoiceSupport\":\"Your browser does not support voice recognition.\",\"noSpeechDetected\":\"No Speech Detected\",\"tryAgain\":\"Please try again and speak clearly into the microphone.\",\"voiceError\":\"Voice Recognition Error\",\"unsupportedFileType\":\"Unsupported File Type\",\"selectAnImage\":\"Please select an image file.\",\"speechGenerationFailed\":\"Speech Generation Failed\",\"couldNotGenerateAudio\":\"Could not generate audio for the diagnosis.\",\"couldNotGenerateAudioAnalysis\":\"Could not generate audio for the analysis.\",\"noImageSelected\":\"No Image Selected\",\"selectImageToDiagnose\":\"Please select an image of your crop to diagnose.\",\"diagnosisFailed\":\"Diagnosis Failed\",\"errorAnalyzingImage\":\"An error occurred while analyzing the image. Please try again.\",\"emptyQuery\":\"Empty Query\",\"enterMarketQuestion\":\"Please enter your question about market prices.\",\"analysisFailed\":\"Analysis Failed\",\"errorAnalyzingMarket\":\"An error occurred while analyzing the market data. Please try again.\",\"enterSchemeQuestion\":\"Please enter your question about a government scheme.\",\"searchFailed\":\"Search Failed\",\"errorFetchingScheme\":\"An error occurred while fetching scheme details. Please try again.\",\"errorFetchingWeather\":\"Error fetching weather\",\"couldNotRetrieveWeather\":\"Could not retrieve weather data for the specified location.\",\"videoSearchFailed\":\"Video Search Failed\",\"couldNotRetrieveVideos\":\"Could not retrieve video tutorials.\",\"summarizationFailed\":\"Summarization Failed\",\"couldNotSummarize\":\"Could not summarize an article from the web.\",\"signUpSuccess\":\"Sign Up Successful\",\"signUpSuccessDesc\":\"Welcome! Please log in to continue.\",\"unexpectedError\":\"An unexpected error occurred.\",\"invalidCredentials\":\"Invalid email or password. Please try again.\",\"emailInUse\":\"An account with this email already exists.\",\"signUpFailed\":\"Sign Up Failed\",\"signInFailed\":\"Sign In Failed\",\"profileUpdated\":\"Profile Updated\",\"profileUpdatedDesc\":\"Your information has been successfully saved.\",\"updateFailed\":\"Update Failed\",\"updateFailedDesc\":\"Could not save your changes. Please try again.\",\"photoUpdated\":\"Photo Updated\",\"photoUpdatedDesc\":\"Your profile picture has been changed.\",\"uploadFailed\":\"Upload Failed\",\"uploadFailedDesc\":\"Could not change your profile picture. Please try again.\",\"recommendationFailed\":\"Recommendation Failed\",\"errorGeneratingRecommendation\":\"Could not generate crop recommendations. Please try again.\",\"noInput\":\"No Input Provided\",\"provideImageOrDescription\":\"Please upload an image or provide a description of the issue.\"},\"tracker\":{\"title\":\"Expense & Profit Tracker\",\"description\":\"Log your incomes and expenses to track crop profitability.\",\"addTransaction\":\"Add Transaction\",\"editTransaction\":\"Edit Transaction\",\"transactionDetails\":\"Enter the details for your income or expense.\",\"totalIncome\":\"Total Income\",\"totalExpense\":\"Total Expense\",\"netProfitLoss\":\"Net Profit / Loss\",\"recentTransactions\":\"Recent Transactions\",\"recentTransactionsDesc\":\"A log of your most recent incomes and expenses.\",\"noTransactions\":\"No transactions yet. Click 'Add Transaction' to start.\",\"summaryChart\":\"Income vs. Expense\",\"summaryChartDesc\":\"A visual summary of your finances.\",\"chart\":{\"income\":\"Income\",\"expense\":\"Expense\"},\"form\":{\"description\":\"Description\",\"amount\":\"Amount (₹)\",\"type\":\"Type\",\"selectType\":\"Select a type\",\"income\":\"Income\",\"expense\":\"Expense\",\"category\":\"Category\",\"selectCategory\":\"Select a category\",\"date\":\"Date\",\"pickDate\":\"Pick a date\",\"cancel\":\"Cancel\",\"save\":\"Save Transaction\"},\"categories\":{\"seeds\":\"Seeds\",\"fertilizers\":\"Fertilizers\",\"pesticides\":\"Pesticides\",\"labor\":\"Labor\",\"equipment\":\"Equipment\",\"fuel\":\"Fuel\",\"rent\":\"Land Rent\",\"other\":\"Other\",\"cropSale\":\"Crop Sale\",\"subsidy\":\"Subsidy\"},\"actions\":{\"edit\":\"Edit\",\"delete\":\"Delete\"}},\"cropRecommender\":{\"title\":\"AI Crop Recommender\",\"description\":\"Get intelligent crop suggestions based on your location, farm type, and market trends.\",\"client\":{\"formTitle\":\"Farm Details\",\"formDescription\":\"Provide details about your farm to get the best recommendations.\",\"farmType\":\"Farm Type\",\"irrigated\":\"Irrigated\",\"rainfed\":\"Rainfed / Dry\",\"landSize\":\"Land Size (e.g., 2 acres)\",\"cropPreference\":\"Crop Preference (Optional)\",\"cropPreferencePlaceholder\":\"e.g., Vegetables, Millets\",\"getRecommendations\":\"Get Recommendations\",\"gettingRecommendations\":\"Getting Recommendations...\",\"resultsTitle\":\"AI-Powered Recommendations\",\"resultsPlaceholder\":\"Your personalized crop recommendations will appear here.\",\"topPicks\":\"Our Top Picks For You\",\"topPicksDescription\":\"Based on your inputs, here are the most suitable crops for the upcoming season.\",\"learnMore\":\"Learn More\",\"soilType\":\"Soil Type (Optional)\",\"selectSoilType\":\"Select soil type\",\"soilTypes\":{\"black\":\"Black\",\"red\":\"Red\",\"loamy\":\"Loamy\",\"sandy\":\"Sandy\",\"clay\":\"Clay\"},\"waterSource\":\"Water Source (Optional)\",\"selectWaterSource\":\"Select water source\",\"waterSources\":{\"borewell\":\"Borewell\",\"canal\":\"Canal\",\"rain-only\":\"Rain-only\",\"tank\":\"Tank\",\"river\":\"River\"},\"currentSeason\":\"Current Season\",\"seasons\":{\"kharif\":\"Kharif\",\"rabi\":\"Rabi\",\"zaid\":\"Zaid\"},\"previousCrop\":\"Previous Crop (Optional)\",\"budget\":\"Budget (Optional)\",\"keyBenefits\":\"Key Benefits\"}},\"chatbot\":{\"title\":\"Annapurna Assistant\",\"description\":\"Your personal farming assistant. Ask me anything!\",\"open\":\"Open Chatbot\",\"placeholder\":\"Ask Annapurna a question...\",\"welcomeMessage\":\"Hi {{name}}! I'm Annapurna. How can I help you today? You can ask me to show you market prices, diagnose a crop, or find a government scheme.\",\"errorMessage\":\"I'm sorry, I'm having trouble connecting right now. Please try again in a moment.\",\"yes\":\"Yes\",\"no\":\"No\"}}"));}}),
"[project]/src/locales/hi.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"common\":{\"loading\":\"लोड हो रहा है\",\"initializing\":\"आपका डैशबोर्ड प्रारंभ हो रहा है...\"},\"nav\":{\"dashboard\":\"डैशबोर्ड\",\"cropDoctor\":\"फसल डॉक्टर\",\"marketAnalyst\":\"बाजार विश्लेषक\",\"govtSchemes\":\"सरकारी योजनाएं\",\"weather\":\"मौसम\",\"community\":\"समुदाय\",\"shop\":\"दुकान\",\"eLearning\":\"ई-लर्निंग\",\"tracker\":\"ट्रैकर\",\"cropRecommender\":\"फसल सिफारिश\",\"profile\":\"प्रोफ़ाइल\",\"settings\":\"सेटिंग्स\"},\"userNav\":{\"profile\":\"प्रोफ़ाइल\",\"settings\":\"सेटिंग्स\",\"logout\":\"लॉग आउट करें\"},\"dashboardLayout\":{\"toggleMenu\":\"मेनू टॉगल करें\",\"menuTitle\":\"नेविगेशन मेनू\",\"menuDescription\":\"एप्लिकेशन के लिए मुख्य नेविगेशन लिंक।\"},\"login\":{\"imageAlt\":\"एक हरे-भरे खेत की छवि\",\"tagline\":\"प्रौद्योगिकी के माध्यम से कृषि को सशक्त बनाना\",\"subTagline\":\"बेहतर पैदावार और टिकाऊ प्रथाओं के लिए AI का लाभ उठाने वाले आधुनिक किसानों के समुदाय में शामिल हों।\",\"createAccountPrompt\":\"शुरू करने के लिए अपना खाता बनाएं।\",\"signInPrompt\":\"वापसी पर स्वागत है! अपने डैशबोर्ड में साइन इन करें।\",\"emailLabel\":\"ईमेल\",\"passwordLabel\":\"पासवर्ड\",\"processing\":\"संसाधित हो रहा है...\",\"createAccountButton\":\"खाता बनाएं\",\"signInButton\":\"साइन इन करें\",\"alreadyHaveAccount\":\"पहले से ही एक खाता है?\",\"dontHaveAccount\":\"खाता नहीं है?\",\"signInLink\":\"साइन इन करें\",\"signUpLink\":\"साइन अप करें\"},\"dashboard\":{\"welcome\":\"वापसी पर स्वागत है, {{name}}!\",\"description\":\"यहाँ आपके खेत और बाजार का एक त्वरित अवलोकन है।\",\"farmer\":\"किसान\",\"quickLinks\":{\"cropDoctor\":\"फसल रोगों का तुरंत निदान करें।\",\"marketAnalyst\":\"वास्तविक समय मूल्य विश्लेषण प्राप्त करें।\",\"govtSchemes\":\"आपके लिए सरकारी योजनाएं खोजें।\",\"eLearning\":\"गाइड और ट्यूटोरियल ब्राउज़ करें।\",\"tracker\":\"अपने खेत के खर्च और मुनाफे को ट्रैक करें।\",\"cropRecommender\":\"AI-संचालित फसल सुझाव प्राप्त करें।\"},\"currentWeather\":\"वर्तमान मौसम\",\"weatherUnavailable\":\"मौसम डेटा अनुपलब्ध है।\",\"recommendations\":{\"title\":\"मौसमी फसल सिफारिशें\",\"description\":\"आपके स्थान और मौसम के आधार पर वर्तमान मौसम के लिए सुझाई गई फसलें।\",\"unavailable\":\"इस समय सिफारिशें लोड नहीं की जा सकीं।\"}},\"cropDoctor\":{\"title\":\"एआई फसल डॉक्टर\",\"description\":\"तत्काल निदान और सुझाए गए समाधान प्राप्त करने के लिए प्रभावित फसल के पत्ते की एक स्पष्ट छवि अपलोड करें।\",\"client\":{\"uploadTitle\":\"अपनी फसल का निदान करें\",\"uploadDescription\":\"सबसे सटीक निदान के लिए एक छवि अपलोड करें, समस्या का वर्णन करें, या दोनों करें।\",\"imageLabel\":\"छवि अपलोड करें\",\"changeFile\":\"फ़ाइल बदलें\",\"chooseFile\":\"फ़ाइल चुनें\",\"cropPreview\":\"फसल पूर्वावलोकन\",\"descriptionLabel\":\"समस्या का वर्णन करें\",\"descriptionPlaceholder\":\"जैसे, 'मेरे टमाटर के पत्तों पर भूरे केंद्रों के साथ पीले धब्बे हैं।' या बोलने के लिए माइक पर क्लिक करें।\",\"diagnosing\":\"निदान हो रहा है...\",\"diagnoseButton\":\"रोग का निदान करें\",\"resultTitle\":\"निदान परिणाम\",\"diagnosis\":\"निदान\",\"solutions\":\"सुझाए गए समाधान\",\"readDocs\":\"दस्तावेज़ पढ़ें\",\"watchVideo\":\"वीडियो देखें\",\"resultPlaceholder\":\"आपका निदान परिणाम यहां दिखाई देगा।\"}},\"marketAnalyst\":{\"title\":\"बाजार विश्लेषक\",\"description\":\"वास्तविक समय में बाजार मूल्य विश्लेषण और सिफारिशें प्राप्त करें। \\\"पुणे मंडी में प्याज की कीमत क्या है?\\\" जैसा प्रश्न पूछें।\",\"faqTitle\":\"अक्सर पूछे जाने वाले प्रश्न\",\"faqs\":{\"q1\":\"मैं किस तरह के प्रश्न पूछ सकता हूँ?\",\"a1\":\"आप विशिष्ट स्थानों में वर्तमान फसल की कीमतों, मूल्य प्रवृत्तियों के बारे में पूछ सकते हैं, और अपनी उपज बेचने या रखने पर सिफारिशें प्राप्त कर सकते हैं। उदाहरण के लिए: 'पुणे में टमाटर की कीमत क्या है?' या 'क्या मुझे अब अपना गेहूं स्टॉक बेचना चाहिए?'\",\"q2\":\"मूल्य जानकारी कितनी सटीक है?\",\"a2\":\"मूल्य की जानकारी विभिन्न कृषि बाजारों (मंडियों) से वास्तविक समय के आंकड़ों पर आधारित है। जबकि हम सटीकता के लिए प्रयास करते हैं, कीमतें तेजी से बदल सकती हैं। अपने निर्णयों के लिए एक गाइड के रूप में जानकारी का उपयोग करें।\",\"q3\":\"क्या मैं भविष्य की कीमतों की भविष्यवाणी के बारे में पूछ सकता हूँ?\",\"a3\":\"हां, आप मूल्य प्रवृत्ति विश्लेषण और भविष्यवाणियों के लिए पूछ सकते हैं। एआई ऐतिहासिक आंकड़ों और वर्तमान बाजार स्थितियों के आधार पर अंतर्दृष्टि प्रदान करेगा, लेकिन कृपया ध्यान दें कि ये पूर्वानुमान हैं और गारंटी नहीं हैं।\",\"q4\":\"कौन से स्थान और फसलें समर्थित हैं?\",\"a4\":\"सहायक भारत भर में प्रमुख फसलों और बाजारों की एक विस्तृत श्रृंखला को कवर करता है। आप विभिन्न शहरों और उनके मुख्य कृषि बाजारों में सब्जियों, अनाज, फलों आदि के बारे में पूछ सकते हैं।\"},\"client\":{\"askTitle\":\"अपना बाजार प्रश्न पूछें\",\"placeholder\":\"जैसे, अगले हफ्ते बैंगलोर में टमाटर की कीमतें बढ़ने की क्या संभावना है? या बोलने के लिए माइक पर क्लिक करें।\",\"analyzing\":\"विश्लेषण हो रहा है...\",\"getAnalysis\":\"विश्लेषण प्राप्त करें\",\"stopRecording\":\"रिकॉर्डिंग बंद करें\",\"useVoice\":\"आवाज का प्रयोग करें\",\"resultTitle\":\"विश्लेषण परिणाम\",\"recommendation\":\"सिफारिश\",\"marketAnalysis\":\"बाजार विश्लेषण\",\"resultPlaceholder\":\"आपका बाजार विश्लेषण यहां दिखाई देगा।\"}},\"schemes\":{\"title\":\"योजना और सूचना हब\",\"description\":\"प्रमुख सरकारी योजनाओं की खोज करें, नवीनतम समाचारों से अपडेट रहें, और आपके लिए अनुरूप जानकारी प्राप्त करें।\",\"keySchemesTitle\":\"प्रमुख सरकारी योजनाएं\",\"latestNewsTitle\":\"नवीनतम समाचार और अपडेट\",\"visitSite\":\"साइट पर जाएँ\",\"readMore\":\"और पढ़ें\",\"keySchemes\":{\"pmkisan\":{\"title\":\"पीएम-किसान योजना\",\"description\":\"छोटे और सीमांत किसान परिवारों के लिए प्रति वर्ष ₹6,000 की वित्तीय सहायता।\"},\"pmfby\":{\"title\":\"प्रधानमंत्री फसल बीमा योजना\",\"description\":\"प्राकृतिक आपदाओं, कीटों या बीमारियों के कारण फसल की विफलता के खिलाफ बीमा कवरेज।\"},\"kcc\":{\"title\":\"किसान क्रेडिट कार्ड (केसीसी)\",\"description\":\"किसानों को उनकी खेती और अन्य जरूरतों के लिए समय पर ऋण तक पहुंच प्रदान करता है।\"}},\"latestNews\":{\"kharifMsp\":{\"title\":\"सरकार ने खरीफ फसलों के लिए एमएसपी बढ़ाया\",\"description\":\"मंत्रिमंडल ने आगामी विपणन सीजन के लिए सभी अनिवार्य खरीफ फसलों के लिए न्यूनतम समर्थन मूल्य में एक महत्वपूर्ण बढ़ोतरी को मंजूरी दे दी है।\"},\"subsidyPortal\":{\"title\":\"कृषि सब्सिडी वितरण के लिए नया पोर्टल लॉन्च किया गया\",\"description\":\"विभिन्न कृषि उपकरणों के लिए सब्सिडी आवेदन और वितरण की प्रक्रिया को सुव्यवस्थित करने के लिए एक नया एकीकृत पोर्टल लॉन्च किया गया है।\"},\"horticultureMission\":{\"title\":\"राष्ट्रीय बागवानी मिशन के लिए दिशानिर्देश जारी\",\"description\":\"कृषि विभाग ने बागवानी क्षेत्र को बढ़ावा देने के लिए एनएचएम के लिए अद्यतन दिशानिर्देश जारी किए हैं, जिसमें फसल के बाद के प्रबंधन पर ध्यान केंद्रित किया गया है।\"},\"enamMilestone\":{\"title\":\"ई-नाम ने 1,000 मंडियों को एकीकृत करके नया मील का पत्थर हासिल किया\",\"description\":\"इलेक्ट्रॉनिक राष्ट्रीय कृषि बाजार (ई-नाम) प्लेटफॉर्म ने अब देश भर में 1,000 से अधिक कृषि उपज बाजारों को जोड़ा है।\"},\"solarPump\":{\"title\":\"सौर पंप योजना एक और साल के लिए बढ़ाई गई\",\"description\":\"पीएम-कुसुम योजना, जिसका उद्देश्य किसानों को सौर ऊर्जा से चलने वाले सिंचाई पंप प्रदान करना है, को मार्च 2025 तक बढ़ा दिया गया है।\"}},\"client\":{\"title\":\"एक विशिष्ट योजना खोजें\",\"description\":\"किसी भी सरकारी योजना पर विवरण प्राप्त करने के लिए हमारे एआई सहायक का उपयोग करें।\",\"placeholder\":\"जैसे, मुझे पीएम-किसान योजना के बारे में बताएं\",\"searching\":\"खोज कर रहा है...\",\"findScheme\":\"योजना खोजें\",\"stopRecording\":\"रिकॉर्डिंग बंद करें\",\"useVoice\":\"आवाज का प्रयोग करें\",\"eligibility\":\"पात्रता\",\"applyNow\":\"अभी आवेदन करें\",\"resultPlaceholder\":\"योजना का विवरण देखने के लिए एक प्रश्न पूछें।\"}},\"weather\":{\"title\":\"लाइव मौसम पूर्वानुमान\",\"description\":\"अपनी कृषि गतिविधियों की योजना तदनुसार बनाएं।\",\"enterCity\":\"शहर का नाम दर्ज करें...\",\"currentWeather\":\"वर्तमान मौसम\",\"rightNowIn\":\"अभी {{city}} में\",\"wind\":\"हवा\",\"humidity\":\"नमी\",\"weeklyForecast\":\"साप्ताहिक पूर्वानुमान\",\"noData\":\"कोई मौसम डेटा उपलब्ध नहीं है। कृपया एक अलग स्थान का प्रयास करें।\",\"conditions\":{\"sunny\":\"धूप\",\"partlyCloudy\":\"आंशिक रूप से बादल छाए रहेंगे\",\"cloudy\":\"बादल छाए रहेंगे\",\"showers\":\"फुहारें\",\"rainy\":\"बरसात\",\"humidAndCloudy\":\"नम और बादल छाए रहेंगे\",\"thunderstorms\":\"गरज के साथ बौछारें\"},\"days\":{\"today\":\"आज\",\"monday\":\"सोमवार\",\"tuesday\":\"मंगलवार\",\"wednesday\":\"बुधवार\",\"thursday\":\"गुरुवार\",\"friday\":\"शुक्रवार\",\"saturday\":\"शनिवार\",\"sunday\":\"रविवार\"}},\"community\":{\"title\":\"सामुदायिक मंच\",\"description\":\"अन्य किसानों से जुड़ें, ज्ञान साझा करें, और एक साथ बढ़ें।\",\"chatRooms\":\"चैट रूम\",\"you\":\"आप\",\"attachmentPreview\":\"अटैचमेंट पूर्वावलोकन:\",\"removeAttachment\":\"अटैचमेंट हटाएं\",\"typeMessage\":\"एक संदेश टाइप करें...\",\"stopRecording\":\"रिकॉर्डिंग बंद करें\",\"startRecording\":\"रिकॉर्डिंग शुरू करें\",\"sendPhoto\":\"फोटो भेजें\",\"send\":\"भेजें\",\"rooms\":{\"general\":\"सामान्य चर्चा\",\"tomato\":\"टमाटर की खेती\",\"pest\":\"कीट नियंत्रण\",\"organic\":\"जैविक तरीके\",\"market\":\"बाजार मूल्य\"},\"users\":{\"ramesh\":\"रमेश\",\"suresh\":\"सुरेश\",\"geeta\":\"गीता\",\"ravi\":\"रवि\",\"priya\":\"प्रिया\",\"amit\":\"अमित\"},\"messages\":{\"general\":{\"0\":\"क्या किसी ने नए जैविक उर्वरक का प्रयास किया है? यहाँ अच्छे परिणाम दिख रहे हैं।\",\"1\":\"हाँ, मैंने किया है! मेरी टमाटर की उपज लगभग 15% बढ़ गई है।\",\"2\":\"यह सुनकर बहुत अच्छा लगा! मैं इसे खरीदने की सोच रहा था। क्या यह पत्तेदार साग के लिए अच्छा है?\",\"3\":\"बिल्कुल! मेरी पालक कभी इतनी स्वस्थ नहीं रही।\"},\"tomato\":{\"0\":\"मेरे टमाटर के पौधों में कुछ पीले पत्ते दिखाई दे रहे हैं। कोई सलाह?\",\"1\":\"नाइट्रोजन की कमी हो सकती है। क्या आपने हाल ही में अपनी मिट्टी का परीक्षण किया है?\"},\"pest\":{\"0\":\"मेरी कपास की फसल में सफ़ेद मक्खियाँ एक बड़ी समस्या हैं। उन्हें संभालने का सबसे अच्छा तरीका क्या है?\"},\"organic\":{\"0\":\"मैं अच्छी जैविक खाद बनाने की तकनीक की तलाश में हूँ। कोई संसाधन?\",\"1\":\"ई-लर्निंग हब में वर्मीकम्पोस्टिंग पर कुछ बेहतरीन लेख हैं!\"},\"market\":{\"0\":\"पुणे में प्याज की कीमतें गिरती दिख रही हैं। क्या मुझे अभी बेचना चाहिए या इंतजार करना चाहिए?\"}}},\"shop\":{\"title\":\"कृषि स्टोर\",\"description\":\"चुनें कि आप अपनी कृषि आपूर्ति कहाँ से खरीदना चाहते हैं।\",\"govStoreAlt\":\"सरकारी स्टोर\",\"govStoreTitle\":\"सरकारी स्टोर\",\"govStoreDescription\":\"सब्सिडी वाले बीज, उर्वरक और उपकरण सीधे सरकार द्वारा अनुमोदित आउटलेट से खरीदें। गुणवत्ता और उचित मूल्य सुनिश्चित करता है।\",\"govStoreButton\":\"सरकारी पोर्टल देखें\",\"privateMarketplaceAlt\":\"निजी बाज़ार\",\"privateMarketplaceTitle\":\"निजी बाज़ार\",\"privateMarketplaceDescription\":\"विभिन्न विक्रेताओं से उत्पादों की एक विस्तृत विविधता ब्राउज़ करें। प्रतिस्पर्धी मूल्य और ब्रांडों और वस्तुओं का एक बड़ा चयन खोजें।\",\"privateMarketplaceButton\":\"बाज़ार में जाएं\",\"government\":{\"title\":\"सरकारी पोर्टल\",\"showingContentFrom\":\"से सामग्री दिखाई जा रही है\",\"backToStore\":\"स्टोर पर वापस जाएं\",\"openInNewTab\":\"नई टैब में खोलें\",\"embedNote\":\"नोट: कुछ सरकारी वेबसाइटें एम्बेड किए जाने पर सही ढंग से काम नहीं कर सकती हैं। यदि आपको समस्याएँ आती हैं, तो कृपया \\\"नई टैब में खोलें\\\" बटन का उपयोग करें।\",\"iframeTitle\":\"सरकारी कृषि कॉप पोर्टल\"},\"marketplace\":{\"title\":\"निजी बाज़ार\",\"description\":\"आपकी सभी कृषि जरूरतों के लिए विभिन्न विक्रेताओं से गुणवत्ता वाले उत्पाद।\",\"backToStore\":\"स्टोर पर वापस जाएं\",\"addToCart\":\"कार्ट में जोड़ें\",\"comingSoonTitle\":\"जल्द आ रहा है!\",\"comingSoonMessage\":\"हमें '{{query}}' से मेल खाने वाला कोई उत्पाद नहीं मिला। हम अपनी इन्वेंट्री का लगातार विस्तार कर रहे हैं, इसलिए कृपया बाद में वापस देखें!\",\"irrelevantProductTitle\":\"अप्रासंगिक उत्पाद खोज\",\"irrelevantProductMessage\":\"आप जो खोज रहे हैं वह उपलब्ध नहीं है। यहाँ केवल कृषि संबंधी उत्पाद बेचे जाते हैं।\",\"products\":{\"organicFertilizer\":\"जैविक उर्वरक\",\"pesticideSpray\":\"कीटनाशक स्प्रे\",\"highYieldSeeds\":\"उच्च उपज वाले बीज\",\"gardeningToolsSet\":\"बागवानी उपकरण सेट\",\"dripIrrigationKit\":\"ड्रिप सिंचाई किट\",\"soilTestKit\":\"मिट्टी परीक्षण किट\",\"protectiveGloves\":\"सुरक्षात्मक दस्ताने\",\"powerSprayer\":\"पावर स्प्रेयर\",\"greenhousePolythene\":\"ग्रीनहाउस पॉलीथीन\",\"waterPump\":\"पानी का पंप (1HP)\",\"cowManure\":\"गाय का गोबर (50 किलो)\",\"neemOil\":\"नीम का तेल कीटनाशक\"}}},\"learn\":{\"title\":\"ई-लर्निंग हब\",\"description\":\"हमारे खेती गाइड और ट्यूटोरियल के संग्रह के साथ अपने ज्ञान का विस्तार करें।\",\"searchPlaceholder\":\"खेती के विषयों पर लेख, वीडियो या उत्पाद खोजें...\",\"stopRecording\":\"रिकॉर्डिंग बंद करें\",\"startVoiceSearch\":\"आवाज खोज शुरू करें\",\"closePlayer\":\"प्लेयर बंद करें\",\"watchOnYoutube\":\"YouTube पर देखें\",\"tabs\":{\"articles\":\"लेख और गाइड\",\"videos\":\"वीडियो ट्यूटोरियल\"},\"webSearchResults\":\"वेब खोज परिणाम\",\"irrelevantTopic\":\"अप्रासंगिक विषय\",\"irrelevantTopicMessage\":\"आपकी खोज \\\"{{query}}\\\" कृषि से असंबंधित लगती है। कृपया एक अलग खोज शब्द का प्रयास करें।\",\"readFullArticle\":\"पूरा लेख पढ़ें\",\"ourGuides\":\"हमारे गाइड\",\"readMore\":\"और पढ़ें\",\"watchNow\":\"अभी देखें\",\"noVideosFound\":\"कोई वीडियो नहीं मिला\",\"noVideosFoundMessage\":\"आपकी खोज \\\"{{query}}\\\" के लिए कोई वीडियो नहीं मिला। कृपया एक अलग खोज शब्द का प्रयास करें।\",\"noArticlesFound\":\"कोई मेल खाने वाले गाइड या वेब परिणाम नहीं\",\"noArticlesFoundMessage\":\"आपकी खोज \\\"{{query}}\\\" हमारे किसी भी गाइड से मेल नहीं खाती है या वेब पर कोई लेख नहीं मिला। कृपया एक अलग खोज शब्द का प्रयास करें।\",\"searchOnGoogle\":\"Google पर खोजें\",\"articles\":{\"dripIrrigation\":{\"title\":\"ड्रिप सिंचाई में महारत हासिल करना\",\"description\":\"पानी की दक्षता को अधिकतम करने और फसल की पैदावार बढ़ाने के लिए ड्रिप सिंचाई प्रणाली स्थापित करने और बनाए रखने के लिए एक व्यापक गाइड। घटक चयन, लेआउट योजना, और सामान्य समस्याओं का निवारण शामिल है।\"},\"ipm\":{\"title\":\"एकीकृत कीट प्रबंधन (आईपीएम)\",\"description\":\"कीटों का प्रबंधन करने के लिए टिकाऊ, पर्यावरण के अनुकूल रणनीतियों का अन्वेषण करें। यह गाइड जैविक नियंत्रण, सांस्कृतिक प्रथाओं, और अपनी फसलों और पर्यावरण की रक्षा के लिए कीटनाशकों के लक्षित उपयोग को कवर करता है।\"},\"soilHealth\":{\"title\":\"मृदा स्वास्थ्य और पोषण\",\"description\":\"समृद्ध, उपजाऊ मिट्टी के रहस्यों को अनलॉक करें। यह लेख मृदा विज्ञान के मूल सिद्धांतों में delves, जिसमें संरचना, पीएच संतुलन, और स्वस्थ, अधिक उत्पादक पौधों के लिए अपनी मिट्टी को कैसे समृद्ध किया जाए।\"},\"composting\":{\"title\":\"उन्नत खाद बनाने की तकनीकें\",\"description\":\"खेत के कचरे को 'काला सोना' में बदलना सीखें। यह गाइड विभिन्न खाद बनाने के तरीकों का विवरण देता है, जिसमें गर्म और ठंडी खाद बनाना, वर्मीकम्पोस्टिंग, और संतुलित खाद के ढेर कैसे बनाएं।\"},\"cropRotation\":{\"title\":\"फसल चक्र को समझना\",\"description\":\"रणनीतिक फसल चक्र के लाभों की खोज करें, जिसमें बेहतर मिट्टी की उर्वरता, कीट और रोग चक्र में व्यवधान, और बढ़ी हुई जैव विविधता शामिल है। आम फसलों के लिए नमूना रोटेशन योजनाओं को शामिल करता है।\"},\"organicFarming\":{\"title\":\"जैविक खेती की मूल बातें\",\"description\":\"जैविक कृषि के मूल सिद्धांतों और प्रथाओं का एक आवश्यक परिचय। प्रमाणन, प्राकृतिक उर्वरीकरण, खरपतवार नियंत्रण, और टिकाऊ खेती के लिए जैविक उपज के विपणन को कवर करता है।\"}}},\"profile\":{\"title\":\"किसान प्रोफ़ाइल\",\"description\":\"अपनी व्यक्तिगत जानकारी और वरीयताओं का प्रबंधन करें।\",\"backToDashboard\":\"डैशबोर्ड पर वापस जाएं\",\"cardTitle\":\"व्यक्तिगत जानकारी\",\"cardDescription\":\"व्यक्तिगत सिफारिशें प्राप्त करने के लिए अपने विवरण को अद्यतित रखें।\",\"uploading\":\"अपलोड हो रहा है...\",\"changePhoto\":\"फोटो बदलें\",\"fullName\":\"पूरा नाम\",\"email\":\"ईमेल पता\",\"location\":\"स्थान (जिला)\",\"selectDistrict\":\"जिला चुनें...\",\"searchDistrict\":\"जिला खोजें...\",\"noDistrictFound\":\"कोई जिला नहीं मिला।\",\"language\":\"पसंदीदा भाषा\",\"selectLanguage\":\"भाषा चुनें\",\"myCrops\":\"मेरी फसलें\",\"myCropsDescription\":\"प्रासंगिक अलर्ट और सलाह प्राप्त करने के लिए आप जिन फसलों की खेती करते हैं उन्हें जोड़ें (अल्पविराम से अलग)।\",\"saving\":\"सहेज रहा है...\",\"saveChanges\":\"परिवर्तन सहेजें\"},\"settings\":{\"title\":\"एप्लिकेशन सेटिंग्स\",\"description\":\"एप्लिकेशन के रंग-रूप को अनुकूलित करें।\",\"theme\":{\"title\":\"थीम\",\"description\":\"एप्लिकेशन के लिए एक थीम चुनें।\",\"light\":\"लाइट\",\"dark\":\"डार्क\",\"system\":\"सिस्टम\"},\"about\":{\"title\":\"किसान भाई के बारे में\",\"description\":\"किसान भाई एक एआई-संचालित कृषि सहायक है जिसे छोटे पैमाने के भारतीय किसानों को वास्तविक समय में फसल निदान, मंडी मूल्य, सरकारी योजनाओं और स्थानीय भाषाओं में व्यक्तिगत खेती की सलाह के साथ समर्थन देने के लिए डिज़ाइन किया गया है।\"},\"version\":{\"title\":\"ऐप संस्करण\"},\"poweredBy\":{\"title\":\"द्वारा संचालित\",\"tech1\":\"गूगल क्लाउड वर्टेक्स एआई\",\"tech2\":\"फायरबेस\",\"tech3\":\"जेमिनी मल्टीमॉडल मॉडल\"},\"developedBy\":{\"title\":\"द्वारा विकसित\",\"teamName\":\"टीम कोडोग्राम\"},\"contact\":{\"title\":\"हमसे संपर्क करें\",\"emailLabel\":\"ईमेल\",\"whatsappLabel\":\"व्हाट्सएप\"},\"legal\":{\"privacy\":\"गोपनीयता नीति\",\"terms\":\"उपयोग की शर्तें\"}},\"privacy\":{\"description\":\"आपकी गोपनीयता के प्रति हमारी प्रतिबद्धता।\",\"backToSettings\":\"सेटिंग्स पर वापस जाएं\",\"lastUpdated\":{\"title\":\"अंतिम अपडेट\",\"date\":\"26 जुलाई, 2024\"},\"introduction\":{\"title\":\"परिचय\",\"content\":\"किसान भाई में आपका स्वागत है। हम आपकी गोपनीयता की रक्षा करने और आपके डेटा को खुले और पारदर्शी तरीके से संभालने के लिए प्रतिबद्ध हैं। यह गोपनीयता नीति बताती है कि हम आपकी जानकारी कैसे एकत्र, उपयोग और संरक्षित करते हैं।\"},\"information\":{\"title\":\"हम जो जानकारी एकत्र करते हैं\",\"personal\":{\"title\":\"व्यक्तिगत जानकारी\",\"content\":\"जब आप पंजीकरण करते हैं, तो हम आपका खाता बनाने और प्रबंधित करने के लिए आपका नाम, ईमेल और स्थान एकत्र करते हैं।\"},\"usage\":{\"title\":\"उपयोग डेटा\",\"content\":\"हम जानकारी एकत्र करते हैं कि आप हमारी सेवाओं के साथ कैसे इंटरैक्ट करते हैं, जैसे उपयोग की जाने वाली सुविधाएँ और पहुँच की आवृत्ति।\"},\"image\":{\"title\":\"छवि डेटा\",\"content\":\"हमारे फसल डॉक्टर सुविधा के लिए, हम आपके द्वारा अपलोड की गई छवियों को एकत्र करते हैं। इनका उपयोग केवल निदान के लिए किया जाता है और तीसरे पक्ष के साथ साझा नहीं किया जाता है।\"}},\"useOfInfo\":{\"title\":\"हम आपकी जानकारी का उपयोग कैसे करते हैं\",\"content\":\"हम आपकी जानकारी का उपयोग हमारी सेवाओं को प्रदान करने और सुधारने, आपके अनुभव को निजीकृत करने और आपके साथ संवाद करने के लिए करते हैं।\"},\"dataSharing\":{\"title\":\"डेटा साझा करना\",\"content\":\"हम आपके व्यक्तिगत डेटा को नहीं बेचते हैं। हम अनुसंधान उद्देश्यों के लिए भागीदारों के साथ अज्ञात डेटा साझा कर सकते हैं, लेकिन आपकी सहमति के बिना कभी भी आपकी व्यक्तिगत पहचान योग्य जानकारी नहीं।\"},\"dataSecurity\":{\"title\":\"डेटा सुरक्षा\",\"content\":\"हम आपकी व्यक्तिगत जानकारी की सुरक्षा बनाए रखने के लिए विभिन्न सुरक्षा उपायों को लागू करते हैं।\"},\"yourRights\":{\"title\":\"आपके अधिकार\",\"content\":\"आपको अपनी प्रोफ़ाइल सेटिंग्स के माध्यम से या हमसे संपर्क करके किसी भी समय अपने व्यक्तिगत डेटा तक पहुँचने, उसे सही करने या हटाने का अधिकार है।\"},\"changes\":{\"title\":\"इस नीति में परिवर्तन\",\"content\":\"हम समय-समय पर इस गोपनीयता नीति को अपडेट कर सकते हैं। हम इस पृष्ठ पर नई नीति पोस्ट करके किसी भी परिवर्तन के बारे में आपको सूचित करेंगे।\"},\"contact\":{\"title\":\"हमसे संपर्क करें\",\"content\":\"यदि इस गोपनीयता नीति के बारे में आपके कोई प्रश्न हैं, तो कृपया हमसे support@krishimitra.in पर संपर्क करें।\"}},\"terms\":{\"description\":\"हमारी सेवा का उपयोग करने के नियम।\",\"backToSettings\":\"सेटिंग्स पर वापस जाएं\",\"lastUpdated\":{\"title\":\"अंतिम अपडेट\",\"date\":\"26 जुलाई, 2024\"},\"acceptance\":{\"title\":\"शर्तों की स्वीकृति\",\"content\":\"किसान भाई तक पहुँचने और उसका उपयोग करके, आप इस समझौते के नियमों और प्रावधानों से बंधे होने के लिए स्वीकार और सहमत होते हैं।\"},\"useOfService\":{\"title\":\"सेवा का उपयोग\",\"content\":\"आप हमारी सेवाओं का उपयोग केवल वैध उद्देश्यों के लिए और इस तरह से करने के लिए सहमत हैं जो किसी और के उपयोग और सेवा के आनंद का उल्लंघन, प्रतिबंध या निषेध नहीं करता है।\",\"item1\":\"आप अपने खाते और पासवर्ड की गोपनीयता बनाए रखने के लिए जिम्मेदार हैं।\",\"item2\":\"एआई द्वारा प्रदान की गई सलाह केवल सूचना के उद्देश्यों के लिए है और इसे पेशेवर कृषि सलाह का विकल्प नहीं माना जाना चाहिए।\",\"item3\":\"आपको जानबूझकर वायरस या अन्य सामग्री जो दुर्भावनापूर्ण या तकनीकी रूप से हानिकारक है, पेश करके हमारी सेवाओं का दुरुपयोग नहीं करना चाहिए।\"},\"disclaimer\":{\"title\":\"वारंटियों का अस्वीकरण\",\"content\":\"सेवा 'जैसा है' और 'जैसा उपलब्ध है' के आधार पर प्रदान की जाती है, बिना किसी भी प्रकार की वारंटी के, चाहे वह व्यक्त हो या निहित।\"},\"limitation\":{\"title\":\"दायित्व की सीमा\",\"content\":\"किसी भी स्थिति में किसान भाई या इसके डेवलपर्स किसी भी अप्रत्यक्ष, आकस्मिक, विशेष, परिणामी या दंडात्मक क्षति के लिए उत्तरदायी नहीं होंगे, जिसमें बिना किसी सीमा के, लाभ, डेटा, उपयोग, सद्भावना, या अन्य अमूर्त नुकसान शामिल हैं।\"},\"termination\":{\"title\":\"समाप्ति\",\"content\":\"यदि आप शर्तों का उल्लंघन करते हैं, तो हम बिना किसी पूर्व सूचना या दायित्व के, किसी भी कारण से आपके खाते को तुरंत समाप्त या निलंबित कर सकते हैं।\"},\"governingLaw\":{\"title\":\"शासकीय कानून\",\"content\":\"ये शर्तें भारत के कानूनों के अनुसार शासित और मानी जाएंगी, इसके कानून के प्रावधानों के टकराव के बिना।\"},\"changes\":{\"title\":\"परिवर्तन\",\"content\":\"हम अपने एकमात्र विवेक पर, किसी भी समय इन शर्तों को संशोधित करने या बदलने का अधिकार सुरक्षित रखते हैं।\"}},\"toast\":{\"browserNotSupported\":\"ब्राउज़र समर्थित नहीं है\",\"noVoiceSupport\":\"आपका ब्राउज़र आवाज पहचान का समर्थन नहीं करता है।\",\"noSpeechDetected\":\"कोई भाषण नहीं मिला\",\"tryAgain\":\"कृपया फिर से प्रयास करें और माइक्रोफोन में स्पष्ट रूप से बोलें।\",\"voiceError\":\"आवाज पहचान त्रुटि\",\"unsupportedFileType\":\"असमर्थित फ़ाइल प्रकार\",\"selectAnImage\":\"कृपया एक छवि फ़ाइल चुनें।\",\"speechGenerationFailed\":\"भाषण उत्पादन विफल\",\"couldNotGenerateAudio\":\"निदान के लिए ऑडियो उत्पन्न नहीं किया जा सका।\",\"couldNotGenerateAudioAnalysis\":\"विश्लेषण के लिए ऑडियो उत्पन्न नहीं किया जा सका।\",\"noImageSelected\":\"कोई छवि नहीं चुनी गई\",\"selectImageToDiagnose\":\"निदान के लिए कृपया अपनी फसल की एक छवि चुनें।\",\"diagnosisFailed\":\"निदान विफल\",\"errorAnalyzingImage\":\"छवि का विश्लेषण करते समय एक त्रुटि हुई। कृपया फिर से प्रयास करें।\",\"emptyQuery\":\"खाली प्रश्न\",\"enterMarketQuestion\":\"कृपया बाजार की कीमतों के बारे में अपना प्रश्न दर्ज करें।\",\"analysisFailed\":\"विश्लेषण विफल\",\"errorAnalyzingMarket\":\"बाजार के आंकड़ों का विश्लेषण करते समय एक त्रुटि हुई। कृपया फिर से प्रयास करें।\",\"enterSchemeQuestion\":\"कृपया एक सरकारी योजना के बारे में अपना प्रश्न दर्ज करें।\",\"searchFailed\":\"खोज विफल\",\"errorFetchingScheme\":\"योजना विवरण प्राप्त करते समय एक त्रुटि हुई। कृपया फिर से प्रयास करें।\",\"errorFetchingWeather\":\"मौसम लाने में त्रुटि\",\"couldNotRetrieveWeather\":\"निर्दिष्ट स्थान के लिए मौसम डेटा प्राप्त नहीं किया जा सका।\",\"videoSearchFailed\":\"वीडियो खोज विफल\",\"couldNotRetrieveVideos\":\"वीडियो ट्यूटोरियल प्राप्त नहीं किए जा सके।\",\"summarizationFailed\":\"सारांश विफल\",\"couldNotSummarize\":\"वेब से एक लेख का सारांश नहीं दिया जा सका।\",\"signUpSuccess\":\"साइन अप सफल\",\"signUpSuccessDesc\":\"स्वागत है! जारी रखने के लिए कृपया लॉग इन करें।\",\"unexpectedError\":\"एक अप्रत्याशोषित त्रुटि हुई।\",\"invalidCredentials\":\"अमान्य ईमेल या पासवर्ड। कृपया फिर से प्रयास करें।\",\"emailInUse\":\"इस ईमेल के साथ एक खाता पहले से मौजूद है।\",\"signUpFailed\":\"साइन अप विफल\",\"signInFailed\":\"साइन इन विफल\",\"profileUpdated\":\"प्रोफ़ाइल अपडेट की गई\",\"profileUpdatedDesc\":\"आपकी जानकारी सफलतापूर्वक सहेज ली गई है।\",\"updateFailed\":\"अपडेट विफल\",\"updateFailedDesc\":\"आपके परिवर्तन सहेजे नहीं जा सके। कृपया फिर से प्रयास करें।\",\"photoUpdated\":\"फोटो अपडेट किया गया\",\"photoUpdatedDesc\":\"आपकी प्रोफ़ाइल तस्वीर बदल दी गई है।\",\"uploadFailed\":\"अपलोड विफल\",\"uploadFailedDesc\":\"आपकी प्रोफ़ाइल तस्वीर नहीं बदली जा सकी। कृपया फिर से प्रयास करें।\",\"recommendationFailed\":\"सिफारिश विफल\",\"errorGeneratingRecommendation\":\"फसल सिफारिशें उत्पन्न नहीं की जा सकीं। कृपया फिर से प्रयास करें।\",\"noInput\":\"कोई इनपुट प्रदान नहीं किया गया\",\"provideImageOrDescription\":\"कृपया एक छवि अपलोड करें या समस्या का विवरण प्रदान करें।\"},\"tracker\":{\"title\":\"व्यय और लाभ ट्रैकर\",\"description\":\"फसल की लाभप्रदता को ट्रैक करने के लिए अपनी आय और व्यय लॉग करें।\",\"addTransaction\":\"लेन-देन जोड़ें\",\"editTransaction\":\"लेन-देन संपादित करें\",\"transactionDetails\":\"अपनी आय या व्यय के लिए विवरण दर्ज करें।\",\"totalIncome\":\"कुल आय\",\"totalExpense\":\"कुल व्यय\",\"netProfitLoss\":\"शुद्ध लाभ / हानि\",\"recentTransactions\":\"हाल के लेन-देन\",\"recentTransactionsDesc\":\"आपकी सबसे हाल की आय और व्यय का एक लॉग।\",\"noTransactions\":\"अभी तक कोई लेन-देन नहीं हुआ है। शुरू करने के लिए 'लेन-देन जोड़ें' पर क्लिक करें।\",\"summaryChart\":\"आय बनाम व्यय\",\"summaryChartDesc\":\"आपके वित्त का एक दृश्य सारांश।\",\"chart\":{\"income\":\"आय\",\"expense\":\"व्यय\"},\"form\":{\"description\":\"विवरण\",\"amount\":\"राशि (₹)\",\"type\":\"प्रकार\",\"selectType\":\"एक प्रकार चुनें\",\"income\":\"आय\",\"expense\":\"व्यय\",\"category\":\"श्रेणी\",\"selectCategory\":\"एक श्रेणी चुनें\",\"date\":\"दिनांक\",\"pickDate\":\"एक तारीख चुनें\",\"cancel\":\"रद्द करें\",\"save\":\"लेन-देन सहेजें\"},\"categories\":{\"seeds\":\"बीज\",\"fertilizers\":\"उर्वरक\",\"pesticides\":\"कीटनाशक\",\"labor\":\"श्रम\",\"equipment\":\"उपकरण\",\"fuel\":\"ईंधन\",\"rent\":\"भूमि किराया\",\"other\":\"अन्य\",\"cropSale\":\"फसल बिक्री\",\"subsidy\":\"सब्सिडी\"},\"actions\":{\"edit\":\"संपादित करें\",\"delete\":\"हटाएं\"}},\"cropRecommender\":{\"title\":\"एआई फसल सिफारिश\",\"description\":\"अपने स्थान, खेत के प्रकार और बाजार के रुझानों के आधार पर बुद्धिमान फसल सुझाव प्राप्त करें।\",\"client\":{\"formTitle\":\"खेत का विवरण\",\"formDescription\":\"सर्वोत्तम सिफारिशें प्राप्त करने के लिए अपने खेत के बारे में विवरण प्रदान करें।\",\"farmType\":\"खेत का प्रकार\",\"irrigated\":\"सिंचित\",\"rainfed\":\"वर्षा आधारित / सूखा\",\"landSize\":\"भूमि का आकार (जैसे, 2 एकड़)\",\"cropPreference\":\"फसल वरीयता (वैकल्पिक)\",\"cropPreferencePlaceholder\":\"जैसे, सब्जियां, बाजरा\",\"getRecommendations\":\"सिफारिशें प्राप्त करें\",\"gettingRecommendations\":\"सिफारिशें प्राप्त हो रही हैं...\",\"resultsTitle\":\"एआई-संचालित सिफारिशें\",\"resultsPlaceholder\":\"आपकी व्यक्तिगत फसल सिफारिशें यहां दिखाई देंगी।\",\"topPicks\":\"आपके लिए हमारी शीर्ष पसंद\",\"topPicksDescription\":\"आपके इनपुट के आधार पर, आगामी सीजन के लिए सबसे उपयुक्त फसलें यहां दी गई हैं।\",\"learnMore\":\"और जानें\",\"soilType\":\"मिट्टी का प्रकार (वैकल्पिक)\",\"selectSoilType\":\"मिट्टी का प्रकार चुनें\",\"soilTypes\":{\"black\":\"काली\",\"red\":\"लाल\",\"loamy\":\"दोमट\",\"sandy\":\"रेतीली\",\"clay\":\"चिकनी\"},\"waterSource\":\"जल स्रोत (वैकल्पिक)\",\"selectWaterSource\":\"जल स्रोत चुनें\",\"waterSources\":{\"borewell\":\"बोरवेल\",\"canal\":\"नहर\",\"rain-only\":\"केवल वर्षा\",\"tank\":\"टैंक\",\"river\":\"नदी\"},\"currentSeason\":\"वर्तमान मौसम\",\"seasons\":{\"kharif\":\"खरीफ\",\"rabi\":\"रबी\",\"zaid\":\"ज़ैद\"},\"previousCrop\":\"पिछली फसल (वैकल्पिक)\",\"budget\":\"बजट (वैकल्पिक)\",\"keyBenefits\":\"मुख्य लाभ\"}},\"chatbot\":{\"title\":\"अन्नपूर्णा सहायक\",\"description\":\"आपका व्यक्तिगत कृषि सहायक। मुझसे कुछ भी पूछें!\",\"open\":\"चैटबॉट खोलें\",\"placeholder\":\"अन्नपूर्णा से एक प्रश्न पूछें...\",\"welcomeMessage\":\"नमस्ते {{name}}! मैं अन्नपूर्णा हूँ। मैं आज आपकी कैसे मदद कर सकती हूँ? आप मुझसे बाजार मूल्य दिखाने, फसल का निदान करने, या सरकारी योजना खोजने के लिए कह सकते हैं।\",\"errorMessage\":\"मुझे खेद है, मुझे अभी कनेक्ट करने में समस्या हो रही है। कृपया कुछ क्षण बाद पुनः प्रयास करें।\",\"yes\":\"हाँ\",\"no\":\"नहीं\"}}"));}}),
"[project]/src/locales/kn.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"common\":{\"loading\":\"ಲೋಡ್ ಆಗುತ್ತಿದೆ\",\"initializing\":\"ನಿಮ್ಮ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಅನ್ನು ಪ್ರಾರಂಭಿಸಲಾಗುತ್ತಿದೆ...\"},\"nav\":{\"dashboard\":\"ಡ್ಯಾಶ್‌ಬೋರ್ಡ್\",\"cropDoctor\":\"ಬೆಳೆ ವೈದ್ಯ\",\"marketAnalyst\":\"ಮಾರುಕಟ್ಟೆ ವಿಶ್ಲೇಷಕ\",\"govtSchemes\":\"ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು\",\"weather\":\"ಹವಾಮಾನ\",\"community\":\"ಸಮುದಾಯ\",\"shop\":\"ಅಂಗಡಿ\",\"eLearning\":\"ಇ-ಲರ್ನಿಂಗ್\",\"tracker\":\"ಟ್ರ್ಯಾಕರ್\",\"cropRecommender\":\"ಬೆಳೆ ಶಿಫಾರಸು\",\"profile\":\"ಪ್ರೊಫೈಲ್\",\"settings\":\"ಸೆಟ್ಟಿಂಗ್‌ಗಳು\"},\"userNav\":{\"profile\":\"ಪ್ರೊಫೈಲ್\",\"settings\":\"ಸೆಟ್ಟಿಂಗ್‌ಗಳು\",\"logout\":\"ಲಾಗ್ ಔಟ್\"},\"dashboardLayout\":{\"toggleMenu\":\"ಮೆನು ಟಾಗಲ್ ಮಾಡಿ\",\"menuTitle\":\"ನ್ಯಾವಿಗೇಷನ್ ಮೆನು\",\"menuDescription\":\"ಅಪ್ಲಿಕೇಶನ್‌ಗಾಗಿ ಮುಖ್ಯ ನ್ಯಾವಿಗೇಷನ್ ಲಿಂಕ್‌ಗಳು.\"},\"login\":{\"imageAlt\":\"ಹಚ್ಚ ಹಸಿರಿನ ಜಮೀನಿನ ಚಿತ್ರ\",\"tagline\":\"ತಂತ್ರಜ್ಞಾನದ ಮೂಲಕ ಕೃಷಿಯನ್ನು ಸಶಕ್ತಗೊಳಿಸುವುದು\",\"subTagline\":\"ಉತ್ತಮ ಇಳುವರಿ ಮತ್ತು ಸುಸ್ಥಿರ ಪದ್ಧತಿಗಳಿಗಾಗಿ AI ಅನ್ನು ಬಳಸಿಕೊಳ್ಳುವ ಆಧುನಿಕ ರೈತರ ಸಮುದಾಯಕ್ಕೆ ಸೇರಿ.\",\"createAccountPrompt\":\"ಪ್ರಾರಂಭಿಸಲು ನಿಮ್ಮ ಖಾತೆಯನ್ನು ರಚಿಸಿ.\",\"signInPrompt\":\"ಮರಳಿ ಸ್ವಾಗತ! ನಿಮ್ಮ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಸೈನ್ ಇನ್ ಮಾಡಿ.\",\"emailLabel\":\"ಇಮೇಲ್\",\"passwordLabel\":\"ಪಾಸ್‌ವರ್ಡ್\",\"processing\":\"ಸಂಸ್ಕರಿಸಲಾಗುತ್ತಿದೆ...\",\"createAccountButton\":\"ಖಾತೆ ರಚಿಸಿ\",\"signInButton\":\"ಸೈನ್ ಇನ್ ಮಾಡಿ\",\"alreadyHaveAccount\":\"ಈಗಾಗಲೇ ಖಾತೆ ಇದೆಯೇ?\",\"dontHaveAccount\":\"ಖಾತೆ ಇಲ್ಲವೇ?\",\"signInLink\":\"ಸೈನ್ ಇನ್ ಮಾಡಿ\",\"signUpLink\":\"ಸೈನ್ ಅಪ್ ಮಾಡಿ\"},\"dashboard\":{\"welcome\":\"ಮರಳಿ ಸ್ವಾಗತ, {{name}}!\",\"description\":\"ನಿಮ್ಮ ಜಮೀನು ಮತ್ತು ಮಾರುಕಟ್ಟೆಯ ತ್ವರಿತ ಅವಲೋಕನ ಇಲ್ಲಿದೆ.\",\"farmer\":\"ರೈತ\",\"quickLinks\":{\"cropDoctor\":\"ಬೆಳೆ ರೋಗಗಳನ್ನು ತಕ್ಷಣವೇ ಪತ್ತೆ ಮಾಡಿ.\",\"marketAnalyst\":\"ನೈಜ-ಸಮಯದ ಬೆಲೆ ವಿಶ್ಲೇಷಣೆ ಪಡೆಯಿರಿ.\",\"govtSchemes\":\"ನಿಮಗಾಗಿ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ.\",\"eLearning\":\"ಮಾರ್ಗದರ್ಶಿಗಳು ಮತ್ತು ಟ್ಯುಟೋರಿಯಲ್‌ಗಳನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ.\",\"tracker\":\"ನಿಮ್ಮ ಕೃಷಿ ವೆಚ್ಚಗಳು ಮತ್ತು ಲಾಭಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.\",\"cropRecommender\":\"AI-ಚಾಲಿತ ಬೆಳೆ ಸಲಹೆಗಳನ್ನು ಪಡೆಯಿರಿ.\"},\"currentWeather\":\"ಪ್ರಸ್ತುತ ಹವಾಮಾನ\",\"weatherUnavailable\":\"ಹವಾಮಾನ ಡೇಟಾ ಲಭ್ಯವಿಲ್ಲ.\",\"recommendations\":{\"title\":\"ಋತುಮಾನದ ಬೆಳೆ ಶಿಫಾರಸುಗಳು\",\"description\":\"ನಿಮ್ಮ ಸ್ಥಳ ಮತ್ತು ಹವಾಮಾನವನ್ನು ಆಧರಿಸಿ ಪ್ರಸ್ತುತ ಋತುವಿಗೆ ಸೂಚಿಸಲಾದ ಬೆಳೆಗಳು.\",\"unavailable\":\"ಈ ಸಮಯದಲ್ಲಿ ಶಿಫಾರಸುಗಳನ್ನು ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.\"}},\"cropDoctor\":{\"title\":\"ಎಐ ಬೆಳೆ ವೈದ್ಯ\",\"description\":\"ತಕ್ಷಣದ ರೋಗನಿರ್ಣಯ ಮತ್ತು ಸೂಚಿಸಿದ ಪರಿಹಾರಗಳನ್ನು ಪಡೆಯಲು ಪೀಡಿತ ಬೆಳೆಯ ಎಲೆಯ ಸ್ಪಷ್ಟ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.\",\"client\":{\"uploadTitle\":\"ನಿಮ್ಮ ಬೆಳೆಯನ್ನು ಪತ್ತೆ ಮಾಡಿ\",\"uploadDescription\":\"ಅತ್ಯಂತ ನಿಖರವಾದ ರೋಗನಿರ್ಣಯಕ್ಕಾಗಿ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ, ಸಮಸ್ಯೆಯನ್ನು ವಿವರಿಸಿ, ಅಥವಾ ಎರಡನ್ನೂ ಮಾಡಿ.\",\"imageLabel\":\"ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ\",\"changeFile\":\"ಫೈಲ್ ಬದಲಾಯಿಸಿ\",\"chooseFile\":\"ಫೈಲ್ ಆಯ್ಕೆಮಾಡಿ\",\"cropPreview\":\"ಬೆಳೆ ಪೂರ್ವವೀಕ್ಷಣೆ\",\"descriptionLabel\":\"ಸಮಸ್ಯೆಯನ್ನು ವಿವರಿಸಿ\",\"descriptionPlaceholder\":\"ಉದಾಹರಣೆಗೆ, 'ನನ್ನ ಟೊಮೆಟೊ ಎಲೆಗಳಲ್ಲಿ ಕಂದು ಕೇಂದ್ರಗಳೊಂದಿಗೆ ಹಳದಿ ಕಲೆಗಳಿವೆ.' ಅಥವಾ ಮಾತನಾಡಲು ಮೈಕ್ ಕ್ಲಿಕ್ ಮಾಡಿ.\",\"diagnosing\":\"ರೋಗನಿರ್ಣಯ ಮಾಡಲಾಗುತ್ತಿದೆ...\",\"diagnoseButton\":\"ರೋಗವನ್ನು ಪತ್ತೆ ಮಾಡಿ\",\"resultTitle\":\"ರೋಗನಿರ್ಣಯದ ಫಲಿತಾಂಶ\",\"diagnosis\":\"ರೋಗನಿರ್ಣಯ\",\"solutions\":\"ಸೂಚಿಸಿದ ಪರಿಹಾರಗಳು\",\"readDocs\":\"ದಾಖಲೆಗಳನ್ನು ಓದಿ\",\"watchVideo\":\"ವೀಡಿಯೊವನ್ನು ವೀಕ್ಷಿಸಿ\",\"resultPlaceholder\":\"ನಿಮ್ಮ ರೋಗನಿರ್ಣಯದ ಫಲಿತಾಂಶ ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ.\"}},\"marketAnalyst\":{\"title\":\"ಮಾರುಕಟ್ಟೆ ವಿಶ್ಲೇಷಕ\",\"description\":\"ನೈಜ-ಸಮಯದ ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ. \\\"ಪುಣೆ ಮಂಡಿಯಲ್ಲಿ ಈರುಳ್ಳಿ ಬೆಲೆ ಏನು?\\\" ಎಂದು ಕೇಳಿ.\",\"faqTitle\":\"ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು\",\"faqs\":{\"q1\":\"ನಾನು ಯಾವ ರೀತಿಯ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಬಹುದು?\",\"a1\":\"ನೀವು ನಿರ್ದಿಷ್ಟ ಸ್ಥಳಗಳಲ್ಲಿ ಪ್ರಸ್ತುತ ಬೆಳೆ ಬೆಲೆಗಳು, ಬೆಲೆ ಪ್ರವೃತ್ತಿಗಳ ಬಗ್ಗೆ ಕೇಳಬಹುದು ಮತ್ತು ನಿಮ್ಮ ಉತ್ಪನ್ನವನ್ನು ಮಾರಾಟ ಮಾಡಬೇಕೇ ಅಥವಾ ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳಬೇಕೇ ಎಂಬುದರ ಕುರಿತು ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಬಹುದು. ಉದಾಹರಣೆಗೆ: 'ಪುಣೆಯಲ್ಲಿ ಟೊಮೆಟೊ ಬೆಲೆ ಏನು?' ಅಥವಾ 'ನಾನು ಈಗ ನನ್ನ ಗೋಧಿ ಸ್ಟಾಕ್ ಅನ್ನು ಮಾರಾಟ ಮಾಡಬೇಕೇ?'\",\"q2\":\"ಬೆಲೆ ಮಾಹಿತಿ ಎಷ್ಟು ನಿಖರವಾಗಿದೆ?\",\"a2\":\"ಬೆಲೆ ಮಾಹಿತಿಯು ವಿವಿಧ ಕೃಷಿ ಮಾರುಕಟ್ಟೆಗಳಿಂದ (ಮಂಡಿಗಳು) ನೈಜ-ಸಮಯದ ಡೇಟಾವನ್ನು ಆಧರಿಸಿದೆ. ನಾವು ನಿಖರತೆಗಾಗಿ ಶ್ರಮಿಸುತ್ತಿರುವಾಗ, ಬೆಲೆಗಳು ವೇಗವಾಗಿ ಏರಿಳಿತಗೊಳ್ಳಬಹುದು. ನಿಮ್ಮ ನಿರ್ಧಾರಗಳಿಗೆ ಮಾರ್ಗದರ್ಶಿಯಾಗಿ ಮಾಹಿತಿಯನ್ನು ಬಳಸಿ.\",\"q3\":\"ಭವಿಷ್ಯದ ಬೆಲೆ ಮುನ್ಸೂಚನೆಗಳ ಬಗ್ಗೆ ನಾನು ಕೇಳಬಹುದೇ?\",\"a3\":\"ಹೌದು, ನೀವು ಬೆಲೆ ಪ್ರವೃತ್ತಿ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಮುನ್ಸೂಚನೆಗಳಿಗಾಗಿ ಕೇಳಬಹುದು. AI ಐತಿಹಾಸಿಕ ಡೇಟಾ ಮತ್ತು ಪ್ರಸ್ತುತ ಮಾರುಕಟ್ಟೆ ಪರಿಸ್ಥಿತಿಗಳ ಆಧಾರದ ಮೇಲೆ ಒಳನೋಟಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ, ಆದರೆ ದಯವಿಟ್ಟು ಇವು ಮುನ್ಸೂಚನೆಗಳು ಮತ್ತು ಖಾತರಿಗಳಲ್ಲ ಎಂಬುದನ್ನು ಗಮನಿಸಿ.\",\"q4\":\"ಯಾವ ಸ್ಥಳಗಳು ಮತ್ತು ಬೆಳೆಗಳನ್ನು ಬೆಂಬಲಿಸಲಾಗುತ್ತದೆ?\",\"a4\":\"ಸಹಾಯಕರು ಭಾರತದಾದ್ಯಂತ ಪ್ರಮುಖ ಬೆಳೆಗಳು ಮತ್ತು ಮಾರುಕಟ್ಟೆಗಳ ವ್ಯಾಪಕ ಶ್ರೇಣಿಯನ್ನು ಒಳಗೊಳ್ಳುತ್ತಾರೆ. ನೀವು ವಿವಿಧ ನಗರಗಳು ಮತ್ತು ಅವುಗಳ ಮುಖ್ಯ ಕೃಷಿ ಮಾರುಕಟ್ಟೆಗಳಲ್ಲಿ ತರಕಾರಿಗಳು, ಧಾನ್ಯಗಳು, ಹಣ್ಣುಗಳು ಮತ್ತು ಹೆಚ್ಚಿನವುಗಳ ಬಗ್ಗೆ ಕೇಳಬಹುದು.\"},\"client\":{\"askTitle\":\"ನಿಮ್ಮ ಮಾರುಕಟ್ಟೆ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ\",\"placeholder\":\"ಉದಾಹರಣೆಗೆ, ಮುಂದಿನ ವಾರದಲ್ಲಿ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಟೊಮೆಟೊ ಬೆಲೆಗಳು ಹೆಚ್ಚಾಗುವ ಸಾಧ್ಯತೆಗಳೇನು? ಅಥವಾ ಮಾತನಾಡಲು ಮೈಕ್ ಕ್ಲಿಕ್ ಮಾಡಿ.\",\"analyzing\":\"ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...\",\"getAnalysis\":\"ವಿಶ್ಲೇಷಣೆ ಪಡೆಯಿರಿ\",\"stopRecording\":\"ರೆಕಾರ್ಡಿಂಗ್ ನಿಲ್ಲಿಸಿ\",\"useVoice\":\"ಧ್ವನಿಯನ್ನು ಬಳಸಿ\",\"resultTitle\":\"ವಿಶ್ಲೇಷಣೆ ಫಲಿತಾಂಶ\",\"recommendation\":\"ಶಿಫಾರಸು\",\"marketAnalysis\":\"ಮಾರುಕಟ್ಟೆ ವಿಶ್ಲೇಷಣೆ\",\"resultPlaceholder\":\"ನಿಮ್ಮ ಮಾರುಕಟ್ಟೆ ವಿಶ್ಲೇಷಣೆ ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ.\"}},\"schemes\":{\"title\":\"ಯೋಜನೆ ಮತ್ತು ಮಾಹಿತಿ ಕೇಂದ್ರ\",\"description\":\"ಪ್ರಮುಖ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ, ಇತ್ತೀಚಿನ ಸುದ್ದಿಗಳೊಂದಿಗೆ ನವೀಕೃತವಾಗಿರಿ ಮತ್ತು ನಿಮಗಾಗಿ ಸೂಕ್ತವಾದ ಮಾಹಿತಿಯನ್ನು ಹುಡುಕಿ.\",\"keySchemesTitle\":\"ಪ್ರಮುಖ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು\",\"latestNewsTitle\":\"ಇತ್ತೀಚಿನ ಸುದ್ದಿಗಳು ಮತ್ತು ನವೀಕರಣಗಳು\",\"visitSite\":\"ಸೈಟ್‌ಗೆ ಭೇಟಿ ನೀಡಿ\",\"readMore\":\"ಇನ್ನಷ್ಟು ಓದಿ\",\"keySchemes\":{\"pmkisan\":{\"title\":\"ಪಿಎಂ-ಕಿಸಾನ್ ಯೋಜನೆ\",\"description\":\"ಸಣ್ಣ ಮತ್ತು ಅತಿ ಸಣ್ಣ ರೈತ ಕುಟುಂಬಗಳಿಗೆ ವರ್ಷಕ್ಕೆ ₹6,000 ಆರ್ಥಿಕ ನೆರವು.\"},\"pmfby\":{\"title\":\"ಪ್ರಧಾನಮಂತ್ರಿ ಫಸಲ್ ಬಿಮಾ ಯೋಜನೆ\",\"description\":\"ನೈಸರ್ಗಿಕ ವಿಕೋಪಗಳು, ಕೀಟಗಳು ಅಥವಾ ರೋಗಗಳಿಂದಾಗಿ ಬೆಳೆ ವೈಫಲ್ಯದ ವಿರುದ್ಧ ವಿಮಾ ರಕ್ಷಣೆ.\"},\"kcc\":{\"title\":\"ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ (ಕೆಸಿಸಿ)\",\"description\":\"ರೈತರಿಗೆ ಅವರ ಕೃಷಿ ಮತ್ತು ಇತರ ಅಗತ್ಯಗಳಿಗಾಗಿ ಸಕಾಲದಲ್ಲಿ ಸಾಲ ಒದಗಿಸುತ್ತದೆ.\"}},\"latestNews\":{\"kharifMsp\":{\"title\":\"ಖಾರಿಫ್ ಬೆಳೆಗಳಿಗೆ ಸರ್ಕಾರ ಎಂಎಸ್‌ಪಿ ಹೆಚ್ಚಿಸಿದೆ\",\"description\":\"ಮುಂಬರುವ ಮಾರುಕಟ್ಟೆ ಋತುವಿಗಾಗಿ ಎಲ್ಲಾ ಕಡ್ಡಾಯ ಖಾರಿಫ್ ಬೆಳೆಗಳಿಗೆ ಕನಿಷ್ಠ ಬೆಂಬಲ ಬೆಲೆಯಲ್ಲಿ ಮಹತ್ವದ ಹೆಚ್ಚಳಕ್ಕೆ ಸಂಪುಟ ಅನುಮೋದನೆ ನೀಡಿದೆ.\"},\"subsidyPortal\":{\"title\":\"ಕೃಷಿ ಸಬ್ಸಿಡಿ ವಿತರಣೆಗೆ ಹೊಸ ಪೋರ್ಟಲ್ ಪ್ರಾರಂಭ\",\"description\":\"ವಿವಿಧ ಕೃಷಿ ಉಪಕರಣಗಳಿಗೆ ಸಬ್ಸಿಡಿ ಅರ್ಜಿ ಮತ್ತು ವಿತರಣೆಯ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಸುಗಮಗೊಳಿಸಲು ಹೊಸ ಏಕೀಕೃತ ಪೋರ್ಟಲ್ ಅನ್ನು ಪ್ರಾರಂಭಿಸಲಾಗಿದೆ.\"},\"horticultureMission\":{\"title\":\"ರಾಷ್ಟ್ರೀಯ ತೋಟಗಾರಿಕೆ ಮಿಷನ್‌ಗೆ ಮಾರ್ಗಸೂಚಿಗಳನ್ನು ನೀಡಲಾಗಿದೆ\",\"description\":\"ಕೃಷಿ ಇಲಾಖೆಯು ತೋಟಗಾರಿಕೆ ವಲಯವನ್ನು ಉತ್ತೇಜಿಸಲು ಎನ್‌ಎಚ್‌ಎಂಗೆ ನವೀಕರಿಸಿದ ಮಾರ್ಗಸೂಚಿಗಳನ್ನು ಬಿಡುಗಡೆ ಮಾಡಿದೆ, ಸುಗ್ಗಿಯ ನಂತರದ ನಿರ್ವಹಣೆಗೆ ಒತ್ತು ನೀಡಿದೆ.\"},\"enamMilestone\":{\"title\":\"ಇ-ನಾಮ್ 1,000 ಮಂಡಿಗಳನ್ನು ಸಂಯೋಜಿಸಿ ಹೊಸ ಮೈಲಿಗಲ್ಲು ತಲುಪಿದೆ\",\"description\":\"ಎಲೆಕ್ಟ್ರಾನಿಕ್ ರಾಷ್ಟ್ರೀಯ ಕೃಷಿ ಮಾರುಕಟ್ಟೆ (ಇ-ನಾಮ್) ವೇದಿಕೆಯು ಈಗ ದೇಶಾದ್ಯಂತ 1,000 ಕ್ಕೂ ಹೆಚ್ಚು ಕೃಷಿ ಉತ್ಪನ್ನ ಮಾರುಕಟ್ಟೆಗಳನ್ನು ಸಂಪರ್ಕಿಸಿದೆ.\"},\"solarPump\":{\"title\":\"ಸೌರ ಪಂಪ್ ಯೋಜನೆ ಇನ್ನೊಂದು ವರ್ಷಕ್ಕೆ ವಿಸ್ತರಿಸಲಾಗಿದೆ\",\"description\":\"ರೈತರಿಗೆ ಸೌರಶಕ್ತಿ ಚಾಲಿತ ನೀರಾವರಿ ಪಂಪ್‌ಗಳನ್ನು ಒದಗಿಸುವ ಗುರಿಯನ್ನು ಹೊಂದಿರುವ ಪಿಎಂ-ಕುಸುಮ್ ಯೋಜನೆಯನ್ನು ಮಾರ್ಚ್ 2025 ರವರೆಗೆ ವಿಸ್ತರಿಸಲಾಗಿದೆ.\"}},\"client\":{\"title\":\"ನಿರ್ದಿಷ್ಟ ಯೋಜನೆಯನ್ನು ಹುಡುಕಿ\",\"description\":\"ಯಾವುದೇ ಸರ್ಕಾರಿ ಯೋಜನೆಯ ವಿವರಗಳನ್ನು ಪಡೆಯಲು ನಮ್ಮ AI ಸಹಾಯಕವನ್ನು ಬಳಸಿ.\",\"placeholder\":\"ಉದಾಹರಣೆಗೆ, ಪಿಎಂ-ಕಿಸಾನ್ ಯೋಜನೆ ಬಗ್ಗೆ ಹೇಳಿ\",\"searching\":\"ಹುಡುಕಲಾಗುತ್ತಿದೆ...\",\"findScheme\":\"ಯೋಜನೆಯನ್ನು ಹುಡುಕಿ\",\"stopRecording\":\"ರೆಕಾರ್ಡಿಂಗ್ ನಿಲ್ಲಿಸಿ\",\"useVoice\":\"ಧ್ವನಿಯನ್ನು ಬಳಸಿ\",\"eligibility\":\"ಅರ್ಹತೆ\",\"applyNow\":\"ಈಗ ಅನ್ವಯಿಸಿ\",\"resultPlaceholder\":\"ಯೋಜನೆಯ ವಿವರಗಳನ್ನು ನೋಡಲು ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ.\"}},\"weather\":{\"title\":\"ಲೈವ್ ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ\",\"description\":\"ನಿಮ್ಮ ಕೃಷಿ ಚಟುವಟಿಕೆಗಳನ್ನು ಅದಕ್ಕೆ ತಕ್ಕಂತೆ ಯೋಜಿಸಿ.\",\"enterCity\":\"ನಗರದ ಹೆಸರನ್ನು ನಮೂದಿಸಿ...\",\"currentWeather\":\"ಪ್ರಸ್ತುತ ಹವಾಮಾನ\",\"rightNowIn\":\"{{city}} ನಲ್ಲಿ ಇದೀಗ\",\"wind\":\"ಗಾಳಿ\",\"humidity\":\"ಆರ್ದ್ರತೆ\",\"weeklyForecast\":\"ಸಾಪ್ತಾಹಿಕ ಮುನ್ಸೂಚನೆ\",\"noData\":\"ಯಾವುದೇ ಹವಾಮಾನ ಡೇಟಾ ಲಭ್ಯವಿಲ್ಲ. ದಯವಿಟ್ಟು ಬೇರೆ ಸ್ಥಳವನ್ನು ಪ್ರಯತ್ನಿಸಿ.\",\"conditions\":{\"sunny\":\"ಬಿಸಿಲು\",\"partlyCloudy\":\"ಭಾಗಶಃ ಮೋಡ ಕವಿದಿದೆ\",\"cloudy\":\"ಮೋಡ ಕವಿದಿದೆ\",\"showers\":\"ತುಂತುರು ಮಳೆ\",\"rainy\":\"ಮಳೆ\",\"humidAndCloudy\":\"ತೇವಾಂಶ ಮತ್ತು ಮೋಡ ಕವಿದಿದೆ\",\"thunderstorms\":\"ಗುಡುಗು ಸಹಿತ ಮಳೆ\"},\"days\":{\"today\":\"ಇಂದು\",\"monday\":\"ಸೋಮವಾರ\",\"tuesday\":\"ಮಂಗಳವಾರ\",\"wednesday\":\"ಬುಧವಾರ\",\"thursday\":\"ಗುರುವಾರ\",\"friday\":\"ಶುಕ್ರವಾರ\",\"saturday\":\"ಶನಿವಾರ\",\"sunday\":\"ಭಾನುವಾರ\"}},\"community\":{\"title\":\"ಸಮುದಾಯ ವೇದಿಕೆ\",\"description\":\"ಇತರ ರೈತರೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ, ಜ್ಞಾನವನ್ನು ಹಂಚಿಕೊಳ್ಳಿ ಮತ್ತು ಒಟ್ಟಿಗೆ ಬೆಳೆಯಿರಿ.\",\"chatRooms\":\"ಚಾಟ್ ರೂಮ್‌ಗಳು\",\"you\":\"ನೀವು\",\"attachmentPreview\":\"ಲಗತ್ತು ಪೂರ್ವವೀಕ್ಷಣೆ:\",\"removeAttachment\":\"ಲಗತ್ತನ್ನು ತೆಗೆದುಹಾಕಿ\",\"typeMessage\":\"ಸಂದೇಶವನ್ನು ಟೈಪ್ ಮಾಡಿ...\",\"stopRecording\":\"ರೆಕಾರ್ಡಿಂಗ್ ನಿಲ್ಲಿಸಿ\",\"startRecording\":\"ರೆಕಾರ್ಡಿಂಗ್ ಪ್ರಾರಂಭಿಸಿ\",\"sendPhoto\":\"ಫೋಟೋ ಕಳುಹಿಸಿ\",\"send\":\"ಕಳುಹಿಸು\",\"rooms\":{\"general\":\"ಸಾಮಾನ್ಯ ಚರ್ಚೆ\",\"tomato\":\"ಟೊಮೆಟೊ ಕೃಷಿ\",\"pest\":\"ಕೀಟ ನಿಯಂತ್ರಣ\",\"organic\":\"ಸಾವಯವ ವಿಧಾನಗಳು\",\"market\":\"ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು\"},\"users\":{\"ramesh\":\"ರಮೇಶ್\",\"suresh\":\"ಸುರೇಶ್\",\"geeta\":\"ಗೀತಾ\",\"ravi\":\"ರವಿ\",\"priya\":\"ಪ್ರಿಯಾ\",\"amit\":\"ಅಮಿತ್\"},\"messages\":{\"general\":{\"0\":\"ಯಾರಾದರೂ ಹೊಸ ಸಾವಯವ ಗೊಬ್ಬರವನ್ನು ಪ್ರಯತ್ನಿಸಿದ್ದೀರಾ? ಇಲ್ಲಿ ಉತ್ತಮ ಫಲಿತಾಂಶಗಳು ಕಂಡುಬರುತ್ತಿವೆ.\",\"1\":\"ಹೌದು, ನಾನು ಮಾಡಿದ್ದೇನೆ! ನನ್ನ ಟೊಮೆಟೊ ಇಳುವರಿ ಸುಮಾರು 15% ರಷ್ಟು ಹೆಚ್ಚಾಗಿದೆ.\",\"2\":\"ಅದನ್ನು ಕೇಳಿ ತುಂಬಾ ಸಂತೋಷವಾಯಿತು! ನಾನು ಅದನ್ನು ಖರೀದಿಸಲು ಯೋಚಿಸುತ್ತಿದ್ದೆ. ಇದು ಎಲೆಗಳ ತರಕಾರಿಗಳಿಗೆ ಉತ್ತಮವೇ?\",\"3\":\"ಖಂಡಿತವಾಗಿ! ನನ್ನ ಪಾಲಕ್ ಎಂದಿಗೂ ಇಷ್ಟು ಆರೋಗ್ಯಕರವಾಗಿರಲಿಲ್ಲ.\"},\"tomato\":{\"0\":\"ನನ್ನ ಟೊಮೆಟೊ ಗಿಡಗಳಲ್ಲಿ ಕೆಲವು ಹಳದಿ ಎಲೆಗಳು ಕಾಣಿಸುತ್ತಿವೆ. ಯಾವುದೇ ಸಲಹೆ ಇದೆಯೇ?\",\"1\":\"ಸಾರಜನಕದ ಕೊರತೆಯಾಗಿರಬಹುದು. ನೀವು ಇತ್ತೀಚೆಗೆ ನಿಮ್ಮ ಮಣ್ಣನ್ನು ಪರೀಕ್ಷಿಸಿದ್ದೀರಾ?\"},\"pest\":{\"0\":\"ನನ್ನ ಹತ್ತಿ ಬೆಳೆಯಲ್ಲಿ ಬಿಳಿ ನೊಣಗಳು ಒಂದು ದೊಡ್ಡ ಸಮಸ್ಯೆಯಾಗಿದೆ. ಅವುಗಳನ್ನು ನಿಭಾಯಿಸಲು ಉತ್ತಮ ಮಾರ್ಗ ಯಾವುದು?\"},\"organic\":{\"0\":\"ನಾನು ಉತ್ತಮ ಸಾವಯವ ಮಿಶ್ರಗೊಬ್ಬರ ತಂತ್ರಗಳನ್ನು ಹುಡುಕುತ್ತಿದ್ದೇನೆ. ಯಾವುದೇ ಸಂಪನ್ಮೂಲಗಳಿವೆಯೇ?\",\"1\":\"ಇ-ಲರ್ನಿಂಗ್ ಹಬ್‌ನಲ್ಲಿ ವರ್ಮಿಕಾಂಪೋಸ್ಟಿಂಗ್ ಕುರಿತು ಕೆಲವು ಉತ್ತಮ ಲೇಖನಗಳಿವೆ!\"},\"market\":{\"0\":\"ಪುಣೆಯಲ್ಲಿ ಈರುಳ್ಳಿ ಬೆಲೆಗಳು ಇಳಿಯುತ್ತಿರುವಂತೆ ತೋರುತ್ತಿದೆ. ನಾನು ಈಗ ಮಾರಾಟ ಮಾಡಬೇಕೇ ಅಥವಾ ಕಾಯಬೇಕೇ?\"}}},\"shop\":{\"title\":\"ಕೃಷಿ ಅಂಗಡಿ\",\"description\":\"ನಿಮ್ಮ ಕೃಷಿ ಸಾಮಗ್ರಿಗಳನ್ನು ಎಲ್ಲಿಂದ ಖರೀದಿಸಬೇಕೆಂದು ಆರಿಸಿ.\",\"govStoreAlt\":\"ಸರ್ಕಾರಿ ಅಂಗಡಿ\",\"govStoreTitle\":\"ಸರ್ಕಾರಿ ಅಂಗಡಿಗಳು\",\"govStoreDescription\":\"ಸಬ್ಸಿಡಿ ಸಹಿತ ಬೀಜಗಳು, ರಸಗೊಬ್ಬರಗಳು ಮತ್ತು ಉಪಕರಣಗಳನ್ನು ನೇರವಾಗಿ ಸರ್ಕಾರಿ-ಅನುಮೋದಿತ ಮಳಿಗೆಗಳಿಂದ ಖರೀದಿಸಿ. ಗುಣಮಟ್ಟ ಮತ್ತು ನ್ಯಾಯಯುತ ಬೆಲೆಯನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ.\",\"govStoreButton\":\"ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್‌ಗಳನ್ನು ಅನ್ವೇಷಿಸಿ\",\"privateMarketplaceAlt\":\"ಖಾಸಗಿ ಮಾರುಕಟ್ಟೆ\",\"privateMarketplaceTitle\":\"ಖಾಸಗಿ ಮಾರುಕಟ್ಟೆ\",\"privateMarketplaceDescription\":\"ವಿವಿಧ ಮಾರಾಟಗಾರರಿಂದ ವ್ಯಾಪಕ ಶ್ರೇಣಿಯ ಉತ್ಪನ್ನಗಳನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ. ಸ್ಪರ್ಧಾತ್ಮಕ ಬೆಲೆಗಳು ಮತ್ತು ಬ್ರಾಂಡ್‌ಗಳು ಮತ್ತು ವಸ್ತುಗಳ ದೊಡ್ಡ ಆಯ್ಕೆಯನ್ನು ಹುಡುಕಿ.\",\"privateMarketplaceButton\":\"ಮಾರುಕಟ್ಟೆಗೆ ಹೋಗಿ\",\"government\":{\"title\":\"ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್\",\"showingContentFrom\":\"ನಿಂದ ವಿಷಯವನ್ನು ತೋರಿಸಲಾಗುತ್ತಿದೆ\",\"backToStore\":\"ಅಂಗಡಿಗೆ ಹಿಂತಿರುಗಿ\",\"openInNewTab\":\"ಹೊಸ ಟ್ಯಾಬ್‌ನಲ್ಲಿ ತೆರೆಯಿರಿ\",\"embedNote\":\"ಗಮನಿಸಿ: ಕೆಲವು ಸರ್ಕಾರಿ ವೆಬ್‌ಸೈಟ್‌ಗಳು ಎಂಬೆಡ್ ಮಾಡಿದಾಗ ಸರಿಯಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುವುದಿಲ್ಲ. ನೀವು ಸಮಸ್ಯೆಗಳನ್ನು ಅನುಭವಿಸಿದರೆ, ದಯವಿಟ್ಟು \\\"ಹೊಸ ಟ್ಯಾಬ್‌ನಲ್ಲಿ ತೆರೆಯಿರಿ\\\" ಬಟನ್ ಬಳಸಿ.\",\"iframeTitle\":\"ಸರ್ಕಾರಿ ಕೃಷಿ ಸಹಕಾರಿ ಪೋರ್ಟಲ್\"},\"marketplace\":{\"title\":\"ಖಾಸಗಿ ಮಾರುಕಟ್ಟೆ\",\"description\":\"ನಿಮ್ಮ ಎಲ್ಲಾ ಕೃಷಿ ಅಗತ್ಯಗಳಿಗಾಗಿ ವಿವಿಧ ಮಾರಾಟಗಾರರಿಂದ ಗುಣಮಟ್ಟದ ಉತ್ಪನ್ನಗಳು.\",\"backToStore\":\"ಅಂಗಡಿಗೆ ಹಿಂತಿರುಗಿ\",\"addToCart\":\"ಕಾರ್ಟ್‌ಗೆ ಸೇರಿಸಿ\",\"comingSoonTitle\":\"ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿದೆ!\",\"comingSoonMessage\":\"'{{query}}' ಗೆ ಹೊಂದುವ ಉತ್ಪನ್ನವನ್ನು ನಾವು ಕಂಡುಹಿಡಿಯಲಾಗಲಿಲ್ಲ. ನಾವು ನಮ್ಮ ದಾಸ್ತಾನುಗಳನ್ನು ನಿರಂತರವಾಗಿ ವಿಸ್ತರಿಸುತ್ತಿದ್ದೇವೆ, ಆದ್ದರಿಂದ ದಯವಿಟ್ಟು ನಂತರ ಪರಿಶೀಲಿಸಿ!\",\"irrelevantProductTitle\":\"ಅಪ್ರಸ್ತುತ ಉತ್ಪನ್ನ ಹುಡುಕಾಟ\",\"irrelevantProductMessage\":\"ನೀವು ಹುಡುಕುತ್ತಿರುವುದು ಲಭ್ಯವಿಲ್ಲ. ಇಲ್ಲಿ ಕೃಷಿ ಸಂಬಂಧಿತ ಉತ್ಪನ್ನಗಳನ್ನು ಮಾತ್ರ ಮಾರಾಟ ಮಾಡಲಾಗುತ್ತದೆ.\",\"products\":{\"organicFertilizer\":\"ಸಾವಯವ ಗೊಬ್ಬರ\",\"pesticideSpray\":\"ಕೀಟನಾಶಕ ಸ್ಪ್ರೇ\",\"highYieldSeeds\":\"ಹೆಚ್ಚಿನ ಇಳುವರಿ ಬೀಜಗಳು\",\"gardeningToolsSet\":\"ತೋಟಗಾರಿಕೆ ಉಪಕರಣಗಳ ಸೆಟ್\",\"dripIrrigationKit\":\"ಹನಿ ನೀರಾವರಿ ಕಿಟ್\",\"soilTestKit\":\"ಮಣ್ಣು ಪರೀಕ್ಷಾ ಕಿಟ್\",\"protectiveGloves\":\"ರಕ್ಷಣಾತ್ಮಕ ಕೈಗವಸುಗಳು\",\"powerSprayer\":\"ಪವರ್ ಸ್ಪ್ರೇಯರ್\",\"greenhousePolythene\":\"ಹಸಿರುಮನೆ ಪಾಲಿಥೀನ್\",\"waterPump\":\"ನೀರಿನ ಪಂಪ್ (1HP)\",\"cowManure\":\"ಹಸುವಿನ ಸಗಣಿ (50kg)\",\"neemOil\":\"ಬೇವಿನ ಎಣ್ಣೆ ಕೀಟನಾಶಕ\"}}},\"learn\":{\"title\":\"ಇ-ಲರ್ನಿಂಗ್ ಹಬ್\",\"description\":\"ನಮ್ಮ ಕೃಷಿ ಮಾರ್ಗದರ್ಶಿಗಳು ಮತ್ತು ಟ್ಯುಟೋರಿಯಲ್‌ಗಳ ಸಂಗ್ರಹದೊಂದಿಗೆ ನಿಮ್ಮ ಜ್ಞಾನವನ್ನು ವಿಸ್ತರಿಸಿ.\",\"searchPlaceholder\":\"ಕೃಷಿ ವಿಷಯಗಳ ಕುರಿತು ಲೇಖನಗಳು, ವೀಡಿಯೊಗಳು ಅಥವಾ ಉತ್ಪನ್ನಗಳಿಗಾಗಿ ಹುಡುಕಿ...\",\"stopRecording\":\"ರೆಕಾರ್ಡಿಂಗ್ ನಿಲ್ಲಿಸಿ\",\"startVoiceSearch\":\"ಧ್ವನಿ ಹುಡುಕಾಟವನ್ನು ಪ್ರಾರಂಭಿಸಿ\",\"closePlayer\":\"ಪ್ಲೇಯರ್ ಮುಚ್ಚಿ\",\"watchOnYoutube\":\"YouTube ನಲ್ಲಿ ವೀಕ್ಷಿಸಿ\",\"tabs\":{\"articles\":\"ಲೇಖನಗಳು ಮತ್ತು ಮಾರ್ಗದರ್ಶಿಗಳು\",\"videos\":\"ವೀಡಿಯೊ ಟ್ಯುಟೋರಿಯಲ್‌ಗಳು\"},\"webSearchResults\":\"ವೆಬ್ ಹುಡುಕಾಟ ಫಲಿತಾಂಶಗಳು\",\"irrelevantTopic\":\"ಅಪ್ರಸ್ತುತ ವಿಷಯ\",\"irrelevantTopicMessage\":\"ನಿಮ್ಮ ಹುಡುಕಾಟ \\\"{{query}}\\\" ಕೃಷಿಗೆ ಸಂಬಂಧಿಸಿಲ್ಲ ಎಂದು ತೋರುತ್ತದೆ. ದಯವಿಟ್ಟು ಬೇರೆ ಹುಡುಕಾಟ ಪದವನ್ನು ಪ್ರಯತ್ನಿಸಿ.\",\"readFullArticle\":\"ಪೂರ್ಣ ಲೇಖನವನ್ನು ಓದಿ\",\"ourGuides\":\"ನಮ್ಮ ಮಾರ್ಗದರ್ಶಿಗಳು\",\"readMore\":\"ಇನ್ನಷ್ಟು ಓದಿ\",\"watchNow\":\"ಈಗ ವೀಕ್ಷಿಸಿ\",\"noVideosFound\":\"ಯಾವುದೇ ವೀಡಿಯೊಗಳು ಕಂಡುಬಂದಿಲ್ಲ\",\"noVideosFoundMessage\":\"ನಿಮ್ಮ ಹುಡುಕಾಟ \\\"{{query}}\\\" ಯಾವುದೇ ವೀಡಿಯೊಗಳನ್ನು ಹಿಂತಿರುಗಿಸಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಬೇರೆ ಹುಡುಕಾಟ ಪದವನ್ನು ಪ್ರಯತ್ನಿಸಿ.\",\"noArticlesFound\":\"ಯಾವುದೇ ಹೊಂದಾಣಿಕೆಯ ಮಾರ್ಗದರ್ಶಿಗಳು ಅಥವಾ ವೆಬ್ ಫಲಿತಾಂಶಗಳಿಲ್ಲ\",\"noArticlesFoundMessage\":\"ನಿಮ್ಮ ಹುಡುಕಾಟ \\\"{{query}}\\\" ನಮ್ಮ ಯಾವುದೇ ಮಾರ್ಗದರ್ಶಿಗಳಿಗೆ ಹೊಂದಿಕೆಯಾಗಲಿಲ್ಲ ಅಥವಾ ವೆಬ್‌ನಲ್ಲಿ ಯಾವುದೇ ಲೇಖನಗಳನ್ನು ಕಂಡುಹಿಡಿಯಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಬೇರೆ ಹುಡುಕಾಟ ಪದವನ್ನು ಪ್ರಯತ್ನಿಸಿ.\",\"searchOnGoogle\":\"Google ನಲ್ಲಿ ಹುಡುಕಿ\",\"articles\":{\"dripIrrigation\":{\"title\":\"ಹನಿ ನೀರಾವರಿಯಲ್ಲಿ ಪಾಂಡಿತ್ಯ\",\"description\":\"ನೀರಿನ ದಕ್ಷತೆಯನ್ನು ಗರಿಷ್ಠಗೊಳಿಸಲು ಮತ್ತು ಬೆಳೆ ಇಳುವರಿಯನ್ನು ಹೆಚ್ಚಿಸಲು ಹನಿ ನೀರಾವರಿ ವ್ಯವಸ್ಥೆಗಳನ್ನು ಸ್ಥಾಪಿಸಲು ಮತ್ತು ನಿರ್ವಹಿಸಲು ಒಂದು ಸಮಗ್ರ ಮಾರ್ಗದರ್ಶಿ. ಘಟಕ ಆಯ್ಕೆ, ವಿನ್ಯಾಸ ಯೋಜನೆ ಮತ್ತು ಸಾಮಾನ್ಯ ಸಮಸ್ಯೆಗಳನ್ನು ನಿವಾರಿಸುವುದನ್ನು ಒಳಗೊಂಡಿದೆ.\"},\"ipm\":{\"title\":\"ಸಮಗ್ರ ಕೀಟ ನಿರ್ವಹಣೆ (IPM)\",\"description\":\"ಕೀಟಗಳನ್ನು ನಿರ್ವಹಿಸಲು ಸುಸ್ಥಿರ, ಪರಿಸರ ಸ್ನೇಹಿ ತಂತ್ರಗಳನ್ನು ಅನ್ವೇಷಿಸಿ. ಈ ಮಾರ್ಗದರ್ಶಿಯು ಜೈವಿಕ ನಿಯಂತ್ರಣಗಳು, ಸಾಂಸ್ಕೃತಿಕ ಪದ್ಧತಿಗಳು ಮತ್ತು ನಿಮ್ಮ ಬೆಳೆಗಳು ಮತ್ತು ಪರಿಸರವನ್ನು ರಕ್ಷಿಸಲು ಕೀಟನಾಶಕಗಳ ಉದ್ದೇಶಿತ ಬಳಕೆಯನ್ನು ಒಳಗೊಂಡಿದೆ.\"},\"soilHealth\":{\"title\":\"ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಮತ್ತು ಪೋಷಣೆ\",\"description\":\"ಸಮೃದ್ಧ, ಫಲವತ್ತಾದ ಮಣ್ಣಿನ ರಹಸ್ಯಗಳನ್ನು ಅನ್ಲಾಕ್ ಮಾಡಿ. ಈ ಲೇಖನವು ಮಣ್ಣಿನ ವಿಜ್ಞಾನದ ಮೂಲಭೂತ ಅಂಶಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ, ಇದರಲ್ಲಿ ಸಂಯೋಜನೆ, pH ಸಮತೋಲನ, ಮತ್ತು ಆರೋಗ್ಯಕರ, ಹೆಚ್ಚು ಉತ್ಪಾದಕ ಸಸ್ಯಗಳಿಗೆ ನಿಮ್ಮ ಮಣ್ಣನ್ನು ಹೇಗೆ ಸಮೃದ್ಧಗೊಳಿಸುವುದು.\"},\"composting\":{\"title\":\"ಸುಧಾರಿತ ಮಿಶ್ರಗೊಬ್ಬರ ತಂತ್ರಗಳು\",\"description\":\"ಕೃಷಿ ತ್ಯಾಜ್ಯವನ್ನು 'ಕಪ್ಪು ಚಿನ್ನ'ವಾಗಿ ಪರಿವರ್ತಿಸಲು ಕಲಿಯಿರಿ. ಈ ಮಾರ್ಗದರ್ಶಿಯು ಬಿಸಿ ಮತ್ತು ತಣ್ಣನೆಯ ಮಿಶ್ರಗೊಬ್ಬರ, ವರ್ಮಿಕಾಂಪೋಸ್ಟಿಂಗ್ ಮತ್ತು ಸಮತೋಲಿತ ಮಿಶ್ರಗೊಬ್ಬರ ರಾಶಿಗಳನ್ನು ಹೇಗೆ ರಚಿಸುವುದು ಸೇರಿದಂತೆ ವಿವಿಧ ಮಿಶ್ರಗೊಬ್ಬರ ವಿಧಾನಗಳನ್ನು ವಿವರಿಸುತ್ತದೆ.\"},\"cropRotation\":{\"title\":\"ಬೆಳೆ ತಿರುಗುವಿಕೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು\",\"description\":\"ಸುಧಾರಿತ ಮಣ್ಣಿನ ಫಲವತ್ತತೆ, ಕೀಟ ಮತ್ತು ರೋಗ ಚಕ್ರದ ಅಡ್ಡಿ, ಮತ್ತು ಹೆಚ್ಚಿದ ಜೀವವೈವಿಧ್ಯತೆ ಸೇರಿದಂತೆ ಕಾರ್ಯತಂತ್ರದ ಬೆಳೆ ತಿರುಗುವಿಕೆಯ ಪ್ರಯೋಜನಗಳನ್ನು ಅನ್ವೇಷಿಸಿ. ಸಾಮಾನ್ಯ ಬೆಳೆಗಳಿಗೆ ಮಾದರಿ ತಿರುಗುವಿಕೆ ಯೋಜನೆಗಳನ್ನು ಒಳಗೊಂಡಿದೆ.\"},\"organicFarming\":{\"title\":\"ಸಾವಯವ ಕೃಷಿಯ ಮೂಲಭೂತ ಅಂಶಗಳು\",\"description\":\"ಸಾವಯವ ಕೃಷಿಯ ಪ್ರಮುಖ ತತ್ವಗಳು ಮತ್ತು ಪದ್ಧತಿಗಳಿಗೆ ಒಂದು ಅಗತ್ಯ ಪರಿಚಯ. ಪ್ರಮಾಣೀಕರಣ, ನೈಸರ್ಗಿಕ ಫಲೀಕರಣ, ಕಳೆ ನಿಯಂತ್ರಣ, ಮತ್ತು ಸುಸ್ಥಿರ ಕೃಷಿಗಾಗಿ ಸಾವಯವ ಉತ್ಪನ್ನಗಳ ಮಾರುಕಟ್ಟೆಯನ್ನು ಒಳಗೊಂಡಿದೆ.\"}}},\"profile\":{\"title\":\"ರೈತರ ಪ್ರೊಫೈಲ್\",\"description\":\"ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ ಮತ್ತು ಆದ್ಯತೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ.\",\"backToDashboard\":\"ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ\",\"cardTitle\":\"ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ\",\"cardDescription\":\"ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಶಿಫಾರಸುಗಳನ್ನು ಸ್ವೀಕರಿಸಲು ನಿಮ್ಮ ವಿವರಗಳನ್ನು ನವೀಕೃತವಾಗಿರಿಸಿ.\",\"uploading\":\"ಅಪ್‌ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...\",\"changePhoto\":\"ಫೋಟೋ ಬದಲಾಯಿಸಿ\",\"fullName\":\"ಪೂರ್ಣ ಹೆಸರು\",\"email\":\"ಇಮೇಲ್ ವಿಳಾಸ\",\"location\":\"ಸ್ಥಳ (ಜಿಲ್ಲೆ)\",\"selectDistrict\":\"ಜಿಲ್ಲೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ...\",\"searchDistrict\":\"ಜಿಲ್ಲೆಯನ್ನು ಹುಡುಕಿ...\",\"noDistrictFound\":\"ಯಾವುದೇ ಜಿಲ್ಲೆ ಕಂಡುಬಂದಿಲ್ಲ.\",\"language\":\"ಆದ್ಯತೆಯ ಭಾಷೆ\",\"selectLanguage\":\"ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ\",\"myCrops\":\"ನನ್ನ ಬೆಳೆಗಳು\",\"myCropsDescription\":\"ಸಂಬಂಧಿತ ಎಚ್ಚರಿಕೆಗಳು ಮತ್ತು ಸಲಹೆಗಳನ್ನು ಪಡೆಯಲು ನೀವು ಕೃಷಿ ಮಾಡುವ ಬೆಳೆಗಳನ್ನು ಸೇರಿಸಿ (ಕಾಮಾದಿಂದ ಬೇರ್ಪಡಿಸಲಾಗಿದೆ).\",\"saving\":\"ಉಳಿಸಲಾಗುತ್ತಿದೆ...\",\"saveChanges\":\"ಬದಲಾವಣೆಗಳನ್ನು ಉಳಿಸಿ\"},\"settings\":{\"title\":\"ಅಪ್ಲಿಕೇಶನ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳು\",\"description\":\"ಅಪ್ಲಿಕೇಶನ್‌ನ ನೋಟ ಮತ್ತು ಭಾವನೆಯನ್ನು ಕಸ್ಟಮೈಸ್ ಮಾಡಿ.\",\"theme\":{\"title\":\"ಥೀಮ್\",\"description\":\"ಅಪ್ಲಿಕೇಶನ್‌ಗಾಗಿ ಥೀಮ್ ಆಯ್ಕೆಮಾಡಿ.\",\"light\":\"ಬೆಳಕು\",\"dark\":\"ಡಾರ್ಕ್\",\"system\":\"ಸಿಸ್ಟಮ್\"},\"about\":{\"title\":\"ಕೃಷಿಕಭಾಯ ಬಗ್ಗೆ\",\"description\":\"ಕೃಷಿಕಭಾಯವು ಸಣ್ಣ ಪ್ರಮಾಣದ ಭಾರತೀಯ ರೈತರಿಗೆ ನೈಜ-ಸಮಯದ ಬೆಳೆ ರೋಗನಿರ್ಣಯ, ಮಂಡಿ ಬೆಲೆಗಳು, ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ಮತ್ತು ಸ್ಥಳೀಯ ಭಾಷೆಗಳಲ್ಲಿ ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಕೃಷಿ ಸಲಹೆಯೊಂದಿಗೆ ಬೆಂಬಲಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ AI-ಚಾಲಿತ ಕೃಷಿ ಸಹಾಯಕವಾಗಿದೆ.\"},\"version\":{\"title\":\"ಅಪ್ಲಿಕೇಶನ್ ಆವೃತ್ತಿ\"},\"poweredBy\":{\"title\":\"ಇವರಿಂದ ಚಾಲಿತ\",\"tech1\":\"ಗೂಗಲ್ ಕ್ಲೌಡ್ ವರ್ಟೆಕ್ಸ್ ಎಐ\",\"tech2\":\"ಫೈರ್‌ಬೇಸ್\",\"tech3\":\"ಜೆಮಿನಿ ಮಲ್ಟಿಮೋಡಲ್ ಮಾದರಿಗಳು\"},\"developedBy\":{\"title\":\"ಅಭಿವೃದ್ಧಿಪಡಿಸಿದವರು\",\"teamName\":\"ಟೀಮ್ ಕೊಡೊಗ್ರಾಮ್\"},\"contact\":{\"title\":\"ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ\",\"emailLabel\":\"ಇಮೇಲ್\",\"whatsappLabel\":\"ವಾಟ್ಸಾಪ್\"},\"legal\":{\"privacy\":\"ಗೌಪ್ಯತಾ ನೀತಿ\",\"terms\":\"ಬಳಕೆಯ ನಿಯಮಗಳು\"}},\"privacy\":{\"description\":\"ನಿಮ್ಮ ಗೌಪ್ಯತೆಗೆ ನಮ್ಮ ಬದ್ಧತೆ.\",\"backToSettings\":\"ಸೆಟ್ಟಿಂಗ್ಸ್‌ಗೆ ಹಿಂತಿರುಗಿ\",\"lastUpdated\":{\"title\":\"ಕೊನೆಯದಾಗಿ ನವೀಕರಿಸಲಾಗಿದೆ\",\"date\":\"ಜುಲೈ 26, 2024\"},\"introduction\":{\"title\":\"ಪರಿಚಯ\",\"content\":\"ಕೃಷಿಕಭಾಯ ಗೆ ಸುಸ್ವಾಗತ. ನಿಮ್ಮ ಗೌಪ್ಯತೆಯನ್ನು ರಕ್ಷಿಸಲು ಮತ್ತು ನಿಮ್ಮ ಡೇಟಾವನ್ನು ಮುಕ್ತ ಮತ್ತು ಪಾರದರ್ಶಕ ರೀತಿಯಲ್ಲಿ ನಿರ್ವಹಿಸಲು ನಾವು ಬದ್ಧರಾಗಿದ್ದೇವೆ. ಈ ಗೌಪ್ಯತಾ ನೀತಿಯು ನಾವು ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು ಹೇಗೆ ಸಂಗ್ರಹಿಸುತ್ತೇವೆ, ಬಳಸುತ್ತೇವೆ ಮತ್ತು ರಕ್ಷಿಸುತ್ತೇವೆ ಎಂಬುದನ್ನು ವಿವರಿಸುತ್ತದೆ.\"},\"information\":{\"title\":\"ನಾವು ಸಂಗ್ರಹಿಸುವ ಮಾಹಿತಿ\",\"personal\":{\"title\":\"ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ\",\"content\":\"ನೀವು ನೋಂದಾಯಿಸಿದಾಗ, ನಿಮ್ಮ ಖಾತೆಯನ್ನು ರಚಿಸಲು ಮತ್ತು ನಿರ್ವಹಿಸಲು ನಿಮ್ಮ ಹೆಸರು, ಇಮೇಲ್ ಮತ್ತು ಸ್ಥಳವನ್ನು ನಾವು ಸಂಗ್ರಹಿಸುತ್ತೇವೆ.\"},\"usage\":{\"title\":\"ಬಳಕೆಯ ಡೇಟಾ\",\"content\":\"ಬಳಸಿದ ವೈಶಿಷ್ಟ್ಯಗಳು ಮತ್ತು ಪ್ರವೇಶದ ಆವರ್ತನದಂತಹ ನಮ್ಮ ಸೇವೆಗಳೊಂದಿಗೆ ನೀವು ಹೇಗೆ ಸಂವಹನ ನಡೆಸುತ್ತೀರಿ ಎಂಬುದರ ಕುರಿತು ನಾವು ಮಾಹಿತಿಯನ್ನು ಸಂಗ್ರಹಿಸುತ್ತೇವೆ.\"},\"image\":{\"title\":\"ಚಿತ್ರ ಡೇಟಾ\",\"content\":\"ನಮ್ಮ ಬೆಳೆ ವೈದ್ಯ ವೈಶಿಷ್ಟ್ಯಕ್ಕಾಗಿ, ನೀವು ಅಪ್‌ಲೋಡ್ ಮಾಡುವ ಚಿತ್ರಗಳನ್ನು ನಾವು ಸಂಗ್ರಹಿಸುತ್ತೇವೆ. ಇವುಗಳನ್ನು ಕೇವಲ ರೋಗನಿರ್ಣಯಕ್ಕಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ ಮತ್ತು ಮೂರನೇ ವ್ಯಕ್ತಿಗಳೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಲಾಗುವುದಿಲ್ಲ.\"}},\"useOfInfo\":{\"title\":\"ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು ನಾವು ಹೇಗೆ ಬಳಸುತ್ತೇವೆ\",\"content\":\"ನಮ್ಮ ಸೇವೆಗಳನ್ನು ಒದಗಿಸಲು ಮತ್ತು ಸುಧಾರಿಸಲು, ನಿಮ್ಮ ಅನುಭವವನ್ನು ವೈಯಕ್ತೀಕರಿಸಲು ಮತ್ತು ನಿಮ್ಮೊಂದಿಗೆ ಸಂವಹನ ನಡೆಸಲು ನಾವು ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು ಬಳಸುತ್ತೇವೆ.\"},\"dataSharing\":{\"title\":\"ಡೇಟಾ ಹಂಚಿಕೆ\",\"content\":\"ನಾವು ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಡೇಟಾವನ್ನು ಮಾರಾಟ ಮಾಡುವುದಿಲ್ಲ. ಸಂಶೋಧನಾ ಉದ್ದೇಶಗಳಿಗಾಗಿ ನಾವು ಪಾಲುದಾರರೊಂದಿಗೆ ಅನಾಮಧೇಯ ಡೇಟಾವನ್ನು ಹಂಚಿಕೊಳ್ಳಬಹುದು, ಆದರೆ ನಿಮ್ಮ ಒಪ್ಪಿಗೆಯಿಲ್ಲದೆ ನಿಮ್ಮ ವೈಯಕ್ತಿಕವಾಗಿ ಗುರುತಿಸಬಹುದಾದ ಮಾಹಿತಿಯನ್ನು ಎಂದಿಗೂ ಹಂಚಿಕೊಳ್ಳುವುದಿಲ್ಲ.\"},\"dataSecurity\":{\"title\":\"ಡೇಟಾ ಭದ್ರತೆ\",\"content\":\"ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯ ಸುರಕ್ಷತೆಯನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಲು ನಾವು ವಿವಿಧ ಭದ್ರತಾ ಕ್ರಮಗಳನ್ನು ಜಾರಿಗೆ ತರುತ್ತೇವೆ.\"},\"yourRights\":{\"title\":\"ನಿಮ್ಮ ಹಕ್ಕುಗಳು\",\"content\":\"ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳ ಮೂಲಕ ಅಥವಾ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುವ ಮೂಲಕ ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಡೇಟಾವನ್ನು ಪ್ರವೇಶಿಸಲು, ಸರಿಪಡಿಸಲು ಅಥವಾ ಅಳಿಸಲು ನಿಮಗೆ ಹಕ್ಕಿದೆ.\"},\"changes\":{\"title\":\"ಈ ನೀತಿಗೆ ಬದಲಾವಣೆಗಳು\",\"content\":\"ನಾವು ಕಾಲಕಾಲಕ್ಕೆ ಈ ಗೌಪ್ಯತಾ ನೀತಿಯನ್ನು ನವೀಕರಿಸಬಹುದು. ಈ ಪುಟದಲ್ಲಿ ಹೊಸ ನೀತಿಯನ್ನು ಪೋಸ್ಟ್ ಮಾಡುವ ಮೂಲಕ ಯಾವುದೇ ಬದಲಾವಣೆಗಳ ಬಗ್ಗೆ ನಾವು ನಿಮಗೆ ತಿಳಿಸುತ್ತೇವೆ.\"},\"contact\":{\"title\":\"ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ\",\"content\":\"ಈ ಗೌಪ್ಯತಾ ನೀತಿಯ ಬಗ್ಗೆ ನಿಮಗೆ ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳಿದ್ದರೆ, ದಯವಿಟ್ಟು support@krishimitra.in ನಲ್ಲಿ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.\"}},\"terms\":{\"description\":\"ನಮ್ಮ ಸೇವೆಯನ್ನು ಬಳಸುವ ನಿಯಮಗಳು.\",\"backToSettings\":\"ಸೆಟ್ಟಿಂಗ್ಸ್‌ಗೆ ಹಿಂತಿರುಗಿ\",\"lastUpdated\":{\"title\":\"ಕೊನೆಯದಾಗಿ ನವೀಕರಿಸಲಾಗಿದೆ\",\"date\":\"ಜುಲೈ 26, 2024\"},\"acceptance\":{\"title\":\"ನಿಯಮಗಳ ಅಂಗೀಕಾರ\",\"content\":\"ಕೃಷಿಕಭಾಯ ಅನ್ನು ಪ್ರವೇಶಿಸುವ ಮತ್ತು ಬಳಸುವ ಮೂಲಕ, ನೀವು ಈ ಒಪ್ಪಂದದ ನಿಯಮಗಳು ಮತ್ತು ನಿಬಂಧನೆಗಳಿಗೆ ಬದ್ಧರಾಗಿರಲು ಒಪ್ಪುತ್ತೀರಿ ಮತ್ತು ಒಪ್ಪುತ್ತೀರಿ.\"},\"useOfService\":{\"title\":\"ಸೇವೆಯ ಬಳಕೆ\",\"content\":\"ನಮ್ಮ ಸೇವೆಗಳನ್ನು ಕೇವಲ ಕಾನೂನುಬದ್ಧ ಉದ್ದೇಶಗಳಿಗಾಗಿ ಮತ್ತು ಬೇರೊಬ್ಬರ ಬಳಕೆಯನ್ನು ಮತ್ತು ಸೇವೆಯ ಆನಂದವನ್ನು ಉಲ್ಲಂಘಿಸದ, ನಿರ್ಬಂಧಿಸದ ಅಥವಾ ಪ್ರತಿಬಂಧಿಸದ ರೀತಿಯಲ್ಲಿ ಬಳಸಲು ನೀವು ಒಪ್ಪುತ್ತೀರಿ.\",\"item1\":\"ನಿಮ್ಮ ಖಾತೆ ಮತ್ತು ಪಾಸ್‌ವರ್ಡ್‌ನ ಗೌಪ್ಯತೆಯನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಲು ನೀವು ಜವಾಬ್ದಾರರಾಗಿರುತ್ತೀರಿ.\",\"item2\":\"AI ಒದಗಿಸಿದ ಸಲಹೆಯು ಕೇವಲ ಮಾಹಿತಿ ಉದ್ದೇಶಗಳಿಗಾಗಿ ಮತ್ತು ವೃತ್ತಿಪರ ಕೃಷಿ ಸಲಹೆಗೆ ಬದಲಿಯಾಗಿ ಪರಿಗಣಿಸಬಾರದು.\",\"item3\":\"ವೈರಸ್‌ಗಳು ಅಥವಾ ದುರುದ್ದೇಶಪೂರಿತ ಅಥವಾ ತಾಂತ್ರಿಕವಾಗಿ ಹಾನಿಕಾರಕವಾದ ಇತರ ವಸ್ತುಗಳನ್ನು ತಿಳಿದೂ ತಿಳಿದೂ ಪರಿಚಯಿಸುವ ಮೂಲಕ ನೀವು ನಮ್ಮ ಸೇವೆಗಳನ್ನು ದುರುಪಯೋಗಪಡಿಸಿಕೊಳ್ಳಬಾರದು.\"},\"disclaimer\":{\"title\":\"ಖಾತರಿಗಳ ಹಕ್ಕು ನಿರಾಕರಣೆ\",\"content\":\"ಸೇವೆಯನ್ನು 'ಇರುವಂತೆ' ಮತ್ತು 'ಲಭ್ಯವಿರುವಂತೆ' ಆಧಾರದ ಮೇಲೆ ಯಾವುದೇ ರೀತಿಯ ಖಾತರಿಗಳಿಲ್ಲದೆ, ವ್ಯಕ್ತಪಡಿಸಿದ ಅಥವಾ ಸೂಚಿಸಿದ ಯಾವುದೇ ಖಾತರಿಗಳಿಲ್ಲದೆ ಒದಗಿಸಲಾಗಿದೆ.\"},\"limitation\":{\"title\":\"ಹೊಣೆಗಾರಿಕೆಯ ಮಿತಿ\",\"content\":\"ಯಾವುದೇ ಸಂದರ್ಭದಲ್ಲಿ ಕೃಷಿಕಭಾಯ ಅಥವಾ ಅದರ ಅಭಿವರ್ಧಕರು ಯಾವುದೇ ಪರೋಕ್ಷ, ಪ್ರಾಸಂಗಿಕ, ವಿಶೇಷ, ಪರಿಣಾಮವಾಗಿ ಅಥವಾ ದಂಡನಾತ್ಮಕ ಹಾನಿಗಳಿಗೆ ಹೊಣೆಗಾರರಾಗಿರುವುದಿಲ್ಲ, ಲಾಭಗಳು, ಡೇಟಾ, ಬಳಕೆ, ಸದ್ಭಾವನೆ, ಅಥವಾ ಇತರ ಅಮೂರ್ತ ನಷ್ಟಗಳು ಸೇರಿದಂತೆ.\"},\"termination\":{\"title\":\"ಮುಕ್ತಾಯ\",\"content\":\"ನೀವು ನಿಯಮಗಳನ್ನು ಉಲ್ಲಂಘಿಸಿದರೆ, ಯಾವುದೇ ಕಾರಣಕ್ಕಾಗಿ, ಯಾವುದೇ ಪೂರ್ವ ಸೂಚನೆ ಅಥವಾ ಹೊಣೆಗಾರಿಕೆಯಿಲ್ಲದೆ ನಾವು ನಿಮ್ಮ ಖಾತೆಯನ್ನು ತಕ್ಷಣವೇ ಕೊನೆಗೊಳಿಸಬಹುದು ಅಥವಾ ಅಮಾನತುಗೊಳಿಸಬಹುದು.\"},\"governingLaw\":{\"title\":\"ಆಡಳಿತ ಕಾನೂನು\",\"content\":\"ಈ ನಿಯಮಗಳನ್ನು ಭಾರತದ ಕಾನೂನುಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ನಿಯಂತ್ರಿಸಲಾಗುತ್ತದೆ ಮತ್ತು ಅರ್ಥೈಸಲಾಗುತ್ತದೆ, ಅದರ ಕಾನೂನು ನಿಬಂಧನೆಗಳ ಸಂಘರ್ಷವನ್ನು ಪರಿಗಣಿಸದೆ.\"},\"changes\":{\"title\":\"ಬದಲಾವಣೆಗಳು\",\"content\":\"ನಾವು ನಮ್ಮ ಸ್ವಂತ ವಿವೇಚನೆಯಿಂದ, ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ಈ ನಿಯಮಗಳನ್ನು ಮಾರ್ಪಡಿಸುವ ಅಥವಾ ಬದಲಿಸುವ ಹಕ್ಕನ್ನು ಕಾಯ್ದಿರಿಸಿದ್ದೇವೆ.\"}},\"toast\":{\"browserNotSupported\":\"ಬ್ರೌಸರ್ ಬೆಂಬಲಿತವಾಗಿಲ್ಲ\",\"noVoiceSupport\":\"ನಿಮ್ಮ ಬ್ರೌಸರ್ ಧ್ವನಿ ಗುರುತಿಸುವಿಕೆಯನ್ನು ಬೆಂಬಲಿಸುವುದಿಲ್ಲ.\",\"noSpeechDetected\":\"ಯಾವುದೇ ಭಾಷಣ ಪತ್ತೆಯಾಗಿಲ್ಲ\",\"tryAgain\":\"ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ ಮತ್ತು ಮೈಕ್ರೊಫೋನ್‌ನಲ್ಲಿ ಸ್ಪಷ್ಟವಾಗಿ ಮಾತನಾಡಿ.\",\"voiceError\":\"ಧ್ವನಿ ಗುರುತಿಸುವಿಕೆ ದೋಷ\",\"unsupportedFileType\":\"ಬೆಂಬಲವಿಲ್ಲದ ಫೈಲ್ ಪ್ರಕಾರ\",\"selectAnImage\":\"ದಯವಿಟ್ಟು ಚಿತ್ರ ಫೈಲ್ ಆಯ್ಕೆಮಾಡಿ.\",\"speechGenerationFailed\":\"ಭಾಷಣ ಉತ್ಪಾದನೆ ವಿಫಲವಾಗಿದೆ\",\"couldNotGenerateAudio\":\"ರೋಗನಿರ್ಣಯಕ್ಕಾಗಿ ಆಡಿಯೊವನ್ನು ರಚಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.\",\"couldNotGenerateAudioAnalysis\":\"ವಿಶ್ಲೇಷಣೆಗಾಗಿ ಆಡಿಯೊವನ್ನು ರಚಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.\",\"noImageSelected\":\"ಯಾವುದೇ ಚಿತ್ರವನ್ನು ಆಯ್ಕೆ ಮಾಡಲಾಗಿಲ್ಲ\",\"selectImageToDiagnose\":\"ರೋಗನಿರ್ಣಯ ಮಾಡಲು ದಯವಿಟ್ಟು ನಿಮ್ಮ ಬೆಳೆಯ ಚಿತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ.\",\"diagnosisFailed\":\"ರೋಗನಿರ್ಣಯ ವಿಫಲವಾಗಿದೆ\",\"errorAnalyzingImage\":\"ಚಿತ್ರವನ್ನು ವಿಶ್ಲೇಷಿಸುವಾಗ ದೋಷ ಸಂಭವಿಸಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.\",\"emptyQuery\":\"ಖಾಲಿ ಪ್ರಶ್ನೆ\",\"enterMarketQuestion\":\"ದಯವಿಟ್ಟು ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳ ಬಗ್ಗೆ ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ನಮೂದಿಸಿ.\",\"analysisFailed\":\"ವಿಶ್ಲೇಷಣೆ ವಿಫಲವಾಗಿದೆ\",\"errorAnalyzingMarket\":\"ಮಾರುಕಟ್ಟೆ ಡೇಟಾವನ್ನು ವಿಶ್ಲೇಷಿಸುವಾಗ ದೋಷ ಸಂಭವಿಸಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.\",\"enterSchemeQuestion\":\"ದಯವಿಟ್ಟು ಸರ್ಕಾರಿ ಯೋಜನೆಯ ಬಗ್ಗೆ ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ನಮೂದಿಸಿ.\",\"searchFailed\":\"ಹುಡುಕಾಟ ವಿಫಲವಾಗಿದೆ\",\"errorFetchingScheme\":\"ಯೋಜನೆಯ ವಿವರಗಳನ್ನು ಪಡೆಯುವಾಗ ದೋಷ ಸಂಭವಿಸಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.\",\"errorFetchingWeather\":\"ಹವಾಮಾನವನ್ನು ಪಡೆಯುವಲ್ಲಿ ದೋಷ\",\"couldNotRetrieveWeather\":\"ನಿರ್ದಿಷ್ಟಪಡಿಸಿದ ಸ್ಥಳಕ್ಕಾಗಿ ಹವಾಮಾನ ಡೇಟಾವನ್ನು ಹಿಂಪಡೆಯಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.\",\"videoSearchFailed\":\"ವೀಡಿಯೊ ಹುಡುಕಾಟ ವಿಫಲವಾಗಿದೆ\",\"couldNotRetrieveVideos\":\"ವೀಡಿಯೊ ಟ್ಯುಟೋರಿಯಲ್‌ಗಳನ್ನು ಹಿಂಪಡೆಯಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.\",\"summarizationFailed\":\"ಸಾರಾಂಶ ವಿಫಲವಾಗಿದೆ\",\"couldNotSummarize\":\"ವೆಬ್‌ನಿಂದ ಲೇಖನವನ್ನು ಸಂಕ್ಷಿಪ್ತಗೊಳಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.\",\"signUpSuccess\":\"ಸೈನ್ ಅಪ್ ಯಶಸ್ವಿಯಾಗಿದೆ\",\"signUpSuccessDesc\":\"ಸ್ವಾಗತ! ಮುಂದುವರಿಸಲು ದಯವಿಟ್ಟು ಲಾಗಿನ್ ಮಾಡಿ.\",\"unexpectedError\":\"ಅನಿರೀಕ್ಷಿತ ದೋಷ ಸಂಭವಿಸಿದೆ.\",\"invalidCredentials\":\"ಅಮಾನ್ಯ ಇಮೇಲ್ ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.\",\"emailInUse\":\"ಈ ಇಮೇಲ್‌ನೊಂದಿಗೆ ಖಾತೆ ಈಗಾಗಲೇ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ.\",\"signUpFailed\":\"ಸೈನ್ ಅಪ್ ವಿಫಲವಾಗಿದೆ\",\"signInFailed\":\"ಸೈನ್ ಇನ್ ವಿಫಲವಾಗಿದೆ\",\"profileUpdated\":\"ಪ್ರೊಫೈಲ್ ನವೀಕರಿಸಲಾಗಿದೆ\",\"profileUpdatedDesc\":\"ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಉಳಿಸಲಾಗಿದೆ.\",\"updateFailed\":\"ನವೀಕರಣ ವಿಫಲವಾಗಿದೆ\",\"updateFailedDesc\":\"ನಿಮ್ಮ ಬದಲಾವಣೆಗಳನ್ನು ಉಳಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.\",\"photoUpdated\":\"ಫೋಟೋ ನವೀಕರಿಸಲಾಗಿದೆ\",\"photoUpdatedDesc\":\"ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಚಿತ್ರವನ್ನು ಬದಲಾಯಿಸಲಾಗಿದೆ.\",\"uploadFailed\":\"ಅಪ್‌ಲೋಡ್ ವಿಫಲವಾಗಿದೆ\",\"uploadFailedDesc\":\"ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಚಿತ್ರವನ್ನು ಬದಲಾಯಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.\",\"recommendationFailed\":\"ಶಿಫಾರಸು ವಿಫಲವಾಗಿದೆ\",\"errorGeneratingRecommendation\":\"ಬೆಳೆ ಶಿಫಾರಸುಗಳನ್ನು ರಚಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.\",\"noInput\":\"ಯಾವುದೇ ಇನ್‌ಪುಟ್ ಒದಗಿಸಿಲ್ಲ\",\"provideImageOrDescription\":\"ದಯವಿಟ್ಟು ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಅಥವಾ ಸಮಸ್ಯೆಯ ವಿವರಣೆಯನ್ನು ಒದಗಿಸಿ.\"},\"tracker\":{\"title\":\"ವೆಚ್ಚ ಮತ್ತು ಲಾಭ ಟ್ರ್ಯಾಕರ್\",\"description\":\"ಬೆಳೆಯ ಲಾಭದಾಯಕತೆಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ನಿಮ್ಮ ಆದಾಯ ಮತ್ತು ವೆಚ್ಚಗಳನ್ನು ಲಾಗ್ ಮಾಡಿ.\",\"addTransaction\":\"ವಹಿವಾಟು ಸೇರಿಸಿ\",\"editTransaction\":\"ವಹಿವಾಟು ಸಂಪಾದಿಸಿ\",\"transactionDetails\":\"ನಿಮ್ಮ ಆದಾಯ ಅಥವಾ ವೆಚ್ಚಕ್ಕಾಗಿ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ.\",\"totalIncome\":\"ಒಟ್ಟು ಆದಾಯ\",\"totalExpense\":\"ಒಟ್ಟು ವೆಚ್ಚ\",\"netProfitLoss\":\"ನಿವ್ವಳ ಲಾಭ / ನಷ್ಟ\",\"recentTransactions\":\"ಇತ್ತೀಚಿನ ವಹಿವಾಟುಗಳು\",\"recentTransactionsDesc\":\"ನಿಮ್ಮ ತೀರಾ ಇತ್ತೀಚಿನ ಆದಾಯ ಮತ್ತು ವೆಚ್ಚಗಳ ಒಂದು ಲಾಗ್.\",\"noTransactions\":\"ಇನ್ನೂ ಯಾವುದೇ ವಹಿವಾಟುಗಳಿಲ್ಲ. ಪ್ರಾರಂಭಿಸಲು 'ವಹಿವಾಟು ಸೇರಿಸಿ' ಕ್ಲಿಕ್ ಮಾಡಿ.\",\"summaryChart\":\"ಆದಾಯ ಮತ್ತು ವೆಚ್ಚ\",\"summaryChartDesc\":\"ನಿಮ್ಮ ಹಣಕಾಸಿನ ಒಂದು ದೃಶ್ಯ ಸಾರಾಂಶ.\",\"chart\":{\"income\":\"ಆದಾಯ\",\"expense\":\"ವೆಚ್ಚ\"},\"form\":{\"description\":\"ವಿವರಣೆ\",\"amount\":\"ಮೊತ್ತ (₹)\",\"type\":\"ಪ್ರಕಾರ\",\"selectType\":\"ಒಂದು ಪ್ರಕಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ\",\"income\":\"ಆದಾಯ\",\"expense\":\"ವೆಚ್ಚ\",\"category\":\"ವರ್ಗ\",\"selectCategory\":\"ಒಂದು ವರ್ಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ\",\"date\":\"ದಿನಾಂಕ\",\"pickDate\":\"ಒಂದು ದಿನಾಂಕವನ್ನು ಆರಿಸಿ\",\"cancel\":\"ರದ್ದುಮಾಡಿ\",\"save\":\"ವಹಿವಾಟನ್ನು ಉಳಿಸಿ\"},\"categories\":{\"seeds\":\"ಬೀಜಗಳು\",\"fertilizers\":\"ಗೊಬ್ಬರಗಳು\",\"pesticides\":\"ಕೀಟನಾಶಕಗಳು\",\"labor\":\"ಕಾರ್ಮಿಕ\",\"equipment\":\"ಉಪಕರಣಗಳು\",\"fuel\":\"ಇಂಧನ\",\"rent\":\"ಭೂಮಿ ಬಾಡಿಗೆ\",\"other\":\"ಇತರೆ\",\"cropSale\":\"ಬೆಳೆ ಮಾರಾಟ\",\"subsidy\":\"ಸಬ್ಸಿಡಿ\"},\"actions\":{\"edit\":\"ಸಂಪಾದಿಸಿ\",\"delete\":\"ಅಳಿಸಿ\"}},\"cropRecommender\":{\"title\":\"ಎಐ ಬೆಳೆ ಶಿಫಾರಸು\",\"description\":\"ನಿಮ್ಮ ಸ್ಥಳ, ಕೃಷಿ ಪ್ರಕಾರ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಪ್ರವೃತ್ತಿಗಳ ಆಧಾರದ ಮೇಲೆ ಬುದ್ಧಿವಂತ ಬೆಳೆ ಸಲಹೆಗಳನ್ನು ಪಡೆಯಿರಿ.\",\"client\":{\"formTitle\":\"ಕೃಷಿ ವಿವರಗಳು\",\"formDescription\":\"ಉತ್ತಮ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಲು ನಿಮ್ಮ ಕೃಷಿಯ ಬಗ್ಗೆ ವಿವರಗಳನ್ನು ಒದಗಿಸಿ.\",\"farmType\":\"ಕೃಷಿ ಪ್ರಕಾರ\",\"irrigated\":\"ನೀರಾವರಿ\",\"rainfed\":\"ಮಳೆ ಆಶ್ರಿತ / ಒಣ\",\"landSize\":\"ಭೂಮಿಯ ಗಾತ್ರ (ಉದಾ., 2 ಎಕರೆ)\",\"cropPreference\":\"ಬೆಳೆ ಆದ್ಯತೆ (ಐಚ್ಛಿಕ)\",\"cropPreferencePlaceholder\":\"ಉದಾ., ತರಕಾರಿಗಳು, ರಾಗಿ\",\"getRecommendations\":\"ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ\",\"gettingRecommendations\":\"ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಲಾಗುತ್ತಿದೆ...\",\"resultsTitle\":\"ಎಐ-ಚಾಲಿತ ಶಿಫಾರಸುಗಳು\",\"resultsPlaceholder\":\"ನಿಮ್ಮ ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಬೆಳೆ ಶಿಫಾರಸುಗಳು ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತವೆ.\",\"topPicks\":\"ನಿಮಗಾಗಿ ನಮ್ಮ ಉನ್ನತ ಆಯ್ಕೆಗಳು\",\"topPicksDescription\":\"ನಿಮ್ಮ ಇನ್‌ಪುಟ್‌ಗಳ ಆಧಾರದ ಮೇಲೆ, ಮುಂಬರುವ ಋತುವಿಗೆ ಅತ್ಯಂತ ಸೂಕ್ತವಾದ ಬೆಳೆಗಳು ಇಲ್ಲಿವೆ.\",\"learnMore\":\"ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ\",\"soilType\":\"ಮಣ್ಣಿನ ಪ್ರಕಾರ (ಐಚ್ಛಿಕ)\",\"selectSoilType\":\"ಮಣ್ಣಿನ ಪ್ರಕಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ\",\"soilTypes\":{\"black\":\"ಕಪ್ಪು\",\"red\":\"ಕೆಂಪು\",\"loamy\":\"ಜೇಡಿ\",\"sandy\":\"ಮರಳು\",\"clay\":\"ಆವೆ\"},\"waterSource\":\"ನೀರಿನ ಮೂಲ (ಐಚ್ಛಿಕ)\",\"selectWaterSource\":\"ನೀರಿನ ಮೂಲವನ್ನು ಆಯ್ಕೆಮಾಡಿ\",\"waterSources\":{\"borewell\":\"ಬೋರ್‌ವೆಲ್\",\"canal\":\"ನಾಲೆ\",\"rain-only\":\"ಮಳೆ ಮಾತ್ರ\",\"tank\":\"ಕೆರೆ\",\"river\":\"ನದಿ\"},\"currentSeason\":\"ಪ್ರಸ್ತುತ ಋತು\",\"seasons\":{\"kharif\":\"ಖಾರಿಫ್\",\"rabi\":\"ರಬಿ\",\"zaid\":\"ಜೈದ್\"},\"previousCrop\":\"ಹಿಂದಿನ ಬೆಳೆ (ಐಚ್ಛಿಕ)\",\"budget\":\"ಬಜೆಟ್ (ಐಚ್ಛಿಕ)\",\"keyBenefits\":\"ಪ್ರಮುಖ ಪ್ರಯೋಜನಗಳು\"}},\"chatbot\":{\"title\":\"ಅನ್ನಪೂರ್ಣ ಸಹಾಯಕ\",\"description\":\"ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಕೃಷಿ ಸಹಾಯಕ. ನನ್ನನ್ನು ಏನು ಬೇಕಾದರೂ ಕೇಳಿ!\",\"open\":\"ಚಾಟ್‌ಬಾಟ್ ತೆರೆಯಿರಿ\",\"placeholder\":\"ಅನ್ನಪೂರ್ಣಳಿಗೆ ಪ್ರಶ್ನೆ ಕೇಳಿ...\",\"welcomeMessage\":\"ನಮಸ್ಕಾರ {{name}}! ನಾನು ಅನ್ನಪೂರ್ಣ. ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ? ನೀವು ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳನ್ನು ತೋರಿಸಲು, ಬೆಳೆಯನ್ನು ಪತ್ತೆಹಚ್ಚಲು, ಅಥವಾ ಸರ್ಕಾರಿ ಯೋಜನೆಯನ್ನು ಹುಡುಕಲು ನನ್ನನ್ನು ಕೇಳಬಹುದು.\",\"errorMessage\":\"ಕ್ಷಮಿಸಿ, ನನಗೆ ಇದೀಗ ಸಂಪರ್ಕಿಸಲು ತೊಂದರೆಯಾಗುತ್ತಿದೆ. ದಯವಿಟ್ಟು ಒಂದು ಕ್ಷಣದಲ್ಲಿ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.\",\"yes\":\"ಹೌದು\",\"no\":\"ಇಲ್ಲ\"}}"));}}),
"[project]/src/locales/bn.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"common\":{\"loading\":\"লোড হচ্ছে\",\"initializing\":\"আপনার ড্যাশবোর্ড শুরু হচ্ছে...\"},\"nav\":{\"dashboard\":\"ড্যাশবোর্ড\",\"cropDoctor\":\"ফসল ডাক্তার\",\"marketAnalyst\":\"বাজার বিশ্লেষক\",\"govtSchemes\":\"সরকারি প্রকল্প\",\"weather\":\"আবহাওয়া\",\"community\":\"קהילה\",\"shop\":\"দোকান\",\"eLearning\":\"ই-লার্নিং\",\"tracker\":\"ট্র্যাকার\",\"cropRecommender\":\"ফসল সুপারিশকারী\",\"profile\":\"প্রোফাইল\",\"settings\":\"সেটিংস\"},\"userNav\":{\"profile\":\"প্রোফাইল\",\"settings\":\"সেটিংস\",\"logout\":\"লগ আউট\"},\"dashboardLayout\":{\"toggleMenu\":\"মেনু টগল করুন\",\"menuTitle\":\"নেভিগেশন মেনু\",\"menuDescription\":\"অ্যাপ্লিকেশনের জন্য প্রধান নেভিগেশন লিঙ্ক।\"},\"login\":{\"imageAlt\":\"একটি সবুজ খামারের ছবি\",\"tagline\":\"প্রযুক্তির মাধ্যমে কৃষিকে ক্ষমতায়ন\",\"subTagline\":\"উন্নত ফলন এবং টেকসই অনুশীলনের জন্য AI ব্যবহার করে আধুনিক কৃষকদের একটি সম্প্রদায়ে যোগ দিন।\",\"createAccountPrompt\":\"শুরু করতে আপনার অ্যাকাউন্ট তৈরি করুন।\",\"signInPrompt\":\"আবার স্বাগতম! আপনার ড্যাশবোর্ডে সাইন ইন করুন।\",\"emailLabel\":\"ইমেল\",\"passwordLabel\":\"পাসওয়ার্ড\",\"processing\":\"প্রসেস করা হচ্ছে...\",\"createAccountButton\":\"অ্যাকাউন্ট তৈরি করুন\",\"signInButton\":\"সাইন ইন করুন\",\"alreadyHaveAccount\":\"ইতিমধ্যেই একটি অ্যাকাউন্ট আছে?\",\"dontHaveAccount\":\"অ্যাকাউন্ট নেই?\",\"signInLink\":\"সাইন ইন করুন\",\"signUpLink\":\"সাইন আপ করুন\"},\"dashboard\":{\"welcome\":\"আবার স্বাগতম, {{name}}!\",\"description\":\"এখানে আপনার খামার এবং বাজারের একটি দ্রুত সংক্ষিপ্ত বিবরণ রয়েছে।\",\"farmer\":\"কৃষক\",\"quickLinks\":{\"cropDoctor\":\"ফসলের রোগ সঙ্গে সঙ্গে নির্ণয় করুন।\",\"cropRecommender\":\"AI-চালিত ফসলের পরামর্শ পান।\",\"marketAnalyst\":\"বাস্তব-সময়ের মূল্য বিশ্লেষণ পান।\",\"govtSchemes\":\"আপনার জন্য সরকারি প্রকল্প খুঁজুন।\",\"tracker\":\"আপনার খামারের খরচ এবং লাভ ট্র্যাক করুন।\",\"eLearning\":\"গাইড এবং টিউটোরিয়াল ব্রাউজ করুন।\"},\"currentWeather\":\"বর্তমান আবহাওয়া\",\"weatherUnavailable\":\"আবহাওয়ার ডেটা অনুপলব্ধ।\"},\"cropDoctor\":{\"title\":\"এআই ফসল ডাক্তার\",\"description\":\"একটি তাত্ক্ষণিক নির্ণয় এবং প্রস্তাবিত সমাধান পেতে একটি ক্ষতিগ্রস্ত ফসলের পাতার একটি পরিষ্কার ছবি আপলোড করুন।\",\"client\":{\"uploadTitle\":\"আপনার ফসল নির্ণয় করুন\",\"uploadDescription\":\"সবচেয়ে সঠিক নির্ণয়ের জন্য একটি ছবি আপলোড করুন, সমস্যাটি বর্ণনা করুন বা উভয়ই করুন।\",\"imageLabel\":\"ছবি আপলোড করুন\",\"changeFile\":\"ফাইল পরিবর্তন করুন\",\"chooseFile\":\"ফাইল চয়ন করুন\",\"cropPreview\":\"ফসলের পূর্বরূপ\",\"descriptionLabel\":\"সমস্যা বর্ণনা করুন\",\"descriptionPlaceholder\":\"যেমন, 'আমার টমেটো পাতায় বাদামী কেন্দ্র সহ হলুদ দাগ আছে।' অথবা কথা বলতে মাইক ক্লিক করুন।\",\"diagnosing\":\"নির্ণয় করা হচ্ছে...\",\"diagnoseButton\":\"রোগ নির্ণয় করুন\",\"resultTitle\":\"নির্ণয়ের ফলাফল\",\"diagnosis\":\"নির্ণয়\",\"solutions\":\"প্রস্তাবিত সমাধান\",\"readDocs\":\"ডক্স পড়ুন\",\"watchVideo\":\"ভিডিও দেখুন\",\"resultPlaceholder\":\"আপনার নির্ণয়ের ফলাফল এখানে প্রদর্শিত হবে।\"}},\"marketAnalyst\":{\"title\":\"বাজার বিশ্লেষক\",\"description\":\"বাস্তব-সময়ের বাজার মূল্য বিশ্লেষণ এবং সুপারিশ পান। \\\"পুনে মন্ডিতে পেঁয়াজের দাম কত?\\\" এর মতো একটি প্রশ্ন জিজ্ঞাসা করুন।\",\"faqTitle\":\"সচরাচর জিজ্ঞাস্য প্রশ্নাবলী\",\"faqs\":{\"q1\":\"আমি কি ধরনের প্রশ্ন করতে পারি?\",\"a1\":\"আপনি নির্দিষ্ট স্থানে বর্তমান ফসলের দাম, মূল্যের প্রবণতা সম্পর্কে জিজ্ঞাসা করতে পারেন এবং আপনার পণ্য বিক্রি করবেন নাকি ধরে রাখবেন সে সম্পর্কে সুপারিশ পেতে পারেন। উদাহরণস্বরূপ: 'পুনেতে টমেটোর দাম কত?' বা 'আমার কি এখন আমার গমের স্টক বিক্রি করা উচিত?'\",\"q2\":\"মূল্যের তথ্য কতটা নির্ভুল?\",\"a2\":\"মূল্যের তথ্য বিভিন্ন কৃষি বাজার (মান্ডি) থেকে বাস্তব-সময়ের ডেটার উপর ভিত্তি করে। আমরা নির্ভুলতার জন্য চেষ্টা করার সময়, দাম দ্রুত ওঠানামা করতে পারে। আপনার সিদ্ধান্তের জন্য একটি গাইড হিসাবে তথ্য ব্যবহার করুন।\",\"q3\":\"আমি কি ভবিষ্যতের মূল্য পূর্বাভাস সম্পর্কে জিজ্ঞাসা করতে পারি?\",\"a3\":\"হ্যাঁ, আপনি মূল্য প্রবণতা বিশ্লেষণ এবং পূর্বাভাসের জন্য জিজ্ঞাসা করতে পারেন। AI ঐতিহাসিক ডেটা এবং বর্তমান বাজার পরিস্থিতির উপর ভিত্তি করে অন্তর্দৃষ্টি প্রদান করবে, কিন্তু অনুগ্রহ করে মনে রাখবেন যে এগুলি পূর্বাভাস এবং গ্যারান্টি নয়।\",\"q4\":\"কোন স্থান এবং ফসল সমর্থিত?\",\"a4\":\"সহকারী ভারত জুড়ে প্রধান ফসল এবং বাজারের একটি বিস্তৃত পরিসর কভার করে। আপনি বিভিন্ন শহর এবং তাদের প্রধান কৃষি বাজারে সবজি, শস্য, ফল এবং আরও অনেক কিছু সম্পর্কে জিজ্ঞাসা করতে পারেন।\"},\"client\":{\"askTitle\":\"আপনার বাজারের প্রশ্ন জিজ্ঞাসা করুন\",\"placeholder\":\"যেমন, আগামী সপ্তাহে ব্যাঙ্গালোরে টমেটোর দাম বাড়ার সম্ভাবনা কী? অথবা কথা বলতে মাইক ক্লিক করুন।\",\"analyzing\":\"বিশ্লেষণ করা হচ্ছে...\",\"getAnalysis\":\"বিশ্লেষণ পান\",\"stopRecording\":\"রেকর্ডিং বন্ধ করুন\",\"useVoice\":\"ভয়েস ব্যবহার করুন\",\"resultTitle\":\"বিশ্লেষণ ফলাফল\",\"recommendation\":\"সুপারিশ\",\"marketAnalysis\":\"বাজার বিশ্লেষণ\",\"resultPlaceholder\":\"আপনার বাজার বিশ্লেষণ এখানে প্রদর্শিত হবে।\"}},\"schemes\":{\"title\":\"প্রকল্প ও তথ্য হাব\",\"description\":\"মূল সরকারি প্রকল্পগুলি আবিষ্কার করুন, সর্বশেষ খবরের সাথে আপডেট থাকুন এবং আপনার জন্য উপযুক্ত তথ্য খুঁজুন।\",\"keySchemesTitle\":\"মূল সরকারি প্রকল্প\",\"latestNewsTitle\":\"সর্বশেষ খবর ও আপডেট\",\"visitSite\":\"সাইট দেখুন\",\"readMore\":\"আরও পড়ুন\",\"keySchemes\":{\"pmkisan\":{\"title\":\"পিএম-কিষাণ প্রকল্প\",\"description\":\"ছোট ও প্রান্তিক কৃষক পরিবারকে প্রতি বছর ₹6,000 আর্থিক সহায়তা।\"},\"pmfby\":{\"title\":\"প্রধানমন্ত্রী ফসল বীমা যোজনা\",\"description\":\"প্রাকৃতিক দুর্যোগ, কীটপতঙ্গ বা রোগের কারণে ফসল নষ্টের বিরুদ্ধে বীমা কভারেজ।\"},\"kcc\":{\"title\":\"কিষাণ ক্রেডিট কার্ড (কেসিসি)\",\"description\":\"কৃষকদের তাদের চাষাবাদ এবং অন্যান্য প্রয়োজনের জন্য সময়মত ঋণ পেতে সহায়তা করে।\"}},\"latestNews\":{\"kharifMsp\":{\"title\":\"সরকার খরিফ ফসলের এমএসপি বাড়িয়েছে\",\"description\":\"আসন্ন বিপণন মরসুমের জন্য সমস্ত বাধ্যতামূলক খরিফ ফসলের জন্য ন্যূনতম সমর্থন মূল্যে একটি উল্লেখযোগ্য বৃদ্ধি মন্ত্রিসভা অনুমোদন করেছে।\"},\"subsidyPortal\":{\"title\":\"খামার ভর্তুকি বিতরণের জন্য নতুন পোর্টাল চালু হয়েছে\",\"description\":\"বিভিন্ন কৃষি সরঞ্জামের জন্য ভর্তুকি আবেদন এবং বিতরণের প্রক্রিয়া সহজ করার জন্য একটি নতুন সমন্বিত পোর্টাল চালু করা হয়েছে।\"},\"horticultureMission\":{\"title\":\"জাতীয় উদ্যানপালন মিশনের জন্য নির্দেশিকা জারি করা হয়েছে\",\"description\":\"কৃষি বিভাগ ফসল-পরবর্তী ব্যবস্থাপনার উপর দৃষ্টি নিবদ্ধ করে উদ্যানপালন খাতকে উত্সাহিত করার জন্য এনএইচএম-এর জন্য আপডেট করা নির্দেশিকা প্রকাশ করেছে।\"},\"enamMilestone\":{\"title\":\"ই-ন্যাম 1,000টি মান্ডি একীভূত করে নতুন মাইলফলক ছুঁয়েছে\",\"description\":\"ইলেকট্রনিক ন্যাশনাল এগ্রিকালচার মার্কেট (ই-ন্যাম) প্ল্যাটফর্ম এখন সারা দেশে 1,000টিরও বেশি কৃষি পণ্য বাজারকে সংযুক্ত করেছে।\"},\"solarPump\":{\"title\":\"সৌর পাম্প প্রকল্প আরও এক বছরের জন্য বাড়ানো হয়েছে\",\"description\":\"পিএম-কুসুম প্রকল্প, যার লক্ষ্য কৃষকদের সৌরশক্তি চালিত সেচ পাম্প সরবরাহ করা, তা মার্চ 2025 পর্যন্ত বাড়ানো হয়েছে।\"}},\"client\":{\"title\":\"একটি নির্দিষ্ট প্রকল্প খুঁজুন\",\"description\":\"যেকোনো সরকারি প্রকল্পের বিস্তারিত জানতে আমাদের AI সহকারী ব্যবহার করুন।\",\"placeholder\":\"যেমন, আমাকে পিএম-কিষাণ প্রকল্প সম্পর্কে বলুন\",\"searching\":\"অনুসন্ধান করা হচ্ছে...\",\"findScheme\":\"প্রকল্প খুঁজুন\",\"stopRecording\":\"রেকর্ডিং বন্ধ করুন\",\"useVoice\":\"ভয়েস ব্যবহার করুন\",\"eligibility\":\"যোগ্যতা\",\"applyNow\":\"এখন আবেদন করুন\",\"resultPlaceholder\":\"প্রকল্পের বিবরণ দেখতে একটি প্রশ্ন জিজ্ঞাসা করুন।\"}},\"weather\":{\"title\":\"লাইভ আবহাওয়ার পূর্বাভাস\",\"description\":\"আপনার কৃষি কার্যক্রম সেই অনুযায়ী পরিকল্পনা করুন।\",\"enterCity\":\"শহরের নাম লিখুন...\",\"currentWeather\":\"বর্তমান আবহাওয়া\",\"rightNowIn\":\"এখন {{city}} এ\",\"wind\":\"বাতাস\",\"humidity\":\"আর্দ্রতা\",\"weeklyForecast\":\"সাপ্তাহিক পূর্বাভাস\",\"noData\":\"কোনো আবহাওয়ার ডেটা উপলব্ধ নেই। অনুগ্রহ করে অন্য একটি অবস্থান চেষ্টা করুন।\",\"conditions\":{\"sunny\":\"রৌদ্রোজ্জ্বল\",\"partlyCloudy\":\"আংশিক মেঘলা\",\"cloudy\":\"মেঘলা\",\"showers\":\"ঝরনা\",\"rainy\":\"বৃষ্টি\",\"humidAndCloudy\":\"আর্দ্র ও মেঘলা\",\"thunderstorms\":\"বজ্রসহ বৃষ্টি\"},\"days\":{\"today\":\"আজ\",\"monday\":\"সোমবার\",\"tuesday\":\"মঙ্গলবার\",\"wednesday\":\"বুধবার\",\"thursday\":\"বৃহস্পতিবার\",\"friday\":\"শুক্রবার\",\"saturday\":\"শনিবার\",\"sunday\":\"রবিবার\"}},\"community\":{\"title\":\"קהילה ফোরাম\",\"description\":\"অন্যান্য কৃষকদের সাথে সংযোগ স্থাপন করুন, জ্ঞান ভাগ করুন এবং একসাথে বেড়ে উঠুন।\",\"chatRooms\":\"চ্যাট রুম\",\"you\":\"আপনি\",\"attachmentPreview\":\"সংযুক্তি পূর্বরূপ:\",\"removeAttachment\":\"সংযুক্তি সরান\",\"typeMessage\":\"একটি বার্তা টাইপ করুন...\",\"stopRecording\":\"রেকর্ডিং বন্ধ করুন\",\"startRecording\":\"রেকর্ডিং শুরু করুন\",\"sendPhoto\":\"ছবি পাঠান\",\"send\":\"পাঠান\",\"rooms\":{\"general\":\"সাধারণ আলোচনা\",\"tomato\":\"টমেটো চাষ\",\"pest\":\"কীটপতঙ্গ নিয়ন্ত্রণ\",\"organic\":\"জৈব পদ্ধতি\",\"market\":\"বাজার দর\"},\"users\":{\"ramesh\":\"রমেশ\",\"suresh\":\"সুরেশ\",\"geeta\":\"গীতা\",\"ravi\":\"রবি\",\"priya\":\"প্রিয়া\",\"amit\":\"অমিত\"},\"messages\":{\"general\":{\"0\":\"কেউ কি নতুন জৈব সার চেষ্টা করেছেন? এখানে ভালো ফল দেখা যাচ্ছে।\",\"1\":\"হ্যাঁ, আমি করেছি! আমার টমেটোর ফলন প্রায় 15% বেড়েছে।\",\"2\":\"এটা শুনে খুব ভালো লাগলো! আমি এটা কেনার কথা ভাবছিলাম। এটা কি শাকের জন্য ভালো?\",\"3\":\"অবশ্যই! আমার পালং শাক এর আগে কখনো এত স্বাস্থ্যকর ছিল না।\"},\"tomato\":{\"0\":\"আমার টমেটো গাছে কিছু হলুদ পাতা দেখা যাচ্ছে। কোনো পরামর্শ আছে?\",\"1\":\"নাইট্রোজেনের অভাব হতে পারে। আপনি কি সম্প্রতি আপনার মাটি পরীক্ষা করিয়েছেন?\"},\"pest\":{\"0\":\"আমার তুলো ফসলে সাদা মাছি একটি বড় সমস্যা। তাদের মোকাবেলা করার সেরা উপায় কি?\"},\"organic\":{\"0\":\"আমি ভালো জৈব কম্পোস্টিং কৌশল খুঁজছি। কোনো সম্পদ আছে?\",\"1\":\"ই-লার্নিং হাবে ভার্মিকম্পোস্টিং নিয়ে কিছু দারুণ নিবন্ধ আছে!\"},\"market\":{\"0\":\"পুনেতে পেঁয়াজের দাম কমছে বলে মনে হচ্ছে। আমার কি এখন বিক্রি করা উচিত নাকি অপেক্ষা করা উচিত?\"}}},\"shop\":{\"title\":\"কৃষি দোকান\",\"description\":\"আপনি আপনার কৃষি সরবরাহ কোথা থেকে কিনতে চান তা চয়ন করুন।\",\"govStoreAlt\":\"সরকারি দোকান\",\"govStoreTitle\":\"সরকারি দোকান\",\"govStoreDescription\":\"সরাসরি সরকার-অনুমোদিত আউটলেট থেকে ভর্তুকিযুক্ত বীজ, সার এবং সরঞ্জাম কিনুন। গুণমান এবং ন্যায্য মূল্য নিশ্চিত করে।\",\"govStoreButton\":\"সরকারি পোর্টাল অন্বেষণ করুন\",\"privateMarketplaceAlt\":\"ব্যক্তিগত বাজার\",\"privateMarketplaceTitle\":\"ব্যক্তিগত বাজার\",\"privateMarketplaceDescription\":\"বিভিন্ন বিক্রেতাদের কাছ থেকে বিভিন্ন ধরণের পণ্য ব্রাউজ করুন। প্রতিযোগিতামূলক মূল্য এবং ব্র্যান্ড এবং আইটেমের একটি বৃহত্তর নির্বাচন খুঁজুন।\",\"privateMarketplaceButton\":\"বাজারে যান\",\"government\":{\"title\":\"সরকারি পোর্টাল\",\"showingContentFrom\":\"থেকে বিষয়বস্তু দেখানো হচ্ছে\",\"backToStore\":\"দোকানে ফিরে যান\",\"openInNewTab\":\"নতুন ট্যাবে খুলুন\",\"embedNote\":\"দ্রষ্টব্য: কিছু সরকারি ওয়েবসাইট এমবেড করা হলে সঠিকভাবে কাজ নাও করতে পারে। যদি আপনি সমস্যার সম্মুখীন হন, অনুগ্রহ করে \\\"নতুন ট্যাবে খুলুন\\\" বোতামটি ব্যবহার করুন।\",\"iframeTitle\":\"সরকারি কৃষি সমবায় পোর্টাল\"},\"marketplace\":{\"title\":\"ব্যক্তিগত বাজার\",\"description\":\"বিভিন্ন বিক্রেতাদের কাছ থেকে আপনার সমস্ত কৃষি প্রয়োজনের জন্য মানসম্পন্ন পণ্য।\",\"backToStore\":\"দোকানে ফিরে যান\",\"addToCart\":\"কার্টে যোগ করুন\",\"comingSoonTitle\":\"শীঘ্রই আসছে!\",\"comingSoonMessage\":\"আমরা '{{query}}' এর সাথে মিলে যাওয়া কোনো পণ্য খুঁজে পাইনি। আমরা ক্রমাগত আমাদের ইনভেন্টরি প্রসারিত করছি, তাই অনুগ্রহ করে পরে আবার দেখুন!\",\"irrelevantProductTitle\":\"অপ্রাসঙ্গিক পণ্য অনুসন্ধান\",\"irrelevantProductMessage\":\"আপনি যা খুঁজছেন তা উপলব্ধ নেই। এখানে শুধুমাত্র কৃষি-সম্পর্কিত পণ্য বিক্রি হয়।\",\"products\":{\"organicFertilizer\":\"জৈব সার\",\"pesticideSpray\":\"কীটনাশক স্প্রে\",\"highYieldSeeds\":\"উচ্চ ফলনশীল বীজ\",\"gardeningToolsSet\":\"বাগান করার সরঞ্জাম সেট\",\"dripIrrigationKit\":\"ড্রিপ সেচ কিট\",\"soilTestKit\":\"মাটি পরীক্ষা কিট\",\"protectiveGloves\":\"প্রতিরক্ষামূলক গ্লাভস\",\"powerSprayer\":\"পাওয়ার স্প্রেয়ার\",\"greenhousePolythene\":\"গ্রীনহাউস পলিথিন\",\"waterPump\":\"জল পাম্প (1HP)\",\"cowManure\":\"গোবর (50 কেজি)\",\"neemOil\":\"নিম তেল কীটনাশক\"}}},\"learn\":{\"title\":\"ই-লার্নিং হাব\",\"description\":\"আমাদের কৃষি গাইড এবং টিউটোরিয়াল সংগ্রহের মাধ্যমে আপনার জ্ঞান প্রসারিত করুন।\",\"searchPlaceholder\":\"কৃষি বিষয়গুলিতে নিবন্ধ, ভিডিও বা পণ্য অনুসন্ধান করুন...\",\"stopRecording\":\"রেকর্ডিং বন্ধ করুন\",\"startVoiceSearch\":\"ভয়েস অনুসন্ধান শুরু করুন\",\"closePlayer\":\"প্লেয়ার বন্ধ করুন\",\"watchOnYoutube\":\"YouTube এ দেখুন\",\"tabs\":{\"articles\":\"নিবন্ধ ও গাইড\",\"videos\":\"ভিডিও টিউটোরিয়াল\"},\"webSearchResults\":\"ওয়েব অনুসন্ধান ফলাফল\",\"irrelevantTopic\":\"অপ্রাসঙ্গিক বিষয়\",\"irrelevantTopicMessage\":\"আপনার অনুসন্ধান \\\"{{query}}\\\" কৃষি সম্পর্কিত বলে মনে হচ্ছে না। অনুগ্রহ করে একটি ভিন্ন অনুসন্ধান শব্দ চেষ্টা করুন।\",\"readFullArticle\":\"সম্পূর্ণ নিবন্ধ পড়ুন\",\"ourGuides\":\"আমাদের গাইড\",\"readMore\":\"আরও পড়ুন\",\"watchNow\":\"এখন দেখুন\",\"noVideosFound\":\"কোনো ভিডিও পাওয়া যায়নি\",\"noVideosFoundMessage\":\"আপনার অনুসন্ধান \\\"{{query}}\\\" কোনো ভিডিও ফিরিয়ে দেয়নি। অনুগ্রহ করে একটি ভিন্ন অনুসন্ধান শব্দ চেষ্টা করুন।\",\"noArticlesFound\":\"কোনো মিলে যাওয়া গাইড বা ওয়েব ফলাফল নেই\",\"noArticlesFoundMessage\":\"আপনার অনুসন্ধান \\\"{{query}}\\\" আমাদের কোনো গাইডের সাথে মেলেনি বা ওয়েবে কোনো নিবন্ধ খুঁজে পায়নি। অনুগ্রহ করে একটি ভিন্ন অনুসন্ধান শব্দ চেষ্টা করুন।\",\"searchOnGoogle\":\"Google এ অনুসন্ধান করুন\",\"articles\":{\"dripIrrigation\":{\"title\":\"ড্রিপ সেচ আয়ত্ত করা\",\"description\":\"জল দক্ষতা সর্বাধিক করার এবং ফসলের ফলন বাড়ানোর জন্য ড্রিপ সেচ ব্যবস্থা স্থাপন এবং রক্ষণাবেক্ষণের জন্য একটি ব্যাপক গাইড। উপাদান নির্বাচন, লেআউট পরিকল্পনা এবং সাধারণ সমস্যা সমাধান কভার করে।\"},\"ipm\":{\"title\":\"সমন্বিত কীটপতঙ্গ ব্যবস্থাপনা (IPM)\",\"description\":\"কীটপতঙ্গ পরিচালনা করার জন্য টেকসই, পরিবেশ-বান্ধব কৌশলগুলি অন্বেষণ করুন। এই গাইডটি জৈবিক নিয়ন্ত্রণ, সাংস্কৃতিক অনুশীলন এবং আপনার ফসল এবং পরিবেশ রক্ষা করার জন্য কীটনাশকের লক্ষ্যযুক্ত ব্যবহার কভার করে।\"},\"soilHealth\":{\"title\":\"মাটির স্বাস্থ্য এবং পুষ্টি\",\"description\":\"সমৃদ্ধ, উর্বর মাটির রহস্য উন্মোচন করুন। এই নিবন্ধটি মাটির বিজ্ঞানের মৌলিক বিষয়গুলির মধ্যে delve করে, যার মধ্যে রয়েছে রচনা, pH ভারসাম্য এবং কীভাবে স্বাস্থ্যকর, আরও উত্পাদনশীল উদ্ভিদের জন্য আপনার মাটিকে সমৃদ্ধ করা যায়।\"},\"composting\":{\"title\":\"উন্নত কম্পোস্টিং কৌশল\",\"description\":\"খামারের বর্জ্যকে 'কালো সোনা'তে রূপান্তর করতে শিখুন। এই গাইডটি গরম এবং ঠান্ডা কম্পোস্টিং, ভার্মিকম্পোস্টিং এবং কীভাবে ভারসাম্যপূর্ণ কম্পোস্টের স্তূপ তৈরি করা যায় সহ বিভিন্ন কম্পোস্টিং পদ্ধতির বিবরণ দেয়।\"},\"cropRotation\":{\"title\":\"ফসল ঘূর্ণন বোঝা\",\"description\":\"উন্নত মাটির উর্বরতা, কীটপতঙ্গ এবং রোগ চক্রের ব্যাঘাত এবং বর্ধিত জীববৈচিত্র্য সহ কৌশলগত ফসল ঘূর্ণনের সুবিধাগুলি আবিষ্কার করুন। সাধারণ ফসলের জন্য নমুনা ঘূর্ণন পরিকল্পনা অন্তর্ভুক্ত করে।\"},\"organicFarming\":{\"title\":\"জৈব চাষের মূল বিষয়\",\"description\":\"জৈব কৃষির মূল নীতি এবং অনুশীলনের একটি অপরিহার্য ভূমিকা। সার্টিফিকেশন, প্রাকৃতিক নিষেক, আগাছা নিয়ন্ত্রণ এবং টেকসই চাষের জন্য জৈব পণ্য বিপণন কভার করে।\"}}},\"profile\":{\"title\":\"কৃষক প্রোফাইল\",\"description\":\"আপনার ব্যক্তিগত তথ্য এবং পছন্দগুলি পরিচালনা করুন।\",\"backToDashboard\":\"ড্যাশবোর্ডে ফিরে যান\",\"cardTitle\":\"ব্যক্তিগত তথ্য\",\"cardDescription\":\"ব্যক্তিগতকৃত সুপারিশ পেতে আপনার বিবরণ আপ টু ডেট রাখুন।\",\"uploading\":\"আপলোড করা হচ্ছে...\",\"changePhoto\":\"ছবি পরিবর্তন করুন\",\"fullName\":\"পুরো নাম\",\"email\":\"ইমেল ঠিকানা\",\"location\":\"অবস্থান (জেলা)\",\"selectDistrict\":\"জেলা নির্বাচন করুন...\",\"searchDistrict\":\"জেলা অনুসন্ধান করুন...\",\"noDistrictFound\":\"কোনো জেলা পাওয়া যায়নি।\",\"language\":\"পছন্দের ভাষা\",\"selectLanguage\":\"ভাষা নির্বাচন করুন\",\"myCrops\":\"আমার ফসল\",\"myCropsDescription\":\"প্রাসঙ্গিক সতর্কতা এবং পরামর্শ পেতে আপনি যে ফসল চাষ করেন তা যোগ করুন (কমা দ্বারা পৃথক করা)।\",\"saving\":\"সংরক্ষণ করা হচ্ছে...\",\"saveChanges\":\"পরিবর্তনগুলি সংরক্ষণ করুন\"},\"settings\":{\"title\":\"অ্যাপ্লিকেশন সেটিংস\",\"description\":\"অ্যাপ্লিকেশনের চেহারা এবং অনুভূতি কাস্টমাইজ করুন।\",\"theme\":{\"title\":\"থিম\",\"description\":\"অ্যাপ্লিকেশনের জন্য একটি থিম নির্বাচন করুন।\",\"light\":\"হালকা\",\"dark\":\"অন্ধকার\",\"system\":\"সিস্টেম\"},\"about\":{\"title\":\"কিষাণভাই সম্পর্কে\",\"description\":\"কিষাণভাই হল একটি এআই-চালিত কৃষি সহকারী যা ক্ষুদ্রাকার ভারতীয় কৃষকদের বাস্তব-সময়ের ফসল নির্ণয়, মান্ডি মূল্য, সরকারি প্রকল্প এবং স্থানীয় ভাষায় ব্যক্তিগতকৃত কৃষি পরামর্শ দিয়ে সহায়তা করার জন্য ডিজাইন করা হয়েছে।\"},\"version\":{\"title\":\"অ্যাপ সংস্করণ\"},\"poweredBy\":{\"title\":\"দ্বারা চালিত\",\"tech1\":\"গুগল ক্লাউড ভার্টেক্স এআই\",\"tech2\":\"ফায়ারবেস\",\"tech3\":\"জেমিনি মাল্টিমোডাল মডেল\"},\"developedBy\":{\"title\":\"দ্বারা উন্নত\",\"teamName\":\"টিম কোডোগ্রাম\"},\"contact\":{\"title\":\"যোগাযোগ করুন\",\"emailLabel\":\"ইমেল\",\"whatsappLabel\":\"হোয়াটসঅ্যাপ\"},\"legal\":{\"privacy\":\"গোপনীয়তা নীতি\",\"terms\":\"ব্যবহারের শর্তাবলী\"}},\"privacy\":{\"description\":\"আপনার গোপনীয়তার প্রতি আমাদের প্রতিশ্রুতি।\",\"backToSettings\":\"সেটিংসে ফিরে যান\",\"lastUpdated\":{\"title\":\"সর্বশেষ আপডেট করা হয়েছে\",\"date\":\"জুলাই 26, 2024\"},\"introduction\":{\"title\":\"ভূমিকা\",\"content\":\"কিষাণভাই-তে স্বাগতম। আমরা আপনার গোপনীয়তা রক্ষা করতে এবং আপনার ডেটা একটি উন্মুক্ত এবং স্বচ্ছ উপায়ে পরিচালনা করতে প্রতিশ্রুতিবদ্ধ। এই গোপনীয়তা নীতিটি আমরা কীভাবে আপনার তথ্য সংগ্রহ, ব্যবহার এবং রক্ষা করি তা নির্ধারণ করে।\"},\"information\":{\"title\":\"আমরা যে তথ্য সংগ্রহ করি\",\"personal\":{\"title\":\"ব্যক্তিগত তথ্য\",\"content\":\"আপনি যখন নিবন্ধন করেন, আমরা আপনার অ্যাকাউন্ট তৈরি এবং পরিচালনা করতে আপনার নাম, ইমেল এবং অবস্থান সংগ্রহ করি।\"},\"usage\":{\"title\":\"ব্যবহারের ডেটা\",\"content\":\"ব্যবহৃত বৈশিষ্ট্য এবং অ্যাক্সেসের ফ্রিকোয়েন্সির মতো আমাদের পরিষেবাগুলির সাথে আপনি কীভাবে যোগাযোগ করেন সে সম্পর্কে আমরা তথ্য সংগ্রহ করি।\"},\"image\":{\"title\":\"চিত্র ডেটা\",\"content\":\"আমাদের ফসল ডাক্তার বৈশিষ্ট্যের জন্য, আমরা আপনার আপলোড করা ছবি সংগ্রহ করি। এগুলি শুধুমাত্র নির্ণয়ের জন্য ব্যবহৃত হয় এবং তৃতীয় পক্ষের সাথে ভাগ করা হয় না।\"}},\"useOfInfo\":{\"title\":\"আমরা কীভাবে আপনার তথ্য ব্যবহার করি\",\"content\":\"আমরা আমাদের পরিষেবাগুলি সরবরাহ এবং উন্নত করতে, আপনার অভিজ্ঞতা ব্যক্তিগতকৃত করতে এবং আপনার সাথে যোগাযোগ করতে আপনার তথ্য ব্যবহার করি।\"},\"dataSharing\":{\"title\":\"ডেটা ভাগ করা\",\"content\":\"আমরা আপনার ব্যক্তিগত ডেটা বিক্রি করি না। আমরা গবেষণার উদ্দেশ্যে অংশীদারদের সাথে বেনামী ডেটা ভাগ করতে পারি, তবে আপনার সম্মতি ছাড়া আপনার ব্যক্তিগতভাবে শনাক্তযোগ্য তথ্য কখনই নয়।\"},\"dataSecurity\":{\"title\":\"ডেটা নিরাপত্তা\",\"content\":\"আপনার ব্যক্তিগত তথ্যের নিরাপত্তা বজায় রাখতে আমরা বিভিন্ন নিরাপত্তা ব্যবস্থা বাস্তবায়ন করি।\"},\"yourRights\":{\"title\":\"আপনার অধিকার\",\"content\":\"আপনার প্রোফাইল সেটিংসের মাধ্যমে বা আমাদের সাথে যোগাযোগ করে যেকোনো সময় আপনার ব্যক্তিগত ডেটা অ্যাক্সেস, সংশোধন বা মুছে ফেলার অধিকার আপনার আছে।\"},\"changes\":{\"title\":\"এই নীতিতে পরিবর্তন\",\"content\":\"আমরা সময়ে সময়ে এই গোপনীয়তা নীতি আপডেট করতে পারি। আমরা এই পৃষ্ঠায় নতুন নীতি পোস্ট করে কোনো পরিবর্তনের বিষয়ে আপনাকে অবহিত করব।\"},\"contact\":{\"title\":\"যোগাযোগ করুন\",\"content\":\"এই গোপনীয়তা নীতি সম্পর্কে আপনার কোনো প্রশ্ন থাকলে, অনুগ্রহ করে support@krishimitra.in এ আমাদের সাথে যোগাযোগ করুন।\"}},\"terms\":{\"description\":\"আমাদের পরিষেবা ব্যবহারের নিয়ম।\",\"backToSettings\":\"সেটিংসে ফিরে যান\",\"lastUpdated\":{\"title\":\"সর্বশেষ আপডেট করা হয়েছে\",\"date\":\"জুলাই 26, 2024\"},\"acceptance\":{\"title\":\"শর্তাবলীর স্বীকৃতি\",\"content\":\"কিষাণভাই অ্যাক্সেস এবং ব্যবহার করে, আপনি এই চুক্তির শর্তাবলী এবং বিধান দ্বারা আবদ্ধ হতে স্বীকার করেন এবং সম্মত হন।\"},\"useOfService\":{\"title\":\"পরিষেবার ব্যবহার\",\"content\":\"আপনি আমাদের পরিষেবাগুলি শুধুমাত্র আইনসম্মত উদ্দেশ্যে এবং এমনভাবে ব্যবহার করতে সম্মত হন যা অন্য কারো ব্যবহার এবং পরিষেবার আনন্দকে লঙ্ঘন, সীমাবদ্ধ বা বাধা দেয় না।\",\"item1\":\"আপনার অ্যাকাউন্ট এবং পাসওয়ার্ডের গোপনীয়তা বজায় রাখার জন্য আপনি দায়ী।\",\"item2\":\"AI দ্বারা প্রদত্ত পরামর্শ শুধুমাত্র তথ্যগত উদ্দেশ্যে এবং পেশাদার কৃষি পরামর্শের বিকল্প হিসাবে বিবেচনা করা উচিত নয়।\",\"item3\":\"জেনে-শুনে ভাইরাস বা দূষিত বা প্রযুক্তিগতভাবে ক্ষতিকারক অন্যান্য উপাদান প্রবেশ করিয়ে আপনি আমাদের পরিষেবাগুলির অপব্যবহার করবেন না।\"},\"disclaimer\":{\"title\":\"ওয়ারেন্টিগুলির অস্বীকৃতি\",\"content\":\"পরিষেবাটি 'যেমন আছে' এবং 'যেমন উপলব্ধ' ভিত্তিতে কোনো ধরনের ওয়ারেন্টি ছাড়াই প্রদান করা হয়, তা প্রকাশ্য বা উহ্য যাই হোক না কেন।\"},\"limitation\":{\"title\":\"দায়বদ্ধতার সীমাবদ্ধতা\",\"content\":\"কোনো অবস্থাতেই কিষাণভাই বা এর ডেভেলপাররা কোনো পরোক্ষ, আনুষঙ্গিক, বিশেষ, ফলস্বরূপ বা শাস্তিমূলক ক্ষতির জন্য দায়ী থাকবে না, যার মধ্যে সীমাবদ্ধতা ছাড়াই, লাভ, ডেটা, ব্যবহার, সদিচ্ছা বা অন্যান্য অস্পষ্ট ক্ষতি অন্তর্ভুক্ত রয়েছে।\"},\"termination\":{\"title\":\"সমাপ্তি\",\"content\":\"আপনি শর্তাবলী লঙ্ঘন করলে, কোনো কারণ ছাড়াই, কোনো পূর্ব বিজ্ঞপ্তি বা দায়বদ্ধতা ছাড়াই আমরা আপনার অ্যাকাউন্টটি অবিলম্বে বন্ধ বা স্থগিত করতে পারি।\"},\"governingLaw\":{\"title\":\"সরকারি আইন\",\"content\":\"এই শর্তাবলী ভারতের আইন অনুসারে নিয়ন্ত্রিত এবং ব্যাখ্যা করা হবে, এর আইনের বিধানগুলির দ্বন্দ্ব বিবেচনা না করে।\"},\"changes\":{\"title\":\"পরিবর্তন\",\"content\":\"আমরা আমাদের নিজস্ব বিবেচনার ভিত্তিতে, যেকোনো সময় এই শর্তাবলী পরিবর্তন বা প্রতিস্থাপন করার অধিকার সংরক্ষণ করি।\"}},\"toast\":{\"browserNotSupported\":\"ব্রাউজার সমর্থিত নয়\",\"noVoiceSupport\":\"আপনার ব্রাউজার ভয়েস স্বীকৃতি সমর্থন করে না।\",\"noSpeechDetected\":\"কোনো বক্তৃতা সনাক্ত করা হয়নি\",\"tryAgain\":\"অনুগ্রহ করে আবার চেষ্টা করুন এবং মাইক্রোফোনে স্পষ্টভাবে কথা বলুন।\",\"voiceError\":\"ভয়েস স্বীকৃতি ত্রুটি\",\"unsupportedFileType\":\"অসমর্থিত ফাইলের ধরন\",\"selectAnImage\":\"অনুগ্রহ করে একটি ছবি ফাইল নির্বাচন করুন।\",\"speechGenerationFailed\":\"বক্তৃতা তৈরি ব্যর্থ হয়েছে\",\"couldNotGenerateAudio\":\"নির্ণয়ের জন্য অডিও তৈরি করা যায়নি।\",\"couldNotGenerateAudioAnalysis\":\"বিশ্লেষণের জন্য অডিও তৈরি করা যায়নি।\",\"noImageSelected\":\"কোনো ছবি নির্বাচন করা হয়নি\",\"selectImageToDiagnose\":\"নির্ণয় করার জন্য অনুগ্রহ করে আপনার ফসলের একটি ছবি নির্বাচন করুন।\",\"diagnosisFailed\":\"নির্ণয় ব্যর্থ হয়েছে\",\"errorAnalyzingImage\":\"ছবি বিশ্লেষণ করার সময় একটি ত্রুটি ঘটেছে। অনুগ্রহ করে আবার চেষ্টা করুন।\",\"emptyQuery\":\"খালি প্রশ্ন\",\"enterMarketQuestion\":\"অনুগ্রহ করে বাজার দর সম্পর্কে আপনার প্রশ্ন লিখুন।\",\"analysisFailed\":\"বিশ্লেষণ ব্যর্থ হয়েছে\",\"errorAnalyzingMarket\":\"বাজার ডেটা বিশ্লেষণ করার সময় একটি ত্রুটি ঘটেছে। অনুগ্রহ করে আবার চেষ্টা করুন।\",\"enterSchemeQuestion\":\"অনুগ্রহ করে একটি সরকারি প্রকল্প সম্পর্কে আপনার প্রশ্ন লিখুন।\",\"searchFailed\":\"অনুসন্ধান ব্যর্থ হয়েছে\",\"errorFetchingScheme\":\"প্রকল্পের বিবরণ আনার সময় একটি ত্রুটি ঘটেছে। অনুগ্রহ করে আবার চেষ্টা করুন।\",\"errorFetchingWeather\":\"আবহাওয়া আনতে ত্রুটি\",\"couldNotRetrieveWeather\":\"নির্দিষ্ট অবস্থানের জন্য আবহাওয়ার ডেটা পুনরুদ্ধার করা যায়নি।\",\"videoSearchFailed\":\"ভিডিও অনুসন্ধান ব্যর্থ হয়েছে\",\"couldNotRetrieveVideos\":\"ভিডিও টিউটোরিয়াল পুনরুদ্ধার করা যায়নি।\",\"summarizationFailed\":\"সারাংশ ব্যর্থ হয়েছে\",\"couldNotSummarize\":\"ওয়েব থেকে একটি নিবন্ধের সারাংশ দেওয়া যায়নি।\",\"signUpSuccess\":\"সাইন আপ সফল\",\"signUpSuccessDesc\":\"স্বাগতম! চালিয়ে যেতে অনুগ্রহ করে লগ ইন করুন।\",\"unexpectedError\":\"একটি অপ্রত্যাশিত ত্রুটি ঘটেছে।\",\"invalidCredentials\":\"অবৈধ ইমেল বা পাসওয়ার্ড। অনুগ্রহ করে আবার চেষ্টা করুন।\",\"emailInUse\":\"এই ইমেল সহ একটি অ্যাকাউন্ট ইতিমধ্যেই বিদ্যমান।\",\"signUpFailed\":\"সাইন আপ ব্যর্থ হয়েছে\",\"signInFailed\":\"সাইন ইন ব্যর্থ হয়েছে\",\"profileUpdated\":\"প্রোফাইল আপডেট করা হয়েছে\",\"profileUpdatedDesc\":\"আপনার তথ্য সফলভাবে সংরক্ষিত হয়েছে।\",\"updateFailed\":\"আপডেট ব্যর্থ হয়েছে\",\"updateFailedDesc\":\"আপনার পরিবর্তনগুলি সংরক্ষণ করা যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।\",\"photoUpdated\":\"ছবি আপডেট করা হয়েছে\",\"photoUpdatedDesc\":\"আপনার প্রোফাইল ছবি পরিবর্তন করা হয়েছে।\",\"uploadFailed\":\"আপলোড ব্যর্থ হয়েছে\",\"uploadFailedDesc\":\"আপনার প্রোফাইল ছবি পরিবর্তন করা যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।\",\"recommendationFailed\":\"সুপারিশ ব্যর্থ হয়েছে\",\"errorGeneratingRecommendation\":\"ফসলের সুপারিশ তৈরি করা যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।\",\"noInput\":\"কোনো ইনপুট দেওয়া হয়নি\",\"provideImageOrDescription\":\"অনুগ্রহ করে একটি ছবি আপলোড করুন বা সমস্যার একটি বিবরণ দিন।\"},\"tracker\":{\"title\":\"খরচ ও লাভ ট্র্যাকার\",\"description\":\"ফসলের লাভজনকতা ট্র্যাক করতে আপনার আয় এবং ব্যয় লগ করুন।\",\"addTransaction\":\"লেনদেন যোগ করুন\",\"editTransaction\":\"লেনদেন সম্পাদনা করুন\",\"transactionDetails\":\"আপনার আয় বা ব্যয়ের জন্য বিবরণ লিখুন।\",\"totalIncome\":\"মোট আয়\",\"totalExpense\":\"মোট ব্যয়\",\"netProfitLoss\":\"নিট লাভ / ক্ষতি\",\"recentTransactions\":\"সাম্প্রতিক লেনদেন\",\"recentTransactionsDesc\":\"আপনার সবচেয়ে সাম্প্রতিক আয় এবং ব্যয়ের একটি লগ।\",\"noTransactions\":\"এখনও কোনো লেনদেন নেই। শুরু করতে 'লেনদেন যোগ করুন' ক্লিক করুন।\",\"summaryChart\":\"আয় বনাম ব্যয়\",\"summaryChartDesc\":\"আপনার ಹಣಕಾಸಿನ ಒಂದು ದೃಶ್ಯ ಸಾರಾಂಶ.\",\"chart\":{\"income\":\"আয়\",\"expense\":\"ব্যয়\"},\"form\":{\"description\":\"বিবরণ\",\"amount\":\"পরিমাণ (₹)\",\"type\":\"প্রকার\",\"selectType\":\"একটি প্রকার নির্বাচন করুন\",\"income\":\"আয়\",\"expense\":\"ব্যয়\",\"category\":\"বিভাগ\",\"selectCategory\":\"একটি বিভাগ নির্বাচন করুন\",\"date\":\"তারিখ\",\"pickDate\":\"একটি তারিখ বাছুন\",\"cancel\":\"বাতিল করুন\",\"save\":\"লেনদেন সংরক্ষণ করুন\"},\"categories\":{\"seeds\":\"বীজ\",\"fertilizers\":\"সার\",\"pesticides\":\"কীটনাশক\",\"labor\":\"শ্রম\",\"equipment\":\"সরঞ্জাম\",\"fuel\":\"জ্বালানি\",\"rent\":\"জমি ভাড়া\",\"other\":\"অন্যান্য\",\"cropSale\":\"ফসল বিক্রয়\",\"subsidy\":\"ভর্তুকি\"},\"actions\":{\"edit\":\"সম্পাদনা করুন\",\"delete\":\"মুছে ফেলুন\"}},\"cropRecommender\":{\"title\":\"এআই ফসল সুপারিশকারী\",\"description\":\"আপনার অবস্থান, খামারের ধরন এবং বাজারের প্রবণতার উপর ভিত্তি করে বুদ্ধিমান ফসলের পরামর্শ পান।\",\"client\":{\"formTitle\":\"খামারের বিবরণ\",\"formDescription\":\"সেরা সুপারিশ পেতে আপনার খামার সম্পর্কে বিস্তারিত দিন।\",\"farmType\":\"খামারের ধরন\",\"irrigated\":\"সেচযুক্ত\",\"rainfed\":\"বৃষ্টি-নির্ভর / শুকনো\",\"landSize\":\"জমির আকার (যেমন, 2 একর)\",\"cropPreference\":\"ফসলের পছন্দ (ঐচ্ছিক)\",\"cropPreferencePlaceholder\":\"যেমন, সবজি, বাজরা\",\"getRecommendations\":\"সুপারিশ পান\",\"gettingRecommendations\":\"সুপারিশ পাওয়া যাচ্ছে...\",\"resultsTitle\":\"এআই-চালিত সুপারিশ\",\"resultsPlaceholder\":\"আপনার ব্যক্তিগতকৃত ফসলের সুপারিশ এখানে প্রদর্শিত হবে।\",\"topPicks\":\"আপনার জন্য আমাদের শীর্ষ বাছাই\",\"topPicksDescription\":\"আপনার ইনপুটগুলির উপর ভিত্তি করে, আসন্ন মরসুমের জন্য সবচেয়ে উপযুক্ত ফসলগুলি এখানে দেওয়া হল।\",\"learnMore\":\"আরও জানুন\",\"soilType\":\"মাটির ধরন (ঐচ্ছিক)\",\"selectSoilType\":\"মাটির ধরন নির্বাচন করুন\",\"soilTypes\":{\"black\":\"কালো\",\"red\":\"লাল\",\"loamy\":\"দোআঁশ\",\"sandy\":\"বেলে\",\"clay\":\"কাঁকর\"},\"waterSource\":\"জলের উৎস (ঐচ্ছিক)\",\"selectWaterSource\":\"জলের উৎস নির্বাচন করুন\",\"waterSources\":{\"borewell\":\"বোরওয়েল\",\"canal\":\"খাল\",\"rain-only\":\"শুধুমাত্র বৃষ্টি\",\"tank\":\"ট্যাঙ্ক\",\"river\":\"নদী\"},\"currentSeason\":\"বর্তমান ঋতু\",\"seasons\":{\"kharif\":\"খরিফ\",\"rabi\":\"রবি\",\"zaid\":\"জাইদ\"},\"previousCrop\":\"পূর্ববর্তী ফসল (ঐচ্ছিক)\",\"budget\":\"বাজেট (ঐচ্ছিক)\",\"keyBenefits\":\"মূল সুবিধা\"}},\"chatbot\":{\"title\":\"অন্নপূর্ণা সহকারী\",\"description\":\"আপনার ব্যক্তিগত কৃষি সহকারী। আমাকে কিছু জিজ্ঞাসা করুন!\",\"open\":\"চ্যাটবট খুলুন\",\"placeholder\":\"অন্নপূর্ণাকে একটি প্রশ্ন জিজ্ঞাসা করুন...\",\"welcomeMessage\":\"নমস্কার {{name}}! আমি অন্নপূর্ণা। আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি? আপনি আমাকে বাজার দর দেখাতে, ফসল নির্ণয় করতে বা সরকারি প্রকল্প খুঁজে পেতে বলতে পারেন।\",\"errorMessage\":\"আমি দুঃখিত, আমি এই মুহূর্তে সংযোগ করতে সমস্যায় পড়ছি। অনুগ্রহ করে এক মুহূর্ত পরে আবার চেষ্টা করুন।\",\"yes\":\"হ্যাঁ\",\"no\":\"না\"}}"));}}),
"[project]/src/locales/bho.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"common\":{\"loading\":\"लोड हो रहल बा\",\"initializing\":\"राउर डैशबोर्ड शुरू हो रहल बा...\"},\"nav\":{\"dashboard\":\"डैशबोर्ड\",\"cropDoctor\":\"फसल डॉक्टर\",\"marketAnalyst\":\"बाजार विश्लेषक\",\"govtSchemes\":\"सरकारी योजना\",\"weather\":\"मौसम\",\"community\":\"समुदाय\",\"shop\":\"दोकान\",\"eLearning\":\"ई-लर्निंग\",\"tracker\":\"ट्रैकर\",\"cropRecommender\":\"फसल सिफारिश\",\"profile\":\"प्रोफाइल\",\"settings\":\"सेटिंग्स\"},\"userNav\":{\"profile\":\"प्रोफाइल\",\"settings\":\"सेटिंग्स\",\"logout\":\"लॉग आउट करीं\"},\"dashboardLayout\":{\"toggleMenu\":\"मेनू टॉगल करीं\",\"menuTitle\":\"नेविगेशन मेनू\",\"menuDescription\":\"आवेदन खातिर मुख्य नेविगेशन लिंक।\"},\"login\":{\"imageAlt\":\"एक हरियर खेत के छवि\",\"tagline\":\"प्रौद्योगिकी के माध्यम से कृषि के सशक्त बनावल\",\"subTagline\":\"बेहतर पैदावार अउरी टिकाऊ प्रथा खातिर AI के लाभ उठावे वाला आधुनिक किसान के समुदाय में शामिल होईं।\",\"createAccountPrompt\":\"शुरू करे खातिर आपन खाता बनाईं।\",\"signInPrompt\":\"वापसी पर स्वागत बा! आपन डैशबोर्ड में साइन इन करीं।\",\"emailLabel\":\"ईमेल\",\"passwordLabel\":\"पासवर्ड\",\"processing\":\"प्रोसेस हो रहल बा...\",\"createAccountButton\":\"खाता बनाईं\",\"signInButton\":\"साइन इन करीं\",\"alreadyHaveAccount\":\"पहिले से खाता बा?\",\"dontHaveAccount\":\"खाता नइखे?\",\"signInLink\":\"साइन इन करीं\",\"signUpLink\":\"साइन अप करीं\"},\"dashboard\":{\"welcome\":\"वापसी पर स्वागत बा, {{name}}!\",\"description\":\"इहाँ राउर खेत अउरी बाजार के एगो त्वरित अवलोकन बा।\",\"farmer\":\"किसान\",\"quickLinks\":{\"cropDoctor\":\"फसल के बेमारी के तुरंत निदान करीं।\",\"cropRecommender\":\"AI-संचालित फसल सुझाव पाईं।\",\"marketAnalyst\":\"वास्तविक समय के मूल्य विश्लेषण पाईं।\",\"govtSchemes\":\"अपना खातिर सरकारी योजना खोजीं।\",\"tracker\":\"आपन खेत के खर्चा अउरी मुनाफा के ट्रैक करीं।\",\"eLearning\":\"गाइड अउरी ट्यूटोरियल ब्राउज़ करीं।\"},\"currentWeather\":\"वर्तमान मौसम\",\"weatherUnavailable\":\"मौसम डेटा उपलब्ध नइखे।\",\"recommendations\":{\"title\":\"मौसमी फसल सिफारिश\",\"description\":\"राउर स्थान अउरी मौसम के आधार पर वर्तमान मौसम खातिर सुझावल फसल।\",\"unavailable\":\"एह समय सिफारिश लोड ना कइल जा सकल।\"}},\"cropDoctor\":{\"title\":\"AI फसल डॉक्टर\",\"description\":\"तुरंत निदान अउरी सुझावल समाधान पावे खातिर प्रभावित फसल के पत्ता के एगो साफ छवि अपलोड करीं।\",\"client\":{\"uploadTitle\":\"आपन फसल के निदान करीं\",\"uploadDescription\":\"सबसे सटीक निदान खातिर एगो छवि अपलोड करीं, समस्या के वर्णन करीं, चाहे दूनों करीं।\",\"imageLabel\":\"छवि अपलोड करीं\",\"changeFile\":\"फाइल बदलीं\",\"chooseFile\":\"फाइल चुनीं\",\"cropPreview\":\"फसल पूर्वावलोकन\",\"descriptionLabel\":\"समस्या के वर्णन करीं\",\"descriptionPlaceholder\":\"उदा., 'हमरा टमाटर के पत्ता पर भूरा केंद्र के साथ पीयर धब्बा बा।' चाहे बोले खातिर माइक पर क्लिक करीं।\",\"diagnosing\":\"निदान हो रहल बा...\",\"diagnoseButton\":\"रोग के निदान करीं\",\"resultTitle\":\"निदान के परिणाम\",\"diagnosis\":\"निदान\",\"solutions\":\"सुझावल समाधान\",\"readDocs\":\"दस्तावेज पढ़ीं\",\"watchVideo\":\"वीडियो देखीं\",\"resultPlaceholder\":\"राउर निदान के परिणाम इहाँ लउकी।\"}},\"marketAnalyst\":{\"title\":\"बाजार विश्लेषक\",\"description\":\"वास्तविक समय के बाजार मूल्य विश्लेषण अउरी सिफारिश पाईं। \\\"पुणे मंडी में पियाज के दाम का बा?\\\" जइसन सवाल पूछीं।\",\"faqTitle\":\"अक्सर पूछल जाए वाला सवाल\",\"faqs\":{\"q1\":\"हम कइसन सवाल पूछ सकत बानी?\",\"a1\":\"रउआ खास जगह पर वर्तमान फसल के दाम, दाम के रुझान के बारे में पूछ सकत बानी, अउरी आपन उपज बेचे भा रखे के सिफारिश पा सकत बानी। उदाहरण खातिर: 'पुणे में टमाटर के दाम का बा?' चाहे 'का हमरा अब आपन गोहूँ के स्टॉक बेच देवे के चाहीं?'\",\"q2\":\"दाम के जानकारी केतना सटीक बा?\",\"a2\":\"दाम के जानकारी विभिन्न कृषि बाजार (मंडी) से वास्तविक समय के डेटा पर आधारित बा। हमनी के सटीकता खातिर प्रयास करत बानी, लेकिन दाम तेजी से बदल सकत बा। आपन फैसला खातिर जानकारी के एगो गाइड के रूप में इस्तेमाल करीं।\",\"q3\":\"का हम भविष्य के दाम के भविष्यवाणी के बारे में पूछ सकत बानी?\",\"a3\":\"हाँ, रउआ दाम के प्रवृत्ति विश्लेषण अउरी भविष्यवाणी खातिर पूछ सकत बानी। AI ऐतिहासिक डेटा अउरी वर्तमान बाजार के स्थिति के आधार पर अंतर्दृष्टि प्रदान करी, लेकिन कृपया ध्यान दीं कि ई पूर्वानुमान हवें अउरी गारंटी ना हवें।\",\"q4\":\"कवन जगह अउरी फसल समर्थित बा?\",\"a4\":\"सहायक भारत भर के प्रमुख फसल अउरी बाजार के एगो विस्तृत श्रृंखला के कवर करेला। रउआ विभिन्न शहर अउरी ओकरा मुख्य कृषि बाजार में सब्जी, अनाज, फल, अउरी बहुत कुछ के बारे में पूछ सकत बानी।\"},\"client\":{\"askTitle\":\"आपन बाजार के सवाल पूछीं\",\"placeholder\":\"उदा., अगला हफ्ता बंगलौर में टमाटर के दाम बढ़े के का संभावना बा? चाहे बोले खातिर माइक पर क्लिक करीं।\",\"analyzing\":\"विश्लेषण हो रहल बा...\",\"getAnalysis\":\"विश्लेषण पाईं\",\"stopRecording\":\"रिकॉर्डिंग बंद करीं\",\"useVoice\":\"आवाज के इस्तेमाल करीं\",\"resultTitle\":\"विश्लेषण परिणाम\",\"recommendation\":\"सिफारिश\",\"marketAnalysis\":\"बाजार विश्लेषण\",\"resultPlaceholder\":\"राउर बाजार विश्लेषण इहाँ लउकी।\"}},\"schemes\":{\"title\":\"योजना अउरी सूचना हब\",\"description\":\"प्रमुख सरकारी योजना के खोज करीं, नवीनतम समाचार से अपडेट रहीं, अउरी अपना खातिर बनावल जानकारी खोजीं।\",\"keySchemesTitle\":\"प्रमुख सरकारी योजना\",\"latestNewsTitle\":\"नवीनतम समाचार अउरी अपडेट\",\"visitSite\":\"साइट पर जाईं\",\"readMore\":\"अउरी पढ़ीं\",\"keySchemes\":{\"pmkisan\":{\"title\":\"पीएम-किसान योजना\",\"description\":\"छोट अउरी सीमांत किसान परिवार खातिर हर साल ₹6,000 के वित्तीय सहायता।\"},\"pmfby\":{\"title\":\"प्रधानमंत्री फसल बीमा योजना\",\"description\":\"प्राकृतिक आपदा, कीट चाहे बेमारी के कारण फसल के विफलता के खिलाफ बीमा कवरेज।\"},\"kcc\":{\"title\":\"किसान क्रेडिट कार्ड (केसीसी)\",\"description\":\"किसान के ओकरा खेती अउरी अन्य जरूरत खातिर समय पर ऋण तक पहुँच प्रदान करेला।\"}},\"latestNews\":{\"kharifMsp\":{\"title\":\"सरकार खरीफ फसल खातिर एमएसपी बढ़वलस\",\"description\":\"मंत्रिमंडल आवे वाला विपणन सीजन खातिर सब अनिवार्य खरीफ फसल खातिर न्यूनतम समर्थन मूल्य में एगो महत्वपूर्ण बढ़ोतरी के मंजूरी देले बा।\"},\"subsidyPortal\":{\"title\":\"खेत सब्सिडी वितरण खातिर नया पोर्टल लॉन्च भइल\",\"description\":\"विभिन्न कृषि उपकरण खातिर सब्सिडी आवेदन अउरी वितरण के प्रक्रिया के सुव्यवस्थित करे खातिर एगो नया एकीकृत पोर्टल लॉन्च कइल गइल बा।\"},\"horticultureMission\":{\"title\":\"राष्ट्रीय बागवानी मिशन खातिर दिशानिर्देश जारी भइल\",\"description\":\"कृषि विभाग बागवानी क्षेत्र के बढ़ावा देवे खातिर एनएचएम खातिर अपडेटेड दिशानिर्देश जारी कइले बा, जवना में फसल के बाद के प्रबंधन पर ध्यान दिहल गइल बा।\"},\"enamMilestone\":{\"title\":\"ई-नाम 1,000 मंडी के एकीकृत क के नया मील के पत्थर हासिल कइलस\",\"description\":\"इलेक्ट्रॉनिक राष्ट्रीय कृषि बाजार (ई-नाम) प्लेटफॉर्म अब देश भर में 1,000 से अधिक कृषि उपज बाजार के जोड़ले बा।\"},\"solarPump\":{\"title\":\"सौर पंप योजना एगो अउरी साल खातिर बढ़ा दिहल गइल\",\"description\":\"पीएम-कुसुम योजना, जवना के उद्देश्य किसान के सौर ऊर्जा से चले वाला सिंचाई पंप प्रदान कइल बा, के मार्च 2025 तक बढ़ा दिहल गइल बा।\"}},\"client\":{\"title\":\"एगो खास योजना खोजीं\",\"description\":\"कवनो भी सरकारी योजना पर विवरण पावे खातिर हमार AI सहायक के इस्तेमाल करीं।\",\"placeholder\":\"उदा., हमरा के पीएम-किसान योजना के बारे में बताईं\",\"searching\":\"खोज रहल बा...\",\"findScheme\":\"योजना खोजीं\",\"stopRecording\":\"रिकॉर्डिंग बंद करीं\",\"useVoice\":\"आवाज के इस्तेमाल करीं\",\"eligibility\":\"पात्रता\",\"applyNow\":\"अब आवेदन करीं\",\"resultPlaceholder\":\"योजना के विवरण देखे खातिर एगो सवाल पूछीं।\"}},\"weather\":{\"title\":\"लाइव मौसम पूर्वानुमान\",\"description\":\"आपन खेती के गतिविधि के ओकरा अनुसार योजना बनाईं।\",\"enterCity\":\"शहर के नाम डालीं...\",\"currentWeather\":\"वर्तमान मौसम\",\"rightNowIn\":\"अबहीं {{city}} में\",\"wind\":\"हवा\",\"humidity\":\"नमी\",\"weeklyForecast\":\"साप्ताहिक पूर्वानुमान\",\"noData\":\"कवनो मौसम डेटा उपलब्ध नइखे। कृपया कवनो दूसरा जगह के प्रयास करीं।\",\"conditions\":{\"sunny\":\"धूप\",\"partlyCloudy\":\"आंशिक रूप से बादल छा गइल\",\"cloudy\":\"बादल छा गइल\",\"showers\":\"फुहार\",\"rainy\":\"बरसात\",\"humidAndCloudy\":\"नम अउरी बादल छा गइल\",\"thunderstorms\":\"गरज के साथ बौछार\"},\"days\":{\"today\":\"आज\",\"monday\":\"सोमार\",\"tuesday\":\"मंगर\",\"wednesday\":\"बुध\",\"thursday\":\"बिफे\",\"friday\":\"सुकर\",\"saturday\":\"सनिचर\",\"sunday\":\"एतवार\"}},\"community\":{\"title\":\"सामुदायिक मंच\",\"description\":\"दूसर किसान से जुड़ीं, ज्ञान साझा करीं, अउरी एक साथ बढ़ीं।\",\"chatRooms\":\"चैट रूम\",\"you\":\"रउआ\",\"attachmentPreview\":\"अटैचमेंट पूर्वावलोकन:\",\"removeAttachment\":\"अटैचमेंट हटाईं\",\"typeMessage\":\"एगो संदेश टाइप करीं...\",\"stopRecording\":\"रिकॉर्डिंग बंद करीं\",\"startRecording\":\"रिकॉर्डिंग शुरू करीं\",\"sendPhoto\":\"फोटो भेजीं\",\"send\":\"भेजीं\",\"rooms\":{\"general\":\"सामान्य चर्चा\",\"tomato\":\"टमाटर के खेती\",\"pest\":\"कीट नियंत्रण\",\"organic\":\"जैविक तरीका\",\"market\":\"बाजार के दाम\"},\"users\":{\"ramesh\":\"रमेश\",\"suresh\":\"सुरेश\",\"geeta\":\"गीता\",\"ravi\":\"रवि\",\"priya\":\"प्रिया\",\"amit\":\"अमित\"},\"messages\":{\"general\":{\"0\":\"का केहू नया जैविक खाद के प्रयोग कइले बा? इहाँ बढ़िया परिणाम देखात बा।\",\"1\":\"हाँ, हम कइले बानी! हमरा टमाटर के उपज लगभग 15% बढ़ गइल बा।\",\"2\":\"ई सुन के बहुत अच्छा लागल! हम ओकरा के खरीदे के सोचत रहनी। का ई पत्तादार साग खातिर बढ़िया बा?\",\"3\":\"बिल्कुल! हमार पालक कहियो एतना स्वस्थ ना रहे।\"},\"tomato\":{\"0\":\"हमरा टमाटर के पौधा में कुछ पीयर पत्ता लउकत बा। कवनो सलाह बा?\",\"1\":\"नाइट्रोजन के कमी हो सकत बा। का रउआ हाल ही में आपन माटी के जांच करवले बानी?\"},\"pest\":{\"0\":\"हमरा कपास के फसल में सफेद मक्खी एगो बड़हन समस्या बा। ओकरा से निपटे के सबसे बढ़िया तरीका का बा?\"},\"organic\":{\"0\":\"हम बढ़िया जैविक खाद बनावे के तकनीक खोजत बानी। कवनो संसाधन बा?\",\"1\":\"ई-लर्निंग हब में वर्मीकम्पोस्टिंग पर कुछ बढ़िया लेख बा!\"},\"market\":{\"0\":\"पुणे में पियाज के दाम गिरत लउकत बा। का हमरा अबहीं बेचे के चाहीं कि इंतजार करे के चाहीं?\"}}},\"shop\":{\"title\":\"कृषि स्टोर\",\"description\":\"चुनीं कि रउआ आपन खेती के सामान कहाँ से खरीदे के चाहत बानी।\",\"govStoreAlt\":\"सरकारी स्टोर\",\"govStoreTitle\":\"सरकारी स्टोर\",\"govStoreDescription\":\"सब्सिडी वाला बीज, खाद, अउरी उपकरण सीधे सरकार द्वारा अनुमोदित आउटलेट से खरीदीं। गुणवत्ता अउरी उचित दाम सुनिश्चित करेला।\",\"govStoreButton\":\"सरकारी पोर्टल खोजीं\",\"privateMarketplaceAlt\":\"निजी बाजार\",\"privateMarketplaceTitle\":\"निजी बाजार\",\"privateMarketplaceDescription\":\"विभिन्न विक्रेता से उत्पाद के एगो विस्तृत विविधता ब्राउज़ करीं। प्रतिस्पर्धी दाम अउरी ब्रांड अउरी वस्तु के एगो बड़हन चयन खोजीं।\",\"privateMarketplaceButton\":\"बाजार में जाईं\",\"government\":{\"title\":\"सरकारी पोर्टल\",\"showingContentFrom\":\"से सामग्री देखा रहल बा\",\"backToStore\":\"स्टोर पर वापस जाईं\",\"openInNewTab\":\"नया टैब में खोलीं\",\"embedNote\":\"नोट: कुछ सरकारी वेबसाइट एम्बेड कइला पर सही ढंग से काम ना कर सकत बा। अगर रउआ के समस्या होखे, त कृपया \\\"नया टैब में खोलीं\\\" बटन के इस्तेमाल करीं।\",\"iframeTitle\":\"सरकारी कृषि कॉप पोर्टल\"},\"marketplace\":{\"title\":\"निजी बाजार\",\"description\":\"राउर सब खेती के जरूरत खातिर विभिन्न विक्रेता से गुणवत्ता वाला उत्पाद।\",\"backToStore\":\"स्टोर पर वापस जाईं\",\"addToCart\":\"कार्ट में जोड़ीं\",\"comingSoonTitle\":\"जल्दिये आवत बा!\",\"comingSoonMessage\":\"हमनी के '{{query}}' से मेल खात कवनो उत्पाद ना मिलल। हमनी के लगातार आपन इन्वेंट्री बढ़ावत बानी, एहसे कृपया बाद में फेर से देखीं!\",\"irrelevantProductTitle\":\"अप्रासंगिक उत्पाद खोज\",\"irrelevantProductMessage\":\"रउआ जवन खोजत बानी उ उपलब्ध नइखे। इहाँ खाली कृषि से जुड़ल उत्पाद बेचल जाला।\",\"products\":{\"organicFertilizer\":\"जैविक खाद\",\"pesticideSpray\":\"कीटनाशक स्प्रे\",\"highYieldSeeds\":\"उच्च उपज वाला बीज\",\"gardeningToolsSet\":\"बागवानी उपकरण सेट\",\"dripIrrigationKit\":\"ड्रिप सिंचाई किट\",\"soilTestKit\":\"माटी जांच किट\",\"protectiveGloves\":\"सुरक्षात्मक दस्ताना\",\"powerSprayer\":\"पावर स्प्रेयर\",\"greenhousePolythene\":\"ग्रीनहाउस पॉलीथीन\",\"waterPump\":\"पानी के पंप (1HP)\",\"cowManure\":\"गाय के गोबर (50 किलो)\",\"neemOil\":\"नीम के तेल कीटनाशक\"}}},\"learn\":{\"title\":\"ई-लर्निंग हब\",\"description\":\"हमनी के खेती गाइड अउरी ट्यूटोरियल के संग्रह से आपन ज्ञान बढ़ाईं।\",\"searchPlaceholder\":\"खेती के विषय पर लेख, वीडियो, चाहे उत्पाद खोजीं...\",\"stopRecording\":\"रिकॉर्डिंग बंद करीं\",\"startVoiceSearch\":\"आवाज खोज शुरू करीं\",\"closePlayer\":\"प्लेयर बंद करीं\",\"watchOnYoutube\":\"YouTube पर देखीं\",\"tabs\":{\"articles\":\"लेख अउरी गाइड\",\"videos\":\"वीडियो ट्यूटोरियल\"},\"webSearchResults\":\"वेब खोज परिणाम\",\"irrelevantTopic\":\"अप्रासंगिक विषय\",\"irrelevantTopicMessage\":\"राउर खोज \\\"{{query}}\\\" कृषि से असंबंधित लागत बा। कृपया कवनो दूसरा खोज शब्द के प्रयास करीं।\",\"readFullArticle\":\"पूरा लेख पढ़ीं\",\"ourGuides\":\"हमनी के गाइड\",\"readMore\":\"अउरी पढ़ीं\",\"watchNow\":\"अबहीं देखीं\",\"noVideosFound\":\"कवनो वीडियो ना मिलल\",\"noVideosFoundMessage\":\"राउर खोज \\\"{{query}}\\\" खातिर कवनो वीडियो ना मिलल। कृपया कवनो दूसरा खोज शब्द के प्रयास करीं।\",\"noArticlesFound\":\"कवनो मेल खात गाइड चाहे वेब परिणाम ना\",\"noArticlesFoundMessage\":\"राउर खोज \\\"{{query}}\\\" हमनी के कवनो भी गाइड से मेल ना खाइलस चाहे वेब पर कवनो लेख ना मिलल। कृपया कवनो दूसरा खोज शब्द के प्रयास करीं।\",\"searchOnGoogle\":\"Google पर खोजीं\",\"articles\":{\"dripIrrigation\":{\"title\":\"ड्रिप सिंचाई में महारत हासिल कइल\",\"description\":\"पानी के दक्षता के अधिकतम करे अउरी फसल के पैदावार बढ़ावे खातिर ड्रिप सिंचाई प्रणाली के स्थापना अउरी रखरखाव खातिर एगो व्यापक गाइड। घटक चयन, लेआउट योजना, अउरी आम समस्या के निवारण के कवर करेला।\"},\"ipm\":{\"title\":\"एकीकृत कीट प्रबंधन (आईपीएम)\",\"description\":\"कीट के प्रबंधन खातिर टिकाऊ, पर्यावरण के अनुकूल रणनीति के खोज करीं। ई गाइड जैविक नियंत्रण, सांस्कृतिक प्रथा, अउरी आपन फसल अउरी पर्यावरण के रक्षा खातिर कीटनाशक के लक्षित उपयोग के कवर करेला।\"},\"soilHealth\":{\"title\":\"माटी के स्वास्थ्य अउरी पोषण\",\"description\":\"समृद्ध, उपजाऊ माटी के रहस्य के अनलॉक करीं। ई लेख माटी विज्ञान के मूल सिद्धांत में delves, जवना में संरचना, पीएच संतुलन, अउरी स्वस्थ, अधिक उत्पादक पौधा खातिर आपन माटी के कइसे समृद्ध कइल जाए।\"},\"composting\":{\"title\":\"उन्नत खाद बनावे के तकनीक\",\"description\":\"खेत के कचरा के 'काला सोना' में बदले के सीखीं। ई गाइड विभिन्न खाद बनावे के तरीका के विवरण देला, जवना में गरम अउरी ठंडा खाद बनावल, वर्मीकम्पोस्टिंग, अउरी संतुलित खाद के ढेर कइसे बनावल जाए।\"},\"cropRotation\":{\"title\":\"फसल चक्र के समझल\",\"description\":\"रणनीतिक फसल चक्र के लाभ के खोज करीं, जवना में बेहतर माटी के उर्वरता, कीट अउरी रोग चक्र में व्यवधान, अउरी बढ़ल जैव विविधता शामिल बा। आम फसल खातिर नमूना रोटेशन योजना के शामिल करेला।\"},\"organicFarming\":{\"title\":\"जैविक खेती के मूल बातें\",\"description\":\"जैविक कृषि के मूल सिद्धांत अउरी प्रथा के एगो आवश्यक परिचय। प्रमाणन, प्राकृतिक उर्वरीकरण, खरपतवार नियंत्रण, अउरी टिकाऊ खेती खातिर जैविक उपज के विपणन के कवर करेला।\"}}},\"profile\":{\"title\":\"किसान प्रोफाइल\",\"description\":\"आपन व्यक्तिगत जानकारी अउरी वरीयता के प्रबंधन करीं।\",\"backToDashboard\":\"डैशबोर्ड पर वापस जाईं\",\"cardTitle\":\"व्यक्तिगत जानकारी\",\"cardDescription\":\"व्यक्तिगत सिफारिश पावे खातिर आपन विवरण के अपडेट राखीं।\",\"uploading\":\"अपलोड हो रहल बा...\",\"changePhoto\":\"फोटो बदलीं\",\"fullName\":\"पूरा नाम\",\"email\":\"ईमेल पता\",\"location\":\"स्थान (जिला)\",\"selectDistrict\":\"जिला चुनीं...\",\"searchDistrict\":\"जिला खोजीं...\",\"noDistrictFound\":\"कवनो जिला ना मिलल।\",\"language\":\"पसंदीदा भाषा\",\"selectLanguage\":\"भाषा चुनीं\",\"myCrops\":\"हमार फसल\",\"myCropsDescription\":\"प्रासंगिक अलर्ट अउरी सलाह पावे खातिर जवन फसल रउआ खेती करेलें ओकरा के जोड़ीं (अल्पविराम से अलग)।\",\"saving\":\"सहेज रहल बा...\",\"saveChanges\":\"बदलाव सहेजीं\"},\"settings\":{\"title\":\"आवेदन सेटिंग्स\",\"description\":\"आवेदन के रूप-रंग के अनुकूलित करीं।\",\"theme\":{\"title\":\"थीम\",\"description\":\"आवेदन खातिर एगो थीम चुनीं।\",\"light\":\"लाइट\",\"dark\":\"डार्क\",\"system\":\"सिस्टम\"},\"about\":{\"title\":\"किसान भाई के बारे में\",\"description\":\"किसान भाई एगो एआई-संचालित खेती सहायक ह जवन छोट पैमाना के भारतीय किसान के वास्तविक समय में फसल निदान, मंडी के दाम, सरकारी योजना, अउरी स्थानीय भाषा में व्यक्तिगत खेती के सलाह के साथ समर्थन करे खातिर डिजाइन कइल गइल बा।\"},\"version\":{\"title\":\"ऐप संस्करण\"},\"poweredBy\":{\"title\":\"द्वारा संचालित\",\"tech1\":\"गूगल क्लाउड वर्टेक्स एआई\",\"tech2\":\"फायरबेस\",\"tech3\":\"जेमिनी मल्टीमॉडल मॉडल\"},\"developedBy\":{\"title\":\"द्वारा विकसित\",\"teamName\":\"टीम कोडोग्राम\"},\"contact\":{\"title\":\"हमनी से संपर्क करीं\",\"emailLabel\":\"ईमेल\",\"whatsappLabel\":\"व्हाट्सएप\"},\"legal\":{\"privacy\":\"गोपनीयता नीति\",\"terms\":\"उपयोग के शर्त\"}},\"privacy\":{\"description\":\"राउर गोपनीयता के प्रति हमार प्रतिबद्धता।\",\"backToSettings\":\"सेटिंग्स पर वापस जाईं\",\"lastUpdated\":{\"title\":\"अंतिम अपडेट\",\"date\":\"26 जुलाई, 2024\"},\"introduction\":{\"title\":\"परिचय\",\"content\":\"किसान भाई में स्वागत बा। हमनी के राउर गोपनीयता के रक्षा करे अउरी राउर डेटा के खुला अउरी पारदर्शी तरीका से संभाले खातिर प्रतिबद्ध बानी। ई गोपनीयता नीति बतावेला कि हमनी के राउर जानकारी कइसे एकत्र, उपयोग, अउरी संरक्षित करब। \"},\"information\":{\"title\":\"हमनी के जवन जानकारी एकत्र करब\",\"personal\":{\"title\":\"व्यक्तिगत जानकारी\",\"content\":\"जब रउआ पंजीकरण करब, त हमनी के राउर खाता बनावे अउरी प्रबंधित करे खातिर राउर नाम, ईमेल, अउरी स्थान एकत्र करब।\"},\"usage\":{\"title\":\"उपयोग डेटा\",\"content\":\"हमनी के जानकारी एकत्र करब कि रउआ हमनी के सेवा के साथ कइसे इंटरैक्ट करेलें, जइसे कि इस्तेमाल कइल गइल सुविधा अउरी पहुँच के आवृत्ति।\"},\"image\":{\"title\":\"छवि डेटा\",\"content\":\"हमनी के फसल डॉक्टर सुविधा खातिर, हमनी के राउर अपलोड कइल गइल छवि के एकत्र करब। इनकर इस्तेमाल केवल निदान खातिर कइल जाला अउरी तीसरा पक्ष के साथ साझा ना कइल जाला।\"}},\"useOfInfo\":{\"title\":\"हमनी के राउर जानकारी के इस्तेमाल कइसे करब\",\"content\":\"हमनी के राउर जानकारी के इस्तेमाल हमनी के सेवा के प्रदान करे अउरी सुधारे, राउर अनुभव के व्यक्तिगत बनावे, अउरी राउर साथ संवाद करे खातिर करब।\"},\"dataSharing\":{\"title\":\"डेटा साझा कइल\",\"content\":\"हमनी के राउर व्यक्तिगत डेटा ना बेचब। हमनी के अनुसंधान के उद्देश्य से भागीदार के साथ अज्ञात डेटा साझा कर सकत बानी, लेकिन राउर सहमति के बिना कहियो भी राउर व्यक्तिगत पहचान योग्य जानकारी ना।\"},\"dataSecurity\":{\"title\":\"डेटा सुरक्षा\",\"content\":\"हमनी के राउर व्यक्तिगत जानकारी के सुरक्षा बनावे राखे खातिर विभिन्न सुरक्षा उपाय के लागू करब।\"},\"yourRights\":{\"title\":\"राउर अधिकार\",\"content\":\"रउआ के आपन प्रोफाइल सेटिंग्स के माध्यम से चाहे हमनी से संपर्क क के कवनो भी समय आपन व्यक्तिगत डेटा तक पहुँचे, ओकरा के सही करे, चाहे हटावे के अधिकार बा।\"},\"changes\":{\"title\":\"एह नीति में बदलाव\",\"content\":\"हमनी के समय-समय पर ई गोपनीयता नीति के अपडेट कर सकत बानी। हमनी के एह पन्ना पर नया नीति पोस्ट क के कवनो भी बदलाव के बारे में रउआ के सूचित करब।\"},\"contact\":{\"title\":\"हमनी से संपर्क करीं\",\"content\":\"अगर एह गोपनीयता नीति के बारे में राउर कवनो सवाल बा, त कृपया हमनी से support@krishimitra.in पर संपर्क करीं।\"}},\"terms\":{\"description\":\"हमार सेवा के इस्तेमाल करे के नियम।\",\"backToSettings\":\"सेटिंग्स पर वापस जाईं\",\"lastUpdated\":{\"title\":\"अंतिम अपडेट\",\"date\":\"26 जुलाई, 2024\"},\"acceptance\":{\"title\":\"शर्त के स्वीकृति\",\"content\":\"किसान भाई तक पहुँच के अउरी ओकर इस्तेमाल क के, रउआ एह समझौता के शर्त अउरी प्रावधान से बंधे होखे के स्वीकार अउरी सहमत बानी।\"},\"useOfService\":{\"title\":\"सेवा के उपयोग\",\"content\":\"रउआ हमनी के सेवा के इस्तेमाल केवल कानूनी उद्देश्य खातिर अउरी अइसन तरीका से करे के सहमत बानी जवन केहू दूसरा के उपयोग अउरी सेवा के आनंद के उल्लंघन, प्रतिबंध चाहे निषेध ना करे।\",\"item1\":\"रउआ आपन खाता अउरी पासवर्ड के गोपनीयता बनावे राखे खातिर जिम्मेदार बानी।\",\"item2\":\"एआई द्वारा दिहल गइल सलाह केवल जानकारी के उद्देश्य खातिर ह अउरी एकरा के पेशेवर कृषि सलाह के विकल्प ना मानल जाए के चाहीं।\",\"item3\":\"रउआ के जानबूझ के वायरस चाहे अन्य सामग्री जवन दुर्भावनापूर्ण चाहे तकनीकी रूप से हानिकारक बा, पेश क के हमनी के सेवा के दुरुपयोग ना करे के चाहीं।\"},\"disclaimer\":{\"title\":\"वारंटी के अस्वीकरण\",\"content\":\"सेवा 'जइसन बा' अउरी 'जइसन उपलब्ध बा' के आधार पर प्रदान कइल जाला, बिना कवनो भी प्रकार के वारंटी के, चाहे उ व्यक्त होखे चाहे निहित।\"},\"limitation\":{\"title\":\"दायित्व के सीमा\",\"content\":\"कवनो भी स्थिति में किसान भाई चाहे ओकर डेवलपर कवनो भी अप्रत्यक्ष, आकस्मिक, विशेष, परिणामी चाहे दंडात्मक क्षति खातिर उत्तरदायी ना होई, जवना में बिना कवनो सीमा के, लाभ, डेटा, उपयोग, सद्भावना, चाहे अन्य अमूर्त नुकसान शामिल बा।\"},\"termination\":{\"title\":\"समाप्ति\",\"content\":\"अगर रउआ शर्त के उल्लंघन करेलें, त हमनी के बिना कवनो पूर्व सूचना चाहे दायित्व के, कवनो भी कारण से राउर खाता के तुरंत समाप्त चाहे निलंबित कर सकत बानी।\"},\"governingLaw\":{\"title\":\"शासकीय कानून\",\"content\":\"ई शर्त भारत के कानून के अनुसार शासित अउरी मानल जाई, एकर कानून के प्रावधान के टकराव के बिना।\"},\"changes\":{\"title\":\"बदलाव\",\"content\":\"हमनी के आपन एकमात्र विवेक पर, कवनो भी समय ई शर्त के संशोधित करे चाहे बदले के अधिकार सुरक्षित रखत बानी।\"}},\"toast\":{\"browserNotSupported\":\"ब्राउज़र समर्थित नइखे\",\"noVoiceSupport\":\"राउर ब्राउज़र आवाज पहचान के समर्थन ना करेला।\",\"noSpeechDetected\":\"कवनो भाषण ना मिलल\",\"tryAgain\":\"कृपया फेर से प्रयास करीं अउरी माइक्रोफोन में साफ-साफ बोलीं।\",\"voiceError\":\"आवाज पहचान त्रुटि\",\"unsupportedFileType\":\"असमर्थित फाइल प्रकार\",\"selectAnImage\":\"कृपया एगो छवि फाइल चुनीं।\",\"speechGenerationFailed\":\"भाषण उत्पादन विफल भइल\",\"couldNotGenerateAudio\":\"निदान खातिर ऑडियो उत्पन्न ना कइल जा सकल।\",\"couldNotGenerateAudioAnalysis\":\"विश्लेषण खातिर ऑडियो उत्पन्न ना कइल जा सकल।\",\"noImageSelected\":\"कवनो छवि ना चुनल गइल\",\"selectImageToDiagnose\":\"निदान खातिर कृपया आपन फसल के एगो छवि चुनीं।\",\"diagnosisFailed\":\"निदान विफल भइल\",\"errorAnalyzingImage\":\"छवि के विश्लेषण करत घरी एगो त्रुटि भइल। कृपया फेर से प्रयास करीं।\",\"emptyQuery\":\"खाली प्रश्न\",\"enterMarketQuestion\":\"कृपया बाजार के दाम के बारे में आपन सवाल डालीं।\",\"analysisFailed\":\"विश्लेषण विफल भइल\",\"errorAnalyzingMarket\":\"बाजार के डेटा के विश्लेषण करत घरी एगो त्रुटि भइल। कृपया फेर से प्रयास करीं।\",\"enterSchemeQuestion\":\"कृपया एगो सरकारी योजना के बारे में आपन सवाल डालीं।\",\"searchFailed\":\"खोज विफल भइल\",\"errorFetchingScheme\":\"योजना के विवरण लेत घरी एगो त्रुटि भइल। कृपया फेर से प्रयास करीं।\",\"errorFetchingWeather\":\"मौसम ले आवे में त्रुटि\",\"couldNotRetrieveWeather\":\"निर्दिष्ट स्थान खातिर मौसम डेटा ना मिल सकल।\",\"videoSearchFailed\":\"वीडियो खोज विफल भइल\",\"couldNotRetrieveVideos\":\"वीडियो ट्यूटोरियल ना मिल सकल।\",\"summarizationFailed\":\"सारांश विफल भइल\",\"couldNotSummarize\":\"वेब से एगो लेख के सारांश ना दिहल जा सकल।\",\"signUpSuccess\":\"साइन अप सफल भइल\",\"signUpSuccessDesc\":\"स्वागत बा! जारी राखे खातिर कृपया लॉग इन करीं।\",\"unexpectedError\":\"एगो अप्रत्याशित त्रुटि भइल।\",\"invalidCredentials\":\"अमान्य ईमेल चाहे पासवर्ड। कृपया फेर से प्रयास करीं।\",\"emailInUse\":\"एह ईमेल के साथ एगो खाता पहिलहीं से मौजूद बा।\",\"signUpFailed\":\"साइन अप विफल भइल\",\"signInFailed\":\"साइन इन विफल भइल\",\"profileUpdated\":\"प्रोफाइल अपडेट भइल\",\"profileUpdatedDesc\":\"राउर जानकारी सफलतापूर्वक सहेज लिहल गइल बा।\",\"updateFailed\":\"अपडेट विफल भइल\",\"updateFailedDesc\":\"राउर बदलाव सहेजल ना जा सकल। कृपया फेर से प्रयास करीं।\",\"photoUpdated\":\"फोटो अपडेट भइल\",\"photoUpdatedDesc\":\"राउर प्रोफाइल तस्वीर बदल दिहल गइल बा।\",\"uploadFailed\":\"अपलोड विफल भइल\",\"uploadFailedDesc\":\"राउर प्रोफाइल तस्वीर ना बदलल जा सकल। कृपया फेर से प्रयास करीं।\",\"recommendationFailed\":\"सिफारिश विफल भइल\",\"errorGeneratingRecommendation\":\"फसल सिफारिश उत्पन्न ना कइल जा सकल। कृपया फेर से प्रयास करीं।\",\"noInput\":\"कवनो इनपुट ना दिहल गइल\",\"provideImageOrDescription\":\"कृपया एगो छवि अपलोड करीं चाहे समस्या के विवरण दीं।\"},\"tracker\":{\"title\":\"खर्च अउरी लाभ ट्रैकर\",\"description\":\"फसल के लाभप्रदता के ट्रैक करे खातिर आपन आय अउरी खर्च लॉग करीं।\",\"addTransaction\":\"लेन-देन जोड़ीं\",\"editTransaction\":\"लेन-देन संपादित करीं\",\"transactionDetails\":\"आपन आय चाहे खर्च खातिर विवरण डालीं।\",\"totalIncome\":\"कुल आय\",\"totalExpense\":\"कुल खर्च\",\"netProfitLoss\":\"शुद्ध लाभ / हानि\",\"recentTransactions\":\"हाल के लेन-देन\",\"recentTransactionsDesc\":\"राउर सबसे हाल के आय अउरी खर्च के एगो लॉग।\",\"noTransactions\":\"अबहीं तक कवनो लेन-देन नइखे। शुरू करे खातिर 'लेन-देन जोड़ीं' पर क्लिक करीं।\",\"summaryChart\":\"आय बनाम खर्च\",\"summaryChartDesc\":\"राउर वित्त के एगो दृश्य सारांश।\",\"chart\":{\"income\":\"आय\",\"expense\":\"खर्च\"},\"form\":{\"description\":\"विवरण\",\"amount\":\"राशि (₹)\",\"type\":\"प्रकार\",\"selectType\":\"एगो प्रकार चुनीं\",\"income\":\"आय\",\"expense\":\"खर्च\",\"category\":\"श्रेणी\",\"selectCategory\":\"एगो श्रेणी चुनीं\",\"date\":\"दिनांक\",\"pickDate\":\"एगो तारीख चुनीं\",\"cancel\":\"रद्द करीं\",\"save\":\"लेन-देन सहेजीं\"},\"categories\":{\"seeds\":\"बीज\",\"fertilizers\":\"उर्वरक\",\"pesticides\":\"कीटनाशक\",\"labor\":\"श्रम\",\"equipment\":\"उपकरण\",\"fuel\":\"ईंधन\",\"rent\":\"भूमि किराया\",\"other\":\"अन्य\",\"cropSale\":\"फसल बिक्री\",\"subsidy\":\"सब्सिडी\"},\"actions\":{\"edit\":\"संपादित करीं\",\"delete\":\"हटाईं\"}},\"cropRecommender\":{\"title\":\"AI फसल सिफारिश\",\"description\":\"आपन स्थान, खेत के प्रकार, अउरी बाजार के रुझान के आधार पर बुद्धिमान फसल सुझाव पाईं।\",\"client\":{\"formTitle\":\"खेत के विवरण\",\"formDescription\":\"सबसे बढ़िया सिफारिश पावे खातिर आपन खेत के बारे में विवरण दीं।\",\"farmType\":\"खेत के प्रकार\",\"irrigated\":\"सिंचित\",\"rainfed\":\"वर्षा आधारित / सूखा\",\"landSize\":\"भूमि के आकार (उदा., 2 एकड़)\",\"cropPreference\":\"फसल वरीयता (वैकल्पिक)\",\"cropPreferencePlaceholder\":\"उदा., सब्जी, बाजरा\",\"getRecommendations\":\"सिफारिश पाईं\",\"gettingRecommendations\":\"सिफारिश मिल रहल बा...\",\"resultsTitle\":\"AI-संचालित सिफारिश\",\"resultsPlaceholder\":\"राउर व्यक्तिगत फसल सिफारिश इहाँ लउकी।\",\"topPicks\":\"राउर खातिर हमार शीर्ष पसंद\",\"topPicksDescription\":\"राउर इनपुट के आधार पर, आवे वाला सीजन खातिर सबसे उपयुक्त फसल इहाँ बा।\",\"learnMore\":\"अउरी जानीं\",\"soilType\":\"माटी के प्रकार (वैकल्पिक)\",\"selectSoilType\":\"माटी के प्रकार चुनीं\",\"soilTypes\":{\"black\":\"कारी\",\"red\":\"लाल\",\"loamy\":\"दोमट\",\"sandy\":\"रेतीला\",\"clay\":\"चिकनी\"},\"waterSource\":\"जल स्रोत (वैकल्पिक)\",\"selectWaterSource\":\"जल स्रोत चुनीं\",\"waterSources\":{\"borewell\":\"बोरवेल\",\"canal\":\"नहर\",\"rain-only\":\"केवल वर्षा\",\"tank\":\"टैंक\",\"river\":\"नदी\"},\"currentSeason\":\"वर्तमान मौसम\",\"seasons\":{\"kharif\":\"खरीफ\",\"rabi\":\"रबी\",\"zaid\":\"ज़ैद\"},\"previousCrop\":\"पिछला फसल (वैकल्पिक)\",\"budget\":\"बजट (वैकल्पिक)\",\"keyBenefits\":\"मुख्य लाभ\"}},\"chatbot\":{\"title\":\"अन्नपूर्णा सहायक\",\"description\":\"राउर व्यक्तिगत खेती सहायक। हमरा से कुछ भी पूछीं!\",\"open\":\"चैटबॉट खोलीं\",\"placeholder\":\"अन्नपूर्णा से एगो सवाल पूछीं...\",\"welcomeMessage\":\"नमस्ते {{name}}! हम अन्नपूर्णा हईं। आज हम राउर कइसे मदद कर सकत बानी? रउआ हमरा से बाजार के दाम देखावे, फसल के निदान करे, चाहे सरकारी योजना खोजे खातिर कह सकत बानी।\",\"errorMessage\":\"हमरा के माफ करीं, हमरा के अबहीं कनेक्ट करे में दिक्कत होखत बा। कुछ देर बाद फेर से कोसिस करीं।\",\"yes\":\"हाँ\",\"no\":\"ना\"}}"));}}),
"[project]/src/components/icons.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Icons": (()=>Icons)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Icons = {
    logo: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14 9.5V6.75a.75.75 0 0 0-.75-.75H4.5A.75.75 0 0 0 3.75 6.75V18c0 .414.336.75.75.75h4.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons.tsx",
                    lineNumber: 17,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9 15h3"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons.tsx",
                    lineNumber: 18,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 12h3"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons.tsx",
                    lineNumber: 19,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9 9h3"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons.tsx",
                    lineNumber: 20,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17.5 18a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons.tsx",
                    lineNumber: 21,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 21a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons.tsx",
                    lineNumber: 22,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17.5 13v-3a1.5 1.5 0 0 1 1.5-1.5h0a1.5 1.5 0 0 1 1.5 1.5v3"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons.tsx",
                    lineNumber: 23,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m14 14-1-1"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons.tsx",
                    lineNumber: 24,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m21.5 12.5-1-1"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons.tsx",
                    lineNumber: 25,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 5,
            columnNumber: 5
        }, this),
    wheat: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2 22s1-1 2-2c1-1 2-2 3-2s2 1 3 2 2.5 2 2.5 2"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons.tsx",
                    lineNumber: 41,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14 14s-1-1.5-2-2.5c-1-1-2-2.5-2-2.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons.tsx",
                    lineNumber: 42,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14 9.5c0-1-.5-2-1.5-2.5S11 6 11 6"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons.tsx",
                    lineNumber: 43,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14 6s-1.5 0-2.5 1s-2 2-2 2"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons.tsx",
                    lineNumber: 44,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons.tsx",
                    lineNumber: 45,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14 6.5h-1.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons.tsx",
                    lineNumber: 46,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M11 9s-1.5 0-2.5 1-2 2-2 2"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons.tsx",
                    lineNumber: 47,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m15 12-1-1"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons.tsx",
                    lineNumber: 48,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20.5 8.5-19 20"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons.tsx",
                    lineNumber: 49,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 29,
            columnNumber: 5
        }, this),
    sprout: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7 20h10"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons.tsx",
                    lineNumber: 65,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M10 20c0-3.3 1-6 4-6"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons.tsx",
                    lineNumber: 66,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 12A4 4 0 0 1 8 8c0-2 2-4 4-4s4 2 4 4a4 4 0 0 1-4 4Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons.tsx",
                    lineNumber: 67,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 12v8"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons.tsx",
                    lineNumber: 68,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 53,
            columnNumber: 5
        }, this)
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/splash-screen.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SplashScreen": (()=>SplashScreen)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
;
;
const SplashScreen = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen w-screen flex-col items-center justify-center bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 text-primary",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].logo, {
                        className: "h-16 w-16 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/components/splash-screen.tsx",
                        lineNumber: 7,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-4xl font-bold font-headline",
                        children: "KishanBhai"
                    }, void 0, false, {
                        fileName: "[project]/src/components/splash-screen.tsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/splash-screen.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-muted-foreground",
                children: "Initializing your dashboard..."
            }, void 0, false, {
                fileName: "[project]/src/components/splash-screen.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/splash-screen.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
};
_c = SplashScreen;
var _c;
__turbopack_context__.k.register(_c, "SplashScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/contexts/language-context.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LanguageProvider": (()=>LanguageProvider),
    "useTranslation": (()=>useTranslation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-auth.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/en.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$hi$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/hi.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$kn$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/kn.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$bn$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/bn.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$bho$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/bho.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$splash$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/splash-screen.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const translations = {
    en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2e$json__$28$json$29$__["default"],
    hi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$hi$2e$json__$28$json$29$__["default"],
    kn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$kn$2e$json__$28$json$29$__["default"],
    bn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$bn$2e$json__$28$json$29$__["default"],
    bho: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$bho$2e$json__$28$json$29$__["default"]
};
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const LanguageProvider = ({ children })=>{
    _s();
    const { userProfile, loading: authLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            if (!authLoading) {
                const preferredLanguage = userProfile?.language;
                if (preferredLanguage && [
                    'en',
                    'hi',
                    'kn',
                    'bn',
                    'bho'
                ].includes(preferredLanguage)) {
                    setLanguage(preferredLanguage);
                } else {
                    setLanguage('en');
                }
                setIsLoading(false);
            }
        }
    }["LanguageProvider.useEffect"], [
        userProfile,
        authLoading
    ]);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LanguageProvider.useCallback[t]": (key, replacements = {})=>{
            const langFile = translations[language] || translations.en;
            const keys = key.split('.');
            let result = keys.reduce({
                "LanguageProvider.useCallback[t].result": (acc, currentKey)=>{
                    if (acc && typeof acc === 'object' && acc[currentKey]) {
                        return acc[currentKey];
                    }
                    return undefined;
                }
            }["LanguageProvider.useCallback[t].result"], langFile);
            if (result === undefined) {
                console.warn(`Translation key not found: ${key}`);
                return key;
            }
            if (typeof result === 'string') {
                Object.keys(replacements).forEach({
                    "LanguageProvider.useCallback[t]": (placeholder)=>{
                        const regex = new RegExp(`{{${placeholder}}}`, 'g');
                        result = result.replace(regex, String(replacements[placeholder]));
                    }
                }["LanguageProvider.useCallback[t]"]);
            }
            return result;
        }
    }["LanguageProvider.useCallback[t]"], [
        language
    ]);
    const value = {
        language,
        setLanguage,
        t
    };
    if (isLoading || authLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$splash$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplashScreen"], {}, void 0, false, {
            fileName: "[project]/src/contexts/language-context.tsx",
            lineNumber: 76,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/language-context.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
};
_s(LanguageProvider, "w9K54Zw6knjfUJJTYSoX5lmGI04=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = LanguageProvider;
const useTranslation = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error("useTranslation must be used within a LanguageProvider");
    }
    return context;
};
_s1(useTranslation, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/theme-provider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeProvider": (()=>ThemeProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/theme-provider.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_538068f4._.js.map