import { useContext, useState } from "react"
import MenuList from "../../components/MenuList/MenuList"
import { Container, Row, Col, Image, Button, Offcanvas, Accordion } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.contexts"
import EditProfile from "../../components/EditProfile/EditProfile"
import '../Profile/Profile.css'
import FavouriteRecipes from "../../components/FavouriteRecipes/FavouriteRecipes"
import { Link } from "react-router-dom"


const ProfilePage = () => {

    const { loggedUser } = useContext(AuthContext)

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (

        <Container className="mt-5">

            <Row>

                <Col className="mb-5">
                    <Image src={loggedUser.avatar} roundedCircle style={{ width: 200 }} />
                </Col>

                <Col>
                    <Row><h3 className="mb-3">Hi, {loggedUser.username}</h3></Row>

                    <Row>
                        <p className="pm-4" >{loggedUser.email}</p>
                    </Row>

                    <Button variant="success" onClick={handleShow} className="me-4">Edit Profile</Button>

                    {
                        (loggedUser.role === 'ADMIN') &&

                        <>
                            <Link to={`/users`} className="btn btn-outline-success btn-sm pb-2" >Ver usuarios</Link>

                        </>

                    }

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


                </Col >
                <Col>

                    <Accordion defaultActiveKey="1" className="mb-4">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>My Favourite recipes</Accordion.Header>
                            <Accordion.Body>

                                <FavouriteRecipes />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>

            </Row >


        </Container>
    )
}

export default ProfilePage