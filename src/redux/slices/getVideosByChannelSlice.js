import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import request from '../../api';

export const getVideosByChannel = createAsyncThunk(
  'subscriptionInfo/getVideosByChannel',
  async (id, { getState }) => {
    try {
      // ger upload playlist id
      const res = await request.get('/channels', {
        params: {
          part: 'contentDetails',
          id,
        },
      });
      const uploadPlaylistId =
        res.data.items[0].contentDetails.relatedPlaylist.uploads;

      // get the videos using the playlist-id
      const res2 = await request.get('/playlistItems', {
        params: {
          part: 'contentDetails, snippet',
          playlistId: uploadPlaylistId,
          maxResults: 30,
        },
      });
      return res2.items;
    } catch (error) {
      throw error;
    }
  }
);

const getVideosByChannelSlice = createSlice({
  name: 'channelVideos',
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
      .addCase(getVideosByChannel.pending, (state) => {
        state.loading = true;
      })
      .addCase(getVideosByChannel.fulfilled, (state, action) => {
        state.loading = false;
        const { items } = action.payload;
        state.videos = items;
      })
      .addCase(getVideosByChannel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default getVideosByChannelSlice.reducer;
