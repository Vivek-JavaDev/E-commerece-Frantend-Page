import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { heroSlides } from "../../data/products";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
export function Hero() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % heroSlides.length), 6e3);
    return () => clearInterval(t);
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: "relative", children: [
    /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Autoplay, Pagination, EffectFade],
        effect: "fade",
        autoplay: { delay: 6e3, disableOnInteraction: false },
        pagination: { clickable: true },
        onSlideChange: (s) => setActive(s.activeIndex),
        className: "h-[78vh] min-h-[520px] max-h-[760px]",
        children: heroSlides.map((slide) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { className: "relative h-full w-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
            /* @__PURE__ */ jsx("img", { src: slide.image, alt: slide.title, className: "w-full h-full object-cover" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-ink-950/80 via-ink-950/40 to-transparent" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "relative h-full max-w-7xl mx-auto px-4 flex items-center", children: /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 30 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "max-w-xl text-white",
              children: [
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-strong text-xs font-semibold uppercase tracking-wider mb-5", children: [
                  /* @__PURE__ */ jsx(Sparkles, { size: 14, className: "text-accent-400" }),
                  " ",
                  slide.badge
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-primary-300 font-semibold text-lg md:text-xl mb-2 font-display", children: slide.subtitle }),
                /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5", children: slide.title }),
                /* @__PURE__ */ jsx("p", { className: "text-ink-200 text-base md:text-lg mb-8 max-w-md", children: slide.description }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3", children: [
                  /* @__PURE__ */ jsxs(
                    Link,
                    {
                      to: slide.link,
                      className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold shadow-glow hover:shadow-premium transition-all group",
                      children: [
                        slide.cta,
                        /* @__PURE__ */ jsx(ArrowRight, { size: 18, className: "group-hover:translate-x-1 transition-transform" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: "/shop",
                      className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl glass-strong text-white font-semibold hover:bg-white/20 transition-all",
                      children: "Explore All"
                    }
                  )
                ] })
              ]
            },
            active
          ) })
        ] }) }, slide.id))
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 right-4 hidden md:flex gap-3 z-10", children: [
      { label: "Products", value: "90+" },
      { label: "Brands", value: "40+" },
      { label: "Happy Customers", value: "120K+" }
    ].map((s, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.5 + i * 0.1 },
        className: "glass-strong rounded-2xl px-5 py-3 text-white text-center",
        children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-2xl font-bold", children: s.value }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-ink-300 uppercase tracking-wider", children: s.label })
        ]
      },
      i
    )) })
  ] });
}
