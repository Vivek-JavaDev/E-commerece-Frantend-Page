import { jsx, jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "./ProductCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export function ProductSlider({ products, title, subtitle, slidesPerView = 4 }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return /* @__PURE__ */ jsx("section", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
    (title || subtitle) && /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-8 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        subtitle && /* @__PURE__ */ jsx("p", { className: "text-primary-500 font-semibold text-sm uppercase tracking-wider mb-1", children: subtitle }),
        title && /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-ink-900 dark:text-ink-50", children: title })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx("button", { ref: prevRef, className: "p-3 rounded-2xl border border-ink-200 dark:border-ink-700 text-ink-600 dark:text-ink-300 hover:border-primary-500 hover:text-primary-500 transition-all", children: /* @__PURE__ */ jsx(ChevronLeft, { size: 18 }) }),
        /* @__PURE__ */ jsx("button", { ref: nextRef, className: "p-3 rounded-2xl border border-ink-200 dark:border-ink-700 text-ink-600 dark:text-ink-300 hover:border-primary-500 hover:text-primary-500 transition-all", children: /* @__PURE__ */ jsx(ChevronRight, { size: 18 }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Navigation, Pagination, Autoplay],
        spaceBetween: 24,
        slidesPerView: 1.2,
        navigation: { prevEl: prevRef.current, nextEl: nextRef.current },
        autoplay: { delay: 5e3, disableOnInteraction: true },
        breakpoints: {
          640: { slidesPerView: Math.min(2, slidesPerView) },
          768: { slidesPerView: Math.min(3, slidesPerView) },
          1024: { slidesPerView }
        },
        className: "!pb-2",
        children: products.map((p, i) => /* @__PURE__ */ jsx(SwiperSlide, { className: "h-auto", children: /* @__PURE__ */ jsx(ProductCard, { product: p, index: i }) }, p.id))
      }
    )
  ] }) });
}
