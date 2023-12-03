import { Container } from "react-bootstrap"
import DetailsRecipe from "../../components/FilteredRecipe/DetailsRecipe/DetailsRecipe"


const RecipeDetails = () => {
    return (

        <>
            <Container >
                <div >
                    <h2>Recipe Details</h2>
                    <DetailsRecipe />

                </div>
            </Container>
        </>
    )
}

export default RecipeDetails