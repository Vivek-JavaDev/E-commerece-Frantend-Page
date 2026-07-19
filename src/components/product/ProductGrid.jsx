import { jsx } from "react/jsx-runtime";
import { ProductCard } from "./ProductCard";
import { ProductGridSkeleton } from "../ui/Loader";
export function ProductGrid({ products, loading, columns = 4 }) {
  if (loading) return /* @__PURE__ */ jsx(ProductGridSkeleton, { count: columns * 2 });
  if (products.length === 0) {
    return /* @__PURE__ */ jsx("div", { className: "text-center py-20", children: /* @__PURE__ */ jsx("p", { className: "text-ink-400 text-lg", children: "No products found." }) });
  }
  const cols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
  }[columns];
  return /* @__PURE__ */ jsx("div", { className: `grid ${cols} gap-5 md:gap-6`, children: products.map((p, i) => /* @__PURE__ */ jsx(ProductCard, { product: p, index: i }, p.id)) });
}
