import { configureStore } from '@reduxjs/toolkit';
import videoReducer from '../features/Videos/videoSlice'

export const store = configureStore({
  reducer: {
    videos: videoReducer,
  },
});
