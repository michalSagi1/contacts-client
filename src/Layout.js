import React, { useState } from 'react'
import BtnAdd from './components/BtnAdd'
import Header from './components/Header'
import Input from './components/Input'
import Popup from './components/Popup'
import MainPage from './MainPage'
import PopupContext from './PopupContext'

function Layout() {
    const [popup, setPopup] = useState("")

    return (
        <PopupContext.Provider value={{ popup, setPopup }}>
            <div>
                <Popup />
                <Header />
                <MainPage />
            </div>
        </PopupContext.Provider>
    )
}

export default Layout