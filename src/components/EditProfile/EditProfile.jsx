
import { useContext } from "react"
import { Col, Container, FloatingLabel, Form, Image } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.contexts"

const EditProfile = () => {

    const { loggedUser } = useContext(AuthContext)

    return (
        <Container>
            <Col>
                <Image src={loggedUser.avatar} roundedCircle />

                <FloatingLabel
                    controlId="floatingInput"
                    label="email"
                    className="mb-3"
                >
                    <Form.Control type="email" value={loggedUser.email} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>

            </Col>
        </Container>
    )

}

export default EditProfile