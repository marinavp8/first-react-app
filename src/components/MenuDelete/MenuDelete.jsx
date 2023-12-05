import menuService from "../../services/menu.services"
import { useNavigate } from 'react-router-dom';


const MenuDelete = (_id) => {

    const navigate = useNavigate()

    const handleDelete = () => {
        menuService
            .deleteMenu(_id)
            .then(() => console.log("eliminado"))
            .catch(err => console.log(err))
    }
    return (

        <button onClick={handleDelete}>Delete</button>

    )
}

export default MenuDelete