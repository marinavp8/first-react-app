import { useState } from "react"
import edamamService from "../../services/edamam.services"
// import RecipeContext from "../../contexts/recipe.context"
// import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "react-bootstrap"
import menuService from "../../services/menu.services"

const FilteredBreakfast2 = () => {

    const params = useParams()
    console.log(params)
    // const { setRecipeId } = useContext(RecipeContext)

    const navigate = useNavigate()

    const [recipes, setRecipes] = useState([])

    const [ingredient, setIngredient] = useState('')

    const [addRecipe, setaddRecipe] = useState(null)

    const getRecipe = (ingredient) => {

        edamamService
            .getBreakfastRecipe(ingredient)
            .then(response => { setRecipes(response.data.hits); console.log(console.log(params)) })
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

    const handleComeBack = (id) => {
        const realId = (id.slice(-32))
        console.log(realId)

        menuService
            .editMondayMenu(realId, params)
            .then(response => { console.log(response.data); navigate(`/createmenu/${params.menuId}/${params.day}/breakfast/${realId}`) })
            // .then(response => setaddRecipe(response.data.hits))
            .catch(err => console.log(err))
    }

    // const id = recipes.map(recipe => {

    //     const urlUri = recipe.recipe.uri
    //     let startPos = urlUri.length - 32;
    //     let part = urlUri.slice(startPos)
    //     return part
    // })

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
                            return (
                                <div>
                                    <img src={recipe.recipe.images.SMALL.url} alt="img" />
                                    <hr />
                                    <hr />
                                    <hr />
                                    <hr />
                                    <hr />
                                    <Button variant="dark" type="button" onClick={() => handleComeBack(recipe.recipe.uri)}>Añadir</Button>
                                </div>
                            )

                        })
                    }
                </div>
            </form>
        </div>
    )
}

export default FilteredBreakfast2