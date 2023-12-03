import { Container } from "react-bootstrap"
import RecipieFilteredIng from "../../components/FilteredRecipe/ RecipieFilteredIng/RecipieFilteredIng"
import "./YourFridge.css"

const YourFridge = () => {
    return (

        <>
            <Container className="background">
                <div className="centrar">
                    <h2>whats in your fridge?</h2>
                    <RecipieFilteredIng />
                    

                </div>
            </Container>
        </>
    )
}

export default YourFridge