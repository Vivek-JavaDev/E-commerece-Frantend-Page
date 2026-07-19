import { jsx, jsxs } from "react/jsx-runtime";
import { Star } from "lucide-react";
export function Rating({ value, reviews, size = 16, showValue = false }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center", children: [1, 2, 3, 4, 5].map((i) => {
      const fill = Math.max(0, Math.min(1, value - (i - 1)));
      return /* @__PURE__ */ jsxs("span", { className: "relative", style: { width: size, height: size }, children: [
        /* @__PURE__ */ jsx(Star, { size, className: "absolute inset-0 text-ink-300 dark:text-ink-600" }),
        /* @__PURE__ */ jsx("span", { className: "absolute inset-0 overflow-hidden", style: { width: `${fill * 100}%` }, children: /* @__PURE__ */ jsx(Star, { size, className: "text-accent-400 fill-accent-400" }) })
      ] }, i);
    }) }),
    showValue && /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-ink-700 dark:text-ink-200", children: value.toFixed(1) }),
    reviews !== void 0 && /* @__PURE__ */ jsxs("span", { className: "text-xs text-ink-400 dark:text-ink-500", children: [
      "(",
      reviews,
      ")"
    ] })
  ] });
}
