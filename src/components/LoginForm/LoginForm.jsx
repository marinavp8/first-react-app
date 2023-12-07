import { useContext, useState } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.services"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.contexts"

import FormError from "../FormError/FormError"

const LoginForm = () => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const { authenticateUser } = useContext(AuthContext)

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                localStorage.setItem('authToken', data.authToken)
                authenticateUser()
                navigate('/')
            })
            .catch(err => setErrors([err.response.data.errorMessages]))
    }

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={loginData.email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={loginData.password} onChange={handleInputChange} name="password" />
            </Form.Group>

            <div className="d-flex justify-content-center">
                <Button style={{ backgroundColor: 'rgb(58, 125, 19)', border: 'none', width: '100px' }} type="submit">Log in</Button>
            </div>

            {errors.length > 0 &&
                <FormError>{errors.map(elm => <p>{elm}</p>)}</FormError>
            }

        </Form>
    )
}

export default LoginForm