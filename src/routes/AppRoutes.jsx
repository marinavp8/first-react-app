import { Routes, Route } from 'react-router-dom'

import SignupPage from "../pages/SignupPage/SignupPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import MenuDetails from "../components/MenuDetails/MenuDetails"
import FiltersPage from '../pages/Filters/FiltersPage'
import ProfilePage from '../pages/Profile/Profile'
import HomePage from '../pages/HomePage/HomePage'
import PrivateRoute from './PrivateRoute'
import MenuEdit from "../components/MenuEdit/MenuEdit"
import YourFridgePage from '../pages/YourFridgePage/YourFridgePage'
import FilteredBreakfast2 from "../components/Prueba/FilteredBreakfast2"
import FilteredDinner from '../components/Prueba/FilteredDinner2'
import FilteredLunch from '../components/Prueba/FilteredLunch2'
import DetailsRecipe from '../components/FilteredRecipe/DetailsRecipe/DetailsRecipe'
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage'
import AdminProfilePage from '../pages/AdminProfilePage/AdminProfilePage'
import MenuCreate from '../pages/MenuPages/MenuCreate'
import MenuListPage from '../pages/MenuPages/MenuList'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const AppRoutes = () => {

    return (

        <Routes>
            <Route path={'/'} element={<HomePage />} />

            <Route path={'/aboutUs'} element={<AboutUsPage />} />

            <Route path={'/signup'} element={<SignupPage />} />
            <Route path={'/login'} element={<LoginPage />} />


            <Route element={<PrivateRoute />} >
                <Route path={'/profile'} element={<ProfilePage />} />
                <Route path={'/createmenu'} element={< MenuCreate />} />
                <Route path={'/users'} element={<AdminProfilePage />} />
            </Route>

            <Route path={'/fridge'} element={<YourFridgePage />} />
            <Route path={'/search/results'} element={<FiltersPage />} />
            <Route path={'/recipes/:id'} element={<DetailsRecipe />} />
            <Route path={'/menulist'} element={< MenuListPage />} />
            <Route path={'/edit/:_id'} element={<MenuEdit />} />
            <Route path={'/createmenu/:menuId?'} element={< MenuCreate />} />
            <Route path={'/breakfastprueba/:menuId/:day'} element={< FilteredBreakfast2 />} />
            <Route path={'/addLunch/:menuId/:day'} element={< FilteredLunch />} />
            <Route path={'/addDinner/:menuId/:day'} element={< FilteredDinner />} />

            <Route path={'*'} element={<ErrorPage />} />

        </Routes>
    )
}

export default AppRoutes


