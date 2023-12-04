import { useState } from "react"
import edamamService from "../../../services/edamam.services"
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap"
import foto from '../../../assets/heropage2.png'
import CardResults from "../CardResults/CardResults"
import Carousel2 from "../../Carousel/Carousel2"

const MultipleIng = () => {

    const [ingredient, setIngredient] = useState()
    const [recipes, setRecipes] = useState([])

    const getMultiple = (ingredient) => {

        edamamService
            .getMultiple(ingredient)
            .then(response => setRecipes(response.data.hits))
            .catch(err => console.log(err))

    }
    const pressChange = e => {

        const { value } = e.currentTarget

        setIngredient(value)
    }

    const pressImput = e => {
        e.preventDefault()
        getMultiple(ingredient)

    }



    return (
        <div>



            <Form onSubmit={pressImput} style={{ maxWidth: "800px", margin: "auto" }} >
                <Form.Group className="mb-3" >
                    <Form.Control type="text" value={ingredient} onChange={pressChange} placeholder="eggs" />
                    <div className=" d-flex justify-content-center mt-3">
                        <Button variant="success" type="submit">Search</Button>
                    </div>

                </Form.Group>
            </Form>



            {/* 
            <Card style={{ width: "18rem", margin: "auto" }}>
                <Card.Img variant="top" src={foto} alt="Foto de ejemplo" />
                <Card.Body>
                    <Card.Title>
                        <h4>What do you have in your fridge?</h4>
                    </Card.Title>
                    <Form onSubmit={pressImput} style={{ maxWidth: "800px", margin: "auto" }}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" value={ingredient} onChange={pressChange} />
                            <div className="d-grid mt-3">
                                <Button variant="dark" type="submit">
                                    Let's search
                                </Button>
                            </div>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card> */}

            <Container >
                {recipes.map((recipe) => {
                    const { uri: urlUri } = recipe.recipe;
                    let startPos = urlUri.length - 32;
                    let id = urlUri.slice(startPos);

                    return (






                        <Container>
                            <CardResults recipes={recipes} />
                            <Carousel2 />

                        </Container>
                    )
                })}
            </Container>

        </div >
    )
}

export default MultipleIng