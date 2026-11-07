"use client";

import * as React from "react";
import Link from "next/link";
import { Search, ChevronRight, ArrowLeft, UploadCloud, Check, FileText } from "lucide-react";
import { Navbar } from "@/components/navbar/Navbar";
import { MobileBottomNav } from "@/components/navbar/MobileBottomNav";
import { Footer } from "@/components/landing/Footer";
import { PHARMACY_ITEMS, PharmacyItem } from "@/lib/data/products";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductDetailsModal } from "@/components/product/ProductDetailsModal";

export default function PharmacyCatalogPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filterType, setFilterType] = React.useState<"all" | "otc" | "prescription">("all");
  const [cartCount, setCartCount] = React.useState(3);
  const [cartTotal, setCartTotal] = React.useState("৳১,৪৭৫");
  const [itemCounts, setItemCounts] = React.useState<Record<string, number>>({});
  const [selectedDetailItem, setSelectedDetailItem] = React.useState<PharmacyItem | null>(null);
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);
  const [prescriptionUploaded, setPrescriptionUploaded] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const filteredItems = PHARMACY_ITEMS.filter((item) => {
    const matchesFilter =
      filterType === "all"
        ? true
        : filterType === "otc"
        ? !item.prescriptionRequired
        : item.prescriptionRequired;

    const matchesSearch =
      searchQuery.trim() === ""
        ? true
        : item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.generic.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.manufacturer.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const handleAdd = (item: PharmacyItem) => {
    const current = itemCounts[item.id] || 0;
    const next = current + 1;
    setItemCounts((prev) => ({ ...prev, [item.id]: next }));
    setCartCount((prev) => prev + 1);
    setCartTotal((prev) => {
      const currentVal = parseInt(prev.replace(/[^\d]/g, ""), 10) || 0;
      return `৳${(currentVal + item.price).toLocaleString("bn-BD")}`;
    });
    setToastMessage(`"${item.name}" কার্টে যোগ করা হয়েছে।`);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleDecrement = (item: PharmacyItem) => {
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

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPrescriptionUploaded(true);
      setToastMessage(`প্রেসক্রিপশন আপলোড সফল: ${file.name}। ফার্মাসিস্ট শীঘ্রই যাচাই করবে।`);
      setTimeout(() => {
        setPrescriptionUploaded(false);
        setToastMessage(null);
      }, 3500);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-white text-slate-900 selection:bg-sky-100 selection:text-sky-900">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 flex items-center gap-2 rounded-sm bg-slate-900 text-white px-4 py-2.5 text-xs font-medium shadow-xl animate-in fade-in slide-in-from-top-2 duration-150 max-w-sm">
          <span className="size-2 rounded-full bg-sky-500 animate-pulse shrink-0" />
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
              <Link href="/" className="hover:text-sky-700 transition-colors flex items-center gap-1">
                <ArrowLeft className="size-3" />
                <span>হোমপেজ</span>
              </Link>
              <ChevronRight className="size-3 text-slate-400" />
              <span className="text-slate-900 font-semibold">জরুরি ওষুধ ও ডিজিটাল ফার্মেসি</span>
            </nav>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                  জরুরি ওষুধ ও ডিজিটাল ফার্মেসি ক্যাটালগ
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl leading-relaxed">
                  ১০০% আসল প্রেসক্রিপশন মেডিসিন ও হেলথকেয়ার পণ্য — গ্রোসারির সাথে একই ব্যাগে ৩০ মিনিটে ডেলিভারি।
                </p>
              </div>

              <div className="text-xs text-slate-600 bg-white border border-slate-200 px-3 py-2 rounded-sm shrink-0 shadow-2xs self-start sm:self-auto">
                <span className="text-slate-400">ফার্মাসিস্ট ভেরিফাইড: </span>
                <strong className="text-sky-700">ডিজিটাল প্রেসক্রিপশন সেবা</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Prescription Upload Strip */}
        <div className="border-b border-slate-200/80 bg-white py-3.5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="py-3 px-4 rounded-sm border border-sky-200 bg-sky-50/70 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-sm bg-sky-600 text-white flex items-center justify-center shrink-0">
                  <UploadCloud className="size-4" />
                </div>
                <div className="text-left">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                    ডাক্তারের প্রেসক্রিপশন আছে? ছবি তুলে সরাসরি আপলোড করুন
                  </h3>
                  <p className="text-[11px] text-slate-600">
                    আমাদের রেজিস্টার্ড ফার্মাসিস্ট যাচাই করে দ্রুত ওষুধ পাঠিয়ে দেবে • প্রেসক্রিপশনে ফ্ল্যাট ১০% ছাড়
                  </p>
                </div>
              </div>

              <div className="shrink-0 w-full sm:w-auto">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="image/*,.pdf"
                  className="hidden"
                />
                <Button
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs h-8 px-3.5 cursor-pointer shadow-2xs transition-colors duration-150"
                >
                  {prescriptionUploaded ? (
                    <>
                      <Check className="size-3.5 text-white" />
                      <span>প্রেসক্রিপশন আপলোড হয়েছে</span>
                    </>
                  ) : (
                    <>
                      <FileText className="size-3.5" />
                      <span>প্রেসক্রিপশন আপলোড করুন</span>
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Basic Search & Filter Bar */}
        <div className="border-b border-slate-100 bg-white py-4 sticky top-16 z-30 shadow-2xs">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              {/* Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
                <button
                  type="button"
                  onClick={() => setFilterType("all")}
                  className={`px-3 py-1.5 rounded-sm text-xs font-semibold whitespace-nowrap transition-colors duration-150 cursor-pointer ${
                    filterType === "all"
                      ? "bg-sky-600 text-white shadow-xs"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  সকল ওষুধ ({PHARMACY_ITEMS.length})
                </button>
                <button
                  type="button"
                  onClick={() => setFilterType("otc")}
                  className={`px-3 py-1.5 rounded-sm text-xs font-semibold whitespace-nowrap transition-colors duration-150 cursor-pointer ${
                    filterType === "otc"
                      ? "bg-sky-600 text-white shadow-xs"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  OTC (প্রেসক্রিপশন ছাড়া)
                </button>
                <button
                  type="button"
                  onClick={() => setFilterType("prescription")}
                  className={`px-3 py-1.5 rounded-sm text-xs font-semibold whitespace-nowrap transition-colors duration-150 cursor-pointer ${
                    filterType === "prescription"
                      ? "bg-sky-600 text-white shadow-xs"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  প্রেসক্রিপশন আবশ্যক
                </button>
              </div>

              {/* In-Page Search */}
              <div className="relative w-full sm:w-72 shrink-0">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ওষুধ বা জেনেরিক নাম লিখুন..."
                  className="w-full h-9 pl-9 pr-3 rounded-sm border border-slate-200 bg-slate-50/70 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600 transition-colors"
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
              <h3 className="text-sm font-bold text-slate-900">কোনো ওষুধ খুঁজে পাওয়া যায়নি</h3>
              <p className="text-xs text-slate-500 mt-1">অন্য কোনো ব্র্যান্ড বা জেনেরিক নাম দিয়ে খুঁজুন অথবা প্রেসক্রিপশন আপলোড করুন।</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setFilterType("all");
                }}
                className="mt-3 px-3 py-1.5 rounded-sm bg-sky-600 text-white text-xs font-semibold"
              >
                সকল ওষুধ দেখুন
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
              {filteredItems.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  productType="medicine"
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
        productType="medicine"
        count={selectedDetailItem ? itemCounts[selectedDetailItem.id] || 0 : 0}
        onAdd={() => selectedDetailItem && handleAdd(selectedDetailItem)}
        onDecrement={() => selectedDetailItem && handleDecrement(selectedDetailItem)}
      />

      <Footer />
      <MobileBottomNav activeTab="pharmacy" cartCount={cartCount} />
    </div>
  );
}

