import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import auth from './slices/authSlice';
import videos from './slices/getVideoSlice';

const rootReducer = combineReducers({
  auth,
  videos,
});

const store = configureStore({
  devTools: true,
  reducer: rootReducer,
});

export default store;
