import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useAuth, useToast } from "../context/AppContext";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Logo } from "../components/layout/Logo";
export function Register() {
  const { register } = useAuth();
  const { notify } = useToast();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name) errs.name = "Name is required";
    if (!form.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.password) errs.password = "Password is required";
    else if (form.password.length < 6) errs.password = "Min 6 characters";
    if (form.confirm !== form.password) errs.confirm = "Passwords do not match";
    if (!agree) errs.agree = "Please accept the terms";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setLoading(true);
    const ok = await register(form.name, form.email, form.password);
    setLoading(false);
    if (ok) {
      notify("Account created! Welcome to LUXE.", "success");
      navigate("/");
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12", children: /* @__PURE__ */ jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "w-full max-w-md", children: /* @__PURE__ */ jsxs("div", { className: "rounded-[2rem] glass-strong border border-ink-100 dark:border-ink-800 p-8 shadow-premium", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-6", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex mb-4", children: /* @__PURE__ */ jsx(Logo, {}) }),
      /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl font-bold text-ink-900 dark:text-ink-50", children: "Create Account" }),
      /* @__PURE__ */ jsx("p", { className: "text-ink-500 mt-1 text-sm", children: "Join the LUXE circle and get 15% off" })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-4", children: [
      /* @__PURE__ */ jsx(Input, { label: "Full Name", value: form.name, onChange: (e) => setForm((f) => ({ ...f, name: e.target.value })), error: errors.name, icon: /* @__PURE__ */ jsx(User, { size: 16 }), placeholder: "Your name" }),
      /* @__PURE__ */ jsx(Input, { label: "Email Address", type: "email", value: form.email, onChange: (e) => setForm((f) => ({ ...f, email: e.target.value })), error: errors.email, icon: /* @__PURE__ */ jsx(Mail, { size: 16 }), placeholder: "you@email.com" }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(Input, { label: "Password", type: show ? "text" : "password", value: form.password, onChange: (e) => setForm((f) => ({ ...f, password: e.target.value })), error: errors.password, icon: /* @__PURE__ */ jsx(Lock, { size: 16 }), placeholder: "Min 6 characters" }),
        /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setShow((s) => !s), className: "absolute right-3 top-9 text-ink-400 hover:text-primary-500", children: show ? /* @__PURE__ */ jsx(EyeOff, { size: 18 }) : /* @__PURE__ */ jsx(Eye, { size: 18 }) })
      ] }),
      /* @__PURE__ */ jsx(Input, { label: "Confirm Password", type: show ? "text" : "password", value: form.confirm, onChange: (e) => setForm((f) => ({ ...f, confirm: e.target.value })), error: errors.confirm, icon: /* @__PURE__ */ jsx(Lock, { size: 16 }), placeholder: "Re-enter password" }),
      /* @__PURE__ */ jsxs("label", { className: "flex items-start gap-2 cursor-pointer", children: [
        /* @__PURE__ */ jsx("input", { type: "checkbox", checked: agree, onChange: (e) => setAgree(e.target.checked), className: "w-4 h-4 rounded accent-primary-500 mt-0.5" }),
        /* @__PURE__ */ jsxs("span", { className: "text-sm text-ink-600 dark:text-ink-300", children: [
          "I agree to the ",
          /* @__PURE__ */ jsx(Link, { to: "/terms", className: "text-primary-500 hover:underline", children: "Terms" }),
          " and ",
          /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "text-primary-500 hover:underline", children: "Privacy Policy" })
        ] })
      ] }),
      errors.agree && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-500", children: errors.agree }),
      /* @__PURE__ */ jsxs(Button, { type: "submit", fullWidth: true, size: "lg", loading, children: [
        "Create Account ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-center text-sm text-ink-500 mt-6", children: [
      "Already have an account? ",
      /* @__PURE__ */ jsx(Link, { to: "/login", className: "text-primary-500 font-semibold hover:underline", children: "Sign in" })
    ] })
  ] }) }) });
}
