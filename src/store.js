import {configureStore} from '@reduxjs/toolkit';

import countrySlice from './reducers/countrySlice';

export const store = configureStore({
  reducer: {
    country: countrySlice,
  },
});
