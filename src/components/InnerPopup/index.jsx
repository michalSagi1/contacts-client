import React, { useContext, useState } from 'react'
import Input from '../Input'
import close from '../../Assets/Icons/Icon material-close.svg'
import PopupContext from '../../PopupContext'
import styles from "./style.module.css"


function InnerPopup({ id, defaultValueName, defaultValuePhone, sorce, setChange }) {
  const [name, setName] = useState(defaultValueName)
  const [phone, setPhone] = useState(defaultValuePhone)
  const [message, setMessage] = useState("")
  const { setPopup } = useContext(PopupContext);

  const submitAdd = () => {
    fetch('http://localhost:3005/user/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        { name, phone }
      ),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        if (!data.message) {
          setChange(data)
          setPopup("")
        } else {
          setMessage(data.message)
        }

      })
      .catch((error) => {
        console.error('Error:', error);
      });


  }
  const submitEdit = () => {
    fetch(`http://localhost:3005/user/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        { name, phone }
      ),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        if (!data.message) {
          setPopup("");
          setChange(data)
        } else {
          setMessage(data.message)
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.up}>
          <div className={styles.title}>{sorce === "add" ? "הוספת איש קשר" : "עריכת איש קשר"}</div>
          <img
            className={styles.closeicon}
            src={close}
            alt="close"
            onClick={() => setPopup("")}
          />
        </div>
        <div className={styles.bodypopup}>
          <div className={styles.label}>שם</div>
          <Input popup defaultValue={defaultValueName} onChange={(e) => setName(e.target.value)} autoFocus={true} />
          <div className={styles.label}>טלפון</div>
          <Input popup defaultValue={defaultValuePhone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className={styles.message}>{message}</div>
        <button className={styles.savebtn} onClick={sorce === "add" ? () => submitAdd() : () => submitEdit()}>שמירה</button>

      </div>
    </div>
  )
}

export default InnerPopup