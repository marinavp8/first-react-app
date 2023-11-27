import { Routes, Route } from 'react-router-dom'
// import SignupPage from '../pages/SignupPage/SignupPage.jsx'
import LoginForm from '../components/Navigation/LoginForm.jsx'
import RecipieFilteredIng from '../components/RecipieFilteredIng/RecipieFilteredIng.jsx'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/login'} element={<LoginForm />} />
            <Route path={'/search/results'} element={<RecipieFilteredIng />} />
        </Routes>
    )
}

export default AppRoutes