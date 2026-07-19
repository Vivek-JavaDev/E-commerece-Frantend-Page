import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Instagram, Heart } from "lucide-react";
const images = Array.from({ length: 6 }, (_, i) => `https://picsum.photos/seed/insta-${i + 1}/400/400`);
export function InstagramGallery() {
  return /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
      /* @__PURE__ */ jsxs("p", { className: "inline-flex items-center gap-2 text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2", children: [
        /* @__PURE__ */ jsx(Instagram, { size: 16 }),
        " @luxe.shopping"
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-ink-900 dark:text-ink-50", children: "Follow Our Story" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-ink-500", children: "Tag #LUXEStyle to be featured" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3", children: images.map((src, i) => /* @__PURE__ */ jsxs(
      motion.a,
      {
        href: "#",
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.4, delay: i * 0.05 },
        className: "relative aspect-square rounded-2xl overflow-hidden group",
        children: [
          /* @__PURE__ */ jsx("img", { src, alt: "Instagram", className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-ink-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center", children: /* @__PURE__ */ jsx(Heart, { size: 24, className: "text-white" }) })
        ]
      },
      i
    )) })
  ] }) });
}
