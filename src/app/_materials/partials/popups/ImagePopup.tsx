import CSVG from "../../helpers/CSVG"

type Props = {
    className?: string
    posterImageURL: string | undefined
    closePopup: any
}

const ImagePopup = ({className, posterImageURL, closePopup}: Props) => {
    return (
        <div className={`${className} fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-90`}>
            <div className="h-full relative flex justify-center">
                <div className="absolute w-full flex justify-end p-10">
                    <button onClick={closePopup}>
                        <CSVG svgClassName="w-[50px] h-[50px] fill-white" path="/media/icons/general/gen002.svg" />
                    </button>
                </div>
                <div className="w-full h-full">
                    <img src={posterImageURL} alt="poster" className="w-full h-full object-contain"/>
                </div>
            </div>
        </div>
    )
}

export default ImagePopup