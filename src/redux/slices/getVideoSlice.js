import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import request from '../../api';

export const getPopularVideos = createAsyncThunk(
  'videos/getPopularVideos',
  async (dispatch) => {
    try {
      const res = await request.get('/videos', {
        params: {
          part: 'snippet,contentDetails,statistics',
          chart: 'mostPopular',
          regionCode: 'IN',
          maxResults: 20,
          pageToken: '',
        },
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getSearchedVideos = createAsyncThunk(
  'videos/getSearchedVideos',
  async (searchValue, { dispatch, getState }) => {
    const state = getState();
    console.log(state, 'IAm state');
    try {
      const res = await request.get('/search', {
        params: {
          part: 'snippet',
          maxResults: 20,
          pageToken: state.nextPageToken,
          q: searchValue,
          type: 'video',
        },
      });
      return res.data;
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
        state.activeCategory = 'All';
        const { items, nextPageToken } = action.payload;
        state.videos = items;
        state.nextPageToken = nextPageToken;
      })
      .addCase(getPopularVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getSearchedVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSearchedVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.activeCategory = 'All';
        const { items, nextPageToken } = action.payload;
        state.videos = items;
        state.nextPageToken = nextPageToken;
      })
      .addCase(getSearchedVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default getVideoSlice.reducer;
