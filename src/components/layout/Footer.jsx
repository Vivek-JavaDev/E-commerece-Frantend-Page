import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin, CreditCard, Apple, Wallet } from "lucide-react";
import { categories } from "../../data/products";
export function Footer() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxs("footer", { className: "bg-ink-950 text-ink-300 mt-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-14", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "col-span-2 lg:col-span-2", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "relative inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500", children: /* @__PURE__ */ jsx("span", { className: "font-display text-lg font-bold text-white", children: "L" }) }),
            /* @__PURE__ */ jsx("span", { className: "font-display text-2xl font-bold text-white", children: "LUXE" })
          ] }) }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed max-w-sm", children: "A premium online shopping destination for fashion, electronics, home, and lifestyle. Curated for the discerning few." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5 space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(MapPin, { size: 16, className: "text-primary-400" }),
              " 24 Rue Saint-Honor\xE9, Paris, France"
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Mail, { size: 16, className: "text-primary-400" }),
              " support@luxe.shopping"
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Phone, { size: 16, className: "text-primary-400" }),
              " +33 1 23 45 67 89"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-4 text-sm uppercase tracking-wider", children: "Shop" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2.5 text-sm", children: categories.slice(0, 6).map((c) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: `/category/${c.slug}`, className: "hover:text-primary-400 transition-colors", children: c.name }) }, c.id)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-4 text-sm uppercase tracking-wider", children: "Company" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2.5 text-sm", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-primary-400 transition-colors", children: "About Us" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "hover:text-primary-400 transition-colors", children: "Contact" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-primary-400 transition-colors", children: "Careers" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-primary-400 transition-colors", children: "Press" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-primary-400 transition-colors", children: "Sustainability" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-4 text-sm uppercase tracking-wider", children: "Help" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2.5 text-sm", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/faq", className: "hover:text-primary-400 transition-colors", children: "FAQ" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-primary-400 transition-colors", children: "Help Center" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-primary-400 transition-colors", children: "Support" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-primary-400 transition-colors", children: "Refund Policy" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/orders", className: "hover:text-primary-400 transition-colors", children: "Track Order" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-4 text-sm uppercase tracking-wider", children: "Legal" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2.5 text-sm", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "hover:text-primary-400 transition-colors", children: "Privacy Policy" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/terms", className: "hover:text-primary-400 transition-colors", children: "Terms & Conditions" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-primary-400 transition-colors", children: "Cookie Policy" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-primary-400 transition-colors", children: "Accessibility" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 rounded-3xl overflow-hidden border border-ink-800 aspect-[16/4]", children: /* @__PURE__ */ jsx(
        "iframe",
        {
          title: "LUXE Headquarters",
          src: "https://www.openstreetmap.org/export/embed.html?bbox=2.3%2C48.85%2C2.34%2C48.86&layer=mapnik",
          className: "w-full h-full grayscale opacity-70",
          loading: "lazy"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-ink-800", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-xs text-ink-500", children: [
        "\xA9 ",
        year,
        " LUXE Shopping. All rights reserved. Crafted with care."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs text-ink-500 mr-1", children: "We accept:" }),
        /* @__PURE__ */ jsx(CreditCard, { size: 22, className: "text-ink-400" }),
        /* @__PURE__ */ jsx(Wallet, { size: 22, className: "text-ink-400" }),
        /* @__PURE__ */ jsx(Apple, { size: 22, className: "text-ink-400" }),
        /* @__PURE__ */ jsx("span", { className: "px-2 py-1 text-[10px] font-bold bg-ink-800 rounded text-ink-300", children: "VISA" }),
        /* @__PURE__ */ jsx("span", { className: "px-2 py-1 text-[10px] font-bold bg-ink-800 rounded text-ink-300", children: "MC" }),
        /* @__PURE__ */ jsx("span", { className: "px-2 py-1 text-[10px] font-bold bg-ink-800 rounded text-ink-300", children: "AMEX" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: [Instagram, Twitter, Facebook, Youtube].map((Icon, i) => /* @__PURE__ */ jsx("a", { href: "#", className: "p-2 rounded-full bg-ink-800 hover:bg-primary-500 transition-colors", "aria-label": "Social", children: /* @__PURE__ */ jsx(Icon, { size: 16 }) }, i)) })
    ] }) })
  ] });
}
