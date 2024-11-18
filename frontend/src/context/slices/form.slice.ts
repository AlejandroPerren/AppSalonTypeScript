import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  formData: { id: number; name: string; value: string }[]; 
}

const initialState: FormState = {
  formData: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormData: (state, action: PayloadAction<{ id: number; name: string; value: string }>) => {
      state.formData.push(action.payload);
    },
    clearForm: (state) => {
      state.formData = [];
    },
  },
});

export const { addFormData, clearForm } = formSlice.actions;
export default formSlice.reducer;
