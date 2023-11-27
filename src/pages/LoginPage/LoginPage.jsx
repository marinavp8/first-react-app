import { Col, Container, Row } from "react-bootstrap"
import LoginForm from "../../components/LoginForm/LoginForm"

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

        </Container>
    )
}


export default LoginPage