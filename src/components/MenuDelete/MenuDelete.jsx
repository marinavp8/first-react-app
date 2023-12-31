import menuService from "../../services/menu.services"
import { useNavigate } from 'react-router-dom'
import { Button } from "react-bootstrap"
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth.contexts"
import { MdDelete } from "react-icons/md"

const MenuDelete = ({ _id, f }) => {

    const { loggedUser } = useContext(AuthContext)

    const handleDelete = () => {
        console.log(_id)
        menuService
            .deleteMenu(_id)
            .then(() => {
                console.log("eliminado")
                menuService
                    .getMenus(loggedUser._id)
                    .then(({ data }) => { f(data), console.log(data) })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }
    return (

        <Button variant="outline-danger" onClick={handleDelete} className="mb-3"><MdDelete /></Button>

    )
}

export default MenuDelete