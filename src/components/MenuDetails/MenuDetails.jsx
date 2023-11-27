import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"


const MenuDetails = ({ _id, name }) => {

    console.log("eyyyyyy", name)
    return (
        <Col lg={{ span: 3 }} md={{ span: 6 }}>
            <article className='CoasterCard mb-3'>
                <Card>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <div className="d-grid">
                        </div>
                    </Card.Body>
                    <Link to={`/menu/${_id}`} className="btn btn-dark btn-sm">Edit</Link>
                    <Link to={`/menu/${_id}`} className="btn btn-dark btn-sm">Delete</Link>
                </Card>
            </article>
        </Col>
    )
}

export default MenuDetails