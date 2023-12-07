import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.contexts'
import "./Navigation.css"
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'


const Navigation = () => {

    const { loggedUser, logout } = useContext(AuthContext)

    const navigate = useNavigate()


    const handleLogout = () => {
        logout()
        navigate('/')
    }


    return (
        <>
            <Navbar bg="white" data-bs-theme="light" className='mb-5 mt-2' expand="lg">

                <div className='ms-5'>
                    <Link to={'/'} className='nav-link'><Navbar.Brand href="#home"><img src="../src/assets/logo-rec.png" alt="logo" className='imglogo' /></Navbar.Brand></Link>
                </div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto mt-3">
                        <Link to={'/createmenu'} className='nav-link size' style={{ color: 'rgb(58, 125, 19)', fontWeight: "200px", fontSize: "18px" }}>Weekly menu</Link>
                        <Link to={'/search/results'} className='nav-link size' style={{ fontSize: "18px" }}> Advanced filters </Link>
                        <Link to={'/aboutUs'} className='nav-link size ' style={{ fontSize: "18px" }}> About</Link>
                    </Nav>



                    {
                        loggedUser
                            ?
                            <>
                                <Navbar.Text className="justify-content-end ">
                                    <NavDropdown
                                        title={loggedUser && <Navbar.Text> <p style={{ fontSize: "16px" }}>Hi, {loggedUser.username} ! </p></Navbar.Text>}
                                        id={`offcanvasNavbarDropdown-expand`}

                                    >
                                        <NavDropdown.Item href={'/profile'} style={{ fontSize: "16px" }}>Profile</NavDropdown.Item>
                                        <NavDropdown.Item onClick={handleLogout} style={{ fontSize: "16px" }}>Log out </NavDropdown.Item>

                                    </NavDropdown>
                                </Navbar.Text>

                            </>
                            :
                            <div className='me-5'>
                                <Navbar.Text className="justify-content-end  ">
                                    <Link to={'/login'} className='nav-link' style={{ fontSize: "16px" }}>Log in</Link>
                                </Navbar.Text>
                            </div>
                    }

                </Navbar.Collapse>


            </Navbar >

        </>

    )

}

export default Navigation










