import { useEffect, useState } from "react"
import commentService from "../../services/comment.services"
import Loader from "../Loader/Loader"

const PostedComments = ({ recipeId }) => {

    const [comments, setComments] = useState()

    useEffect(() => {
        loadComments()
    }, [])

    const loadComments = () => {

        commentService
            .getComments(recipeId)
            .then(({ data }) => {
                setComments(data)
            })
            .catch(err => console.log(err))
    }





    return (
        !comments
            ?
            <Loader />
            :
            <div>
                <h2>Comments:</h2>
                <ul>
                    {comments.map(comment => (
                        <li key={comment._id}>{comment.comment}</li>
                    ))}
                </ul>
            </div>
    )
}

export default PostedComments