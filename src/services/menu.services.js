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

    editMondayMenu(realId, params) {
        console.log("del que haces clock", realId)
        console.log("------params", params)
        const { menuId, day } = params

        return this.api.put(`/updateMenu/${menuId}/${day}/`, { realId })
    }


}

const menuService = new menuServices()

export default menuService