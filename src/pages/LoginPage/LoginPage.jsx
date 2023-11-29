import { Col, Container, Row } from "react-bootstrap"
import LoginForm from "../../components/LoginForm/LoginForm"
import { Link } from "react-router-dom"

const LoginPage = () => {

    return (

        <Container>

            <Row>

                <Col md={{ span: 6, offset: 3 }}>

                    <h1> Acceso</h1>

                    <hr />

                    <LoginForm />

                </Col>


            </Row>

            <Link to={'/signup'} className='nav-link'>Not logged! Sign up here!</Link>

        </Container>
    )
}


export default LoginPage