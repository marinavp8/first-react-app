import { useState } from "react"
import edamamService from "../../../services/edamam.services"
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap"
import european from "../../../assets/european.png"
import france from "../../../assets/france.png"
import greek from "../../../assets/greek.png"
import indian from "../../../assets/indian.png"
import italian from "../../../assets/italian.png"
import japanese from "../../../assets/japanese.png"
import southamerican from "../../../assets/southamerican.png"
import british from "../../../assets/british.png"
import american from "../../../assets/american.png"
import caribean from "../../../assets/caribean.png"
import chinase from "../../../assets/chinase.png"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


import foto from '../../../assets/heropage2.png'

import CardResults from "../CardResults/CardResults"

const FilteredByPlace = () => {

    const [recipes, setRecipes] = useState([])


    const getRecipe2 = (selectedPlace) => {
        edamamService
            .getFilteredByPlace(selectedPlace)
            .then(response => { setRecipes(response.data.hits)})
            .catch(err => console.log(err))
    }

    const places = [
        { label: 'American', value: 'American', img: american },
        { label: 'British', value: 'British', img: british },
        { label: 'Central Europe', value: 'Central Europe', img: european },
        { label: 'Caribbean', value: 'Caribbean', img: caribean },
        { label: 'Chinese', value: 'Chinese', img: chinase },
        { label: 'French', value: 'French', img: france },
        { label: 'Indian', value: 'Indian', img: indian },
        { label: 'Italian', value: 'Italian', img: italian },
        { label: 'Japanese', value: 'Japanese', img: japanese },
        { label: 'Mediterranean', value: 'Mediterranean', img: greek },
        { label: 'Mexican', value: 'Mexican', img: southamerican },

    ]

    return (

        <Container>
            <Row>
                {places.map((place, index) => (
                    <Col md={3} key={index}>
                        <Card style={{ width: '18rem', cursor: 'pointer', margin: '10px' }}>
                            <Card.Img variant="top" src={place.img} />
                            <Card.Body className="d-flex justify-content-center align-items-center">
                                <Button
                                    variant="outline-success"
                                    type="submit"
                                    onClick={() => {
                                        getRecipe2(place.value)
                                    }}>
                                    {place.label}
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                ))}
            </Row>
            <Row>
                <CardResults recipes={recipes} />
            </Row>

        </Container>

    )
}
export default FilteredByPlace