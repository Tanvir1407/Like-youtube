import { configureStore } from '@reduxjs/toolkit';
import videoReducer from '../features/Videos/videoSlice';
import tagsReducer from '../features/Tags/TagSlice';
import singleVideoReducer from "../features/video/videoSlice"
import relatedVideos from "../features/relatedVideos/RelatedVideosSlice"

export const store = configureStore({
  reducer: {
    videos: videoReducer,
    tags: tagsReducer,
    video: singleVideoReducer,
    relatedVideo: relatedVideos,
  },
});
