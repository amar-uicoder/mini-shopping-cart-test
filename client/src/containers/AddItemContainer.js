import { connect } from 'react-redux';
import AddItem from '../components/AddItem';
import { updateCartItem, addToCart } from '../actions/cartActions';

const addItemGetSelectedValue = (e) => (
  e.target.getElementsByClassName('item-qty')[0].value
);

const AddItemContainer = connect(
  (state, ownProps) => (
    {
      id: ownProps.id,
      count: state.stock.find(item => item._id === ownProps.id).count,
      inCart: state.cart.some(item => item.id === ownProps.id),
    }
  ),
  null,
  (stateProps, dispatchProps, ownProps) => {
    const onSubmit = stateProps.inCart ? updateCartItem : addToCart;

    return Object.assign({}, ownProps, stateProps, dispatchProps, {
      onSubmit: (e, id) => {
        dispatchProps.dispatch(onSubmit(id, addItemGetSelectedValue(e)));
      },
    });
  }
)(AddItem);

export default AddItemContainer;
