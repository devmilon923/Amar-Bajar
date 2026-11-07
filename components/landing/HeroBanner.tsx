"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Flame, FileText, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSlide {
  id: string;
  badge: string;
  title: string;
  highlightText: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  themeColor: "emerald" | "sky" | "orange";
}

const THEME_MAP = {
  emerald: {
    border: "border-emerald-200/90",
    bg: "bg-gradient-to-r from-emerald-50/70 via-white to-slate-50",
    badge: "bg-emerald-100 text-emerald-800 border-emerald-200",
    highlight: "text-emerald-600",
    icon: "text-emerald-600",
    ctaButton: "bg-emerald-600 hover:bg-emerald-700 text-white",
    indicator: "bg-emerald-600",
    glow: "bg-emerald-200/50",
  },
  sky: {
    border: "border-sky-200/90",
    bg: "bg-gradient-to-r from-sky-50/70 via-white to-slate-50",
    badge: "bg-sky-100 text-sky-800 border-sky-200",
    highlight: "text-sky-600",
    icon: "text-sky-600",
    ctaButton: "bg-sky-600 hover:bg-sky-700 text-white",
    indicator: "bg-sky-600",
    glow: "bg-sky-200/50",
  },
  orange: {
    border: "border-orange-200/90",
    bg: "bg-gradient-to-r from-orange-50/70 via-white to-slate-50",
    badge: "bg-orange-100 text-orange-800 border-orange-200",
    highlight: "text-orange-600",
    icon: "text-orange-600",
    ctaButton: "bg-orange-600 hover:bg-orange-700 text-white",
    indicator: "bg-orange-600",
    glow: "bg-orange-200/50",
  },
} as const;

