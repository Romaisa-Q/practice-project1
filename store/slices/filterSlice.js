import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  location: '',
  gender: '',
  seater: 1,
  checkIn: '',
  checkOut: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload
    },
    setGender: (state, action) => {
      state.gender = action.payload
    },
    incrementSeater: (state) => {
      if (state.seater < 5) {
        state.seater += 1
      }
    },
    decrementSeater: (state) => {
      if (state.seater > 1) {
        state.seater -= 1
      }
    },
    setCheckIn: (state, action) => {
      state.checkIn = action.payload
    },
    setCheckOut: (state, action) => {
      state.checkOut = action.payload
    },
    resetFilters: () => initialState
  }
})

export const {
  setLocation,
  setGender,
  incrementSeater,
  decrementSeater,
  setCheckIn,
  setCheckOut,
  resetFilters
} = filterSlice.actions

export default filterSlice.reducer
