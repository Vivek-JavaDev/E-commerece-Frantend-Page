import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import { products } from "../../data/products";
import { ProductCard } from "../product/ProductCard";
import { Countdown } from "./Countdown";
export function FlashSale() {
  const flashProducts = products.filter((p) => p.tags.includes("flash")).slice(0, 4);
  if (flashProducts.length === 0) return null;
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-ink-900 dark:via-ink-950 dark:to-ink-900", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8",
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("p", { className: "inline-flex items-center gap-2 text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2", children: [
              /* @__PURE__ */ jsx(Zap, { size: 16, className: "fill-primary-500" }),
              " Limited Time"
            ] }),
            /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-ink-900 dark:text-ink-50", children: "Flash Sale" }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-ink-500", children: "Up to 50% off \u2014 when it's gone, it's gone." })
          ] }),
          /* @__PURE__ */ jsx(Countdown, { hours: 48 })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6", children: flashProducts.map((p, i) => /* @__PURE__ */ jsx(ProductCard, { product: p, index: i }, p.id)) }),
    /* @__PURE__ */ jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/shop?tag=flash",
        className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold shadow-glow hover:shadow-premium transition-all group",
        children: [
          "View all flash deals ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 18, className: "group-hover:translate-x-1 transition-transform" })
        ]
      }
    ) })
  ] }) });
}
