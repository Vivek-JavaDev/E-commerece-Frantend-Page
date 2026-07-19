import { jsx, jsxs } from "react/jsx-runtime";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Info, AlertTriangle, X } from "lucide-react";
import { useToast } from "../../context/AppContext";
const config = {
  success: { icon: CheckCircle2, color: "text-emerald-500", bg: "from-emerald-500/10" },
  error: { icon: XCircle, color: "text-red-500", bg: "from-red-500/10" },
  info: { icon: Info, color: "text-sky-500", bg: "from-sky-500/10" },
  warning: { icon: AlertTriangle, color: "text-amber-500", bg: "from-amber-500/10" }
};
export function ToastContainer() {
  const { toasts, dismiss } = useToast();
  return /* @__PURE__ */ jsx("div", { className: "fixed bottom-6 right-6 z-[200] flex flex-col gap-3 max-w-sm", children: /* @__PURE__ */ jsx(AnimatePresence, { children: toasts.map((t) => {
    const c = config[t.type];
    const Icon = c.icon;
    return /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 100, scale: 0.9 },
        animate: { opacity: 1, x: 0, scale: 1 },
        exit: { opacity: 0, x: 100, scale: 0.9 },
        transition: { type: "spring", stiffness: 300, damping: 25 },
        className: `glass-strong rounded-2xl shadow-premium px-4 py-3 flex items-start gap-3 bg-gradient-to-r ${c.bg} to-transparent`,
        children: [
          /* @__PURE__ */ jsx(Icon, { size: 20, className: `shrink-0 mt-0.5 ${c.color}` }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-ink-800 dark:text-ink-100 flex-1", children: t.message }),
          /* @__PURE__ */ jsx("button", { onClick: () => dismiss(t.id), className: "text-ink-400 hover:text-ink-700 dark:hover:text-ink-100", children: /* @__PURE__ */ jsx(X, { size: 16 }) })
        ]
      },
      t.id
    );
  }) }) });
}
