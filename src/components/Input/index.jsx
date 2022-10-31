import React from 'react'
import styles from "./style.module.css"


function Input({ onChange, defaultValue, popup, placeholder }) {
    return (
        <div >
            <input className={popup ? styles.inputpopup : styles.inputSearch} type='text' placeholder={placeholder} onChange={onChange} defaultValue={defaultValue}></input>
        </div>
    )
}

export default Input