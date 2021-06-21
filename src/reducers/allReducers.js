import { combineReducers } from 'redux';

import productDataReducer from './productData';
import productTableReducer from './productTable';
import sortSelectReducer from './sortSelect';
import cartReducer from './cart';

const allReducers = combineReducers({
    productData: productDataReducer,
    productTable: productTableReducer,
    sortSelect: sortSelectReducer,
    cart: cartReducer,
});

export default allReducers;