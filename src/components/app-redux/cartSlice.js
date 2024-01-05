import { createSlice } from '@reduxjs/toolkit';
import showNotifications from './uiSlice';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    //for every method here redux toolkit creates Action object {type:'action/abc',payload:...} for us
    addToCart(state, { payload }) {
      // console.log( "check addToCart state --",state);
      // console.log( "check addToCart payload--",payload);
      state.items.push(payload);
    },
    increment(state, { payload }) {
      //console.log( "check increment id --",payload);
      const index = state.items.findIndex((item) => item.id === payload);
      //  console.log( "check increment  index --",index);
      if (index !== -1) {
        const updatedItems = [...state.items]; // Create a copy of the array
        updatedItems[index].quantity += 1; // Increment quantity for the target item
        ///return updatedItems; // Return the updated array
        state.items = updatedItems;
      }
    },
    decrement(state, { payload }) {
      const index = state.items.findIndex((item) => item.id === payload);
      if (index !== -1) {
        const updatedItems = [...state.items]; // Create a copy of the array
        updatedItems[index].quantity -= 1; // Increment quantity for the target item
        ///return updatedItems; // Return the updated array
        state.items = updatedItems;
      }
    },
  },
});

//Warn below will NOT WORK as doesnt properly returns the async fucntion
// export const getEmployeesLisApi = () => {
//   console.log('check  getEmployeesLisApi -- ');
//   //https://dummy.restapiexample.com/api/v1/employees

//   ///return  {type:'action/abc',payload:...} //action creator returning simple object ,

//   //we can create a action creator which can return a fucntion instead of object
//   return async (dispatch) => {
//     dispatch(
//       showNotifications({
//         status: 'LOADING',
//         title: 'We are fetching...',
//         message: 'Please wait ',
//       })
//     );

//     const sendRequest = async () => {
//       console.log('check calling sendRequest --');
//       const response = await fetch('https://dummyjson.com/products');
//       if (!response.ok) {
//         throw new Error('Fetch empplyees failed ', response.message);
//       } else {
//         console.log('check response --- ', response);
//       }
//     };

//     try {
//       await sendRequest();
//       dispatch(
//         showNotifications({
//           status: 'SUCCESS',
//           title: 'Data fetched ',
//           message: 'Successs ',
//         })
//       );
//     } catch (error) {
//       dispatch(
//         showNotifications({
//           status: 'FAIL',
//           title: 'Failed  ',
//           message: 'Failed to fetch ',
//         })
//       );
//     }
//   };
// };

export const { addToCart, increment, decrement } = cartSlice.actions;
//action object is  equivalent to {type:'action/abc',payload:...}
export default cartSlice;
