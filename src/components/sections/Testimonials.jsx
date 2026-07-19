import { jsx, jsxs } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";
import { testimonials } from "../../data/products";
import { Rating } from "../ui/Rating";
import "swiper/css";
import "swiper/css/pagination";
export function Testimonials() {
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-ink-50 dark:bg-ink-950/50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
      /* @__PURE__ */ jsx("p", { className: "text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2", children: "Loved by Thousands" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-ink-900 dark:text-ink-50", children: "What Our Customers Say" })
    ] }),
    /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Autoplay, Pagination],
        spaceBetween: 24,
        slidesPerView: 1,
        autoplay: { delay: 5e3 },
        pagination: { clickable: true },
        breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
        className: "!pb-12",
        children: testimonials.map((t) => /* @__PURE__ */ jsx(SwiperSlide, { className: "h-auto", children: /* @__PURE__ */ jsxs("div", { className: "h-full rounded-3xl glass-strong p-6 border border-ink-100 dark:border-ink-800 shadow-soft", children: [
          /* @__PURE__ */ jsx(Quote, { size: 28, className: "text-primary-500/40 mb-3" }),
          /* @__PURE__ */ jsx(Rating, { value: t.rating, size: 16 }),
          /* @__PURE__ */ jsxs("p", { className: "mt-4 text-ink-700 dark:text-ink-200 italic", children: [
            '"',
            t.text,
            '"'
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("img", { src: t.avatar, alt: t.name, className: "w-11 h-11 rounded-full object-cover" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-ink-900 dark:text-ink-50", children: t.name }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-ink-500", children: t.role })
            ] })
          ] })
        ] }) }, t.id))
      }
    )
  ] }) });
}
