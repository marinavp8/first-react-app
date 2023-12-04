import { useState } from "react"

import usersServices from "../../services/users.services"

const AdminProfile = () => {

    const [usersData, setUsersData] = useState({
        username: '',
        email: '',
        role: '',
        avatar: ''

    })

    const handleInputChange = e => {

        const { value, name } = e.target

        setUsersData({ ...data, [name]: value })
    }


    const getAllUsers = () => {

        usersServices
            .getAllUsers()
            .then(response => console.log(response))
            .catch(err => console.log(err))

    }


    return (
        <>

            <h1>FUNCIONOOO</h1>



        </>
    )

}

export default AdminProfile