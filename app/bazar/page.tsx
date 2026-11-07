"use client";

import * as React from "react";
import Link from "next/link";
import { Search, ChevronRight, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/navbar/Navbar";
import { MobileBottomNav } from "@/components/navbar/MobileBottomNav";
import { Footer } from "@/components/landing/Footer";
import { BAZAR_ITEMS, BazarItem } from "@/lib/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductDetailsModal } from "@/components/product/ProductDetailsModal";

export default function BazarCatalogPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<
    "all" | "vegetables" | "fish_meat" | "staples"
  >("all");
  const [cartCount, setCartCount] = React.useState(3);
  const [cartTotal, setCartTotal] = React.useState("৳১,৪৭৫");
  const [itemCounts, setItemCounts] = React.useState<Record<string, number>>({});
  const [selectedDetailItem, setSelectedDetailItem] = React.useState<BazarItem | null>(null);
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  const filteredItems = BAZAR_ITEMS.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" ? true : item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === ""
        ? true
        : item.bengaliName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAdd = (item: BazarItem) => {
    const current = itemCounts[item.id] || 0;
    const next = current + 1;
    setItemCounts((prev) => ({ ...prev, [item.id]: next }));
    setCartCount((prev) => prev + 1);
    setCartTotal((prev) => {
      const currentVal = parseInt(prev.replace(/[^\d]/g, ""), 10) || 0;
      return `৳${(currentVal + item.price).toLocaleString("bn-BD")}`;
    });
    setToastMessage(`"${item.bengaliName}" কার্টে যোগ করা হয়েছে।`);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleDecrement = (item: BazarItem) => {
    const current = itemCounts[item.id] || 0;
    if (current <= 1) {
      setItemCounts((prev) => {
        const copy = { ...prev };
        delete copy[item.id];
        return copy;
      });
    } else {
      setItemCounts((prev) => ({ ...prev, [item.id]: current - 1 }));
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 flex items-center gap-2 rounded-sm bg-slate-900 text-white px-4 py-2.5 text-xs font-medium shadow-xl animate-in fade-in slide-in-from-top-2 duration-150 max-w-sm">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Universal Navbar */}
      <Navbar cartCount={cartCount} cartTotal={cartTotal} />

      <main className="flex-1 pb-16 md:pb-12">
        {/* Breadcrumb & Header Banner */}
        <div className="border-b border-slate-200/90 bg-slate-50/70 py-6 sm:py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
              <Link href="/" className="hover:text-emerald-700 transition-colors flex items-center gap-1">
                <ArrowLeft className="size-3" />
                <span>হোমপেজ</span>
              </Link>
              <ChevronRight className="size-3 text-slate-400" />
              <span className="text-slate-900 font-semibold">কাঁচাবাজার ও নিত্যপণ্য</span>
            </nav>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                  কাঁচাবাজার ও নিত্যপ্রয়োজনীয় পণ্যের তালিকা
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl leading-relaxed">
                  প্রতিদিনের তাজা শাকসবজি, ডিম, মাছ, মাংস ও চাল-ডাল — আড়ত ও খামার থেকে বাছাইকৃত ১০০% খাঁটি পণ্য ৩০ মিনিটে ডেলিভারি।
                </p>
              </div>

              <div className="text-xs text-slate-600 bg-white border border-slate-200 px-3 py-2 rounded-sm shrink-0 shadow-2xs self-start sm:self-auto">
                <span className="text-slate-400">ডেলিভারি সময়: </span>
                <strong className="text-emerald-700">৩০-৪৫ মিনিট</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Basic Search & Category Filter Section */}
        <div className="border-b border-slate-100 bg-white py-4 sticky top-16 z-30 shadow-2xs">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
                <button
                  type="button"
                  onClick={() => setSelectedCategory("all")}
                  className={`px-3 py-1.5 rounded-sm text-xs font-semibold whitespace-nowrap transition-colors duration-150 cursor-pointer ${
                    selectedCategory === "all"
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  সকল পণ্য ({BAZAR_ITEMS.length})
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCategory("vegetables")}
                  className={`px-3 py-1.5 rounded-sm text-xs font-semibold whitespace-nowrap transition-colors duration-150 cursor-pointer ${
                    selectedCategory === "vegetables"
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  শাকসবজি ও ডিম
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCategory("fish_meat")}
                  className={`px-3 py-1.5 rounded-sm text-xs font-semibold whitespace-nowrap transition-colors duration-150 cursor-pointer ${
                    selectedCategory === "fish_meat"
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  মাছ ও মাংস
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCategory("staples")}
                  className={`px-3 py-1.5 rounded-sm text-xs font-semibold whitespace-nowrap transition-colors duration-150 cursor-pointer ${
                    selectedCategory === "staples"
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  চাল, ডাল ও তেল
                </button>
              </div>

              {/* Basic In-Page Search Filter */}
              <div className="relative w-full sm:w-72 shrink-0">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="এই তালিকায় খুঁজুন..."
                  className="w-full h-9 pl-9 pr-3 rounded-sm border border-slate-200 bg-slate-50/70 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid: 5 columns on desktop, strictly 1:1 image aspect ratio */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-sm border border-slate-200/80">
              <span className="text-3xl block mb-2">🔍</span>
              <h3 className="text-sm font-bold text-slate-900">কোনো পণ্য খুঁজে পাওয়া যায়নি</h3>
              <p className="text-xs text-slate-500 mt-1">অন্য কোনো নাম লিখে অনুসন্ধান করুন বা ফিল্টার পরিবর্তন করুন।</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-3 px-3 py-1.5 rounded-sm bg-emerald-600 text-white text-xs font-semibold"
              >
                সকল পণ্য দেখুন
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
              {filteredItems.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  productType="grocery"
                  count={itemCounts[item.id] || 0}
                  onAdd={() => handleAdd(item)}
                  onDecrement={() => handleDecrement(item)}
                  onOpenDetails={() => setSelectedDetailItem(item)}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Product Details Modal */}
      <ProductDetailsModal
        isOpen={!!selectedDetailItem}
        onClose={() => setSelectedDetailItem(null)}
        product={selectedDetailItem}
        productType="grocery"
        count={selectedDetailItem ? itemCounts[selectedDetailItem.id] || 0 : 0}
        onAdd={() => selectedDetailItem && handleAdd(selectedDetailItem)}
        onDecrement={() => selectedDetailItem && handleDecrement(selectedDetailItem)}
      />

      <Footer />
      <MobileBottomNav activeTab="bazar" cartCount={cartCount} />
    </div>
  );
}

