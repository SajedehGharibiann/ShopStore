import React from "react";

export default function SkeletonProductCard() {
  return (
    <div
      className="
        bg-white shadow-sm rounded-xl p-4 border border-gray-100
        animate-pulse
      "
    >
      {/* Image skeleton */}
      <div className="h-52 bg-gray-200 rounded-md mb-4"></div>

      {/* Text lines */}
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3 mb-3"></div>

      <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-1/3 mb-2"></div>

      {/* Price skeleton */}
      <div className="flex gap-2 mt-3">
        <div className="h-5 w-20 bg-gray-200 rounded"></div>
        <div className="h-5 w-14 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}