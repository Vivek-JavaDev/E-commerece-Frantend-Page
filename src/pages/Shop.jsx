import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { ProductGrid } from "../components/product/ProductGrid";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { Pagination } from "../components/ui/Pagination";
import { useProducts } from "../hooks/useProducts";
import { categories, brands } from "../data/products";
const colors = ["Onyx Black", "Pearl White", "Rose Gold", "Sapphire Blue", "Emerald", "Champagne", "Silver", "Burgundy"];
const allSizes = ["XS", "S", "M", "L", "XL", "XXL", "30ml", "50ml", "100ml", "38mm", "40mm", "42mm", "44mm"];
export function Shop() {
  const [params, setParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const perPage = 12;
  const filters = useMemo(() => ({
    search: params.get("q") || void 0,
    category: params.get("category") || void 0,
    brand: params.get("brand") || void 0,
    tag: params.get("tag") || void 0,
    color: params.get("color") || void 0,
    size: params.get("size") || void 0,
    minPrice: params.get("minPrice") ? Number(params.get("minPrice")) : void 0,
    maxPrice: params.get("maxPrice") ? Number(params.get("maxPrice")) : void 0,
    minRating: params.get("minRating") ? Number(params.get("minRating")) : void 0,
    inStock: params.get("inStock") === "true" ? true : void 0,
    sort: params.get("sort") || "newest"
  }), [params]);
  const { products: filtered, loading } = useProducts(filters);
  const totalPages = Math.ceil(filtered.length / perPage);
  const current = filtered.slice((page - 1) * perPage, page * perPage);
  const update = (key, value) => {
    const next = new URLSearchParams(params);
    if (value === null || value === "") next.delete(key);
    else next.set(key, value);
    setParams(next);
    setPage(1);
  };
  const clearAll = () => {
    setParams(new URLSearchParams());
    setPage(1);
  };
  const activeCount = Array.from(params.keys()).filter((k) => k !== "sort").length;
  return /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsx(Breadcrumb, { items: [{ label: "Home", to: "/" }, { label: "Shop" }] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mt-4 mb-6 flex-wrap gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl font-bold text-ink-900 dark:text-ink-50", children: "Shop All" }),
        /* @__PURE__ */ jsxs("p", { className: "text-ink-500 mt-1", children: [
          filtered.length,
          " products available"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setShowFilters(true),
            className: "lg:hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl border border-ink-200 dark:border-ink-700 text-ink-700 dark:text-ink-200",
            children: [
              /* @__PURE__ */ jsx(SlidersHorizontal, { size: 16 }),
              " Filters ",
              activeCount > 0 && `(${activeCount})`
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs(
            "select",
            {
              value: filters.sort || "newest",
              onChange: (e) => update("sort", e.target.value),
              className: "appearance-none pl-4 pr-10 py-2.5 rounded-2xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 text-sm text-ink-800 dark:text-ink-100 focus:outline-none focus:ring-2 focus:ring-primary-500/50",
              children: [
                /* @__PURE__ */ jsx("option", { value: "newest", children: "Newest" }),
                /* @__PURE__ */ jsx("option", { value: "price-asc", children: "Price: Low to High" }),
                /* @__PURE__ */ jsx("option", { value: "price-desc", children: "Price: High to Low" }),
                /* @__PURE__ */ jsx("option", { value: "rating", children: "Top Rated" }),
                /* @__PURE__ */ jsx("option", { value: "popular", children: "Most Popular" }),
                /* @__PURE__ */ jsx("option", { value: "discount", children: "Biggest Discount" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(ChevronDown, { size: 16, className: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-ink-400" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[260px_1fr] gap-8", children: [
      /* @__PURE__ */ jsx("aside", { className: "hidden lg:block sticky top-28 self-start space-y-6", children: /* @__PURE__ */ jsx(FilterPanel, { filters, update, clearAll, activeCount }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(ProductGrid, { products: current, loading, columns: 4 }),
        !loading && totalPages > 1 && /* @__PURE__ */ jsx(Pagination, { page, totalPages, onChange: (p) => {
          setPage(p);
          window.scrollTo({ top: 200, behavior: "smooth" });
        } })
      ] })
    ] }),
    showFilters && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        className: "fixed inset-0 z-[100] lg:hidden",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-ink-950/60 backdrop-blur", onClick: () => setShowFilters(false) }),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { x: "100%" },
              animate: { x: 0 },
              exit: { x: "100%" },
              className: "absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-ink-950 shadow-premium overflow-y-auto p-5",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-5", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold", children: "Filters" }),
                  /* @__PURE__ */ jsx("button", { onClick: () => setShowFilters(false), className: "p-2", children: /* @__PURE__ */ jsx(X, { size: 20 }) })
                ] }),
                /* @__PURE__ */ jsx(FilterPanel, { filters, update, clearAll, activeCount }),
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => setShowFilters(false),
                    className: "mt-6 w-full py-3 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold",
                    children: [
                      "Show ",
                      filtered.length,
                      " results"
                    ]
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
}
function FilterPanel({ filters, update, clearAll, activeCount }) {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold text-ink-900 dark:text-ink-50", children: "Filters" }),
      activeCount > 0 && /* @__PURE__ */ jsx("button", { onClick: clearAll, className: "text-xs text-primary-500 hover:underline", children: "Clear all" })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold mb-2 text-ink-700 dark:text-ink-200", children: "Category" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => update("category", null),
            className: `block w-full text-left px-3 py-2 rounded-xl text-sm transition-colors ${!filters.category ? "bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 font-medium" : "text-ink-600 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-800"}`,
            children: "All Categories"
          }
        ),
        categories.map((c) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => update("category", c.slug === filters.category ? null : c.slug),
            className: `block w-full text-left px-3 py-2 rounded-xl text-sm transition-colors capitalize ${filters.category === c.slug ? "bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 font-medium" : "text-ink-600 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-800"}`,
            children: c.name
          },
          c.id
        ))
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold mb-2 text-ink-700 dark:text-ink-200", children: "Price Range" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            placeholder: "Min",
            value: filters.minPrice ?? "",
            onChange: (e) => update("minPrice", e.target.value || null),
            className: "w-full px-3 py-2 rounded-xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-ink-400", children: "\u2014" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            placeholder: "Max",
            value: filters.maxPrice ?? "",
            onChange: (e) => update("maxPrice", e.target.value || null),
            className: "w-full px-3 py-2 rounded-xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold mb-2 text-ink-700 dark:text-ink-200", children: "Brand" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-1.5", children: brands.map((b) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => update("brand", b.name === filters.brand ? null : b.name),
          className: `block w-full text-left px-3 py-2 rounded-xl text-sm transition-colors ${filters.brand === b.name ? "bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 font-medium" : "text-ink-600 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-800"}`,
          children: b.name
        },
        b.id
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold mb-2 text-ink-700 dark:text-ink-200", children: "Color" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: colors.map((c) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => update("color", c === filters.color ? null : c),
          className: `px-3 py-1.5 rounded-full text-xs border transition-all ${filters.color === c ? "border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300" : "border-ink-200 dark:border-ink-700 text-ink-600 dark:text-ink-300"}`,
          children: c
        },
        c
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold mb-2 text-ink-700 dark:text-ink-200", children: "Size" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: allSizes.map((s) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => update("size", s === filters.size ? null : s),
          className: `min-w-10 px-3 py-1.5 rounded-xl text-xs border transition-all ${filters.size === s ? "border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300" : "border-ink-200 dark:border-ink-700 text-ink-600 dark:text-ink-300"}`,
          children: s
        },
        s
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold mb-2 text-ink-700 dark:text-ink-200", children: "Rating" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-1.5", children: [4, 3, 2].map((r) => /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => update("minRating", String(r) === String(filters.minRating) ? null : String(r)),
          className: `block w-full text-left px-3 py-2 rounded-xl text-sm transition-colors ${filters.minRating === r ? "bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 font-medium" : "text-ink-600 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-800"}`,
          children: [
            r,
            "\u2605 & above"
          ]
        },
        r
      )) })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "checkbox",
          checked: filters.inStock || false,
          onChange: (e) => update("inStock", e.target.checked ? "true" : null),
          className: "w-4 h-4 rounded accent-primary-500"
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "text-sm text-ink-700 dark:text-ink-200", children: "In stock only" })
    ] }) })
  ] });
}
