import { Container, Card, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"


const CardResults = ({ recipes }) => {

    return (
        <Container >
            <Row xs={1} md={3} className="g-4">
                {
                    recipes.map((recipe) => {
                        const { uri: urlUri } = recipe.recipe
                        let startPos = urlUri.length - 32;
                        let id = urlUri.slice(startPos)
                        return (
                            <Col>
                                <Card style={{ width: '18rem' }} className="mt-5">
                                    <Card.Img variant="top" src={recipe.recipe.images.SMALL.url} />
                                    <Card.Body>
                                        <Card.Title> <h4>{recipe.recipe.label}</h4> </Card.Title>
                                        <Card.Text>
                                            <p>Type :{recipe.recipe.cuisineType} </p>
                                            <p>Perfect for {recipe.recipe.mealType}! </p>
                                        </Card.Text>
                                        <Link to={`/recipes/${id}`} className="btn btn-dark btn-sm mt-4">ver detalles</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
            </Row>
        </Container>
    )
}

export default CardResults