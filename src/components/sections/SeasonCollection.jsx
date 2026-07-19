import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
export function SeasonCollection() {
  return /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6 },
      className: "relative rounded-[2.5rem] overflow-hidden min-h-[420px] flex items-center",
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://picsum.photos/seed/season-collection/1600/600",
            alt: "Season Collection",
            className: "absolute inset-0 w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/50 to-transparent" }),
        /* @__PURE__ */ jsxs("div", { className: "relative p-8 md:p-16 max-w-lg text-white", children: [
          /* @__PURE__ */ jsx("p", { className: "text-accent-400 font-semibold text-sm uppercase tracking-widest mb-3", children: "The Edit" }),
          /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-5xl font-bold mb-4 leading-tight", children: [
            "The Summer",
            /* @__PURE__ */ jsx("br", {}),
            "Collection 2026"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-ink-200 mb-7 max-w-md", children: "Discover 24 handpicked pieces that capture the season \u2014 breathable linens, sun-faded denims, and statement accessories." }),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/shop",
              className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white text-ink-900 font-semibold hover:bg-primary-500 hover:text-white transition-all group",
              children: [
                "Discover the edit ",
                /* @__PURE__ */ jsx(ArrowRight, { size: 18, className: "group-hover:translate-x-1 transition-transform" })
              ]
            }
          )
        ] })
      ]
    }
  ) }) });
}
