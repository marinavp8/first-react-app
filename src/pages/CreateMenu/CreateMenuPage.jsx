
import MenuCreate from "../../components/MenuCreate/MenuCreate"
import { Container } from "react-bootstrap"

const CreateMenuPage = () => {

    return (
        <>
            <Container>
                <div className="d-flex justify-content-center align-items-center" style={{ color: "rgb(58, 125, 19)" }}>

                    <h1>Organize your meals:</h1>

                </div>

                <MenuCreate />

            </Container >


        </>


    )

}


export default CreateMenuPage