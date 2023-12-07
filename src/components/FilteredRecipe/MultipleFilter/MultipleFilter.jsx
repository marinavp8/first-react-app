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
        console.log(queryData)

    }

    const pressImput = e => {
        e.preventDefault()
        getRecipe(queryData)
        console.log(queryData)
    }



    return (
        <div >
            <Form onSubmit={pressImput} style={{ maxWidth: "800px", margin: "auto" }} className="d-flex align-items-start ms-5 ">
                <Container>
                    <Form.Group className="mb-3 focus">
                        <Row>
                            <Col md={2}>
                                <Form.Control className="focus" type="text" name='ingredient' value={queryData.ingredient} onChange={pressChange} placeholder="ingredient" />
                            </Col>

                            <Col md={2}>
                                <Form.Control className="focus" type="text" name='calories' value={queryData.calories} onChange={pressChange} placeholder="calories" />
                            </Col>
                            <Col md={2}>
                                <Form.Control className="focus" type="text" name='time' value={queryData.time} onChange={pressChange} placeholder="time" />
                            </Col>
                            <Col md={2}>
                                <Form.Control className="focus" type="text" name='health' value={queryData.health} onChange={pressChange} placeholder="health" />
                            </Col>
                            <Col md={2}>
                                <Form.Control className="focus" type="text" name='mealtype' value={queryData.mealtype} onChange={pressChange} placeholder="mealtype" />
                            </Col>

                            <Col md={2}>
                                <Button variant="outline-success" type="submit"><GrLinkNext /></Button>
                            </Col>

                        </Row>
                    </Form.Group>
                </Container>
            </Form>



            <Container >
                <CardResults recipes={recipes} />
            </Container>


        </div >

    )
}

export default MultipleFilter