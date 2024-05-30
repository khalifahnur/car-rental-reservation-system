"use client"
import { configureStore } from '@reduxjs/toolkit';
import likedModelSlice from './likedModelSlice';
// import likedModelsReducer from './likedModelsSlice';

export const store = configureStore({
  reducer: {
    likedModels: likedModelSlice
  },
});

export default store;
