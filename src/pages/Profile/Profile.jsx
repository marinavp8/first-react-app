import { useContext, useState } from "react"
import MenuList from "../../components/MenuList/MenuList"

import { Container, Row, Col, Image, Button, Offcanvas } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.contexts"
import EditProfile from "../../components/EditProfile/EditProfile"


const ProfilePage = () => {

    const { loggedUser } = useContext(AuthContext)

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (

        <Container>

            <Row>

                <Col >
                    <Image src={loggedUser.avatar} roundedCircle />
                </Col>

                <Col>
                    <h1>{loggedUser.username}</h1>

                    <Button variant="primary" onClick={handleShow} className="me-2">
                        Editar
                    </Button>

                    <Offcanvas show={show} onHide={handleClose} >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>{loggedUser.username}</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            {/* <Image src={loggedUser.avatar} style={{ width: '100px' }} roundedCircle />

                            <p>{loggedUser.username}</p>
                            <p>{loggedUser.email}</p> */}
                            <EditProfile />
                        </Offcanvas.Body>

                    </Offcanvas>

                </Col>

            </Row>

            <hr />

            <MenuList />

        </Container>
    )
}

export default ProfilePage