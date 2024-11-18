import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';

const accessRoutes = () => !!Cookies.get('token');

const initialState = {
  user: null,
  access: accessRoutes()
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setAccess: (state, action) => {
      state.access = action.payload
    }
  }
});

export const { setUser, setAccess } = authSlice.actions;

export default authSlice.reducer;