import React from 'react';
import Product from "../Product/Product";
import './ProductDetails.scss';
import ScrollDown from "../UI/ScrollDown/ScrollDown";
import {IProps} from "./ProductDetailsProps";
import {VALIDATION_ERROR_MESSAGES,FIELDS,FIELDS_TYPES,EDIT_MESSAGE} from '../UI/Consts'


class ProductDetails extends React.Component<IProps> {
    state = {
        name: this.props.selectedProduct.name,
        description: this.props.selectedProduct.description,
        price: this.props.selectedProduct.price
    };

    onChange = (field: string, event: any): any => {
        switch (field.toUpperCase()) {
            case FIELDS.name:
                this.setState({name: event.target.value});
                break;
            case FIELDS.description:
                this.setState({description: event.target.value});
                break;
            case FIELDS.price:
                this.setState({price: parseInt(event.target.value)});
                break;
            default:
                break;
        }
    };

    scrollBackDown = () => {
        window.scrollTo(0, this.props.pageLastY);
        this.props.changeOffset(0);
    };

    editProduct = () => {
        let myProduct = this.props.selectedProduct;
        myProduct = new Product(myProduct.id, this.state.name, this.state.description, this.state.price, myProduct.creationDate,
            myProduct.thumbnailUrl, myProduct.url);
        this.props.editProduct(myProduct);
        this.props.selectProduct(null);
        window.scrollTo(0, this.props.pageLastY);
        this.props.togglePopUp(EDIT_MESSAGE.subject, EDIT_MESSAGE.content1  + myProduct.name  + EDIT_MESSAGE.content2);
    };


    validateFieldByType = (field: any, type: string): boolean => {
        if (type === FIELDS_TYPES.string) return field && field.length > 0;
        else if (type === FIELDS_TYPES.number) return field > 0;
        return field;
    };

    validateForm = (): boolean => this.validateFieldByType(this.state.name, FIELDS_TYPES.string)
        && this.validateFieldByType(this.state.description, FIELDS_TYPES.string)
        && this.validateFieldByType(this.state.price, FIELDS_TYPES.number);

    renderProduct = (): any => {
        return !this.props.selectedProduct ?
            null :
            (<div className="form-container">
                    <div className="row">
                        <div className="edit-field-wrapper">
                            <img src={this.props.selectedProduct.thumbnailUrl}
                                 alt={this.props.selectedProduct.id.toString()}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="edit-field-wrapper">
                            <label htmlFor="Name">Name</label>
                            <input value={this.state.name}
                                   onChange={this.onChange.bind(this, FIELDS.name)}
                                   type="input"
                                   name="Name"
                                   id="Name"
                            />
                            {!this.validateFieldByType(this.state.name, FIELDS_TYPES.string) ?
                                <span>{VALIDATION_ERROR_MESSAGES.nameValidation}</span> : ""}
                        </div>
                    </div>
                    <div className="row">
                        <div className="edit-field-wrapper">
                            <label htmlFor="Description">Description</label>
                            <textarea value={this.state.description}
                                      onChange={this.onChange.bind(this, FIELDS.description)}
                                      name="Description"
                                      id="Description"
                            />
                            {!this.validateFieldByType(this.state.description, FIELDS_TYPES.string) ?
                                <span>{VALIDATION_ERROR_MESSAGES.descriptionValidation}</span> : ""}
                        </div>
                    </div>
                    <div className="row">
                        <div className="edit-field-wrapper">
                            <label htmlFor="Price" style={{flex: "unset"}}>Price</label>
                            <div style={{height: "35%", display: "flex", width: "60%", flexFlow: "wrap"}}>
                                <input value={this.state.price}
                                       onChange={this.onChange.bind(this, FIELDS.price)}
                                       type="input"
                                       name="Price"
                                       id="Price"
                                       style={{flex: "unset"}}/>
                                <p>$</p>
                                {!this.validateFieldByType(this.state.price, FIELDS_TYPES.number) ?
                                    <span>{VALIDATION_ERROR_MESSAGES.priceValidation}</span> : ""}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <button onClick={this.editProduct}
                                disabled={!this.validateForm()}
                                className={(!this.validateForm() ? 'disabled-button' : '')}>SAVE
                        </button>
                    </div>
                </div>
            );
    };

    render() {
        return (
            <div className="product-details-container">
                {this.renderProduct()}
                {this.props.pageLastY > 0 ?
                    <ScrollDown scrollBackDown={this.scrollBackDown}/> : ""}
            </div>
        );
    }
}

export default ProductDetails;