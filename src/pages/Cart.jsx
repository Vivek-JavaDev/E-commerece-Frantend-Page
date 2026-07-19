import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingBag, Tag, X, ArrowRight, Truck } from "lucide-react";
import { useCart, useToast } from "../context/AppContext";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { Button } from "../components/ui/Button";
import { coupons } from "../data/products";
export function Cart() {
  const { items, updateQuantity, removeFromCart, subtotal, discount, tax, shipping, total, coupon, applyCoupon, removeCoupon, count } = useCart();
  const { notify } = useToast();
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const handleApply = (e) => {
    e.preventDefault();
    if (applyCoupon(code.toUpperCase())) {
      notify("Coupon applied!", "success");
      setCode("");
    } else {
      notify("Invalid coupon code", "error");
    }
  };
  if (items.length === 0) {
    return /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-20 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex p-6 rounded-3xl bg-ink-50 dark:bg-ink-900 mb-6", children: /* @__PURE__ */ jsx(ShoppingBag, { size: 48, className: "text-ink-300" }) }),
      /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl font-bold text-ink-900 dark:text-ink-50 mb-3", children: "Your cart is empty" }),
      /* @__PURE__ */ jsx("p", { className: "text-ink-500 mb-6", children: "Looks like you haven't added anything yet." }),
      /* @__PURE__ */ jsxs(Link, { to: "/shop", className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold shadow-glow", children: [
        "Start Shopping ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsx(Breadcrumb, { items: [{ label: "Home", to: "/" }, { label: "Cart" }] }),
    /* @__PURE__ */ jsxs("h1", { className: "font-display text-3xl md:text-4xl font-bold text-ink-900 dark:text-ink-50 mt-4 mb-6", children: [
      "Shopping Cart ",
      /* @__PURE__ */ jsxs("span", { className: "text-ink-400 text-lg font-normal", children: [
        "(",
        count,
        " items)"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[1fr_380px] gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx(AnimatePresence, { children: items.map((item) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            layout: true,
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, x: -50 },
            className: "flex gap-4 p-4 rounded-3xl glass border border-ink-100 dark:border-ink-800",
            children: [
              /* @__PURE__ */ jsx(Link, { to: `/product/${item.product.id}`, className: "shrink-0", children: /* @__PURE__ */ jsx("img", { src: item.product.images[0], alt: item.product.name, className: "w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover" }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wide text-ink-400", children: item.product.brand }),
                    /* @__PURE__ */ jsx(Link, { to: `/product/${item.product.id}`, className: "font-semibold text-ink-900 dark:text-ink-50 hover:text-primary-500 transition-colors line-clamp-1", children: item.product.name }),
                    /* @__PURE__ */ jsxs("div", { className: "mt-1 flex flex-wrap gap-2 text-xs text-ink-500", children: [
                      item.color && /* @__PURE__ */ jsxs("span", { children: [
                        "Color: ",
                        item.color
                      ] }),
                      item.size && /* @__PURE__ */ jsxs("span", { children: [
                        "Size: ",
                        item.size
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => {
                        removeFromCart(item.product.id);
                        notify("Removed from cart", "info");
                      },
                      className: "p-2 text-ink-400 hover:text-red-500 transition-colors",
                      children: /* @__PURE__ */ jsx(Trash2, { size: 18 })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center border border-ink-200 dark:border-ink-700 rounded-2xl", children: [
                    /* @__PURE__ */ jsx("button", { onClick: () => updateQuantity(item.product.id, item.quantity - 1), className: "p-2 text-ink-500 hover:text-primary-500", children: /* @__PURE__ */ jsx(Minus, { size: 16 }) }),
                    /* @__PURE__ */ jsx("span", { className: "w-10 text-center text-sm font-semibold", children: item.quantity }),
                    /* @__PURE__ */ jsx("button", { onClick: () => updateQuantity(item.product.id, item.quantity + 1), className: "p-2 text-ink-500 hover:text-primary-500", children: /* @__PURE__ */ jsx(Plus, { size: 16 }) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                    /* @__PURE__ */ jsxs("p", { className: "font-bold text-ink-900 dark:text-ink-50", children: [
                      "$",
                      (item.product.price * item.quantity).toFixed(2)
                    ] }),
                    item.product.oldPrice && /* @__PURE__ */ jsxs("p", { className: "text-xs text-ink-400 line-through", children: [
                      "$",
                      (item.product.oldPrice * item.quantity).toFixed(2)
                    ] })
                  ] })
                ] })
              ] })
            ]
          },
          `${item.product.id}-${item.color}-${item.size}`
        )) }),
        /* @__PURE__ */ jsx(Link, { to: "/shop", className: "inline-flex items-center gap-2 text-sm font-semibold text-primary-500 hover:gap-3 transition-all", children: "\u2190 Continue Shopping" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:sticky lg:top-28 self-start", children: /* @__PURE__ */ jsxs("div", { className: "rounded-3xl glass-strong border border-ink-100 dark:border-ink-800 p-6 space-y-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-xl font-bold text-ink-900 dark:text-ink-50", children: "Order Summary" }),
        /* @__PURE__ */ jsxs("div", { children: [
          coupon ? /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Tag, { size: 16, className: "text-emerald-500" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-emerald-700 dark:text-emerald-300", children: coupon })
            ] }),
            /* @__PURE__ */ jsx("button", { onClick: () => {
              removeCoupon();
              notify("Coupon removed", "info");
            }, className: "p-1 text-emerald-700 dark:text-emerald-300 hover:text-red-500", children: /* @__PURE__ */ jsx(X, { size: 16 }) })
          ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleApply, className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                value: code,
                onChange: (e) => setCode(e.target.value),
                placeholder: "Promo code",
                className: "flex-1 px-4 py-2.5 rounded-2xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50"
              }
            ),
            /* @__PURE__ */ jsx(Button, { type: "submit", variant: "secondary", size: "md", children: "Apply" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 flex flex-wrap gap-1.5", children: Object.values(coupons).map((c) => /* @__PURE__ */ jsx("button", { onClick: () => {
            applyCoupon(c.code);
            notify(`${c.code} applied`, "success");
          }, className: "text-xs px-2 py-1 rounded-full bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors", children: c.code }, c.code)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm border-t border-ink-100 dark:border-ink-800 pt-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-ink-500", children: "Subtotal" }),
            /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
              "$",
              subtotal.toFixed(2)
            ] })
          ] }),
          discount > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-emerald-500", children: [
            /* @__PURE__ */ jsx("span", { children: "Discount" }),
            /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
              "-$",
              discount.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-ink-500", children: "Shipping" }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: shipping === 0 ? "Free" : `$${shipping.toFixed(2)}` })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-ink-500", children: "Tax (8%)" }),
            /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
              "$",
              tax.toFixed(2)
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-baseline border-t border-ink-100 dark:border-ink-800 pt-4", children: [
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-ink-900 dark:text-ink-50", children: "Total" }),
          /* @__PURE__ */ jsxs("span", { className: "font-display text-3xl font-bold gradient-text", children: [
            "$",
            total.toFixed(2)
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Button, { onClick: () => navigate("/checkout"), fullWidth: true, size: "lg", children: [
          "Proceed to Checkout ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-xs text-ink-500 pt-2", children: [
          /* @__PURE__ */ jsx(Truck, { size: 14 }),
          " Free shipping on orders over $75"
        ] })
      ] }) })
    ] })
  ] });
}
