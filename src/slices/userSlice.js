/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tables: {},
  title: '',
  errors: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    save: (state, action) => {
      const { token } = action.payload;
      state.token = token;
    },
    changeTitle: (state, action) => {
      state.title = action.payload;
    },
    addTable: (state, action) => {
      const { tableName, headers, data } = action.payload;
      state.tables[tableName] = { headers, data };
    },
    removeTable: (state, action) => {
      delete state.tables[action.payload];
    },
    setError: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const {
  addTable, changeTitle, removeTable, save, setError,
} = userSlice.actions;

export default userSlice.reducer;
