import { useState } from "react"
import edamamService from "../../services/edamam.services"

import { Form, Button, Card, Container, Row, Col, CardGroup } from "react-bootstrap"

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

            <Form onSubmit={pressImput}>
                <Form.Group className="mb-3" >
                    <Form.Label>Ingredientes</Form.Label>
                    <Form.Control type="text" value={ingredient} onChange={pressChange} />
                    <div className="d-grid">
                        <Button variant="dark" type="submit">enviar</Button>
                    </div>
                </Form.Group>
            </Form>


            <div>

                <Container >
                    <Row xs={2} md={3} className="g-4">
                        {
                            recipes.map((recipe) => {
                                return (

                                    <Col>

                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={recipe.recipe.images.SMALL.url} />
                                            <Card.Body>
                                                <Card.Title> <h4>{recipe.recipe.label}</h4> </Card.Title>
                                                <Card.Text>
                                                    <p>Type :{recipe.recipe.cuisineType} </p>
                                                    <p>Perfect for {recipe.recipe.mealType} !</p>
                                                </Card.Text>
                                                <Button variant="dark">ver detalles</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                )
                            })

                        }
                    </Row>
                </Container>
            </div>

        </div >

    )
}

export default RecipieFilteredIng

{/* <div>

<form onSubmit={pressImput}>
    <label> Ingrediente:
    </label>

    <input type="text" value={ingredient} onChange={pressChange} />


    <button type='submit'> Enviar </button>
    <div>
        {
            recipes.map((recipe) => {
                return <img src={recipe.recipe.images.SMALL.url} alt="img" />
            })
        }
    </div>
</form>
</div> */}