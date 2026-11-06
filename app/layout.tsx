import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AmarBajar - প্রতিদিনের বাজার, জরুরি ওষুধ ও গ্যাস সিলিন্ডার",
  description: "হাইপারলোকাল ডেলিভারি প্ল্যাটফর্ম — ঘরে বসেই সর্বনিম্ন সময়ে ও খরচে বাজার, ওষুধ ও গ্যাস বুঝে নিন।",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className="h-full antialiased font-sans">
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">{children}</body>
    </html>
  );
}
