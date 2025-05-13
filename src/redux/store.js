import { configureStore } from "@reduxjs/toolkit"
import useReducer from "./userSlice"

const store = configureStore({
  reducer: {
    user: useReducer,
    devTools: true,
}
})

export default store