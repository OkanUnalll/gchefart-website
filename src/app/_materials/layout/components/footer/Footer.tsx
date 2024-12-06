import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="w-100 border-t-[1px] border-opacity-25  border-gray-400">
            <div className="container py-5">
                <span className="text-sm text-center block">
                    Copyright © 2023 - Development & Design by <Link to="/about" className="text-blueprimary">Okan.</Link>
                </span>
            </div>
        </div>
    )
}

export default Footer