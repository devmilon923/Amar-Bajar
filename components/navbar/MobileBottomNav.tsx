"use client";

import * as React from "react";
import Link from "next/link";
import {
  RiHome5Line,
  RiHome5Fill,
  RiStore2Line,
  RiStore2Fill,
  RiHeartPulseLine,
  RiHeartPulseFill,
  RiFireLine,
  RiFireFill,
  RiShoppingBag3Line,
  RiShoppingBag3Fill,
} from "react-icons/ri";

export type TabId = "home" | "bazar" | "pharmacy" | "gas" | "cart";

export interface MobileBottomNavProps {
  activeTab?: TabId;
  cartCount?: number;
  wishlistCount?: number;
}

export function MobileBottomNav({
  activeTab = "home",
  cartCount = 3,
}: MobileBottomNavProps) {
  const [selectedTab, setSelectedTab] = React.useState<TabId | null>(null);
  const currentTab = selectedTab ?? activeTab;

  const tabs = [
    {
      id: "home" as TabId,
      label: "হোম",
      href: "/",
      IconOutline: RiHome5Line,
      IconFilled: RiHome5Fill,
    },
    {
      id: "bazar" as TabId,
      label: "কাঁচাবাজার",
      href: "/bazar",
      IconOutline: RiStore2Line,
      IconFilled: RiStore2Fill,
    },
    {
      id: "pharmacy" as TabId,
      label: "ওষুধ",
      href: "/pharmacy",
      IconOutline: RiHeartPulseLine,
      IconFilled: RiHeartPulseFill,
    },
    {
      id: "gas" as TabId,
      label: "গ্যাস",
      href: "/#gas",
      IconOutline: RiFireLine,
      IconFilled: RiFireFill,
      badgeColor: "bg-orange-600",
    },
    {
      id: "cart" as TabId,
      label: "কার্ট ব্যাগ",
      href: "/#cart",
      IconOutline: RiShoppingBag3Line,
      IconFilled: RiShoppingBag3Fill,
      badge: cartCount,
      badgeColor: "bg-emerald-600",
    },
  ];

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-md md:hidden pb-[env(safe-area-inset-bottom,0px)]"
    >
      <div className="flex h-16 items-center justify-around px-1">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.id;
          const Icon = isActive ? tab.IconFilled : tab.IconOutline;

          return (
            <Link
              key={tab.id}
              href={tab.href}
              onClick={() => setSelectedTab(tab.id)}
              className="group relative flex flex-col items-center justify-center min-w-[54px] min-h-[44px] py-1 transition-colors duration-150 ease-out select-none"
            >
              {/* Active Indicator Bar */}
              {isActive && (
                <span className="absolute top-0 h-0.5 w-7 rounded-full bg-emerald-600 transition-all duration-150 ease-out" />
              )}

              {/* Icon Container */}
              <div className="relative flex items-center justify-center">
                <Icon
                  className={`size-[22px] transition-colors duration-150 ease-out ${
                    isActive
                      ? "text-emerald-600 scale-105"
                      : "text-slate-500 group-hover:text-slate-800"
                  }`}
                />

                {/* Numeric Badge */}
                {typeof tab.badge === "number" && tab.badge > 0 && (
                  <span
                    className={`absolute -top-1.5 -right-2 flex h-4 min-w-[16px] items-center justify-center rounded-full ${
                      tab.badgeColor || "bg-emerald-600"
                    } px-1 text-[10px] font-bold text-white shadow-xs`}
                  >
                    {tab.badge > 99 ? "99+" : tab.badge}
                  </span>
                )}
              </div>

              {/* Micro-Label */}
              <span
                className={`mt-1 text-[10px] font-semibold tracking-tight transition-colors duration-150 ease-out ${
                  isActive
                    ? "text-emerald-600"
                    : "text-slate-500 group-hover:text-slate-800"
                }`}
              >
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default MobileBottomNav;
