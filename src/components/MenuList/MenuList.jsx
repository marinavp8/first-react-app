import MenuCard from '../MenuCard/MenuCard'
import { Row } from 'react-bootstrap'
import menuService from '../../services/menu.services'
import { useEffect, useState } from 'react'


const MenuList = () => {

    const [menus, setMenus] = useState()

    useEffect(() => {
        getMenus()
    }, [])

    const getMenus = () => {
        menuService
            .getMenus()
            .then(({ data }) => setMenus(data))
            .catch(err => console.log(err))
    }

    return (
        !menus
            ?
            <h1>cargando</h1>
            :
            <>
                <Row>
                    {
                        menus.map(e => <MenuCard {...e} key={e._id} />)
                    }
                </Row>
            </>
    )

}

export default MenuList