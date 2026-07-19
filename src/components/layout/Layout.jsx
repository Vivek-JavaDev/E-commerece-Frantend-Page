import { jsx, jsxs } from "react/jsx-runtime";
import { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ToastContainer } from "../ui/Toast";
import { Loader } from "../ui/Loader";
export function Layout({ children }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col bg-white dark:bg-ink-950 transition-colors", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { className: "py-20", children: /* @__PURE__ */ jsx(Loader, { size: 48 }) }), children }) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(ToastContainer, {})
  ] });
}
