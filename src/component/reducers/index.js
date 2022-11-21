import {createSlice} from '@reduxjs/toolkit';

const countrySlice = createSlice({
  name: 'country',
  initialState: [],
  reducers: {
    getCountries(state, action) {
      state.push({...state, data: action.payload});
    },
  },
});

export const {getCountries} = countrySlice.actions;

export default countrySlice.reducer;
