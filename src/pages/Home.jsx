import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { CategoryGrid } from "../components/sections/CategoryGrid";
import { ProductSlider } from "../components/product/ProductSlider";
import { FlashSale } from "../components/sections/FlashSale";
import { PromoBanner } from "../components/sections/PromoBanner";
import { SeasonCollection } from "../components/sections/SeasonCollection";
import { FeaturedCollection } from "../components/sections/FeaturedCollection";
import { Testimonials } from "../components/sections/Testimonials";
import { Newsletter } from "../components/sections/Newsletter";
import { InstagramGallery } from "../components/sections/InstagramGallery";
import { PartnerBrands } from "../components/sections/PartnerBrands";
import { BlogPreview } from "../components/sections/BlogPreview";
import { FAQAccordion } from "../components/sections/FAQAccordion";
import { products } from "../data/products";
export function Home() {
  const featured = products.filter((p) => p.tags.includes("featured")).slice(0, 8);
  const trending = products.filter((p) => p.tags.includes("trending")).slice(0, 8);
  const newArrivals = products.filter((p) => p.tags.includes("new")).slice(0, 8);
  const bestSellers = products.filter((p) => p.tags.includes("bestseller")).slice(0, 8);
  const topRated = [...products].sort((a, b) => b.rating - a.rating).slice(0, 8);
  return /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3 }, children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Services, {}),
    /* @__PURE__ */ jsx(CategoryGrid, {}),
    /* @__PURE__ */ jsx(ProductSlider, { products: featured, title: "Featured Products", subtitle: "Handpicked for you" }),
    /* @__PURE__ */ jsx(FlashSale, {}),
    /* @__PURE__ */ jsx(ProductSlider, { products: trending, title: "Trending Now", subtitle: "What everyone's loving" }),
    /* @__PURE__ */ jsx(PromoBanner, {}),
    /* @__PURE__ */ jsx(ProductSlider, { products: newArrivals, title: "New Arrivals", subtitle: "Fresh off the shelf" }),
    /* @__PURE__ */ jsx(SeasonCollection, {}),
    /* @__PURE__ */ jsx(ProductSlider, { products: bestSellers, title: "Best Sellers", subtitle: "Tried, tested, loved" }),
    /* @__PURE__ */ jsx(FeaturedCollection, {}),
    /* @__PURE__ */ jsx(ProductSlider, { products: topRated, title: "Top Rated", subtitle: "The highest rated picks" }),
    /* @__PURE__ */ jsx(Testimonials, {}),
    /* @__PURE__ */ jsx(BlogPreview, {}),
    /* @__PURE__ */ jsx(InstagramGallery, {}),
    /* @__PURE__ */ jsx(PartnerBrands, {}),
    /* @__PURE__ */ jsx(FAQAccordion, { subtitle: "Need help?", title: "Frequently Asked Questions" }),
    /* @__PURE__ */ jsx(Newsletter, {})
  ] });
}
