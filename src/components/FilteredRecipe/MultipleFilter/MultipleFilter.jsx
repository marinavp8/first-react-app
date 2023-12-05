import { useState } from "react"
import edamamService from "../../../services/edamam.services"
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap"
import foto from '../../../assets/heropage2.png'
import CardResults from "../CardResults/CardResults"

const MultipleFilter = () => {

    const [recipes, setRecipes] = useState([])
    console.log("recipes que te devuelve la api en tu estado", recipes)
    const [queryData, setQueryData] = useState({
        ingredient: '',
        health: '',
        mealtype: '',
        calories: '',
        time: ''

    })

    const getRecipe = (queryData) => {
        edamamService
            .getMultipleFiltering(queryData)
            .then(response => {
                setRecipes(response.data.hits)
            })
            .catch(err => console.log(err))
    }

    const pressChange = e => {

        const { value, name } = e.currentTarget
        setQueryData({ ...queryData, [name]: value })

    }

    const pressImput = e => {
        e.preventDefault()
        getRecipe(queryData)

    }

    return (
        <div>
            <Card style={{ width: "18rem", margin: "auto" }}>
                <Card.Img variant="top" src={foto} alt="Foto de ejemplo" />
                <Card.Body>
                    <Card.Title>
                        <h4>filtro Mutiple</h4>
                    </Card.Title>
                    <Form onSubmit={pressImput} style={{ maxWidth: "800px", margin: "auto" }}>
                        <Form.Group className="mb-3">

                            <Form.Control type="text" name='ingredient' value={queryData.ingredient} onChange={pressChange} placeholder="ingredient" />
                            <Form.Control type="text" name='health' value={queryData.health} onChange={pressChange} placeholder="health" />
                            <Form.Control type="text" name='mealtype' value={queryData.mealtype} onChange={pressChange} placeholder="mealtype" />
                            <Form.Control type="text" name='calories' value={queryData.calories} onChange={pressChange} placeholder="calories" />
                            <Form.Control type="text" name='time' value={queryData.time} onChange={pressChange} placeholder="time" />

                            <div className="d-grid mt-3">
                                <Button variant="dark" type="submit">Enviar</Button>
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

export default MultipleFilter