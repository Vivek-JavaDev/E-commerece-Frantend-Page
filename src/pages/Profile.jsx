import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, Heart, Package, Settings, LogOut, Camera, Save } from "lucide-react";
import { useAuth, useToast, useWishlist } from "../context/AppContext";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
export function Profile() {
  const { user, updateProfile, logout, orders } = useAuth();
  const { count: wishCount } = useWishlist();
  const { notify } = useToast();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: ""
  });
  if (!user) {
    return /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 py-20 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-ink-500 mb-4", children: "Please sign in to view your profile." }),
      /* @__PURE__ */ jsx(Link, { to: "/login", className: "text-primary-500 font-semibold", children: "Sign in \u2192" })
    ] });
  }
  const save = (e) => {
    e.preventDefault();
    updateProfile({ name: form.name, email: form.email });
    setEditing(false);
    notify("Profile updated", "success");
  };
  return /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsx(Breadcrumb, { items: [{ label: "Home", to: "/" }, { label: "Profile" }] }),
    /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl font-bold text-ink-900 dark:text-ink-50 mt-4 mb-6", children: "My Profile" }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[280px_1fr] gap-8", children: [
      /* @__PURE__ */ jsxs("aside", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-3xl glass-strong border border-ink-100 dark:border-ink-800 p-6 text-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative inline-block", children: [
            /* @__PURE__ */ jsx("img", { src: user.avatar, alt: user.name, className: "w-24 h-24 rounded-full object-cover mx-auto" }),
            /* @__PURE__ */ jsx("button", { className: "absolute bottom-0 right-0 p-2 rounded-full bg-primary-500 text-white shadow-glow", children: /* @__PURE__ */ jsx(Camera, { size: 14 }) })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-xl font-bold text-ink-900 dark:text-ink-50 mt-3", children: user.name }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-ink-500", children: user.email }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-ink-400 mt-1", children: [
            "Member since ",
            new Date(user.joinedAt).toLocaleDateString("en", { month: "long", year: "numeric" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-3xl glass border border-ink-100 dark:border-ink-800 p-2", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/profile", className: "flex items-center gap-3 px-4 py-3 rounded-2xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 font-medium text-sm", children: [
            /* @__PURE__ */ jsx(User, { size: 18 }),
            " Profile"
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/orders", className: "flex items-center gap-3 px-4 py-3 rounded-2xl text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800 text-sm", children: [
            /* @__PURE__ */ jsx(Package, { size: 18 }),
            " Orders (",
            orders.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/wishlist", className: "flex items-center gap-3 px-4 py-3 rounded-2xl text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800 text-sm", children: [
            /* @__PURE__ */ jsx(Heart, { size: 18 }),
            " Wishlist (",
            wishCount,
            ")"
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/profile", className: "flex items-center gap-3 px-4 py-3 rounded-2xl text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800 text-sm", children: [
            /* @__PURE__ */ jsx(Settings, { size: 18 }),
            " Settings"
          ] }),
          /* @__PURE__ */ jsxs("button", { onClick: () => {
            logout();
            navigate("/");
          }, className: "w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 text-sm", children: [
            /* @__PURE__ */ jsx(LogOut, { size: 18 }),
            " Logout"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-3xl glass-strong border border-ink-100 dark:border-ink-800 p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsx("h2", { className: "font-display text-xl font-bold text-ink-900 dark:text-ink-50", children: "Account Information" }),
            !editing && /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", onClick: () => setEditing(true), children: "Edit" })
          ] }),
          editing ? /* @__PURE__ */ jsxs("form", { onSubmit: save, className: "space-y-4", children: [
            /* @__PURE__ */ jsx(Input, { label: "Full Name", value: form.name, onChange: (e) => setForm((f) => ({ ...f, name: e.target.value })), icon: /* @__PURE__ */ jsx(User, { size: 16 }) }),
            /* @__PURE__ */ jsx(Input, { label: "Email", type: "email", value: form.email, onChange: (e) => setForm((f) => ({ ...f, email: e.target.value })), icon: /* @__PURE__ */ jsx(Mail, { size: 16 }) }),
            /* @__PURE__ */ jsx(Input, { label: "Phone", value: form.phone, onChange: (e) => setForm((f) => ({ ...f, phone: e.target.value })), icon: /* @__PURE__ */ jsx(Phone, { size: 16 }), placeholder: "+1 555 000 0000" }),
            /* @__PURE__ */ jsx(Input, { label: "Address", value: form.address, onChange: (e) => setForm((f) => ({ ...f, address: e.target.value })), icon: /* @__PURE__ */ jsx(MapPin, { size: 16 }), placeholder: "Your address" }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxs(Button, { type: "submit", children: [
                /* @__PURE__ */ jsx(Save, { size: 16 }),
                " Save Changes"
              ] }),
              /* @__PURE__ */ jsx(Button, { type: "button", variant: "ghost", onClick: () => setEditing(false), children: "Cancel" })
            ] })
          ] }) : /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(User, { size: 16, className: "text-ink-400" }),
              /* @__PURE__ */ jsx("span", { className: "text-ink-500", children: "Name:" }),
              " ",
              /* @__PURE__ */ jsx("span", { className: "font-medium text-ink-900 dark:text-ink-50", children: user.name })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(Mail, { size: 16, className: "text-ink-400" }),
              /* @__PURE__ */ jsx("span", { className: "text-ink-500", children: "Email:" }),
              " ",
              /* @__PURE__ */ jsx("span", { className: "font-medium text-ink-900 dark:text-ink-50", children: user.email })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(Phone, { size: 16, className: "text-ink-400" }),
              /* @__PURE__ */ jsx("span", { className: "text-ink-500", children: "Phone:" }),
              " ",
              /* @__PURE__ */ jsx("span", { className: "font-medium text-ink-900 dark:text-ink-50", children: "Not set" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(MapPin, { size: 16, className: "text-ink-400" }),
              /* @__PURE__ */ jsx("span", { className: "text-ink-500", children: "Address:" }),
              " ",
              /* @__PURE__ */ jsx("span", { className: "font-medium text-ink-900 dark:text-ink-50", children: "Not set" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-3 gap-4", children: [
          { label: "Orders", value: orders.length, icon: Package, color: "from-sky-500 to-blue-500" },
          { label: "Wishlist", value: wishCount, icon: Heart, color: "from-primary-500 to-rose-500" },
          { label: "Total Spent", value: `$${orders.reduce((s, o) => s + o.total, 0).toFixed(0)}`, icon: Package, color: "from-emerald-500 to-teal-500" }
        ].map((s, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: i * 0.1 },
            className: "rounded-3xl glass border border-ink-100 dark:border-ink-800 p-5",
            children: [
              /* @__PURE__ */ jsx("div", { className: `inline-flex p-3 rounded-2xl bg-gradient-to-br ${s.color} text-white mb-3`, children: /* @__PURE__ */ jsx(s.icon, { size: 20 }) }),
              /* @__PURE__ */ jsx("p", { className: "font-display text-2xl font-bold text-ink-900 dark:text-ink-50", children: s.value }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-ink-500 uppercase tracking-wider", children: s.label })
            ]
          },
          i
        )) })
      ] })
    ] })
  ] });
}
