import { Button, Card } from "react-bootstrap"

const CardRcp = ({ recipe, handleComeBack }) => {
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={recipe.recipe.images.SMALL.url} />
            <Card.Body>
                <Card.Title>{recipe.recipe.label} </Card.Title>
                <Card.Text>
                    {Math.round(recipe.recipe.calories)}kcal | {recipe.recipe.totalTime} min
                </Card.Text>
                <div className="d-flex justify-content-center">
                    <Button style={{ backgroundColor: 'rgb(58, 125, 19)', border: 'none' }} type="button" onClick={() => handleComeBack(recipe.recipe.uri)}>Add</Button>
                </div>
            </Card.Body>
        </Card>
    )
}


export default CardRcp