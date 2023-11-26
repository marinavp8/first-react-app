import { Routes, Route } from 'react-router-dom'
// import SignupPage from '../pages/SignupPage/SignupPage.jsx'
// import LoginPage from '../pages/LoginPage/LoginPage.jsx'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<p>EL INICIO</p>} />

            {/* <Route path={'/registro'} element={<SignupPage />} />
            <Route path={'/inicio-sesion'} element={<LoginPage />} /> */}

            <Route path={'*'} element={<p>EL ERROR</p>} />
        </Routes>
    )
}

export default AppRoutes