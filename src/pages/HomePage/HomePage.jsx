import { Link } from "react-router-dom"
import logo from '../../assets/dishdashlogo.png'
import "./HomePage.css"
import { Container } from "react-bootstrap"


const HomePage = () => {

    return (

        <div className="backgroundHome">
            <Container className="centerHome">

                <Link to={'/fridge'} className='nav-link'> <h1>Whats in your fridge?</h1> </Link>
                <img className="logo" src={logo}></img>

            </Container>

        </div>
    )
}


export default HomePage
