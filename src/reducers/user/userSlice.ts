import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  email: string;
  fullName: string;
  token: string;
}

const initialState: UserState = {
  email: '',
  fullName: '',
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<UserState>) => {
      state.email = payload.email;
      state.fullName = payload.fullName;
      state.token = payload.token;
    },
    unSetUser: (state) => {
      state.email = '';
      state.fullName = '';
      state.token = '';
    },
  },
});

export const { setUser, unSetUser } = userSlice.actions;

export default userSlice.reducer;
