import { useEffect, useState } from "react"
import commentService from "../../services/comment.services"

const PostedComments = ({ id }) => {

    const [comment, setComment] = useState([])

    const getComment = () => {
        const recipeCommented = id
        commentService
            .getComments(recipeCommented)
            .then(response => {

                setComment(response.data)
                console.log('comentarioooooooooooooooooooooo', response.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {

        getComment(id)
    }, [])



    return (
        !comment
            ?
            <Loader />
            :
            <div>
                <h2>Comments:</h2>
                <ul>
                    {comment.map(comment => (
                        <li key={comment._id}>{comment.comment}</li>
                    ))}
                </ul>
            </div>
    )
}

export default PostedComments