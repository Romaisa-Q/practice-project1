
import Navbar from './navbar'
import HostelCard from '@/components/homepg/card'

const hostels = [
  {
    id: 1,
    image: '/images/1.png',
    title: '2 Seater at Ismail Hostel',
    price: '17,000'
  },
  {
    id: 2,
    image: '/images/2.png',
    title: '3 Seater at Al-Noor Hostel',
    price: '15,500'
  },
  {
    id: 3,
    image: '/images/3.png',
    title: '1 Seater at Bilal Hostel',
    price: '21,000'
  },
   {
    id: 4,
    image: '/images/1.png',
    title: '2 Seater at Ismail Hostel',
    price: '17,000'
  },
  {
    id: 5,
    image: '/images/2.png',
    title: '3 Seater at Al-Noor Hostel',
    price: '15,500'
  },
  {
    id: 6,
    image: '/images/3.png',
    title: '1 Seater at Bilal Hostel',
    price: '21,000'
  },
  {
    id: 7,
    image: '/images/1.png',
    title: '2 Seater at Ismail Hostel',
    price: '17,000'
  },
  {
    id: 8,
    image: '/images/2.png',
    title: '3 Seater at Al-Noor Hostel',
    price: '15,500'
  },
  {
    id: 9,
    image: '/images/3.png',
    title: '1 Seater at Bilal Hostel',
    price: '21,000'
  },
   {
    id: 10,
    image: '/images/1.png',
    title: '2 Seater at Ismail Hostel',
    price: '17,000'
  },
  {
    id: 11,
    image: '/images/2.png',
    title: '3 Seater at Al-Noor Hostel',
    price: '15,500'
  },
  {
    id: 12,
    image: '/images/3.png',
    title: '1 Seater at Bilal Hostel',
    price: '21,000'
  },
  // Add more cards as needed...
]

export default function Home() {
  return (
    <div className='bg-whie'>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center text-sm py-2 mb-5">
        🌟 Enjoy 0% fees on all services
      </div>
      {/* Top Section */}
      <div className="shadow-md px-10">
        {/* Navbar */}
       < Navbar />
      
        {/* Filters Section */}
        <div className="flex justify-center flex-wrap gap-3 py-4 text-sm">
          {['Price ▾', 'Nearest University ▾', 'WiFi', 'Air Conditioning', 'Kitchen', 'Washer', 'Iron', 'Free Parking', 'Hot Water', 'UPS'].map((item, i) => (
            <button key={i} className="px-5 py-2 border border-gray-300 rounded-full bg-white">
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
    
    <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6">
      {hostels.map((hostel) => (
        <HostelCard
          key={hostel.id}
          id={hostel.id}
          image={hostel.image}
          title={hostel.title}
          price={hostel.price}
        />
      ))}
    </div>

    </div>
  )
}
