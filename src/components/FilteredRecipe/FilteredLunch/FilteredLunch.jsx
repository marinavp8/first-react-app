import { useState } from "react"
import edamamService from "../../../services/edamam.services"
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap"
import foto from '../../../assets/heropage2.png'
import CardResults from "../CardResults/CardResults"

const FilteredLunch = () => {

    const [recipes, setRecipes] = useState([])

    const [ingredient, setIngredient] = useState('')

    const getRecipe = (ingredient) => {

        edamamService
            .getLunchRecipe(ingredient)
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
            <Card style={{ width: "18rem", margin: "auto" }}>
                <Card.Img variant="top" src={foto} alt="Foto de ejemplo" />
                <Card.Body>
                    <Card.Title>
                        <h4>Time for lunch! ingredient?</h4>
                    </Card.Title>
                    <Form onSubmit={pressImput} style={{ maxWidth: "800px", margin: "auto" }}>
                        <Form.Group className="mb-3">

                            <Form.Control type="text" value={ingredient} onChange={pressChange} />
                            <div className="d-grid mt-3">
                                <Button variant="dark" type="submit">
                                    Enviar
                                </Button>
                            </div>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>

            <Container >
                {recipes.map((recipe) => {
                    const { uri: urlUri } = recipe.recipe;
                    let startPos = urlUri.length - 32;
                    let id = urlUri.slice(startPos);

                    return (
                        <Container>
                            <Row>
                                <CardResults recipes={recipes} />
                            </Row>
                        </Container>
                    )
                })}
            </Container>

        </div>
    )
}

export default FilteredLunch