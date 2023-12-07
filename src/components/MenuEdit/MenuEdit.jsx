import { useEffect, useState } from "react"
import { Form, Button } from "react-bootstrap"
import menuService from "../../services/menu.services"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { GrLinkNext } from "react-icons/gr";


const EditMenuForm = ({ existingMenuData, handleUpdateMenu }) => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState(existingMenuData)

    useEffect(() => {
        setFormData(existingMenuData)
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    handleUpdateMenu = e => {
        e.preventDefault()
        const { _id: menuId } = formData
        menuService
            .editMenu(menuId, formData)
            .then(({ data }) => {
                setFormData(data)
                navigate('/menulist')
            })
            .catch(err => console.log(err))
    }

    return (


        <Form onSubmit={handleUpdateMenu}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Menu name</Form.Label>
                <Form.Control type="text" placeholder="Ex: February week 3" onChange={handleChange} name="name" />
            </Form.Group>
            <div className=" d-flex justify-content-center mt-3 mb-5">
                <Button style={{ backgroundColor: 'rgb(58, 125, 19)', border: 'none' }} type="submit">
                    <GrLinkNext style={{ width: "30px", height: '20px' }} />

                </Button>
            </div>
        </Form>
    )
}

export default EditMenuForm





