
import axios from "axios"

class UsersServices {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/users`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    getAllUsers() {
        return this.api.get('/')
    }

    deleteUser(_id) {
        return this.api.delete(`/deleteUser/${_id}`)
    }

}

const usersServices = new UsersServices()

export default usersServices
