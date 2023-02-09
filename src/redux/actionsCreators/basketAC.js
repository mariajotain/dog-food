import { addToCart, CHANGE_STATUS_CART, CLEAR_CARTS, DECREMENT, DELETE_CART, FAVOURITE_CART, INCREMENT } from "../types/basketTypes";


export const addNewCartAC = (_id, stock, price) => ({
    type: addToCart,
    payload: {
		id: _id,
    stock: stock,
    price: price,
    status: false,
    favourite: false,
    count: 1
}
    });

export const incrementCartAC = (_id) => ({
  type: INCREMENT,
  payload: {
    id: _id,
  }
});
export const decrementCartAC = (_id) => ({
  type: DECREMENT,
  payload: {
  id: _id,
}
});
    
export const deleteCartAC = (id) => ({
  type: DELETE_CART,
  payload: id
});

export const clearCartsAC = () => ({
	type: CLEAR_CARTS,
});

export const statusCartAC = (id) => ({
	type: CHANGE_STATUS_CART,
  payload: {id}
});

// export const favouriteCartAC = (id, stock, price) => ({
// 	type: FAVOURITE_CART,
//   payload: {
//     id,
//     stock: stock,
//     price: price,
//     status: false,
//     favourite: true,
//     count: 1
//   }
// });