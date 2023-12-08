import { useState } from "react"
import edamamService from "../../../services/edamam.services"
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap"
import foto from '../../../assets/heropage2.png'

const FilteredVegetarian = () => {

    const [recipes, setRecipes] = useState([])

    const [selectedOption, setSelectedOption] = useState('')

    const getRecipe = (health) => {

        edamamService
            .getHealthRecipe(health)
            .then(response => setRecipes(response.data.hits))
            .catch(err => console.log(err))

    }

    const placeOptions = [
        'vegan',
        'vegetarian'
    ]

    const pressChange = e => {

        const { value } = e.currentTarget

        setSelectedOption(value)
    }

    const pressImput = e => {
        e.preventDefault()
        getRecipe(selectedOption)

    }

    return (
        <div>
            <Card style={{ width: "18rem", margin: "auto" }}>
                <Card.Img variant="top" src={foto} alt="Foto de ejemplo" />
                <Card.Body>
                    <Card.Title>
                        <h4>Are you...?</h4>
                    </Card.Title>

                    <Form onSubmit={pressImput} style={{ maxWidth: "800px", margin: "auto" }}>
                        <Form.Group className="mb-3" >
                            <Form.Select
                                name="options"
                                onChange={pressChange}
                                className="form-select"
                                style={{ width: '200px', margin: '0 auto' }}
                                value={selectedOption}
                            >
                                {placeOptions.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </Form.Select>

                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>

            <Container >
                {recipes.map((recipe) => {
                    const { uri: urlUri } = recipe.recipe
                    let startPos = urlUri.length - 32
                    let id = urlUri.slice(startPos)

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

export default FilteredVegetarian