"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  ShoppingBag,
  Flame,
  User,
  X,
  Clock,
  ShieldCheck,
  Headphones,
  PhoneCall,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export interface NavbarProps {
  cartCount?: number;
  cartTotal?: string;
  activeGasOrders?: number;
  wishlistCount?: number;
}

const SEARCH_SUGGESTIONS = [
  { category: "কাঁচাবাজার", label: "নতুন গোল আলু", link: "/bazar", icon: "🥔" },
  { category: "কাঁচাবাজার", label: "নদীর তাজা রুই মাছ", link: "/bazar", icon: "🐟" },
  { category: "কাঁচাবাজার", label: "ফার্মের তাজা ডিম", link: "/bazar", icon: "🥚" },
  { category: "কাঁচাবাজার", label: "রূপচাঁদা সয়াবিন তেল", link: "/bazar", icon: "🌻" },
  { category: "ফার্মেসি", label: "Napa Extra Tablet (নাপা)", link: "/pharmacy", icon: "💊" },
  { category: "ফার্মেসি", label: "Seclo 20mg Capsule (গ্যাস্ট্রিক)", link: "/pharmacy", icon: "💊" },
  { category: "ফার্মেসি", label: "SMC ORSaline-N (ওরস্যালাইন)", link: "/pharmacy", icon: "💧" },
  { category: "এলপি গ্যাস", label: "বসুন্ধরা ১২ কেজি সিলিন্ডার রিফিল", link: "/#gas", icon: "🔥" },
  { category: "এলপি গ্যাস", label: "ওমেরা ১২ কেজি সিলিন্ডার রিফিল", link: "/#gas", icon: "🔥" },
];

