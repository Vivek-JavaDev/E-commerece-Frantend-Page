import { useMemo, useState, useEffect } from "react";
import { products } from "../data/products";
export function useProducts(filters = {}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, [filters.search, filters.category, filters.brand, filters.tag]);
  const filtered = useMemo(() => {
    let list = [...products];
    if (filters.search) {
      const q = filters.search.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }
    if (filters.category) list = list.filter((p) => p.category === filters.category);
    if (filters.brand) list = list.filter((p) => p.brand === filters.brand);
    if (filters.color) list = list.filter((p) => p.colors.includes(filters.color));
    if (filters.size) list = list.filter((p) => p.sizes?.includes(filters.size));
    if (filters.minPrice !== void 0) list = list.filter((p) => p.price >= filters.minPrice);
    if (filters.maxPrice !== void 0) list = list.filter((p) => p.price <= filters.maxPrice);
    if (filters.minRating !== void 0) list = list.filter((p) => p.rating >= filters.minRating);
    if (filters.inStock) list = list.filter((p) => p.stock > 0);
    if (filters.tag) list = list.filter((p) => p.tags.includes(filters.tag));
    switch (filters.sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
        list.sort((a, b) => b.reviews - a.reviews);
        break;
      case "discount":
        list.sort((a, b) => (b.discount || 0) - (a.discount || 0));
        break;
      case "newest":
      default:
        list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    return list;
  }, [filters]);
  return { products: filtered, loading };
}
export function useProduct(id) {
  return useMemo(() => products.find((p) => p.id === id), [id]);
}
export function useRelatedProducts(product, limit = 4) {
  return useMemo(() => {
    if (!product) return [];
    return products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit);
  }, [product, limit]);
}
