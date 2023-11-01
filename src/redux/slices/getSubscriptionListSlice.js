import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import request from '../../api';

export const getSubscriptionList = createAsyncThunk(
  'subscriptionInfo/getSubscriptionList',
  async (_, { getState }) => {
    const state = getState();
    try {
      const res = await request.get('/subscriptions', {
        params: {
          part: 'snippet,contentDetails',
          mine: true,
        },
        headers: {
          Authorization: `Bearer ${state.auth.accessToken}`,
        },
      });
      return res.items;
    } catch (error) {
      throw error;
    }
  }
);

const getSubscriptionSlice = createSlice({
  name: 'subscriptionInfo',
  initialState: {
    videos: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Add synchronous actions here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSubscriptionList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSubscriptionList.fulfilled, (state, action) => {
        state.loading = false;
        const { items } = action.payload;
        state.videos = items;
      })
      .addCase(getSubscriptionList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default getSubscriptionSlice.reducer;
