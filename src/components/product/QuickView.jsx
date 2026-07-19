import { jsx, jsxs } from "react/jsx-runtime";
import { Modal } from "../ui/Modal";
import { Button } from "../ui/Button";
import { Rating } from "../ui/Rating";
import { Badge } from "../ui/Badge";
import { Heart, ShoppingCart, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart, useWishlist, useToast } from "../../context/AppContext";
export function QuickView({ product, onClose }) {
  const { addToCart } = useCart();
  const { toggle, isWishlisted } = useWishlist();
  const { notify } = useToast();
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(void 0);
  const [size, setSize] = useState(void 0);
  if (!product) return null;
  const wished = isWishlisted(product.id);
  return /* @__PURE__ */ jsx(Modal, { open: !!product, onClose, size: "lg", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
    /* @__PURE__ */ jsx("div", { className: "rounded-3xl overflow-hidden aspect-square bg-ink-50 dark:bg-ink-950", children: /* @__PURE__ */ jsx("img", { src: product.images[0], alt: product.name, className: "w-full h-full object-cover" }) }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wide text-ink-400", children: product.brand }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-ink-900 dark:text-ink-50", children: product.name }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Rating, { value: product.rating, reviews: product.reviews }),
          /* @__PURE__ */ jsxs(Badge, { variant: "success", children: [
            "In stock: ",
            product.stock
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-3", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-3xl font-bold text-ink-900 dark:text-ink-50", children: [
          "$",
          product.price
        ] }),
        product.oldPrice && /* @__PURE__ */ jsxs("span", { className: "text-lg text-ink-400 line-through", children: [
          "$",
          product.oldPrice
        ] }),
        product.discount && /* @__PURE__ */ jsxs(Badge, { variant: "danger", children: [
          "-",
          product.discount,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-ink-600 dark:text-ink-300 line-clamp-3", children: product.description }),
      product.colors.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium mb-2", children: "Color" }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2 flex-wrap", children: product.colors.map((c) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setColor(c),
            className: `px-3 py-1.5 rounded-full text-xs border transition-all ${color === c ? "border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300" : "border-ink-200 dark:border-ink-700 text-ink-600 dark:text-ink-300"}`,
            children: c
          },
          c
        )) })
      ] }),
      product.sizes && product.sizes.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium mb-2", children: "Size" }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2 flex-wrap", children: product.sizes.map((s) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setSize(s),
            className: `min-w-10 px-3 py-1.5 rounded-xl text-xs border transition-all ${size === s ? "border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300" : "border-ink-200 dark:border-ink-700 text-ink-600 dark:text-ink-300"}`,
            children: s
          },
          s
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 pt-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center border border-ink-200 dark:border-ink-700 rounded-2xl", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => setQty((q) => Math.max(1, q - 1)), className: "p-2.5 text-ink-500 hover:text-primary-500", children: /* @__PURE__ */ jsx(Minus, { size: 16 }) }),
          /* @__PURE__ */ jsx("span", { className: "w-10 text-center font-semibold", children: qty }),
          /* @__PURE__ */ jsx("button", { onClick: () => setQty((q) => q + 1), className: "p-2.5 text-ink-500 hover:text-primary-500", children: /* @__PURE__ */ jsx(Plus, { size: 16 }) })
        ] }),
        /* @__PURE__ */ jsxs(
          Button,
          {
            onClick: () => {
              addToCart(product, qty, color || product.colors[0], size || product.sizes?.[0]);
              notify("Added to cart", "success");
              onClose();
            },
            className: "flex-1",
            children: [
              /* @__PURE__ */ jsx(ShoppingCart, { size: 16 }),
              " Add to Cart"
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              toggle(product);
              notify(wished ? "Removed from wishlist" : "Added to wishlist", "info");
            },
            className: `p-3 rounded-2xl border border-ink-200 dark:border-ink-700 ${wished ? "text-primary-500" : "text-ink-600 dark:text-ink-300"}`,
            children: /* @__PURE__ */ jsx(Heart, { size: 18, className: wished ? "fill-primary-500" : "" })
          }
        )
      ] }),
      /* @__PURE__ */ jsx(Link, { to: `/product/${product.id}`, onClick: onClose, className: "block text-center text-sm text-primary-500 hover:underline pt-1", children: "View full details \u2192" })
    ] })
  ] }) });
}
