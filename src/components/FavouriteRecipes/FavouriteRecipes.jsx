import { useState, useContext, useEffect } from "react"
import { AuthContext } from '../../contexts/auth.contexts'
import usersServices from "../../services/users.services"
import edamamService from "../../services/edamam.services"
import { Col, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const FavouriteRecipes = () => {

    const { loggedUser } = useContext(AuthContext)
    const [objectRecipe, setObjectRecipe] = useState(null)


    useEffect(() => {
        getMyFavsByRecipe()
    }, [])

    const getMyFavsByRecipe = () => {

        usersServices
            .getOneUser(loggedUser._id)
            .then(({ data }) => data.favouriteRecipies)
            .then(favouriteRecipies => {
                const promises = favouriteRecipies.map(recipeId => edamamService.getOneRecipe(recipeId))
                return Promise.all(promises)
            })
            .then(recipesData => {
                const recipesInfo = recipesData.map(elm => elm.data.recipe)
                console.log('---------------------------------', recipesInfo)
                setObjectRecipe(recipesInfo)
            })
            .catch(err => console.log(err))
    }

    return (

        !objectRecipe
            ?
            <p>cargando...</p>
            :
            objectRecipe.map((recipe) => {
                const { uri: urlUri } = recipe
                let startPos = urlUri.length - 32;
                let id = urlUri.slice(startPos)
                return (
                    <>
                        <Col>
                            <Card.Title> <h4>{recipe.label}</h4> </Card.Title>
                            <Link to={`/recipes/${id}`} className="btn btn-success btn-sm mt-4">Details</Link>
                        </Col>
                    </>
                )
            })
    )
}

export default FavouriteRecipes