import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
export const Input = forwardRef(
  ({ label, error, icon, hint, className = "", ...rest }, ref) => {
    return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
      label && /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-ink-700 dark:text-ink-200 mb-1.5", children: label }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        icon && /* @__PURE__ */ jsx("span", { className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400 dark:text-ink-500", children: icon }),
        /* @__PURE__ */ jsx(
          "input",
          {
            ref,
            className: `w-full rounded-2xl border bg-white/60 dark:bg-ink-900/60 backdrop-blur px-4 py-3 text-ink-900 dark:text-ink-50 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all ${icon ? "pl-11" : ""} ${error ? "border-red-400" : "border-ink-200 dark:border-ink-700"} ${className}`,
            ...rest
          }
        )
      ] }),
      error && /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-xs text-red-500", children: error }),
      hint && !error && /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-xs text-ink-400", children: hint })
    ] });
  }
);
Input.displayName = "Input";
