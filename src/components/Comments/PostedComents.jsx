import { useEffect, useState } from "react"
import commentService from "../../services/comment.services"
import { Card, Row, Col, Image, Button } from 'react-bootstrap';



const PostedComments = ({ refreshComments, comments }) => {

    useEffect(() => {
        refreshComments()
    }, [])





    return (
        !comments
            ?
            <p>Not comented yet</p>
            :



            comments.map(comment => {



                <Card className="mb-3">
                    <Card.Body>
                        <Row>
                            <Col xs={2} md={1} className="d-flex align-items-center">
                                <Image src={comment.owner.avatar} roundedCircle fluid />
                            </Col>
                            <Col xs={10} md={11}>
                                <Card.Title>{comment.owner.username}:</Card.Title>
                                <Card.Text>{comment.comment}</Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>



            })




        // <div>
        //     <h3 className="mt-5 mb-5">Comments:</h3>
        //     <Row xs={1} md={3} className="g-4">
        //         {comments.map(comment => (
        //             <Col key={comment._id}>

        //                 <div key={comment._id}>
        //                     <Button onClick={() => deleteComment(comment._id)} variant="success" >Delete </Button>

        //                 </div>

        //                 {/* <Image src={comment.owner.avatar} roundedCircle style={{ width: '5%' }} alt="" /> */}
        //                 <h5>{comment.owner.username}: </h5>
        //                 <p>{comment.comment}</p>

        //             </Col>

        //         ))}
        //     </Row>
        // </div >











    )
}

export default PostedComments