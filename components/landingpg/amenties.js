import React, { useState } from 'react';
import { 
  ChefHat, 
  Wifi, 
  Car, 
  Tv, 
  Building, 
  Snowflake, 
  TreePine, 
  Flame,
  Shield,
  ShieldAlert,
  Sofa,
  Bed,
  Bath,
  Coffee,
  Utensils,
  Waves,
  Dumbbell,
  Camera,
  Music,
  Book,
  Gamepad2,
  Shirt,
  Zap,
  Refrigerator,
  Microwave
} from 'lucide-react';

const AmenitiesSection = () => {
  const [showAll, setShowAll] = useState(false);

  const allAmenities = [
    { icon: ChefHat, name: 'Kitchen', available: true },
    { icon: Wifi, name: 'Wifi', available: true },
    { icon: Car, name: 'Free parking on premises', available: true },
    { icon: Tv, name: 'TV', available: true },
    { icon: Building, name: 'Elevator', available: true },
    { icon: Snowflake, name: 'Air conditioning', available: true },
    { icon: TreePine, name: 'Patio or balcony', available: true },
    { icon: Flame, name: 'Indoor fireplace', available: true },
    { icon: Shield, name: 'Carbon monoxide alarm', available: false },
    { icon: ShieldAlert, name: 'Smoke alarm', available: false },
    // Additional amenities for "Show All"
    { icon: Sofa, name: 'Living room', available: true },
    { icon: Bed, name: 'Comfortable bedding', available: true },
    { icon: Bath, name: 'Private bathroom', available: true },
    { icon: Coffee, name: 'Coffee maker', available: true },
    { icon: Utensils, name: 'Kitchen utensils', available: true },
    { icon: Waves, name: 'Hot water', available: true },
    { icon: Dumbbell, name: 'Gym access', available: false },
    { icon: Camera, name: 'Security cameras', available: true },
    { icon: Music, name: 'Sound system', available: true },
    { icon: Book, name: 'Books and reading material', available: true },
    { icon: Gamepad2, name: 'Gaming console', available: false },
    { icon: Shirt, name: 'Hangers', available: true },
    { icon: Zap, name: 'Iron and ironing board', available: true },
    { icon: Refrigerator, name: 'Refrigerator', available: true },
    { icon: Microwave, name: 'Microwave', available: true }
  ];

  const displayedAmenities = showAll ? allAmenities : allAmenities.slice(0, 10);

  return (
    <div className="max-w-3xl  p-6 bg-white">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        What this place offers
      </h2>

      {/* Amenities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {displayedAmenities.map((amenity, index) => {
          const IconComponent = amenity.icon;
          return (
            <div 
              key={index}
              className={`flex items-center space-x-4 py-3 ${
                !amenity.available ? 'opacity-50' : ''
              }`}
            >
              <div className="flex-shrink-0">
                <IconComponent 
                  className={`w-6 h-6 ${
                    amenity.available ? 'text-gray-700' : 'text-gray-400'
                  }`} 
                />
              </div>
              <span 
                className={`text-base ${
                  amenity.available 
                    ? 'text-gray-900' 
                    : 'text-gray-500 line-through'
                }`}
              >
                {amenity.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Show All/Less Button */}
      <button
        onClick={() => setShowAll(!showAll)}
        className="bg-white border border-gray-900 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
      >
        {showAll ? `Show less` : `Show all ${allAmenities.length} amenities`}
      </button>
    </div>
  );
};

export default AmenitiesSection;