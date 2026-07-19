import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { forwardRef } from "react";
const variants = {
  primary: "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-glow hover:shadow-premium",
  secondary: "bg-ink-900 text-white dark:bg-white dark:text-ink-900 hover:opacity-90",
  outline: "border-2 border-ink-300 dark:border-ink-700 text-ink-800 dark:text-ink-100 hover:border-primary-500 dark:hover:border-primary-400",
  ghost: "text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800",
  danger: "bg-red-500 text-white hover:bg-red-600",
  gold: "bg-gradient-to-r from-accent-400 to-accent-500 text-ink-900 shadow-soft hover:shadow-premium"
};
const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
  icon: "p-2.5"
};
export const Button = forwardRef(
  ({ variant = "primary", size = "md", children, loading, fullWidth, className = "", disabled, ...rest }, ref) => {
    return /* @__PURE__ */ jsxs(
      motion.button,
      {
        ref,
        whileTap: { scale: 0.96 },
        whileHover: { scale: 1.02 },
        transition: { type: "spring", stiffness: 400, damping: 17 },
        className: `btn-ripple inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`,
        disabled: disabled || loading,
        ...rest,
        children: [
          loading && /* @__PURE__ */ jsx("span", { className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" }),
          children
        ]
      }
    );
  }
);
Button.displayName = "Button";
