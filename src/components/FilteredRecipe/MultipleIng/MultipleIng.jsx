import { useState } from "react"
import edamamService from "../../../services/edamam.services"

const MultipleIng = () => {

    const [ingredient, setIngredient] = useState()
    const [recipes, setRecipes] = useState([])

    const getMultiple = (ingredient) => {

        edamamService
            .getMultiple(ingredient)
            .then(response => setRecipes(response.data.hits))
            .catch(err => console.log(err))

    }
    const pressChange = e => {

        const { value } = e.currentTarget

        setIngredient(value)
    }

    const pressImput = e => {
        e.preventDefault()
        getMultiple(ingredient)

    }

    return (
        <div>

            <form onSubmit={pressImput} className="mb-3 text-center">
                <label> Buscar por ingredientes
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

export default MultipleIng