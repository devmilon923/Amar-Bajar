"use client";

import * as React from "react";
import Image from "next/image";
import {
  X,
  Plus,
  Minus,
  ShoppingBag,
  ShieldCheck,
  Building2,
  Pill,
  Sparkles,
  Info,
  Clock,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BazarItem, PharmacyItem } from "@/lib/data/products";

export interface ProductDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: BazarItem | PharmacyItem | null;
  productType: "grocery" | "medicine";
  count?: number;
  onAdd?: () => void;
  onDecrement?: () => void;
}

export function ProductDetailsModal({
  isOpen,
  onClose,
  product,
  productType,
  count = 0,
  onAdd,
  onDecrement,
}: ProductDetailsModalProps) {
  // Close on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const isMedicine = productType === "medicine";
  const med = isMedicine ? (product as PharmacyItem) : null;
  const groc = !isMedicine ? (product as BazarItem) : null;

  const title = isMedicine ? med?.name : groc?.bengaliName;
  const unit = isMedicine ? med?.unit : groc?.unit;
  const price = product.price;
  const originalPrice = product.originalPrice;
  const image = product.image;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-150 animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-sm shadow-2xl border border-slate-200 z-50 animate-in fade-in zoom-in-95 duration-150 scrollbar-thin">
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-xs px-4 sm:px-6 py-3.5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-base">{isMedicine ? "💊" : "🥦"}</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {isMedicine ? "ওষুধের বিস্তারিত বিবরণ" : "কাঁচাবাজারের বিস্তারিত বিবরণ"}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="size-8 flex items-center justify-center rounded-sm text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close details"
          >
            <X className="size-4.5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-5">
          {/* Top Row: 1:1 Image Showcase + Essential Headline */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
            {/* 1:1 Aspect Ratio Large Visual */}
            <div className="relative size-40 sm:size-48 shrink-0 bg-slate-50/90 rounded-sm border border-slate-200/90 p-4 flex items-center justify-center overflow-hidden">
              <Image
                src={image}
                alt={title || "Product"}
                width={200}
                height={200}
                className="size-full object-contain select-none"
              />
            </div>

            {/* Product Essential Identity (Name, Unit, Price) */}
            <div className="flex-1 text-center sm:text-left min-w-0">
              {/* Unit Tag (Strictly "পিস" for medicines, kg/gram for grocery) */}
              <span className="inline-block text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-xs border border-emerald-200/80 mb-1.5">
                পরিমাণ / ইউনিট: {unit}
              </span>

              {/* Title */}
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                {title}
              </h2>

              {/* Price & Discount */}
              <div className="flex items-baseline justify-center sm:justify-start gap-2.5 mt-2">
                <span className="text-2xl font-black text-slate-900">
                  ৳{price}
                </span>
                {originalPrice && (
                  <span className="text-sm font-semibold text-slate-400 line-through">
                    ৳{originalPrice}
                  </span>
                )}
                {originalPrice && (
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded-xs border border-amber-200">
                    ৳{originalPrice - price} সাশ্রয়
                  </span>
                )}
              </div>

              {/* Delivery Guarantee Chip */}
              <div className="mt-3 flex items-center justify-center sm:justify-start gap-1.5 text-xs text-slate-600 font-medium">
                <Clock className="size-3.5 text-emerald-600" />
                <span>সরাসরি খামার/আড়ত থেকে ৩০ মিনিটে ডেলিভারি</span>
              </div>
            </div>
          </div>

          {/* Detailed Description & Specifications Section */}
          <div className="pt-4 border-t border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Info className="size-3.5" />
              <span>বিস্তারিত তথ্য ও বিবরণ</span>
            </h3>

            {isMedicine && med ? (
              /* MEDICINE DETAILS: Company, Generic, Strength, Indications, Warnings */
              <div className="space-y-3 bg-slate-50/80 rounded-sm p-4 border border-slate-200/80 text-xs">
                {/* 1. Manufacturer Company */}
                <div className="flex items-start gap-2 pb-2.5 border-b border-slate-200/70">
                  <Building2 className="size-4 text-sky-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="text-slate-500 font-medium block">প্রস্তুতকারক কোম্পানি (Manufacturer):</span>
                    <span className="font-bold text-slate-900 text-sm">{med.manufacturer}</span>
                  </div>
                </div>

                {/* 2. Generic Name & Strength */}
                <div className="flex items-start gap-2 pb-2.5 border-b border-slate-200/70">
                  <Pill className="size-4 text-sky-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="text-slate-500 font-medium block">জেনেরিক ফর্মুলা ও মাত্রা:</span>
                    <span className="font-bold text-slate-900">
                      {med.generic} ({med.strength})
                    </span>
                  </div>
                </div>

                {/* 3. Prescription Type */}
                <div className="flex items-start gap-2 pb-2.5 border-b border-slate-200/70">
                  {med.prescriptionRequired ? (
                    <AlertTriangle className="size-4 text-amber-600 shrink-0 mt-0.5" />
                  ) : (
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <span className="text-slate-500 font-medium block">প্রেসক্রিপশন শর্ত:</span>
                    <span className={`font-bold ${med.prescriptionRequired ? "text-amber-700" : "text-emerald-700"}`}>
                      {med.prescriptionRequired
                        ? "রেজিস্টার্ড চিকিৎসকের প্রেসক্রিপশন আবশ্যক"
                        : "OTC (প্রেসক্রিপশন ছাড়া সরাসরি ক্রয়যোগ্য)"}
                    </span>
                  </div>
                </div>

                {/* 4. Use Cases & Indications */}
                {med.useCases && (
                  <div className="flex items-start gap-2 pb-2.5 border-b border-slate-200/70">
                    <Sparkles className="size-4 text-sky-600 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="text-slate-500 font-medium block">ব্যবহার ও কার্যকারিতা (Use Cases):</span>
                      <p className="text-slate-800 leading-relaxed font-normal mt-0.5">
                        {med.useCases}
                      </p>
                    </div>
                  </div>
                )}

                {/* 5. Storage Advice */}
                {med.storage && (
                  <div className="flex items-start gap-2 text-[11px] text-slate-600 pt-0.5">
                    <ShieldCheck className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <p>{med.storage}</p>
                  </div>
                )}
              </div>
            ) : (
              /* GROCERY DETAILS: Origin, Quality, SLA, Freshness Guarantee */
              <div className="space-y-3 bg-slate-50/80 rounded-sm p-4 border border-slate-200/80 text-xs">
                {/* 1. Category & Pack Spec */}
                <div className="flex items-start gap-2 pb-2.5 border-b border-slate-200/70">
                  <Sparkles className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="text-slate-500 font-medium block">পণ্য ক্যাটাগরি ও পরিমাণ:</span>
                    <span className="font-bold text-slate-900 text-sm">
                      {groc?.category === "vegetables"
                        ? "তাজা শাকসবজি ও ডিম"
                        : groc?.category === "fish_meat"
                        ? "নদীর তাজা মাছ ও মাংস"
                        : "চাল, ডাল ও রান্নার সওদা"}{" "}
                      • {groc?.unit}
                    </span>
                  </div>
                </div>

                {/* 2. Sourcing Origin */}
                <div className="flex items-start gap-2 pb-2.5 border-b border-slate-200/70">
                  <Building2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="text-slate-500 font-medium block">উৎস ও সংগ্রহ (Origin):</span>
                    <p className="text-slate-800 leading-relaxed font-normal mt-0.5">
                      সরাসরি আড়ত, নিজস্ব নদীজাল ও চুক্তিভিত্তিক খামার থেকে প্রতিদিন ভোরবেলা বাছাইকৃত তাজা পণ্য।
                    </p>
                  </div>
                </div>

                {/* 3. Quality & Return Policy */}
                <div className="flex items-start gap-2 text-[11px] text-slate-600 pt-0.5">
                  <ShieldCheck className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p>
                    ১০০% খাঁটি ও তাজা গ্যারান্টি। দরজায় ডেলিভারিম্যানের সামনে দেখে পছন্দ হলে তবেই মূল্য পরিশোধ করুন। কোনো ত্রুটি থাকলে তাৎক্ষণিক ফেরতযোগ্য।
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Sticky Bottom Action Bar */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-xs px-4 sm:px-6 py-3.5 border-t border-slate-100 flex items-center justify-between gap-3 shadow-xs">
          <div>
            <span className="text-[10px] text-slate-500 block font-medium">মোট মূল্য</span>
            <span className="text-base font-extrabold text-slate-900">
              ৳{price * (count > 0 ? count : 1)}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {count > 0 ? (
              <div className="flex items-center border border-emerald-600 rounded-sm bg-emerald-600 text-white shadow-xs">
                <button
                  type="button"
                  onClick={onDecrement}
                  className="size-9 flex items-center justify-center hover:bg-emerald-700 transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="size-4" />
                </button>
                <span className="px-3 text-xs font-bold min-w-[28px] text-center select-none">
                  {count}
                </span>
                <button
                  type="button"
                  onClick={onAdd}
                  className="size-9 flex items-center justify-center hover:bg-emerald-700 transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="size-4" />
                </button>
              </div>
            ) : (
              <Button
                onClick={onAdd}
                className="h-9 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-sm shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <ShoppingBag className="size-4" />
                <span>ব্যাগে যোগ করুন</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsModal;

