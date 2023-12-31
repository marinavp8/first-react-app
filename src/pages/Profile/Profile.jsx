import { useContext, useState } from "react"
import MenuList from "../../components/MenuList/MenuList"
import { Container, Row, Col, Image, Button, Offcanvas, Accordion } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.contexts"
import EditProfile from "../../components/EditProfile/EditProfile"
import '../Profile/Profile.css'
import FavouriteRecipes from "../../components/FavouriteRecipes/FavouriteRecipes"
import { Link } from "react-router-dom"
import Basket from "../../assets/basket-fill.svg"
import List from "../../components/List/List"

const ProfilePage = () => {

    const { loggedUser } = useContext(AuthContext)

    const [editShow, setEditShow] = useState(false)
    const handleEditClose = () => setEditShow(false)
    const handleEditShow = () => {
        setIngrListShow(false)
        setEditShow(true)
    }
    const [ingrListShow, setIngrListShow] = useState(false)
    const handleIngrListClose = () => setIngrListShow(false)
    const handleIngrListShow = () => {
        setEditShow(false)
        setIngrListShow(true)
    }

    return (

        <Container className="mt-5">

            <Row>

                <Col className="mb-5">
                    <Image src={loggedUser.avatar} roundedCircle style={{ width: 200 }} />
                </Col>

                <Col>
                    <h3 className="mb-3">Hi,{loggedUser.username}</h3>

                    <p className="pm-4 mt-3" >{loggedUser.email}</p>


                    <Button style={{ backgroundColor: 'rgb(58, 125, 19)', border: 'none' }} onClick={handleEditShow} className="me-4">Edit Profile</Button>

                    {
                        (loggedUser.role === 'ADMIN') &&

                        <>
                            <Link to={`/users`} className="btn btn-outline-success btn-sm pb-2 me-3" > Users</Link>

                        </>

                    }

                    <Offcanvas show={editShow} onHide={handleEditClose}>

                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className="p-4">{loggedUser.username}'s Profile</Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <EditProfile />
                        </Offcanvas.Body>

                    </Offcanvas>

                    <Button style={{ backgroundColor: 'rgb(58, 125, 19)', border: 'none' }} onClick={handleIngrListShow} className="me-4">
                        <img src={Basket}></img>
                    </Button>
                    <Offcanvas show={ingrListShow} onHide={handleIngrListClose} placement={'end'}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className="p-4">{loggedUser.username}'s List</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <List />
                        </Offcanvas.Body>
                    </Offcanvas>

                </Col>

            </Row >
            <Row>

                <Col>
                    <Accordion defaultActiveKey="1" className="mb-4 mt-5">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>My Menus</Accordion.Header>
                            <Accordion.Body>
                                <MenuList />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col >

                <Col>
                    <Accordion defaultActiveKey="1" className="mb-4 mt-5">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>My Favourite recipes</Accordion.Header>
                            <Accordion.Body>
                                <FavouriteRecipes />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>

            </Row >

        </Container >
    )
}

export default ProfilePage