const img = (seed, w = 600, h = 600) => `https://picsum.photos/seed/${seed}/${w}/${h}`;
const productImage = (id, variant = 1) => `https://picsum.photos/seed/luxe-p${id}-${variant}/600/600`;
export const categories = [
  {
    id: "c1",
    name: "Fashion",
    slug: "fashion",
    icon: "GiClothes",
    image: img("cat-fashion", 400, 400),
    subcategories: ["Men", "Women", "Kids", "Accessories", "Footwear"]
  },
  {
    id: "c2",
    name: "Electronics",
    slug: "electronics",
    icon: "BsLaptop",
    image: img("cat-electronics", 400, 400),
    subcategories: ["Laptops", "Phones", "Audio", "Wearables", "Cameras"]
  },
  {
    id: "c3",
    name: "Home & Living",
    slug: "home-living",
    icon: "BsHouseDoor",
    image: img("cat-home", 400, 400),
    subcategories: ["Furniture", "Decor", "Kitchen", "Bedding", "Lighting"]
  },
  {
    id: "c4",
    name: "Beauty",
    slug: "beauty",
    icon: "BsDroplet",
    image: img("cat-beauty", 400, 400),
    subcategories: ["Skincare", "Makeup", "Fragrance", "Haircare"]
  },
  {
    id: "c5",
    name: "Sports",
    slug: "sports",
    icon: "BsActivity",
    image: img("cat-sports", 400, 400),
    subcategories: ["Fitness", "Outdoor", "Yoga", "Cycling", "Swimming"]
  },
  {
    id: "c6",
    name: "Watches",
    slug: "watches",
    icon: "BsClock",
    image: img("cat-watches", 400, 400),
    subcategories: ["Luxury", "Smart", "Classic", "Sport"]
  }
];
export const brands = [
  { id: "b1", name: "Aurelia", logo: img("brand-aurelia", 200, 80) },
  { id: "b2", name: "Nordic", logo: img("brand-nordic", 200, 80) },
  { id: "b3", name: "Vertex", logo: img("brand-vertex", 200, 80) },
  { id: "b4", name: "Lumi\xE8re", logo: img("brand-lumiere", 200, 80) },
  { id: "b5", name: "Zephyr", logo: img("brand-zephyr", 200, 80) },
  { id: "b6", name: "Onyx", logo: img("brand-onyx", 200, 80) },
  { id: "b7", name: "Marlowe", logo: img("brand-marlowe", 200, 80) },
  { id: "b8", name: "Kairos", logo: img("brand-kairos", 200, 80) }
];
const names = {
  fashion: ["Silk Wrap Dress", "Cashmere Overcoat", "Linen Shirt", "Tailored Blazer", "Pleated Maxi Skirt", "Wool Turtleneck", "Oxford Leather Shoes", "Suede Loafers", "Designer Handbag", "Leather Belt", "Pima Polo Tee", "Velvet Gown", "Denim Jacket", "Chino Trousers", "Trench Coat"],
  electronics: ["Wireless Earbuds Pro", "4K Action Camera", "Smartwatch Series 7", "Gaming Laptop Ultra", "Noise-Cancel Headphones", "Bluetooth Speaker", "Drone Mini Pro", "Mechanical Keyboard", 'Curved Monitor 32"', "Tablet Air", "Power Bank 20K", "Webcam 4K Pro", "VR Headset Vision", "Smart Home Hub", "Portable SSD 1TB"],
  "home-living": ["Velvet Sectional Sofa", "Oak Coffee Table", "Ceramic Vase Set", "Linen Duvet Cover", "Brass Floor Lamp", "Marble Dining Set", "Wool Area Rug", "Crystal Chandelier", "Bamboo Plant Stand", "Glass Side Table", "Scented Candle Trio", "Linen Throw Pillow", "Walnut Bookshelf", "Cotton Bath Towel Set", "Copper Cookware Set"],
  beauty: ["Rose Gold Serum", "Hydra Glow Cream", "Velvet Matte Lipstick", "Eau de Parfum Noir", "Argan Oil Shampoo", "Mineral Sunscreen SPF50", "24H Foundation", "Brow Sculpt Kit", "Eye Lift Cream", "Hair Repair Mask", "Vitamin C Booster", "Lash Lift Mascara", "Cleansing Balm", "Tinted Lip Oil", "Body Souffle"],
  sports: ["Carbon Running Shoes", "Pro Yoga Mat", "Adjustable Dumbbell Set", "Cycling Jersey Pro", "Insulated Water Bottle", "Trekking Backpack 40L", "Resistance Band Kit", "Smart Jump Rope", "Foam Roller Pro", "Compression Leggings", "Tennis Racket Elite", "Swim Goggles Pro", "Hiking Boots Trail", "Boxing Gloves Pro", "Paddle Board Inflatable"],
  watches: ["Automatic Chronograph", "Smart Watch Titanium", "Diver 300M Steel", "Gold Mesh Dress Watch", "Minimalist Leather Watch", "GMT Travel Watch", "Skeleton Tourbillon", "Solar Eco Watch", "Pilot Aviator Watch", "Rose Gold Bangle Watch", "Carbon Sport Watch", "Moonphase Classic", "Quartz Minimal Dial", "Diving Bezel Sport", "Heritage Manual Wind"]
};
const sizesByCategory = {
  fashion: ["XS", "S", "M", "L", "XL", "XXL"],
  beauty: ["30ml", "50ml", "100ml"],
  watches: ["38mm", "40mm", "42mm", "44mm"],
  sports: ["S", "M", "L", "XL"],
  electronics: [],
  "home-living": []
};
const colors = ["Onyx Black", "Pearl White", "Rose Gold", "Sapphire Blue", "Emerald", "Champagne", "Silver", "Burgundy", "Slate Grey", "Ivory"];
const descriptions = [
  "Crafted from premium materials with meticulous attention to detail. This signature piece embodies timeless elegance and modern sophistication, designed for those who appreciate the finer things in life.",
  "An exquisite blend of form and function. Every curve, every stitch, every finish has been considered to deliver an experience that transcends the ordinary.",
  "Designed in our atelier and made to last a lifetime. The perfect companion for the discerning individual who values quality above all else.",
  "Where heritage meets innovation. This piece represents the pinnacle of craftsmanship, combining traditional techniques with contemporary design.",
  "A statement of refined taste. Meticulously constructed using sustainably sourced materials, this product is as kind to the planet as it is to your senses."
];
const brandsByCategory = {
  fashion: ["Aurelia", "Marlowe", "Lumi\xE8re"],
  electronics: ["Vertex", "Onyx", "Kairos"],
  "home-living": ["Nordic", "Marlowe", "Zephyr"],
  beauty: ["Lumi\xE8re", "Aurelia"],
  sports: ["Zephyr", "Vertex"],
  watches: ["Onyx", "Kairos", "Aurelia"]
};
function generateProducts() {
  const products2 = [];
  let id = 1;
  const catSlugs = Object.keys(names);
  for (const cat of catSlugs) {
    const list = names[cat];
    for (let i = 0; i < list.length; i++) {
      const price = Math.floor(Math.random() * 800) + 49;
      const discount = Math.random() > 0.4 ? Math.floor(Math.random() * 50) + 5 : 0;
      const oldPrice = discount ? Math.floor(price / (1 - discount / 100)) : void 0;
      const brandList = brandsByCategory[cat];
      products2.push({
        id,
        name: list[i],
        category: cat,
        brand: brandList[i % brandList.length],
        price,
        oldPrice,
        discount,
        rating: Math.round((Math.random() * 2 + 3) * 10) / 10,
        reviews: Math.floor(Math.random() * 900) + 12,
        description: descriptions[i % descriptions.length],
        stock: Math.floor(Math.random() * 60) + 5,
        images: [productImage(id, 1), productImage(id, 2), productImage(id, 3), productImage(id, 4)],
        colors: colors.slice(0, Math.floor(Math.random() * 4) + 3),
        sizes: sizesByCategory[cat] || void 0,
        tags: [
          Math.random() > 0.7 ? "featured" : "",
          Math.random() > 0.7 ? "trending" : "",
          Math.random() > 0.7 ? "new" : "",
          Math.random() > 0.7 ? "bestseller" : "",
          Math.random() > 0.7 ? "toprated" : "",
          Math.random() > 0.6 ? "flash" : ""
        ].filter(Boolean),
        sku: `LX-${cat.slice(0, 3).toUpperCase()}-${String(id).padStart(4, "0")}`,
        createdAt: new Date(Date.now() - Math.floor(Math.random() * 90) * 864e5).toISOString()
      });
      id++;
    }
  }
  return products2;
}
export const products = generateProducts();
export const testimonials = [
  { id: 1, name: "Isabella Chen", role: "Fashion Editor", avatar: img("avatar-1", 100, 100), rating: 5, text: "LUXE has completely transformed my shopping experience. The quality and curation are unmatched \u2014 every piece feels like a treasure." },
  { id: 2, name: "Marcus Whitfield", role: "Creative Director", avatar: img("avatar-2", 100, 100), rating: 5, text: "From packaging to delivery, the attention to detail is extraordinary. This is what premium e-commerce should feel like." },
  { id: 3, name: "Sofia Almeida", role: "Architect", avatar: img("avatar-3", 100, 100), rating: 4, text: "I have been a loyal customer for two years. The product range is curated with such taste \u2014 I always find something I love." },
  { id: 4, name: "James Tanaka", role: "Entrepreneur", avatar: img("avatar-4", 100, 100), rating: 5, text: "The flash sales are incredible. I scored a luxury watch at 40% off and the service was still white-glove." },
  { id: 5, name: "Amara Okafor", role: "Photographer", avatar: img("avatar-5", 100, 100), rating: 5, text: "Beautiful interface, beautiful products, beautiful service. LUXE is my go-to for gifts and self-indulgence alike." },
  { id: 6, name: "Liam Bergstr\xF6m", role: "Product Designer", avatar: img("avatar-6", 100, 100), rating: 5, text: "The product details page is a masterclass in UX. Image zoom, reviews, related items \u2014 everything just works." }
];
export const blogPosts = [
  { id: 1, title: "The Art of Minimalist Wardrobe: 10 Pieces That Transform Your Style", excerpt: "Discover how a curated capsule wardrobe can elevate your everyday look while simplifying your mornings.", image: img("blog-1", 800, 500), date: "2026-07-12", author: "Isabella Chen", category: "Fashion" },
  { id: 2, title: "Smart Home Essentials: Building a Connected Living Space", excerpt: "From intelligent lighting to voice-controlled assistants, here is our guide to a smarter home.", image: img("blog-2", 800, 500), date: "2026-07-08", author: "Marcus Whitfield", category: "Technology" },
  { id: 3, title: "Skincare Decoded: The Ingredients Your Routine Is Missing", excerpt: "A dermatologist-approved look at the actives, antioxidants, and acids that actually deliver results.", image: img("blog-3", 800, 500), date: "2026-07-03", author: "Sofia Almeida", category: "Beauty" }
];
export const coupons = {
  LUXE10: { code: "LUXE10", discount: 10, type: "percent", minSpend: 0, description: "10% off your order" },
  WELCOME20: { code: "WELCOME20", discount: 20, type: "percent", minSpend: 200, description: "20% off orders over $200" },
  FREESHIP: { code: "FREESHIP", discount: 15, type: "flat", minSpend: 75, description: "Free shipping on orders over $75" },
  VIP50: { code: "VIP50", discount: 50, type: "flat", minSpend: 500, description: "$50 off orders over $500" }
};
export const heroSlides = [
  {
    id: 1,
    title: "Summer Collection 2026",
    subtitle: "Curated Elegance",
    description: "Discover handpicked pieces from the world's finest ateliers. Up to 40% off selected lines.",
    image: img("hero-1", 1600, 900),
    cta: "Shop Collection",
    link: "/shop",
    badge: "New Season"
  },
  {
    id: 2,
    title: "Timeless Watches",
    subtitle: "Precision Meets Artistry",
    description: "Explore our exclusive timepiece edit \u2014 where heritage craftsmanship meets modern design.",
    image: img("hero-2", 1600, 900),
    cta: "Explore Watches",
    link: "/category/watches",
    badge: "Limited Edition"
  },
  {
    id: 3,
    title: "Beauty Reimagined",
    subtitle: "Clean. Conscious. Coveted.",
    description: "Skincare and fragrance crafted with intention. Free gift with every $120 spent.",
    image: img("hero-3", 1600, 900),
    cta: "Discover Beauty",
    link: "/category/beauty",
    badge: "Editor's Pick"
  }
];
export const banners = [
  { id: 1, title: "Flash Sale", subtitle: "48 Hours Only", description: "Up to 60% off premium picks", image: img("banner-flash", 800, 500), link: "/shop?tag=flash", accent: "from-rose-500 to-amber-500" },
  { id: 2, title: "New Arrivals", subtitle: "Just Dropped", description: "Be the first to own them", image: img("banner-new", 800, 500), link: "/shop?tag=new", accent: "from-sky-500 to-emerald-500" },
  { id: 3, title: "Best Sellers", subtitle: "Customer Favourites", description: "Tried, tested, loved", image: img("banner-best", 800, 500), link: "/shop?tag=bestseller", accent: "from-violet-500 to-fuchsia-500" }
];
export const services = [
  { id: 1, icon: "TbTruckDelivery", title: "Free Express Shipping", description: "On all orders over $75, delivered in 2-3 days." },
  { id: 2, icon: "TbRefresh", title: "30-Day Returns", description: "Not in love? Return it hassle-free within 30 days." },
  { id: 3, icon: "TbShieldCheck", title: "Secure Payment", description: "256-bit SSL encryption and trusted gateways." },
  { id: 4, icon: "TbHeadset", title: "24/7 Concierge", description: "Personal stylists and support, anytime you need." }
];
export const faqs = [
  { id: 1, question: "How long does delivery take?", answer: "Standard delivery takes 3-5 business days. Express delivery (2-3 days) is free on orders over $75, and same-day delivery is available in select metro areas." },
  { id: 2, question: "What is your return policy?", answer: "We offer 30-day hassle-free returns on unused items in original packaging. Refunds are processed within 5-7 business days of receiving your return." },
  { id: 3, question: "Do you ship internationally?", answer: "Yes, we ship to over 80 countries. International shipping costs and delivery times vary by destination and are calculated at checkout." },
  { id: 4, question: "How do I track my order?", answer: 'Once your order ships, you will receive an email with a tracking number. You can also view live status in the "My Orders" section of your account.' },
  { id: 5, question: "Are your products authentic?", answer: "Every product on LUXE is 100% authentic and sourced directly from brands or authorised distributors. Each item comes with a certificate of authenticity." },
  { id: 6, question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and Buy Now Pay Later options like Klarna and Afterpay." },
  { id: 7, question: "How do I use a promo code?", answer: 'Enter your code in the "Promo Code" field at checkout or in your cart. The discount will be applied to eligible orders instantly.' },
  { id: 8, question: "Can I modify or cancel my order?", answer: 'Orders can be modified or cancelled within 1 hour of placing them. Visit "My Orders" or contact our concierge team for assistance.' }
];
