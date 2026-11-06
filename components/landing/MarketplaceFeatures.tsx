import * as React from "react";
import { Truck, ShieldCheck, RotateCcw, CreditCard, Headphones, CheckCircle2 } from "lucide-react";

const FEATURES = [
  {
    icon: Truck,
    title: "Nationwide Fast Delivery",
    description: "Doorstep delivery across all 64 districts in Bangladesh with live tracking.",
  },
  {
    icon: ShieldCheck,
    title: "100% Authentic Guarantee",
    description: "All products verified with authentic manufacturer warranty and seal.",
  },
  {
    icon: RotateCcw,
    title: "7-Day Easy Returns",
    description: "Hassle-free return window with prompt refund directly to your payment source.",
  },
  {
    icon: CreditCard,
    title: "Secure & Flexible Payments",
    description: "Pay conveniently via Cash on Delivery, bKash, Nagad, Visa, or Mastercard.",
  },
  {
    icon: Headphones,
    title: "Dedicated 24/7 Support",
    description: "Friendly customer assistance ready to answer queries day or night.",
  },
  {
    icon: CheckCircle2,
    title: "Buyer Protection Program",
    description: "Guaranteed dispute resolution and escrow protection for all marketplace orders.",
  },
];

export function MarketplaceFeatures() {
  return (
    <section className="py-10 md:py-16 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
            Why Shop with AmarBajar
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Engineered for Trust, Convenience & Speed
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Every transaction is protected so you can shop with complete peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {FEATURES.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-white border border-slate-200/80 rounded-sm shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-150"
              >
                <div className="flex size-11 items-center justify-center rounded-sm bg-emerald-50 text-emerald-600 shrink-0">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {item.description}
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
export default MarketplaceFeatures;

