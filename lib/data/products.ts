export interface BazarItem {
  id: string;
  name: string;
  bengaliName: string;
  unit: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  category: "all" | "vegetables" | "fish_meat" | "staples";
  stock?: boolean;
}

export interface PharmacyItem {
  id: string;
  name: string;
  generic: string;
  strength: string;
  manufacturer: string;
  packSize: string;
  price: number;
  originalPrice?: number;
  image: string;
  prescriptionRequired: boolean;
  stock?: boolean;
}

export const BAZAR_ITEMS: BazarItem[] = [
  {
    id: "b1",
    name: "Fresh Red Potato",
    bengaliName: "নতুন গোল আলু (লাল)",
    unit: "১ কেজি",
    price: 45,
    originalPrice: 55,
    image: "/products/potato.svg",
    badge: "আজকের তাজা",
    category: "vegetables",
  },
  {
    id: "b2",
    name: "Fresh Rui Fish (Medium)",
    bengaliName: "নদীর তাজা রুই মাছ (পরিষ্কার)",
    unit: "১ কেজি (কাটার আগে)",
    price: 380,
    originalPrice: 420,
    image: "/products/fish.svg",
    badge: "নদীর তাজা",
    category: "fish_meat",
  },
  {
    id: "b3",
    name: "Pure Fortified Soyabean Oil",
    bengaliName: "রূপচাঁদা ফর্টিফাইড সয়াবিন তেল",
    unit: "৫ লিটার বোতল",
    price: 890,
    originalPrice: 940,
    image: "/products/oil.svg",
    badge: "১০% ছাড়",
    category: "staples",
  },
  {
    id: "b4",
    name: "Farm Fresh Brown Eggs",
    bengaliName: "ফার্মের তাজা লাল ডিম",
    unit: "১ ডজন (১২টি)",
    price: 145,
    originalPrice: 160,
    image: "/products/common.png",
    badge: "তাজা সংগ্রহ",
    category: "vegetables",
  },
  {
    id: "b5",
    name: "Farm Fresh Broiler Chicken",
    bengaliName: "ফার্মের তাজা ব্রয়লার মুরগি (ড্রেসড)",
    unit: "১ কেজি",
    price: 195,
    originalPrice: 215,
    image: "/products/chicken.svg",
    badge: "হালাল জবেহ",
    category: "fish_meat",
  },
  {
    id: "b6",
    name: "Miniket Premium Rice",
    bengaliName: "মিনিকেট চাল প্রিমিয়াম (ঝরঝরে)",
    unit: "৫ কেজি ব্যাগ",
    price: 360,
    originalPrice: 390,
    image: "/products/rice.svg",
    badge: "সর্বাধিক বিক্রিত",
    category: "staples",
  },
  {
    id: "b7",
    name: "Deshi Red Onion",
    bengaliName: "দেশি লাল পেঁয়াজ (বাছাইকৃত)",
    unit: "১ কেজি",
    price: 85,
    originalPrice: 95,
    image: "/products/onion.svg",
    badge: "নতুন সওদা",
    category: "vegetables",
  },
  {
    id: "b8",
    name: "Red Lentils (Masoor Dal)",
    bengaliName: "দেশি ছোট দানার মসুর ডাল",
    unit: "১ কেজি প্যাকেট",
    price: 135,
    originalPrice: 145,
    image: "/products/lentils.svg",
    badge: "বেস্ট সেলার",
    category: "staples",
  },
  {
    id: "b9",
    name: "Green Chili & Fresh Lemon",
    bengaliName: "তাজা কাঁচা মরিচ ও কাগজি লেবু",
    unit: "২৫০ গ্রাম + ৪টি লেবু",
    price: 50,
    originalPrice: 60,
    image: "/products/vegetables.svg",
    badge: "আজকের তাজা",
    category: "vegetables",
  },
  {
    id: "b10",
    name: "Fresh Halal Beef",
    bengaliName: "প্রিমিয়াম তাজা গরুর মাংস (হাড়সহ)",
    unit: "১ কেজি",
    price: 750,
    originalPrice: 780,
    image: "/products/beef.svg",
    badge: "হালাল ১০০%",
    category: "fish_meat",
  },
];

