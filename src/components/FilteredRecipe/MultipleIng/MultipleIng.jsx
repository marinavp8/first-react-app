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
                    <div className=" d-flex justify-content-center mt-5 mb-5">
                        <Button variant="success" type="submit">Search</Button>
                    </div>

                </Form.Group>
            </Form>

            <Carousel2 recipes={recipes} />

        </div >
    )
}

export default MultipleIng