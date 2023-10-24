import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import request from '../../api';

export const getPopularVideos = createAsyncThunk(
  'videos/getPopularVideos',
  async (_, { getState }) => {
    const state = getState();
    try {
      const res = await request.get('/videos', {
        params: {
          part: 'snippet,contentDetails,statistics',
          chart: 'mostPopular',
          regionCode: 'IN',
          maxResults: 5,
          pageToken: state.videos.nextPageToken,
        },
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getCategoriesVideos = createAsyncThunk(
  'videos/getCategoriesVideos',
  async (searchValue, { getState }) => {
    const state = getState();
    try {
      const res = await request.get('/search', {
        params: {
          part: 'snippet',
          maxResults: 20,
          pageToken: state.videos.nextPageToken,
          q: searchValue,
          type: 'video',
        },
      });
      return { res: res.data, activeCategory: searchValue };
    } catch (error) {
      throw error;
    }
  }
);

const getVideoSlice = createSlice({
  name: 'videos',
  initialState: {
    videos: [],
    nextPageToken: '',
    loading: false,
    error: null,
    activeCategory: 'All',
  },
  reducers: {
    // Add synchronous actions here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPopularVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPopularVideos.fulfilled, (state, action) => {
        state.loading = false;

        const { items, nextPageToken } = action.payload;
        state.videos =
          state.activeCategory === 'All' ? [...state.videos, ...items] : items;
        state.nextPageToken = nextPageToken;
        state.activeCategory = 'All';
      })
      .addCase(getPopularVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getCategoriesVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategoriesVideos.fulfilled, (state, action) => {
        state.loading = false;

        const {
          res: { items, nextPageToken },
          activeCategory,
        } = action.payload;
        state.videos =
          state.activeCategory === activeCategory
            ? [...state.videos, ...items]
            : items;
        state.nextPageToken = nextPageToken;
        state.activeCategory = activeCategory;
      })
      .addCase(getCategoriesVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default getVideoSlice.reducer;
