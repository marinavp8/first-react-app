import MenuCard from '../MenuCard/MenuCard'
import { Row } from 'react-bootstrap'
import menuService from '../../services/menu.services'
import { useEffect, useState } from 'react'
import { AuthContext } from "../../contexts/auth.contexts"
import { useContext } from "react"
import Loader from "../Loader/Loader"
import { Container, Col } from 'react-bootstrap'

const MenuList = () => {

    const { loggedUser } = useContext(AuthContext)

    const [menus, setMenus] = useState()

    useEffect(() => {
        getMenus()
    }, [])

    const getMenus = () => {

        menuService
            .getMenus(loggedUser._id)
            .then(({ data }) => setMenus(data))
            .catch(err => console.log(err))
    }

    return (
        !menus
            ?
            <Loader />
            :
            <Container>
                <Row>

                    {
                        menus.map(e => {
                            return (
                                <Col lg={{ span: 6 }} md={{ span: 6 }} key={e._id}>
                                    <MenuCard {...e} f={getMenus} />
                                </Col>
                            )
                        })
                    }

                </Row>
            </Container>
    )

}

export default MenuList