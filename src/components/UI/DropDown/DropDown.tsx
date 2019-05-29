import React from 'react';
import './DropDown.scss';
import {SORT_TYPES} from "../Consts";

export interface IProps {
    sortProducts: (sortType: string) => void,
    setCurrentPage: (num: number) => void
}

const DropDown = (props: IProps) => {
    return (
        <div className="dropdown">
            <button className="drop-btn">Sort</button>
            <div className="dropdown-content">
                {Object.values(SORT_TYPES).map((type: string) => {
                    return (<div className="drop-item" key={type}
                                 onClick={() => {
                                     props.sortProducts(type);
                                     props.setCurrentPage(1);
                                 }}>
                        {type}
                    </div>)
                })}
            </div>
        </div>
    );
};

export default DropDown;