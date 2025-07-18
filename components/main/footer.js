import React from 'react';
import { Globe, Facebook, Twitter, Instagram } from 'lucide-react';

const StazeyFooter = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left side - Copyright and links */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
            <span>© 2025 Stazey, Inc.</span>
            <span className="text-gray-400">·</span>
            <a href="#" className="hover:underline">Terms</a>
            <span className="text-gray-400">·</span>
            <a href="#" className="hover:underline">Sitemap</a>
            <span className="text-gray-400">·</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span className="text-gray-400">·</span>
            <a href="#" className="hover:underline flex items-center gap-1">
              Your Privacy Choices
              <div className="w-6 h-3 bg-blue-600 rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </a>
          </div>

          {/* Right side - Language, Currency and Social */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
              <Globe className="w-4 h-4" />
              <span>English (US)</span>
            </button>

            {/* Currency Selector */}
            <button className="text-sm text-gray-600 hover:text-gray-900">
              <span className="font-semibold">$ USD</span>
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default StazeyFooter;