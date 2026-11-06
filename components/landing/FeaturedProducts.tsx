"use client";

import * as React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Flame, Clock } from "lucide-react";
import { ProductCard, Product } from "@/components/landing/ProductCard";

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Aura Sound Pro Wireless Noise-Cancelling Earbuds",
    brand: "AuraAudio",
    category: "Electronics",
    price: 3250,
    originalPrice: 4500,
    discountBadge: "28% OFF",
    rating: 4.8,
    reviewsCount: 142,
    image: "/products/common.png",
    inStock: true,
  },
  {
    id: "2",
    title: "Apex Horizon Smartwatch with AMOLED Display & Heart Rate",
    brand: "ApexGear",
    category: "Gadgets",
    price: 4890,
    originalPrice: 6200,
    discountBadge: "21% OFF",
    rating: 4.9,
    reviewsCount: 89,
    image: "/products/common.png",
    inStock: true,
  },
  {
    id: "3",
    title: "Tactile Pro RGB Mechanical Gaming Keyboard (Hot-swappable)",
    brand: "VortexTech",
    category: "Gaming",
    price: 2950,
    originalPrice: 3800,
    discountBadge: "22% OFF",
    rating: 4.7,
    reviewsCount: 64,
    image: "/products/common.png",
    inStock: true,
  },
  {
    id: "4",
    title: "Velocity Aero Lightweight Cushion Running Shoes",
    brand: "StrideMax",
    category: "Footwear",
    price: 3450,
    originalPrice: 4900,
    discountBadge: "30% OFF",
    rating: 4.6,
    reviewsCount: 112,
    image: "/products/common.png",
    inStock: true,
  },
  {
    id: "5",
    title: "Nomad Water-Resistant Commuter Backpack with Laptop Sleeve",
    brand: "UrbanPack",
    category: "Accessories",
    price: 2190,
    originalPrice: 2800,
    discountBadge: "20% OFF",
    rating: 4.8,
    reviewsCount: 95,
    image: "/products/common.png",
    inStock: true,
  },
  {
    id: "6",
    title: "HydroTherm 24-Hour Double Wall Insulated Stainless Bottle",
    brand: "EcoVibe",
    category: "Home & Living",
    price: 980,
    originalPrice: 1350,
    discountBadge: "27% OFF",
    rating: 4.9,
    reviewsCount: 230,
    image: "/products/common.png",
    inStock: true,
  },
  {
    id: "7",
    title: "Classic Royal Cotton Embroidered Festive Panjabi",
    brand: "Heritage Craft",
    category: "Men's Fashion",
    price: 2650,
    originalPrice: 3500,
    discountBadge: "24% OFF",
    rating: 4.7,
    reviewsCount: 78,
    image: "/products/common.png",
    inStock: true,
  },
  {
    id: "8",
    title: "Nordic Minimalist Touch-Controlled Eye-Care LED Lamp",
    brand: "Lumina",
    category: "Home Office",
    price: 1850,
    originalPrice: 2400,
    discountBadge: "23% OFF",
    rating: 4.6,
    reviewsCount: 52,
    image: "/products/common.png",
    inStock: true,
  },
];

interface FeaturedProductsProps {
  onAddToCart?: (product: Product) => void;
  onToggleWishlist?: (product: Product) => void;
}

export function FeaturedProducts({ onAddToCart, onToggleWishlist }: FeaturedProductsProps) {
  const [activeTab, setActiveTab] = React.useState<"deals" | "trending" | "new">("deals");

  return (
    <section id="deals" className="py-8 md:py-14 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Countdown */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-sm bg-emerald-600 text-white shadow-xs">
              <Flame className="size-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                  Flash Deals of the Day
                </h2>
                <span className="hidden sm:inline-flex items-center gap-1 rounded-sm bg-red-100 text-red-700 text-xs font-semibold px-2 py-0.5">
                  <Clock className="size-3 text-red-600" />
                  Ends in 08:42:15
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Limited quantity promotions with verified authentic warranty
              </p>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto bg-slate-100 p-1 rounded-sm border border-slate-200">
            <button
              type="button"
              onClick={() => setActiveTab("deals")}
              className={`px-3 py-1 text-xs font-medium rounded-sm transition-colors duration-150 cursor-pointer ${
                activeTab === "deals"
                  ? "bg-white text-slate-900 shadow-xs font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All Deals
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("trending")}
              className={`px-3 py-1 text-xs font-medium rounded-sm transition-colors duration-150 cursor-pointer ${
                activeTab === "trending"
                  ? "bg-white text-slate-900 shadow-xs font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Top Selling
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("new")}
              className={`px-3 py-1 text-xs font-medium rounded-sm transition-colors duration-150 cursor-pointer ${
                activeTab === "new"
                  ? "bg-white text-slate-900 shadow-xs font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              New Arrivals
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {SAMPLE_PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>

        {/* Bottom Banner Prompt */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between p-4 bg-white border border-slate-200/80 rounded-sm shadow-xs gap-3">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <Sparkles className="size-5 text-emerald-600 shrink-0 hidden sm:block" />
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Looking for exclusive bulk deals or corporate pricing?
              </h4>
              <p className="text-xs text-slate-500">
                Join AmarBajar Business for wholesale discounts and dedicated account management.
              </p>
            </div>
          </div>
          <Link
            href="#all-deals"
            className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition-colors duration-150 whitespace-nowrap"
          >
            <span>Browse 500+ Deals</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
export default FeaturedProducts;

