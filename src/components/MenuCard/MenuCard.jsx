import { Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import MenuDelete from "../MenuDelete/MenuDelete"

const MenuCard = ({ name, _id }) => {
    return (
        <Col lg={{ span: 6 }} md={{ span: 6 }}>
            <article className='mb-3'>
                <Card>
                    <Card.Body>
                        <Card.Title className="text-center">{name}</Card.Title>
                        <div className="d-grid">
                        </div>
                    </Card.Body>
                    <div className="text-center">
                        <Container>
                            <Row>
                                <Col >
                                    <MenuDelete />
                                </Col>

                                <Col>
                                    <Link to={`/createmenu/${_id}`} className="btn btn-outline-success btn-sm pb-2" >Details</Link>

                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Card>
            </article>
        </Col>
    )
}

export default MenuCard