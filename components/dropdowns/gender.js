import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGender } from '@/store/slices/filterSlice';
import { FaUser } from 'react-icons/fa';
import Image from 'next/image';

const GenderDropdown = () => {
  const dispatch = useDispatch();
  const gender = useSelector(state => state.filter.gender); // ✅ Redux state
  const [open, setOpen] = useState(false);

  const handleSelect = (value) => {
    dispatch(setGender(value));
    setOpen(false);
  };

  return (
    <div className="relative w-[100px]">
      <button
        className="w-full bg-white text-left px-3 py-2 rounded-full hover:bg-blue-50 flex items-center gap-1 text-sm"
        onClick={() => setOpen(!open)}
      >
        <FaUser />
        {gender || 'Gender'}
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 bg-white border border-gray-100 w-60 flex flex-col item-center justify-center rounded-2xl shadow text-sm overflow-hidden">
          <li
            onClick={() => handleSelect('Girls')}
            className="px-2 py-2 flex items-center gap-4 hover:bg-gray-100 cursor-pointer"
          >
            <Image src="/icons/girl.png" alt="Girl Icon" width={45} height={45} className="rounded-full" />
            Girls
          </li>
          <li
            onClick={() => handleSelect('Boys')}
            className="px-2 py-2 flex items-center gap-4 hover:bg-gray-100 cursor-pointer"
          >
            <Image src="/icons/boy.png" alt="Boy Icon" width={45} height={45} className="rounded-full" />
            Boys
          </li>
        </ul>
      )}
    </div>
  );
};

export default GenderDropdown;
