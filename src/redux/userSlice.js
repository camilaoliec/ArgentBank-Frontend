import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk(
  "user/userLogin",
  async (userData, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      return rejectWithValue(data.message);
    }

    return data.body;
  }
);

export const userBody = createAsyncThunk(
  "user/userBody",
  async (userData, { getState }) => {
    const token = getState().user.token;
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data.body;
  }
);

export const editProfile = createAsyncThunk(
  "user/editProfile",
  async (userData, { getState }) => {
    const token = getState().user.token;
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data.body;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    token: null,
    userInfos: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.userInfos = null;
      state.error = null;
      localStorage.removeItem("token");
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.token = null;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.token = null;
        state.error = action.payload;
      })
      .addCase(userBody.fulfilled, (state, action) => {
        state.userInfos = action.payload;
      })
      .addCase(editProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfos = action.payload;
      })
      .addCase(editProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout, setToken } = userSlice.actions;
export default userSlice.reducer;
