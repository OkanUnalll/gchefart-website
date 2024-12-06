import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import { Outlet } from "react-router-dom"
import { useState, useEffect, createContext } from "react"
import { useLocation } from "react-router-dom"

import ImagePopup from "../partials/popups/ImagePopup" 

export const PopupContext = createContext<any>(0)

const MasterLayout = () => {
    const { pathname } = useLocation()
    
    const [popupStatus, setPopupStatus] = useState<boolean>(false)
    const [posterImageURL, setPosterImageURL] = useState<string | undefined>(undefined)

    const closePopup = () => {
        setPopupStatus(false)
    }

    useEffect(() => {
        window.scrollTo(0,0)
    }, [pathname])

    return (
        <div className="relative">
            <ImagePopup posterImageURL={posterImageURL} className={popupStatus ? "visible" : "invisible" } closePopup={closePopup} />
            <PopupContext.Provider value={{popupStatus: popupStatus, setPopupStatus: setPopupStatus, setPosterImageURL, closePopup}}>
                <Header />

                <main className="pb-12">
                    <Outlet />
                </main>

                <Footer />
            </PopupContext.Provider>
        </div>
    )
}

export default MasterLayout