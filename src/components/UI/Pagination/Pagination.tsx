import React from 'react';
import './Pagination.scss';

export interface IProps {
    lastPage: number,
    currentPage: number,
    changePage: (num: number) => void | null,
}

const Pagination = (props: IProps) => {
    return (
        <div className="pagination-container">
            <div className="button-wrapper">
                <button
                    className={props.currentPage === 1 ? "disabled" : ""}
                    disabled={props.currentPage === 1}
                    onClick={() => props.changePage(props.currentPage - 1)}>
                    &lsaquo;
                </button>
            </div>
            <div className="pages">
                <span>{props.currentPage} of {props.lastPage}</span>
            </div>
            <div className="button-wrapper">
                <button
                    className={props.currentPage === props.lastPage ? "disabled" : ""}
                    disabled={props.currentPage === props.lastPage}
                    onClick={() => {
                        props.changePage(props.currentPage + 1);
                        setTimeout(function () {
                            window.scrollTo(0, 0);
                        }, 100);
                    }}>
                    &rsaquo;
                </button>
            </div>
        </div>
    );
};

export default Pagination;