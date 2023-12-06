import axios from "axios"

class EggServices {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/eggLikes`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    addFav(recipeId) {
        return this.api.put('', recipeId)

    }
}

const eggServices = new EggServices()

export default eggServices

