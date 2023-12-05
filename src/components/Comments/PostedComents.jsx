import { useEffect } from "react"
import { Image, Col, Row, Button } from "react-bootstrap"

import commentService from '../../services/comment.services'

const PostedComments = ({ refreshComments, comments }) => {



    useEffect(() => {
        refreshComments()
    }, [])

    const deleteComment = (commentId) => {
        commentService
            .deleteComment(commentId)
            .then(() => refreshComments())
            .catch(err => console.log(err))
    }

    return (
        !comments
            ?
            <p>Not comented yet</p>
            :
            <div>
                <h3 className="mt-5 mb-5">Comments:</h3>
                <Row xs={1} md={3} className="g-4">
                    {comments.map(comment => (
                        <Col key={comment._id}>

                            <div key={comment._id}>
                                <Button onClick={() => deleteComment(comment._id)} variant="success" >Delete comment </Button>

                            </div>

                            <Image src={comment.owner.avatar} roundedCircle style={{ width: '5%' }} alt="" />
                            <h5>{comment.owner.username} posted : </h5>
                            <p>{comment.comment}</p>

                        </Col>
                    ))}
                </Row>
            </div >
    )
}

export default PostedComments