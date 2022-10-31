import React, { useContext } from 'react'
import "./style.css";
import close from '../../Assets/Icons/Icon material-close.svg'
import Input from '../Input';
import PopupContext from '../../PopupContext';


function Popup() {
    const { popup, setPopup } = useContext(PopupContext);


    return (
        <div className={`overlay ${popup ? "" : "close"}`}>
            <div className="popup">
                {popup}

            </div>
        </div>
    )
}

export default Popup
