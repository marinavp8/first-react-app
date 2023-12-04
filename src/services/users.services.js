
import axios from "axios"

class UsersServices {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}api/auth/users`
        })

    }

    getAllUsers(usersData) {
        return this.api.get('/users', usersData)
    }

}

const usersServices = new UsersServices()

export default usersServices
