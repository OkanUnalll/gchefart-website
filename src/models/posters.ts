import MonthFormat from "../app/_materials/assets/ts/DateFormat"

export const posters = [
    {
        id: 1,
        title: 'ASTRA',
        date: '2022-02-08',
        number: 1,
    },
    {
        id: 2,
        title: 'FASHION',
        date: '2022-02-08',
        number: 2,
    },
    {
        id: 3,
        title: 'PURPPE APPLE',
        date: '2022-02-08',
        number: 3,
    },
    {
        id: 4,
        title: 'KEEP',
        date: '2022-02-08',
        number: 4,
    },
    {
        id: 5,
        title: 'DESIGN',
        date: '2022-02-08',
        number: 5,
    },
    {
        id: 6,
        title: 'CHERNOBYL',
        date: '2022-02-08',
        number: 6,
    },
    {
        id: 7,
        title: 'NATURE',
        date: '2022-03-02',
        number: 7,
    },
]

type PosterType = {
    id: number
    title: string
    date: string
    number: number
}

export default class Posters {
    posters: Array<PosterType>

    constructor(posters: Array<PosterType>) {
        this.posters = posters;
    }

    getAll = () => {
        const array: any = [];
        this.posters.forEach(poster => {
            const value = this.getPoster(poster.id, poster.title, poster.date, poster.number)
            array.push(value)
        })

        return array
    }

    getPoster = (id: number, title: string, date: string, number: number) => {
        const dateObj = new Date(date)
        const _date = `${dateObj.getDate()} ${MonthFormat(dateObj.getMonth())}, ${dateObj.getFullYear()}`

        return {
            id: id,
            title: title,
            date: _date,
            number: number,
            imageURL: `/media/posters/${number}/full-size.png`,
            minImageURL: `/media/posters/${number}/min.png`
        }
    }
}
