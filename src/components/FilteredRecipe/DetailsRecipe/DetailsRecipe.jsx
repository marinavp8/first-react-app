import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import edamamService from "../../../services/edamam.services"
import Loader from "../../../components/Loader/Loader"

import CreateComment from '../../../components/Comments/CreateComment'

const DetailsRecipe = () => {
    const { id } = useParams()
    const [recipe, setRecipe] = useState()


    const getDetailRecipe = (id) => {

        edamamService
            .getOneRecipe(id)
            .then(({ data }) => {
                setRecipe(data.recipe)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {

        getDetailRecipe(id)

    }, [])




    return (
        !recipe
            ?
            <Loader />
            :
            <>

                <h1>Explore your Recipe!!!!!</h1>
                <img src={recipe.images.SMALL.url} />
                <hr />
                <h1>mealtype:{recipe.mealType[0]}</h1>
                <hr />
                <h1>{recipe.dishType}</h1>
                <hr />
                <h1>Ingredients:</h1>
                <ul>
                    {
                        recipe.ingredientLines.map((ingredient, _id) => {
                            return (
                                <li>
                                    <p>{ingredient}</p>

                                </li>
                            )
                        })
                    }
                </ul>
                <ol>
                    {
                        recipe.ingredients.map((step, _id) => {
                            return (
                                <li>
                                    <p>  Prepare :{step.text}</p>


                                </li>
                            )
                        })
                    }
                </ol>

                <CreateComment />
                <hr></hr>
                <hr></hr>



            </>

    )
}

export default DetailsRecipe