import { useContext, useEffect, useState } from "react"

import usersServices from "../../services/users.services"
import { AuthContext } from "../../contexts/auth.contexts"
import Loader from "../Loader/Loader"
import { Container } from "react-bootstrap"

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

    return (

        <Container>

            {

                !usersData
                    ?
                    <Loader />

                    :
                    usersData.map((elm, i) => {
                        return (
                            <p>{elm.username}</p>
                        )
                    })

            }


        </Container>


    )

}

export default AdminProfile