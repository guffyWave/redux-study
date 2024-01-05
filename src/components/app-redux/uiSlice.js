import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCartVisible: false,
  //notification
  status: '',
  title: '',
  message: '',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    toggleState(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    showNotifications(state, { payload }) {
      state.status = payload.status;
      state.title = payload.title;
      state.message = payload.message;
    },
  },
});

//exposing the action which can be name something else like TOGGLE_STATE
export const { toggleState, showNotifications } = uiSlice.actions;
export default uiSlice;
