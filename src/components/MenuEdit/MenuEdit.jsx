import { useEffect, useState } from "react"
import { Form, Button } from "react-bootstrap"
import menuService from "../../services/menu.services"
import { Navigate, useNavigate, useParams } from "react-router-dom"

const EditMenuForm = ({ existingMenuData, handleUpdateMenu }) => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState(existingMenuData)

    useEffect(() => {
        setFormData(existingMenuData)
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    handleUpdateMenu = e => {
        e.preventDefault()
        const { _id: menuId } = formData

        menuService
            .editMenu(menuId, formData)
            .then(({ data }) => {
                setFormData(data)
                navigate('/menulist')
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleUpdateMenu}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <button type="submit">Actualizar Menú</button>
        </form>
    )
}

export default EditMenuForm





