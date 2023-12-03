
import { useState } from 'react'
import eggOn from '../../assets/egg-fill.svg'
import eggOff from '../../assets/egg-fried.svg'
import { Button } from 'react-bootstrap'

const EggButton = () => {

    const [like, setLike] = useState(false)

    const handleLike = () => {
        setLike(!like)
    }

    return (
        <Button className='eggButton' variant="dark" onClick={handleLike}>
            <img src={like ? eggOff : eggOn} alt='eggs' />

        </Button>
    )

}

export default EggButton