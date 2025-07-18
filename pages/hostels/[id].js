import { useRouter } from 'next/router'
import Image from 'next/image';
import Navbar from '@/components/homepg/navbar'
import AmenitiesSection from '@/components/landingpg/amenties';
import RatingSection from '@/components/landingpg/rating';
import Reviews from '@/components/landingpg/reviews';
import Location from '@/components/locationMap/map';
import { Heart, Award, Star } from 'lucide-react'
import { Snowflake, Key, Calendar } from 'lucide-react';
import HostProfile from '@/components/landingpg/hostprofile';
import ReserveCard from '@/components/reserve card/reserveCard';

const HostelDetail = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className='max-w-6xl mx-auto'>
    <Navbar className="sticky"/>
    <div className=" max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Hostel Detail Page</h1>
     <div className="grid grid-cols-4 grid-rows-2 gap-2 h-90 rounded-xl overflow-hidden">
  {/* Big Image - spans 2 rows */}
  <div className="row-span-2 col-span-2">
    <img src="/images/1.png" alt="Main" className="w-full h-full object-cover" />
  </div>

  {/* Small Image 1 */}
  <div>
    <img src="/images/D2.png" alt="Side 1" className="w-full h-full object-cover" />
  </div>

  {/* Small Image 2 */}
  <div>
    <img src="/images/D3.png" alt="Side 2" className="w-full h-full object-cover" />
  </div>
  {/* Small Image 1 */}
  <div>
    <img src="/images/D2.png" alt="Side 1" className="w-full h-full object-cover" />
  </div>

  {/* Small Image 2 */}
  <div>
    <img src="/images/D3.png" alt="Side 2" className="w-full h-full object-cover" />
  </div>
</div>
    </div>
   <div className='flex gap-9 border-b border-gray-300 pb-6'>
   
    <div>
    {/* guest fvrt */}
    <div className="w-2xl p-6 bg-white">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Entire rental unit in Islamabad, Pakistan
        </h1>
        <p className="text-gray-600 text-base">
          6 guests · 2 bedrooms · 2 beds · 2.5 baths
        </p>
      </div>

      {/* Main Card */}
      <div className="border border-gray-300 shadow-xs rounded-xl p-6 bg-white">
        <div className="flex items-center justify-between h-10">
          {/* Left Section - Guest Favorite */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Award className="w-6 h-6 text-gray-900" />
              <Heart className="w-6 h-6 text-gray-900 fill-current" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">
                Guest favorite
              </h3>
              <p className="text-gray-600 text-sm max-w-xs">
                One of the most loved homes on stayzey, according to guests
              </p>
            </div>
          </div>

          {/* Right Section - Rating and Reviews */}
          <div className="text-right">
            <div className="flex items-center justify-end space-x-1 mb-1">
              <span className="text-2xl font-semibold text-gray-900">4.94</span>
              <div className="flex space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-gray-900 fill-current"
                  />
                ))}
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
     <div className="w-2xl p-6 bg-white">
      {/* Host Info */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="relative">
          <img 
            src="/icons/boy.png" 
            alt="Host Asad" 
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">★</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Hosted by Assad</h3>
          <p className="text-gray-600 text-sm">Superhost · 4 years hosting</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-8"></div>

      {/* Features List */}
      <div className="space-y-6">
        {/* Feature 1 */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 mt-1">
            <Snowflake className="w-6 h-6 text-gray-700" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Designed for staying cool</h4>
            <p className="text-gray-600 text-sm">Beat the heat with the AC and ceiling fan.</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 mt-1">
            <Key className="w-6 h-6 text-gray-700" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Exceptional check-in experience</h4>
            <p className="text-gray-600 text-sm">Recent guests gave the check-in process a 5-star rating.</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 mt-1">
            <Calendar className="w-6 h-6 text-gray-700" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Free cancellation before Jul 31</h4>
            <p className="text-gray-600 text-sm">Get a full refund if you change your mind.</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-8"></div>

      {/* Description */}
      <div>
        <p className="text-gray-700 text-base leading-relaxed">
          Enjoy a stylish experience at this centrally-located place.
        </p>
      </div>
    </div>
    <AmenitiesSection/>
    </div>

     <div>
      <ReserveCard/>
    </div>
    </div>
    <RatingSection/>
    <Reviews/>
    <Location/>
    <HostProfile/>
    <div/>
    </div>
  )
}

export default HostelDetail

