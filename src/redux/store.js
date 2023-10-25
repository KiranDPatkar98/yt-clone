import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import auth from './slices/authSlice';
import videos from './slices/getVideoSlice';
import videoInfo from './slices/videoInformationSlice';
import channelInfo from './slices/getChannelDetailSlice';

const rootReducer = combineReducers({
  auth,
  videos,
  selectedVideo: videoInfo,
  channelDetails: channelInfo,
});

const store = configureStore({
  devTools: true,
  reducer: rootReducer,
});

export default store;
