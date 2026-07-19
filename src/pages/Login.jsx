import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles } from "lucide-react";
import { useAuth, useToast } from "../context/AppContext";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Logo } from "../components/layout/Logo";
export function Login() {
  const { login } = useAuth();
  const { notify } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) errs.email = "Invalid email";
    if (!password) errs.password = "Password is required";
    else if (password.length < 6) errs.password = "Min 6 characters";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setLoading(true);
    const ok = await login(email, password);
    setLoading(false);
    if (ok) {
      notify("Welcome back!", "success");
      const from = location.state?.from || "/";
      navigate(from);
    } else {
      notify("Login failed", "error");
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      className: "w-full max-w-md",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-[2rem] glass-strong border border-ink-100 dark:border-ink-800 p-8 shadow-premium", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "inline-flex mb-4", children: /* @__PURE__ */ jsx(Logo, {}) }),
            /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl font-bold text-ink-900 dark:text-ink-50", children: "Welcome Back" }),
            /* @__PURE__ */ jsx("p", { className: "text-ink-500 mt-1 text-sm", children: "Sign in to continue your luxury journey" })
          ] }),
          /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-4", children: [
            /* @__PURE__ */ jsx(
              Input,
              {
                label: "Email Address",
                type: "email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                error: errors.email,
                icon: /* @__PURE__ */ jsx(Mail, { size: 16 }),
                placeholder: "you@email.com"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(
                Input,
                {
                  label: "Password",
                  type: show ? "text" : "password",
                  value: password,
                  onChange: (e) => setPassword(e.target.value),
                  error: errors.password,
                  icon: /* @__PURE__ */ jsx(Lock, { size: 16 }),
                  placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setShow((s) => !s),
                  className: "absolute right-3 top-9 text-ink-400 hover:text-primary-500",
                  children: show ? /* @__PURE__ */ jsx(EyeOff, { size: 18 }) : /* @__PURE__ */ jsx(Eye, { size: 18 })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
              /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
                /* @__PURE__ */ jsx("input", { type: "checkbox", className: "w-4 h-4 rounded accent-primary-500" }),
                /* @__PURE__ */ jsx("span", { className: "text-ink-600 dark:text-ink-300", children: "Remember me" })
              ] }),
              /* @__PURE__ */ jsx(Link, { to: "/forgot-password", className: "text-primary-500 hover:underline", children: "Forgot password?" })
            ] }),
            /* @__PURE__ */ jsxs(Button, { type: "submit", fullWidth: true, size: "lg", loading, children: [
              "Sign In ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "my-5 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-1 h-px bg-ink-200 dark:bg-ink-700" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-ink-400 uppercase", children: "or" }),
            /* @__PURE__ */ jsx("div", { className: "flex-1 h-px bg-ink-200 dark:bg-ink-700" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxs(Button, { variant: "outline", onClick: () => notify("Google sign-in (demo)", "info"), children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-sky-500", children: "G" }),
              " Google"
            ] }),
            /* @__PURE__ */ jsxs(Button, { variant: "outline", onClick: () => notify("Apple sign-in (demo)", "info"), children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold" }),
              " Apple"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-center text-sm text-ink-500 mt-6", children: [
            "Don't have an account? ",
            /* @__PURE__ */ jsx(Link, { to: "/register", className: "text-primary-500 font-semibold hover:underline", children: "Sign up" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-center text-xs text-ink-400 mt-4 flex items-center justify-center gap-1", children: [
          /* @__PURE__ */ jsx(Sparkles, { size: 12 }),
          " Demo: use any email & password (min 6 chars)"
        ] })
      ]
    }
  ) });
}
