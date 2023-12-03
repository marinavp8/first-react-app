import { useState } from "react"
import edamamService from "../../../services/edamam.services"

const FilteredVegetarian = () => {

    const [recipes, setRecipes] = useState([])

    const [health, setHealth] = useState('')

    const getRecipe = (health) => {

        edamamService
            .getHealthRecipe(health)
            .then(response => setRecipes(response.data.hits))
            .catch(err => console.log(err))

    }

    const pressChange = e => {

        const { value } = e.currentTarget

        setHealth(value)
    }

    const pressImput = e => {
        e.preventDefault()
        getRecipe(health)

    }

    return (
        <div>

            <form onSubmit={pressImput} className="mb-3 text-center">
                <label> Are you vegeterian/vegan/etc?
                </label>

                <input type="text" value={health} onChange={pressChange} />


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

export default FilteredVegetarian