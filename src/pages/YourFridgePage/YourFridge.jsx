import { Container } from "react-bootstrap"
import RecipieFilteredIng from "../../components/FilteredRecipe/ RecipieFilteredIng/RecipieFilteredIng"
import "./YourFridge.css"
import HealthyMeals from "../../components/HealthyMeals/HealthyMeals"

const YourFridge = () => {
    return (

        <>
            <Container className="background">
                <div className="centrar">
                    <h2>Search through 1.7+ million recipes</h2>
                    <RecipieFilteredIng />
                </div>
            </Container>
            <HealthyMeals />
        </>
    )
}

export default YourFridge