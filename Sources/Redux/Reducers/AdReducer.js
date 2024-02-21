import { createSlice } from '@reduxjs/toolkit';
import { getAdData } from '../ExtraReducers';

const initialState = {
  AdData: null,
  AdError: null,
};

const AdReducer = createSlice({
  name: 'AdReducer',
  initialState: initialState,
  reducers: {},
  extraReducers: b => {
    b.addCase(getAdData.pending, (s, a) => {});
    b.addCase(getAdData.fulfilled, (s, a) => {
      s.AdData = a.payload;
    });
    b.addCase(getAdData.rejected, (s, a) => {
      s.AdError = a.payload;
      // s = a.payload;
    });
  },
});

const {} = AdReducer.actions;

export default AdReducer.reducer;
