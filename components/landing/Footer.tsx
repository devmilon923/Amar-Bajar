import * as React from "react";
import Link from "next/link";
import { Mail, PhoneCall, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      
      {/* 1. Final CTA Newsletter Strip */}
      <div className="border-b border-slate-800 bg-slate-950 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                <Mail className="size-3.5" />
                <span>অফার ও ভাউচার আপডেট</span>
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                প্রথম অর্ডারে ফ্রি ডেলিভারি ভাউচার পেতে সাবস্ক্রাইব করুন
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-md">
                সাপ্তাহিক তাজা বাজারের অফার এবং প্রেসক্রিপশন ডিসকাউন্ট কোড সরাসরি পেয়ে যান।
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full md:w-auto max-w-md gap-2"
            >
              <input
                type="text"
                placeholder="ফোন নম্বর বা ইমেইল লিখুন"
                className="h-10 px-3.5 flex-1 rounded-sm bg-slate-800/90 border border-slate-700 text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors duration-150"
              />
              <Button type="submit" className="shrink-0 font-bold text-xs h-10 px-4 bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer transition-colors duration-150">
                সাবস্ক্রাইব করুন
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Columns */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand Info & Helpline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex size-8 items-center justify-center rounded-sm bg-emerald-600 text-white font-bold text-sm">
                AB
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Amar<span className="text-emerald-500">Bajar</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              আমারবাজার হলো আপনার এলাকার হাইপারলোকাল ডেলিভারি প্ল্যাটফর্ম — ঘরে বসেই সর্বনিম্ন সময়ে ও খরচে প্রতিদিনের বাজার, জরুরি ওষুধ ও গ্যাস সিলিন্ডার বুঝে নিন।
            </p>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>ধানমন্ডি ও গুলশান হাব, ঢাকা, বাংলাদেশ</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="size-3.5 text-emerald-500 shrink-0" />
                <span>হেল্পলাইন: 09612-000000 (সকাল ৮টা - রাত ১১টা)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-3.5 text-emerald-500 shrink-0" />
                <span>ট্রেড লাইসেন্স নং: TRAD/DNCC/012948/2024</span>
              </div>
            </div>
          </div>

          {/* Column 2: 3 Main Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3.5">
              আমাদের প্রধান সেবা
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="#bazar" className="hover:text-emerald-400 transition-colors duration-150">
                  তাজা শাকসবজি ও ডিম
                </Link>
              </li>
              <li>
                <Link href="#bazar" className="hover:text-emerald-400 transition-colors duration-150">
                  নদীর তাজা মাছ ও মাংস
                </Link>
              </li>
              <li>
                <Link href="#bazar" className="hover:text-emerald-400 transition-colors duration-150">
                  চাল, ডাল ও রান্নার খাঁটি তেল
                </Link>
              </li>
              <li>
                <Link href="#pharmacy" className="hover:text-emerald-400 transition-colors duration-150">
                  জরুরি ওষুধ ও প্রেসক্রিপশন ডেলিভারি
                </Link>
              </li>
              <li>
                <Link href="#gas" className="hover:text-emerald-400 transition-colors duration-150">
                  ১২ কেজি এলপি গ্যাস সিলিন্ডার রিফিল
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care & Guides */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3.5">
              গ্রাহক সহায়তা
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="#help" className="hover:text-emerald-400 transition-colors duration-150">
                  সাধারণ জিজ্ঞাসা (FAQs)
                </Link>
              </li>
              <li>
                <Link href="#track" className="hover:text-emerald-400 transition-colors duration-150">
                  অর্ডারের লাইভ ট্র্যাকিং
                </Link>
              </li>
              <li>
                <Link href="#returns" className="hover:text-emerald-400 transition-colors duration-150">
                  রিটার্ন ও রিফান্ড নীতি
                </Link>
              </li>
              <li>
                <Link href="#pharmacy" className="hover:text-emerald-400 transition-colors duration-150">
                  প্রেসক্রিপশন আপলোড নির্দেশিকা
                </Link>
              </li>
              <li>
                <Link href="#gas" className="hover:text-emerald-400 transition-colors duration-150">
                  খালি সিলিন্ডার বদল নিয়মাবলী
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Payment Methods & Guarantees */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3.5">
              মূল্য পরিশোধের মাধ্যম
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              পণ্য বা ওষুধ দরজায় পেয়ে সিল দেখে মূল্য পরিশোধ করুন।
            </p>
            <div className="flex flex-wrap gap-1.5 text-xs">
              <span className="px-2 py-1 bg-slate-800 rounded-sm font-medium text-slate-200 border border-slate-700">
                ক্যাশ অন ডেলিভারি (COD)
              </span>
              <span className="px-2 py-1 bg-slate-800 rounded-sm font-medium text-slate-200 border border-slate-700">
                বিকাশ (bKash)
              </span>
              <span className="px-2 py-1 bg-slate-800 rounded-sm font-medium text-slate-200 border border-slate-700">
                নগদ (Nagad)
              </span>
              <span className="px-2 py-1 bg-slate-800 rounded-sm font-medium text-slate-200 border border-slate-700">
                ভিসা / মাস্টারকার্ড
              </span>
            </div>
          </div>

        </div>

        {/* 3. Bottom Copyright Strip */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 pb-16 md:pb-0">
          <div>
            © {new Date().getFullYear()} আমারবাজার টেকনোলজিস লিমিটেড। সর্বস্বত্ব সংরক্ষিত।
          </div>
          <div className="flex items-center gap-5">
            <Link href="#privacy" className="hover:text-emerald-400 transition-colors duration-150">
              গোপনীয়তা নীতি
            </Link>
            <Link href="#terms" className="hover:text-emerald-400 transition-colors duration-150">
              ব্যবহারের শর্তাবলী
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
