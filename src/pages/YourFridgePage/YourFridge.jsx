import { Container } from "react-bootstrap"
import RecipieFilteredIng from "../../components/FilteredRecipe/ RecipieFilteredIng/RecipieFilteredIng"
import "./YourFridge.css"
import HealthyMeals from "../../components/HealthyMeals/HealthyMeals"
import MultipleIng from "../../components/FilteredRecipe/MultipleIng/MultipleIng"

const YourFridge = () => {
    return (

        <>
            <Container className="background">
                <div className="centrar">
                    <h2>Search through 1.7+ million recipes</h2>
                    <MultipleIng />

                </div>
            </Container>
            <HealthyMeals />
        </>
    )
}

export default YourFridge