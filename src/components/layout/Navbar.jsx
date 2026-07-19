import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  Package,
  LogOut,
  Settings,
  Sparkles,
  GitCompare
} from "lucide-react";
import { useCart, useWishlist, useAuth, useTheme, useSearch, useCompare } from "../../context/AppContext";
import { categories } from "../../data/products";
import { Logo } from "./Logo";
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { count, items } = useCart();
  const { count: wishCount } = useWishlist();
  const { items: compareItems } = useCompare();
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { setQuery, suggestions } = useSearch();
  const navigate = useNavigate();
  const location = useLocation();
  const searchRef = useRef(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
    setUserOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    const onClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) setSearchOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);
  const submitSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      setQuery(searchValue);
      navigate(`/shop?q=${encodeURIComponent(searchValue)}`);
      setSearchOpen(false);
    }
  };
  const sugg = suggestions(searchValue);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 text-white text-xs sm:text-sm py-2.5 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex items-center justify-center gap-2 text-center font-medium", children: [
      /* @__PURE__ */ jsx(Sparkles, { size: 14, className: "shrink-0" }),
      /* @__PURE__ */ jsx("span", { children: "Free express shipping on orders over $75 \xB7 Use code WELCOME15 for 15% off" })
    ] }) }),
    /* @__PURE__ */ jsx("header", { className: `sticky top-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong shadow-soft" : "bg-white/80 dark:bg-ink-950/80 backdrop-blur"}`, children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16 md:h-20 gap-4", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setMobileOpen(true),
          className: "lg:hidden p-2 -ml-2 text-ink-700 dark:text-ink-200",
          "aria-label": "Open menu",
          children: /* @__PURE__ */ jsx(Menu, { size: 24 })
        }
      ),
      /* @__PURE__ */ jsx(Logo, {}),
      /* @__PURE__ */ jsxs("nav", { className: "hidden lg:flex items-center gap-1", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "px-4 py-2 text-sm font-medium text-ink-700 dark:text-ink-200 hover:text-primary-500 transition-colors", children: "Home" }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            onMouseEnter: () => setMegaOpen(true),
            onMouseLeave: () => setMegaOpen(false),
            className: "relative",
            children: [
              /* @__PURE__ */ jsxs("button", { className: "px-4 py-2 text-sm font-medium text-ink-700 dark:text-ink-200 hover:text-primary-500 transition-colors inline-flex items-center gap-1", children: [
                "Shop ",
                /* @__PURE__ */ jsx(ChevronDown, { size: 14, className: `transition-transform ${megaOpen ? "rotate-180" : ""}` })
              ] }),
              /* @__PURE__ */ jsx(AnimatePresence, { children: megaOpen && /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: 10 },
                  transition: { duration: 0.2 },
                  className: "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] glass-strong rounded-3xl shadow-premium p-6",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-4", children: categories.map((cat) => /* @__PURE__ */ jsxs(
                      Link,
                      {
                        to: `/category/${cat.slug}`,
                        className: "group block p-3 rounded-2xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors",
                        children: [
                          /* @__PURE__ */ jsx("div", { className: "aspect-square rounded-2xl overflow-hidden mb-2", children: /* @__PURE__ */ jsx("img", { src: cat.image, alt: cat.name, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" }) }),
                          /* @__PURE__ */ jsx("p", { className: "font-semibold text-ink-900 dark:text-ink-50 text-sm", children: cat.name }),
                          /* @__PURE__ */ jsxs("p", { className: "text-xs text-ink-500 mt-0.5", children: [
                            cat.subcategories.length,
                            " collections"
                          ] })
                        ]
                      },
                      cat.id
                    )) }),
                    /* @__PURE__ */ jsxs("div", { className: "mt-4 pt-4 border-t border-ink-100 dark:border-ink-800 flex items-center justify-between", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-ink-500", children: "Discover 90+ premium products across categories" }),
                      /* @__PURE__ */ jsx(Link, { to: "/shop", className: "text-sm font-semibold text-primary-500 hover:underline", children: "Browse all \u2192" })
                    ] })
                  ]
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsx(Link, { to: "/categories", className: "px-4 py-2 text-sm font-medium text-ink-700 dark:text-ink-200 hover:text-primary-500 transition-colors", children: "Categories" }),
        /* @__PURE__ */ jsx(Link, { to: "/about", className: "px-4 py-2 text-sm font-medium text-ink-700 dark:text-ink-200 hover:text-primary-500 transition-colors", children: "About" }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", className: "px-4 py-2 text-sm font-medium text-ink-700 dark:text-ink-200 hover:text-primary-500 transition-colors", children: "Contact" })
      ] }),
      /* @__PURE__ */ jsxs("div", { ref: searchRef, className: "hidden md:block flex-1 max-w-md relative", children: [
        /* @__PURE__ */ jsx("form", { onSubmit: submitSearch, children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(Search, { size: 18, className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value: searchValue,
              onChange: (e) => {
                setSearchValue(e.target.value);
                setSearchOpen(true);
              },
              onFocus: () => setSearchOpen(true),
              placeholder: "Search products, brands...",
              className: "w-full pl-11 pr-4 py-2.5 rounded-2xl bg-ink-50 dark:bg-ink-900 border border-ink-200 dark:border-ink-800 text-sm text-ink-900 dark:text-ink-50 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: searchOpen && searchValue && sugg.length > 0 && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 10 },
            className: "absolute top-full mt-2 w-full glass-strong rounded-2xl shadow-premium p-2 z-50",
            children: sugg.map((p) => /* @__PURE__ */ jsxs(
              Link,
              {
                to: `/product/${p.id}`,
                className: "flex items-center gap-3 p-2 rounded-xl hover:bg-ink-100 dark:hover:bg-ink-800 transition-colors",
                children: [
                  /* @__PURE__ */ jsx("img", { src: p.images[0], alt: p.name, className: "w-10 h-10 rounded-lg object-cover" }),
                  /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-ink-900 dark:text-ink-50 truncate", children: p.name }),
                    /* @__PURE__ */ jsxs("p", { className: "text-xs text-ink-500", children: [
                      p.brand,
                      " \xB7 $",
                      p.price
                    ] })
                  ] })
                ]
              },
              p.id
            ))
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 sm:gap-2", children: [
        /* @__PURE__ */ jsx("button", { onClick: () => setSearchOpen(true), className: "md:hidden p-2.5 rounded-2xl text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800", "aria-label": "Search", children: /* @__PURE__ */ jsx(Search, { size: 20 }) }),
        /* @__PURE__ */ jsx("button", { onClick: toggleTheme, className: "p-2.5 rounded-2xl text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800 transition-colors", "aria-label": "Toggle theme", children: theme === "light" ? /* @__PURE__ */ jsx(Moon, { size: 20 }) : /* @__PURE__ */ jsx(Sun, { size: 20 }) }),
        /* @__PURE__ */ jsxs(Link, { to: "/compare", className: "relative p-2.5 rounded-2xl text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800 transition-colors hidden sm:block", "aria-label": "Compare", children: [
          /* @__PURE__ */ jsx(GitCompare, { size: 20 }),
          compareItems.length > 0 && /* @__PURE__ */ jsx("span", { className: "absolute -top-0.5 -right-0.5 min-w-5 h-5 px-1 rounded-full bg-accent-500 text-ink-900 text-[10px] font-bold flex items-center justify-center", children: compareItems.length })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/wishlist", className: "relative p-2.5 rounded-2xl text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800 transition-colors", "aria-label": "Wishlist", children: [
          /* @__PURE__ */ jsx(Heart, { size: 20 }),
          wishCount > 0 && /* @__PURE__ */ jsx("span", { className: "absolute -top-0.5 -right-0.5 min-w-5 h-5 px-1 rounded-full bg-primary-500 text-white text-[10px] font-bold flex items-center justify-center", children: wishCount })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/cart", className: "relative p-2.5 rounded-2xl text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800 transition-colors", "aria-label": "Cart", children: [
          /* @__PURE__ */ jsx(ShoppingCart, { size: 20 }),
          count > 0 && /* @__PURE__ */ jsx("span", { className: "absolute -top-0.5 -right-0.5 min-w-5 h-5 px-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white text-[10px] font-bold flex items-center justify-center", children: count })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setUserOpen((o) => !o),
              className: "p-2.5 rounded-2xl text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800 transition-colors",
              "aria-label": "Account",
              children: user ? /* @__PURE__ */ jsx("img", { src: user.avatar, alt: user.name, className: "w-6 h-6 rounded-full object-cover" }) : /* @__PURE__ */ jsx(User, { size: 20 })
            }
          ),
          /* @__PURE__ */ jsx(AnimatePresence, { children: userOpen && /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: 10 },
              className: "absolute right-0 top-full mt-2 w-56 glass-strong rounded-2xl shadow-premium p-2 z-50",
              children: user ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsxs("div", { className: "px-3 py-2 border-b border-ink-100 dark:border-ink-800 mb-1", children: [
                  /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm text-ink-900 dark:text-ink-50", children: user.name }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-ink-500 truncate", children: user.email })
                ] }),
                /* @__PURE__ */ jsxs(Link, { to: "/profile", className: "flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800", children: [
                  /* @__PURE__ */ jsx(User, { size: 16 }),
                  " Profile"
                ] }),
                /* @__PURE__ */ jsxs(Link, { to: "/orders", className: "flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800", children: [
                  /* @__PURE__ */ jsx(Package, { size: 16 }),
                  " My Orders"
                ] }),
                /* @__PURE__ */ jsxs(Link, { to: "/wishlist", className: "flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800", children: [
                  /* @__PURE__ */ jsx(Heart, { size: 16 }),
                  " Wishlist"
                ] }),
                /* @__PURE__ */ jsxs(Link, { to: "/profile", className: "flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800", children: [
                  /* @__PURE__ */ jsx(Settings, { size: 16 }),
                  " Settings"
                ] }),
                /* @__PURE__ */ jsxs("button", { onClick: () => {
                  logout();
                  navigate("/");
                }, className: "w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20", children: [
                  /* @__PURE__ */ jsx(LogOut, { size: 16 }),
                  " Logout"
                ] })
              ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(Link, { to: "/login", className: "block px-3 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 text-center", children: "Sign In" }),
                /* @__PURE__ */ jsx(Link, { to: "/register", className: "block px-3 py-2 rounded-xl text-sm text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800 text-center", children: "Create Account" })
              ] })
            }
          ) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: mobileOpen && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-[100] lg:hidden",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-ink-950/60 backdrop-blur", onClick: () => setMobileOpen(false) }),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { x: "-100%" },
              animate: { x: 0 },
              exit: { x: "-100%" },
              transition: { type: "spring", stiffness: 300, damping: 30 },
              className: "absolute left-0 top-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-ink-950 shadow-premium overflow-y-auto",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 border-b border-ink-100 dark:border-ink-800", children: [
                  /* @__PURE__ */ jsx(Logo, {}),
                  /* @__PURE__ */ jsx("button", { onClick: () => setMobileOpen(false), className: "p-2 text-ink-500", children: /* @__PURE__ */ jsx(X, { size: 24 }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
                  /* @__PURE__ */ jsx("form", { onSubmit: submitSearch, className: "mb-4", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsx(Search, { size: 18, className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400" }),
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "text",
                        value: searchValue,
                        onChange: (e) => setSearchValue(e.target.value),
                        placeholder: "Search...",
                        className: "w-full pl-11 pr-4 py-2.5 rounded-2xl bg-ink-50 dark:bg-ink-900 border border-ink-200 dark:border-ink-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                      }
                    )
                  ] }) }),
                  /* @__PURE__ */ jsxs("nav", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsx(Link, { to: "/", className: "block px-4 py-3 rounded-2xl text-ink-800 dark:text-ink-100 font-medium hover:bg-ink-100 dark:hover:bg-ink-800", children: "Home" }),
                    /* @__PURE__ */ jsx(Link, { to: "/shop", className: "block px-4 py-3 rounded-2xl text-ink-800 dark:text-ink-100 font-medium hover:bg-ink-100 dark:hover:bg-ink-800", children: "Shop" }),
                    /* @__PURE__ */ jsx(Link, { to: "/categories", className: "block px-4 py-3 rounded-2xl text-ink-800 dark:text-ink-100 font-medium hover:bg-ink-100 dark:hover:bg-ink-800", children: "Categories" }),
                    /* @__PURE__ */ jsxs(Link, { to: "/wishlist", className: "block px-4 py-3 rounded-2xl text-ink-800 dark:text-ink-100 font-medium hover:bg-ink-100 dark:hover:bg-ink-800", children: [
                      "Wishlist (",
                      wishCount,
                      ")"
                    ] }),
                    /* @__PURE__ */ jsxs(Link, { to: "/cart", className: "block px-4 py-3 rounded-2xl text-ink-800 dark:text-ink-100 font-medium hover:bg-ink-100 dark:hover:bg-ink-800", children: [
                      "Cart (",
                      count,
                      ")"
                    ] }),
                    /* @__PURE__ */ jsxs(Link, { to: "/compare", className: "block px-4 py-3 rounded-2xl text-ink-800 dark:text-ink-100 font-medium hover:bg-ink-100 dark:hover:bg-ink-800", children: [
                      "Compare (",
                      compareItems.length,
                      ")"
                    ] }),
                    user ? /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsx(Link, { to: "/profile", className: "block px-4 py-3 rounded-2xl text-ink-800 dark:text-ink-100 font-medium hover:bg-ink-100 dark:hover:bg-ink-800", children: "Profile" }),
                      /* @__PURE__ */ jsx(Link, { to: "/orders", className: "block px-4 py-3 rounded-2xl text-ink-800 dark:text-ink-100 font-medium hover:bg-ink-100 dark:hover:bg-ink-800", children: "My Orders" }),
                      /* @__PURE__ */ jsx("button", { onClick: () => {
                        logout();
                        navigate("/");
                      }, className: "w-full text-left px-4 py-3 rounded-2xl text-red-500 font-medium hover:bg-red-50 dark:hover:bg-red-900/20", children: "Logout" })
                    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsx(Link, { to: "/login", className: "block px-4 py-3 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold text-center", children: "Sign In" }),
                      /* @__PURE__ */ jsx(Link, { to: "/register", className: "block px-4 py-3 rounded-2xl text-ink-800 dark:text-ink-100 font-medium hover:bg-ink-100 dark:hover:bg-ink-800 text-center", children: "Create Account" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "pt-2 mt-2 border-t border-ink-100 dark:border-ink-800", children: [
                      /* @__PURE__ */ jsx("p", { className: "px-4 py-2 text-xs uppercase text-ink-400 font-semibold", children: "Categories" }),
                      categories.map((c) => /* @__PURE__ */ jsx(Link, { to: `/category/${c.slug}`, className: "block px-4 py-2.5 rounded-xl text-sm text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800", children: c.name }, c.id))
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "pt-2 mt-2 border-t border-ink-100 dark:border-ink-800 space-y-1", children: [
                      /* @__PURE__ */ jsx(Link, { to: "/about", className: "block px-4 py-2.5 rounded-xl text-sm text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800", children: "About Us" }),
                      /* @__PURE__ */ jsx(Link, { to: "/contact", className: "block px-4 py-2.5 rounded-xl text-sm text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800", children: "Contact Us" }),
                      /* @__PURE__ */ jsx(Link, { to: "/faq", className: "block px-4 py-2.5 rounded-xl text-sm text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800", children: "FAQ" })
                    ] })
                  ] })
                ] })
              ]
            }
          )
        ]
      }
    ) })
  ] });
}
