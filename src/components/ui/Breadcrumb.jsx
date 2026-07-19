import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
export function Breadcrumb({ items }) {
  return /* @__PURE__ */ jsx("nav", { className: "flex items-center flex-wrap gap-1 text-sm text-ink-500 dark:text-ink-400", children: items.map((item, i) => /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
    item.to ? /* @__PURE__ */ jsx(Link, { to: item.to, className: "hover:text-primary-500 transition-colors", children: item.label }) : /* @__PURE__ */ jsx("span", { className: "text-ink-800 dark:text-ink-100 font-medium", children: item.label }),
    i < items.length - 1 && /* @__PURE__ */ jsx(ChevronRight, { size: 14, className: "text-ink-300" })
  ] }, i)) });
}
