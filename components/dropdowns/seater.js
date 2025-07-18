import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementSeater, decrementSeater } from '@/store/slices/filterSlice'
import { FaPlus, FaMinus } from 'react-icons/fa'

const SeaterButton = () => {
  const dispatch = useDispatch()
  const seater = useSelector((state) => state.filter.seater)
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // 👈 This ensures SSR/CSR do not mismatch

  return (
    <div className="relative ">
      {/* Toggle Button */}
      <button
        className="w-[100px] bg-white px-3 py-2 rounded-full hover:bg-blue-50 flex justify-center items-center gap-1 text-sm mx-auto"
        onClick={() => setOpen(!open)}
      >
        {seater}-Seater
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10 mt-2 bg-white border border-gray-100  rounded-full shadow py-2 px-4 flex items-center gap-3 w-max">
          {/* Minus Button */}
          <button
            onClick={() => dispatch(decrementSeater())}
            disabled={seater === 1}
            className="w-8 h-8 flex items-center justify-center bg-red-400 text-white rounded-full hover:bg-red-500 disabled:opacity-50"
          >
            <FaMinus />
          </button>

          {/* Seater Value */}
          <div className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-800 font-bold rounded-full">
            {seater}
          </div>

          {/* Plus Button */}
          <button
            onClick={() => dispatch(incrementSeater())}
            disabled={seater === 5}
            className="w-8 h-8 flex items-center justify-center bg-green-400 text-white rounded-full hover:bg-green-500 disabled:opacity-50"
          >
            <FaPlus />
          </button>
        </div>
      )}
    </div>
  )
}

export default SeaterButton
