import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.contexts'

import { Container, Navbar, Nav } from 'react-bootstrap'


const Navigation = () => {

    const { loggedUser, logout } = useContext(AuthContext)


    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" className='mb-5' expand="lg">
                <Container>
                    <Link to={'/'} className='nav-link'><Navbar.Brand href="#home">recipes-for-all App</Navbar.Brand></Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Link to={'/fridge'} className='nav-link'>What's on your fridge?</Link>

                            <Link to={'/createmenu'} className='nav-link'>Create menu</Link>

                            <Link to={'/search/results'} className='nav-link'> Filtros </Link>


                            {
                                loggedUser
                                    ?
                                    <>
                                        <Link to={'/menulist'} className='nav-link'>Menu list</Link>

                                        <span className='nav-link' onClick={logout}>Cerrar sesión</span>

                                        <Link to={'/profile'} className='nav-link'>Perfil</Link>


                                    </>
                                    :
                                    <>
                                        {/* <Link to={'/signup'} className='nav-link'>Registro</Link> */}

                                        <Link to={'/login'} className='nav-link'>Inicio de sesión</Link>
                                    </>
                            }



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>

    )
}

export default Navigation










