import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import edamamService from "../../../services/edamam.services"
import Loader from "../../../components/Loader/Loader"

import CreateComment from '../../../components/Comments/CreateComment'
import { Col, Container, Row, Table } from "react-bootstrap"
import EggButton from '../../EggButton/EggButton'

import '../DetailsRecipe/DetailsRecipe.css'

const DetailsRecipe = () => {

    const { id } = useParams()
    const [recipe, setRecipe] = useState()

    const getDetailRecipe = (id) => {
        edamamService
            .getOneRecipe(id)
            .then(({ data }) => {
                setRecipe(data.recipe)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getDetailRecipe(id)
    }, [])

    return (
        !recipe
            ?
            <Loader />
            :
            <Container>

                <Row>
                    <Col xs={6} md={4}>
                        <img src={recipe.images.REGULAR.url} />
                    </Col>

                    <Col className="p-5">
                        <h1 style={{ fontWeight: 'bold' }}>{recipe.label}</h1>

                        <EggButton />

                        <p className="p-3">{recipe.calories} calories | {recipe.totalTime} minutes</p>
                    </Col>

                </Row>

                <Row>
                    <Col className="p-4">
                        <h2 style={{ fontWeight: 'bold' }}>Ingredients:</h2>
                        <ul>
                            {
                                recipe.ingredientLines.map((ingredient, _id) => {
                                    return (
                                        <li>{ingredient}</li>
                                    )
                                })
                            }
                        </ul>
                    </Col>

                    <Col>
                        <h2 style={{ fontWeight: 'bold' }}>Preparation :</h2>

                        <ul>
                            {
                                recipe.ingredients.map((step, _id) => {
                                    return (
                                        <li>{step.text}</li>
                                    )
                                })
                            }
                        </ul>
                    </Col>

                </Row>

                <Row>
                    <Col>
                        <Container style={{ maxWidth: '800px', marginTop: '20px' }} >
                            <div style={{ overflowX: 'auto' }}>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Label</th>
                                            <th>Daily</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recipe.digest.map((step, _id) => (
                                            <tr key={_id}>
                                                <td>{step.label}</td>
                                                <td>{step.daily}</td>
                                                <td>{step.total}{step.unit}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Container>

                    </Col>

                    <Col>
                        <CreateComment />
                    </Col>


                </Row>


            </Container>

    )

}

export default DetailsRecipe




//     < Col >
//     <h1>Diet: </h1>
// {
//     recipe.healthLabels.map((step, _id) => {
//         return (
//             <div key={_id}>
//                 <p className="paragrah">{step}</p>
//             </div>
//         )
//     })
// }
//                     </Col >





