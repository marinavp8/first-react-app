import { useState } from "react"
import edamamService from "../../services/edamam.services"

const FilteredMeal = () => {

    const [mealType, setMealType] = useState('')
    const [recipes, setRecipes] = useState([])

    const getRecipe = (mealType) => {

        edamamService
            .getRecipeByMeal(mealType)
            .then(response => setRecipes(response.data.hits))
            .catch(err => console.log(err))

    }

    const pressChange = e => {
        const { value } = e.currentTarget
        setMealType(value)
    }

    const pressImput = e => {
        e.preventDefault()
        getRecipe(mealType)

    }


    return (
        <div>

            <form onSubmit={pressImput}>
                <label> Breakfast/Dinner/lunch/snack/teatime:
                </label>

                <input type="text" value={mealType} onChange={pressChange} />


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

export default FilteredMeal