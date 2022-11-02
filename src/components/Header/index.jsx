import React from 'react'
import styles from "./style.module.css"
import userImg from '../../Assets/Images/user12.jpg'


function Header() {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerInnerWidth}>
                <div className={styles.workshopHeader}>
                    <>
                        <img
                            src={userImg}
                            alt="user"
                            className={styles.headerUser}
                        />
                        <div className={styles.titleHeader}>{"דנה לוי"}</div>
                    </>
                </div>
            </div>
        </div>
    );
};

export default Header