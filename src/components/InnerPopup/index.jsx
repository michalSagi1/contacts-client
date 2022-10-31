import React, { useContext, useState } from 'react'
import Input from '../Input'
import close from '../../Assets/Icons/Icon material-close.svg'
import PopupContext from '../../PopupContext'
import './styles.css'


function InnerPopup({ title, defaultValueName, defaultValuePhone, sorce, setChange, id }) {
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
      <div className='container'>
        <div className='up'>
          <div className='title'>{title}</div>
          <img
            src={close}
            alt="close"
            onClick={() => setPopup("")}
          />
        </div>
        <div className='bodypopup'>
          <div className='label'>שם</div>
          <Input popup defaultValue={defaultValueName} onChange={(e) => setName(e.target.value)} />
          <div className='label'>טלפון</div>
          <Input popup defaultValue={defaultValuePhone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="message">{message}</div>
        <button className='savebtn' onClick={sorce === "add" ? () => submitAdd() : () => submitEdit()}>שמירה</button>

      </div>
    </div>
  )
}

export default InnerPopup