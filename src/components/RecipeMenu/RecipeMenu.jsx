import React from 'react'
import { Card, Button } from 'react-bootstrap'

function RecipeMenu({ recipe }) {



    // const capitalizar = (cadena) => {
    //     if (cadena && cadena.length > 0) {
    //         return cadena.charAt(0).toUpperCase() + cadena.slice(1);
    //     } else {
    //         return cadena;
    //     }
    // }
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
                            <Card.Title>
                                {recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)}Kcal</Card.Title>
                            <Card.Title>
                                {recipe.totalTime}min
                            </Card.Title>
                        </Card.Body>
                        <Button variant="dark">Details</Button>

                    </Card>

                </div>
            }
        </div>
    )
}

export default RecipeMenu