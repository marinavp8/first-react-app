import { Routes, Route } from 'react-router-dom'
// import SignupPage from '../pages/SignupPage/SignupPage.jsx'
import LoginForm from '../components/Navigation/LoginForm.jsx'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/login'} element={<LoginForm />} />
        </Routes>
    )
}

export default AppRoutes