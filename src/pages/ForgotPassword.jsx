import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { useToast } from "../context/AppContext";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Logo } from "../components/layout/Logo";
export function ForgotPassword() {
  const { notify } = useToast();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email");
      return;
    }
    setSent(true);
    notify("Reset link sent to your email", "success");
  };
  return /* @__PURE__ */ jsx("div", { className: "min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12", children: /* @__PURE__ */ jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "w-full max-w-md", children: /* @__PURE__ */ jsxs("div", { className: "rounded-[2rem] glass-strong border border-ink-100 dark:border-ink-800 p-8 shadow-premium", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-6", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex mb-4", children: /* @__PURE__ */ jsx(Logo, {}) }),
      /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl font-bold text-ink-900 dark:text-ink-50", children: "Reset Password" }),
      /* @__PURE__ */ jsx("p", { className: "text-ink-500 mt-1 text-sm", children: "We'll send you a link to reset your password" })
    ] }),
    sent ? /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, className: "text-center py-6", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex p-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 mb-4", children: /* @__PURE__ */ jsx(CheckCircle2, { size: 40, className: "text-emerald-500" }) }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-xl font-bold text-ink-900 dark:text-ink-50 mb-2", children: "Check your inbox" }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-ink-500 mb-6", children: [
        "We've sent a password reset link to ",
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-ink-700 dark:text-ink-200", children: email })
      ] }),
      /* @__PURE__ */ jsxs(Link, { to: "/login", className: "inline-flex items-center gap-2 text-primary-500 font-semibold hover:underline", children: [
        /* @__PURE__ */ jsx(ArrowRight, { size: 16 }),
        " Back to Sign In"
      ] })
    ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-4", children: [
      /* @__PURE__ */ jsx(Input, { label: "Email Address", type: "email", value: email, onChange: (e) => setEmail(e.target.value), error, icon: /* @__PURE__ */ jsx(Mail, { size: 16 }), placeholder: "you@email.com" }),
      /* @__PURE__ */ jsxs(Button, { type: "submit", fullWidth: true, size: "lg", children: [
        "Send Reset Link ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
      ] })
    ] }),
    !sent && /* @__PURE__ */ jsxs("p", { className: "text-center text-sm text-ink-500 mt-6", children: [
      "Remembered your password? ",
      /* @__PURE__ */ jsx(Link, { to: "/login", className: "text-primary-500 font-semibold hover:underline", children: "Sign in" })
    ] })
  ] }) }) });
}
