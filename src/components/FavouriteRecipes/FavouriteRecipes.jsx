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
                setObjectRecipe(recipesInfo)
            })
            .catch(err => console.log(err))
    }

    return (

        objectRecipe === null
            ?
            <p>Loading...</p>
            :
            objectRecipe.map((recipe, i) => {
                const { uri: urlUri } = recipe
                let startPos = urlUri.length - 32;
                let id = urlUri.slice(startPos)
                return (
                    <>
                        <Col key={i}>
                            <Card.Title> <h4>{recipe.label}</h4> </Card.Title>
                            <Link to={`/recipes/${id}`} className="btn" style={{ backgroundColor: 'rgb(58, 125, 19)', color: 'white', border: 'none' }}>Details</Link>
                        </Col>
                    </>
                )
            })
    )
}

export default FavouriteRecipes