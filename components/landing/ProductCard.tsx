"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Star, ShoppingBag, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Product {
  id: string;
  title: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  discountBadge?: string;
  rating: number;
  reviewsCount: number;
  image: string;
  inStock?: boolean;
}

export interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onToggleWishlist?: (product: Product) => void;
  isWishlisted?: boolean;
}

export function ProductCard({
  product,
  onAddToCart,
  onToggleWishlist,
  isWishlisted = false,
}: ProductCardProps) {
  const [wishlisted, setWishlisted] = React.useState(isWishlisted);
  const [added, setAdded] = React.useState(false);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setWishlisted(!wishlisted);
    onToggleWishlist?.(product);
  };

  const handleAddClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setAdded(true);
    onAddToCart?.(product);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="group flex flex-col bg-white border border-slate-200/80 rounded-sm shadow-xs transition-all duration-150 ease-out hover:border-slate-300 hover:shadow-md overflow-hidden">
      {/* 1. Image Container */}
      <div className="relative aspect-square w-full bg-slate-100 overflow-hidden flex items-center justify-center">
        <Link href={`#product-${product.id}`} className="size-full flex items-center justify-center p-4">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="size-full object-contain transition-transform duration-150 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </Link>

        {/* Top-Left Badge */}
        {product.discountBadge && (
          <span className="absolute top-2 left-2 bg-emerald-600 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-sm shadow-xs tracking-wide">
            {product.discountBadge}
          </span>
        )}

        {/* Top-Right Floating Wishlist Button */}
        <button
          type="button"
          onClick={handleWishlistClick}
          aria-label={wishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
          className={`absolute top-2 right-2 flex size-8 items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-xs transition-colors duration-150 cursor-pointer ${
            wishlisted ? "text-red-500" : "text-slate-600 hover:text-red-500"
          }`}
        >
          <Heart className={`size-4 ${wishlisted ? "fill-red-500" : ""}`} />
        </button>
      </div>

      {/* 2. Content Section */}
      <div className="flex flex-1 flex-col p-3 md:p-4">
        {/* Category / Brand Micro-Tag */}
        <span className="text-[11px] uppercase tracking-wider text-slate-500 font-medium truncate mb-1">
          {product.brand || product.category}
        </span>

        {/* Product Title */}
        <Link
          href={`#product-${product.id}`}
          className="text-sm font-medium text-slate-900 line-clamp-2 hover:text-emerald-600 transition-colors duration-150 min-h-[40px]"
        >
          {product.title}
        </Link>

        {/* Ratings & Reviews */}
        <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
          <div className="flex items-center text-amber-500">
            <Star className="size-3.5 fill-amber-400 text-amber-400" />
            <span className="ml-1 font-semibold text-slate-800">{product.rating.toFixed(1)}</span>
          </div>
          <span className="text-slate-300">•</span>
          <span>({product.reviewsCount})</span>
        </div>

        {/* Price & Action Section */}
        <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <span className="text-base font-bold text-slate-900 leading-none">
              ৳{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-slate-400 line-through mt-0.5">
                ৳{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <Button
            size="sm"
            variant={added ? "secondary" : "default"}
            onClick={handleAddClick}
            className={`min-w-[76px] transition-all duration-150 text-xs font-semibold ${
              added ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : ""
            }`}
          >
            {added ? (
              <>
                <Check className="size-3.5 text-emerald-600" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="size-3.5" />
                <span>Add</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;

