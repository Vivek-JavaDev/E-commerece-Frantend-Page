import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
export function Section({ title, subtitle, eyebrow, children, link, linkLabel = "View all", className = "" }) {
  return /* @__PURE__ */ jsx("section", { className: `py-12 md:py-16 ${className}`, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
    (title || subtitle || eyebrow) && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "flex items-end justify-between mb-8 gap-4 flex-wrap",
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            eyebrow && /* @__PURE__ */ jsx("p", { className: "text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2", children: eyebrow }),
            title && /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-ink-900 dark:text-ink-50", children: title }),
            subtitle && /* @__PURE__ */ jsx("p", { className: "mt-2 text-ink-500 dark:text-ink-400 max-w-2xl", children: subtitle })
          ] }),
          link && /* @__PURE__ */ jsxs(Link, { to: link, className: "inline-flex items-center gap-1.5 text-sm font-semibold text-primary-500 hover:gap-2.5 transition-all", children: [
            linkLabel,
            " ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
          ] })
        ]
      }
    ),
    children
  ] }) });
}
