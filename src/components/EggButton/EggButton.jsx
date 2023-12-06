
import { useEffect, useState, useContext } from 'react'
import eggOn from '../../assets/egg-fill.svg'
import eggOff from '../../assets/egg-fried.svg'
import { Button } from 'react-bootstrap'
import eggServices from '../../services/egg.services'

const EggButton = (id) => {

    const [like, setLike] = useState(false)


    const verifyFavourite = () => {

        eggServices
            .addFav(id)
            .then(() => console.log(id))
            .catch(err => console.log(err))

    }


    const handleLike = () => {

        setLike(!like)
        verifyFavourite()
    }

    return (
        <Button className='eggButton' variant="dark" onClick={handleLike}>
            <img src={like ? eggOff : eggOn} alt='eggs' />

        </Button>
    )

}

export default EggButton