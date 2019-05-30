import React from 'react';
import './PopUp.scss';

export interface IProps {
    subject: string,
    content: string,
    togglePopUp: () => void
}

const PopUp = (props: IProps) => {
    return (
        <div className="popup-container overlay">
            <div className="popup">
                <h2>{props.subject}</h2>
                <div className="close" onClick={props.togglePopUp}>×</div>
                <div className="content">{props.content}</div>
                <div className="button-wrapper-popup">
                    <button onClick={props.togglePopUp}>Close</button>
                </div>
            </div>
        </div>);
};

export default PopUp;

