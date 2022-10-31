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
                {/* <div className='container'>
                        <div className='up'>
                            <div className='title'>{title}</div>
                            <img
                                src={close}
                                alt="close"
                            />
                        </div>
                        <div className='bodypopup'>
                            <div className='label'>שם</div>
                            <Input popup defaultValue={defaultValue} />
                            <div className='label'>טלפון</div>
                            <Input popup />
                        </div>

                        <button className='savebtn' onClick={onClick}>שמירה</button>

                    </div> */}
            </div>
        </div>
    )
}

export default Popup
