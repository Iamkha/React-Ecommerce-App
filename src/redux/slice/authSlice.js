import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  email: null,
  userName: null,
  userID: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state, actions) => {
      console.log(actions.payload);
      const { email, userName, userID } = actions.payload;
      state.email = email;
      state.userName = userName;
      state.userID = userID;
    },
    REMOVE_ACTIVE_USER: (state, actions) => {
      state.isLoggedIn = false;
      state.email = null;
      state.userName = null;
      state.userID = null;
      console.log(state.isLoggedIn);
    },
  },
});

export const { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectEmail = (state) => state.auth.email;
export const selectUserName = (state) => state.auth.useName;
export const selectUserID = (state) => state.auth.userID;

export default authSlice.reducer;
