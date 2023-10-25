import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import request from '../../api';

export const getvideoInformation = createAsyncThunk(
  'videoInfo/getPopularVideos',
  async (id, { getState }) => {
    try {
      const res = await request.get('/videos', {
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

const getVideoInfoSlice = createSlice({
  name: 'videoInfo',
  initialState: {
    video: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Add synchronous actions here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(getvideoInformation.pending, (state) => {
        state.loading = true;
      })
      .addCase(getvideoInformation.fulfilled, (state, action) => {
        state.loading = false;
        const { items } = action.payload;
        state.video = items[0];
      })
      .addCase(getvideoInformation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default getVideoInfoSlice.reducer;
