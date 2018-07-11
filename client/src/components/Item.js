import React from 'react';
import PropTypes from 'prop-types';
import AddItemContainer from '../containers/AddItemContainer';

const Item = ({ _id, name, description, price, img }) => (
  <div className={'item item-' + _id}>
    <img
      className='item-image'
      alt="pic"
      src={img}
    />
    <div className='item-details'>
      <h1 className='item-name'>
        {name}
      </h1>
      <h2 className='item-price'>
        ${price.toFixed(2)}
      </h2>
      <p className='item-desc'>
        {description}
      </p>
      <AddItemContainer id={_id} />
    </div>
  </div>
);

Item.PropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};

export default Item;
