import { useState, useContext, useEffect } from "react"
import { AuthContext } from '../../contexts/auth.contexts'
import usersServices from "../../services/users.services"
import edamamService from "../../services/edamam.services"

const FavouriteRecipes = () => {

    const { loggedUser } = useContext(AuthContext)
    const [favRecips, setFavRecipes] = useState([])  // en fav recipes hay un array con los ids de las recetas q tengo como  fav
    const [objectReipe, setObjectRecipe] = useState()

    useEffect(() => {

        getMyFavsByRecipe()

    }, [])

    const getMyFavsByRecipe = () => {

        usersServices
            .getOneUser(loggedUser._id)
            .then(({ data }) => data.favouriteRecipies)
            .then(response => response.map(recipeId => {

                return edamamService.getOneRecipe(recipeId)
            }))

            .then(response => {
                console.log(response)
                const recipe = data.recipe
                // forEach(recipe => {
                //     return recipe
                // }
            })

            .catch(err => console.log(err))
    }




















    // const getRecipe = () => {
    //     console.log(favRecips)
    //     Promise
    //         .all(
    //             favRecips?.map(recipeid => {
    //                 return edamamService.getOneRecipe(recipeid)
    //             })
    //         )
    //         .then(recipesData => {
    //             recipesData.forEach(({ data }) => {

    //                 setObjectRecipe(data.recipe)
    //                 console.log('----------------------------------------------', data.recipe.label)
    //                 console.log('----------------------------object------------------', objectReipe)


    //             })
    //         })
    //         .catch(err => console.log(err))
    // }


    return (
        !objectReipe
            ?
            <p>loading</p>
            :
            <p>mis favs</p>
    )
}

export default FavouriteRecipes