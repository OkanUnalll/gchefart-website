import Posters1 from "../../_materials/partials/widgets/posters/Posters1"
import Banner from "../../_materials/layout/components/banner/Banner"

const Home = () => {
    return (
        <div>
            <header className="w-full flex justify-center mb-10">
                
                <Banner path="/media/banners/banner-desktop.png" className="w-full" responsivePath="/media/banners/banner-mobile.png"></Banner>
            </header>
            <div className="container">
                <Posters1 />
            </div>
        </div>
    )
}

export default Home