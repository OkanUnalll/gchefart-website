import { useState, useEffect } from 'react'
import Nav from "./Nav"
import Logo from "../../../partials/content/logo/Logo"
import { Link } from "react-router-dom"
import MobileBar from './MobileBar'
import CSVG from '../../../helpers/CSVG'

const Header = () => {
    const [scrollDown, setScrollDown] = useState<boolean>(false)
    const [mobileMenu, setMobileMenu] = useState<boolean>(false)

    const openMobileMenu = () => setMobileMenu(true)
    const closeMobileMenu = () => setMobileMenu(false)

    useEffect(() => {
        function handleScroll() {
            if(window.scrollY > 0) {
                setScrollDown(true)
            } else {
                setScrollDown(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <MobileBar className={mobileMenu ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 translate-y-4'} onClick={closeMobileMenu} />
            <div className={`w-full border-b-[1px] border-opacity-25 border-gray-400 z-40 sticky top-0 transition-colors ${scrollDown && 'backdrop-blur-lg bg-blueprimary-dark bg-opacity-80'}`}>
                <div className="container flex justify-between items-center py-5">
                    <Link to="/" className="flex items-center">
                        <Logo design="3" classNameIn="h-[40px] fill-gray-800" className="mr-2"/>
                        <span className="px-2 py-1 rounded bg-gray-400 bg-opacity-20 font-semibold text-gray-800 text-[10px]">
                            Art
                        </span>
                    </Link>
                    <Nav className='lg:flex' />
                    <button className='lg:hidden' onClick={openMobileMenu}>
                        <CSVG path='/media/icons/general/gen003.svg' svgClassName='h-[40px] fill-black' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header