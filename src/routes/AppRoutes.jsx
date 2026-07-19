import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Loader } from "../components/ui/Loader";
import { useAuth } from "../context/AppContext";
const Home = lazy(() => import("../pages/Home").then((m) => ({ default: m.Home })));
const Shop = lazy(() => import("../pages/Shop").then((m) => ({ default: m.Shop })));
const ProductDetails = lazy(() => import("../pages/ProductDetails").then((m) => ({ default: m.ProductDetails })));
const Categories = lazy(() => import("../pages/Categories").then((m) => ({ default: m.Categories })));
const CategoryPage = lazy(() => import("../pages/CategoryPage").then((m) => ({ default: m.CategoryPage })));
const Cart = lazy(() => import("../pages/Cart").then((m) => ({ default: m.Cart })));
const Checkout = lazy(() => import("../pages/Checkout").then((m) => ({ default: m.Checkout })));
const OrderSuccess = lazy(() => import("../pages/OrderSuccess").then((m) => ({ default: m.OrderSuccess })));
const Wishlist = lazy(() => import("../pages/Wishlist").then((m) => ({ default: m.Wishlist })));
const Compare = lazy(() => import("../pages/Compare").then((m) => ({ default: m.Compare })));
const MyOrders = lazy(() => import("../pages/MyOrders").then((m) => ({ default: m.MyOrders })));
const Profile = lazy(() => import("../pages/Profile").then((m) => ({ default: m.Profile })));
const Login = lazy(() => import("../pages/Login").then((m) => ({ default: m.Login })));
const Register = lazy(() => import("../pages/Register").then((m) => ({ default: m.Register })));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword").then((m) => ({ default: m.ForgotPassword })));
const About = lazy(() => import("../pages/About").then((m) => ({ default: m.About })));
const Contact = lazy(() => import("../pages/Contact").then((m) => ({ default: m.Contact })));
const FAQ = lazy(() => import("../pages/FAQ").then((m) => ({ default: m.FAQ })));
const Privacy = lazy(() => import("../pages/Legal").then((m) => ({ default: m.Privacy })));
const Terms = lazy(() => import("../pages/Legal").then((m) => ({ default: m.Terms })));
const NotFound = lazy(() => import("../pages/NotFound").then((m) => ({ default: m.NotFound })));
function Protected({ children }) {
  const { user } = useAuth();
  const location = useLocation();
  if (!user) {
    return /* @__PURE__ */ jsx(Navigate, { to: "/login", state: { from: location.pathname }, replace: true });
  }
  return /* @__PURE__ */ jsx(Fragment, { children });
}
export function AppRoutes() {
  return /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { className: "py-20", children: /* @__PURE__ */ jsx(Loader, { size: 48 }) }), children: /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Home, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/shop", element: /* @__PURE__ */ jsx(Shop, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/product/:id", element: /* @__PURE__ */ jsx(ProductDetails, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/categories", element: /* @__PURE__ */ jsx(Categories, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/category/:slug", element: /* @__PURE__ */ jsx(CategoryPage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/cart", element: /* @__PURE__ */ jsx(Cart, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/checkout", element: /* @__PURE__ */ jsx(Protected, { children: /* @__PURE__ */ jsx(Checkout, {}) }) }),
    /* @__PURE__ */ jsx(Route, { path: "/order-success", element: /* @__PURE__ */ jsx(Protected, { children: /* @__PURE__ */ jsx(OrderSuccess, {}) }) }),
    /* @__PURE__ */ jsx(Route, { path: "/wishlist", element: /* @__PURE__ */ jsx(Wishlist, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/compare", element: /* @__PURE__ */ jsx(Compare, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/orders", element: /* @__PURE__ */ jsx(Protected, { children: /* @__PURE__ */ jsx(MyOrders, {}) }) }),
    /* @__PURE__ */ jsx(Route, { path: "/profile", element: /* @__PURE__ */ jsx(Protected, { children: /* @__PURE__ */ jsx(Profile, {}) }) }),
    /* @__PURE__ */ jsx(Route, { path: "/login", element: /* @__PURE__ */ jsx(Login, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/register", element: /* @__PURE__ */ jsx(Register, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/forgot-password", element: /* @__PURE__ */ jsx(ForgotPassword, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/about", element: /* @__PURE__ */ jsx(About, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsx(Contact, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/faq", element: /* @__PURE__ */ jsx(FAQ, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/privacy", element: /* @__PURE__ */ jsx(Privacy, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/terms", element: /* @__PURE__ */ jsx(Terms, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NotFound, {}) })
  ] }) });
}
