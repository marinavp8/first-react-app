import { Routes, Route } from 'react-router-dom'
import LoginForm from '../components/Navigation/LoginForm.jsx'
import MenuCreate from '../components/MenuCreate/MenuCreate.jsx'
import MainPage from '../pages/MainPage.jsx'
import MenuList from '../components/MenuList/MenuList.jsx'
import MenuDetails from '../components/MenuDetails/MenuDetails.jsx'



const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<MainPage />} />
            <Route path={'/login'} element={<LoginForm />} />
            <Route path={'/createmenu'} element={< MenuCreate />} />
            <Route path={'/menulist'} element={< MenuList />} />
            <Route path={':_id'} element={<MenuDetails />} />

        </Routes>
    )
}

export default AppRoutes