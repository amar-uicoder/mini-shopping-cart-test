import * as types from '../constants/ActionTypes';

// addToCart
export const addToCart = (id, count) => ({
  type: types.ADD_TO_CART,
  id,
  count,
});

// removeFromCart
export const removeFromCart = (id) => ({
  type: types.REMOVE_FROM_CART,
  id,
})

// updateCartItem
export const updateCartItem = (id, count) => ({
  type: types.UPDATE_CART_ITEM,
  id,
  count,
})

// removeStockItem
export const removeStockItem = (id, count) => ({
  type: types.REMOVE_STOCK_ITEM,
  id,
  count,
})
