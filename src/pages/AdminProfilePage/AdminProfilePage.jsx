import { useContext, useEffect, useState } from "react"
import usersServices from "../../services/users.services"
import Loader from "../../components/Loader/Loader"
import { Container, Button, Card, Col, Row } from "react-bootstrap"
import { AuthContext } from '../../contexts/auth.contexts'

const AdminProfilePage = () => {

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
                    <Row>
                        {
                            usersData.map((elm, i) => {
                                return (
                                    <Col key={i}>
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
                                )
                            })}
                    </Row>
            }
        </Container>
    )

}
export default AdminProfilePage