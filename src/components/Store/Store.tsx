import React from 'react';
import ProductList from "../ProductList/ProductList";
import ProductDetails from "../ProductDetails/ProductDetails";
import {IReducerState} from "../../reducers";
import {connect} from "react-redux";
import {
    changeOffset, changePage, countPages,
    deleteProduct,
    editProduct,
    fetchProducts,
    searchProducts,
    selectProduct,
    sortProducts
} from "../../actions";
import './Store.scss';
import SearchBar from "../UI/SearchBar/SearchBar";
import DropDown from "../UI/DropDown/DropDown";
import PopUp from "../UI/PopUp/PopUp";
import {IProps} from "./StoreProps";
import Pagination from "../UI/Pagination/Pagination";

class Store extends React.Component<IProps> {
    state = {
        showPopUp: false,
        popUpSubject: "",
        popUpContent: "",
    };

    componentDidMount(): void {
        this.props.fetchProducts();
    }

    togglePopUp = (subject: string = "", content: string = "") => this.setState({
        showPopUp: !this.state.showPopUp,
        popUpSubject: subject,
        popUpContent: content,
    });

    render() {
        return (<div className="app-container">
                <div className="app-header">
                    <span>My Store</span>
                </div>
                <div className="body-container">
                    <div className="list-container">
                        <div className="list-header">
                            <SearchBar searchProducts={this.props.searchProducts}
                                       setCurrentPage={this.props.changePage}/>
                            <DropDown
                                sortProducts={this.props.sortProducts}
                                setCurrentPage={this.props.changePage}/>
                        </div>
                        <ProductList togglePopUp={this.togglePopUp}/>
                        {
                            this.props.products.length > 0 ? <Pagination
                                currentPage={this.props.currentPage}
                                lastPage={this.props.lastPage}
                                changePage={this.props.changePage}/> : ""

                        }
                    </div>
                    {this.props.selectedProduct ?
                        <div className="edit-product-details-container">
                            <ProductDetails
                                key={this.props.selectedProduct.id}
                                togglePopUp={this.togglePopUp}
                                selectedProduct={this.props.selectedProduct}
                                selectProduct={this.props.selectProduct}
                                changeOffset={this.props.changeOffset}
                                editProduct={this.props.editProduct}
                                pageLastY={this.props.pageLastY}
                            />
                        </div>
                        : ""}
                </div>
                {this.state.showPopUp ?
                    <PopUp
                        subject={this.state.popUpSubject}
                        content={this.state.popUpContent}
                        togglePopUp={this.togglePopUp}/>
                    : ""}
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
        fetchProducts,
        searchProducts,
        sortProducts,
        deleteProduct,
        changeOffset,
        selectProduct,
        editProduct,
        countPages,
        changePage
    },
)(Store);