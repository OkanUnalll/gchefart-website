import Nav from "./Nav"
import CSVG from "../../../helpers/CSVG"

type Props = {
    className?: string
    onClick: any
}

const MobileBar = ({className, onClick}: Props) => {
    return(
        <div className={`${className} w-full h-full fixed top-0 bg-black bg-opacity-90 z-50 flex items-center justify-center transition-all`}>
            <div className="container">
                <Nav mobileScreen={true} closeMobileMenu={onClick} />
            </div>
            <button className="absolute top-0 right-0 p-10" onClick={onClick}>
                <CSVG path="/media/icons/general/gen002.svg" svgClassName="fill-white" />
            </button>
        </div>
    )
}

export default MobileBar