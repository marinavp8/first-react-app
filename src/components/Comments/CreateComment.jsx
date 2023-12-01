import { useState } from "react"

import { Form, Button } from "react-bootstrap"

import commentService from "../../services/comment.services"

import { useNavigate } from "react-router-dom"


const CreateComment = () => {

    const [data, setData] = useState({ comment: '' })

    const handleInputChange = e => {

        const { value, name } = e.target

        setData({ ...data, [name]: value })
    }

    const navigate = useNavigate()

    const handleSubmit = e => {

        e.preventDefault()

        commentService
            .postComment(data)
            .then(() => navigate('/fridge'))
            .catch(err => console.log(err))

    }

    return (


        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="comment">
                <Form.Label>Comment:</Form.Label>
                <Form.Control type="text" value={data.comment} onChange={handleInputChange} name="comment" />
            </Form.Group>
            <div className="d-grid">
                <Button variant="dark" type="submit" >Send</Button>
            </div>

        </Form>

    )
}

export default CreateComment