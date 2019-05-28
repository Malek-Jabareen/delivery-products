import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import selectedProductReducer from "./selectedProductReducer";
import pageOffsetReducer from "./pageOffsetReducer";
import Product from "../components/Product/Product";
import searchKeyReducer from "./searchKeyReducer";
import sortByReducer from "./sortByReducer";

export interface IReducerState {
    products: Product [] | null,
    selectedProduct: Product | null,
    pageLastY: number,
    searchKey : string,
    sortBy: string
}

export default combineReducers({
    products: productsReducer,
    selectedProduct: selectedProductReducer,
    pageLastY: pageOffsetReducer,
    searchKey: searchKeyReducer,
    sortBy: sortByReducer
});