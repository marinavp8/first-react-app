import { useState } from "react"
import edamamService from "../../../services/edamam.services"

const FilteredDinner = () => {

    const [recipes, setRecipes] = useState([])

    const [ingredient, setIngredient] = useState('')

    const getRecipe = (ingredient) => {

        edamamService
            .getDinnerRecipe(ingredient)
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

    }

    return (
        <div>

            <form onSubmit={pressImput} className="mb-3 text-center">
                <label> CENA buscar por ingrediente:
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

export default FilteredDinner