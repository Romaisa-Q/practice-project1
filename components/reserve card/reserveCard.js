import React, { useState } from 'react';
import { ChevronDown, MapPin, Users, Calendar, User } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setLocation,
  setGender,
  incrementSeater,
  decrementSeater,
  setCheckIn,
  setCheckOut,
} from '@/store/slices/filterSlice';

const BookingCard = ({ className }) => {
  const dispatch = useDispatch();
 const location = useSelector(state => state.filter.location);
const gender = useSelector(state => state.filter.gender);
const checkIn = useSelector(state => state.filter.checkIn);
const checkOut = useSelector(state => state.filter.checkOut);
const seater = useSelector(state => state.filter.seater);


  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showGenderDropdown, setShowGenderDropdown] = useState(false);

  const locations = ['Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad'];
  const genders = ['boys', 'girls'];

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const timeDiff = checkOutDate - checkInDate;
    const nights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights : 0;
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const handleCheckInChange = (date) => {
    dispatch(setCheckIn(date));
    if (checkOut && new Date(date) >= new Date(checkOut)) {
      const nextDay = new Date(date);
      nextDay.setDate(nextDay.getDate() + 1);
      dispatch(setCheckOut(nextDay.toISOString().split('T')[0]));
    }
  };

  const handleCheckOutChange = (date) => {
    if (checkIn && new Date(date) <= new Date(checkIn)) return;
    dispatch(setCheckOut(date));
  };

  const calculatePrice = () => {
    const basePrice = 68.5;
    const nights = calculateNights();
    return Math.round(basePrice * nights * seater);
  };

  return (
      <div className={`max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 font-sans ${className}`}>

      {/* Price Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">${calculatePrice()}</h2>
        <p className="text-gray-600">for {calculateNights()} nights</p>
      </div>

      {/* Dates */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="border border-gray-300 rounded-l-lg p-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <div>
              <p className="text-xs font-semibold text-gray-700 uppercase">Check-in</p>
              <input
                type="date"
                value={checkIn}
                min={getTodayDate()}
                onChange={(e) => handleCheckInChange(e.target.value)}
                className="text-sm font-medium text-gray-800 bg-transparent border-none outline-none"
              />
            </div>
          </div>
        </div>
        <div className="border border-gray-300 rounded-r-lg p-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <div>
              <p className="text-xs font-semibold text-gray-700 uppercase">Checkout</p>
              <input
                type="date"
                value={checkOut}
                min={checkIn || getTodayDate()}
                onChange={(e) => handleCheckOutChange(e.target.value)}
                className="text-sm font-medium text-gray-800 bg-transparent border-none outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="relative mb-4">
        <div
          className="border border-gray-300 rounded-lg p-3 cursor-pointer"
          onClick={() => setShowLocationDropdown(!showLocationDropdown)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-500" />
              <div>
                <p className="text-xs font-semibold text-gray-700 uppercase">Location</p>
                <p className="text-sm font-medium text-gray-800">{location}</p>
              </div>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-gray-500 transition-transform ${
                showLocationDropdown ? 'rotate-180' : ''
              }`}
            />
          </div>
        </div>
        {showLocationDropdown && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
            {locations.map((loc) => (
              <div
                key={loc}
                className="p-3 hover:bg-gray-50 cursor-pointer"
                onClick={() => {
                  dispatch(setLocation(loc));
                  setShowLocationDropdown(false);
                }}
              >
                {loc}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Gender */}
      <div className="relative mb-4">
        <div
          className="border border-gray-300 rounded-lg p-3 cursor-pointer"
          onClick={() => setShowGenderDropdown(!showGenderDropdown)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-gray-500" />
              <div>
                <p className="text-xs font-semibold text-gray-700 uppercase">Gender</p>
                <p className="text-sm font-medium text-gray-800">{gender}</p>
              </div>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-gray-500 transition-transform ${
                showGenderDropdown ? 'rotate-180' : ''
              }`}
            />
          </div>
        </div>
        {showGenderDropdown && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
            {genders.map((gen) => (
              <div
                key={gen}
                className="p-3 hover:bg-gray-50 cursor-pointer"
                onClick={() => {
                  dispatch(setGender(gen));
                  setShowGenderDropdown(false);
                }}
              >
                {gen}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Seater */}
      <div className="border border-gray-300 rounded-lg p-3 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gray-500" />
            <div>
              <p className="text-xs font-semibold text-gray-700 uppercase">Seater</p>
              <p className="text-sm font-medium text-gray-800">
                {seater} guest{seater > 1 ? 's' : ''}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => dispatch(decrementSeater())}
              disabled={seater <= 1}
              className={`w-8 h-8 rounded-full border ${
                seater <= 1
                  ? 'border-gray-200 text-gray-300'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-50'
              } flex items-center justify-center`}
            >
              -
            </button>
            <span className="text-sm font-medium text-gray-800 min-w-[2rem] text-center">
              {seater}
            </span>
            <button
              onClick={() => dispatch(incrementSeater())}
              disabled={seater >= 5}
              className={`w-8 h-8 rounded-full border ${
                seater >= 5
                  ? 'border-gray-200 text-gray-300'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-50'
              } flex items-center justify-center`}
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Reserve Button */}
      <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-pink-700 transition-colors">
        Reserve
      </button>

      {/* Footer Note */}
      <p className="text-center text-sm text-gray-600 mt-4">
        You won't be charged yet
      </p>
    </div>
  );
};

export default BookingCard;
