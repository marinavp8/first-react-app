import { useContext, useEffect } from "react"
import { Image, Col, Row, Button, Container } from "react-bootstrap"
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
                    <Container>

                        <Row className="g-4">

                            {comments.map(comment => (

                                <Col key={comment._id}>

                                    {comment.owner && (


                                        <Col md={2}>
                                            <img src={comment.owner.avatar} style={{ width: '5%' }} alt="" />

                                            <h5>{comment.owner.username}</h5>
                                        </Col>


                                    )}
                                    <Col md={2}>
                                        <p>posted : {comment.comment}</p>
                                    </Col>
                                    {
                                        (loggedUser.role === 'ADMIN') &&

                                        <Col md={2}>
                                            <Button style={{ backgroundColor: 'rgb(58, 125, 19)', border: 'none' }} onClick={() => deleteComment(comment._id)}>Delete comment </Button>
                                        </Col>

                                    }

                                </Col>
                            ))}
                        </Row>

                    </Container>
                </ul>

            </div >
    )
}

export default PostedComments















