import { combineReducers } from 'redux'
import productsList from './products.js'
import cartList from './cart.js'

const mainReducer = combineReducers({
    productsList,
    cartList,
});

export default mainReducer;