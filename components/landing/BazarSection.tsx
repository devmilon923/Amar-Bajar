"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { BAZAR_ITEMS, BazarItem } from "@/lib/data/products";
import { Button } from "@/components/ui/button";

interface BazarSectionProps {
  onAddToCart?: (item: { id: string; title: string; price: number }) => void;
}

export function BazarSection({ onAddToCart }: BazarSectionProps) {
  const [activeCategory, setActiveCategory] = React.useState<
    "all" | "vegetables" | "fish_meat" | "staples"
  >("all");
  const [itemCounts, setItemCounts] = React.useState<Record<string, number>>({});

  const filteredItems = BAZAR_ITEMS.filter((item) =>
    activeCategory === "all" ? true : item.category === activeCategory,
  );

  // Landing page displays a maximum of 2 rows (5 products per row = max 10 products)
  const displayItems = filteredItems.slice(0, 10);

  const handleAdd = (item: BazarItem) => {
    const current = itemCounts[item.id] || 0;
    const next = current + 1;
    setItemCounts((prev) => ({ ...prev, [item.id]: next }));
    onAddToCart?.({
      id: item.id,
      title: `${item.bengaliName} (${item.unit})`,
      price: item.price,
    });
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
    <section
      id="bazar"
      className="py-8 sm:py-12 bg-white border-b border-slate-200/90"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header: Title -> Description -> Spacing -> Category Filters */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🥦</span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                কাঁচাবাজার ও নিত্যপণ্য
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              প্রতিদিনের তাজা শাকসবজি, মাছ, মাংস ও রান্নার সওদা — সরাসরি আড়ত ও
              খামার থেকে ৩০ মিনিটে ডেলিভারি।
            </p>

            {/* Category Filters */}
            <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold whitespace-nowrap transition-colors duration-150 cursor-pointer ${
                  activeCategory === "all"
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                সকল পণ্য
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory("vegetables")}
                className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold whitespace-nowrap transition-colors duration-150 cursor-pointer ${
                  activeCategory === "vegetables"
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                তাজা শাকসবজি ও ডিম
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory("fish_meat")}
                className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold whitespace-nowrap transition-colors duration-150 cursor-pointer ${
                  activeCategory === "fish_meat"
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                মাছ ও মাংস
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory("staples")}
                className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold whitespace-nowrap transition-colors duration-150 cursor-pointer ${
                  activeCategory === "staples"
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                চাল, ডাল ও তেল
              </button>
            </div>
          </div>

          {/* Quick link to catalog page */}
          <Link
            href="/bazar"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 shrink-0 group py-1"
          >
            <span>সব পণ্য দেখুন</span>
            <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
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
                  {/* Product Image: STRICT 1:1 Aspect Ratio */}
                  <div className="relative aspect-square w-full bg-slate-50/80 rounded-sm mb-3 overflow-hidden flex items-center justify-center p-3">
                    <Image
                      src={item.image}
                      alt={item.bengaliName}
                      width={160}
                      height={160}
                      className="size-full object-contain group-hover:scale-103 transition-transform duration-150 select-none"
                    />
                    {item.badge && (
                      <span className="absolute top-2 left-2 bg-emerald-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm shadow-xs">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Quantity Unit Specifier */}
                  <span className="text-[11px] font-semibold text-slate-500 block mb-1">
                    {item.unit}
                  </span>

                  {/* Product Title */}
                  <h3 className="text-sm font-semibold text-slate-900 line-clamp-2 min-h-[38px] leading-snug group-hover:text-emerald-700 transition-colors">
                    {item.bengaliName}
                  </h3>
                </div>

                {/* Price & Action Section */}
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

                  {/* Add to Cart Stepper Button */}
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

        {/* Show More Products Button (Navigates to dedicated /bazar page) */}
        <div className="mt-8 text-center">
          <Link href="/bazar">
            <Button
              variant="outline"
              size="lg"
              className="px-6 py-2.5 h-10 border-slate-300 hover:border-emerald-600 hover:bg-emerald-50/40 text-slate-800 hover:text-emerald-700 font-bold text-xs sm:text-sm rounded-sm transition-colors duration-150 cursor-pointer inline-flex items-center gap-2"
            >
              <span>কাঁচাবাজারের আরও পণ্য দেখুন</span>
              <ArrowRight className="size-4 text-emerald-600" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default BazarSection;
