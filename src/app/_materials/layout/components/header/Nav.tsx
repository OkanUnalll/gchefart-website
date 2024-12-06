import { Link } from "react-router-dom"

type Props = {
    className?: string
    mobileScreen?: boolean
    closeMobileMenu?: any 
}

const Nav = ({className, mobileScreen = false, closeMobileMenu}: Props) => {
    const items = [
        {
            title: "Home",
            href: "/",
            lastItem: false
        },
        {
            title: "Posters",
            href: "/posters",
            lastItem: false
        },
        {
            title: "About",
            href: "/about",
            lastItem: true
        },       
    ]

    return (
        <>
            {mobileScreen ? (
                <ul className={`${className} flex flex-col items-center`}>
                    {items.map((item, index) => (
                        <li key={index}>
                            <Link
                                onClick={closeMobileMenu}
                                className={`mb-10 text-gray-300 text-3xl font-semibold transition-all hover:text-blueprimary block active:scale-95`} 
                                to={item.href}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}    
                </ul>
            ) : (
                <ul className={`${className} hidden`}>
                    {items.map((item, index) => (
                        <li key={index}>
                            <Link 
                                className={`${!item.lastItem && "mr-4"} text-black font-semibold transition-all hover:text-blueprimary block active:scale-95`} 
                                to={item.href}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}    
                </ul>
            )}
        </>
    )
}

export default Nav