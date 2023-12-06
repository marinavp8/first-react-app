import { useState } from "react"
import edamamService from "../../services/edamam.services"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Form, Card, Row, Col, Container } from "react-bootstrap"
import menuService from "../../services/menu.services"
const FilteredDinner = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [recipes, setRecipes] = useState([])
    const [ingredient, setIngredient] = useState('')
    const getRecipe = (ingredient) => {

        edamamService
            .getDinnerRecipe(ingredient)
            .then(response => setRecipes(response.data.hits))
            .catch(err => console.log(err))

    }
    const pressChange = e => {

        const { value } = e.currentTarget

        setIngredient(value)
    }
    const pressImput = e => {
        e.preventDefault()
        getRecipe(ingredient)

    }
    const handleComeBack = (id) => {
        const realId = (id.slice(-32))

        menuService
            .editDinnerMenu(realId, params)
            .then((response) => navigate(`/createmenu/${params.menuId}`))
            .catch(err => console.log(err))
    }


    return (
        <div>


            <form onSubmit={pressImput}>




                {/* <Form.Label htmlFor="inputPassword5">Tell me an ingredient and let yourself go:</Form.Label>
                <Form.Control
                    type="text"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    value={ingredient} onChange={pressChange}
                /> */}


                <Container>
                    <div className="d-flex justify-content-center">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Serch by ingredients:</Form.Label>
                            <Form.Control type="text" className="mb-3" placeholder="eggs" value={ingredient} onChange={pressChange} />
                            <figure className="d-flex justify-content-center">
                                <Button variant="success" type="submit" >
                                    Search
                                </Button>
                            </figure>
                        </Form.Group>

                    </div>
                </Container>
                <br /><br /><br />
                <Container>
                    <div>
                        <Row>
                            {
                                recipes.map((recipe) => {
                                    return (
                                        <Col>
                                            <Card style={{ width: '18rem' }}>
                                                <Card.Img variant="top" src={recipe.recipe.images.SMALL.url} />
                                                <Card.Body >
                                                    <Card.Title className="d-flex justify-content-center"> {recipe.recipe.label} </Card.Title>
                                                    <Card.Text className="d-flex justify-content-center">
                                                        {Math.round(recipe.recipe.calories)}kcal | {recipe.recipe.totalTime} min
                                                    </Card.Text>
                                                    <div className="d-flex justify-content-center">
                                                        <Button variant="outline-success" type="button" onClick={() => handleComeBack(recipe.recipe.uri)}>Add</Button>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )

                                })
                            }

                        </Row>
                    </div>
                </Container>
            </form>
        </div>


    )
}

export default FilteredDinner