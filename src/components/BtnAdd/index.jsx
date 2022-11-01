import React from 'react'
import styles from "./style.module.css"
import plus from "../../Assets/Icons/Icon feather-plus-circle.png"

function BtnAdd({ onClick }) {
    return (
        <button className={styles.add} onClick={onClick}>
            <img className={styles.plus}
                src={plus}
                alt={"add"} />
        </button>
    )
}

export default BtnAdd