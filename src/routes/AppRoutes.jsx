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
import YourFridge from '../pages/YourFridge/YourFridge'
import RecipeDetails from '../pages/RecipeDetailsPage/RecipeDetails'
import FilteredBreakfast2 from "../components/Prueba/FilteredBreakfast2"
import EditProfile from '../components/EditProfile/EditProfile'
import FilteredDinner from '../components/Prueba/FilteredDinner2'
import FilteredLunch from '../components/Prueba/FilteredLunch2'
import Comment from '../components/Comments/Comments'
import AboutUs from '../components/AboutUs/AboutUs'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />

            <Route path={'/aboutUs'} element={<AboutUs />} />

            <Route path={'/signup'} element={<SignupPage />} />
            <Route path={'/login'} element={<LoginPage />} />

            <Route element={<PrivateRoute />} >
                <Route path={'/profile'} element={<ProfilePage />} />
                <Route path={'/edit'} element={<EditProfile />} />
            </Route>

            <Route path={'/menulist'} element={< MenuList />} />
            <Route path={':_id'} element={<MenuDetails />} />
            <Route path={'/edit/:_id'} element={<MenuEdit />} />
            <Route path={'/fridge'} element={<YourFridge />} />

            <Route path={'/search/results'} element={<FiltersPage />} />
            <Route path={'/recipes/:id'} element={<RecipeDetails />} />

            <Route path={'/createmenu'} element={< MenuCreate />} />
            <Route path={'/menulist'} element={< MenuList />} />
            <Route path={':_id'} element={<MenuDetails />} />
            <Route path={'/edit/:_id'} element={<MenuEdit />} />

            <Route path={'/createmenu/:menuId?'} element={< MenuCreate />} />
            <Route path={'/breakfastprueba/:menuId/:day'} element={< FilteredBreakfast2 />} />
            <Route path={'/addLunch/:menuId/:day'} element={< FilteredLunch />} />
            <Route path={'/addDinner/:menuId/:day'} element={< FilteredDinner />} />


            <Route path={'/comments'} element={<Comment />} />

        </Routes>
    )
}

export default AppRoutes


