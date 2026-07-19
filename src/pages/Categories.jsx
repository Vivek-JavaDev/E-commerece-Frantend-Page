import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories, products } from "../data/products";
import { Breadcrumb } from "../components/ui/Breadcrumb";
export function Categories() {
  return /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsx(Breadcrumb, { items: [{ label: "Home", to: "/" }, { label: "Categories" }] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 mb-8 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2", children: "Browse" }),
      /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold text-ink-900 dark:text-ink-50", children: "All Categories" }),
      /* @__PURE__ */ jsx("p", { className: "text-ink-500 mt-2 max-w-xl mx-auto", children: "Discover our curated collections across every category. Each one handpicked for quality and style." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: categories.map((cat, i) => {
      const count = products.filter((p) => p.category === cat.slug).length;
      return /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: i * 0.1 },
          children: /* @__PURE__ */ jsxs(
            Link,
            {
              to: `/category/${cat.slug}`,
              className: "group relative block aspect-[4/3] rounded-3xl overflow-hidden shadow-soft hover:shadow-premium transition-all",
              children: [
                /* @__PURE__ */ jsx("img", { src: cat.image, alt: cat.name, className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" }),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/30 to-transparent" }),
                /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 p-6 flex flex-col justify-end text-white", children: [
                  /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold mb-1", children: cat.name }),
                  /* @__PURE__ */ jsxs("p", { className: "text-sm text-ink-200 mb-3", children: [
                    count,
                    " products \xB7 ",
                    cat.subcategories.length,
                    " collections"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5 mb-3", children: cat.subcategories.slice(0, 4).map((s) => /* @__PURE__ */ jsx("span", { className: "px-2.5 py-1 rounded-full glass text-xs", children: s }, s)) }),
                  /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all", children: [
                    "Explore ",
                    cat.name,
                    " ",
                    /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
                  ] })
                ] })
              ]
            }
          )
        },
        cat.id
      );
    }) })
  ] });
}
