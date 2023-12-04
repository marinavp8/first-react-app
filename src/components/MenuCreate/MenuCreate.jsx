import { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import menuService from "../../services/menu.services"
import edamamService from "../../services/edamam.services"
import { AuthContext } from "../../contexts/auth.contexts"
import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Loader from "../Loader/Loader"
import { Container, Accordion, Row, Col } from "react-bootstrap"
import RecipeMenu from "../RecipeMenu/RecipeMenu"

// TODO: DESACOPLAR

const menuBase = {
    name: "Change me",
    days: [{
        "day": "Monday",
        "recipeBreakfastId": "",
        "recipeLunchId": "",
        "recipeDinnerId": ""
    },
    {
        "day": "Tuesday",
        "recipeBreakfastId": "",
        "recipeLunchId": "",
        "recipeDinnerId": ""
    },
    {
        "day": "Wednesday",
        "recipeBreakfastId": "",
        "recipeLunchId": "",
        "recipeDinnerId": ""
    },
    {
        "day": "Thursday",
        "recipeBreakfastId": "",
        "recipeLunchId": "",
        "recipeDinnerId": ""
    },
    {
        "day": "Friday",
        "recipeBreakfastId": "",
        "recipeLunchId": "",
        "recipeDinnerId": ""
    },
    {
        "day": "Saturday",
        "recipeBreakfastId": "",
        "recipeLunchId": "",
        "recipeDinnerId": ""
    },
    {
        "day": "Sunday",
        "recipeBreakfastId": "",
        "recipeLunchId": "",
        "recipeDinnerId": ""
    }]
}

const newMenuForm = () => {
    // const { loggedUser } = useContext(AuthContext)
    const params = useParams()
    const navigate = useNavigate()
    const [menuData, setMenuData] = useState(null)
    const [menuName, setMenuName] = useState(null)
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
                promises.push(
                    edamamService
                        .getOneRecipe(e.recipeBreakfastId)
                )
            }
            if (e.recipeLunchId) {
                promises.push(
                    edamamService
                        .getOneRecipe(e.recipeLunchId)
                )
            }
            if (e.recipeDinnerId) {
                promises.push(
                    edamamService
                        .getOneRecipe(e.recipeDinnerId)
                )
            }
        })
        Promise.all(promises).then(data => {
            const recipesArray = data.map(e => {
                return e.data.recipe
            })
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

        // menuData.owner = loggedUser._id

        menuService
            .editMenu(menuData)
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

    return (
        !menuData
            ?
            <Loader />
            :
            <Container>
                <Form onSubmit={handleMenuSubmit}>
                    <Form.Label>Menu name:</Form.Label>
                    <Form.Control type="text" value={menuData.name} name="name" onChange={handleInputChange} />
                </Form>
                <br /><br />
                {
                    menuData.days.map((day, index) => (
                        <Accordion >
                            <Accordion.Item eventKey="0">
                                <Row>
                                    <Accordion.Header>{day.day}</Accordion.Header>
                                    <Col>
                                        <Accordion.Body>
                                            Breakfast
                                        </Accordion.Body>
                                        <Accordion.Body>
                                            <Button variant="dark" type="button" onClick={() => handleSearch(menuData._id, day.day)}>Add</Button>
                                        </Accordion.Body>
                                        <Accordion.Body>
                                            {
                                                day.recipeBreakfastId && recipes[day.recipeBreakfastId] ?
                                                    <RecipeMenu recipe={recipes[day.recipeBreakfastId]} />
                                                    :
                                                    <p>No recipe added yet</p>
                                            }
                                        </Accordion.Body>
                                    </Col>
                                    <Col>
                                        <Accordion.Body>
                                            Lunch
                                        </Accordion.Body>
                                        <Accordion.Body>
                                            <Button variant="dark" type="button" onClick={() => handleSearchLunch(menuData._id, day.day)}>Add</Button>
                                        </Accordion.Body>
                                        <Accordion.Body>
                                            {
                                                day.recipeLunchId && recipes[day.recipeLunchId] ?
                                                    <div>
                                                        <RecipeMenu recipe={recipes[day.recipeLunchId]} />
                                                    </div>
                                                    :
                                                    <p>No recipe added yet</p>
                                            }
                                        </Accordion.Body>
                                    </Col>
                                    <Col>
                                        <Accordion.Body>
                                            Dinner
                                        </Accordion.Body>
                                        <Accordion.Body>
                                            <Button variant="dark" type="button" onClick={() => handleSearchDinner(menuData._id, day.day)}>Add</Button>
                                        </Accordion.Body>
                                        <Accordion.Body>
                                            {
                                                day.recipeDinnerId && recipes[day.recipeDinnerId] ?

                                                    <RecipeMenu recipe={recipes[day.recipeDinnerId]} />
                                                    :

                                                    <p>No recipe added yet</p>
                                            }
                                        </Accordion.Body>
                                    </Col>
                                </Row>
                            </Accordion.Item>

                        </Accordion>
                    ))}

                <br /><br />
                <Container className="d-flex justify-content-center">

                    <Button variant="success" type="submit">Create menu</Button>
                </Container>
                <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br />
                {
                    <pre>
                        {JSON.stringify(recipes, null, 2)}
                    </pre>
                }

            </Container>
    )

}

export default newMenuForm





