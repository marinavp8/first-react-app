import { useState } from "react"
import edamamService from "../../services/edamam.services"

const FilteredByPlace = () => {

    const [recipes, setRecipes] = useState([])

    const [place, setPlace] = useState('')

    const getRecipe = (place) => {

        edamamService
            .getFilteredByPlace(place)
            .then(response => setRecipes(response.data.hits))
            .catch(err => console.log(err))

    }

    const pressChange = e => {

        const { value } = e.currentTarget

        setPlace(value)
    }

    const pressImput = e => {
        e.preventDefault()
        getRecipe(place)
    }





    return (
        <div className="mb-3 text-center">

            <form onSubmit={pressImput} >
                <label className="form-label"> Donde comemos hoy?
                </label >
                <select
                    name="opciones"
                    onChange={pressChange}
                    className="form-select"
                    style={{ width: '200px', margin: '0 auto' }}>
                    <option value='American' >American</option>
                    <option value='Asian' > Asian</option>
                    <option value='British' > British</option>
                    <option value='Caribbean' >Caribbean</option>
                    <option value='Central Europe' > Central Europe</option>
                    <option value='Chinese' > Chinese</option>
                    <option value='French' > French</option>
                    <option value='Indian' >Indian</option>
                    <option value='Italian' > Italian</option>
                    <option value='Japanese' > Japanese</option>
                    <option value='Mediterranean' > Mediterranean</option>
                    <option value='Mexican' >Mexican</option>
                    <option value='South American' > South American</option>

                </select>

                <button type='submit' className="btn btn-outline-secondary btn-sm"> Enviar </button>
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

export default FilteredByPlace