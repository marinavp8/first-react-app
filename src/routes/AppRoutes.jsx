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
import RecipeProvider from "../contexts/recipe.context"
import RecipeDetails from '../pages/RecipeDetailsPage/RecipeDetails'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />

            <Route path={'/signup'} element={<SignupPage />} />
            <Route path={'/login'} element={<LoginPage />} />

            <Route path={'/search/results'} element={<FiltersPage />} />
            <Route element={<PrivateRoute />} >
                <Route path={'/profile'} element={<ProfilePage />} />
            </Route>

            <Route path={'/fridge'} element={<YourFridge />} />

            <Route path={'/search/results'} element={<FiltersPage />} />
            <Route path={'/recipes/:id'} element={<RecipeDetails />} />
            {/* <Route element={<RecipeProvider />}> */}
            <Route path={'/createmenu'} element={< MenuCreate />} />
            {/* </Route> */}
            <Route path={'/menulist'} element={< MenuList />} />
            <Route path={':_id'} element={<MenuDetails />} />
            <Route path={'/edit/:_id'} element={<MenuEdit />} />


        </Routes>
    )
}

export default AppRoutes


