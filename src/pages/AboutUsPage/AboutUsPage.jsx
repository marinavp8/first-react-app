import { Col, Container, Image, Row } from "react-bootstrap"
import lu from '../../assets/lu.jpg'
import valen from '../../assets/valen.jpg'
import marina from '../../assets/marina.jpg'

const AboutUsPage = () => {

    return (
        <Container>

            <Row>

                <h3 style={{ color: 'rgb(58, 125, 19)' }} className="mb-5">Welcome to DishDash!</h3>


                <p>

                    We are a dynamic trio of programming students with a passion for cooking and technology. Our journey began in the university classrooms, where we discovered our shared fascination for simplifying everyday life through digital innovation.

                    Together, we have created DishDash, a recipe search application that not only allows you to find the best and most varied recipes, but also helps you organize your weekly menu. Our goal is to make meal planning easier, faster, and more fun for everyone, regardless of your cooking skill level.

                </p>
                <h5 className="mt-3">Our Mission</h5>
                <p>Our mission is clear: we want to transform the way people interact with cooking. We believe that cooking should be a pleasant and accessible activity, and with DishDash, we aim to eliminate the stress of planning and searching for recipes.
                </p>
                <h5 className="mt-3">Join Our Community</h5>
                <p>Explore our application today and discover the joy of hassle-free cooking! If you have any suggestions or comments, do not hesitate to contact us. We love hearing from our users and are constantly looking for ways to improve your experience.
                </p>
                <p className="mb-5 mt-3" style={{ fontWeight: 'bold' }}>Thank you for being part of our culinary adventure!</p>
                <Col md={4}>

                    <Image src={lu} style={{ width: '250px' }} />
                    <div className="mt-3">
                        <p className="text-center">Lucía</p>
                    </div>

                </Col>

                <Col md={4}>

                    <Image src={valen} style={{ width: '250px' }} />
                    <div className="mt-3 text-center">
                        <p>Valentina</p>
                    </div>

                </Col>

                <Col md={4}>

                    <Image src={marina} style={{ width: '250px' }} />
                    <div className="mt-3 text-center ">
                        <p>Marina</p>
                    </div>

                </Col>
            </Row>

        </Container>
    )

}

export default AboutUsPage