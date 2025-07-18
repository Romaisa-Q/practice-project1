// components/ReviewSummary.js

import {
  CheckCircleIcon,
  KeyIcon,
  ChatBubbleLeftIcon,
  MapIcon,
  TagIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

function LeafIcon({ className }) {
  // Simple SVG leaf - animated Heroicon style
  return (
    <svg
      className={className}
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 5C9 10.5 4 19 7.5 26C10.5 32 23.5 32 27.5 26C31 19 26 10.5 17.5 5Z"
        fill="#444"
        stroke="#222"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export default function ReviewSummary() {
  return (
    <div className="bg-white px-6 py-10 rounded-xl ">
      {/* Top Section */}
      <div className="flex flex-col items-center mb-8 pb-4 border-b border-gray-300">
        <div className="flex items-center mb-2">
          <span className="text-6xl font-bold text-gray-800 mx-2">4.94</span>
        </div>
        <div className="mt-2 font-semibold text-lg">Guest favorite</div>
        <p className="text-gray-500 text-center max-w-md mt-1">
          This home is a guest favorite based on ratings, reviews, and reliability
        </p>
      </div>

      {/* Rating Breakdown */}
      <div className="grid grid-cols-2 md:grid-cols-6 items-end text-center gap-2 border-b border-gray-300 pb-8">
        {/* Overall Rating Bar */}
        <div className="flex flex-col items-center">
          <div className="mb-3 text-gray-700 text-sm font-semibold">Overall rating</div>
          <div className="flex flex-col gap-1">
            {[5, 4, 3, 2, 1].map(star => (
              <div key={star} className="flex items-center">
                <span className="text-xs text-gray-400 mr-1">{star}</span>
                <div className="w-16 h-1 rounded bg-gray-200 relative">
                  {star === 5 && (
                    <div className="absolute h-1 rounded bg-gray-800" style={{ width: "90%" }}></div>
                  )}
                  {star === 4 && (
                    <div className="absolute h-1 rounded bg-gray-500" style={{ width: "40%" }}></div>
                  )}
                  {/* 3-1 star is kept nearly empty */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cleanliness */}
        <div>
           <div className="mb-3 text-gray-700 pb-4.5 text-sm font-semibold">Cleanliness</div>
          <div className="mb-1 text-lg font-semibold">4.9</div>
          <div className="flex flex-col items-center space-y-1">
            <SparklesIcon className="h-6 w-6 text-gray-700" />
            <div className="text-xs text-gray-500">Cleanliness</div>
          </div>
        </div>

        {/* Accuracy */}
        <div>
           <div className="mb-3 text-gray-700 pb-4.5 text-sm font-semibold">Accuracy</div>
          <div className="mb-1 text-lg font-semibold">4.9</div>
          <div className="flex flex-col items-center space-y-1">
            <CheckCircleIcon className="h-6 w-6 text-gray-700" />
            <div className="text-xs text-gray-500">Accuracy</div>
          </div>
        </div>

        {/* Check-in */}
        <div>
           <div className="mb-3 text-gray-700 pb-4.5 text-sm font-semibold">check-in</div>
          <div className="mb-1 text-lg font-semibold">5.0</div>
          <div className="flex flex-col items-center space-y-1">
            <KeyIcon className="h-6 w-6 text-gray-700" />
            <div className="text-xs text-gray-500">Check-in</div>
          </div>
        </div>

        {/* Communication */}
        <div>
           <div className="mb-3 text-gray-700 pb-4.5 text-sm font-semibold">Communication</div>
          <div className="mb-1 text-lg font-semibold">5.0</div>
          <div className="flex flex-col items-center space-y-1">
            <ChatBubbleLeftIcon className="h-6 w-6 text-gray-700" />
            <div className="text-xs text-gray-500">Communication</div>
          </div>
        </div>

        {/* Location */}
        <div>
           <div className="mb-3 text-gray-700 pb-4.5 text-sm font-semibold">location</div>
          <div className="mb-1 text-lg font-semibold">4.8</div>
          <div className="flex flex-col items-center space-y-1">
            <MapIcon className="h-6 w-6 text-gray-700" />
            <div className="text-xs text-gray-500">Location</div>
          </div>
        </div>
      </div>
    </div>
  );
}
