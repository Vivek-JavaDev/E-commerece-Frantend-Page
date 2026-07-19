import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs as defaultFaqs } from "../../data/products";
export function FAQAccordion({ items = defaultFaqs, title = "Frequently Asked Questions", subtitle }) {
  const [open, setOpen] = useState(0);
  return /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
      subtitle && /* @__PURE__ */ jsx("p", { className: "text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2", children: subtitle }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-ink-900 dark:text-ink-50", children: title })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: items.map((item) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "rounded-3xl glass border border-ink-100 dark:border-ink-800 overflow-hidden",
        children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setOpen(open === item.id ? null : item.id),
              className: "w-full flex items-center justify-between p-5 text-left",
              children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-ink-900 dark:text-ink-50", children: item.question }),
                /* @__PURE__ */ jsx(motion.span, { animate: { rotate: open === item.id ? 180 : 0 }, transition: { duration: 0.3 }, children: /* @__PURE__ */ jsx(ChevronDown, { size: 20, className: "text-primary-500" }) })
              ]
            }
          ),
          /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: open === item.id && /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: { duration: 0.3 },
              className: "overflow-hidden",
              children: /* @__PURE__ */ jsx("p", { className: "px-5 pb-5 text-ink-600 dark:text-ink-300", children: item.answer })
            }
          ) })
        ]
      },
      item.id
    )) })
  ] }) });
}
