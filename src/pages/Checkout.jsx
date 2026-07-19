import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CreditCard, Wallet, Apple, MapPin, ArrowLeft, ShieldCheck } from "lucide-react";
import { useCart, useAuth, useToast } from "../context/AppContext";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
export function Checkout() {
  const { items, subtotal, discount, tax, shipping, total, clearCart, coupon } = useCart();
  const { user, addOrder } = useAuth();
  const { notify } = useToast();
  const navigate = useNavigate();
  const [step, setStep] = useState("info");
  const [payment, setPayment] = useState("card");
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    line1: "",
    city: "",
    zip: "",
    country: "United States",
    billingLine1: "",
    billingCity: "",
    billingZip: "",
    billingCountry: "United States",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });
  if (items.length === 0) {
    return /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 py-20 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-ink-500 mb-4", children: "Your cart is empty." }),
      /* @__PURE__ */ jsx(Link, { to: "/shop", className: "text-primary-500 font-semibold", children: "Browse products \u2192" })
    ] });
  }
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const submitInfo = (e) => {
    e.preventDefault();
    setStep("payment");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const submitPayment = (e) => {
    e.preventDefault();
    const order = {
      id: "ORD-" + Date.now().toString().slice(-8),
      items: [...items],
      total,
      status: "Processing",
      date: (/* @__PURE__ */ new Date()).toISOString(),
      address: { name: form.name, line1: form.line1, city: form.city, zip: form.zip, country: form.country },
      payment: payment === "card" ? "Credit Card" : payment === "apple" ? "Apple Pay" : payment === "wallet" ? "Digital Wallet" : "Klarna"
    };
    addOrder(order);
    clearCart();
    notify("Order placed successfully!", "success");
    navigate("/order-success", { state: { order } });
  };
  return /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsx(Breadcrumb, { items: [{ label: "Home", to: "/" }, { label: "Cart", to: "/cart" }, { label: "Checkout" }] }),
    /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl font-bold text-ink-900 dark:text-ink-50 mt-4 mb-6", children: "Checkout" }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 mb-8", children: [
      { id: "info", label: "Shipping Info", icon: MapPin },
      { id: "payment", label: "Payment", icon: CreditCard }
    ].map((s, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxs("div", { className: `flex items-center gap-2 px-4 py-2.5 rounded-2xl ${step === s.id ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white" : "bg-ink-100 dark:bg-ink-800 text-ink-500"}`, children: [
        /* @__PURE__ */ jsx(s.icon, { size: 18 }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold", children: s.label })
      ] }),
      i < 1 && /* @__PURE__ */ jsx("div", { className: "w-8 h-px bg-ink-200 dark:bg-ink-700" })
    ] }, s.id)) }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[1fr_380px] gap-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        step === "info" && /* @__PURE__ */ jsxs(
          motion.form,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            onSubmit: submitInfo,
            className: "space-y-6",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "rounded-3xl glass-strong border border-ink-100 dark:border-ink-800 p-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "font-display text-xl font-bold mb-4 text-ink-900 dark:text-ink-50", children: "Contact Information" }),
                /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsx(Input, { label: "Full Name", required: true, value: form.name, onChange: (e) => set("name", e.target.value) }),
                  /* @__PURE__ */ jsx(Input, { label: "Email", type: "email", required: true, value: form.email, onChange: (e) => set("email", e.target.value) }),
                  /* @__PURE__ */ jsx(Input, { label: "Phone", required: true, value: form.phone, onChange: (e) => set("phone", e.target.value) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "rounded-3xl glass-strong border border-ink-100 dark:border-ink-800 p-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "font-display text-xl font-bold mb-4 text-ink-900 dark:text-ink-50", children: "Shipping Address" }),
                /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsx(Input, { label: "Street Address", required: true, value: form.line1, onChange: (e) => set("line1", e.target.value) }) }),
                  /* @__PURE__ */ jsx(Input, { label: "City", required: true, value: form.city, onChange: (e) => set("city", e.target.value) }),
                  /* @__PURE__ */ jsx(Input, { label: "ZIP / Postal Code", required: true, value: form.zip, onChange: (e) => set("zip", e.target.value) }),
                  /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
                    /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-ink-700 dark:text-ink-200 mb-1.5", children: "Country" }),
                    /* @__PURE__ */ jsxs("select", { value: form.country, onChange: (e) => set("country", e.target.value), className: "w-full rounded-2xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50", children: [
                      /* @__PURE__ */ jsx("option", { children: "United States" }),
                      /* @__PURE__ */ jsx("option", { children: "United Kingdom" }),
                      /* @__PURE__ */ jsx("option", { children: "France" }),
                      /* @__PURE__ */ jsx("option", { children: "Germany" }),
                      /* @__PURE__ */ jsx("option", { children: "Canada" }),
                      /* @__PURE__ */ jsx("option", { children: "Australia" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("label", { className: "mt-4 flex items-center gap-2 cursor-pointer", children: [
                  /* @__PURE__ */ jsx("input", { type: "checkbox", checked: sameAsShipping, onChange: (e) => setSameAsShipping(e.target.checked), className: "w-4 h-4 rounded accent-primary-500" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-ink-600 dark:text-ink-300", children: "Billing address same as shipping" })
                ] })
              ] }),
              !sameAsShipping && /* @__PURE__ */ jsxs("div", { className: "rounded-3xl glass-strong border border-ink-100 dark:border-ink-800 p-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "font-display text-xl font-bold mb-4 text-ink-900 dark:text-ink-50", children: "Billing Address" }),
                /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsx(Input, { label: "Street Address", required: true, value: form.billingLine1, onChange: (e) => set("billingLine1", e.target.value) }) }),
                  /* @__PURE__ */ jsx(Input, { label: "City", required: true, value: form.billingCity, onChange: (e) => set("billingCity", e.target.value) }),
                  /* @__PURE__ */ jsx(Input, { label: "ZIP", required: true, value: form.billingZip, onChange: (e) => set("billingZip", e.target.value) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs(Link, { to: "/cart", className: "inline-flex items-center gap-2 text-sm font-semibold text-ink-600 dark:text-ink-300 hover:text-primary-500", children: [
                  /* @__PURE__ */ jsx(ArrowLeft, { size: 16 }),
                  " Back to Cart"
                ] }),
                /* @__PURE__ */ jsx(Button, { type: "submit", size: "lg", children: "Continue to Payment" })
              ] })
            ]
          }
        ),
        step === "payment" && /* @__PURE__ */ jsxs(
          motion.form,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            onSubmit: submitPayment,
            className: "space-y-6",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "rounded-3xl glass-strong border border-ink-100 dark:border-ink-800 p-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "font-display text-xl font-bold mb-4 text-ink-900 dark:text-ink-50", children: "Payment Method" }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
                  { id: "card", label: "Credit Card", icon: CreditCard },
                  { id: "apple", label: "Apple Pay", icon: Apple },
                  { id: "wallet", label: "Wallet", icon: Wallet },
                  { id: "klarna", label: "Klarna", icon: Wallet }
                ].map((m) => /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setPayment(m.id),
                    className: `flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${payment === m.id ? "border-primary-500 bg-primary-50 dark:bg-primary-900/30" : "border-ink-200 dark:border-ink-700 hover:border-primary-300"}`,
                    children: [
                      /* @__PURE__ */ jsx(m.icon, { size: 22, className: payment === m.id ? "text-primary-500" : "text-ink-500" }),
                      /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold", children: m.label })
                    ]
                  },
                  m.id
                )) }),
                payment === "card" && /* @__PURE__ */ jsxs("div", { className: "mt-5 grid sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsx(Input, { label: "Name on Card", required: true, value: form.cardName, onChange: (e) => set("cardName", e.target.value) }) }),
                  /* @__PURE__ */ jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsx(Input, { label: "Card Number", required: true, placeholder: "0000 0000 0000 0000", value: form.cardNumber, onChange: (e) => set("cardNumber", e.target.value) }) }),
                  /* @__PURE__ */ jsx(Input, { label: "Expiry", required: true, placeholder: "MM/YY", value: form.expiry, onChange: (e) => set("expiry", e.target.value) }),
                  /* @__PURE__ */ jsx(Input, { label: "CVV", required: true, placeholder: "123", value: form.cvv, onChange: (e) => set("cvv", e.target.value) })
                ] }),
                payment !== "card" && /* @__PURE__ */ jsxs("div", { className: "mt-5 p-5 rounded-2xl bg-ink-50 dark:bg-ink-900 text-center text-sm text-ink-500", children: [
                  "You will be redirected to ",
                  payment === "apple" ? "Apple Pay" : payment === "wallet" ? "your digital wallet" : "Klarna",
                  " to complete the payment securely."
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs("button", { onClick: () => setStep("info"), className: "inline-flex items-center gap-2 text-sm font-semibold text-ink-600 dark:text-ink-300 hover:text-primary-500", children: [
                  /* @__PURE__ */ jsx(ArrowLeft, { size: 16 }),
                  " Back"
                ] }),
                /* @__PURE__ */ jsxs(Button, { type: "submit", size: "lg", variant: "gold", children: [
                  "Place Order \xB7 $",
                  total.toFixed(2)
                ] })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:sticky lg:top-28 self-start", children: /* @__PURE__ */ jsxs("div", { className: "rounded-3xl glass-strong border border-ink-100 dark:border-ink-800 p-6 space-y-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-xl font-bold text-ink-900 dark:text-ink-50", children: "Order Summary" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 max-h-72 overflow-y-auto no-scrollbar", children: items.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx("img", { src: item.product.images[0], alt: item.product.name, className: "w-14 h-14 rounded-xl object-cover" }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-ink-900 dark:text-ink-50 line-clamp-1", children: item.product.name }),
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
        /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm border-t border-ink-100 dark:border-ink-800 pt-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-ink-500", children: "Subtotal" }),
            /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
              "$",
              subtotal.toFixed(2)
            ] })
          ] }),
          discount > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-emerald-500", children: [
            /* @__PURE__ */ jsxs("span", { children: [
              "Discount ",
              coupon && `(${coupon})`
            ] }),
            /* @__PURE__ */ jsxs("span", { children: [
              "-$",
              discount.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-ink-500", children: "Shipping" }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: shipping === 0 ? "Free" : `$${shipping.toFixed(2)}` })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-ink-500", children: "Tax" }),
            /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
              "$",
              tax.toFixed(2)
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-baseline border-t border-ink-100 dark:border-ink-800 pt-4", children: [
          /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Total" }),
          /* @__PURE__ */ jsxs("span", { className: "font-display text-3xl font-bold gradient-text", children: [
            "$",
            total.toFixed(2)
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-xs text-ink-500 pt-2", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { size: 14, className: "text-emerald-500" }),
          " 256-bit SSL encrypted checkout"
        ] })
      ] }) })
    ] })
  ] });
}
