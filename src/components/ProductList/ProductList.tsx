import React from 'react';
import ProductComponent from '../Product/ProductComponent';
import Product from "../Product/Product";
import './ProductList.scss';
import {SORT_TYPES} from "../UI/DropDown/DropDown";
import {IProps} from "./ProductListProps";
import {DELETE_MESSAGE} from "../UI/Consts";

class ProductList extends React.Component<IProps> {

    deleteProduct = (product: Product): any => {
        if (this.isProductSelected(product))
            this.props.selectProduct(null);
        this.props.deleteProduct(product);
        this.props.togglePopUp(DELETE_MESSAGE.subject, DELETE_MESSAGE.content1 + " " + product.name + " " + DELETE_MESSAGE.content2);
    };

    isProductSelected = (product: Product) => this.props.selectedProduct && this.props.selectedProduct.id === product.id


    showProductDetails = (event: any, product: Product) => {
        if (event.target.className === 'delete-product')
            return;
        this.props.changeOffset(window.pageYOffset);
        this.props.selectProduct(product);
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 100);
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


    renderProducts = () => {
        const searchAndSortedProducts: Product [] = this.sort(this.props.products.filter((product: Product) => {
            return product.name.indexOf(this.props.searchKey) >= 0
        }));
        return searchAndSortedProducts.map((product: Product) => {
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
        const productsToBeRendered = this.renderProducts();
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

export default ProductList;