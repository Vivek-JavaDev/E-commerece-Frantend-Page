import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
const sizes = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl"
};
export function Modal({ open, onClose, children, title, size = "md" }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-[100] flex items-center justify-center p-4",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-ink-950/60 backdrop-blur-sm", onClick: onClose }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95, y: 20 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: { opacity: 0, scale: 0.95, y: 20 },
            transition: { type: "spring", stiffness: 300, damping: 25 },
            className: `relative w-full ${sizes[size]} glass-strong rounded-3xl shadow-premium max-h-[90vh] overflow-y-auto no-scrollbar`,
            children: [
              title && /* @__PURE__ */ jsxs("div", { className: "sticky top-0 z-10 glass-strong px-6 py-4 border-b border-ink-100 dark:border-ink-800 flex items-center justify-between", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-ink-900 dark:text-ink-50", children: title }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: onClose,
                    className: "p-2 rounded-full hover:bg-ink-100 dark:hover:bg-ink-800 text-ink-500",
                    children: /* @__PURE__ */ jsx(X, { size: 20 })
                  }
                )
              ] }),
              !title && /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: onClose,
                  className: "absolute top-4 right-4 z-10 p-2 rounded-full glass hover:bg-ink-100 dark:hover:bg-ink-800 text-ink-500",
                  children: /* @__PURE__ */ jsx(X, { size: 20 })
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "p-6", children })
            ]
          }
        )
      ]
    }
  ) });
}
