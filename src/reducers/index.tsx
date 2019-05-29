import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import selectedProductReducer from "./selectedProductReducer";
import pageOffsetReducer from "./pageOffsetReducer";
import searchKeyReducer from "./searchKeyReducer";
import sortByReducer from "./sortByReducer";
import lastPageReducer from "./lastPageReducer";
import currentPageReducer from "./currentPageReducer";
import Product from "../components/Product/Product";


export interface IReducerState {
    products: Product [] | null,
    selectedProduct: Product | null,
    pageLastY: number,
    searchKey: string,
    sortBy: string,
    lastPage: number,
    currentPage: number
}

export default combineReducers({
    products: productsReducer,
    selectedProduct: selectedProductReducer,
    pageLastY: pageOffsetReducer,
    searchKey: searchKeyReducer,
    sortBy: sortByReducer,
    lastPage: lastPageReducer,
    currentPage: currentPageReducer
});