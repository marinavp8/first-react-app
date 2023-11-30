// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// import edamamService from "../../../services/edamam.services"

// const DetailsRecipe = () => {

//     const { id } = useParams()
//     const [recipe, setRecipe] = useState([])



//     const getDetailRecipe = (id) => {

//         edamamService
//             .getOneRecipe(id)
//             .then(response => console.log(response))
//             .catch(err => console.log(err))
//     }

//     useEffect(() => {

//         getDetailRecipe()

//     }, [])






//     return (
//         // <img src={recipe.images.SMALL.url} alt="img" />
//         <p>holi</p>
//     )
// }

// export default DetailsRecipe