import { useState } from "react"
import edamamService from "../../../services/edamam.services"
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import foto from '../../../assets/plato.png'


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
      ];
    

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
                        <h4>Time for dinner! ingredient?</h4>
                    </Card.Title>
                    
                    <Form onSubmit={pressImput} style={{ maxWidth: "800px", margin: "auto" }}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Are you....?</Form.Label>
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

export default FilteredVegetarian