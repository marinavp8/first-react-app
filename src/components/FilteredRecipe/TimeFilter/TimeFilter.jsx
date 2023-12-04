import { useState } from "react"
import edamamService from "../../../services/edamam.services"
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap"
import foto from '../../../assets/heropage2.png'
import CardResults from "../CardResults/CardResults"


const TimeFilter = () => {

    const [recipes, setRecipes] = useState([])

    const [time, setTime] = useState('')

    const getRecipe = (time) => {

        edamamService
            .getRecipeByTime(time)
            .then(response => setRecipes(response.data.hits))
            .catch(err => console.log(err))

    }

    const pressChange = e => {

        const { value } = e.currentTarget

        setTime(value)
    }

    const pressImput = e => {
        e.preventDefault()
        getRecipe(time)

    }

    return (
        <div>
            <Card style={{ width: "18rem", margin: "auto" }}>
                <Card.Img variant="top" src={foto} alt="Foto de ejemplo" />
                <Card.Body>
                    <Card.Title>
                        <h4>Hoy much time do you have?</h4>
                    </Card.Title>
                    <Form onSubmit={pressImput} style={{ maxWidth: "800px", margin: "auto" }}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" value={time} onChange={pressChange} />
                            <div className="d-grid mt-3">
                                <Button variant="dark" type="submit">
                                    Let's search
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

export default TimeFilter