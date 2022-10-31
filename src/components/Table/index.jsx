import React from 'react'
import styles from "./style.module.css"
import iconcopy from '../../Assets/Icons/Icon material-content-copy.svg'
import icondelete from '../../Assets/Icons/Icon material-delete.svg'
import iconedit from '../../Assets/Icons/Icon material-edit (3).svg'

function Table({ contacts }) {

    return (
        <div className={styles.tablecontainer}>
            <table>
                <tr>
                    <th>שם</th>
                    <th>טלפון</th>
                    <th></th>

                </tr>
                {contacts.length === 0 ? <div className={styles.noResult}>אין תוצאות מתאימות</div> :

                    contacts.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.username}</td>
                                <td>
                                    <div className={styles.iconcopy}>{val.phone}
                                        <img
                                            src={iconcopy}
                                            alt="copy"
                                            onClick={""}
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.iconscontainer}>
                                        <div className={styles.iconstable}>
                                            <img
                                                src={iconedit}
                                                alt="edit"
                                                onClick={""}

                                            />
                                            <img
                                                src={icondelete}
                                                alt="remove"
                                                onClick={""}
                                            />
                                        </div>
                                    </div>
                                </td>

                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default Table