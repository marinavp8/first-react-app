import { Link } from 'react-router-dom'


const Navigation = () => {


    return (
        <>
            <Link to={'/signup'} className='nav-link'>Sign up</Link>
            <Link to={'/'} className='nav-link'>What's on your fridge?</Link>

            <Link to={'/login'} className='nav-link'>Log in</Link>
            <Link to={'/createmenu'} className='nav-link'>Create menu</Link>
            <Link to={'/menulist'} className='nav-link'>Menu list</Link>

            <Link to={'/search/results'} className='nav-link'> Filtros </Link>
        </>

    )
}

export default Navigation