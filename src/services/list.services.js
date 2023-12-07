import axios from 'axios'

class ListServices {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/list`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    postIngredient(ingredient) {
        return this.api.post('', {ingredient})
    }
   
    deleteIngredient(ingredient) {

        return this.api.post('/delete', {ingredient})
    }

    getAllList() {
        return this.api.get('/')

    }
}

const listServices = new ListServices()
export default listServices
