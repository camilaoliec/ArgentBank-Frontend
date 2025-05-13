import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userLogin = createAsyncThunk(
  "user/userLogin",
  async (userData) => {
    const request = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      userData
    );
    const response = await request.data.body;
    localStorage.setItem("user", JSON.stringify(response));
    return response;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    login: false,
    user: null,
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
  }
});

export default userSlice.reducer;
