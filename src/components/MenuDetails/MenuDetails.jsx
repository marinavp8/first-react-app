import { Card, Col } from "react-bootstrap"
import menuService from "../../services/menu.services"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import EditMenuForm from "../MenuEdit/MenuEdit"
import { useNavigate } from 'react-router-dom';



const MenuDetails = () => {

    const { _id } = useParams()

    const [menu, setMenu] = useState({})
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        loadMenuDetails()
    }, [])

    const loadMenuDetails = () => {
        menuService
            .detailsMenu(_id)
            .then(({ data }) => setMenu(data))
            .catch(err => console.log(err))
    }

    const handleUpdateMenu = (updatedMenuData) => {
        console.log(updatedMenuData);
        setIsEditing(false)
    }
    const navigate = useNavigate();


    const handleDelete = () => {
        menuService
            .deleteMenu(_id)
            .then(() => navigate("/menulist"))
            .catch(err => console.log(err))
    }

    return (


        <div>
            {isEditing ? (
                <EditMenuForm existingMenuData={menu} onUpdateMenu={handleUpdateMenu} />
            ) : (
                <div>
                    <Col lg={{ span: 3 }} md={{ span: 6 }}>
                        <article className='CoasterCard mb-3'>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{menu.name}</Card.Title>
                                    <div className="d-grid">
                                    </div>
                                </Card.Body>
                                <button onClick={() => setIsEditing(true)}>Editar</button>
                                <button onClick={handleDelete}>Eliminar</button>
                            </Card>
                        </article>
                    </Col>
                </div>
            )}
        </div>





    )
}

export default MenuDetails