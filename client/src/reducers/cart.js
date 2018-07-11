import * as types from '../constants/ActionTypes';

const cartItem = (state, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return {
        id: action.id,
        count: action.count,
      };

    case types.REMOVE_FROM_CART:
      return state.id !== action.id;
      
    case types.UPDATE_CART_ITEM:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign(
        {},
        state,
        {
          count: action.count,
        }
      );
    default:
      return state;
  }
};


const cartReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return [
        ...state,
        cartItem(undefined, action),
      ];

    case types.REMOVE_FROM_CART:
      return state.filter(item => cartItem(item, action));

    case types.UPDATE_CART_ITEM:
      return state.map(item => cartItem(item, action));

    default:
      return state;
  }
};

export default cartReducer;