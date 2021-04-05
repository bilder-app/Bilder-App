import { combineReducers } from 'redux'
import productsList from './products.js'
import navigation from './navigation.js'

const mainReducer = combineReducers({
    productsList,
    navigation,
});

export default mainReducer;