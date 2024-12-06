import Posters, {posters} from "../../models/posters"

const getPosters = () => {
    const _posters = new Posters(posters)
    const getAll =  _posters.getAll()

    return getAll
}

export default getPosters