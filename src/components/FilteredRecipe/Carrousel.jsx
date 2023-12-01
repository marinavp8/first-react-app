import { useState } from "react"
import edamamService from "../../services/edamam.services"

import { Form, Button, Container, Row } from "react-bootstrap"


import Carousel from 'react-bootstrap/Carousel';



const CarouselFunc = () => {

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
                        <Form.Label className="form">Ingredientes</Form.Label>
                        <Form.Control className="sc-cyRfQX sc-lnAgIa feypbo cJByGc" type="text" value={ingredient} onChange={pressChange} />
                        <div className="d-grid mt-3">
                            <Button variant="dark" type="submit">enviar</Button>
                        </div>
                    </Form.Group>
                </Form>
            </Container>

            <div>

                <Container >
                    <Row xs={4} md={1} className="g-4">
                        <Carousel data-bs-theme="dark">
                            {
                                recipes.map((recipe) => {

                                    const urlUri = recipe.recipe.uri
                                    let startPos = urlUri.length - 32;
                                    let id = urlUri.slice(startPos)

                                    return (


                                        <Carousel.Item >
                                            <img
                                                style={{ maxHeight: "300px", objectFit: "cover" }}
                                                className="d-block w-80 mx-auto mb-5"
                                                src={recipe.recipe.images.REGULAR.url}
                                                alt='img'
                                            />

                                            <Carousel.Caption>
                                                <h5 className="mt-5">Type :{recipe.recipe.cuisineType} </h5>
                                                <p>Perfect for {recipe.recipe.mealType}!</p>
                                                <p>Time :{recipe.recipe.totalTime} mins</p>
                                            </Carousel.Caption>

                                        </Carousel.Item>

                                    )
                                })}
                        </Carousel>
                    </Row>
                </Container>
            </div>

        </div >


    )


}



export default CarouselFunc





