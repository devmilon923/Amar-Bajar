import * as React from "react";
import { ShoppingBag, Clock, Flame, ShieldCheck } from "lucide-react";

const TRUST_POINTS = [
  {
    icon: ShoppingBag,
    title: "বাজার ও ওষুধ একসাথে",
    description: "নিত্যপ্রয়োজনীয় কাঁচাবাজার ও প্রেসক্রিপশন মেডিসিন একই কার্টে অর্ডার করুন, ১টি ডেলিভারি ফিতেই একসাথে পৌঁছে যাবে।",
  },
  {
    icon: Clock,
    title: "৩০-৪৫ মিনিটে দ্রুত ডেলিভারি",
    description: "আপনার এলাকার লোকাল হাব থেকে আমাদের অভিজ্ঞ ডেলিভারি রাইডার সরাসরি আপনার বাসার ঠিকানায় পৌঁছে দেয়।",
  },
  {
    icon: Flame,
    title: "খালি সিলিন্ডার বদলে গ্যাস রিফিল",
    description: "রান্নার গ্যাস ফুরিয়ে গেলে তাৎক্ষণিক ভ্যান ডেলিভারি। দরজায় ডিজিটাল স্কেলে সঠিক ওজন মেপে ও সিল দেখে বুঝে নিন।",
  },
  {
    icon: ShieldCheck,
    title: "১০০% খাঁটি ও ক্যাশ অন ডেলিভারি",
    description: "ফরমালিনমুক্ত তাজা বাজার ও ফার্মাসিস্ট ভেরিফাইড আসল ওষুধ। পণ্য হাতে পেয়ে দেখে ক্যাশ বা বিকাশে পরিশোধ করুন।",
  },
];

export function CustomerTrustBar() {
  return (
    <section className="py-8 sm:py-12 bg-slate-50 border-b border-slate-200/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            কেন প্রতিদিনের কেনাকাটায় আমারবাজার?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            বাজারের ঝামেলা ও যানজট এড়িয়ে ঘরে বসেই পেয়ে যান খাঁটি পণ্য ও জরুরি নিত্যসেবা।
          </p>
        </div>

        {/* 4 Consistent Customer Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TRUST_POINTS.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="p-5 bg-white border border-slate-200/90 rounded-sm shadow-xs hover:border-slate-300 hover:shadow-sm transition-all duration-150 flex flex-col justify-between"
              >
                <div>
                  <div className="size-10 rounded-sm bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3.5">
                    <Icon className="size-5" />
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    {point.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default CustomerTrustBar;
