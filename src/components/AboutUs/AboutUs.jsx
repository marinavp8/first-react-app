import { Col, Container, Image } from "react-bootstrap"

import Img from "./../../assets/fondo.jpeg"

const AboutUs = () => {
    return (

        <Container>

            <h1>ABOUT USSSS !!!</h1>


            <p>hbckuehbcubevcgubhdw</p>

            <Col>

                <Image src={Img} style={{ width: '100px' }} />

                <p>Person 1</p>

            </Col>

            <Col>

                <Image src={Img} style={{ width: '100px' }} />

                <p>Person 2</p>

            </Col>

            <Col>

                <Image src={Img} style={{ width: '100px' }} />

                <p>Person 3</p>

            </Col>

        </Container>
    )


}

export default AboutUs