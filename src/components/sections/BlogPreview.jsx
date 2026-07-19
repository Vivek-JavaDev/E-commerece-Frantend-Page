import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "../../data/products";
export function BlogPreview() {
  return /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-8 gap-4 flex-wrap", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2", children: "From the Journal" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-ink-900 dark:text-ink-50", children: "Style Stories & Guides" })
      ] }),
      /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-1.5 text-sm font-semibold text-primary-500 hover:gap-2.5 transition-all", children: [
        "View all ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: blogPosts.map((post, i) => /* @__PURE__ */ jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4, delay: i * 0.1 },
        className: "group rounded-3xl overflow-hidden glass border border-ink-100 dark:border-ink-800 shadow-soft hover:shadow-premium transition-all",
        children: [
          /* @__PURE__ */ jsx("div", { className: "aspect-[16/10] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: post.image, alt: post.title, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" }) }),
          /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-xs text-ink-500 mb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "px-2.5 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 font-semibold", children: post.category }),
              /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(Calendar, { size: 12 }),
                " ",
                new Date(post.date).toLocaleDateString("en", { month: "short", day: "numeric" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold text-ink-900 dark:text-ink-50 mb-2 line-clamp-2 group-hover:text-primary-500 transition-colors", children: post.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-ink-500 line-clamp-2", children: post.excerpt }),
            /* @__PURE__ */ jsxs("p", { className: "mt-3 text-xs text-ink-400", children: [
              "By ",
              post.author
            ] })
          ] })
        ]
      },
      post.id
    )) })
  ] }) });
}
