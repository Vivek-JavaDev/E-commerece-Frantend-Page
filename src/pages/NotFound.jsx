import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";
import { Button } from "../components/ui/Button";
export function NotFound() {
  return /* @__PURE__ */ jsx("div", { className: "min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12", children: /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "text-center max-w-md", children: [
    /* @__PURE__ */ jsx("div", { className: "relative inline-block mb-6", children: /* @__PURE__ */ jsx(
      motion.p,
      {
        initial: { scale: 0.5, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { type: "spring", stiffness: 200 },
        className: "font-display text-[10rem] md:text-[14rem] font-bold gradient-text leading-none",
        children: "404"
      }
    ) }),
    /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl font-bold text-ink-900 dark:text-ink-50 mb-3", children: "Page Not Found" }),
    /* @__PURE__ */ jsx("p", { className: "text-ink-500 mb-8", children: "The page you're looking for has wandered off. Let's get you back to something beautiful." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsxs(Button, { size: "lg", children: [
        /* @__PURE__ */ jsx(Home, { size: 18 }),
        " Back to Home"
      ] }) }),
      /* @__PURE__ */ jsx(Link, { to: "/shop", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "lg", children: [
        /* @__PURE__ */ jsx(Search, { size: 18 }),
        " Browse Products"
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        animate: { y: [0, -10, 0] },
        transition: { repeat: Infinity, duration: 3 },
        className: "mt-10 text-6xl opacity-30",
        children: "\u2728"
      }
    )
  ] }) });
}
