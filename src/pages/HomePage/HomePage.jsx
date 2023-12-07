import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import heroPage from '../../assets/heropage2.png'
import "./HomePage.css"




const HomePage = () => {
    return (
        <div className="backgroundHome ">
            <Container className="centerHome" >
                <Row>
                    <Col >
                        <p className='bold'>What's on your fridge?</p>
                        <h5 className='mb-5'>Whether you're looking for healthy recipes, or ideas on how to use leftovers from your fridge, we've numerous recipes to choose from, so you'll be able to find the perfect dish.</h5>
                        <Button style={{ backgroundColor: 'rgb(58, 125, 19)', border: 'none' }}><Link to={'/fridge'} className='nav-link'> <h5>Search Recipes</h5> </Link></Button>
                    </Col>
                    <Col className="text-end">
                        <img className="img-fluid" src={heroPage}></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default HomePage
