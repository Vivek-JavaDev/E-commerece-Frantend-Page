import { jsx } from "react/jsx-runtime";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo
} from "react";
import { products as allProducts } from "../data/products";
const ThemeContext = createContext(void 0);
const CartContext = createContext(void 0);
const WishlistContext = createContext(void 0);
const AuthContext = createContext(void 0);
const CompareContext = createContext(void 0);
const RecentContext = createContext(void 0);
const ToastContext = createContext(void 0);
const SearchContext = createContext(void 0);
export const useTheme = () => {
  const c = useContext(ThemeContext);
  if (!c) throw new Error("useTheme must be used within AppProvider");
  return c;
};
export const useCart = () => {
  const c = useContext(CartContext);
  if (!c) throw new Error("useCart must be used within AppProvider");
  return c;
};
export const useWishlist = () => {
  const c = useContext(WishlistContext);
  if (!c) throw new Error("useWishlist must be used within AppProvider");
  return c;
};
export const useAuth = () => {
  const c = useContext(AuthContext);
  if (!c) throw new Error("useAuth must be used within AppProvider");
  return c;
};
export const useCompare = () => {
  const c = useContext(CompareContext);
  if (!c) throw new Error("useCompare must be used within AppProvider");
  return c;
};
export const useRecent = () => {
  const c = useContext(RecentContext);
  if (!c) throw new Error("useRecent must be used within AppProvider");
  return c;
};
export const useToast = () => {
  const c = useContext(ToastContext);
  if (!c) throw new Error("useToast must be used within AppProvider");
  return c;
};
export const useSearch = () => {
  const c = useContext(SearchContext);
  if (!c) throw new Error("useSearch must be used within AppProvider");
  return c;
};
const load = (key, fallback) => {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
};
const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
  }
};
export function AppProvider({ children }) {
  const [theme, setTheme] = useState(() => load("luxe:theme", "light"));
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    save("luxe:theme", theme);
  }, [theme]);
  const toggleTheme = useCallback(() => setTheme((t) => t === "light" ? "dark" : "light"), []);
  const [cartItems, setCartItems] = useState(() => load("luxe:cart", []));
  const [coupon, setCoupon] = useState(() => load("luxe:coupon", null));
  useEffect(() => save("luxe:cart", cartItems), [cartItems]);
  useEffect(() => save("luxe:coupon", coupon), [coupon]);
  const addToCart = useCallback((product, quantity = 1, color, size) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id && i.color === color && i.size === size);
      if (existing) {
        return prev.map(
          (i) => i.product.id === product.id && i.color === color && i.size === size ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { product, quantity, color, size }];
    });
  }, []);
  const removeFromCart = useCallback((productId) => {
    setCartItems((prev) => prev.filter((i) => i.product.id !== productId));
  }, []);
  const updateQuantity = useCallback((productId, quantity) => {
    setCartItems(
      (prev) => prev.map((i) => i.product.id === productId ? { ...i, quantity: Math.max(1, quantity) } : i)
    );
  }, []);
  const clearCart = useCallback(() => setCartItems([]), []);
  const applyCoupon = useCallback((code) => {
    const valid = ["LUXE10", "WELCOME20", "FREESHIP", "VIP50"];
    if (valid.includes(code.toUpperCase())) {
      setCoupon(code.toUpperCase());
      return true;
    }
    return false;
  }, []);
  const removeCoupon = useCallback(() => setCoupon(null), []);
  const subtotal = useMemo(() => cartItems.reduce((s, i) => s + i.product.price * i.quantity, 0), [cartItems]);
  const discount = useMemo(() => {
    if (!coupon) return 0;
    const map = {
      LUXE10: { discount: 10, type: "percent", minSpend: 0 },
      WELCOME20: { discount: 20, type: "percent", minSpend: 200 },
      FREESHIP: { discount: 15, type: "flat", minSpend: 75 },
      VIP50: { discount: 50, type: "flat", minSpend: 500 }
    };
    const c = map[coupon];
    if (!c || subtotal < c.minSpend) return 0;
    return c.type === "percent" ? subtotal * c.discount / 100 : c.discount;
  }, [coupon, subtotal]);
  const tax = useMemo(() => Math.max(0, (subtotal - discount) * 0.08), [subtotal, discount]);
  const shipping = useMemo(() => {
    if (subtotal === 0) return 0;
    if (coupon === "FREESHIP" && subtotal >= 75) return 0;
    return subtotal >= 75 ? 0 : 9.99;
  }, [subtotal, coupon]);
  const total = useMemo(() => Math.max(0, subtotal - discount + tax + shipping), [subtotal, discount, tax, shipping]);
  const count = useMemo(() => cartItems.reduce((s, i) => s + i.quantity, 0), [cartItems]);
  const [wishlist, setWishlist] = useState(() => load("luxe:wishlist", []));
  useEffect(() => save("luxe:wishlist", wishlist), [wishlist]);
  const toggleWishlist = useCallback((product) => {
    setWishlist((prev) => prev.some((p) => p.id === product.id) ? prev.filter((p) => p.id !== product.id) : [product, ...prev]);
  }, []);
  const isWishlisted = useCallback((id) => wishlist.some((p) => p.id === id), [wishlist]);
  const removeWishlist = useCallback((id) => setWishlist((prev) => prev.filter((p) => p.id !== id)), []);
  const clearWishlist = useCallback(() => setWishlist([]), []);
  const [compare, setCompare] = useState(() => load("luxe:compare", []));
  useEffect(() => save("luxe:compare", compare), [compare]);
  const toggleCompare = useCallback((product) => {
    setCompare((prev) => {
      if (prev.some((p) => p.id === product.id)) return prev.filter((p) => p.id !== product.id);
      if (prev.length >= 4) return prev;
      return [...prev, product];
    });
  }, []);
  const isCompared = useCallback((id) => compare.some((p) => p.id === id), [compare]);
  const removeCompare = useCallback((id) => setCompare((prev) => prev.filter((p) => p.id !== id)), []);
  const clearCompare = useCallback(() => setCompare([]), []);
  const [recent, setRecent] = useState(() => load("luxe:recent", []));
  useEffect(() => save("luxe:recent", recent), [recent]);
  const addRecent = useCallback((product) => {
    setRecent((prev) => [product, ...prev.filter((p) => p.id !== product.id)].slice(0, 10));
  }, []);
  const [user, setUser] = useState(() => load("luxe:user", null));
  const [orders, setOrders] = useState(() => load("luxe:orders", []));
  useEffect(() => save("luxe:user", user), [user]);
  useEffect(() => save("luxe:orders", orders), [orders]);
  const login = useCallback(async (email, _password) => {
    await new Promise((r) => setTimeout(r, 600));
    const u = {
      id: "u-" + Date.now(),
      name: email.split("@")[0].replace(/\b\w/g, (c) => c.toUpperCase()),
      email,
      avatar: `https://picsum.photos/seed/${email}/100/100`,
      joinedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    setUser(u);
    return true;
  }, []);
  const register = useCallback(async (name, email, _password) => {
    await new Promise((r) => setTimeout(r, 600));
    const u = {
      id: "u-" + Date.now(),
      name,
      email,
      avatar: `https://picsum.photos/seed/${email}/100/100`,
      joinedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    setUser(u);
    return true;
  }, []);
  const logout = useCallback(() => setUser(null), []);
  const updateProfile = useCallback((data) => setUser((u) => u ? { ...u, ...data } : u), []);
  const addOrder = useCallback((order) => setOrders((prev) => [order, ...prev]), []);
  const [toasts, setToasts] = useState([]);
  const notify = useCallback((message, type = "success") => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3500);
  }, []);
  const dismiss = useCallback((id) => setToasts((prev) => prev.filter((t) => t.id !== id)), []);
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allProducts.filter(
      (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
    );
  }, [query]);
  const suggestions = useCallback((q) => {
    if (!q.trim()) return [];
    const s = q.toLowerCase();
    return allProducts.filter((p) => p.name.toLowerCase().includes(s) || p.brand.toLowerCase().includes(s)).slice(0, 6);
  }, []);
  const themeValue = { theme, toggleTheme };
  const cartValue = {
    items: cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    coupon,
    applyCoupon,
    removeCoupon,
    subtotal,
    discount,
    tax,
    shipping,
    total,
    count
  };
  const wishlistValue = { items: wishlist, toggle: toggleWishlist, isWishlisted, remove: removeWishlist, clear: clearWishlist, count: wishlist.length };
  const authValue = { user, login, register, logout, updateProfile, orders, addOrder };
  const compareValue = { items: compare, toggle: toggleCompare, isCompared, remove: removeCompare, clear: clearCompare };
  const recentValue = { items: recent, add: addRecent };
  const toastValue = { toasts, notify, dismiss };
  const searchValue = { query, setQuery, results, suggestions };
  return /* @__PURE__ */ jsx(ThemeContext.Provider, { value: themeValue, children: /* @__PURE__ */ jsx(CartContext.Provider, { value: cartValue, children: /* @__PURE__ */ jsx(WishlistContext.Provider, { value: wishlistValue, children: /* @__PURE__ */ jsx(AuthContext.Provider, { value: authValue, children: /* @__PURE__ */ jsx(CompareContext.Provider, { value: compareValue, children: /* @__PURE__ */ jsx(RecentContext.Provider, { value: recentValue, children: /* @__PURE__ */ jsx(ToastContext.Provider, { value: toastValue, children: /* @__PURE__ */ jsx(SearchContext.Provider, { value: searchValue, children }) }) }) }) }) }) }) });
}
