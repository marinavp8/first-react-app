import { Card, Col } from "react-bootstrap"
import menuService from "../../services/menu.services"
import EdamamService from "../../services/edamam.services"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import EditMenuForm from "../MenuEdit/MenuEdit"
import { useNavigate } from 'react-router-dom';
import Loader from "../Loader/Loader"
import { AuthContext } from "../../contexts/auth.contexts"
import { useContext } from "react"



const MenuDetails = () => {

    const { loggedUser } = useContext(AuthContext)

    const { _id } = useParams()

    const [menu, setMenu] = useState(null)
    const [recipe, setecipe] = useState(null)
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        loadMenuDetails()
        // recipedetails()
    }, [])

    const loadMenuDetails = () => {
        menuService
            .detailsMenu(_id)
            .then(({ data }) => { setMenu(data); console.log("hdhdhdhhd", loggedUser._id) })
            // .then(({ data }) => setMenu(data))
            .catch(err => console.log(err))
    }
    const recipedetails = () => {
        EdamamService
            .getOneRecipe(menu.days[0].recipeBreakfastId)
            .then(({ data }) => { console.log("hdhdhdhhd", data) })
            // .then(({ data }) => setMenu(data))
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
                !menu ?
                    <Loader />
                    :
                    <div>
                        <Col lg={{ span: 3 }} md={{ span: 6 }}>
                            <article className='CoasterCard mb-3'>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{menu.name}</Card.Title>
                                        {
                                            menu.days.map((e, index) => <Card.Title key={index}>{e.day}</Card.Title>)
                                        }

                                        {
                                            JSON.stringify(menu)
                                        }

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