import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { HelpCircle, Mail } from "lucide-react";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { FAQAccordion } from "../components/sections/FAQAccordion";
import { Newsletter } from "../components/sections/Newsletter";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
export function FAQ() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsx(Breadcrumb, { items: [{ label: "Home", to: "/" }, { label: "FAQ" }] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 mb-10 text-center", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { scale: 0 },
            animate: { scale: 1 },
            className: "inline-flex p-5 rounded-3xl bg-gradient-to-br from-primary-500 to-accent-500 text-white mb-4",
            children: /* @__PURE__ */ jsx(HelpCircle, { size: 32 })
          }
        ),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold text-ink-900 dark:text-ink-50", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsx("p", { className: "text-ink-500 mt-2 max-w-xl mx-auto", children: "Everything you need to know about shopping with LUXE." })
      ] })
    ] }),
    /* @__PURE__ */ jsx(FAQAccordion, { subtitle: "Got questions?", title: "We've got answers" }),
    /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto px-4 pb-16 text-center", children: /* @__PURE__ */ jsxs("div", { className: "rounded-3xl glass-strong border border-ink-100 dark:border-ink-800 p-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-ink-900 dark:text-ink-50 mb-2", children: "Still have questions?" }),
      /* @__PURE__ */ jsx("p", { className: "text-ink-500 mb-5", children: "Our concierge team is available 24/7 to help you." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxs(Button, { children: [
          /* @__PURE__ */ jsx(Mail, { size: 16 }),
          " Contact Support"
        ] }) }),
        /* @__PURE__ */ jsx("a", { href: "mailto:support@luxe.shopping", className: "text-primary-500 font-semibold hover:underline", children: "support@luxe.shopping" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Newsletter, {})
  ] });
}
