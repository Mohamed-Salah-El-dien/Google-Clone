import { createSlice } from '@reduxjs/toolkit';

const reduxSlice = createSlice({
  name: 'redux',
  initialState: { darkMode: false, searchTerm: 'google' },
  reducers: {
    toggleMode(state) {
      state.darkMode = !state.darkMode;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const reduxActions = reduxSlice.actions;

export default reduxSlice;
