import { useState } from "react"
import edamamService from "../../services/edamam.services"

const RecipieFilteredIng = () => {

    const [ingredient, setIngredient] = useState('')

    const [recipes, setRecipes] = useState([])

    console.log('ahora esto que es fuera del getRecipe', ingredient)


    const getRecipe = (ingredient) => {

        edamamService
            .getRecipes(ingredient)
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

            <form onSubmit={pressImput}>
                <label> Ingrediente:
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

export default RecipieFilteredIng

{/* 
{
                recipes.map((recipe) => {
                    return <img src={recipe.recipe.images.SMALL.url} alt="" />
                })

            } */}