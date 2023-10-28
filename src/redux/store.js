import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import auth from './slices/authSlice';
import videos from './slices/getVideoSlice';
import videoInfo from './slices/videoInformationSlice';
import channelInfo from './slices/getChannelDetailSlice';
import comments from './slices/getCommentsSlice';
import relatedVideoInfo from './slices/getRelatedVideoSlice';
import searchVideosInfo from './slices/serachVideoSlice';

const rootReducer = combineReducers({
  auth,
  videos,
  selectedVideo: videoInfo,
  relatedVideos: relatedVideoInfo,
  channelDetails: channelInfo,
  commentList: comments,
  searchedVideos: searchVideosInfo,
});

const store = configureStore({
  devTools: true,
  reducer: rootReducer,
});

export default store;
