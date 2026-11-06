"use client";

import * as React from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { MobileBottomNav } from "@/components/navbar/MobileBottomNav";
import { HeroBanner } from "@/components/landing/HeroBanner";
import { BazarSection } from "@/components/landing/BazarSection";
import { PharmacySection } from "@/components/landing/PharmacySection";
import { GasBookingSection } from "@/components/landing/GasBookingSection";
import { CustomerTrustBar } from "@/components/landing/CustomerTrustBar";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  const [cartCount, setCartCount] = React.useState(3);
  const [cartTotal, setCartTotal] = React.useState("৳১,৪৭৫");
  const [activeGasOrders, setActiveGasOrders] = React.useState(0);
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  // Track 1: Combined Cart (Grocery + Medicine)
  const handleAddToCart = (item: {
    id: string;
    title: string;
    price: number;
  }) => {
    setCartCount((prev) => prev + 1);
    setCartTotal((prev) => {
      const current = parseInt(prev.replace(/[^\d]/g, ""), 10) || 0;
      return `৳${(current + item.price).toLocaleString("bn-BD")}`;
    });
    setToastMessage(`"${item.title}" ব্যাগে যোগ করা হয়েছে।`);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Track 2: Standalone Gas Direct Order
  const handleDirectGasOrder = (
    brand: string,
    type: "refill" | "new",
    price: number,
  ) => {
    setActiveGasOrders((prev) => prev + 1);
    setToastMessage(
      `গ্যাস ডেলিভারি অর্ডার নিশ্চিত হয়েছে: ${brand} (১২ কেজি ${
        type === "refill" ? "রিফিল" : "নতুন"
      }) - ৳${price.toLocaleString("bn-BD")}`,
    );
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handlePrescriptionUpload = (fileName: string) => {
    setToastMessage(
      `প্রেসক্রিপশন আপলোড সফল: ${fileName}। ফার্মাসিস্ট শীঘ্রই যাচাই করবে।`,
    );
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 flex items-center gap-2 rounded-sm bg-slate-900 text-white px-4 py-2.5 text-xs font-medium shadow-xl animate-in fade-in slide-in-from-top-2 duration-150 max-w-sm">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Universal Hyperlocal Navbar */}
      <Navbar
        cartCount={cartCount}
        cartTotal={cartTotal}
        activeGasOrders={activeGasOrders}
      />

      {/* Main Content Feed */}
      <main className="flex-1 pb-16 md:pb-0">
        {/* 1. Hero Section: 70% Carousel + 30% Fixed Side Banners in one row */}
        <HeroBanner />

        {/* 2. Track 1: Fresh Daily Grocery Bazar */}
        <BazarSection onAddToCart={handleAddToCart} />

        {/* 3. Track 1: Emergency Medicine & Digital Pharmacy */}
        <PharmacySection
          onAddToCart={handleAddToCart}
          onPrescriptionUploaded={handlePrescriptionUpload}
        />

        {/* 4. Track 2: Standalone LP Gas 1-Click Booking */}
        <GasBookingSection onDirectGasOrder={handleDirectGasOrder} />

        {/* 5. Customer Trust & Guarantees (Clean, uncluttered, relevant) */}
        <CustomerTrustBar />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Mobile Social-Style Bottom Navigation Bar */}
      <MobileBottomNav activeTab="home" cartCount={cartCount} />
    </div>
  );
}
