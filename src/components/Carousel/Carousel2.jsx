import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Container, Card, Button } from "react-bootstrap"
import heroPage from '../../assets/heropage2.png'
import { Link } from "react-router-dom"
import "./Carousel2.css"

const Carousel2 = ({ recipes }) => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    }

    return (

        <Carousel
            className="text-center mt-5"
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {recipes.map((recipe) => {
                const { uri: urlUri } = recipe.recipe
                let startPos = urlUri.length - 32
                let id = urlUri.slice(startPos)
                return (
                    <div key={id} className=" text-center mb-5">
                        <Card style={{ width: '18rem' }} className="ml-5">
                            <Card.Img variant="top" src={recipe.recipe.images.SMALL.url} />
                            <Card.Body>
                                <Card.Title>{recipe.recipe.label}</Card.Title>
                                <Card.Text>
                                    {Math.round(recipe.recipe.calories)}kcal | {recipe.recipe.totalTime} min
                                </Card.Text>
                                <div className="d-flex justify-content-center align-items-center">
                                    <Button style={{ backgroundColor: 'rgb(58, 125, 19)', border: 'none' }}> <Link to={`/recipes/${id}`} className="no-link-style" >Details</Link></Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </Carousel>

    )
}

export default Carousel2


