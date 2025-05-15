import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const userLogin = createAsyncThunk(
  "user/userLogin",
  async (userData) => {
    const request = await axios.post("http://localhost:3001/api/v1/user/login", userData);
    const response = await request.data.body;
    localStorage.setItem('user', JSON.stringify(response));
    return response;
  }
);

export const userBody = createAsyncThunk(
  "user/userBody",
  async (_, { getState }) => {
    const token = getState().user.user.token;
    const response = await axios.get("http://localhost:3001/api/v1/user/profile", 
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.body;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    userInfos: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
    .addCase(userLogin.pending,(state) => {
      state.loading = true;
      state.user = null;
      state.error = null;
    })
    .addCase(userLogin.fulfilled,(state,action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    })
    .addCase(userLogin.rejected,(state,action) => {
      state.loading = false;
      state.user = null;
      if(action.error.message === 'Request failed with status code 401'){
        state.error = 'Accsess Denied! Invalid Credentials';
      }
      else{
        state.error = action.error.message;
      }
    })
    .addCase(userBody.fulfilled, (state, action) => {
      state.userInfos = action.payload;
    })
  }
});

export default userSlice.reducer;
