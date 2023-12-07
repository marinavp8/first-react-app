import { useState } from "react"
import edamamService from "../../services/edamam.services"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Form, Card, Row, Col, Container } from "react-bootstrap"
import menuService from "../../services/menu.services"
import CardRcp from "../CardRcp/CardRcp"

const FilteredBreakfast2 = () => {

    const params = useParams()
    const navigate = useNavigate()
    const [recipes, setRecipes] = useState([])
    const [ingredient, setIngredient] = useState('')

    const getRecipe = (ingredient) => {

        edamamService
            .getBreakfastRecipe(ingredient)
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

    const handleComeBack = (id) => {

        const realId = (id.slice(-32))

        menuService
            .editMondayMenu(realId, params)
            .then(() => navigate(`/createmenu/${params.menuId}`))
            .catch(err => console.log(err))
    }

    return (
        <div>

            <form onSubmit={pressImput}>
                <Container>
                    <div className="d-flex justify-content-center">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Serch by ingredients:</Form.Label>
                            <Form.Control type="text" placeholder="eggs" className="mb-3" value={ingredient} onChange={pressChange} />
                            <figure className="d-flex justify-content-center">
                                <Button variant="success" type="submit" >
                                    Search
                                </Button>
                            </figure>
                        </Form.Group>
                    </div>
                </Container>

                <br /><br /><br />

                <Container>
                    <div>
                        <Row>
                            {
                                recipes.map((recipe) => {
                                    return (
                                        <Col>
                                            <CardRcp recipe={recipe} handleComeBack={handleComeBack} />
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>
                </Container>
            </form>
        </div>
    )
}

export default FilteredBreakfast2