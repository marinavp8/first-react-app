import { Col, Container, Image, Row } from "react-bootstrap"
import lu from '../../assets/lu.jpg'
import valen from '../../assets/valen.jpg'
import marina from '../../assets/marina.jpg'

// TODO: ELIMIANR
const AboutUs = () => {

    return (

        <Container>

            <Row>

                <h1 style={{ color: 'rgb(58, 125, 19)' }}>About DishDash</h1>

                <p>IronHack</p>

                <Col md={4}>

                    <Image src={lu} style={{ width: '250px' }} />
                    <div className="d-flex justify-content-center align-items-center">
                        <p>Lucía</p>
                    </div>

                </Col>

                <Col md={4}>

                    <Image src={valen} style={{ width: '250px' }} />
                    <div className="d-flex justify-content-center align-items-center">
                        <p>Valentina</p>
                    </div>

                </Col>

                <Col md={4}>

                    <Image src={marina} style={{ width: '250px' }} />
                    <div className="d-flex justify-content-center ">
                        <p>Marina</p>
                    </div>

                </Col>
            </Row>

        </Container>
    )

}

export default AboutUs