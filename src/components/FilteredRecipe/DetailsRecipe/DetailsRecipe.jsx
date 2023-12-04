import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import edamamService from "../../../services/edamam.services"
import Loader from "../../../components/Loader/Loader"

import CreateComment from '../../../components/Comments/CreateComment'
import PostedComments from "../../Comments/PostedComents"
import { Col, Container, Row, Table, Button } from "react-bootstrap"
import EggButton from '../../EggButton/EggButton'
import { LinkContainer } from 'react-router-bootstrap'

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
                    <Col xs={6} md={4} style={{ width: 630 }}>
                        <img src={recipe.images.REGULAR.url} />
                    </Col>
                    {/* 
                    <CreateComment recipeId={id} />
                    <PostedComments recipeId={id} /> */}

                    <Col className="p-5">
                        <h2 style={{ fontWeight: 'bold' }}>{recipe.label}</h2>
                        <p > {Math.round(recipe.calories)}kcal | {recipe.totalTime} min | {recipe.yield} servings</p>
                        <p > By {(recipe.source)} </p>
                        {recipe.healthLabels.slice(0, 4).map(e => {
                            return <span> {e} |</span>
                        })}

                        {/* <EggButton /> */}

                    </Col>

                </Row>

                <Row>
                    <Col className="p-4 mt-5 ">
                        <h2 style={{ fontWeight: 'bold' }} className="mb-3">Ingredients:</h2>
                        <ul>
                            {
                                recipe.ingredientLines.map((ingredient, _id) => {
                                    return (
                                        <li className="mb-3">{ingredient}</li>
                                    )
                                })
                            }
                        </ul>

                        <div className="pt-3 mt-5">
                            <h2 style={{ fontWeight: 'bold' }} className="mb-3">Preparation :</h2>
                            <p className="mb-3">This recipe is provided by {(recipe.source)} . You can view the detailed preparation instructions by clicking the following link.</p>
                            <div className="text-center">


                                <a href={recipe.url} target="_blank" rel="noopener noreferrer">
                                    <Button variant="success">Step by step</Button>                                </a>

                                {/* 
                                <LinkContainer to={recipe.url} >
                                    <Button variant="success">Step by step</Button>
                                </LinkContainer> */}
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <Container style={{ maxWidth: '800px', marginTop: '20px' }} >
                            <div style={{ overflowX: 'auto' }}>
                                <h3 className="mb-3" style={{ fontWeight: 'bold' }}> Nutritional Values:</h3>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Label</th>
                                            {/* <th>Daily</th> */}
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recipe.digest.map((step, _id) => (
                                            <tr key={_id}>
                                                <td className="mb-2">{step.label}</td>
                                                {/* <td>{step.daily}</td> */}
                                                <td>{Math.round(step.total)}{step.unit}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Container>

                    </Col>

                </Row>

                <Row>
                    <div className="mt-3 text-center mb-5" >
                        <h4 className="mb-3" style={{ fontWeight: 'bold' }}> Have You Tried This Recipe? We'd Love to Hear Your Thoughts!

                            :</h4>
                        <CreateComment />
                    </div>

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





