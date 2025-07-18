// components/Navbar.js
import Image from 'next/image'
import { MdSearch } from 'react-icons/md'
import { MdClose } from 'react-icons/md' // 👈 Cross icon
import LocationDropdown from '../dropdowns/location'
import GenderDropdown from '../dropdowns/gender'
import SeaterButton from '../dropdowns/seater'
import { useDispatch } from 'react-redux'
import { resetFilters } from '@/store/slices/filterSlice'

const Navbar = () => {
  const dispatch = useDispatch()

  const handleReset = () => {
    dispatch(resetFilters())
  }

  return (
    <div className="sticky top-0 z-20 bg-white">
      <nav className="flex flex-col lg:flex-row mx-auto px-5 max-w-6xl items-center justify-between py-4 gap-4">
        
        {/* Logo */}
        <div className="w-[100px]">
          <Image 
            src="/images/logo.png" 
            alt="Staevy Logo" 
            width={100} 
            height={40} 
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-2 border-gray-300 rounded-full px-4 py-1 w-full sm:w-auto max-w-full text-sm">
          <LocationDropdown />
          <GenderDropdown />
          <SeaterButton />
          
          {/* Search */}
          <div className="bg-black rounded-full h-8 w-8 flex items-center justify-center">
            <MdSearch className="text-white text-xl" />
          </div>

          {/* Reset */}
          <button 
            onClick={handleReset}
            className="bg-red-100 hover:bg-red-200 text-red-700 rounded-full h-8 w-8 flex items-center justify-center transition-all"
            title="Reset Filters"
          >
            <MdClose className="text-lg" />
          </button>
        </div>

        {/* Become a Host */}
        <div className="font-bold cursor-pointer hover:text-gray-600 transition-colors">
          Become a Host
        </div>
      </nav>
    </div>
  )
}

export default Navbar
