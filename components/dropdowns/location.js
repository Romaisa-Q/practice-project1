import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLocation } from '@/store/slices/filterSlice'
import { MdLocationOn } from 'react-icons/md'
import Image from 'next/image'

const LocationDropdown = () => {
  const dispatch = useDispatch()
  const location = useSelector(state => state.filter.location)
  const [open, setOpen] = useState(false)

  const handleSelect = (value) => {
    dispatch(setLocation(value))
    setOpen(false)
  }

  return (
    <div className="relative w-[120px]">
      <button
        className="w-full bg-white hover:bg-blue-50 rounded-full text-left px-3 py-2 flex items-center gap-1 text-sm"
        onClick={() => setOpen(!open)}
      >
        <MdLocationOn />
        {location || 'location'}
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-xs bg-white rounded-2xl border border-gray-200 shadow text-sm overflow-y-auto max-h-56 custom-scroll">
          <li
            onClick={() => handleSelect('Abbottabad')}
            className="px-2 py-2 flex items-center gap-6 hover:bg-gray-100 cursor-pointer"
          >
            <Image src="/icons/2.png" alt="Abbottabad" width={60} height={60} />
            Abbottabad
          </li>

          <li
            onClick={() => handleSelect('Islamabad')}
            className="px-2 py-2 flex items-center gap-6 hover:bg-gray-100 cursor-pointer"
          >
            <Image src="/icons/3.png" alt="Islamabad" width={60} height={60} />
            Islamabad
          </li>

          <li
            onClick={() => handleSelect('Lahore')}
            className="px-2 py-2 flex items-center gap-6 hover:bg-gray-100 cursor-pointer"
          >
            <Image src="/icons/5.png" alt="Lahore" width={60} height={60} />
            Lahore
          </li>

          <li
            onClick={() => handleSelect('Karachi')}
            className="px-2 py-2 flex items-center gap-6 hover:bg-gray-100 cursor-pointer"
          >
            <Image src="/icons/4.png" alt="Karachi" width={60} height={60} />
            Karachi
          </li>
        </ul>
      )}
    </div>
  )
}

export default LocationDropdown
