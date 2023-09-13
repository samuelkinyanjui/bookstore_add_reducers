import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],

};

const categoriesSlice = createSlice({
  name: 'categories',

  reducer: (state, action) => {
    checkstate({ return: 'Under construction' });
  },

});

export const { checkstate } = categoriesSlice.actions;
export default categoriesSlice.reducer;
