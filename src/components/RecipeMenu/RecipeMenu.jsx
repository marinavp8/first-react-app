import React from 'react'
import { Card } from 'react-bootstrap'

function RecipeMenu({ recipe }) {
    return (

        <div>
            {
                <div>
                    {/* <img
                        src={recipe.images.SMALL.url}
                        alt='img'
                    />
                    <p>{recipe.label}</p>
                    <p>{recipe.dishType}</p> */}



                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={recipe.images.SMALL.url} />
                        <Card.Body>
                            <Card.Title>{recipe.label}</Card.Title>
                            <Card.Title> {recipe.dishType}</Card.Title>
                            <Card.Title>   Kcal:
                                {recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)}</Card.Title>
                            <Card.Text>
                                {recipe.dishType}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>
            }
        </div>
    )
}

export default RecipeMenu