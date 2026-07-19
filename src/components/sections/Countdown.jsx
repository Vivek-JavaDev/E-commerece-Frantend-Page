import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
export function Countdown({ hours = 24, onComplete, variant = "light" }) {
  const [remaining, setRemaining] = useState(hours * 3600);
  useEffect(() => {
    const t = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(t);
          onComplete?.();
          return 0;
        }
        return r - 1;
      });
    }, 1e3);
    return () => clearInterval(t);
  }, [onComplete]);
  const h = Math.floor(remaining / 3600);
  const m = Math.floor(remaining % 3600 / 60);
  const s = remaining % 60;
  const pad = (n) => String(n).padStart(2, "0");
  const items = [
    { label: "Hours", value: pad(h) },
    { label: "Mins", value: pad(m) },
    { label: "Secs", value: pad(s) }
  ];
  const textClass = variant === "dark" ? "text-white" : "text-ink-900 dark:text-ink-50";
  const labelClass = variant === "dark" ? "text-ink-300" : "text-ink-500";
  return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: items.map((it, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("div", { className: `px-3 py-2 rounded-2xl glass-strong font-display text-2xl font-bold ${textClass} min-w-[3rem]`, children: it.value }),
      /* @__PURE__ */ jsx("p", { className: `text-[10px] uppercase tracking-wider mt-1 ${labelClass}`, children: it.label })
    ] }),
    i < items.length - 1 && /* @__PURE__ */ jsx("span", { className: `text-2xl font-bold ${labelClass}`, children: ":" })
  ] }, i)) });
}
