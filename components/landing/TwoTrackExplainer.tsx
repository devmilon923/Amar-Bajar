import * as React from "react";
import { ShoppingBag, Flame, CheckCircle2 } from "lucide-react";

export function TwoTrackExplainer() {
  return (
    <section className="py-6 sm:py-8 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="p-4 sm:p-6 bg-white border border-slate-200/80 rounded-sm shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-sm">
              সহজ ও স্মার্ট ডেলিভারি ব্যবস্থা
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mt-1.5">
              আমারবাজার যেভাবে কাজ করে (Two-Track System)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Track 1: Combined Order */}
            <div className="p-4 rounded-sm border border-emerald-200 bg-emerald-50/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex size-7 items-center justify-center rounded-sm bg-emerald-600 text-white">
                    <ShoppingBag className="size-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    ট্র্যাক ১: বাজার ও ওষুধ কম্বাইন্ড কার্ট (Combined Bag)
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  শাকসবজি, তাজা মাছ, মাংস এবং প্রয়োজনীয় ওষুধ একই সাথে কার্টে যুক্ত করুন। একজন ডেডিকেটেড ডেলিভারি রাইডার উভয় শপ থেকে সংগ্রহ করে ১টি মাত্র ডেলিভারি ফিতে আপনার ঠিকানায় পৌঁছে দেবে।
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-emerald-100 flex items-center gap-2 text-[11px] font-semibold text-emerald-800">
                <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                <span>১টি কার্ট • ১টি বিলিং • ৩০-৪৫ মিনিট ডেলিভারি</span>
              </div>
            </div>

            {/* Track 2: Standalone Gas Order */}
            <div className="p-4 rounded-sm border border-orange-200 bg-orange-50/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex size-7 items-center justify-center rounded-sm bg-orange-600 text-white">
                    <Flame className="size-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    ট্র্যাক ২: এলপি গ্যাস সিলিন্ডার সরাসরি বুকিং (Standalone Express)
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  গ্যাস সিলিন্ডারের অতিরিক্ত ওজন ও নিরাপত্তা সংক্রান্ত কারণে এটি গ্রোসারি কার্টে যুক্ত না হয়ে সরাসরি ১-ক্লিকে বুকিং হয়। দরজায় খালি সিলিন্ডার দিয়ে ডিজিটাল ওজন মেপে সিলিন্ডার বদল করে নিন।
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-orange-100 flex items-center gap-2 text-[11px] font-semibold text-orange-800">
                <CheckCircle2 className="size-3.5 text-orange-600 shrink-0" />
                <span>খালি সিলিন্ডার বদল • ডেডিকেটেড ভ্যান সার্ভিস • দ্রুত ডেলিভারি</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TwoTrackExplainer;
