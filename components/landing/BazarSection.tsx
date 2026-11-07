"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BAZAR_ITEMS, BazarItem } from "@/lib/data/products";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductDetailsModal } from "@/components/product/ProductDetailsModal";

interface BazarSectionProps {
  onAddToCart?: (item: { id: string; title: string; price: number }) => void;
}

export function BazarSection({ onAddToCart }: BazarSectionProps) {
  const [itemCounts, setItemCounts] = React.useState<Record<string, number>>({});
  const [selectedDetailItem, setSelectedDetailItem] = React.useState<BazarItem | null>(null);

  // Landing page displays the top 10 most-selling products (2 rows of 5)
  const displayItems = BAZAR_ITEMS.slice(0, 10);

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
        {/* Section Header: Title + Best Seller Badge -> Description */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <span className="text-xl">🥦</span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                কাঁচাবাজার ও নিত্যপণ্য
              </h2>
    
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              দৈনন্দিন চাহিদাসম্পন্ন সর্বাধিক বিক্রিত তাজা কাঁচাবাজার — সরাসরি আড়ত ও খামার থেকে বাছাইকৃত ৩০ মিনিটে ডেলিভারি।
            </p>
          </div>

          {/* Quick link to dedicated catalog page with all categories */}
          <Link
            href="/bazar"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 shrink-0 group py-1"
          >
            <span>সব পণ্য ও ক্যাটাগরি দেখুন</span>
            <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Responsive Product Grid: STRICTLY 5 cols desktop, 3 cols tablet, 2 cols mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {displayItems.map((item) => (
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
      </div>
    </section>
  );
}

export default BazarSection;
