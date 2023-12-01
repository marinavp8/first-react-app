import { useState } from "react"
import edamamService from "../../services/edamam.services"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "react-bootstrap"
import menuService from "../../services/menu.services"

const FilteredLunch = () => {

    const navigate = useNavigate()


    const [recipes, setRecipes] = useState([])
    const [ingredient, setIngredient] = useState('')
    const getRecipe = (ingredient) => {

        edamamService
            .getLunchRecipe(ingredient)
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
    const params = useParams()
    const [addRecipe, setaddRecipe] = useState(null)

    const handleComeBack = (id) => {
        const realId = (id.slice(-32))
        console.log(realId)

        menuService
            .editLunchMenu(realId, params)
            .then(response => { console.log(response.data); navigate(`/createmenu/${params.menuId}`) })
            // .then(response => setaddRecipe(response.data.hits))
            .catch(err => console.log(err))
    }

    return (
        <div>

            <form onSubmit={pressImput}>
                <label> COMIDA buscar por ingrediente:
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

export default FilteredLunch