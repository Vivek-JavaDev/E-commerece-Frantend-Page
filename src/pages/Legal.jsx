import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Breadcrumb } from "../components/ui/Breadcrumb";
const privacySections = [
  { heading: "1. Introduction", body: "At LUXE, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from us." },
  { heading: "2. Information We Collect", body: "We collect information you provide directly to us, such as your name, email address, shipping address, and payment information when you create an account or place an order. We also automatically collect certain information about your device and browsing behavior." },
  { heading: "3. How We Use Your Information", body: "We use your information to process orders, communicate with you about your purchases, personalize your shopping experience, improve our services, and send marketing communications (with your consent)." },
  { heading: "4. Sharing Your Information", body: "We do not sell your personal information. We may share your data with trusted service providers who help us operate our business, such as payment processors and shipping carriers, all of whom are bound by confidentiality obligations." },
  { heading: "5. Data Security", body: "We implement industry-standard security measures including 256-bit SSL encryption to protect your personal information. However, no method of transmission over the internet is 100% secure." },
  { heading: "6. Your Rights", body: "You have the right to access, correct, or delete your personal information. You can also opt out of marketing communications at any time by clicking the unsubscribe link in our emails." },
  { heading: "7. Cookies", body: "We use cookies and similar technologies to enhance your browsing experience, analyze traffic, and personalize content. You can control cookies through your browser settings." },
  { heading: "8. Changes to This Policy", body: "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated revision date." }
];
const termsSections = [
  { heading: "1. Acceptance of Terms", body: "By accessing and using the LUXE website, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our service." },
  { heading: "2. Use of Our Service", body: "You must be at least 18 years old to use our service. You agree to provide accurate information and to use our website only for lawful purposes." },
  { heading: "3. Products and Pricing", body: "All products are subject to availability. We reserve the right to limit quantities and to correct pricing errors. Prices are displayed in USD unless otherwise noted." },
  { heading: "4. Orders and Payment", body: "When you place an order, you authorize us to charge your payment method for the total amount. We reserve the right to refuse or cancel any order at our discretion." },
  { heading: "5. Shipping and Delivery", body: "We offer free express shipping on orders over $75. Delivery times are estimates and not guaranteed. Risk of loss passes to you upon delivery." },
  { heading: "6. Returns and Refunds", body: "We accept returns within 30 days of delivery for unused items in original packaging. Refunds are processed within 5-7 business days of receiving your return." },
  { heading: "7. Intellectual Property", body: "All content on this website, including text, graphics, logos, and images, is the property of LUXE or its licensors and is protected by copyright and trademark laws." },
  { heading: "8. Limitation of Liability", body: "LUXE shall not be liable for any indirect, incidental, or consequential damages arising from your use of our service or products." },
  { heading: "9. Governing Law", body: "These terms shall be governed by and construed in accordance with the laws of France, without regard to its conflict of law principles." }
];
export function Privacy() {
  return /* @__PURE__ */ jsx(LegalPage, { title: "Privacy Policy", subtitle: "Last updated: July 2026", sections: privacySections });
}
export function Terms() {
  return /* @__PURE__ */ jsx(LegalPage, { title: "Terms & Conditions", subtitle: "Last updated: July 2026", sections: termsSections });
}
function LegalPage({ title, subtitle, sections }) {
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsx(Breadcrumb, { items: [{ label: "Home", to: "/" }, { label: title }] }),
    /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "mt-4 mb-10", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold text-ink-900 dark:text-ink-50", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-ink-500 mt-2", children: subtitle })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-6", children: sections.map((s, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.05 },
        className: "p-6 rounded-3xl glass border border-ink-100 dark:border-ink-800",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-xl font-bold text-ink-900 dark:text-ink-50 mb-2", children: s.heading }),
          /* @__PURE__ */ jsx("p", { className: "text-ink-600 dark:text-ink-300 leading-relaxed", children: s.body })
        ]
      },
      i
    )) })
  ] });
}
