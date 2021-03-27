import { combineReducers } from 'redux'
import productsList from './products.js'

const mainReducer = combineReducers({
    productsList,
});

export default mainReducer;