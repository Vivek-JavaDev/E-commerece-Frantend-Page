import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories } from "../../data/products";
export function CategoryGrid() {
  return /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
      /* @__PURE__ */ jsx("p", { className: "text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2", children: "Explore" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-ink-900 dark:text-ink-50", children: "Shop by Category" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4", children: categories.map((cat, i) => /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4, delay: i * 0.05 },
        children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: `/category/${cat.slug}`,
            className: "group block relative aspect-[3/4] rounded-3xl overflow-hidden shadow-soft hover:shadow-premium transition-all",
            children: [
              /* @__PURE__ */ jsx("img", { src: cat.image, alt: cat.name, className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent" }),
              /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 p-4 text-white", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-bold", children: cat.name }),
                /* @__PURE__ */ jsxs("p", { className: "text-xs text-ink-200 mb-2", children: [
                  cat.subcategories.length,
                  " collections"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 text-xs font-semibold text-primary-300 group-hover:gap-2 transition-all", children: [
                  "Shop now ",
                  /* @__PURE__ */ jsx(ArrowRight, { size: 12 })
                ] })
              ] })
            ]
          }
        )
      },
      cat.id
    )) })
  ] }) });
}
