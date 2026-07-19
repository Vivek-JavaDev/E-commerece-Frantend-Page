import { jsx, jsxs } from "react/jsx-runtime";
export function Loader({ size = 40 }) {
  return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", style: { minHeight: size * 3 }, children: /* @__PURE__ */ jsx(
    "div",
    {
      className: "rounded-full border-4 border-primary-200 dark:border-ink-700 border-t-primary-500 animate-spin",
      style: { width: size, height: size }
    }
  ) });
}
export function Skeleton({ className = "" }) {
  return /* @__PURE__ */ jsx("div", { className: `skeleton rounded-2xl ${className}` });
}
export function ProductCardSkeleton() {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-3xl overflow-hidden border border-ink-100 dark:border-ink-800 bg-white dark:bg-ink-900", children: [
    /* @__PURE__ */ jsx(Skeleton, { className: "rounded-none h-56 w-full" }),
    /* @__PURE__ */ jsxs("div", { className: "p-4 space-y-3", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-1/3" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-3/4" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-1/2" }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-20" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-10" })
      ] })
    ] })
  ] });
}
export function ProductGridSkeleton({ count = 8 }) {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ jsx(ProductCardSkeleton, {}, i)) });
}
