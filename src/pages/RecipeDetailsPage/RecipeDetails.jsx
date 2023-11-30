//import DetailsRecipe from "../../components/FilteredRecipe/DetailsRecipe/DetailsRecipe"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import edamamService from "../../services/edamam.services"


const RecipeDetails = () => {


    const { id } = useParams()
    const [recipe, setRecipe] = useState()



    const getDetailRecipe = (id) => {

        edamamService
            .getOneRecipe(id)
            .then(({ data }) => {
                setRecipe(data.recipe)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {

        getDetailRecipe(id)

    }, [])




    return (
        !recipe
            ?
            <h1>loading</h1>
            :
            <>
                <h1>Explore your Recipe!</h1>
                <img src={recipe.images.SMALL.url} />
                <hr />
                <p>{recipe.mealType}</p>
                <hr />
                <p>{recipe.dishType}</p>



            </>

    )
}


export default RecipeDetails