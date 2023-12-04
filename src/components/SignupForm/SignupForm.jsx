import { useState } from "react"
import { useNavigate } from "react-router-dom"
import authService from "../../services/auth.services"
import { Form, Button } from "react-bootstrap"
import uploadServices from "../../services/upload.services"
import FormError from "../FormError/FormError"


const SignupForm = () => {


    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
        avatar: ''
    })
    const [errors, setErrors] = useState([])

    const [loadingIamge, setLoagingImage] = useState(false)

    const handleInputChange = e => {

        const { value, name } = e.target

        setSignupData({ ...signupData, [name]: value })
    }

    const navigate = useNavigate()

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .signup(signupData)
            .then(() => navigate('/login'))
            .catch(err => setErrors(err.response.data.errorMessages))

    }

    const handleFileUpload = e => {

        setLoagingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then((res) => {
                console.log(res)
                setSignupData({ ...signupData, avatar: res.data.cloudinary_url })
                setLoagingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoagingImage(false)
            })
    }

    return (

        <Form onSubmit={handleSubmit} className="mb-5">

            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" value={signupData.username} onChange={handleInputChange} name="username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={signupData.email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={signupData.password} onChange={handleInputChange} name="password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="avatar">
                <Form.Label>Profile image</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>

            <div className="d-flex justify-content-center mt-5">
                <Button variant="success" type="submit" disabled={loadingIamge}>{loadingIamge ? 'Loading ...' : 'Sign Up'}</Button>
            </div>

            {errors.length > 0 && <FormError>{errors.map(elm => <p>{elm}</p>)}</FormError>}


        </Form>

    )

}

export default SignupForm