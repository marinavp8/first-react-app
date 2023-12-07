import { useState, useEffect } from "react"
import menuService from "../../services/menu.services"
import edamamService from "../../services/edamam.services"
import { AuthContext } from "../../contexts/auth.contexts"
import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Loader from "../Loader/Loader"
import { Container, Accordion, Row, Col, Button } from "react-bootstrap"
import RecipeMenu from "../RecipeMenu/RecipeMenu"
import "./MenuCreate.css"
import MenuEdit from "../MenuEdit/MenuEdit"
import { IoIosAddCircleOutline } from "react-icons/io"
import { menuBase } from "../../consts/menu-consts"




const NewMenuForm = () => {
    const { loggedUser } = useContext(AuthContext)
    const params = useParams()
    const navigate = useNavigate()
    const [menuData, setMenuData] = useState(null)
    const [recipes, setRecipes] = useState({})

    useEffect(() => {
        if (params.menuId) {
            menuService
                .detailsMenu(params.menuId)
                .then((response) => { setMenuData(response.data); })
                .catch(err => console.log(err))
        } else {
            menuService
                .createMenu(menuBase)
                .then((response) => { setMenuData(response.data); })
                .catch(err => console.log(err))
        }
    }, [])

    useEffect(() => {
        if (!menuData) {
            return
        }
        let promises = []
        menuData.days.map(e => {
            if (e.recipeBreakfastId) {
                promises.push(edamamService.getOneRecipe(e.recipeBreakfastId))
            }
            if (e.recipeLunchId) {
                promises.push(edamamService.getOneRecipe(e.recipeLunchId))
            }
            if (e.recipeDinnerId) {
                promises.push(edamamService.getOneRecipe(e.recipeDinnerId))
            }
        })
        Promise.all(promises).then(data => {
            const recipesArray = data.map(e => e.data.recipe)
            let recipesObject = {}
            for (let i of recipesArray) {
                recipesObject[i.uri.slice(-32)] = i
            }
            setRecipes(recipesObject)
        })
    }, [menuData])



    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setMenuData({ ...menuData, [name]: value })
    }

    const handleMenuSubmit = e => {

        e.preventDefault()

        menuService
            .editMenu({ ...menuData, owner: loggedUser._id })
            .then((response) => console.log(response))
            .catch(err => console.log(err))
    }

    const handleSearch = (menuId, day) => {
        navigate(`/breakfastprueba/${menuId}/${day}`)
    }
    const handleSearchLunch = (menuId, day) => {
        navigate(`/addLunch/${menuId}/${day}`)
    }
    const handleSearchDinner = (menuId, day) => {
        navigate(`/addDinner/${menuId}/${day}`)
    }

    const handleUpdateMenu = (updatedMenuData) => {
        setIsEditing(false)
    }

    return (
        !menuData
            ?
            <Loader />
            :
            <Container>
                {
                    menuData.days.map((day, index) => (
                        < Accordion defaultActiveKey="0" bsPrefix="my-accordion" >
                            <Accordion.Item eventKey="0">
                                <Row>
                                    <Accordion.Header className="mt-5 mb-5 bigger"><p className="bigger">{day.day} </p></Accordion.Header>
                                    <Col>
                                        <div className="text-center">
                                            <Accordion.Body>
                                                <div className="mb-3 bigger" >

                                                    BREAKFAST
                                                </div>
                                            </Accordion.Body>
                                            <Accordion.Body>
                                                <Button style={{ backgroundColor: 'rgb(58, 125, 19)', border: 'none', width: "30px", height: '30px' }} type="button" onClick={() => handleSearch(menuData._id, day.day)}><IoIosAddCircleOutline /></Button>
                                            </Accordion.Body>
                                            <Accordion.Body>
                                                {
                                                    day.recipeBreakfastId && recipes[day.recipeBreakfastId] ?
                                                        <RecipeMenu recipe={recipes[day.recipeBreakfastId]} />
                                                        :
                                                        <p className="mt-5 bigger">No recipe added yet</p>
                                                }
                                            </Accordion.Body>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="text-center">
                                            <Accordion.Body>
                                                <div className="mb-3 bigger">
                                                    LUNCH
                                                </div>
                                            </Accordion.Body>
                                            <Accordion.Body>
                                                <Button style={{ backgroundColor: 'rgb(58, 125, 19)', border: 'none', width: "30px", height: '30px' }} type="button" onClick={() => handleSearchLunch(menuData._id, day.day)}><IoIosAddCircleOutline /></Button>
                                            </Accordion.Body>
                                            <Accordion.Body>
                                                {
                                                    day.recipeLunchId && recipes[day.recipeLunchId] ?
                                                        <div>
                                                            <RecipeMenu recipe={recipes[day.recipeLunchId]} />
                                                        </div>
                                                        :
                                                        <p className="mt-5 bigger">No recipe added yet</p>
                                                }
                                            </Accordion.Body>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="text-center">

                                            <Accordion.Body>
                                                <div className="mb-3 bigger">
                                                    DINNER
                                                </div>
                                            </Accordion.Body>
                                            <Accordion.Body>
                                                <Button style={{ backgroundColor: 'rgb(58, 125, 19)', border: 'none', width: "30px", height: '30px' }} type="button" onClick={() => handleSearchDinner(menuData._id, day.day)}><IoIosAddCircleOutline /></Button>
                                            </Accordion.Body>
                                            <Accordion.Body>
                                                {
                                                    day.recipeDinnerId && recipes[day.recipeDinnerId] ?

                                                        <RecipeMenu recipe={recipes[day.recipeDinnerId]} />
                                                        :

                                                        <p className="mt-5 bigger">No recipe added yet</p>
                                                }
                                            </Accordion.Body>
                                        </div>

                                    </Col>
                                </Row>
                            </Accordion.Item>

                        </Accordion>
                    ))}

                <br /><br />

                <MenuEdit existingMenuData={menuData} onUpdateMenu={handleUpdateMenu} />

            </Container>
    )

}

export default NewMenuForm





