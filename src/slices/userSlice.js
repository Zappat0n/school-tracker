/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tables: {},
  title: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    save: (state, action) => {
      const { email, password, token } = action.payload;
      state.email = email;
      state.password = password;
      state.token = token;
    },
    changeTitle: (state, action) => {
      state.title = action.payload;
    },
    addTable: (state, action) => {
      const { tableName, headers, data } = action.payload;
      state.tables[tableName] = { headers, data };
    },
  },
});

export const { addTable, changeTitle, save } = userSlice.actions;

export default userSlice.reducer;
