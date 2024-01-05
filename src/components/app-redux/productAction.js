import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from './productsSlice';

export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsStart());

  try {
    const response = await fetch('https://dummyjson.com/products');
    const products = await response.json();
    dispatch(fetchProductsSuccess(products));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};

export const doWork2 = () => {
  console.log('check indide  doWork 2 --');

  const helloWork = (dispatch) => {
    console.log('check inside  helloWork 2--', dispatch);
  };
  return helloWork;
};

export const doWork = () => {
  console.log('check indide  doWork --');
  return async (dispatch) => {
    console.log('check inside  helloWork dispatch--', dispatch);
  };
};

//Uses an arrow function that returns another inner async function,
// which accepts the dispatch function as an argument.
// This allows it to dispatch multiple actions within the async flow.
export const anotherDoWork = () => async (dispatch) => {
  console.log('check inside  anotherDoWork --');
};
