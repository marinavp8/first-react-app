import { Container } from "react-bootstrap"
import RecipieFilteredIng from "../../components/FilteredRecipe/RecipieFilteredIng"

const YourFridge = () => {
    return (

        <>
            <Container>
                <h2>whats on your fridge? Let's search a recipe! </h2>
                <RecipieFilteredIng />
            </Container>
        </>
    )
}

export default YourFridge