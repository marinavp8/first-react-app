
import { useContext, useState } from "react"
import { Col, Container, FloatingLabel, Form, Image, Button, Row } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.contexts"
import authService from "../../services/auth.services"
import uploadServices from "../../services/upload.services"
import { useNavigate } from "react-router-dom"

const EditProfile = () => {

    const { loggedUser } = useContext(AuthContext)

    const [newSignupData, setNewSignupData] = useState({
        username: '',
        email: '',
        avatar: ''
    })

    const [loadingIamge, setLoagingImage] = useState(false)

    const handleInputChange = e => {

        const { value, name } = e.target
        setLoagingImage({ ...newSignupData, [name]: value })
    }

    const navigate = useNavigate()

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .edit(newSignupData)
            .then(() => navigate('/profile'))
            .catch(err => console.log(err))
    }

    const handleFileUpload = e => {

        setLoagingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then((res) => {
                setNewSignupData({ ...newSignupData, avatar: res.data.cloudinary_url })
                setLoagingImage(false)
            })
            .catch(err => {
                setLoagingImage(false)
            })
    }

    return (

        <Container>
            <Row>
                <Col>
                    <Image src={loggedUser.avatar} style={{ width: '150px' }} roundedCircle />

                    <Form.Group className="p-3" controlId="avatar">
                        <Form.Label>Profile image</Form.Label>
                        <Form.Control type="file" onChange={handleFileUpload} />
                    </Form.Group>

                    <Form onSubmit={handleSubmit}>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="email"
                            className="p-3"
                        >
                            <Form.Control type="email" value={loggedUser.email} name="email" onChange={handleInputChange} />
                        </FloatingLabel>

                        <FloatingLabel controlId="username" label="username" className="p-3">
                            <Form.Control type="text" value={loggedUser.username} name="username" onChange={handleInputChange} />
                        </FloatingLabel>

                        <div className="d-grid p-3">
                            <Button style={{ backgroundColor: 'rgb(58, 125, 19)', border: 'none' }} type="submit" disabled={loadingIamge}>{loadingIamge ? 'Loading ...' : 'Update info'}</Button>
                        </div>

                    </Form>

                </Col>
            </Row>


        </Container>
    )

}

export default EditProfile

