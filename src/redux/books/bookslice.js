import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  amount: 0,

};
const bookSlice = createSlice({

  name: 'books',
  initialState,
  reducer:
    {
      addbook: (state, action) => {
        state.books.push({ book: 'books1' });
      },

      removebook: (state, action) => {
        state.books = state.books.filter('mybook');
      },
    },
});
console.log(bookSlice);

export const { addbook, removebook } = bookSlice.actions;

export default bookSlice.reducer;
