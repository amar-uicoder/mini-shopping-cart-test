import { connect } from 'react-redux';
import * as stockActions from '../actions/stockActions';
import Shop from '../components/Shop';

const mapStateToProps = (state, ownProps) => {
  return {
    mappedProductsState: state.stock
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () =>  dispatch(stockActions.getAllProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
