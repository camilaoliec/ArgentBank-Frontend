import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// login - recebe token
export const userLogin = createAsyncThunk(
  "user/userLogin",
  async (userData) => {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/login", 
      userData
    );
    return response.data.body;
  }
);

// recupera os dados do perfil do usuario
export const userBody = createAsyncThunk(
  "user/userBody",
  async (_, { getState }) => {
    const token = getState().user.token;
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

export const editProfile = createAsyncThunk(
  "user/editProfile",
  async (userData, {getState}) => {
    const token = getState().user.token;
    const response = await axios.put(
      "http://localhost:3001/api/v1/user/profile", 
      userData,
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
    token: null,
    userInfos: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.userInfos = null;
      state.error = null;
      localStorage.removeItem("token")
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(userLogin.pending,(state) => {
      state.loading = true;
      state.token = null;
      state.error = null;
    })
    .addCase(userLogin.fulfilled,(state,action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.error = null;
    })
    .addCase(userLogin.rejected,(state,action) => {
      state.loading = false;
      state.token = null;
      if(action.error.message === 'Request failed with status code 400'){
        state.error = 'Accsess Denied! Invalid Credentials';
      }
      else{
        state.error = action.error.message;
      }
    })
    .addCase(userBody.fulfilled, (state, action) => {
      state.userInfos = action.payload;
    })
    .addCase(editProfile.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(editProfile.fulfilled, (state,action) => {
      state.loading = false;
      state.userInfos = action.payload;
    })
    .addCase(editProfile.rejected, (state, action) =>{
      state.loading = false;
      state.error = action.error.message
    })
  }
});

export const { logout, setToken } = userSlice.actions;
export default userSlice.reducer;
