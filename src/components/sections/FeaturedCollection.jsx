import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
export function FeaturedCollection() {
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-ink-50 dark:bg-ink-950/50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-5", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "relative rounded-3xl overflow-hidden aspect-[4/3] group",
        children: [
          /* @__PURE__ */ jsx("img", { src: "https://picsum.photos/seed/fashion-banner/800/600", alt: "Fashion", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-primary-900/80 via-primary-700/40 to-transparent" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 p-8 flex flex-col justify-end text-white", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-primary-200 mb-2", children: "Fashion Forward" }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl font-bold mb-2", children: "Wardrobe Essentials" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-ink-100 mb-4 max-w-xs", children: "Timeless pieces for the modern wardrobe." }),
            /* @__PURE__ */ jsxs(Link, { to: "/category/fashion", className: "inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all", children: [
              "Shop Fashion ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "relative rounded-3xl overflow-hidden aspect-[4/3] group",
        children: [
          /* @__PURE__ */ jsx("img", { src: "https://picsum.photos/seed/tech-banner/800/600", alt: "Tech", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-accent-900/80 via-accent-700/40 to-transparent" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 p-8 flex flex-col justify-end text-white", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-accent-200 mb-2", children: "Future Ready" }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl font-bold mb-2", children: "Tech That Inspires" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-ink-100 mb-4 max-w-xs", children: "Smart devices for a smarter life." }),
            /* @__PURE__ */ jsxs(Link, { to: "/category/electronics", className: "inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all", children: [
              "Shop Tech ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
            ] })
          ] })
        ]
      }
    )
  ] }) });
}
