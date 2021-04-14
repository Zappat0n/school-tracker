/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
  },
});

export const { save } = userSlice.actions;

export default userSlice.reducer;
