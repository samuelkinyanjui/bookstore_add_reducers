import { configureStore } from '@reduxjs/toolkit';
import bookreducer from './books/bookslice';
import categoriesreducer from './categories/categoriesSlice';

export const Store = configureStore(

  {
    reducer: {
      bookreducer,
      categoriesreducer,

    },
  },

);
export default Store;
