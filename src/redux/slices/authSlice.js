// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import auth from '../../firebase';

// Create an async thunk for authentication
export const authenticateWithGoogle = createAsyncThunk(
  'auth/authenticateWithGoogle',
  async (dispatch) => {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl');
    try {
      const res = await signInWithPopup(auth, provider);
      return res.user; // You can return relevant user data on success
    } catch (error) {
      throw error;
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (dispatch) => {
  try {
    await auth.signOut();
  } catch (error) {
    throw error;
  }
});

// Create a slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: sessionStorage.getItem('yt-accessToken') || null,
    user: JSON.parse(sessionStorage.getItem('yt-user')) || null,
    loading: false,
    error: null,
  },
  reducers: {
    // Add synchronous actions here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateWithGoogle.pending, (state) => {
        state.loading = true;
      })
      .addCase(authenticateWithGoogle.fulfilled, (state, action) => {
        state.loading = false;
        const { accessToken, displayName, photoURL } = action.payload;
        state.accessToken = accessToken;
        const profile = {
          name: displayName,
          photoURL,
        };
        state.user = profile;
        sessionStorage.setItem('yt-accessToken', accessToken);
        sessionStorage.setItem('yt-user', JSON.stringify(profile));
      })
      .addCase(authenticateWithGoogle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.accessToken = null;
        state.user = null;
        sessionStorage.removeItem('yt-accessToken');
        sessionStorage.removeItem('yt-user');
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// export const { setAuthentication } = authSlice.actions;
export default authSlice.reducer;
