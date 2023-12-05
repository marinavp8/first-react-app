import { Container } from "react-bootstrap"
import RecipieFilteredIng from "../../components/FilteredRecipe/ RecipieFilteredIng/RecipieFilteredIng"
import "./YourFridge.css"
import HealthyMeals from "../../components/HealthyMeals/HealthyMeals"
import MultipleIng from "../../components/FilteredRecipe/MultipleIng/MultipleIng"
import FilteredByPlace from "../../components/FilteredRecipe/FilteredByPlace/FilteredByPlace"

const YourFridge = () => {
    return (

        <>
            <Container className="background">
                <div className="centrar">
                    <h2 className="mb-5 mt-5">Search through 1.7+ million recipes</h2>
                    <MultipleIng />
                </div>
            </Container>
            <div className=" mb-5 mt-5">
                <h3 className="text-center mb-5 mt-5">By health concerns</h3>
                <HealthyMeals />
            </div>
            <div className=" mb-5 mt-5">
                <h3 className="text-center">Around the world</h3>
                <FilteredByPlace />
            </div>
        </>
    )
}

export default YourFridge