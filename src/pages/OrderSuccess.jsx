import { jsx, jsxs } from "react/jsx-runtime";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, Package, Truck, Mail, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/Button";
export function OrderSuccess() {
  const { state } = useLocation();
  const order = state?.order;
  return /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 py-16 text-center", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { scale: 0, rotate: -180 },
        animate: { scale: 1, rotate: 0 },
        transition: { type: "spring", stiffness: 200, damping: 15 },
        className: "inline-flex p-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-premium mb-6",
        children: /* @__PURE__ */ jsx(CheckCircle2, { size: 56, className: "text-white" })
      }
    ),
    /* @__PURE__ */ jsx(
      motion.h1,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.2 },
        className: "font-display text-3xl md:text-4xl font-bold text-ink-900 dark:text-ink-50 mb-3",
        children: "Thank You for Your Order!"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.p,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.3 },
        className: "text-ink-500 mb-8",
        children: "Your order has been placed successfully. We've sent a confirmation email with all the details."
      }
    ),
    order && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.4 },
        className: "rounded-3xl glass-strong border border-ink-100 dark:border-ink-800 p-6 text-left space-y-4 mb-8",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs text-ink-400 uppercase tracking-wider", children: "Order Number" }),
              /* @__PURE__ */ jsx("p", { className: "font-display text-xl font-bold text-ink-900 dark:text-ink-50", children: order.id })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-semibold", children: order.status })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "border-t border-ink-100 dark:border-ink-800 pt-4 space-y-3", children: order.items.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx("img", { src: item.product.images[0], alt: item.product.name, className: "w-14 h-14 rounded-xl object-cover" }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-ink-900 dark:text-ink-50", children: item.product.name }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-ink-500", children: [
                "Qty ",
                item.quantity,
                " \xB7 ",
                item.color,
                " ",
                item.size && `\xB7 ${item.size}`
              ] })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm font-semibold", children: [
              "$",
              (item.product.price * item.quantity).toFixed(2)
            ] })
          ] }, `${item.product.id}-${item.color}-${item.size}`)) }),
          /* @__PURE__ */ jsxs("div", { className: "border-t border-ink-100 dark:border-ink-800 pt-4 flex justify-between items-baseline", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Total Paid" }),
            /* @__PURE__ */ jsxs("span", { className: "font-display text-2xl font-bold gradient-text", children: [
              "$",
              order.total.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-t border-ink-100 dark:border-ink-800 pt-4 text-sm text-ink-500", children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-ink-700 dark:text-ink-200 mb-1", children: "Shipping to:" }),
            /* @__PURE__ */ jsxs("p", { children: [
              order.address.name,
              ", ",
              order.address.line1,
              ", ",
              order.address.city,
              " ",
              order.address.zip,
              ", ",
              order.address.country
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.5 },
        className: "flex items-center justify-center gap-4 mb-8 flex-wrap",
        children: [
          { icon: CheckCircle2, label: "Order Placed", active: true },
          { icon: Package, label: "Processing", active: false },
          { icon: Truck, label: "Shipped", active: false },
          { icon: Mail, label: "Delivered", active: false }
        ].map((s, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: `p-3 rounded-2xl ${s.active ? "bg-emerald-500 text-white" : "bg-ink-100 dark:bg-ink-800 text-ink-400"}`, children: /* @__PURE__ */ jsx(s.icon, { size: 18 }) }),
          /* @__PURE__ */ jsx("span", { className: `text-sm font-medium ${s.active ? "text-emerald-600 dark:text-emerald-400" : "text-ink-400"}`, children: s.label }),
          i < 3 && /* @__PURE__ */ jsx("div", { className: "w-6 h-px bg-ink-200 dark:bg-ink-700 mx-1" })
        ] }, i))
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsx(Link, { to: "/orders", children: /* @__PURE__ */ jsxs(Button, { variant: "primary", size: "lg", children: [
        "View My Orders ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
      ] }) }),
      /* @__PURE__ */ jsx(Link, { to: "/shop", children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "lg", children: "Continue Shopping" }) })
    ] })
  ] });
}
