import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Package, Truck, CheckCircle2, Clock, ShoppingBag } from "lucide-react";
import { useAuth } from "../context/AppContext";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { Badge } from "../components/ui/Badge";
const statusConfig = {
  Processing: { icon: Clock, color: "warning", label: "Processing" },
  Shipped: { icon: Truck, color: "info", label: "Shipped" },
  Delivered: { icon: CheckCircle2, color: "success", label: "Delivered" },
  Cancelled: { icon: Package, color: "danger", label: "Cancelled" }
};
export function MyOrders() {
  const { user, orders } = useAuth();
  if (!user) {
    return /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 py-20 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-ink-500 mb-4", children: "Please sign in to view your orders." }),
      /* @__PURE__ */ jsx(Link, { to: "/login", className: "text-primary-500 font-semibold", children: "Sign in \u2192" })
    ] });
  }
  if (orders.length === 0) {
    return /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 py-20 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex p-6 rounded-3xl bg-ink-50 dark:bg-ink-900 mb-6", children: /* @__PURE__ */ jsx(Package, { size: 48, className: "text-ink-300" }) }),
      /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl font-bold text-ink-900 dark:text-ink-50 mb-3", children: "No orders yet" }),
      /* @__PURE__ */ jsx("p", { className: "text-ink-500 mb-6", children: "When you place an order, it will appear here." }),
      /* @__PURE__ */ jsxs(Link, { to: "/shop", className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold shadow-glow", children: [
        /* @__PURE__ */ jsx(ShoppingBag, { size: 18 }),
        " Start Shopping"
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsx(Breadcrumb, { items: [{ label: "Home", to: "/" }, { label: "My Orders" }] }),
    /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl font-bold text-ink-900 dark:text-ink-50 mt-4 mb-6", children: "My Orders" }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: orders.map((order, i) => {
      const cfg = statusConfig[order.status];
      return /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3, delay: i * 0.05 },
          className: "rounded-3xl glass-strong border border-ink-100 dark:border-ink-800 p-5",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3 mb-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs text-ink-400 uppercase tracking-wider", children: "Order" }),
                /* @__PURE__ */ jsx("p", { className: "font-display text-lg font-bold text-ink-900 dark:text-ink-50", children: order.id }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-ink-500", children: new Date(order.date).toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" }) })
              ] }),
              /* @__PURE__ */ jsxs(Badge, { variant: cfg.color, children: [
                /* @__PURE__ */ jsx(cfg.icon, { size: 12, className: "inline" }),
                " ",
                cfg.label
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex gap-3 overflow-x-auto no-scrollbar pb-2", children: order.items.map((item) => /* @__PURE__ */ jsxs(Link, { to: `/product/${item.product.id}`, className: "flex-shrink-0 w-20", children: [
              /* @__PURE__ */ jsx("img", { src: item.product.images[0], alt: item.product.name, className: "w-20 h-20 rounded-2xl object-cover" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-ink-500 mt-1 line-clamp-1", children: item.product.name }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs font-semibold", children: [
                "\xD7",
                item.quantity
              ] })
            ] }, `${item.product.id}-${item.color}-${item.size}`)) }),
            /* @__PURE__ */ jsxs("div", { className: "mt-4 pt-4 border-t border-ink-100 dark:border-ink-800 flex items-center justify-between flex-wrap gap-2", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs text-ink-500", children: "Shipping to" }),
                /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium text-ink-800 dark:text-ink-200", children: [
                  order.address.city,
                  ", ",
                  order.address.country
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs text-ink-500", children: "Total" }),
                /* @__PURE__ */ jsxs("p", { className: "font-display text-xl font-bold gradient-text", children: [
                  "$",
                  order.total.toFixed(2)
                ] })
              ] })
            ] })
          ]
        },
        order.id
      );
    }) })
  ] });
}
