import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Trash2, ShoppingCart, ArrowRight } from "lucide-react";
import { useWishlist, useCart, useToast } from "../context/AppContext";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { Button } from "../components/ui/Button";
export function Wishlist() {
  const { items, remove, clear } = useWishlist();
  const { addToCart } = useCart();
  const { notify } = useToast();
  if (items.length === 0) {
    return /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-20 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex p-6 rounded-3xl bg-ink-50 dark:bg-ink-900 mb-6", children: /* @__PURE__ */ jsx(Heart, { size: 48, className: "text-ink-300" }) }),
      /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl font-bold text-ink-900 dark:text-ink-50 mb-3", children: "Your wishlist is empty" }),
      /* @__PURE__ */ jsx("p", { className: "text-ink-500 mb-6", children: "Save items you love for later." }),
      /* @__PURE__ */ jsxs(Link, { to: "/shop", className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold shadow-glow", children: [
        "Discover Products ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsx(Breadcrumb, { items: [{ label: "Home", to: "/" }, { label: "Wishlist" }] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mt-4 mb-6 flex-wrap gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl font-bold text-ink-900 dark:text-ink-50", children: "My Wishlist" }),
        /* @__PURE__ */ jsxs("p", { className: "text-ink-500 mt-1", children: [
          items.length,
          " items saved"
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Button, { variant: "outline", onClick: () => {
        clear();
        notify("Wishlist cleared", "info");
      }, children: [
        /* @__PURE__ */ jsx(Trash2, { size: 16 }),
        " Clear All"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5", children: items.map((p, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3, delay: i * 0.05 },
        className: "rounded-3xl overflow-hidden glass border border-ink-100 dark:border-ink-800 group",
        children: [
          /* @__PURE__ */ jsxs(Link, { to: `/product/${p.id}`, className: "block relative aspect-square overflow-hidden bg-ink-50 dark:bg-ink-950", children: [
            /* @__PURE__ */ jsx("img", { src: p.images[0], alt: p.name, className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" }),
            p.discount && /* @__PURE__ */ jsxs("span", { className: "absolute top-3 left-3 px-2 py-1 rounded-full bg-red-500 text-white text-xs font-semibold", children: [
              "-",
              p.discount,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs uppercase text-ink-400", children: p.brand }),
              /* @__PURE__ */ jsx(Link, { to: `/product/${p.id}`, className: "font-semibold text-ink-900 dark:text-ink-50 hover:text-primary-500 line-clamp-1", children: p.name })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-2", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-lg font-bold", children: [
                "$",
                p.price
              ] }),
              p.oldPrice && /* @__PURE__ */ jsxs("span", { className: "text-xs text-ink-400 line-through", children: [
                "$",
                p.oldPrice
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "sm",
                  className: "flex-1",
                  onClick: () => {
                    addToCart(p, 1, p.colors[0], p.sizes?.[0]);
                    notify("Added to cart", "success");
                  },
                  children: [
                    /* @__PURE__ */ jsx(ShoppingCart, { size: 14 }),
                    " Add"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => {
                    remove(p.id);
                    notify("Removed from wishlist", "info");
                  },
                  className: "p-2.5 rounded-2xl border border-ink-200 dark:border-ink-700 text-ink-500 hover:text-red-500 hover:border-red-500 transition-all",
                  children: /* @__PURE__ */ jsx(Trash2, { size: 16 })
                }
              )
            ] })
          ] })
        ]
      },
      p.id
    )) })
  ] });
}
