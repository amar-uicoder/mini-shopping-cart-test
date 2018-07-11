import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ShopItemsContainer from './containers/ShopItemsContainer';
import HeaderContainer from './containers/HeaderContainer';
import ItemContainer from './containers/ItemContainer';
import CartContainer from './containers/CartContainer';
import NoPageFound from './components/NoPageFound';

export default (
  <Route path="/" component={HeaderContainer}>
    <IndexRoute component={ShopItemsContainer} />
    <Route path='item/:id' component={ItemContainer} />
    <Route path='cart' component={CartContainer} />
    <Route path='*' component={NoPageFound} />
  </Route>
)
