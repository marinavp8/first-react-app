import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";


function RecipeMenu({ recipe }) {

    const { uri: urlUri } = recipe
    let startPos = urlUri.length - 32
    let id = urlUri.slice(startPos)

    return (

        <div className='mt-5 d-flex justify-content-center' >
            {
                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={recipe.images.SMALL.url} />
                    <Card.Body>
                        <Card.Title>{recipe.label}</Card.Title>
                        <Card.Text>
                            {recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)}Kcal|{recipe.totalTime}min</Card.Text>
                    </Card.Body>
                    <figure className=" text-center mb-4">
                        <Button variant="success"> <Link to={`/recipes/${id}`} className="no-link-style" >Details</Link></Button>
                    </figure>
                </Card>
            }
        </div >
    )
}

export default RecipeMenu