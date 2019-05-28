import React from 'react';
import './ProductComponent.scss';
import {IProps} from "./ProductComponentProps";

const ProductComponent = (props: IProps) => {
    return (
        <div className={"product-container" + (props.isProductSelected(props.product) ? " selected-product" : "")}
             onClick={(e) => props.showProductDetails(e, props.product)}>
            <div className="image-wrapper">
                <img src={props.product.thumbnailUrl}
                     alt={props.product.id.toString()}/>
            </div>
            <div className="details-container">
                <div className="product-name">
                    {props.product.name}
                </div>
                <div className="product-description">
                    {props.product.description}
                </div>
                <div className="delete-button">
                    <button className="delete-product" onClick={() => props.deleteProduct(props.product)}>DELETE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductComponent;
