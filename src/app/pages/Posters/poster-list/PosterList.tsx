import Posters1 from "../../../_materials/partials/widgets/posters/Posters1"

const PosterList = () => {
    return (
        <div>
            <div className="container mt-10">
                <span className="text-3xl font-semibold block mb-10">
                    All Poster Designs
                </span>
            </div>
            <div className="container">
                <Posters1 />
            </div>
        </div>
    )
}

export default PosterList