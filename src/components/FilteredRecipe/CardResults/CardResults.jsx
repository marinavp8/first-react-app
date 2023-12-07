import { Container, Card, Row, Col } from "react-bootstrap"
import "react-multi-carousel/lib/styles.css"
import { Link } from "react-router-dom"

const CardResults = ({ recipes }) => {

    return (

        <Container className={{ maxHeight: "450px", maxWidth: "200px" }} >

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
                                    <Card.Body className="text-center">
                                        <Card.Title> <h4>{recipe.recipe.label}</h4> </Card.Title>
                                        <Card.Text>
                                            {Math.round(recipe.recipe.calories)}kcal | {recipe.recipe.totalTime} min                                        </Card.Text>
                                        <Link to={`/recipes/${id}`} style={{ backgroundColor: 'rgb(58, 125, 19)', border: 'none', color: 'white' }} className="btn btn-sm mt-4">Details</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
            </Row>

        </Container >
    )
}

export default CardResults