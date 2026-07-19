import { jsx, jsxs } from "react/jsx-runtime";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ProductGrid } from "../components/product/ProductGrid";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { useProducts } from "../hooks/useProducts";
import { categories } from "../data/products";
export function CategoryPage() {
  const { slug } = useParams();
  const cat = categories.find((c) => c.slug === slug);
  const { products: list, loading } = useProducts({ category: slug });
  if (!cat) {
    return /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 py-20 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-ink-500 mb-4", children: "Category not found." }),
      /* @__PURE__ */ jsx(Link, { to: "/categories", className: "text-primary-500 font-semibold", children: "View all categories \u2192" })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsx(Breadcrumb, { items: [{ label: "Home", to: "/" }, { label: "Categories", to: "/categories" }, { label: cat.name }] }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "relative rounded-3xl overflow-hidden aspect-[16/5] mt-4 mb-8",
        children: [
          /* @__PURE__ */ jsx("img", { src: cat.image, alt: cat.name, className: "absolute inset-0 w-full h-full object-cover" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/50 to-transparent" }),
          /* @__PURE__ */ jsx("div", { className: "relative h-full flex items-center px-8 md:px-12 text-white", children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-primary-300 font-semibold text-sm uppercase tracking-wider mb-2", children: "Collection" }),
            /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold mb-2", children: cat.name }),
            /* @__PURE__ */ jsxs("p", { className: "text-ink-200 max-w-md", children: [
              list.length,
              " premium products across ",
              cat.subcategories.length,
              " collections"
            ] })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 mb-6", children: [
      /* @__PURE__ */ jsx(Link, { to: `/category/${cat.slug}`, className: "px-4 py-2 rounded-2xl bg-primary-500 text-white text-sm font-semibold", children: "All" }),
      cat.subcategories.map((s) => /* @__PURE__ */ jsx(Link, { to: `/shop?category=${cat.slug}`, className: "px-4 py-2 rounded-2xl border border-ink-200 dark:border-ink-700 text-ink-700 dark:text-ink-200 text-sm hover:border-primary-500 transition-all", children: s }, s))
    ] }),
    /* @__PURE__ */ jsx(ProductGrid, { products: list, loading, columns: 4 })
  ] });
}