export function Navbar({
  cartCount = 3,
  cartTotal = "৳১,৪৭৫",
}: NavbarProps) {
  const router = useRouter();
  const [mobileSearchOpen, setMobileSearchOpen] = React.useState(false);
  const [supportModalOpen, setSupportModalOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchFocused, setSearchFocused] = React.useState(false);
  const searchContainerRef = React.useRef<HTMLDivElement>(null);

  // Close popups on click outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/#search?q=${encodeURIComponent(searchQuery)}`);
      setSearchFocused(false);
      setMobileSearchOpen(false);
    }
  };

  const filteredSuggestions = searchQuery.trim()
    ? SEARCH_SUGGESTIONS.filter(
        (s) =>
          s.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.category.includes(searchQuery),
      )
    : SEARCH_SUGGESTIONS.slice(0, 6);

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200/90 shadow-xs">
      {/* 1. PRIMARY NAVBAR: Visual Grouping (Brand | Search | Customer Actions) */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 sm:gap-6 px-4 sm:px-6 lg:px-8">
        
        {/* Group 1: Brand Identity */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-sm shrink-0"
        >
          <div className="flex size-9 items-center justify-center rounded-sm bg-emerald-600 text-white font-bold text-base shadow-xs transition-transform duration-150 group-hover:scale-105">
            AB
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
              Amar<span className="text-emerald-600">Bajar</span>
            </span>
            <span className="text-[10px] font-medium text-slate-500 tracking-wide mt-0.5">
              বাজার • ওষুধ • গ্যাস
            </span>
          </div>
        </Link>

        {/* Group 2: Product Search with Instant Autocomplete (Grocery, Pharmacy, LPG) */}
        <div ref={searchContainerRef} className="hidden md:flex flex-1 max-w-lg lg:max-w-xl mx-2 relative">
          <form onSubmit={handleSearchSubmit} className="relative w-full flex">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                placeholder="আলু, ডিম, তাজা রুই মাছ, নাপা, ১২ কেজি গ্যাস..."
                className="w-full h-10 pl-10 pr-3 rounded-l-sm border border-slate-200 bg-slate-50/70 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors duration-150"
              />
            </div>
            <button
              type="submit"
              className="h-10 px-5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-r-sm transition-colors duration-150 cursor-pointer flex items-center justify-center shrink-0 shadow-xs"
            >
              খুঁজুন
            </button>
          </form>

          {/* Autocomplete Suggestions Panel */}
          {searchFocused && (
            <div className="absolute left-0 right-0 top-full mt-1 rounded-sm border border-slate-200 bg-white shadow-xl z-50 p-2 animate-in fade-in slide-in-from-top-1 duration-150">
              <div className="flex items-center justify-between px-2.5 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <span>জনপ্রিয় অনুসন্ধান (বাজার, ওষুধ, গ্যাস)</span>
                <span className="text-slate-400 font-normal">দ্রুত জাম্প</span>
              </div>
              <div className="mt-1 divide-y divide-slate-100">
                {filteredSuggestions.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.link}
                    onClick={() => {
                      setSearchQuery(item.label);
                      setSearchFocused(false);
                    }}
                    className="flex items-center justify-between px-2.5 py-2 hover:bg-slate-50 rounded-sm text-xs text-slate-700 hover:text-emerald-700 transition-colors duration-150"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{item.icon}</span>
                      <span className="font-medium text-slate-800">{item.label}</span>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-sm bg-slate-100 text-slate-600 font-semibold">
                      {item.category}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Group 3: Customer Actions (Support | LP Gas Direct | Cart Bag | Login) */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          {/* Customer Support Helpline */}
          <button
            type="button"
            onClick={() => setSupportModalOpen(true)}
            className="flex items-center gap-1.5 h-10 px-2.5 rounded-sm border border-slate-200/90 hover:border-emerald-500 hover:bg-emerald-50/30 text-slate-700 transition-colors duration-150 text-xs font-semibold cursor-pointer group"
            title="২৪/৭ গ্রাহক সেবা ও হেল্পলাইন"
          >
            <Headphones className="size-4 text-emerald-600 group-hover:scale-110 transition-transform" />
            <div className="flex flex-col text-left leading-none">
              <span className="text-[9px] uppercase font-bold text-slate-400">২৪/৭ সেবা</span>
              <span className="text-xs font-bold text-slate-800 group-hover:text-emerald-700 mt-0.5">সহায়তা</span>
            </div>
          </button>

          {/* LP Gas Quick Express Link */}
          <Link
            href="/#gas"
            className="flex items-center gap-1.5 h-10 px-3 rounded-sm border border-orange-200/80 bg-orange-50/50 hover:bg-orange-100/70 text-orange-800 transition-colors duration-150 text-xs font-semibold"
            title="গ্যাস সিলিন্ডার সরাসরি রিফিল"
          >
            <Flame className="size-4 text-orange-600" />
            <div className="flex flex-col text-left leading-none">
              <span className="text-[9px] uppercase font-bold text-orange-700">গ্যাস এক্সপ্রেস</span>
              <span className="mt-0.5">রিফিল বুকিং</span>
            </div>
          </Link>

          {/* Combined Cart Bag (Grocery + Medicine) */}
          <Link
            href="/#cart"
            className="flex items-center gap-2.5 h-10 px-3.5 rounded-sm border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/30 transition-colors duration-150 group"
          >
            <div className="relative flex items-center justify-center">
              <ShoppingBag className="size-5 text-slate-700 group-hover:text-emerald-700 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-emerald-600 px-1 text-[10px] font-bold text-white leading-none shadow-xs">
                  {cartCount}
                </span>
              )}
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-[10px] uppercase font-bold text-slate-400">ব্যাগ</span>
              <span className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 mt-0.5">
                {cartTotal}
              </span>
            </div>
          </Link>

          {/* User Sign In */}
          <Link href="/#account">
            <Button variant="outline" size="sm" className="font-semibold text-xs h-10 px-3">
              <User className="size-3.5" />
              <span>লগইন</span>
            </Button>
          </Link>
        </div>

        {/* Mobile Header Actions (Cleaned: Search + Support + Direct Auth Login) */}
        <div className="flex items-center gap-1.5 md:hidden">
          <button
            type="button"
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            className="flex items-center justify-center size-9 rounded-sm text-slate-700 hover:bg-slate-100 transition-colors duration-150 cursor-pointer"
            aria-label="Search"
          >
            {mobileSearchOpen ? <X className="size-5" /> : <Search className="size-5" />}
          </button>

          {/* Customer Support Icon Button */}
          <button
            type="button"
            onClick={() => setSupportModalOpen(true)}
            className="flex items-center justify-center size-9 rounded-sm border border-slate-200/90 bg-slate-50/80 hover:bg-slate-100 text-slate-700 transition-colors duration-150 cursor-pointer shadow-2xs"
            title="২৪/৭ গ্রাহক সহায়তা"
            aria-label="গ্রাহক সহায়তা"
          >
            <Headphones className="size-4 text-emerald-600" />
          </button>

          {/* Auth Icon / Login Button (Replaces redundant hamburger drawer) */}
          <Link
            href="/#account"
            className="flex items-center gap-1.5 h-9 px-2.5 rounded-sm border border-slate-200 bg-slate-50/80 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors duration-150 cursor-pointer shadow-2xs"
            title="লগইন / প্রোফাইল"
            aria-label="লগইন"
          >
            <User className="size-4 text-emerald-600" />
            <span className="font-bold text-slate-800">লগইন</span>
          </Link>
        </div>

      </div>

      {/* 2. SECONDARY SUB-NAVIGATION ROW (Desktop: 3 Core Verticals + Delivery Assurance) */}
      <div className="hidden md:block border-t border-slate-100 bg-slate-50/70">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 text-xs font-semibold">
          <nav className="flex items-center gap-6">
            <Link
              href="/bazar"
              className="flex items-center gap-1.5 text-slate-700 hover:text-emerald-700 transition-colors duration-150 py-1"
            >
              <span>🥦</span>
              <span>কাঁচাবাজার ও নিত্যপণ্য</span>
            </Link>

            <Link
              href="/pharmacy"
              className="flex items-center gap-1.5 text-slate-700 hover:text-sky-700 transition-colors duration-150 py-1"
            >
              <span>💊</span>
              <span>জরুরি ওষুধ ও ফার্মেসি</span>
            </Link>

            <Link
              href="/#gas"
              className="flex items-center gap-1.5 text-slate-700 hover:text-orange-700 transition-colors duration-150 py-1"
            >
              <Flame className="size-3.5 text-orange-600" />
              <span>এলপি গ্যাস সিলিন্ডার</span>
            </Link>
          </nav>

          <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium">
            <button
              type="button"
              onClick={() => setSupportModalOpen(true)}
              className="flex items-center gap-1 text-slate-600 hover:text-emerald-700 transition-colors cursor-pointer"
            >
              <Headphones className="size-3 text-emerald-600" />
              <span>হেল্পলাইন: ১৬২১১</span>
            </button>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="size-3.5 text-emerald-600" />
              <span>বাজার ও ওষুধ ৩০ মিনিটে ডেলিভারি</span>
            </span>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1">
              <Clock className="size-3 text-emerald-600" />
              <span>ক্যাশ অন ডেলিভারি</span>
            </span>
          </div>
        </div>
      </div>

      {/* 3. EXPANDABLE MOBILE SEARCH */}
      {mobileSearchOpen && (
        <div className="border-t border-slate-100 bg-slate-50 p-3 md:hidden animate-in slide-in-from-top-2 duration-150">
          <form onSubmit={handleSearchSubmit} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="চাল, ডাল, মাছ, নাপা, গ্যাস..."
                autoFocus
                className="w-full h-10 pl-9 pr-3 rounded-sm border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-600"
              />
            </div>
            <button
              type="submit"
              className="h-10 px-4 bg-emerald-600 text-white font-semibold text-xs rounded-sm cursor-pointer"
            >
              খুঁজুন
            </button>
          </form>

          {/* Quick Mobile Suggestion Pills */}
          <div className="flex items-center gap-1.5 mt-2.5 overflow-x-auto pb-1 text-[11px]">
            <span className="text-slate-400 shrink-0 font-medium">দ্রুত খুঁজুন:</span>
            <Link
              href="/bazar"
              onClick={() => {
                setMobileSearchOpen(false);
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("ab-tab-change", { detail: "bazar" }));
                }
              }}
              className="px-2 py-0.5 rounded-sm bg-white border border-slate-200 text-slate-700 whitespace-nowrap"
            >
              কাঁচাবাজার
            </Link>
            <Link
              href="/pharmacy"
              onClick={() => {
                setMobileSearchOpen(false);
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("ab-tab-change", { detail: "pharmacy" }));
                }
              }}
              className="px-2 py-0.5 rounded-sm bg-white border border-slate-200 text-slate-700 whitespace-nowrap"
            >
              ওষুধ
            </Link>
            <Link
              href="/#gas"
              onClick={() => {
                setMobileSearchOpen(false);
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("ab-tab-change", { detail: "gas" }));
                }
              }}
              className="px-2 py-0.5 rounded-sm bg-white border border-slate-200 text-slate-700 whitespace-nowrap"
            >
              গ্যাস
            </Link>
          </div>
        </div>
      )}

      {/* 4. CUSTOMER SUPPORT MODAL */}
      {supportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity duration-150"
            onClick={() => setSupportModalOpen(false)}
          />

          <div className="relative w-full max-w-sm rounded-sm bg-white p-5 shadow-2xl border border-slate-200 z-50 animate-in fade-in-0 zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-sm bg-emerald-100 text-emerald-700">
                  <Headphones className="size-4.5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">গ্রাহক সহায়তা কেন্দ্র</h3>
                  <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    ২৪/৭ হেল্পলাইন চালু আছে
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSupportModalOpen(false)}
                className="size-8 flex items-center justify-center rounded-sm text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="size-4.5" />
              </button>
            </div>

            {/* Support Channels */}
            <div className="mt-4 space-y-2.5">
              {/* Direct Call / Hotline */}
              <a
                href="tel:16211"
                className="flex items-center justify-between p-3 rounded-sm border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-sm bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <PhoneCall className="size-4.5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900">হটলাইনে কল করুন</div>
                    <div className="text-[11px] text-slate-500 font-medium">১৬২১১ (টোল ফ্রি) বা ০৯৬১২-৩৪৪৫৫</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-700 group-hover:translate-x-0.5 transition-transform">কল দিন →</span>
              </a>

              {/* WhatsApp Support */}
              <a
                href="https://wa.me/8801700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-sm border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-sm bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <MessageSquare className="size-4.5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900">হোয়াটসঅ্যাপে চ্যাট</div>
                    <div className="text-[11px] text-slate-500 font-medium">তাৎক্ষণিক অর্ডার হেল্প ও আপডেট</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-700 group-hover:translate-x-0.5 transition-transform">চ্যাট করুন →</span>
              </a>

              {/* Live Order Support Info */}
              <div className="p-3 rounded-sm bg-slate-50 border border-slate-100 text-[11px] text-slate-600 space-y-1">
                <div className="font-bold text-slate-800 flex items-center gap-1.5">
                  <Clock className="size-3.5 text-emerald-600" />
                  <span>গড় রেসপন্স সময়: ২ মিনিট</span>
                </div>
                <p>বাজার, জরুরি ওষুধ বা গ্যাস রিফিল সম্পর্কিত যেকোনো সমস্যায় আমরা সার্বক্ষণিক আপনার পাশে আছি।</p>
              </div>
            </div>

            {/* Close Button */}
            <div className="mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSupportModalOpen(false)}
                className="w-full text-xs font-bold cursor-pointer"
              >
                বন্ধ করুন
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
