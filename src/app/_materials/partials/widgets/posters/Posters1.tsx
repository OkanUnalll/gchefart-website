import getPosters from "../../../../../api/posters/_requests"
import { Link } from "react-router-dom"

type Props = {
    className?: string
}

const Posters1 = ({className}: Props) => {
    const posters = getPosters()

    return (
        <div className={`grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ${className}`} >
            {posters.map((poster: any, index: number) => (
                <Link key={index} to={`/posters/poster-detail/${poster.id}`} className="w-full">
                    <div className="group rounded-lg overflow-hidden relative">
                        <div className="absolute -bottom-full group-hover:bottom-0 transition-all w-full bg-white bg-opacity-70 backdrop-blur-md px-7 py-5">
                            <div className="flex items-center">
                                <span className="font-normal italic text-xl mr-3">#00{poster.number}</span>
                                <span className="font-semibold text-2xl">{poster.title}</span>
                            </div>
                            <span>{poster.date}</span>
                        </div>
                        <img src={poster.minImageURL} alt="item" className="w-full" />
                    </div>
                </Link>
            ))}
            </div>
    )
}

export default Posters1