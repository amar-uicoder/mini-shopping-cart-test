import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import cartReducer from './cart';
import stockReducer from './stock';

export default combineReducers({
  cart: cartReducer,
  stock: stockReducer,
  routing,
})

