import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchQoutes = createAsyncThunk('api/fetchQoutes', async () => {
  const response = await fetch('https://dummyjson.com/quotes');
  const data = await response.json();
  return data;
});

const initialState = {
  // qoutes: [],
  status: 'idle',
  error: '',
  qoutesData: undefined,
};

export const quotesSlice = createSlice({
  name: 'quotes',
  initialState: initialState,
  reducers: {},
  //   extraReducers field in a slice is used to handle actions that are not
  //    part of the standard reducer logic generated by createSlice.
  //    It allows you to handle actions from other slices or any custom actions
  //    that you want to react to within the same slice.
  //The typical reducers field in a createSlice configuration is designed to handle synchronous actions. However, when dealing with asynchronous actions (like API calls) or actions that are dispatched by middleware (such as those used by Redux Thunk), the extraReducers field becomes very useful.
  extraReducers: (builder) => {
    builder.addCase(fetchQoutes.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchQoutes.fulfilled, (state, action) => {
      state.status = 'succeeded';
      console.log('check  qoutes  action.payload --', action.payload);
      // state.qoutes = action.payload.qoutes;
      state.qoutesData = action.payload;
    });
    builder.addCase(fetchQoutes.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || '';
    });
  }, // Here extraReducers field allows you to react to these actions and update the state accordingly.
});

export default quotesSlice;