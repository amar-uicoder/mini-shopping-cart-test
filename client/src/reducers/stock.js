import { RECEIVE_PRODUCTS, REMOVE_STOCK_ITEM} from '../constants/ActionTypes';

// stockItem
const stockItem = (state, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return [
        ...state,
        ...action.products        
      ];
    case REMOVE_STOCK_ITEM:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign(
        {},
        state,
        {
          count: state.count - action.count,
        }
      );
    default:
      return state;
  }
};

// stock
const stockReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return stockItem(state, action);
    case REMOVE_STOCK_ITEM:
      return state.map(item => stockItem(item, action));
    default:
      return state;
  }
};

export default stockReducer;
