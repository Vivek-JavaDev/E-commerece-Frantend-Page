import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GitCompare, X, ShoppingCart } from "lucide-react";
import { useCompare, useCart, useToast } from "../context/AppContext";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { Button } from "../components/ui/Button";
import { Rating } from "../components/ui/Rating";
export function Compare() {
  const { items, remove, clear } = useCompare();
  const { addToCart } = useCart();
  const { notify } = useToast();
  if (items.length === 0) {
    return /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-20 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex p-6 rounded-3xl bg-ink-50 dark:bg-ink-900 mb-6", children: /* @__PURE__ */ jsx(GitCompare, { size: 48, className: "text-ink-300" }) }),
      /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl font-bold text-ink-900 dark:text-ink-50 mb-3", children: "Nothing to compare yet" }),
      /* @__PURE__ */ jsx("p", { className: "text-ink-500 mb-6", children: "Add products to compare their features side by side." }),
      /* @__PURE__ */ jsx(Link, { to: "/shop", className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold shadow-glow", children: "Browse Products" })
    ] });
  }
  const rows = [
    { label: "Price", render: (p) => /* @__PURE__ */ jsxs("span", { className: "font-bold", children: [
      "$",
      p.price
    ] }) },
    { label: "Old Price", render: (p) => p.oldPrice ? /* @__PURE__ */ jsxs("span", { className: "text-ink-400 line-through", children: [
      "$",
      p.oldPrice
    ] }) : "\u2014" },
    { label: "Discount", render: (p) => p.discount ? `${p.discount}%` : "\u2014" },
    { label: "Brand", render: (p) => p.brand },
    { label: "Category", render: (p) => /* @__PURE__ */ jsx("span", { className: "capitalize", children: p.category.replace("-", " & ") }) },
    { label: "Rating", render: (p) => /* @__PURE__ */ jsx(Rating, { value: p.rating, size: 14 }) },
    { label: "Reviews", render: (p) => p.reviews },
    { label: "Stock", render: (p) => /* @__PURE__ */ jsx("span", { className: p.stock > 0 ? "text-emerald-500" : "text-red-500", children: p.stock > 0 ? "In stock" : "Out" }) },
    { label: "Colors", render: (p) => p.colors.length },
    { label: "Sizes", render: (p) => p.sizes?.length || "N/A" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsx(Breadcrumb, { items: [{ label: "Home", to: "/" }, { label: "Compare" }] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mt-4 mb-6 flex-wrap gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl font-bold text-ink-900 dark:text-ink-50", children: "Compare Products" }),
        /* @__PURE__ */ jsxs("p", { className: "text-ink-500 mt-1", children: [
          items.length,
          " of 4 products"
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Button, { variant: "outline", onClick: clear, children: [
        /* @__PURE__ */ jsx(X, { size: 16 }),
        " Clear All"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "overflow-x-auto no-scrollbar", children: /* @__PURE__ */ jsxs("div", { className: "min-w-[720px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4", style: { gridTemplateColumns: `200px repeat(${items.length}, 1fr)` }, children: [
        /* @__PURE__ */ jsx("div", {}),
        items.map((p) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            className: "rounded-3xl glass-strong border border-ink-100 dark:border-ink-800 p-4 relative",
            children: [
              /* @__PURE__ */ jsx("button", { onClick: () => remove(p.id), className: "absolute top-2 right-2 p-1.5 rounded-full bg-ink-100 dark:bg-ink-800 text-ink-500 hover:text-red-500", children: /* @__PURE__ */ jsx(X, { size: 14 }) }),
              /* @__PURE__ */ jsx(Link, { to: `/product/${p.id}`, className: "block aspect-square rounded-2xl overflow-hidden mb-3", children: /* @__PURE__ */ jsx("img", { src: p.images[0], alt: p.name, className: "w-full h-full object-cover" }) }),
              /* @__PURE__ */ jsx("p", { className: "text-xs uppercase text-ink-400", children: p.brand }),
              /* @__PURE__ */ jsx(Link, { to: `/product/${p.id}`, className: "font-semibold text-sm text-ink-900 dark:text-ink-50 hover:text-primary-500 line-clamp-2", children: p.name }),
              /* @__PURE__ */ jsxs(Button, { size: "sm", className: "mt-3 w-full", onClick: () => {
                addToCart(p, 1, p.colors[0], p.sizes?.[0]);
                notify("Added to cart", "success");
              }, children: [
                /* @__PURE__ */ jsx(ShoppingCart, { size: 14 }),
                " Add to Cart"
              ] })
            ]
          },
          p.id
        ))
      ] }),
      rows.map((row, i) => /* @__PURE__ */ jsxs("div", { className: "grid gap-4 mt-3", style: { gridTemplateColumns: `200px repeat(${items.length}, 1fr)` }, children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center px-4 py-3 text-sm font-semibold text-ink-700 dark:text-ink-200", children: row.label }),
        items.map((p) => /* @__PURE__ */ jsx("div", { className: "px-4 py-3 rounded-2xl bg-ink-50 dark:bg-ink-900 text-sm text-ink-700 dark:text-ink-200 flex items-center", children: row.render(p) }, p.id))
      ] }, i))
    ] }) })
  ] });
}
