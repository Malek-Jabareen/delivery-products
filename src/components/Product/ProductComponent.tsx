import React from 'react';
import Product from "./Product";


export interface IProps {
    product: Product;
}

const ProductComponent = (props : IProps) => {
    return (
        <div>
            <span>{props.product.name}</span>
        </div>
    );
};

export default ProductComponent;