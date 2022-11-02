import React, { useContext } from 'react'
import "./style.css";
import PopupContext from '../../PopupContext';


function Popup() {
    const { popup } = useContext(PopupContext);


    return (
        <div className={`overlay ${popup ? "" : "close"}`}>
            <div className="popup">
                {popup}

            </div>
        </div>
    )
}

export default Popup
