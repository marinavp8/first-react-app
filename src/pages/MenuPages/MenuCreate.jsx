import { Container } from "react-bootstrap"
import NewMenuForm from "../../components/MenuCreate/MenuCreate"

const MenuCreate = () => {
    return (

        <Container>
            <h2>Create your weekly menu: </h2>
            <NewMenuForm />
        </Container>
    )
}


export default MenuCreate