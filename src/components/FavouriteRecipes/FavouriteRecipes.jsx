import { useState, useContext, useEffect } from "react"
import { AuthContext } from '../../contexts/auth.contexts'
import usersServices from "../../services/users.services"

const FavouriteRecipes = () => {

    // const [favoriteRcp, setFavoriteRcp] = useState([])
    // const { user } = useContext(AuthContext)

    // useEffect(() => {

    //     getMyFavs()

    // }, [])

    // const getMyFavs = () => {

    //     usersServices
    //         .getOneUser(user?._id)
    //         .then(({ data }) => {

    //             const { favoriteRcp } = data

    //             setFavoriteRcp(favoriteRcp)

    //         })
    //         .catch(err => console.log(err))

    // }


    return (
        <p>tus recetas favs si dios quiere</p>
    )
}

export default FavouriteRecipes