export const PHARMACY_ITEMS: PharmacyItem[] = [
  {
    id: "p1",
    name: "Napa Extra",
    generic: "Paracetamol + Caffeine",
    strength: "500mg + 65mg",
    manufacturer: "Beximco Pharma",
    packSize: "১ পাতা (১০টি ট্যাবলেট)",
    price: 30,
    originalPrice: 35,
    image: "/products/napa.svg",
    prescriptionRequired: false,
  },
  {
    id: "p2",
    name: "Seclo 20",
    generic: "Omeprazole (গ্যাস্ট্রিক)",
    strength: "20mg",
    manufacturer: "Square Pharmaceuticals",
    packSize: "১ পাতা (১০টি ক্যাপসুল)",
    price: 60,
    originalPrice: 70,
    image: "/products/seclo.svg",
    prescriptionRequired: false,
  },
  {
    id: "p3",
    name: "SMC ORSaline-N",
    generic: "Oral Rehydration Salt",
    strength: "WHO Formula",
    manufacturer: "SMC Enterprise",
    packSize: "৫টি স্যাশে প্যাক",
    price: 35,
    originalPrice: 40,
    image: "/products/orsaline.svg",
    prescriptionRequired: false,
  },
  {
    id: "p4",
    name: "Savlon Antiseptic",
    generic: "Chlorhexidine Gluconate",
    strength: "জীবাণুনাশক লিকুইড",
    manufacturer: "ACI Consumer Care",
    packSize: "১০০ মি.লি. বোতল",
    price: 65,
    originalPrice: 75,
    image: "/products/savlon.svg",
    prescriptionRequired: false,
  },
  {
    id: "p5",
    name: "D-Rise 40000",
    generic: "Cholecalciferol (Vit D3)",
    strength: "40000 IU",
    manufacturer: "Incepta Pharmaceuticals",
    packSize: "৪টি সফট ক্যাপসুল",
    price: 180,
    originalPrice: 200,
    image: "/products/drise.svg",
    prescriptionRequired: true,
  },
  {
    id: "p6",
    name: "Fexo 120",
    generic: "Fexofenadine HCl",
    strength: "120mg (এলার্জি)",
    manufacturer: "Square Pharmaceuticals",
    packSize: "১ পাতা (১০টি ট্যাবলেট)",
    price: 85,
    originalPrice: 95,
    image: "/products/fexo.svg",
    prescriptionRequired: false,
  },
  {
    id: "p7",
    name: "Ace Plus",
    generic: "Paracetamol + Caffeine",
    strength: "500mg + 65mg",
    manufacturer: "Square Pharmaceuticals",
    packSize: "১ পাতা (১০টি ট্যাবলেট)",
    price: 30,
    originalPrice: 35,
    image: "/products/ace.svg",
    prescriptionRequired: false,
  },
  {
    id: "p8",
    name: "Napa 500mg",
    generic: "Paracetamol (জ্বর ও ব্যথা)",
    strength: "500mg",
    manufacturer: "Beximco Pharma",
    packSize: "১ পাতা (১০টি ট্যাবলেট)",
    price: 15,
    originalPrice: 18,
    image: "/products/napa.svg",
    prescriptionRequired: false,
  },
  {
    id: "p9",
    name: "Seclo 40",
    generic: "Omeprazole (তীব্র এসিডিটি)",
    strength: "40mg",
    manufacturer: "Square Pharmaceuticals",
    packSize: "১ পাতা (১০টি ক্যাপসুল)",
    price: 110,
    originalPrice: 120,
    image: "/products/seclo.svg",
    prescriptionRequired: true,
  },
  {
    id: "p10",
    name: "Savlon Liquid 500ml",
    generic: "Chlorhexidine Gluconate",
    strength: "জীবাণুনাশক লিকুইড",
    manufacturer: "ACI Consumer Care",
    packSize: "৫০০ মি.লি. ফ্যামিলি প্যাক",
    price: 210,
    originalPrice: 230,
    image: "/products/savlon.svg",
    prescriptionRequired: false,
  },
];

