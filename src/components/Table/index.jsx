import React, { useContext } from 'react'
import styles from "./style.module.css"
import iconcopy from '../../Assets/Icons/Icon material-content-copy.svg'
import InnerPopup from '../InnerPopup'
import PopupContext from '../../PopupContext'

function Table({ contactsList, setChange }) {
    const { setPopup } = useContext(PopupContext);

    const remove = (id) => {
        fetch(`http://localhost:3005/user/users/${id}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setChange(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <>
            <div className={styles.tablecontainer}>
                <table>
                    <tr>
                        <th>שם</th>
                        <th>טלפון</th>
                        <th></th>

                    </tr>

                    {contactsList.length === 0 && <div className={styles.noResult}>אין תוצאות מתאימות</div>}
                    {contactsList.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.username}</td>
                                <td>
                                    <div className={styles.phone}>{val.phone}
                                        <img className={styles.iconcopy}
                                            src={iconcopy}
                                            alt="copy"
                                            onClick={() => { navigator.clipboard.writeText(val.phone) }}

                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.iconscontainer}>
                                        <div className={styles.iconstable}>
                                            <div className={styles.edit} onClick={() => setPopup(<InnerPopup id={val.id} defaultValueName={val.username} defaultValuePhone={val.phone} sorce={"edit"} setChange={setChange}></InnerPopup>)
                                            }></div>
                                            <div className={styles.delete} onClick={() => remove(val.id)}></div>
                                        </div>
                                    </div>
                                </td>

                            </tr>
                        )
                    })
                    }
                </table>
            </div>
        </>
    )
}

export default Table