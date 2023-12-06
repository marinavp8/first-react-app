import { useContext, useEffect, useState } from "react"
import usersServices from "../../services/users.services"
import Loader from "../Loader/Loader"
import { Container, Button, Card, Col } from "react-bootstrap"
import { AuthContext } from '../../contexts/auth.contexts'

const AdminProfile = () => {

    const [usersData, setUsersData] = useState()

    const { loggedUser } = useContext(AuthContext)

    useEffect(() => {
        getAllUsers()

    }, [])

    const getAllUsers = () => {

        usersServices
            .getAllUsers()
            .then(({ data }) => {
                setUsersData(data)
            })
            .catch(err => console.log(err))

    }

    const deleteUser = (_id) => {

        usersServices
            .deleteUser(_id)
            .then(() => console.log(_id))
            .catch(err => console.log(err))
    }

    return (

        <Container>

            {
                !usersData
                    ?
                    <Loader />
                    :
                    usersData.map((elm, i) => {
                        return (
                            <div key={i}>
                                <Col>
                                    <Card border="success" style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={elm.avatar} />
                                        <Card.Body>
                                            <Card.Text> {elm.username}</Card.Text>
                                            {
                                                (loggedUser.role === 'ADMIN') &&

                                                <>
                                                    <Button onClick={() => deleteUser(elm._id)} variant="success" >Delete User </Button>
                                                </>

                                            }
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </div>

                        )
                    })
            }

        </Container>

    )

}

export default AdminProfile



