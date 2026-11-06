import * as React from "react";
import Link from "next/link";
import {
  Smartphone,
  Shirt,
  ShoppingBag,
  Home,
  Apple,
  Sparkles,
  Dumbbell,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const CATEGORIES = [
  {
    id: "electronics",
    name: "Electronics & Tech",
    count: "2.4k+ items",
    icon: Smartphone,
    color: "text-blue-600 bg-blue-50",
  },
  {
    id: "mens-fashion",
    name: "Men's Apparel",
    count: "1.8k+ items",
    icon: Shirt,
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    id: "womens-fashion",
    name: "Women's Fashion",
    count: "3.2k+ items",
    icon: ShoppingBag,
    color: "text-rose-600 bg-rose-50",
  },
  {
    id: "home-living",
    name: "Home & Kitchen",
    count: "950+ items",
    icon: Home,
    color: "text-amber-600 bg-amber-50",
  },
  {
    id: "groceries",
    name: "Groceries & Fresh",
    count: "4.1k+ items",
    icon: Apple,
    color: "text-green-600 bg-green-50",
  },
  {
    id: "beauty",
    name: "Beauty & Wellness",
    count: "1.1k+ items",
    icon: Sparkles,
    color: "text-purple-600 bg-purple-50",
  },
  {
    id: "sports",
    name: "Sports & Fitness",
    count: "620+ items",
    icon: Dumbbell,
    color: "text-orange-600 bg-orange-50",
  },
  {
    id: "books",
    name: "Books & Stationery",
    count: "840+ items",
    icon: BookOpen,
    color: "text-indigo-600 bg-indigo-50",
  },
];

export function CategoryRail() {
  return (
    <section id="categories" className="py-8 md:py-12 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              Browse by Category
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Explore products hand-picked across top retail departments
            </p>
          </div>
          <Link
            href="#all-categories"
            className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors duration-150"
          >
            <span>View All</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.id}
                href={`#${cat.id}`}
                className="group flex flex-col items-center text-center p-3 sm:p-4 bg-white border border-slate-200/80 rounded-sm shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-150 ease-out"
              >
                <div
                  className={`flex size-12 items-center justify-center rounded-sm ${cat.color} mb-3 group-hover:scale-110 transition-transform duration-150`}
                >
                  <Icon className="size-6" />
                </div>
                <h3 className="text-xs font-semibold text-slate-900 line-clamp-1 group-hover:text-emerald-600 transition-colors duration-150">
                  {cat.name}
                </h3>
                <span className="text-[10px] text-slate-400 mt-0.5 font-medium">
                  {cat.count}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default CategoryRail;

