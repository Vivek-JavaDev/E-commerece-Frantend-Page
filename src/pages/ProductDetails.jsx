import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  ShoppingCart,
  Minus,
  Plus,
  Share2,
  Truck,
  RefreshCw,
  ShieldCheck,
  Check,
  GitCompare,
  Zap
} from "lucide-react";
import { useProduct, useRelatedProducts } from "../hooks/useProducts";
import { useCart, useWishlist, useCompare, useToast, useRecent } from "../context/AppContext";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Rating } from "../components/ui/Rating";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { ProductSlider } from "../components/product/ProductSlider";
import { products as allProducts } from "../data/products";
export function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = useProduct(Number(id));
  const related = useRelatedProducts(product, 8);
  const { addToCart } = useCart();
  const { toggle, isWishlisted } = useWishlist();
  const { toggle: toggleCompare, isCompared } = useCompare();
  const { notify } = useToast();
  const { add } = useRecent();
  const zoomRef = useRef(null);
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const [tab, setTab] = useState("description");
  useEffect(() => {
    if (product) {
      add(product);
      setColor(product.colors[0]);
      setSize(product.sizes?.[0]);
      setActiveImg(0);
    }
  }, [product, add]);
  useEffect(() => {
    if (!product) return;
    const $ = window.jQuery || window.$;
    if (!$ || !zoomRef.current) return;
    const $container = $(zoomRef.current);
    $container.off("mousemove mouseenter mouseleave");
    $container.on("mousemove", function(e) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width * 100;
      const y = (e.clientY - rect.top) / rect.height * 100;
      $(this).find("img").css({ transformOrigin: `${x}% ${y}%`, transform: "scale(2.2)" });
    });
    $container.on("mouseleave", function() {
      $(this).find("img").css({ transform: "scale(1)", transformOrigin: "center" });
    });
    return () => {
      $container.off("mousemove mouseenter mouseleave");
    };
  }, [product, activeImg]);
  if (!product) {
    return /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-20 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-ink-500 mb-4", children: "Product not found." }),
      /* @__PURE__ */ jsx(Link, { to: "/shop", className: "text-primary-500 font-semibold", children: "Back to shop \u2192" })
    ] });
  }
  const wished = isWishlisted(product.id);
  const compared = isCompared(product.id);
  const reviews = allProducts.filter((p) => p.category === product.category).slice(0, 3);
  const handleAdd = () => {
    addToCart(product, qty, color, size);
    notify(`${product.name} added to cart`, "success");
  };
  const handleBuyNow = () => {
    addToCart(product, qty, color, size);
    navigate("/checkout");
  };
  return /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsx(Breadcrumb, { items: [
      { label: "Home", to: "/" },
      { label: "Shop", to: "/shop" },
      { label: product.category, to: `/category/${product.category}` },
      { label: product.name }
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 mt-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.4 },
            ref: zoomRef,
            className: "zoom-container rounded-3xl overflow-hidden aspect-square bg-ink-50 dark:bg-ink-950 border border-ink-100 dark:border-ink-800",
            children: /* @__PURE__ */ jsx("img", { src: product.images[activeImg], alt: product.name, className: "w-full h-full object-cover" })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-3", children: product.images.map((img, i) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setActiveImg(i),
            className: `aspect-square rounded-2xl overflow-hidden border-2 transition-all ${activeImg === i ? "border-primary-500 ring-2 ring-primary-500/30" : "border-ink-200 dark:border-ink-700 hover:border-primary-300"}`,
            children: /* @__PURE__ */ jsx("img", { src: img, alt: `${product.name} ${i + 1}`, className: "w-full h-full object-cover" })
          },
          i
        )) }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-ink-400 text-center", children: "Hover over the image to zoom" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-widest text-primary-500 font-semibold", children: product.brand }),
            product.tags.includes("new") && /* @__PURE__ */ jsx(Badge, { variant: "info", children: "New" }),
            product.tags.includes("bestseller") && /* @__PURE__ */ jsx(Badge, { variant: "success", children: "Best Seller" })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl font-bold text-ink-900 dark:text-ink-50", children: product.name }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center gap-4", children: [
            /* @__PURE__ */ jsx(Rating, { value: product.rating, reviews: product.reviews, size: 18, showValue: true }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-ink-500", children: "\xB7" }),
            /* @__PURE__ */ jsxs("span", { className: "text-sm text-ink-500", children: [
              product.reviews,
              " reviews"
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-ink-500", children: "\xB7" }),
            /* @__PURE__ */ jsxs("span", { className: "text-sm text-emerald-500 font-medium", children: [
              "In stock: ",
              product.stock
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-3", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-4xl font-bold text-ink-900 dark:text-ink-50", children: [
            "$",
            product.price
          ] }),
          product.oldPrice && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("span", { className: "text-xl text-ink-400 line-through", children: [
              "$",
              product.oldPrice
            ] }),
            /* @__PURE__ */ jsxs(Badge, { variant: "danger", children: [
              "Save ",
              product.discount,
              "%"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-ink-600 dark:text-ink-300 leading-relaxed", children: product.description }),
        product.colors.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("p", { className: "text-sm font-semibold mb-2 text-ink-800 dark:text-ink-100", children: [
            "Color: ",
            /* @__PURE__ */ jsx("span", { className: "text-ink-500 font-normal", children: color })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: product.colors.map((c) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setColor(c),
              className: `px-4 py-2 rounded-2xl text-sm border-2 transition-all ${color === c ? "border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300" : "border-ink-200 dark:border-ink-700 text-ink-600 dark:text-ink-300 hover:border-primary-300"}`,
              children: c
            },
            c
          )) })
        ] }),
        product.sizes && product.sizes.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("p", { className: "text-sm font-semibold mb-2 text-ink-800 dark:text-ink-100", children: [
            "Size: ",
            /* @__PURE__ */ jsx("span", { className: "text-ink-500 font-normal", children: size })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: product.sizes.map((s) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setSize(s),
              className: `min-w-12 px-4 py-2 rounded-2xl text-sm border-2 transition-all ${size === s ? "border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300" : "border-ink-200 dark:border-ink-700 text-ink-600 dark:text-ink-300 hover:border-primary-300"}`,
              children: s
            },
            s
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 pt-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center border-2 border-ink-200 dark:border-ink-700 rounded-2xl", children: [
            /* @__PURE__ */ jsx("button", { onClick: () => setQty((q) => Math.max(1, q - 1)), className: "p-3 text-ink-500 hover:text-primary-500", children: /* @__PURE__ */ jsx(Minus, { size: 18 }) }),
            /* @__PURE__ */ jsx("span", { className: "w-12 text-center font-semibold", children: qty }),
            /* @__PURE__ */ jsx("button", { onClick: () => setQty((q) => Math.min(product.stock, q + 1)), className: "p-3 text-ink-500 hover:text-primary-500", children: /* @__PURE__ */ jsx(Plus, { size: 18 }) })
          ] }),
          /* @__PURE__ */ jsxs(Button, { onClick: handleAdd, size: "lg", className: "flex-1", children: [
            /* @__PURE__ */ jsx(ShoppingCart, { size: 18 }),
            " Add to Cart"
          ] }),
          /* @__PURE__ */ jsxs(Button, { onClick: handleBuyNow, variant: "gold", size: "lg", children: [
            /* @__PURE__ */ jsx(Zap, { size: 18 }),
            " Buy Now"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => {
                toggle(product);
                notify(wished ? "Removed from wishlist" : "Added to wishlist", "info");
              },
              className: `inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl border border-ink-200 dark:border-ink-700 text-sm font-medium hover:border-primary-500 transition-all ${wished ? "text-primary-500" : "text-ink-700 dark:text-ink-200"}`,
              children: [
                /* @__PURE__ */ jsx(Heart, { size: 16, className: wished ? "fill-primary-500" : "" }),
                " Wishlist"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => {
                toggleCompare(product);
                notify(compared ? "Removed from compare" : "Added to compare", "info");
              },
              className: `inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl border border-ink-200 dark:border-ink-700 text-sm font-medium hover:border-primary-500 transition-all ${compared ? "text-primary-500" : "text-ink-700 dark:text-ink-200"}`,
              children: [
                /* @__PURE__ */ jsx(GitCompare, { size: 16 }),
                " Compare"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => {
                if (navigator.share) navigator.share({ title: product.name, url: window.location.href });
                else {
                  navigator.clipboard?.writeText(window.location.href);
                  notify("Link copied", "success");
                }
              },
              className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl border border-ink-200 dark:border-ink-700 text-sm font-medium hover:border-primary-500 text-ink-700 dark:text-ink-200 transition-all",
              children: [
                /* @__PURE__ */ jsx(Share2, { size: 16 }),
                " Share"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3 pt-4 border-t border-ink-100 dark:border-ink-800 text-sm", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-ink-400", children: "SKU:" }),
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-medium text-ink-700 dark:text-ink-200", children: product.sku })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-ink-400", children: "Brand:" }),
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-medium text-ink-700 dark:text-ink-200", children: product.brand })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-ink-400", children: "Category:" }),
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-medium text-ink-700 dark:text-ink-200 capitalize", children: product.category.replace("-", " & ") })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-ink-400", children: "Availability:" }),
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-medium text-emerald-500", children: product.stock > 0 ? "In stock" : "Out of stock" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-3 pt-4", children: [
          { icon: Truck, label: "Free shipping over $75" },
          { icon: RefreshCw, label: "30-day returns" },
          { icon: ShieldCheck, label: "2-year warranty" }
        ].map((s, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center gap-1 p-3 rounded-2xl bg-ink-50 dark:bg-ink-900", children: [
          /* @__PURE__ */ jsx(s.icon, { size: 20, className: "text-primary-500" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-ink-600 dark:text-ink-300", children: s.label })
        ] }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 border-b border-ink-100 dark:border-ink-800", children: ["description", "specifications", "reviews", "shipping"].map((t) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setTab(t),
          className: `px-5 py-3 text-sm font-semibold capitalize transition-colors border-b-2 -mb-px ${tab === t ? "border-primary-500 text-primary-500" : "border-transparent text-ink-500 hover:text-ink-800 dark:hover:text-ink-200"}`,
          children: t === "shipping" ? "Shipping & Returns" : t
        },
        t
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "py-6", children: [
        tab === "description" && /* @__PURE__ */ jsxs("div", { className: "prose dark:prose-invert max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "text-ink-600 dark:text-ink-300 leading-relaxed", children: product.description }),
          /* @__PURE__ */ jsx("p", { className: "text-ink-600 dark:text-ink-300 leading-relaxed mt-4", children: "Each piece is crafted with meticulous attention to detail using premium materials sourced from sustainable suppliers. Our commitment to quality ensures that every product meets the highest standards of durability, comfort, and style." }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2 text-ink-600 dark:text-ink-300", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Check, { size: 16, className: "text-emerald-500" }),
              " Premium materials"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Check, { size: 16, className: "text-emerald-500" }),
              " Ethically sourced"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Check, { size: 16, className: "text-emerald-500" }),
              " Designed to last"
            ] })
          ] })
        ] }),
        tab === "specifications" && /* @__PURE__ */ jsx("table", { className: "w-full text-sm", children: /* @__PURE__ */ jsx("tbody", { children: [
          ["Brand", product.brand],
          ["Category", product.category.replace("-", " & ")],
          ["SKU", product.sku],
          ["Colors", product.colors.join(", ")],
          ["Sizes", product.sizes?.join(", ") || "N/A"],
          ["Stock", `${product.stock} units`],
          ["Rating", `${product.rating} / 5`],
          ["Origin", "Imported"]
        ].map(([k, v]) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-ink-100 dark:border-ink-800", children: [
          /* @__PURE__ */ jsx("td", { className: "py-3 font-semibold text-ink-700 dark:text-ink-200 w-1/3", children: k }),
          /* @__PURE__ */ jsx("td", { className: "py-3 text-ink-600 dark:text-ink-300", children: v })
        ] }, k)) }) }),
        tab === "reviews" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 p-5 rounded-3xl bg-ink-50 dark:bg-ink-900", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("p", { className: "font-display text-5xl font-bold text-ink-900 dark:text-ink-50", children: product.rating }),
              /* @__PURE__ */ jsx(Rating, { value: product.rating, size: 16 }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-ink-500 mt-1", children: [
                product.reviews,
                " reviews"
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex-1 space-y-1", children: [5, 4, 3, 2, 1].map((s) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-xs text-ink-500 w-6", children: [
                s,
                "\u2605"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex-1 h-2 rounded-full bg-ink-200 dark:bg-ink-800 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-accent-400", style: { width: `${s === 5 ? 65 : s === 4 ? 25 : s === 3 ? 7 : s === 2 ? 2 : 1}%` } }) })
            ] }, s)) })
          ] }),
          reviews.map((r, i) => /* @__PURE__ */ jsxs("div", { className: "p-5 rounded-3xl border border-ink-100 dark:border-ink-800", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsx("img", { src: `https://picsum.photos/seed/review-${i}/100/100`, alt: "", className: "w-10 h-10 rounded-full" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm text-ink-900 dark:text-ink-50", children: ["Sarah J.", "Mike T.", "Anna L."][i] }),
                /* @__PURE__ */ jsx(Rating, { value: 5 - i * 0.5, size: 12 })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-ink-600 dark:text-ink-300", children: [
              "Absolutely love this product! Quality is outstanding and delivery was super fast.",
              "Great value for the price. Would recommend to friends.",
              "Good product overall, slight delay in shipping but worth the wait."
            ][i] })
          ] }, i))
        ] }),
        tab === "shipping" && /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-ink-600 dark:text-ink-300", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(Truck, { className: "text-primary-500 mt-1", size: 20 }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-ink-900 dark:text-ink-50", children: "Free Express Shipping" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Free on orders over $75. Standard shipping $9.99. Express delivery in 2-3 business days." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(RefreshCw, { className: "text-primary-500 mt-1", size: 20 }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-ink-900 dark:text-ink-50", children: "30-Day Returns" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Not in love? Return unused items in original packaging within 30 days for a full refund." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(ShieldCheck, { className: "text-primary-500 mt-1", size: 20 }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-ink-900 dark:text-ink-50", children: "2-Year Warranty" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Every product is backed by our 2-year warranty against manufacturing defects." })
            ] })
          ] })
        ] })
      ] })
    ] }),
    related.length > 0 && /* @__PURE__ */ jsx(ProductSlider, { products: related, title: "Related Products", subtitle: "You may also like", slidesPerView: 4 })
  ] });
}
