import * as React from "react";
import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck, Flame } from "lucide-react";

export function VerticalQuickCards() {
  return (
    <section className="py-4 sm:py-6 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          
          {/* Card 1: Grocery Bazar */}
          <Link
            href="#bazar"
            className="group relative p-4 rounded-sm border border-emerald-200 bg-gradient-to-br from-emerald-50/70 to-white shadow-xs hover:border-emerald-300 hover:shadow-md transition-all duration-150 flex flex-col justify-between"
          >
            <div className="flex items-start justify-between">
              <div className="flex size-11 items-center justify-center rounded-sm bg-emerald-600 text-white text-xl shadow-xs">
                🥦
              </div>
              <span className="flex items-center gap-1 rounded-sm bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5">
                <Clock className="size-3" />
                ৩০ মিনিট ডেলিভারি
              </span>
            </div>
            <div className="mt-3">
              <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-150">
                কাঁচাবাজার ও নিত্যপণ্য
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                তাজা শাকসবজি, তাজা মাছ, মাংস, ডিম, চাল ও রান্নার খাঁটি তেল।
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-100 flex items-center justify-between text-xs font-bold text-emerald-700">
              <span>বাজার শুরু করুন</span>
              <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform duration-150" />
            </div>
          </Link>

          {/* Card 2: Pharmacy */}
          <Link
            href="#pharmacy"
            className="group relative p-4 rounded-sm border border-sky-200 bg-gradient-to-br from-sky-50/70 to-white shadow-xs hover:border-sky-300 hover:shadow-md transition-all duration-150 flex flex-col justify-between"
          >
            <div className="flex items-start justify-between">
              <div className="flex size-11 items-center justify-center rounded-sm bg-sky-600 text-white text-xl shadow-xs">
                💊
              </div>
              <span className="flex items-center gap-1 rounded-sm bg-sky-100 text-sky-800 text-[10px] font-bold px-2 py-0.5">
                <ShieldCheck className="size-3" />
                ১০০% জেনুইন
              </span>
            </div>
            <div className="mt-3">
              <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors duration-150">
                জরুরি ওষুধ ও ফার্মেসি
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                প্রেসক্রিপশন মেডিসিন, ওটিসি পেইন রিলিফ ও প্রেসক্রিপশন আপলোড সুবিধা।
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-sky-100 flex items-center justify-between text-xs font-bold text-sky-700">
              <span>ওষুধ খুঁজুন বা প্রেসক্রিপশন দিন</span>
              <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform duration-150" />
            </div>
          </Link>

          {/* Card 3: LP Gas Cylinder Standalone */}
          <Link
            href="#gas"
            className="group relative p-4 rounded-sm border border-orange-200 bg-gradient-to-br from-orange-50/70 to-white shadow-xs hover:border-orange-300 hover:shadow-md transition-all duration-150 flex flex-col justify-between"
          >
            <div className="flex items-start justify-between">
              <div className="flex size-11 items-center justify-center rounded-sm bg-orange-600 text-white text-xl shadow-xs">
                🛢️
              </div>
              <span className="flex items-center gap-1 rounded-sm bg-orange-100 text-orange-800 text-[10px] font-bold px-2 py-0.5">
                <Flame className="size-3 text-orange-600" />
                খালি সিলিন্ডার বদল
              </span>
            </div>
            <div className="mt-3">
              <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-700 transition-colors duration-150">
                এলপি গ্যাস সিলিন্ডার
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                বসুন্ধরা, ওমেরা, বেক্সিমকো — ১২ কেজি রিফিল সরাসরি দরজায়।
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-orange-100 flex items-center justify-between text-xs font-bold text-orange-700">
              <span>১-ক্লিক এক্সপ্রেস রিফিল</span>
              <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform duration-150" />
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}

export default VerticalQuickCards;

