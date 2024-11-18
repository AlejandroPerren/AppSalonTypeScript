import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth.slice'; 
import formReducer from './slices/form.slice';

export const store = configureStore({
  reducer: {
    form: formReducer, 
    auth: authReducer, 
  },
});


export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;         
