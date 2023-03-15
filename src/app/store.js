import { configureStore } from '@reduxjs/toolkit';
import videoReducer from '../features/Videos/videoSlice';
import tagsReducer from '../features/Tags/TagSlice';

export const store = configureStore({
  reducer: {
    videos: videoReducer,
    tags: tagsReducer,
  },
});
