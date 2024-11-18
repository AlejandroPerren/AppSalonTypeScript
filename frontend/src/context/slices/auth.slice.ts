import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAdmin: boolean;
  token: string | null;
}

const initialState: AuthState = {
  isAdmin: false, 
  token: null,    
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ isAdmin: boolean; token: string }>) => {
      state.isAdmin = action.payload.isAdmin;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isAdmin = false;
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
