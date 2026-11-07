"use client";

import * as React from "react";
import Link from "next/link";
import { UploadCloud, Check, ArrowRight } from "lucide-react";
import { PHARMACY_ITEMS, PharmacyItem } from "@/lib/data/products";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductDetailsModal } from "@/components/product/ProductDetailsModal";

interface PharmacySectionProps {
  onAddToCart?: (item: { id: string; title: string; price: number }) => void;
  onPrescriptionUploaded?: (fileName: string) => void;
}

export function PharmacySection({
  onAddToCart,
  onPrescriptionUploaded,
}: PharmacySectionProps) {
  const [itemCounts, setItemCounts] = React.useState<Record<string, number>>(
    {},
  );
  const [prescriptionUploaded, setPrescriptionUploaded] = React.useState(false);
  const [selectedDetailItem, setSelectedDetailItem] =
    React.useState<PharmacyItem | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Landing page displays a maximum of 2 rows (5 products per row = max 10 products)
  const displayItems = PHARMACY_ITEMS.slice(0, 10);

  const handleAdd = (item: PharmacyItem) => {
    const current = itemCounts[item.id] || 0;
    const next = current + 1;
    setItemCounts((prev) => ({ ...prev, [item.id]: next }));
    onAddToCart?.({
      id: item.id,
      title: `${item.name} (${item.unit})`,
      price: item.price,
    });
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
      onPrescriptionUploaded?.(file.name);
      setTimeout(() => setPrescriptionUploaded(false), 3500);
    }
  };

  return (
    <section
      id="pharmacy"
      className="py-8 sm:py-12 bg-slate-50/70 border-b border-slate-200/90"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header: Title + Best Seller Badge -> Description */}
        <div className="mb-5 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <span className="text-xl">💊</span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                জরুরি ওষুধ ও ফার্মেসি
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              ১০০% আসল প্রেসক্রিপশন মেডিসিন ও হেলথকেয়ার পণ্য — গ্রোসারির সাথে
              একই ব্যাগে ৩০ মিনিটে ডেলিভারি।
            </p>
          </div>

          {/* Quick link to pharmacy catalog page */}
          <Link
            href="/pharmacy"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-800 shrink-0 group py-1"
          >
            <span>সব ওষুধ ও প্রেসক্রিপশন দেখুন</span>
            <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Compact Prescription Upload Strip (Informational Banner) */}
        <div className="mb-6 py-3 px-4 rounded-sm border border-sky-200 bg-sky-50/70 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-sm bg-sky-600 text-white flex items-center justify-center shrink-0">
              <UploadCloud className="size-4" />
            </div>
            <div className="text-left">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                ডাক্তারের প্রেসক্রিপশন আছে? ছবি তুলে সরাসরি আপলোড করুন
              </h3>
              <p className="text-[11px] text-slate-600">
                আমাদের রেজিস্টার্ড ফার্মাসিস্ট যাচাই করে দ্রুত ওষুধ পাঠিয়ে দেবে
                • প্রেসক্রিপশনে ফ্ল্যাট ১০% ছাড়
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
              className="w-full sm:w-auto h-8 px-4 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-sm cursor-pointer shadow-xs"
            >
              {prescriptionUploaded ? (
                <>
                  <Check className="size-3.5 text-white" />
                  <span>আপলোড সফল</span>
                </>
              ) : (
                <>
                  <UploadCloud className="size-3.5 text-white" />
                  <span>প্রেসক্রিপশন আপলোড</span>
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Product Grid: 5 columns on desktop, strictly 1:1 image aspect ratio */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {displayItems.map((item) => (
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

        {/* Show More Medicines Button (Navigates to dedicated /pharmacy page) */}
        <div className="mt-8 text-center">
          <Link href="/pharmacy">
            <Button
              variant="outline"
              size="lg"
              className="px-6 py-2.5 h-10 border-slate-300 hover:border-sky-600 hover:bg-sky-50/40 text-slate-800 hover:text-sky-700 font-bold text-xs sm:text-sm rounded-sm transition-colors duration-150 cursor-pointer inline-flex items-center gap-2"
            >
              <span>ফার্মেসির সকল ওষুধ দেখুন</span>
              <ArrowRight className="size-4 text-sky-600" />
            </Button>
          </Link>
        </div>

        {/* Product Details Modal */}
        <ProductDetailsModal
          isOpen={!!selectedDetailItem}
          onClose={() => setSelectedDetailItem(null)}
          product={selectedDetailItem}
          productType="medicine"
          count={
            selectedDetailItem ? itemCounts[selectedDetailItem.id] || 0 : 0
          }
          onAdd={() => selectedDetailItem && handleAdd(selectedDetailItem)}
          onDecrement={() =>
            selectedDetailItem && handleDecrement(selectedDetailItem)
          }
        />
      </div>
    </section>
  );
}

export default PharmacySection;
