import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  message: '',
  title: '',
  type: ''
};

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    showPopupAdvice: (state, action) => {
      state.show = action.payload.show;
      state.message = action.payload.message;
      state.title = action.payload.title;
      state.type = action.payload.type;
    }
  }
});

export const { showPopupAdvice } = popupSlice.actions;

export default popupSlice.reducer;