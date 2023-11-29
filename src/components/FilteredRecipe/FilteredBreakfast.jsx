import { useState } from "react"
import edamamService from "../../services/edamam.services"
// import RecipeContext from "../../contexts/recipe.context"
// import { useContext } from "react"


const FilteredBreakfast = () => {

    // const { setRecipeId } = useContext(RecipeContext)

    const [recipes, setRecipes] = useState([])

    const [ingredient, setIngredient] = useState('')

    const getRecipe = (ingredient) => {

        edamamService
            .getBreakfastRecipe(ingredient)
            .then(response => setRecipes(response.data.hits))
            .catch(err => console.log(err))
    }

    const pressChange = e => {

        const { value } = e.currentTarget

        setIngredient(value)
    }

    const pressImput = e => {
        e.preventDefault()
        getRecipe(ingredient)
        // setRecipeId(obtenidoRecipeId)

    }


    return (
        <div>

            <form onSubmit={pressImput}>
                <label> DESAYUNO buscar por ingrediente:
                </label>

                <input type="text" value={ingredient} onChange={pressChange} />


                <button type='submit'> Enviar </button>
                <div>
                    {
                        recipes.map((recipe) => {
                            return <img src={recipe.recipe.images.SMALL.url} alt="img" />
                        })
                    }
                </div>
            </form>
        </div>
    )
}

export default FilteredBreakfast