import { useContext, useEffect } from "react"
import { Image, Col, Row, Button } from "react-bootstrap"
import commentService from '../../services/comment.services'
import { AuthContext } from '../../contexts/auth.contexts'

const PostedComments = ({ refreshComments, comments, id }) => {


    const { loggedUser } = useContext(AuthContext)

    useEffect(() => {
        refreshComments(id)
    }, [])

    const deleteComment = (commentId) => {
        commentService
            .deleteComment(commentId)
            .then(() => refreshComments())
            .catch(err => console.log(comments))
    }
    return (

        !comments
            ?
            <p>Not comented yet</p>
            :
            <div>
                <h2>Comments:</h2>
                <ul>
                    <Row xs={1} md={3} className="g-4">
                        {comments.map(comment => (
                            // TODO: DESACOPLAR A COMMENTCARD
                            <div key={comment._id}>

                                {comment.owner && (
                                    <>
                                        <img src={comment.owner.avatar} style={{ width: '5%' }} alt="" />
                                        <h5>{comment.owner.username}</h5>
                                    </>
                                )}
                                <p>posted : {comment.comment}</p>
                                {
                                    (loggedUser.role === 'ADMIN') &&

                                    <>
                                        <Button onClick={() => deleteComment(comment._id)} variant="success" >Delete comment </Button>
                                    </>

                                }

                            </div>
                        ))}
                    </Row>
                </ul>
            </div >
    )
}

export default PostedComments















