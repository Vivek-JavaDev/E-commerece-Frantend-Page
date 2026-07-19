import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Eye, GitCompare, Share2, Zap } from "lucide-react";
import { useCart, useWishlist, useCompare, useToast } from "../../context/AppContext";
import { Rating } from "../ui/Rating";
import { Badge } from "../ui/Badge";
export function ProductCard({ product, index = 0 }) {
  const { addToCart } = useCart();
  const { toggle, isWishlisted } = useWishlist();
  const { toggle: toggleCompare, isCompared } = useCompare();
  const { notify } = useToast();
  const wished = isWishlisted(product.id);
  const compared = isCompared(product.id);
  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.colors[0], product.sizes?.[0]);
    notify(`${product.name} added to cart`, "success");
  };
  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(product);
    notify(wished ? "Removed from wishlist" : "Added to wishlist", wished ? "info" : "success");
  };
  const handleCompare = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleCompare(product);
    notify(compared ? "Removed from compare" : "Added to compare", "info");
  };
  const handleShare = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({ title: product.name, url: `/product/${product.id}` }).catch(() => {
      });
    } else {
      navigator.clipboard?.writeText(window.location.origin + `/product/${product.id}`);
      notify("Link copied to clipboard", "success");
    }
  };
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.4, delay: index % 4 * 0.05 },
      className: "group relative",
      children: /* @__PURE__ */ jsx(Link, { to: `/product/${product.id}`, className: "block", children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl overflow-hidden bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 shadow-soft hover:shadow-premium transition-all duration-500", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative aspect-square overflow-hidden bg-ink-50 dark:bg-ink-950", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: product.images[0],
              alt: product.name,
              loading: "lazy",
              className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: product.images[1] || product.images[0],
              alt: product.name,
              loading: "lazy",
              className: "absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "absolute top-3 left-3 flex flex-col gap-1.5", children: [
            product.discount ? /* @__PURE__ */ jsxs(Badge, { variant: "danger", children: [
              "-",
              product.discount,
              "%"
            ] }) : null,
            product.tags.includes("new") && /* @__PURE__ */ jsx(Badge, { variant: "info", children: "New" }),
            product.tags.includes("flash") && /* @__PURE__ */ jsxs(Badge, { variant: "gold", children: [
              /* @__PURE__ */ jsx(Zap, { size: 10, className: "inline" }),
              " Flash"
            ] }),
            product.stock < 10 && /* @__PURE__ */ jsx(Badge, { variant: "warning", children: "Low stock" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "absolute top-3 right-3 flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleWishlist,
                className: `p-2 rounded-full glass-strong shadow-soft transition-all hover:scale-110 ${wished ? "text-primary-500" : "text-ink-700 dark:text-ink-200"}`,
                "aria-label": "Add to wishlist",
                children: /* @__PURE__ */ jsx(Heart, { size: 16, className: wished ? "fill-primary-500" : "" })
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleCompare,
                className: `p-2 rounded-full glass-strong shadow-soft transition-all hover:scale-110 ${compared ? "text-primary-500" : "text-ink-700 dark:text-ink-200"}`,
                "aria-label": "Compare",
                children: /* @__PURE__ */ jsx(GitCompare, { size: 16 })
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleShare,
                className: "p-2 rounded-full glass-strong shadow-soft transition-all hover:scale-110 text-ink-700 dark:text-ink-200",
                "aria-label": "Share",
                children: /* @__PURE__ */ jsx(Share2, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 inset-x-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: handleAdd,
                className: "flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-semibold shadow-glow hover:shadow-premium transition-all",
                children: [
                  /* @__PURE__ */ jsx(ShoppingCart, { size: 16 }),
                  " Add"
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: `/product/${product.id}`,
                onClick: (e) => e.stopPropagation(),
                className: "px-3 py-2.5 rounded-2xl glass-strong text-ink-800 dark:text-ink-100 hover:bg-white transition-all",
                "aria-label": "Quick view",
                children: /* @__PURE__ */ jsx(Eye, { size: 16 })
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-wide text-ink-400", children: product.brand }),
            /* @__PURE__ */ jsx(Rating, { value: product.rating, reviews: product.reviews, size: 12 })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "font-medium text-ink-900 dark:text-ink-50 line-clamp-1 group-hover:text-primary-500 transition-colors", children: product.name }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-ink-400 capitalize line-clamp-1", children: product.category.replace("-", " & ") }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between pt-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-2", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-lg font-bold text-ink-900 dark:text-ink-50", children: [
                "$",
                product.price
              ] }),
              product.oldPrice && /* @__PURE__ */ jsxs("span", { className: "text-xs text-ink-400 line-through", children: [
                "$",
                product.oldPrice
              ] })
            ] }),
            /* @__PURE__ */ jsx("span", { className: `text-xs font-medium ${product.stock > 0 ? "text-emerald-500" : "text-red-500"}`, children: product.stock > 0 ? "In stock" : "Sold out" })
          ] })
        ] })
      ] }) })
    }
  );
}
