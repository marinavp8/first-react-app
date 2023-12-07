import { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import commentService from "../../services/comment.services"
import { useParams } from "react-router-dom"

const CreateComment = ({ getDetailRecipe, refreshComments }) => {

    const [data, setData] = useState({ comment: '' })
    const { id } = useParams()

    const handleInputChange = e => {
        const { value, name } = e.target
        setData({ ...data, [name]: value })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        commentService
            .postComment({ ...data, recipeCommented: id })
            .then(() => {
                getDetailRecipe && getDetailRecipe(id)
                refreshComments()
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getDetailRecipe()
    }, [])


    return (
        <Form onSubmit={handleSubmit} className="comment-form">
            <Form.Group className="mb-3" controlId="comment">
                <div style={{ display: 'flex', alignItems: 'center', paddingLeft: 50 }}>
                    <Form.Control
                        style={{ width: 1000 }}
                        type="text" value={data.comment}
                        onChange={handleInputChange}
                        name="comment"
                        className="comment-text-input" />
                    <Button type="submit" className="comment-btn" style={{ backgroundColor: 'rgb(58, 125, 19)', border: 'none' }}> Send</Button>
                </div>
            </Form.Group>
        </Form >
    )
}
export default CreateComment