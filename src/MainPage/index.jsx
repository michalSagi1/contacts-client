import React, { useContext, useEffect, useState } from 'react'
import BtnAdd from '../components/BtnAdd'
import InnerPopup from '../components/InnerPopup'
import Input from '../components/Input'
import Table from '../components/Table'
import PopupContext from '../PopupContext'
import styles from "./style.module.css"
import './pagination.css'
import Pagination from 'rc-pagination';
import Spinner from '../components/Spinnner'

function MainPage() {

    const [contacts, setContacts] = useState([])
    const [filterList, setFilterList] = useState([])
    const [change, setChange] = useState("")
    const { setPopup } = useContext(PopupContext);

    const [perPage, setPerPage] = useState(5);
    const [size, setSize] = useState(perPage);
    const [current, setCurrent] = useState(1);

    const PerPageChange = (value) => {
        setSize(value);
        const newPerPage = Math.ceil(contacts.length / value);
        if (current > newPerPage) {
            setCurrent(newPerPage);
        }
    }

    const PaginationChange = (page, pageSize) => {
        setCurrent(page);
        setSize(pageSize)
    }

    const PrevNextArrow = (current, type, originalElement) => {
        if (type === 'prev') {
            return <button><i className="fa fa-angle-double-left"></i></button>;
        }
        if (type === 'next') {
            return <button><i className="fa fa-angle-double-right"></i></button>;
        }
        return originalElement;
    }

    function getData() {

        fetch('http://localhost:3005/user/users', {
            method: 'GET',
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
    }, [change])


    const search = (value) => {
        setFilterList(contacts.filter(e => e.username.includes(value))
        )
    }
    const newData = (current, pageSize) => {
        return filterList.slice((current - 1) * pageSize, current * pageSize);
    };



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
                    {contacts.length === 0 ? <Spinner /> :
                        <>
                            <div className={styles.tablecontainer}>
                                <Table contacts={newData(current, size)} setChange={setChange} />


                            </div>
                            <div className={styles.pagination}>
                                <Pagination
                                    className="pagination-data"
                                    onChange={PaginationChange}
                                    total={contacts.length}
                                    current={current}
                                    pageSize={size}
                                    showSizeChanger={false}
                                    itemRender={PrevNextArrow}
                                    onShowSizeChange={PerPageChange}
                                />
                            </div>
                        </>}
                </div>
            </div>
        </>
    )
}

export default MainPage