import getPosters from "../../../../api/posters/_requests"
import CSVG from "../../../_materials/helpers/CSVG"
import { useContext } from "react"
import { PopupContext } from "../../../_materials/layout/MasterLayout"
import { useParams } from "react-router-dom"
import Banner from "../../../_materials/layout/components/banner/Banner"

const PosterDetail = () => {
    const { id } = useParams()
    const posters = getPosters()

    const poster = posters.find((item: any) => (item.id).toString() === id)
    
    const { setPopupStatus, setPosterImageURL } = useContext(PopupContext)

    const openFullSize = () => {
        setPopupStatus(true)
        setPosterImageURL(poster.imageURL)
    }

    const information = [
        {
            title: 'Poster Name:',
            value: poster.title,
        },
        {
            title: 'Number:',
            value: `#00${poster.number}`,
        },
        {
            title: 'Creation Date:',
            value: poster.date,
        },
    ]

    return (
        <>
            <Banner className="h-[650px]" layerColor="black" layerOpacity="25" fit="cover" path={poster.imageURL} imageBlur={true}>
                <div className="w-full h-full flex items-center justify-center">
                    <img src={poster.imageURL} alt="poster" className="h-full px-5 object-contain md:h-auto md:w-[400px] md:px-0" />
                </div>
            </Banner>
            <div className="container mt-10 flex flex-col-reverse md:flex-row">
                <button onClick={openFullSize} className="w-full md:w-[400px] md:mr-10 rounded-lg overflow-hidden relative">
                    <div className="absolute w-full h-full bg-black opacity-0 bg-opacity-0 hover:opacity-100 hover:bg-opacity-50 transition-all flex items-center justify-center cursor-pointer">
                        <CSVG path="/media/icons/general/gen001.svg" svgClassName="fill-white w-[85px] h-[85px]" />
                    </div>
                    <img src={poster.imageURL} alt="poster" className="w-full" />
                </button>
                <div className="w-full md:w-auto mb-10 md:mb-0">
                    <div className="flex flex-col mb-8">
                        <span className="font-medium italic text-xl text-gray-400 mb-1">#00{poster.number}</span>
                        <span className="font-semibold text-4xl">{poster.title}</span>
                    </div>
                    {information.map((item, index) => (
                        <div key={index} className="mb-3">
                            <span className="text-gray-400">{item.title} </span>
                            <span className="font-medium">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>
    
        </>
    )
}

export default PosterDetail