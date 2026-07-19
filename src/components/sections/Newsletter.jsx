import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";
import { useToast } from "../../context/AppContext";
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const { notify } = useToast();
  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    notify("Subscribed! Check your inbox for 15% off.", "success");
    setEmail("");
    setTimeout(() => setDone(false), 3e3);
  };
  return /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto px-4", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true },
      transition: { duration: 0.5 },
      className: "relative overflow-hidden rounded-[2.5rem] bg-gradient-luxe p-8 md:p-14 text-center",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary-500/30 blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-accent-500/30 blur-3xl" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex p-4 rounded-3xl glass mb-5", children: /* @__PURE__ */ jsx(Mail, { size: 28, className: "text-primary-400" }) }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-3", children: "Join the LUXE Circle" }),
          /* @__PURE__ */ jsx("p", { className: "text-ink-300 max-w-xl mx-auto mb-7", children: "Subscribe for early access to new collections, private sales, and 15% off your first order." }),
          /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "max-w-md mx-auto flex gap-2", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                required: true,
                value: email,
                onChange: (e) => setEmail(e.target.value),
                placeholder: "your@email.com",
                className: "flex-1 px-5 py-3.5 rounded-2xl glass-strong text-white placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              }
            ),
            /* @__PURE__ */ jsxs(Button, { type: "submit", variant: "primary", size: "lg", children: [
              done ? /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }) : /* @__PURE__ */ jsx(Send, { size: 18 }),
              done ? "Done" : "Subscribe"
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-xs text-ink-400", children: "No spam. Unsubscribe anytime." })
        ] })
      ]
    }
  ) }) });
}
