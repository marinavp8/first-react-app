import { useState } from "react"
import edamamService from "../../services/edamam.services"

import { Form, Button, Container, Row, Col, Card } from "react-bootstrap"

import { Link } from "react-router-dom";





const RecipieFilteredIng = () => {

    const [ingredient, setIngredient] = useState('')

    const [recipes, setRecipes] = useState([])


    const getRecipe = (ingredient) => {

        edamamService
            .getRecipes(ingredient)
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



    return (
        <div>
            <Container className="text-center mt-4">
                <Form onSubmit={pressImput} style={{ maxWidth: "800px", margin: "auto" }}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Ingredientes</Form.Label>
                        <Form.Control type="text" value={ingredient} onChange={pressChange} />
                        <div className="d-grid mt-3">
                            <Button variant="dark" type="submit">enviar</Button>
                        </div>
                    </Form.Group>
                </Form>
            </Container>

            <Container>

                <Row xs={2} md={3} className="g-4">

                    {
                        recipes.map((recipe) => {
                            const urlUri = recipe.recipe.uri
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
                                                <p>esto es el id {id}</p>
                                            </Card.Text>
                                            <Link to={`/recipes/${id}`} className="btn btn-dark btn-sm">ver detalles</Link>
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


export default RecipieFilteredIng





