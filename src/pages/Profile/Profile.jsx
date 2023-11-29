import { useContext } from "react"
import MenuList from "../../components/MenuList/MenuList"
import { Link } from "react-router-dom"

import { Container, Row, Col } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.contexts"

const ProfilePage = () => {

    const { loggedUser } = useContext(AuthContext)
    return (

        <Container>

            <Row>

                <Col md={{ span: 6, offset: 3 }}>

                    <h1> Este es tu perfil,{loggedUser.username}</h1>

                    <h2> Datos de: {loggedUser.username}</h2>

                    <Link to={'/menulist'} className='nav-link'>My menus</Link>

                    <hr />

                    <MenuList />

                </Col>

            </Row>

        </Container>
    )
}

export default ProfilePage