const SLIDES: HeroSlide[] = [
  {
    id: "bazar-slide",
    badge: "আজকের তাজা কাঁচাবাজার",
    title: "তাজা শাকসবজি, মাছ ও মাংস",
    highlightText: "পৌঁছে যাবে ৩০ মিনিটে",
    description: "আড়ত ও খামার থেকে বাছাইকৃত তাজা কাঁচাবাজার ও রান্নাঘরের সওদা সরাসরি আপনার বাসায়।",
    ctaText: "আজকের বাজার দেখুন",
    ctaHref: "/bazar",
    image: "/hero/grocery.svg",
    imageAlt: "তাজা কাঁচাবাজার পণ্য ও সবজির ঝুড়ি",
    themeColor: "emerald",
  },
  {
    id: "pharmacy-slide",
    badge: "জরুরি ওষুধ ও ডিজিটাল ফার্মেসি",
    title: "১০০% আসল প্রেসক্রিপশন মেডিসিন",
    highlightText: "ফার্মাসিস্ট দ্বারা ভেরিফাইড",
    description: "প্রেসক্রিপশনের ছবি আপলোড করুন অথবা প্রয়োজনীয় ওষুধ খুঁজুন — গ্রোসারির সাথেই একই ব্যাগে ডেলিভারি।",
    ctaText: "ওষুধ অর্ডার করুন",
    ctaHref: "/pharmacy",
    image: "/hero/medicine.svg",
    imageAlt: "আসল প্রেসক্রিপশন মেডিসিন ও হেলথকেয়ার",
    themeColor: "sky",
  },
  {
    id: "gas-slide",
    badge: "ইনস্ট্যান্ট এলপি গ্যাস সার্ভিস",
    title: "রান্নার গ্যাস ফুরিয়ে গেছে?",
    highlightText: "খালি সিলিন্ডার বদলে রিফিল নিন",
    description: "বসুন্ধরা, ওমেরা, বেক্সিমকো — ডিজিটাল স্কেলে দরজায় ওজন মেপে সিল করা গ্যাস সিলিন্ডার বুঝে নিন।",
    ctaText: "গ্যাস রিফিল বুক করুন",
    ctaHref: "/#gas",
    image: "/hero/gas.png",
    imageAlt: "১২ কেজি এলপি গ্যাস সিলিন্ডার এক্সপ্রেস",
    themeColor: "orange",
  },
];

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const startTimer = React.useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
      }, 5000);
    }
  }, [isPaused]);

  React.useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    startTimer();
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    startTimer();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    startTimer();
  };

  const activeSlide = SLIDES[currentSlide];
  const activeTheme = THEME_MAP[activeSlide.themeColor];

  return (
    <section className="bg-white border-b border-slate-200/90 py-4 sm:py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 70% / 30% 2-Column Responsive Row */}
        <div className="flex flex-col lg:flex-row gap-4 items-stretch">
          
          {/* COLUMN 1: 70% Primary Promotional Banner (Visually Dominant with Smooth Crossfade) */}
          <div
            className={`w-full lg:w-[70%] relative overflow-hidden rounded-sm border ${activeTheme.border} bg-white shadow-xs group min-h-[310px] sm:min-h-[340px] flex flex-col justify-between transition-colors duration-500`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Background Crossfade Layers */}
            {SLIDES.map((s, idx) => (
              <div
                key={`bg-${s.id}`}
                className={`absolute inset-0 bg-gradient-to-r ${THEME_MAP[s.themeColor].bg} transition-opacity duration-700 ease-in-out pointer-events-none ${
                  currentSlide === idx ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Slide Content Stack (Silky-Smooth Crossfade via CSS Grid) */}
            <div className="grid grid-cols-1 grid-rows-1 flex-1 relative z-10">
              {SLIDES.map((s, idx) => {
                const isActive = currentSlide === idx;
                const sTheme = THEME_MAP[s.themeColor];

                return (
                  <div
                    key={s.id}
                    className={`col-start-1 row-start-1 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-700 ease-in-out ${
                      isActive
                        ? "opacity-100 scale-100 pointer-events-auto z-10"
                        : "opacity-0 scale-[0.98] pointer-events-none z-0"
                    }`}
                    aria-hidden={!isActive}
                  >
                    {/* Text & Primary Action */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        {/* Badge & Quick SLA */}
                        <div className="flex items-center gap-2 mb-2.5">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-bold border transition-colors duration-300 ${sTheme.badge}`}
                          >
                            {s.badge}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                            <Clock className={`size-3 ${sTheme.icon}`} />
                            <span>৩০ মিনিট ডেলিভারি</span>
                          </span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-900 tracking-tight leading-tight">
                          {s.title} <br className="hidden sm:inline" />
                          <span className={sTheme.highlight}>{s.highlightText}</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="mt-2.5 text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed font-normal">
                          {s.description}
                        </p>
                      </div>

                      {/* Primary CTA Button */}
                      <div className="mt-6">
                        <Link href={s.ctaHref} tabIndex={isActive ? 0 : -1}>
                          <Button
                            size="lg"
                            tabIndex={isActive ? 0 : -1}
                            className={`font-bold text-xs sm:text-sm px-5 py-2.5 shadow-xs cursor-pointer inline-flex items-center gap-2 transition-all duration-300 ${sTheme.ctaButton}`}
                          >
                            <span>{s.ctaText}</span>
                            <ArrowRight className="size-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Product Visual Showcase (Transparent Artwork with Ambient Soft Glow) */}
                    <div className="relative w-40 h-36 sm:w-52 sm:h-48 lg:w-60 lg:h-56 flex items-center justify-center shrink-0">
                      {/* Ambient Soft Glow */}
                      <div
                        className={`absolute inset-2 sm:inset-4 rounded-full ${sTheme.glow} blur-2xl -z-0 opacity-80 pointer-events-none transition-colors duration-500`}
                      />

                      {/* Transparent Product Artwork */}
                      <div className="relative size-full flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={s.image}
                          alt={s.imageAlt}
                          width={240}
                          height={240}
                          className="size-full object-contain select-none filter drop-shadow-sm"
                          priority={idx === 0}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Carousel Navigation Bar (Dots + Arrows) */}
            <div className="px-6 sm:px-8 py-2.5 flex items-center justify-between border-t border-slate-200/60 bg-white/70 backdrop-blur-xs relative z-20">
              {/* Indicator Dots */}
              <div className="flex items-center gap-1.5">
                {SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlide === idx ? `w-6 ${activeTheme.indicator}` : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              {/* Arrow Controls */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="size-7 rounded-sm border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors duration-150 cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="size-7 rounded-sm border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors duration-150 cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>

          {/* COLUMN 2: 30% Width Secondary Promotional Cards (Subordinate, Clean) */}
          <div className="w-full lg:w-[30%] flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-between">
            
            {/* Secondary Card 1: LP Gas Instant Booking */}
            <Link
              href="/#gas"
              className="group relative flex-1 p-4 sm:p-5 rounded-sm border border-slate-200/90 bg-slate-50/70 hover:bg-white hover:border-orange-300 shadow-xs hover:shadow-sm transition-all duration-150 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xs bg-orange-100 text-orange-800 text-[10px] font-bold border border-orange-200">
                    <Flame className="size-3 text-orange-600" />
                    <span>গ্যাস এক্সপ্রেস</span>
                  </span>
                  <div className="size-9 rounded-sm bg-white border border-slate-200/80 flex items-center justify-center p-1 shadow-2xs group-hover:border-orange-200 transition-colors">
                    <Image
                      src="/hero/gas.png"
                      alt="১২ কেজি এলপি গ্যাস সিলিন্ডার"
                      width={32}
                      height={32}
                      className="size-full object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-orange-700 transition-colors">
                  ১২ কেজি সিলিন্ডার রিফিল
                </h3>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                  বসুন্ধরা, ওমেরা, বেক্সিমকো — খালি সিলিন্ডার বদলে দরজায় ওজন মেপে নিন।
                </p>
              </div>

              <div className="mt-3.5 pt-2.5 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 block font-medium">শুরু মাত্র</span>
                  <span className="text-sm font-extrabold text-orange-700">৳১,৪৫০</span>
                </div>
                <span className="text-xs font-bold text-orange-700 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  <span>বুকিং করুন</span>
                  <ArrowRight className="size-3.5" />
                </span>
              </div>
            </Link>

            {/* Secondary Card 2: Prescription Upload */}
            <Link
              href="/pharmacy"
              className="group relative flex-1 p-4 sm:p-5 rounded-sm border border-slate-200/90 bg-slate-50/70 hover:bg-white hover:border-sky-300 shadow-xs hover:shadow-sm transition-all duration-150 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xs bg-sky-100 text-sky-800 text-[10px] font-bold border border-sky-200">
                    <FileText className="size-3 text-sky-600" />
                    <span>প্রেসক্রিপশন আপলোড</span>
                  </span>
                  <div className="size-9 rounded-sm bg-white border border-slate-200/80 flex items-center justify-center p-1 shadow-2xs group-hover:border-sky-200 transition-colors">
                    <Image
                      src="/hero/medicine.svg"
                      alt="প্রেসক্রিপশন আপলোড"
                      width={32}
                      height={32}
                      className="size-full object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  প্রেসক্রিপশন দিন, ওষুধ নিন
                </h3>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                  প্রেসক্রিপশনের ছবি পাঠালে ফার্মাসিস্ট ওষুধ যাচাই করে দ্রুত পৌঁছে দেবে।
                </p>
              </div>

              <div className="mt-3.5 pt-2.5 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="size-3.5 text-emerald-600" />
                  ১০% ক্যাশব্যাক
                </span>
                <span className="text-xs font-bold text-sky-700 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  <span>ছবি পাঠান</span>
                  <ArrowRight className="size-3.5" />
                </span>
              </div>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
