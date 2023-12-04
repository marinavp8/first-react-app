import React from 'react'
import { Card, Button } from 'react-bootstrap'

function RecipeMenu({ recipe }) {
    return (

        <div >
            {
                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={recipe.images.SMALL.url} />
                    <Card.Body>
                        <Card.Title>{recipe.label}</Card.Title>
                        <Card.Text>
                            {recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)}Kcal|{recipe.totalTime}min</Card.Text>
                    </Card.Body>
                    <figure className=" text-center mb-4">
                        <Button variant="outline-success">See Recipe</Button>
                    </figure>
                </Card>
            }
        </div >
    )
}

export default RecipeMenu