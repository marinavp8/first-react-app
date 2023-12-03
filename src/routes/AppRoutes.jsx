import { Routes, Route } from 'react-router-dom'

import SignupPage from "../pages/SignupPage/SignupPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import MenuCreate from "../components/MenuCreate/MenuCreate"
import MenuList from "../components/MenuList/MenuList"
import MenuDetails from "../components/MenuDetails/MenuDetails"
import FiltersPage from '../pages/Filters/FiltersPage'
import ProfilePage from '../pages/Profile/Profile'
import HomePage from '../pages/HomePage/HomePage'
import PrivateRoute from './PrivateRoute'
import MenuEdit from "../components/MenuEdit/MenuEdit"
import YourFridge from '../pages/YourFridgePage/YourFridge'
import FilteredBreakfast2 from "../components/Prueba/FilteredBreakfast2"
import FilteredDinner from '../components/Prueba/FilteredDinner2'
import FilteredLunch from '../components/Prueba/FilteredLunch2'
import AboutUs from '../components/AboutUs/AboutUs'
import DetailsRecipe from '../components/FilteredRecipe/DetailsRecipe/DetailsRecipe'


const AppRoutes = () => {

    return (

        <Routes>
            {/* TODO: RENDERIZAR PÁGINAS EN RUTAS */}
            <Route path={'/'} element={<HomePage />} />

            <Route path={'/aboutUs'} element={<AboutUs />} />

            <Route path={'/signup'} element={<SignupPage />} />
            <Route path={'/login'} element={<LoginPage />} />

            <Route element={<PrivateRoute />} >
                <Route path={'/profile'} element={<ProfilePage />} />
            </Route>

            <Route path={'/menulist'} element={< MenuList />} />
            <Route path={':_id'} element={<MenuDetails />} />
            <Route path={'/edit/:_id'} element={<MenuEdit />} />

            <Route path={'/fridge'} element={<YourFridge />} />
            <Route path={'/search/results'} element={<FiltersPage />} />
            <Route path={'/recipes/:id'} element={<DetailsRecipe />} />

            <Route path={'/createmenu'} element={< MenuCreate />} />
            <Route path={'/menulist'} element={< MenuList />} />
            <Route path={':_id'} element={<MenuDetails />} />
            <Route path={'/edit/:_id'} element={<MenuEdit />} />

            <Route path={'/createmenu/:menuId?'} element={< MenuCreate />} />
            <Route path={'/breakfastprueba/:menuId/:day'} element={< FilteredBreakfast2 />} />
            <Route path={'/addLunch/:menuId/:day'} element={< FilteredLunch />} />
            <Route path={'/addDinner/:menuId/:day'} element={< FilteredDinner />} />

        </Routes>
    )
}

export default AppRoutes


