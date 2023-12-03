import { useState } from "react"
import edamamService from "../../../services/edamam.services"

const TimeFilter = () => {

    const [recipes, setRecipes] = useState([])

    const [time, setTime] = useState('')

    const getRecipe = (time) => {

        edamamService
            .getRecipeByTime(time)
            .then(response => setRecipes(response.data.hits))
            .catch(err => console.log(err))

    }

    const pressChange = e => {

        const { value } = e.currentTarget

        setTime(value)
    }

    const pressImput = e => {
        e.preventDefault()
        getRecipe(time)

    }

    return (
        <div>

            <form onSubmit={pressImput} className="mb-3 text-center">
                <label> How long it takes?
                </label>

                <input type="text" value={time} onChange={pressChange} />


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

export default TimeFilter