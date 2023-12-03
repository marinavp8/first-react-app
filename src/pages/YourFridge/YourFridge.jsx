import { Container } from "react-bootstrap"
import RecipieFilteredIng from "../../components/FilteredRecipe/RecipieFilteredIng"
import "./YourFridge.css"

const YourFridge = () => {
    return (

        <>
            <Container className="background">
                <div className="centrar">
                    <h1>whats on your fridge?</h1>
                    <RecipieFilteredIng />

                </div>
            </Container>
        </>
    )
}

export default YourFridge