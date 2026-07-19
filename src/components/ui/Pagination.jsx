import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ChevronLeft, ChevronRight } from "lucide-react";
export function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;
  const pages = [];
  const start = Math.max(1, page - 2);
  const end = Math.min(totalPages, page + 2);
  for (let i = start; i <= end; i++) pages.push(i);
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mt-10", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => onChange(Math.max(1, page - 1)),
        disabled: page === 1,
        className: "p-2.5 rounded-2xl border border-ink-200 dark:border-ink-700 text-ink-600 dark:text-ink-300 hover:border-primary-500 hover:text-primary-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all",
        children: /* @__PURE__ */ jsx(ChevronLeft, { size: 18 })
      }
    ),
    start > 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("button", { onClick: () => onChange(1), className: "w-10 h-10 rounded-2xl text-ink-600 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-800", children: "1" }),
      start > 2 && /* @__PURE__ */ jsx("span", { className: "px-1 text-ink-400", children: "\u2026" })
    ] }),
    pages.map((p) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => onChange(p),
        className: `w-10 h-10 rounded-2xl font-semibold transition-all ${p === page ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-glow" : "text-ink-600 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-800 border border-ink-200 dark:border-ink-700"}`,
        children: p
      },
      p
    )),
    end < totalPages && /* @__PURE__ */ jsxs(Fragment, { children: [
      end < totalPages - 1 && /* @__PURE__ */ jsx("span", { className: "px-1 text-ink-400", children: "\u2026" }),
      /* @__PURE__ */ jsx("button", { onClick: () => onChange(totalPages), className: "w-10 h-10 rounded-2xl text-ink-600 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-800", children: totalPages })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => onChange(Math.min(totalPages, page + 1)),
        disabled: page === totalPages,
        className: "p-2.5 rounded-2xl border border-ink-200 dark:border-ink-700 text-ink-600 dark:text-ink-300 hover:border-primary-500 hover:text-primary-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all",
        children: /* @__PURE__ */ jsx(ChevronRight, { size: 18 })
      }
    )
  ] });
}
