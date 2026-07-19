import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Sparkles, Heart, Globe, Award, Users, Leaf } from "lucide-react";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { PartnerBrands } from "../components/sections/PartnerBrands";
import { Newsletter } from "../components/sections/Newsletter";
const values = [
  { icon: Heart, title: "Crafted with Love", description: "Every product is selected with intention and care." },
  { icon: Award, title: "Uncompromising Quality", description: "We partner only with brands that meet our standards." },
  { icon: Leaf, title: "Sustainable", description: "Ethically sourced, responsibly delivered." },
  { icon: Globe, title: "Global Reach", description: "Shipping to 80+ countries worldwide." },
  { icon: Users, title: "Community First", description: "A circle of 120,000+ discerning customers." },
  { icon: Sparkles, title: "Curated, Not Crowded", description: "Quality over quantity, always." }
];
export function About() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsx(Breadcrumb, { items: [{ label: "Home", to: "/" }, { label: "About Us" }] }),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          className: "relative rounded-[2.5rem] overflow-hidden aspect-[16/7] mt-4 mb-12",
          children: [
            /* @__PURE__ */ jsx("img", { src: "https://picsum.photos/seed/about-hero/1600/700", alt: "About LUXE", className: "absolute inset-0 w-full h-full object-cover" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/60 to-transparent" }),
            /* @__PURE__ */ jsx("div", { className: "relative h-full flex items-center px-8 md:px-16 text-white max-w-2xl", children: /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-primary-300 font-semibold text-sm uppercase tracking-wider mb-3", children: "Our Story" }),
              /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl md:text-6xl font-bold mb-4 leading-tight", children: "Curating Luxury, Democratizing Style" }),
              /* @__PURE__ */ jsx("p", { className: "text-ink-200 text-lg", children: "Founded in 2020, LUXE was born from a simple belief: premium quality should be accessible, beautiful, and effortless." })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-16", children: [
        { value: "90+", label: "Premium Products" },
        { value: "40+", label: "Brand Partners" },
        { value: "120K+", label: "Happy Customers" },
        { value: "80+", label: "Countries Served" }
      ].map((s, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          className: "text-center p-6 rounded-3xl glass border border-ink-100 dark:border-ink-800",
          children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-4xl font-bold gradient-text", children: s.value }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-ink-500 mt-1 uppercase tracking-wider", children: s.label })
          ]
        },
        i
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 mb-16 items-center", children: [
        /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, children: [
          /* @__PURE__ */ jsx("p", { className: "text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2", children: "Our Mission" }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-ink-900 dark:text-ink-50 mb-4", children: "Bringing Premium Within Reach" }),
          /* @__PURE__ */ jsx("p", { className: "text-ink-600 dark:text-ink-300 leading-relaxed mb-4", children: "We believe that luxury isn't about price tags \u2014 it's about craftsmanship, attention to detail, and the feeling of owning something truly special. Our team of curators scours the globe to bring you products that tell a story." }),
          /* @__PURE__ */ jsx("p", { className: "text-ink-600 dark:text-ink-300 leading-relaxed", children: "From the ateliers of Paris to the workshops of Kyoto, every item in our collection has been chosen for its quality, its heritage, and its ability to elevate the everyday." })
        ] }),
        /* @__PURE__ */ jsx(motion.div, { initial: { opacity: 0, x: 20 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, className: "rounded-3xl overflow-hidden aspect-[4/3]", children: /* @__PURE__ */ jsx("img", { src: "https://picsum.photos/seed/about-mission/800/600", alt: "Mission", className: "w-full h-full object-cover" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
          /* @__PURE__ */ jsx("p", { className: "text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2", children: "What We Stand For" }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-ink-900 dark:text-ink-50", children: "Our Values" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: values.map((v, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.05 },
            className: "p-6 rounded-3xl glass border border-ink-100 dark:border-ink-800 hover:shadow-premium transition-all",
            children: [
              /* @__PURE__ */ jsx("div", { className: "inline-flex p-3 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 text-primary-500 mb-4", children: /* @__PURE__ */ jsx(v.icon, { size: 24 }) }),
              /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold text-ink-900 dark:text-ink-50 mb-2", children: v.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-ink-500", children: v.description })
            ]
          },
          i
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(PartnerBrands, {}),
    /* @__PURE__ */ jsx(Newsletter, {})
  ] });
}
