import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import request from '../../api';

export const getCommentsById = createAsyncThunk(
  'comments/getComments',
  async (id, { getState }) => {
    try {
      const res = await request.get('/commentThreads', {
        params: {
          part: 'snippet',
          videoId: id,
        },
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

export const addComment = createAsyncThunk(
  'comments/addComment',
  async ({ id, text }, { getState }) => {
    const state = getState();
    const obj = {
      snippet: {
        videoId: id,
        topLevelComment: {
          snippet: {
            textOriginal: text,
          },
        },
      },
    };
    try {
      const res = await request.get('/commentThreads', obj, {
        params: {
          part: 'snippet',
          videoId: id,
        },
        headers: {
          Authorization: `Bearer ${state.auth.accessToken}`,
        },
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

const getCommentSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Add synchronous actions here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCommentsById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCommentsById.fulfilled, (state, action) => {
        state.loading = false;
        const { items } = action.payload;
        state.comments = items;
      })
      .addCase(getCommentsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(addComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default getCommentSlice.reducer;
