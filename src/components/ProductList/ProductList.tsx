import React from 'react';
import ProductComponent from '../Product/ProductComponent';
import Product from "../Product/Product";
import './ProductList.scss';
import {IProps} from "./ProductListProps";
import {DELETE_MESSAGE, SORT_TYPES} from "../UI/Consts";
import {IReducerState} from "../../reducers";
import {connect} from "react-redux";
import {
    changeOffset,
    changePage,
    countPages,
    deleteProduct,
    editProduct,
    searchProducts,
    selectProduct,
    sortProducts,
} from "../../actions";

class ProductList extends React.Component<IProps> {

    deleteProduct = (product: Product): any => {
        if (this.isProductSelected(product))
            this.props.selectProduct(null);
        this.props.deleteProduct(product);
        this.props.togglePopUp(DELETE_MESSAGE.subject, DELETE_MESSAGE.content1 + product.name + DELETE_MESSAGE.content2);
    };

    isProductSelected = (product: Product) => this.props.selectedProduct && this.props.selectedProduct.id === product.id

    countPages = (products: Product [] = []) => this.props.countPages(products.length % 5 > 0 ? (Math.floor(products.length / 5)) + 1 : products.length / 5);


    showProductDetails = (event: any, product: Product) => {
        if (event.target.className === 'delete-product')
            return;
        this.props.changeOffset(window.pageYOffset);
        this.props.selectProduct(product);
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 150);
    };

    sort(products: Product []): Product [] {
        switch (this.props.sortBy) {
            case (SORT_TYPES.name):
                return products.sort((a: Product, b: Product) => (a.name > b.name) ? 1 : -1);
            case(SORT_TYPES.creationDate):
                return products.sort((a: Product, b: Product) => (a.creationDate > b.creationDate) ? 1 : -1);
            case(SORT_TYPES.description):
                return products.sort((a: Product, b: Product) => (a.description > b.description) ? 1 : -1);
            case(SORT_TYPES.price):
                return products.sort((a: Product, b: Product) => (a.price > b.price) ? 1 : -1);
            case(SORT_TYPES.insertionDate):
                return products.sort((a: Product, b: Product) => (a.id > b.id) ? 1 : -1);
            default:
                return products;
        }
    }

    search(products: Product[]): Product[] {
        return products.filter((product: Product) => product.name.indexOf(this.props.searchKey) >= 0);
    }

    paginate(products: Product[]): Product[] {
        let results: Product [] = [];
        products.forEach((item, index) => {
            if (!(index < 5 * (this.props.currentPage - 1) || index >= 5 * this.props.currentPage))
                results.push(item);
        });
        if (results.length === 0 && this.props.currentPage === this.props.lastPage)
            this.props.changePage(this.props.currentPage - 1);
        return results;
    }


    renderProducts = () => {
        let result: Product [] = [];
        // search
        result = this.search(this.props.products);
        //sort
        result = this.sort(result);
        //set pages by call back
        this.countPages(result);
        //paginate
        result = this.paginate(result);
        //render
        return result.map((product: Product) => {
            return (
                <ProductComponent
                    product={product}
                    key={product.id}
                    togglePopUp={this.props.togglePopUp}
                    changeOffset={this.props.changeOffset}
                    deleteProduct={this.deleteProduct}
                    selectProduct={this.props.selectProduct}
                    isProductSelected={this.isProductSelected}
                    showProductDetails={this.showProductDetails}
                />
            );
        });
    };

    renderByStatus(): any {
        const productsToBeRendered = this.props.products.length > 0 ? this.renderProducts() : [];
        if (!productsToBeRendered) return 'Loading...';
        else if (productsToBeRendered.length > 0)
            return productsToBeRendered;
        else return <div className="no-data"><span>No data to display</span></div>;
    }

    render(): any {
        return (
            <div className="product-list-container" style={!this.props.selectedProduct ? {flex: "unset"} : {}}>
                {this.renderByStatus()}
            </div>
        );
    }
}

const mapStateToProps = ({selectedProduct, products, pageLastY, searchKey, sortBy, lastPage, currentPage}: IReducerState) => {
    return {selectedProduct, products, pageLastY, searchKey, sortBy, lastPage, currentPage};
};

export default connect<IReducerState, any, any, IProps>(
    mapStateToProps,
    {
        searchProducts,
        sortProducts,
        deleteProduct,
        changeOffset,
        selectProduct,
        editProduct,
        countPages,
        changePage
    },
)(ProductList);