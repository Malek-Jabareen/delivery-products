import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import Product from "../components/Product/Product";

export interface IReducerState {
    products: Product []
}

export default combineReducers({products: productsReducer});