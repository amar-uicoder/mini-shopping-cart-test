import React from 'react';
import ShopItems from './ShopItems';

class Shop extends React.Component {
    constructor(props){
      super(props);
    }

    componentWillMount() {
      this.props.fetchProducts();
    }
    render(){
      const items = this.props.mappedProductsState;
      console.log(items);
      return(
        <div className='shop'>
          <h1 className='main-header shop-header'>Mini Shopping Cart</h1>
          <ShopItems items={this.props.mappedProductsState} />
        </div>
      );
    };
  }


export default Shop;
