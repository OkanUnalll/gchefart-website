import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MasterLayout from '../_materials/layout/MasterLayout'

import Home from '../pages/Home/Home'
import Posters from '../pages/Posters/poster-list/PosterList'
import PosterDetail from '../pages/Posters/poster-detail/PosterDetail'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'

const AppRoutes = () => {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route element={<MasterLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/posters' element={<Posters />} />
                    <Route path='/posters/poster-detail/:id/*' element={<PosterDetail />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/*' element={<div>404 Page Not Found</div>} />
                </Route>
            </Routes>    
        </BrowserRouter>
    )
}

export default AppRoutes