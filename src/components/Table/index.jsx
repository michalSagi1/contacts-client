import React, { useContext } from 'react'
import styles from "./style.module.css"
import iconcopy from '../../Assets/Icons/Icon material-content-copy.svg'
import icondelete from '../../Assets/Icons/Icon material-delete.svg'
import iconedit from '../../Assets/Icons/Icon material-edit (3).svg'
import Popup from '../Popup'
import InnerPopup from '../InnerPopup'
import PopupContext from '../../PopupContext'

function Table({ contacts, setChange }) {
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

                    {contacts.length === 0 && <div className={styles.noResult}>אין תוצאות מתאימות</div>}
                    {contacts.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.username}</td>
                                <td>
                                    <div className={styles.iconcopy}>{val.phone}
                                        <img
                                            src={iconcopy}
                                            alt="copy"
                                            onClick={() => { navigator.clipboard.writeText(val.phone) }}

                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.iconscontainer}>
                                        <div className={styles.iconstable}>
                                            <img
                                                src={iconedit}
                                                alt="edit"
                                                onClick={() => setPopup(<InnerPopup title={"עריכת איש קשר"} defaultValueName={val.username} defaultValuePhone={val.phone} sorce={"edit"} id={val.id}></InnerPopup>)
                                                }

                                            />
                                            <img
                                                src={icondelete}
                                                alt="remove"
                                                onClick={() => remove(val.id)}
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
        </>
    )
}

export default Table