import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.contexts'
import "./Navigation.css"
import { Container, Navbar, Nav, NavDropdown, NavbarText } from 'react-bootstrap'

const Navigation = () => {

    const { loggedUser, logout } = useContext(AuthContext)

    return (
        <>
            <Navbar bg="white" data-bs-theme="light" className='mb-5' expand="lg">

                <Container>

                    <Link to={'/'} className='nav-link'><Navbar.Brand href="#home"><img src="../src/assets/dishdashlogo.png" alt="logo" className='imglogo' /></Navbar.Brand></Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto">

                            {/* <Link to={'/fridge'} className='nav-link'>What's on your fridge?</Link> */}

                            <Link to={'/createmenu'} className='nav-link'>Weekly menu</Link>

                            <Link to={'/search/results'} className='nav-link'> Advanced filters </Link>

                        </Nav>

                        {
                            loggedUser
                                ?
                                <>
                                    {/* <Link to={'/menulist'} className='nav-link'>Menu list</Link> */}

                                    <Navbar.Text className="justify-content-end">
                                        <NavDropdown

                                            title={loggedUser && <Navbar.Text>¡Hello, {loggedUser.username}!</Navbar.Text>}
                                            id={`offcanvasNavbarDropdown-expand`}
                                        >
                                            <NavDropdown.Item href={'/profile'}>Profile</NavDropdown.Item>
                                            <NavDropdown.Item onClick={logout}>Log out </NavDropdown.Item>

                                        </NavDropdown>
                                    </Navbar.Text>

                                </>
                                :
                                <>
                                    <Navbar.Text className="justify-content-end">

                                        {/* <Link to={'/signup'} className='nav-link'>Registro</Link> */}

                                        <Link to={'/login'} className='nav-link'>Log in</Link>

                                    </Navbar.Text>
                                </>
                        }

                    </Navbar.Collapse>

                </Container>

            </Navbar>

        </>

    )

}

export default Navigation










