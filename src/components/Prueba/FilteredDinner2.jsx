import { useState } from "react"
import edamamService from "../../services/edamam.services"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Form, Card, Row, Col, Container } from "react-bootstrap"
import menuService from "../../services/menu.services"
import CardRcp from "../CardRcp/CardRcp"

const FilteredDinner = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [recipes, setRecipes] = useState([])
    const [ingredient, setIngredient] = useState('')
    const getRecipe = (ingredient) => {

        edamamService
            .getDinnerRecipe(ingredient)
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
            .editDinnerMenu(realId, params)
            .then((response) => navigate(`/createmenu/${params.menuId}`))
            .catch(err => console.log(err))
    }

    return (
        <div>

            <form onSubmit={pressImput}>

                {/* <Form.Label htmlFor="inputPassword5">Tell me an ingredient and let yourself go:</Form.Label>
                <Form.Control
                    type="text"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    value={ingredient} onChange={pressChange}
                /> */}

                <Container>
                    <div className="d-flex justify-content-center">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Serch by ingredients:</Form.Label>
                            <Form.Control type="text" className="mb-3" placeholder="eggs" value={ingredient} onChange={pressChange} />
                            <figure className="d-flex justify-content-center">
                                <Button style={{ backgroundColor: 'rgb(58, 125, 19)', border: 'none' }} type="submit" >
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

export default FilteredDinner