import { jsx, jsxs } from "react/jsx-runtime";
import { brands } from "../../data/products";
export function PartnerBrands() {
  return /* @__PURE__ */ jsx("section", { className: "py-12 border-t border-ink-100 dark:border-ink-800", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
    /* @__PURE__ */ jsx("p", { className: "text-center text-sm uppercase tracking-widest text-ink-400 mb-6", children: "Trusted by the world's finest brands" }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center justify-center gap-x-10 gap-y-6", children: brands.map((b) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer",
        children: /* @__PURE__ */ jsx("span", { className: "font-display text-2xl font-bold text-ink-800 dark:text-ink-100", children: b.name })
      },
      b.id
    )) })
  ] }) });
}
