import { useState } from "react"
import edamamService from "../../../services/edamam.services"
import { Card, Button, Container, Row, Col } from "react-bootstrap"
import marina from '../../../assets/heropage2.png'


const FilteredByPlace = () => {

    const [recipes, setRecipes] = useState([])

    const [place, setPlace] = useState('')

    const getRecipe = (place) => {

        edamamService
            .getFilteredByPlace(place)
            .then(response => setRecipes(response.data.hits))
            .catch(err => console.log(err))

    }

    const pressChange = e => {

        const { value } = e.currentTarget

        setPlace(value)
    }

    const pressImput = e => {
        e.preventDefault()
        getRecipe(place)
    }

    const places = [
        { label: 'American', value: 'American' },
        { label: 'British', value: 'British' },
        { label: 'Central Europe', value: 'Central Europe' },
        { label: 'Caribbean', value: 'Caribbean' },
        { label: 'Chinese', value: 'Chinese' },
        { label: 'French', value: 'French' },
        { label: 'Indian', value: 'Indian' },
        { label: 'Italian', value: 'Italian' },
        { label: 'Japanese', value: 'Japanese' },
        { label: 'Mediterranean', value: 'Mediterranean' },
        { label: 'Mexican', value: 'Mexican' },
        { label: 'South American', value: 'South American' },

    ]

    return (
        // <div className="mb-3 text-center">

        //     <form onSubmit={pressImput} >
        //         <label className="form-label"> Global Delights
        //         </label >

        //         <select
        //             name="opciones"
        //             onChange={pressChange}
        //             className="form-select"
        //             style={{ width: '200px', margin: '0 auto' }}>
        //             <option value='American' >American</option>
        //             <option value='Asian' > Asian</option>
        //             <option value='British' > British</option>
        //             <option value='Caribbean' >Caribbean</option>
        //             <option value='Central Europe' > Central Europe</option>
        //             <option value='Chinese' > Chinese</option>
        //             <option value='French' > French</option>
        //             <option value='Indian' >Indian</option>
        //             <option value='Italian' > Italian</option>
        //             <option value='Japanese' > Japanese</option>
        //             <option value='Mediterranean' > Mediterranean</option>
        //             <option value='Mexican' >Mexican</option>
        //             <option value='South American' > South American</option>

        //         </select>

        //         <button type='submit' className="btn btn-outline-secondary btn-sm"> Enviar </button>
        //         <div>
        //             {
        //                 recipes.map((recipe) => {
        //                     return <img src={recipe.recipe.images.SMALL.url} alt="img" />
        //                 })
        //             }
        //         </div>
        //     </form>
        // </div>
        <Container >
            <h2 className="d-flex justify-content-center align-items-center" style={{ color: "rgb(58, 125, 19)" }}>Around the world</h2>
            <Row>
                {places.map((place, index) => (
                    <Col md={3}>
                        <Card
                            key={index}
                            onClick={() => getRecipe(place.value)}
                            style={{ width: '18rem', cursor: 'pointer', margin: '10px' }}
                        >   <Card.Img variant="top" src={marina} />

                            <Card.Body className="d-flex justify-content-center align-items-center">
                                <Button variant="succes">{place.label}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}

            </Row>




        </Container>




    )
}

export default FilteredByPlace