import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import request from '../../api';

export const getSearchedVideos = createAsyncThunk(
  'searchVideo/getSearchedVideo',
  async (keyword, { getState }) => {
    try {
      const res = await request.get('/search', {
        params: {
          part: 'snippet',
          maxResults: 15,
          q: keyword,
          type: 'video, channel',
        },
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

const getsearchVideosInfoSlice = createSlice({
  name: 'searchVideosInfo',
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
      .addCase(getSearchedVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSearchedVideos.fulfilled, (state, action) => {
        const { items } = action.payload;
        state.loading = false;
        state.videos = items;
      })
      .addCase(getSearchedVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default getsearchVideosInfoSlice.reducer;
