import axios from 'axios'

class menuServices {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/api/menu`
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
        console.log(menuId)
        console.log(formData)
        return this.api.put(`/updateMenu/${menuId}`, formData)
    }

    deleteMenu(_id) {
        return this.api.delete(`/deleteMenu/${_id}`)
    }


}

const menuService = new menuServices()

export default menuService