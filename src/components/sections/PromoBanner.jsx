import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { banners } from "../../data/products";
export function PromoBanner() {
  return /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-5", children: banners.map((b, i) => /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: i * 0.1 },
      children: /* @__PURE__ */ jsxs(
        Link,
        {
          to: b.link,
          className: "group relative block aspect-[4/3] rounded-3xl overflow-hidden shadow-soft hover:shadow-premium transition-all",
          children: [
            /* @__PURE__ */ jsx("img", { src: b.image, alt: b.title, className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" }),
            /* @__PURE__ */ jsx("div", { className: `absolute inset-0 bg-gradient-to-tr ${b.accent} opacity-80 mix-blend-multiply` }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" }),
            /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 p-6 flex flex-col justify-end text-white", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest opacity-90 mb-1", children: b.subtitle }),
              /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold mb-1", children: b.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm opacity-90 mb-3", children: b.description }),
              /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all", children: [
                "Shop now ",
                /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
              ] })
            ] })
          ]
        }
      )
    },
    b.id
  )) }) }) });
}
