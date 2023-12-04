import { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import commentService from "../../services/comment.services"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

const CreateComment = (getDetailRecipe) => {


    const [data, setData] = useState({ comment: '' })

    const { id } = useParams()



    const handleInputChange = e => {

        const { value, name } = e.target

        setData({ ...data, [name]: value })
    }

    const navigate = useNavigate()


    const handleSubmit = (e) => {

        e.preventDefault()

        commentService
            .postComment({ ...data, recipeCommented: id })
            .then(() => {
                if (getDetailRecipe) {
                    getDetailRecipe(id)
                }
                navigate(`/recipes/${id}`)
            })
            .catch(err => console.log(err))

    }



    return (


        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="comment">
                <Form.Label>Comment:</Form.Label>
                <div style={{ display: 'flex', alignItems: 'center', paddingLeft: 50 }}>
                    <Form.Control style={{ width: 1000 }} type="text" value={data.comment} onChange={handleInputChange} name="comment" />
                    <Button variant="success" type="submit" >Send</Button>
                </div>
            </Form.Group>
            <div className="d-grid">
                <Button variant="dark" type="submit">Send</Button>
            </div>

        </Form >

    )
}

export default CreateComment