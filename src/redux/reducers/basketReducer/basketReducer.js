
import { initialState } from "../../initState";
import { addToCart, CHANGE_STATUS_CART, CLEAR_CARTS, DECREMENT, DELETE_CART, FAVOURITE_CART, INCREMENT } from "../../types/basketTypes";



export const basketReducer = (state = initialState.basket, action) => {
switch (action.type) {
    case addToCart: 

    if (state.length === 0){
      return [...state, {...action.payload}];
    } else {
      const cartId = state.find(item => item.id === action.payload.id);
      if (cartId) {
        const arr = state.filter((item) => item.id !== action.payload.id);
        return [...arr, {...cartId, count: cartId.count+1}];
      } return [...state, {...action.payload}];
    };

    case DELETE_CART:
    return state.filter((item) => item.id !== action.payload);

    case CLEAR_CARTS:
			return [];


    case INCREMENT:
    const incrementCartId = state.find((item) => item.id === action.payload.id);
    if (incrementCartId) {
      const arr = state.filter((item) => item.id !== action.payload.id);
      return [...arr, {...incrementCartId, count: incrementCartId.count+1}];
    };
   

  case DECREMENT: 
  const decrementCartId = state.find((item) => item.id === action.payload.id);
    if (decrementCartId) {
      const arr = state.filter((item) => item.id !== action.payload.id);
      return [...arr, {...decrementCartId, count: decrementCartId.count-1}];
    };

    case CHANGE_STATUS_CART:
      const statusCartId = state.find((item) => item.id === action.payload.id);
      if (statusCartId) {
        const arr = state.filter((item) => item.id !== action.payload.id);
        return [...arr, {...statusCartId, status: true}];
      };
  
// case FAVOURITE_CART:
//   if (state.length === 0){
//     return [...state, {...action.payload}];
//   }
//   const favouriteCartId = state.find((item) => item.id === action.payload.id);
//       if (favouriteCartId) {
//         const arr = state.filter((item) => item.id !== action.payload.id);
//         return [...arr, {...favouriteCartId, favourite: true}];
//       };

    default:
      return  state;
} 
}

