import { useContext, useEffect, useState } from "react"
import usersServices from "../../services/users.services"
import Loader from "../Loader/Loader"
import { Container, Button } from "react-bootstrap"

const AdminProfile = () => {

    const [usersData, setUsersData] = useState()

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
                                <p>{elm.username}</p>

                                <Button onClick={() => deleteUser(elm._id)} variant="success" >Delete User </Button>

                            </div>

                        )
                    })
            }

        </Container>

    )

}

export default AdminProfile