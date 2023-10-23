import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import auth from './slices/authSlice';

// const state = {
//   name: 'Kiran',
//   age: 21,
// };

const rootReducer = combineReducers({
  auth,
});

const store = configureStore({
  devTools: true,
  reducer: rootReducer,
});

export default store;
