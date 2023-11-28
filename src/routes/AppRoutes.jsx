import { Routes, Route } from 'react-router-dom'

import SignupPage from "../pages/SignupPage/SignupPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import MainPage from "../pages/HomePage/HomePage"
import RecipieFilteredIng from "../components/RecipieFilteredIng/RecipieFilteredIng"
import MenuCreate from "../components/MenuCreate/MenuCreate"
import MenuList from "../components/MenuList/MenuList"
import MenuDetails from "../components/MenuDetails/MenuDetails"







const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<MainPage />} />

            <Route path={'/signup'} element={<SignupPage />} />
            <Route path={'/login'} element={<LoginPage />} />

            <Route path={'/search/results'} element={<RecipieFilteredIng />} />

            <Route path={'/createmenu'} element={< MenuCreate />} />
            <Route path={'/menulist'} element={< MenuList />} />
            <Route path={':_id'} element={<MenuDetails />} />


        </Routes>
    )
}

export default AppRoutes