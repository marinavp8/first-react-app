import { useState } from "react"
import edamamService from "../../../services/edamam.services"
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap"
import foto from '../../../assets/heropage2.png'
import CardResults from "../CardResults/CardResults"
import ReactSlider from 'react-slider'
import "./MultipleFilter.css"
import { GrLinkNext } from "react-icons/gr";


const MultipleFilter = () => {

    const [recipes, setRecipes] = useState([])
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
                setRecipes(response.data.hits);
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
        <div className="d-flex align-items-start ms-5">

            <Form onSubmit={pressImput} style={{ maxWidth: "800px", margin: "auto" }}>
                <Form.Group className="mb-3">
                    <Row>
                        <Col md={2}>

                            <Form.Control type="text" name='ingredient' value={queryData.ingredient} onChange={pressChange} placeholder="ingredient" />
                        </Col>



                        <Col md={2} >
                            <Form.Select aria-label="Default select example">
                                <option>Health</option>
                                <option value={queryData.health.vegan}>Vegan</option>
                                <option value={queryData.health.vegetarian}>Vegetarian</option>
                                {/* <option value={queryData.health.sugar-conscious}>sugar-conscious</option> */}
                                {/* <option value={queryData.health.low-sugar}>low-sugar</option> */}
                                {/* <option value={queryData.health.gluten-free}>gluten-free</option> */}
                                {/* <option value={queryData.health.keto-friendly}>keto-friendly</option> */}
                                {/* <option value={queryData.health.pork-free}>pork-free</option> */}
                                <option value={queryData.health.pescatarian}>pescatarian</option>
                                <option value={queryData.health.paleo}>paleo</option>
                            </Form.Select>
                        </Col>



                        <Col md={2}>
                            <Form.Select aria-label="Default select example">
                                <option>Meal Type</option>
                                <option value={queryData.mealtype.breakfast}>Breakfast</option>
                                <option value={queryData.mealtype.lunch}>Lunch</option>
                                <option value={queryData.mealtype.dinner}>Dinner</option>
                                <option value={queryData.mealtype.snack}>Snack</option>
                                <option value={queryData.mealtype.teatime}>Teatime</option>
                            </Form.Select>
                        </Col>



                        <Col md={2}>
                            <Form.Control type="text" name='calories' value={queryData.calories} onChange={pressChange} placeholder="calories" />
                        </Col>


                        <Col md={2}>
                            <Form.Control type="text" name='time' value={queryData.time} onChange={pressChange} placeholder="time" />
                        </Col>
                        <Col md={2}>
                            <Button variant="outline-success" type="submit"><GrLinkNext /></Button>
                        </Col>


                        {/* <Form.Control type="text" name='health' value={queryData.health} onChange={pressChange} placeholder="health" /> */}





                        {/* <Form.Control type="text" name='mealtype' value={queryData.mealtype} onChange={pressChange} placeholder="mealtype" /> */}


                    </Row>
                </Form.Group>
            </Form>




            <Container>
                <Row>
                    <CardResults recipes={recipes} />
                </Row>
            </Container>

        </div>

    )
}

export default MultipleFilter