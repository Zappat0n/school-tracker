/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  redirect: '',
  tables: {},
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
    addRedirect: (state, action) => {
      state.redirect = action.payload;
    },
    addTable: (state, action) => {
      const { tableName, headers, data } = action.payload;
      state.tables[tableName] = { headers, data };
    },
  },
});

export const { addRedirect, addTable, save } = userSlice.actions;

export default userSlice.reducer;
