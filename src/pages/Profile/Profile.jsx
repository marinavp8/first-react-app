import { useContext } from "react"
import MenuList from "../../components/MenuList/MenuList"

import { Container, Row, Col, Image } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.contexts"

const ProfilePage = () => {

    const { loggedUser } = useContext(AuthContext)

    return (

        <Container>

            <Row>

                <Col xs={6} md={4}>

                    <Image src={loggedUser.avatar} roundedCircle />

                    {/* <Link to={'/menulist'} className='nav-link'>My menus</Link> */}

                </Col>

                <Col>

                    <h1> Este es tu perfil,{loggedUser.username}</h1>

                    <h2> Datos de: {loggedUser.username}</h2>

                </Col>

            </Row>

            <hr />

            <MenuList />

        </Container>
    )
}

export default ProfilePage