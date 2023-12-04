import { useEffect, useState } from "react"
import commentService from "../../services/comment.services"



const PostedComments = ({ recipeId }) => {


    const [comments, setComments] = useState()

    useEffect(() => {
        loadComments()
    }, [])


    const loadComments = () => {

        commentService
            .getComments(recipeId)
            .then(({ data }) => {
                console.log("este es el comment----", data)
                setComments(data)
            })
            .catch(err => console.log(err))
    }




    return (
        !comments
            ?
            <p>Not comented yet</p>
            :
            <div>
                <h2>Comments:</h2>
                <ul>
                    {comments.map(comment => (
                        <div key={comment._id}>
                            <img src={comment.owner.avatar} style={{ width: '5%' }} alt="" />
                            <h5>{comment.owner.username}</h5>
                            <p>posted : {comment.comment}</p>

                        </div>

                    ))}
                </ul>
            </div>
    )
}

export default PostedComments