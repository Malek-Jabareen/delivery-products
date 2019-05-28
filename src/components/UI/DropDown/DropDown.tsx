import React from 'react';
import './DropDown.scss';

const SORT_TYPES = {
    name: "Name",
    description: "Description",
    creationDate: "Creation Date",
    insertionDate: "Insertion Date",
    price: "Price"
};

export {SORT_TYPES};

export interface IProps {
    sortProducts: (sortType: string) => void
}

const DropDown = (props: IProps) => {
    return (
        <div className="dropdown">
            <button className="drop-btn">Sort</button>
            <div className="dropdown-content">
                {Object.values(SORT_TYPES).map((type: string) => {
                    return (<div className="drop-item" key={type}
                                 onClick={() => props.sortProducts(type)}>
                        {type}
                    </div>)
                })}
            </div>
        </div>
    );
};

export default DropDown;