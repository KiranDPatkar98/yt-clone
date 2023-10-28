import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import request from '../../api';

export const getChannelDetails = createAsyncThunk(
  'channelInfo/getChannelDetails',
  async (id, { getState }) => {
    try {
      const res = await request.get('/channels', {
        params: {
          part: 'snippet,contentDetails,statistics',
          id: id,
        },
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getSubscriptionStatus = createAsyncThunk(
  'channelInfo/getSubscriptionStatus',
  async (id, { getState }) => {
    const state = getState();
    console.log(state.auth.accessToken, 'state.auth.accessToken');
    try {
      const res = await request.get('/subscriptions', {
        params: {
          part: 'snippet',
          channelId: id,
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

const getChannelDetailSlice = createSlice({
  name: 'channelInfo',
  initialState: {
    channel: {},
    loading: false,
    error: null,
    subscriptionStatus: false,
  },
  reducers: {
    // Add synchronous actions here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChannelDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getChannelDetails.fulfilled, (state, action) => {
        state.loading = false;
        const { items } = action.payload;
        state.channel = items[0];
      })
      .addCase(getChannelDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getSubscriptionStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSubscriptionStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.subscriptionStatus = action.payload.length !== 0;
      })
      .addCase(getSubscriptionStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default getChannelDetailSlice.reducer;
