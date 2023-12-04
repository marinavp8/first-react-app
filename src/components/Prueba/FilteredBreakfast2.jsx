import { useState } from "react"
import edamamService from "../../services/edamam.services"
// import RecipeContext from "../../contexts/recipe.context"
// import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Form, Card, Row, Col, Container } from "react-bootstrap"
import menuService from "../../services/menu.services"


const FilteredBreakfast2 = () => {

    const params = useParams()
    console.log(params)
    // const { setRecipeId } = useContext(RecipeContext)

    const navigate = useNavigate()

    const [recipes, setRecipes] = useState([])

    const [ingredient, setIngredient] = useState('')

    const [addRecipe, setaddRecipe] = useState(null)

    const getRecipe = (ingredient) => {

        edamamService
            .getBreakfastRecipe(ingredient)
            .then(response => { setRecipes(response.data.hits); console.log(console.log(params)) })
            .catch(err => console.log(err))
    }

    const pressChange = e => {

        const { value } = e.currentTarget

        setIngredient(value)
    }

    const pressImput = e => {
        e.preventDefault()
        getRecipe(ingredient)
        // setRecipeId(obtenidoRecipeId)

    }

    const handleComeBack = (id) => {
        const realId = (id.slice(-32))
        console.log(realId)

        menuService
            .editMondayMenu(realId, params)
            .then(response => { console.log(response.data); navigate(`/createmenu/${params.menuId}`) })
            // .then(response => setaddRecipe(response.data.hits))
            .catch(err => console.log(err))
    }

    // const id = recipes.map(recipe => {

    //     const urlUri = recipe.recipe.uri
    //     let startPos = urlUri.length - 32;
    //     let part = urlUri.slice(startPos)
    //     return part
    // })

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
                        {/* <label> Tell me an ingredient and let yourself go:
                        </label>

                        <input type="text" value={ingredient} onChange={pressChange} />
                        <button type='submit'> Search </button> */}

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
                                            <div className=" text-center mb-5">

                                                <Card style={{ width: '18rem' }}>
                                                    <Card.Img variant="top" src={recipe.recipe.images.SMALL.url} />
                                                    <Card.Body>
                                                        <Card.Title>{recipe.recipe.label} </Card.Title>
                                                        <Card.Text>
                                                            {Math.round(recipe.recipe.calories)}kcal | {recipe.recipe.totalTime} min
                                                        </Card.Text>
                                                        <div className="d-flex justify-content-center">
                                                            <Button variant="outline-success" type="button" onClick={() => handleComeBack(recipe.recipe.uri)}>Add</Button>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </div>

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