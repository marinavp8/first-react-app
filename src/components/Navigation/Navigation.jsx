import { Link } from 'react-router-dom'

const Navigation = () => {


    return (
        <>
            <p>What's on your fridge?</p>
            <Link to={'/sign-up'} className='nav-link'>Sign up</Link>
            <Link to={'/log-in'} className='nav-link'>Log in</Link>
            <Link to={'/log-in'} className='nav-link'>Log in</Link>
            <Link to={'/log-in'} className='nav-link'>Profile</Link>

            <Link to={'/log-in'} className='nav-link'>Search</Link>
            <Link to={'/log-in'} className='nav-link'>Fit Recipes</Link>
            <Link to={'/log-in'} className='nav-link'>Create your plan</Link>
        </>

    )
}

export default Navigation