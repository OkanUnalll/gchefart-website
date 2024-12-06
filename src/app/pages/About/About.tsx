import CSVG from "../../_materials/helpers/CSVG"

const About = () => {
    return (
        <div className="container mt-10 flex lg:flex-row flex-col w-full">
            <div className="w-[200px] h-[200px] block relative block mb-9 lg:mb-0 lg:mr-9">
                <div className="p-2 relative z-10">
                    <div className="w-full overflow-hidden rounded-full">
                        <img src="/media/avatar/avatar.png" className="w-full" alt="" />
                    </div>
                </div>
                <span className="absolute top-0 z-0 w-full h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-spin"></span>
            </div>
            <div className="flex-1">
                <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">
                        My name is <span className="font-semibold">Okan</span>
                    </span>
                </div>
                <div className="flex items-center mb-4">
                    <span className="mr-2 flex items-center">
                        <CSVG path="/media/icons/flags/fla001.svg" svgClassName="fill-gray-800 h-[15px]" className="mr-2" /> Country:
                    </span>
                    <div className="overflow-hidden rounded-sm">
                        <img src="/media/flags/turkey.png" alt="flag" className="w-[25px] object-cover" />
                    </div>
                </div>
                <div className="flex items-center mb-10">
                    <span className="w-full block">
                    Hello, I have been dealing with digital design and web development for a while. My main occupation is Front End Developer. Most of my time is spent writing code and designing.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default About