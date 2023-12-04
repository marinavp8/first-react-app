import { useContext, useState } from "react"
import MenuList from "../../components/MenuList/MenuList"

import { Container, Row, Col, Image, Button, Offcanvas, Accordion } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.contexts"
import EditProfile from "../../components/EditProfile/EditProfile"

import EggButton from "../../components/EggButton/EggButton"

import '../Profile/Profile.css'


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
                    <Row><h1 className="mb-3">{loggedUser.username}</h1></Row>

                    <Row>
                        <h2 className="pm-4" >Email:</h2>
                        <h3 className="pm-4" >{loggedUser.email}</h3>
                    </Row>

                    <EggButton />

                    <Button variant="dark" onClick={handleShow} className="me-4">Edit</Button>

                    <Offcanvas show={show} onHide={handleClose} >

                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>{loggedUser.username}</Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <EditProfile />
                        </Offcanvas.Body>

                    </Offcanvas>

                </Col>

            </Row>
            <Row>

                <Col>

                    <Accordion defaultActiveKey="1" className="mb-4">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>My Menus</Accordion.Header>
                            <Accordion.Body>
                                <MenuList />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>


                    <Accordion defaultActiveKey="1" className="mb-4">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>My Favourite recipes</Accordion.Header>
                            <Accordion.Body>
                                RECETAS
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </Col >

            </Row >

            <hr />

        </Container>
    )
}

export default ProfilePage