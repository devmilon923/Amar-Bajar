"use client";

import * as React from "react";
import Image from "next/image";
import { Plus, Minus, ChevronRight } from "lucide-react";
import { BazarItem, PharmacyItem } from "@/lib/data/products";

export interface UnifiedProductCardProps {
  product: BazarItem | PharmacyItem;
  productType: "grocery" | "medicine";
  count: number;
  onAdd: () => void;
  onDecrement: () => void;
  onOpenDetails: () => void;
}

export function ProductCard({
  product,
  productType,
  count,
  onAdd,
  onDecrement,
  onOpenDetails,
}: UnifiedProductCardProps) {
  const isMedicine = productType === "medicine";
  const med = isMedicine ? (product as PharmacyItem) : null;
  const groc = !isMedicine ? (product as BazarItem) : null;

  const title = isMedicine ? med?.name : groc?.bengaliName;
  // Strictly use "পিস" for medicine, and kg/gram/etc. for grocery
  const unit = isMedicine ? med?.unit : groc?.unit;

  return (
    <div className="group flex flex-col justify-between bg-white border border-slate-200/90 rounded-sm overflow-hidden shadow-xs hover:border-slate-300 hover:shadow-sm transition-all duration-150">
      <div>
        {/* 1. Full-Bleed 1:1 Aspect Ratio Image Container (Edges touch top, left, right) */}
        <div
          onClick={onOpenDetails}
          className="relative aspect-square w-full bg-slate-50/60 border-b border-slate-100 flex items-center justify-center p-2.5 sm:p-3.5 cursor-pointer select-none group/img"
          title="বিস্তারিত দেখতে ক্লিক করুন"
        >
          <Image
            src={product.image}
            alt={title || "Product"}
            width={180}
            height={180}
            className="size-full object-contain group-hover/img:scale-105 transition-transform duration-150 select-none"
          />
        </div>

        {/* 2. Content Body (Unit + Title) */}
        <div className="p-3 sm:p-3.5 pb-0">
          {/* Unit Specifier & Subtle Inline Details Affordance (Same Row) */}
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 mb-1">
            <span>{unit}</span>
            <button
              type="button"
              onClick={onOpenDetails}
              className="text-[10px] text-slate-400 hover:text-emerald-700 transition-colors flex items-center gap-0.5 cursor-pointer group-hover:text-slate-600"
              title="বিস্তারিত দেখুন"
            >
              <span>বিস্তারিত</span>
              <ChevronRight className="size-3 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Product Title */}
          <h3
            onClick={onOpenDetails}
            className="text-sm font-bold text-slate-900 line-clamp-2 min-h-[38px] leading-snug group-hover:text-emerald-700 transition-colors cursor-pointer"
            title={title}
          >
            {title}
          </h3>
        </div>
      </div>

      {/* 3. Footer: Price & Primary Add Stepper */}
      <div className="p-3 sm:p-3.5 pt-2.5 mt-2 border-t border-slate-100 flex items-center justify-between gap-2">
        <div>
          <span className="text-base font-bold text-slate-900 block leading-tight">
            ৳{product.price}
          </span>
          {product.originalPrice && (
            <span className="text-[11px] text-slate-400 line-through mt-0.5 block">
              ৳{product.originalPrice}
            </span>
          )}
        </div>

        {/* Add Button / Counter Stepper */}
        {count === 0 ? (
          <button
            type="button"
            onClick={onAdd}
            className="h-8 px-3 rounded-sm bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all duration-150 cursor-pointer flex items-center gap-1 shadow-xs shrink-0"
            aria-label="ব্যাগে যোগ করুন"
          >
            <Plus className="size-3.5" />
            <span>যোগ</span>
          </button>
        ) : (
          <div className="flex items-center border border-emerald-600 rounded-sm bg-emerald-600 text-white shadow-xs shrink-0">
            <button
              type="button"
              onClick={onDecrement}
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
              onClick={onAdd}
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
}

export default ProductCard;
