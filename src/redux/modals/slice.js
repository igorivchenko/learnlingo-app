import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: null,
  props: {},
  open: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.type = action.payload.type;
      state.props = action.payload.props || {};
      state.open = true;
    },
    closeModal: state => {
      state.type = null;
      state.props = {};
      state.open = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
