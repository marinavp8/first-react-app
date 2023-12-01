import { Container } from "react-bootstrap"
import RecipieFilteredIng from "../../components/FilteredRecipe/RecipieFilteredIng"
import "./YourFridge.css"

const YourFridge = () => {
    return (

        <>
            <Container className="background">
                <div className="centrar">
                    <h2>whats on your fridge? Let's search a recipe! </h2>
                    <RecipieFilteredIng />
                </div>
            </Container>
        </>
    )
}

export default YourFridge