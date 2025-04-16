import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.userInfo = action.payload.user
            state.token = action.payload.token
            state.isLoggedIN = true
        },
        logOut: (state) => {
            state.userInfo = null
            state.token = null
            state.isLoggedIN = false
        }
        
    }
})

export const { loginSuccess, logOut } = userSlice.actions
export default userSlice.reducer