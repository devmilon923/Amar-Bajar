"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { UploadCloud, Check, Plus, Minus, FileText, ArrowRight } from "lucide-react";
import { PHARMACY_ITEMS, PharmacyItem } from "@/lib/data/products";
import { Button } from "@/components/ui/button";

interface PharmacySectionProps {
  onAddToCart?: (item: { id: string; title: string; price: number }) => void;
  onPrescriptionUploaded?: (fileName: string) => void;
}

export function PharmacySection({ onAddToCart, onPrescriptionUploaded }: PharmacySectionProps) {
  const [itemCounts, setItemCounts] = React.useState<Record<string, number>>({});
  const [prescriptionUploaded, setPrescriptionUploaded] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Landing page displays a maximum of 2 rows (5 products per row = max 10 products)
  const displayItems = PHARMACY_ITEMS.slice(0, 10);

  const handleAdd = (item: PharmacyItem) => {
    const current = itemCounts[item.id] || 0;
    const next = current + 1;
    setItemCounts((prev) => ({ ...prev, [item.id]: next }));
    onAddToCart?.({
      id: item.id,
      title: `${item.name} (${item.packSize})`,
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
    <section id="pharmacy" className="py-8 sm:py-12 bg-slate-50/70 border-b border-slate-200/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Title -> Description */}
        <div className="mb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">💊</span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                জরুরি ওষুধ ও ফার্মেসি
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              ১০০% আসল প্রেসক্রিপশন মেডিসিন ও হেলথকেয়ার পণ্য — গ্রোসারির সাথে একই ব্যাগে ৩০ মিনিটে ডেলিভারি।
            </p>
          </div>

          {/* Quick link to pharmacy catalog page */}
          <Link
            href="/pharmacy"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-800 shrink-0 group py-1"
          >
            <span>সব ওষুধ দেখুন</span>
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

        {/* Responsive Product Grid: STRICTLY 5 cols desktop, 3 cols tablet, 2 cols mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {displayItems.map((item) => {
            const count = itemCounts[item.id] || 0;

            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between bg-white border border-slate-200/90 rounded-sm p-3.5 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all duration-150"
              >
                <div>
                  {/* Thumbnail Container: STRICT 1:1 Aspect Ratio */}
                  <div className="relative aspect-square w-full bg-slate-50/80 rounded-sm mb-3 overflow-hidden flex items-center justify-center p-3">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={160}
                      height={160}
                      className="size-full object-contain group-hover:scale-103 transition-transform duration-150 select-none"
                    />
                    {item.prescriptionRequired ? (
                      <span className="absolute top-2 left-2 bg-amber-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-sm shadow-xs">
                        প্রেসক্রিপশন
                      </span>
                    ) : (
                      <span className="absolute top-2 left-2 bg-sky-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-sm shadow-xs">
                        OTC
                      </span>
                    )}
                  </div>

                  {/* Manufacturer & Pack Size */}
                  <div className="flex items-center justify-between text-[10px] text-slate-500 font-medium mb-1">
                    <span className="truncate max-w-[110px]">{item.manufacturer}</span>
                    <span className="shrink-0">{item.packSize.split(" ")[0]}</span>
                  </div>

                  {/* Brand & Strength */}
                  <h3 className="text-sm font-bold text-slate-900 line-clamp-1 group-hover:text-sky-700 transition-colors">
                    {item.name}
                  </h3>

                  {/* Generic Info */}
                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                    {item.generic} • {item.strength}
                  </p>
                </div>

                {/* Price & Primary Add Stepper */}
                <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-base font-bold text-slate-900 block leading-tight">
                      ৳{item.price}
                    </span>
                    {item.originalPrice && (
                      <span className="text-[11px] text-slate-400 line-through mt-0.5 block">
                        ৳{item.originalPrice}
                      </span>
                    )}
                  </div>

                  {count === 0 ? (
                    <button
                      type="button"
                      onClick={() => handleAdd(item)}
                      className="h-8 px-3 rounded-sm bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all duration-150 cursor-pointer flex items-center gap-1 shadow-xs shrink-0"
                    >
                      <Plus className="size-3.5" />
                      <span>যোগ</span>
                    </button>
                  ) : (
                    <div className="flex items-center border border-emerald-600 rounded-sm bg-emerald-600 text-white shadow-xs shrink-0">
                      <button
                        type="button"
                        onClick={() => handleDecrement(item)}
                        className="size-8 flex items-center justify-center hover:bg-emerald-700 transition-colors cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="size-3.5" />
                      </button>
                      <span className="px-1.5 text-xs font-bold min-w-[20px] text-center select-none">
                        {count}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleAdd(item)}
                        className="size-8 flex items-center justify-center hover:bg-emerald-700 transition-colors cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="size-3.5" />
                      </button>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Show More Medicines Button (Navigates to dedicated /pharmacy page) */}
        <div className="mt-8 text-center">
          <Link href="/pharmacy">
            <Button
              variant="outline"
              size="lg"
              className="px-6 py-2.5 h-10 border-slate-300 hover:border-sky-600 hover:bg-sky-50/40 text-slate-800 hover:text-sky-700 font-bold text-xs sm:text-sm rounded-sm transition-colors duration-150 cursor-pointer inline-flex items-center gap-2"
            >
              <span>ফার্মেসির আরও ওষুধ দেখুন</span>
              <ArrowRight className="size-4 text-sky-600" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default PharmacySection;
