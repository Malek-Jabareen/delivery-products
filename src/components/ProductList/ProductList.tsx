import React from 'react';
import {connect} from 'react-redux';
import ProductComponent from '../Product/ProductComponent';
import {fetchProducts} from '../../actions/';
import {IReducerState} from '../../reducers';
import Product from "../Product/Product";

export interface IProps {
    fetchProducts: () => void | null,
    products: Product []
}

class ProductList extends React.Component<IProps> {

    componentDidMount(): void {
        this.props.fetchProducts();
    }

    renderProducts = () => {
        return this.props.products.map((product: Product) => {
            return (
                <div>
                    {product.description}
                </div>
            );
        });
    };

    render(): any {
        const productsToBeRendered = this.renderProducts();
        if (!productsToBeRendered) return <div>Loading...</div>;
        else if (productsToBeRendered.length > 0)
            return (
                <div>
                    {this.renderProducts()}
                </div>
            );
        else return <div>No data to display</div>
    }
}

const mapStateToProps = (state: IReducerState) => {
    return {products: state.products};
};

export default connect<IReducerState, any, any, IProps>(
    mapStateToProps,
    {fetchProducts}
)(ProductList);