import { Card, Button, Container, Row, Col } from "react-bootstrap"
const HealthyMeals = () => {

    return (

        <Container>
            <Row className="mt-5">


                <Col md={3}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <div className="d-flex justify-content-center align-items-center">

                                <Button variant="success">Vegan</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <div className="d-flex justify-content-center align-items-center">

                                <Button variant="success">Vegan</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <div className="d-flex justify-content-center align-items-center">

                                <Button variant="success">Vegan</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <div className="d-flex justify-content-center align-items-center">

                                <Button variant="success">Vegan</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container >
    )
}

export default HealthyMeals