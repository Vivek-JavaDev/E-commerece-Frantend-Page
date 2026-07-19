import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { useToast } from "../context/AppContext";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
export function Contact() {
  const { notify } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      notify("Message sent! We will be in touch soon.", "success");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };
  const contactInfo = [
    { icon: Mail, label: "Email", value: "support@luxe.shopping" },
    { icon: Phone, label: "Phone", value: "+33 1 23 45 67 89" },
    { icon: MapPin, label: "Address", value: "24 Rue Saint-Honor\xE9, Paris, France" },
    { icon: Clock, label: "Hours", value: "Mon\u2013Fri 9am\u20136pm CET" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsx(Breadcrumb, { items: [{ label: "Home", to: "/" }, { label: "Contact Us" }] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 mb-10 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2", children: "Get in Touch" }),
      /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold text-ink-900 dark:text-ink-50", children: "Contact Us" }),
      /* @__PURE__ */ jsx("p", { className: "text-ink-500 mt-2 max-w-xl mx-auto", children: "Questions, feedback, or just want to say hello? Our concierge team is here for you." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[1fr_1.5fr] gap-8", children: [
      /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, className: "space-y-4", children: [
        contactInfo.map((c, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-5 rounded-3xl glass border border-ink-100 dark:border-ink-800", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex p-3 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 text-primary-500", children: /* @__PURE__ */ jsx(c.icon, { size: 22 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-ink-400", children: c.label }),
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-ink-900 dark:text-ink-50", children: c.value })
          ] })
        ] }, i)),
        /* @__PURE__ */ jsx("div", { className: "rounded-3xl overflow-hidden border border-ink-100 dark:border-ink-800 aspect-[16/10]", children: /* @__PURE__ */ jsx(
          "iframe",
          {
            title: "Map",
            src: "https://www.openstreetmap.org/export/embed.html?bbox=2.3%2C48.85%2C2.34%2C48.86&layer=mapnik",
            className: "w-full h-full",
            loading: "lazy"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, className: "rounded-3xl glass-strong border border-ink-100 dark:border-ink-800 p-6 md:p-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-white", children: /* @__PURE__ */ jsx(MessageSquare, { size: 22 }) }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-ink-900 dark:text-ink-50", children: "Send a Message" })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsx(Input, { label: "Your Name", required: true, value: form.name, onChange: (e) => setForm((f) => ({ ...f, name: e.target.value })), placeholder: "Jane Doe" }),
            /* @__PURE__ */ jsx(Input, { label: "Email", type: "email", required: true, value: form.email, onChange: (e) => setForm((f) => ({ ...f, email: e.target.value })), placeholder: "you@email.com" })
          ] }),
          /* @__PURE__ */ jsx(Input, { label: "Subject", required: true, value: form.subject, onChange: (e) => setForm((f) => ({ ...f, subject: e.target.value })), placeholder: "How can we help?" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-ink-700 dark:text-ink-200 mb-1.5", children: "Message" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                required: true,
                rows: 5,
                value: form.message,
                onChange: (e) => setForm((f) => ({ ...f, message: e.target.value })),
                placeholder: "Tell us more...",
                className: "w-full rounded-2xl border border-ink-200 dark:border-ink-700 bg-white/60 dark:bg-ink-900/60 backdrop-blur px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(Button, { type: "submit", size: "lg", loading, children: [
            /* @__PURE__ */ jsx(Send, { size: 18 }),
            " Send Message"
          ] })
        ] })
      ] })
    ] })
  ] });
}
