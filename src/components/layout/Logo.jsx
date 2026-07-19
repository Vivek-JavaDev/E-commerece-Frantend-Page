import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { Gem } from "lucide-react";
export function Logo() {
  return /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2 shrink-0", children: [
    /* @__PURE__ */ jsx("span", { className: "relative inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-glow", children: /* @__PURE__ */ jsx(Gem, { size: 20, className: "text-white" }) }),
    /* @__PURE__ */ jsx("span", { className: "font-display text-2xl font-bold tracking-tight text-ink-900 dark:text-ink-50", children: "LUXE" })
  ] });
}
