import { useContext } from "react"
import { AuthContext } from "../contexts/auth.contexts"

import Loader from "../components/Loader/Loader"

import { Outlet, Navigate } from "react-router-dom"


const PrivateRoute = () => {

    const { loggedUser, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    if (!loggedUser) {
        return <Navigate to={'/login'} />
    }

    return <Outlet />


}


export default PrivateRoute