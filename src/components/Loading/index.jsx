import React from 'react'
import spinner from '../../Assets/Icons/Spinner-1s-200px.svg'
import styles from "./style.module.css"



function Loading() {
    return (
        <div className={styles.spinner}>
            <img src={spinner}
                alt="loading" />
        </div>
    )
}

export default Loading