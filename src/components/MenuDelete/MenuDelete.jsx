import menuService from "../../services/menu.services"
import { useNavigate } from 'react-router-dom'
import { Button } from "react-bootstrap"


const MenuDelete = (_id) => {

    const navigate = useNavigate()

    const handleDelete = () => {
        menuService
            .deleteMenu(_id)
            .then(() => console.log("eliminado"))
            .catch(err => console.log(err))
    }
    return (

        <Button variant="outline-danger" onClick={handleDelete} className="mb-3">Delete</Button>


    )
}

export default MenuDelete