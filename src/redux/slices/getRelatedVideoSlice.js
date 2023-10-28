import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import request from '../../api';

export const getRelatedVideos = createAsyncThunk(
  'relatedVideo/getRelatedVideo',
  async (id, { getState }) => {
    try {
      const res = await request.get('/search', {
        params: {
          part: 'snippet',
          // relatedToVideoId: id,
          videoId: id,
          maxResults: 15,
          type: 'video',
        },
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

const getRelatedVideoInfoSlice = createSlice({
  name: 'relatedVideoInfo',
  initialState: {
    relatedVideo: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Add synchronous actions here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRelatedVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRelatedVideos.fulfilled, (state, action) => {
        const { items } = action.payload;
        state.loading = false;
        state.relatedVideo = items;
      })
      .addCase(getRelatedVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default getRelatedVideoInfoSlice.reducer;
