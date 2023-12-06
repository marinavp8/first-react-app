import { Card, Button, Container, Row, Col } from "react-bootstrap"
import edamamService from "../../services/edamam.services"
import { useState } from "react"
import Carousel2 from "../Carousel/Carousel2"
import vegan from "../../assets/vegan.png"
import vege from "../../assets/vege.png"
import glu from "../../assets/glu-free.png"
import fod from "../../assets/fodmap-free.png"
const HealthyMeals = () => {

    const [recipes, setRecipes] = useState([])

    const getHealthyMeals = (selectedHealthy) => {
        edamamService
            .getHealthRecipe(selectedHealthy)
            .then((response) => setRecipes(response.data.hits))
            .catch(err => console.log(err))

    }

    const healthyParams = [
        { label: 'vegan', value: 'vegan', img: vegan },
        { label: 'vegetarian', value: 'vegetarian', img: vege },
        { label: 'gluten-free', value: 'gluten-free', img: glu },
        { label: 'fodmap-free', value: 'fodmap-free', img: fod },
    ]

    return (
        <Container>
            <Row className="mb-5">

                {healthyParams.map((health, index) => (
                    <Col md={3} key={index}>
                        <Card style={{ width: '18rem', cursor: 'pointer', margin: '10px' }}>
                            <Card.Img variant="top" src={health.img} />
                            <Card.Body className="d-flex justify-content-center align-items-center">
                                <Button
                                    variant="outline-success"
                                    type="submit"
                                    onClick={() => {
                                        getHealthyMeals(health.value)
                                    }}>
                                    {health.label}
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                ))}
            </Row>
            <Row>
                {/* <CardResults recipes={healthyMeals} /> */}
                <Carousel2 recipes={recipes} />
            </Row>


        </Container>



    )




}

export default HealthyMeals