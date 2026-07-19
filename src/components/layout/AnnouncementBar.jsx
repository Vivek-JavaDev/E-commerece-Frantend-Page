import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Truck, Gift, Sparkles } from "lucide-react";
const messages = [
  { icon: Truck, text: "Free express shipping on orders over $75" },
  { icon: Gift, text: "Get 15% off your first order \u2014 use code WELCOME15" },
  { icon: Sparkles, text: "New season drop: Summer Collection 2026 is here" }
];
export function AnnouncementBar() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % messages.length), 4e3);
    return () => clearInterval(t);
  }, []);
  const Item = messages[idx];
  return /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 text-white text-xs sm:text-sm py-2.5 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex items-center justify-center gap-2 text-center font-medium", children: [
    /* @__PURE__ */ jsx(Item.icon, { size: 14, className: "shrink-0" }),
    /* @__PURE__ */ jsx("span", { children: Item.text })
  ] }) });
}
