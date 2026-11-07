"use client";

import * as React from "react";
import Image from "next/image";
import { Flame, CheckCircle2, Scale, ShieldCheck, ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GasBrand {
  id: string;
  name: string;
  fullName: string;
  refillPrice: number;
  newPrice: number;
  image: string;
  tagline: string;
}

const GAS_BRANDS: GasBrand[] = [
  {
    id: "bashundhara",
    name: "বসুন্ধরা",
    fullName: "বসুন্ধরা এলপি গ্যাস",
    refillPrice: 1450,
    newPrice: 3650,
    image: "/products/gas-bashundhara.svg",
    tagline: "সর্বোচ্চ নিরাপদ ও সিলযুক্ত",
  },
  {
    id: "omera",
    name: "ওমেরা",
    fullName: "ওমেরা এলপি গ্যাস",
    refillPrice: 1450,
    newPrice: 3650,
    image: "/products/gas-omera.svg",
    tagline: "ইউরোপীয় স্ট্যান্ডার্ড প্রযুক্তি",
  },
  {
    id: "beximco",
    name: "বেক্সিমকো",
    fullName: "বেক্সিমকো স্মার্ট এলপিজি",
    refillPrice: 1470,
    newPrice: 3700,
    image: "/products/gas-beximco.svg",
    tagline: "স্মার্ট কম্পোজিট সিলিন্ডার",
  },
  {
    id: "bm",
    name: "বিএম এনার্জি",
    fullName: "বিএম এলপি গ্যাস",
    refillPrice: 1440,
    newPrice: 3600,
    image: "/products/gas-bm.svg",
    tagline: "দক্ষ নীল শিখা প্রযুক্তি",
  },
  {
    id: "jamuna",
    name: "যমুনা",
    fullName: "যমুনা গ্যাস",
    refillPrice: 1440,
    newPrice: 3600,
    image: "/products/gas-jamuna.svg",
    tagline: "নির্ভরযোগ্য ও নিরাপদ",
  },
];

interface GasBookingSectionProps {
  onDirectGasOrder?: (brand: string, type: "refill" | "new", price: number) => void;
}

export function GasBookingSection({ onDirectGasOrder }: GasBookingSectionProps) {
  const [selectedBrand, setSelectedBrand] = React.useState<GasBrand>(GAS_BRANDS[0]);
  const [orderType, setOrderType] = React.useState<"refill" | "new">("refill");
  const [orderedSuccess, setOrderedSuccess] = React.useState(false);

  const currentPrice = orderType === "refill" ? selectedBrand.refillPrice : selectedBrand.newPrice;

  const handleOrder = () => {
    setOrderedSuccess(true);
    onDirectGasOrder?.(selectedBrand.fullName, orderType, currentPrice);
    setTimeout(() => setOrderedSuccess(false), 3500);
  };

  return (
    <section id="gas" className="py-8 sm:py-12 bg-white border-b border-slate-200/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Title -> Description */}
        <div className="mb-6">
          <div className="flex items-center gap-2">
            <div className="size-6 flex items-center justify-center">
              <Image
                src="/hero/gas.png"
                alt="এলপি গ্যাস সিলিন্ডার"
                width={24}
                height={24}
                className="h-6 w-auto object-contain"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              এলপি গ্যাস সিলিন্ডার এক্সপ্রেস বুকিং
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            ১২ কেজি স্ট্যান্ডার্ড সিলিন্ডার • দরজায় ডিজিটাল স্কেলে ওজন মেপে খালি সিলিন্ডার বদলে রিফিল অথবা সম্পূর্ণ নতুন প্যাকেজ বুঝে নিন।
          </p>
        </div>

        {/* 3-Step Clear Ordering Experience */}
        <div className="rounded-sm border border-slate-200/90 bg-white p-4 sm:p-7 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Visual Cylinder Summary Box (Left) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-5 bg-slate-50/80 rounded-sm border border-slate-200 text-center">
              <div className="relative size-40 sm:size-48 flex items-center justify-center mb-2">
                <Image
                  src={selectedBrand.image}
                  alt={selectedBrand.fullName}
                  width={180}
                  height={180}
                  className="size-full object-contain select-none transition-all duration-150"
                  priority
                />
              </div>

              <h3 className="text-base font-bold text-slate-900 mt-1">{selectedBrand.fullName}</h3>
              <span className="text-xs text-orange-700 font-semibold mt-0.5">{selectedBrand.tagline}</span>
              <span className="text-[11px] text-slate-500 font-medium mt-0.5">১২ কেজি নেট গ্যাস ওজন • ভ্যান এক্সপ্রেস ডেলিভারি</span>

              <div className="mt-4 pt-3 border-t border-slate-200/80 w-full flex items-center justify-around text-xs text-slate-600">
                <span className="flex items-center gap-1 font-medium">
                  <Scale className="size-3.5 text-emerald-600" />
                  ওজন মেপে বুঝে নিন
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <ShieldCheck className="size-3.5 text-emerald-600" />
                  নিরাপত্তা সিলযুক্ত
                </span>
              </div>
            </div>

            {/* 3 Step Interactive Workflow (Right) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Step 1: Select Cylinder Brand */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    ধাপ ১: সিলিন্ডার ব্র্যান্ড বেছে নিন
                  </label>
                  <span className="text-[11px] text-slate-500">সকল ব্র্যান্ড অনুমোদিত</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                  {GAS_BRANDS.map((brand) => {
                    const isSelected = selectedBrand.id === brand.id;
                    return (
                      <button
                        key={brand.id}
                        type="button"
                        onClick={() => setSelectedBrand(brand)}
                        className={`h-11 px-3 rounded-sm border text-xs font-bold transition-all duration-150 cursor-pointer flex flex-col items-center justify-center ${
                          isSelected
                            ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                            : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                        }`}
                      >
                        <span>{brand.name}</span>
                        <span className={`text-[10px] ${isSelected ? "text-emerald-100" : "text-slate-400"}`}>
                          ৳{brand.refillPrice}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Select Package Type (Refill vs New) */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    ধাপ ২: প্যাকেজ নির্বাচন করুন
                  </label>
                  <span className="text-[11px] text-orange-700 font-semibold flex items-center gap-1">
                    <RotateCcw className="size-3" />
                    খালি সিলিন্ডার বিনিময় প্রয়োজন
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  {/* Option A: Refill with exchange */}
                  <div
                    onClick={() => setOrderType("refill")}
                    className={`p-4 rounded-sm border cursor-pointer transition-all duration-150 select-none ${
                      orderType === "refill"
                        ? "border-2 border-emerald-600 bg-emerald-50/20 shadow-xs"
                        : "border border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-slate-900">
                        খালি সিলিন্ডার দিয়ে রিফিল
                      </span>
                      <span className={`size-4 rounded-full border flex items-center justify-center ${
                        orderType === "refill" ? "border-emerald-600" : "border-slate-300"
                      }`}>
                        {orderType === "refill" && <span className="size-2 rounded-full bg-emerald-600" />}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      বাসায় যেকোনো ব্র্যান্ডের খালি সিলিন্ডার থাকলে তা বদলে ভর্তি সিলিন্ডার বুঝে নিন।
                    </p>
                    <div className="mt-3 text-base font-extrabold text-slate-900">
                      ৳{selectedBrand.refillPrice.toLocaleString()}
                    </div>
                  </div>

                  {/* Option B: New Cylinder Package */}
                  <div
                    onClick={() => setOrderType("new")}
                    className={`p-4 rounded-sm border cursor-pointer transition-all duration-150 select-none ${
                      orderType === "new"
                        ? "border-2 border-emerald-600 bg-emerald-50/20 shadow-xs"
                        : "border border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-slate-900">
                        সম্পূর্ণ নতুন প্যাকেজ (সিলিন্ডারসহ)
                      </span>
                      <span className={`size-4 rounded-full border flex items-center justify-center ${
                        orderType === "new" ? "border-emerald-600" : "border-slate-300"
                      }`}>
                        {orderType === "new" && <span className="size-2 rounded-full bg-emerald-600" />}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      খালি সিলিন্ডার না থাকলে সম্পূর্ণ নতুন সিলিন্ডার বডি ও গ্যাস সংযোগ পাবেন।
                    </p>
                    <div className="mt-3 text-base font-extrabold text-slate-900">
                      ৳{selectedBrand.newPrice.toLocaleString()}
                    </div>
                  </div>

                </div>
              </div>

              {/* Step 3: Order Confirmation & Total Price */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-500 font-medium block">
                    নির্বাচিত: <strong className="text-slate-900">{selectedBrand.fullName}</strong> ({orderType === "refill" ? "১২ কেজি রিফিল" : "নতুন সিলিন্ডার সংযোগ"})
                  </span>
                  <div className="text-2xl font-extrabold text-slate-900 mt-0.5">
                    মোট: ৳{currentPrice.toLocaleString()}
                  </div>
                </div>

                <Button
                  size="lg"
                  onClick={handleOrder}
                  className={`h-11 px-6 font-bold text-sm transition-all duration-150 cursor-pointer shadow-xs ${
                    orderedSuccess
                      ? "bg-slate-900 text-white hover:bg-slate-900"
                      : "bg-emerald-600 hover:bg-emerald-700 text-white"
                  }`}
                >
                  {orderedSuccess ? (
                    <>
                      <CheckCircle2 className="size-4 text-emerald-400" />
                      <span>গ্যাস ডেলিভারি অর্ডার নিশ্চিত হয়েছে!</span>
                    </>
                  ) : (
                    <>
                      <Flame className="size-4" />
                      <span>গ্যাস ডেলিভারি নিশ্চিত করুন</span>
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </Button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default GasBookingSection;
