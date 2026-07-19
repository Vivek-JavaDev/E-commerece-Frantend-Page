import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Truck, RefreshCw, ShieldCheck, Headset } from "lucide-react";
const items = [
  { icon: Truck, title: "Free Express Shipping", description: "On all orders over $75" },
  { icon: RefreshCw, title: "30-Day Returns", description: "Hassle-free returns" },
  { icon: ShieldCheck, title: "Secure Payment", description: "256-bit SSL encrypted" },
  { icon: Headset, title: "24/7 Concierge", description: "Personal support" }
];
export function Services() {
  return /* @__PURE__ */ jsx("section", { className: "py-10 border-y border-ink-100 dark:border-ink-800", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: items.map((it, i) => /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.4, delay: i * 0.1 },
      className: "flex items-center gap-3 p-4 rounded-3xl hover:bg-white dark:hover:bg-ink-900 transition-colors",
      children: [
        /* @__PURE__ */ jsx("div", { className: "p-3 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 text-primary-500", children: /* @__PURE__ */ jsx(it.icon, { size: 24 }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm text-ink-900 dark:text-ink-50", children: it.title }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-ink-500", children: it.description })
        ] })
      ]
    },
    i
  )) }) }) });
}
