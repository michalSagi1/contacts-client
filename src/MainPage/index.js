import React, { useEffect, useState } from 'react'
import BtnAdd from '../components/BtnAdd'
import Input from '../components/Input'
import Table from '../components/Table'
import styles from "./style.module.css"

function MainPage() {

    const [contacts, setContacts] = useState([])

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
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    useEffect(() => {
        getData()
        console.log(contacts);
    }, [])


    return (
        <div className={styles.main}>
            <div className={styles.submain}>
                <div className={styles.titlecontainer}>
                    <div className={styles.title}></div>
                </div>
                <div className={styles.container}>
                    <Input />
                    <BtnAdd />

                </div>
                <div className={styles.tablecontainer}>
                    <Table contacts={contacts} />
                </div>
            </div>
        </div>
    )
}

export default MainPage