import React, { useContext, useEffect, useState } from 'react'
import BtnAdd from '../components/BtnAdd'
import InnerPopup from '../components/InnerPopup'
import Input from '../components/Input'
import Popup from '../components/Popup'
import Table from '../components/Table'
import PopupContext from '../PopupContext'
import styles from "./style.module.css"

function MainPage() {

    const [contacts, setContacts] = useState([])
    const [filterList, setFilterList] = useState([])
    const [change, setChange] = useState("")
    const { setPopup } = useContext(PopupContext);



    function getData() {

        fetch('http://localhost:3005/user/users', {
            method: 'Get',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setContacts(data)
                setFilterList(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    useEffect(() => {
        getData()
        console.log(contacts);
    }, [change])

    const search = (value) => {
        setFilterList(contacts.filter(e => e.username.includes(value))
        )
    }



    return (
        <>

            <div className={styles.main}>
                <div className={styles.submain}>
                    <div className={styles.titlecontainer}>
                        <div className={styles.title}></div>
                    </div>
                    <div className={styles.container}>
                        <Input placeholder="חיפוש" onChange={(e) => search(e.target.value)} />
                        <BtnAdd onClick={() => setPopup(<InnerPopup title={"הוספת איש קשר"} sorce={"add"} setChange={setChange}></InnerPopup>)} />

                    </div>
                    <div className={styles.tablecontainer}>
                        <Table contacts={filterList} setChange={setChange} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage