import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: 'Es',
  theme: 'Light'
};

export const configurationSlice = createSlice({
  name: 'configuration',
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload
    },
    setTheme: (state, action) => {
      state.theme = action.payload
    }
  }
});

export const { setLang, setTheme } = configurationSlice.actions;

export default configurationSlice.reducer;