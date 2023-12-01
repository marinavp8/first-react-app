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
    const { loggedUser } = useContext(AuthContext)
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
        menuData.days.map(e => {

            if (e.recipeBreakfastId) {
                edamamService
                    .getOneRecipe(e.recipeBreakfastId)
                    .then(({ data }) => {
                        setRecipes({ ...recipes, [e.recipeBreakfastId]: data.recipe });
                    })
                    .catch(err => console.log(err))
            }
            if (e.recipeLunchId) {
                edamamService
                    .getOneRecipe(e.recipeLunchId)
                    .then(({ data }) => {
                        setRecipes({ ...recipes, [e.recipeLunchId]: data.recipe });
                    })
                    .catch(err => console.log(err))
            }
            if (e.recipeDinnerId) {
                edamamService
                    .getOneRecipe(e.recipeDinnerId)
                    .then(({ data }) => {
                        setRecipes({ ...recipes, [e.recipeDinnerId]: data.recipe });
                    })
                    .catch(err => console.log(err))
            }
        })
    }, [menuData])



    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setMenuData({ ...menuData, [name]: value })
    }

    const handleMenuSubmit = e => {

        e.preventDefault()

        menuData.owner = loggedUser._id

        menuService
            .createMenu(menuData)
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
                            <Row>
                                <Accordion.Item eventKey="0">
                                    <Col>
                                        <Accordion.Header>{day.day}</Accordion.Header>
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
                                                    <p>no estoy</p>
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
                                                    <RecipeMenu recipe={recipes[day.recipeLunchId]} />
                                                    :
                                                    <p>no estoy</p>
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

                                                    <p>no estoy</p>
                                            }
                                        </Accordion.Body>
                                    </Col>
                                </Accordion.Item>
                            </Row>

                        </Accordion>
                    ))}
                <Button variant="dark" type="submit">Create menu</Button>
                <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br />

                <div className="newMenuForm">
                    <Form onSubmit={handleMenuSubmit}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Menu name:</Form.Label>
                            <Form.Control type="text" value={menuData.name} name="name" onChange={handleInputChange} />
                        </Form.Group>
                        {menuData.days.map((day, index) => (
                            <div key={index}>
                                <h5>{day.day}</h5>
                                <Form.Group className="mb-3">
                                    <Form.Label>Breakfast</Form.Label>
                                    {
                                        day.recipeBreakfastId && recipes[day.recipeBreakfastId] ?
                                            <RecipeMenu recipe={recipes[day.recipeBreakfastId]} />
                                            :

                                            <p>no estoy</p>
                                    }
                                    <br /><br />
                                    <Button variant="dark" type="button" onClick={() => handleSearch(menuData._id, day.day)}>Search</Button>
                                    {/* <Form.Control type="text" value={day.recipeBreakfastId} onChange={(e) => handleDayChange(index, 'recipeBreakfastId', e.target.value)} /> */}
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Lunch </Form.Label>

                                    {
                                        day.recipeLunchId && recipes[day.recipeLunchId] ?
                                            <RecipeMenu recipe={recipes[day.recipeLunchId]} />
                                            :
                                            <p>no estoy</p>
                                    }
                                    <br /><br />
                                    <Button variant="dark" type="button" onClick={() => handleSearchLunch(menuData._id, day.day)}>Buscar</Button>
                                    {/* <Form.Control type="text" value={day.recipeLunchId} onChange={(e) => handleDayChange(index, 'recipeLunchId', e.target.value)} /> */}
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Dinner </Form.Label>
                                    <br /><br />
                                    {
                                        day.recipeDinnerId && recipes[day.recipeDinnerId] ?

                                            <RecipeMenu recipe={recipes[day.recipeDinnerId]} />
                                            :

                                            <p>no estoy</p>
                                    }
                                    <Button variant="dark" type="button" onClick={() => handleSearchDinner(menuData._id, day.day)}>Buscar</Button>

                                    {/* <Form.Control type="text" value={day.recipeDinnerId} onChange={(e) => handleDayChange(index, 'recipeDinnerId', e.target.value)} /> */}
                                </Form.Group>

                            </div>
                        ))}
                        <div className="d-grid">
                            <Button variant="dark" type="submit">Crear menú</Button>
                        </div>
                    </Form>
                </div>


                <pre>{JSON.stringify(recipes, null, 4)}</pre>

            </Container>
    )

}

export default newMenuForm





