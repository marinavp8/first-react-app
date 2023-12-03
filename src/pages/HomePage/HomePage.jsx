import { Link } from "react-router-dom"
import logo from '../../assets/dishdashlogo.png'
import "./HomePage.css"
import { Container } from "react-bootstrap"



const HomePage = () => {



    return (

        <div className="backgroundHome">

            <div className="centrarHome">
                {/* <h1>Explore foods from around the globe.</h1> */}
                {/* <h2>Whether you're looking for healthy recipes, or ideas on how to use leftovers from your fridge, we've numerous recipes to choose from, so you'll be able to find the perfect dish.</h2> */}
                <h2 className="heading heading--level1">
                    Explore foods from around the globe
                    <span className="gradient--text">.</span>
                </h2>
                <p className="paragraph color--gray--light">
                    Whether you're looking for healthy recipes, or ideas on how to use
                    leftovers from your fridge, we've numerous recipes to choose from,
                    so you'll be able to find the perfect dish.
                </p>
                <CarouselFunc />
            </div>

            <Container className="centerHome">

                <h1>Whats on your fridge?</h1>

                <Link to={'/fridge'} className='nav-link'> <h1>Whats in your fridge?</h1> </Link>
                <img className="logo" src={logo}></img>

            </Container>


        </div>
    )
}


export default HomePage
