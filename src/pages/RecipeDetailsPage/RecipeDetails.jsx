import edamamService from "../../services/edamam.services"

const RecipeDetails = () => {


    edamamService
    .getOneRecipe(uri)
    .then(response => console.log(response.data.hits))
    .catch(err => console.log(err))
    


    return (
        <h1>Explore your Recipe!</h1>
    )
}


export default RecipeDetails