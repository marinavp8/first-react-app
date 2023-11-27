import axios from 'axios'

class menuServices {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/api/menu`
        })
    }

    getMenus() {
        return this.api.get('/getallmenus')
    }

    createMenu(menuData) {
        return this.api.post('/', menuData)
    }

    detailsMenu(_id) {
        return this.api.get(`/${_id}`, _id)
    }

}

const menuService = new menuServices()

export default menuService