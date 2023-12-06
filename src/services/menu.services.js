import axios from 'axios'

class menuServices {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/api/menu`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })


    }

    getMenus(ownerId) {
        return this.api.get(`/getallmenus/${ownerId}`)
    }

    createMenu(menuData) {
        return this.api.post('/', menuData)
    }

    detailsMenu(_id) {
        return this.api.get(`/${_id}`)
    }

    editMenu(menuId, formData) {
        return this.api.put(`/updateMenu/${menuId}`, formData)
    }

    deleteMenu(_id) {
        console.log(_id)
        return this.api.delete(`/deleteMenu/${_id}`)
    }

    editMondayMenu(realId, params) {
        const { menuId, day } = params

        return this.api.put(`/updateMenu/${menuId}/${day}/`, { realId })
    }
    editLunchMenu(realId, params) {
        const { menuId, day } = params

        return this.api.put(`/updateMenuLunch/${menuId}/${day}/`, { realId })
    }
    editDinnerMenu(realId, params) {
        const { menuId, day } = params

        return this.api.put(`/updateMenuDinner/${menuId}/${day}/`, { realId })
    }
}

const menuService = new menuServices()

export default menuService