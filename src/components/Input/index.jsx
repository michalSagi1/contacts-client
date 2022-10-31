import React from 'react'
import styles from "./style.module.css"


function Input({ onChange, defaultValue, popup, placeholder, autoFocus }) {
    return (
        <div >
            <input className={popup ? styles.inputpopup : styles.inputSearch} type='text' placeholder={placeholder} onChange={onChange} defaultValue={defaultValue} autoFocus={autoFocus}></input>
        </div>
    )
}

export default Input