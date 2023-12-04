import { useState } from "react"
import edamamService from "../../../services/edamam.services"
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

import foto from '../../../assets/plato.png'




const FilteredByPlace = () => {

    const [recipes, setRecipes] = useState([])

    const [place, setPlace] = useState('')

    const getRecipe = (place) => {

        edamamService
            .getFilteredByPlace(place)
            .then(response => setRecipes(response.data.hits))
            .catch(err => console.log(err))

    }

    const pressChange = e => {

        const { value } = e.currentTarget

        setPlace(value)
    }

    const pressImput = e => {
        e.preventDefault()
        getRecipe(place)
    }

    return (

        <div className="mb-3 text-center">
            <Card style={{ width: "18rem", margin: "auto" }}>
                <Card.Img variant="top" src={foto} alt="Foto de ejemplo" />
                <Card.Body>
                    <Card.Title>
                        <h4>Time for dinner! ingredient?</h4>
                    </Card.Title>
                    <Form onSubmit={pressImput} className="mb-3">
                        <Form.Group>
                            <Form.Label className="form-label"> Global Delights </Form.Label>
                            <Form.Select
                                name="opciones"
                                onChange={pressChange}
                                className="form-select"
                                style={{ width: '200px', margin: '0 auto' }}
                            >
                                <option value='American'>American</option>
                                <option value='Asian'>Asian</option>
                                <option value='British'>British</option>
                                <option value='Caribbean'>Caribbean</option>
                                <option value='Central Europe'>Central Europe</option>
                                <option value='Chinese'>Chinese</option>
                                <option value='French'>French</option>
                                <option value='Indian'>Indian</option>
                                <option value='Italian'>Italian</option>
                                <option value='Japanese'>Japanese</option>
                                <option value='Mediterranean'>Mediterranean</option>
                                <option value='Mexican'>Mexican</option>
                                <option value='South American'>South American</option>
                            </Form.Select>
                        </Form.Group>
                        <div className="d-grid mt-3">
                            <Button type='submit' variant="dark">Enviar</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            <Container>

                <Row xs={2} md={3} className="g-4">

                    {
                        recipes.map((recipe) => {
                            const { uri: urlUri } = recipe.recipe
                            let startPos = urlUri.length - 32;
                            let id = urlUri.slice(startPos)
                            return (
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={recipe.recipe.images.SMALL.url} />
                                        <Card.Body>
                                            <Card.Title> <h4>{recipe.recipe.label}</h4> </Card.Title>
                                            <Card.Text>
                                                <p>Type :{recipe.recipe.cuisineType} </p>
                                                <p>Perfect for {recipe.recipe.mealType}! </p>
                                            </Card.Text>
                                            <Link to={`/recipes/${id}`} className="btn btn-dark btn-sm mt-4">ver detalles</Link>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                </Row>
            </Container>

        </div>


    )
}
export default FilteredByPlace