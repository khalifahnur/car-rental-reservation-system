"use client"
import { createSlice } from '@reduxjs/toolkit';

const likedModelSlice = createSlice({
  name: 'likedModels',
  initialState: {},
  reducers: {
    toggleLike: (state, action) => {
      const carId = action.payload;
      if (state[carId]) {
        delete state[carId];
      } else {
        state[carId] = true;
      }
    },
  },
});


export const { toggleLike } = likedModelSlice.actions;

export default likedModelSlice.reducer;
