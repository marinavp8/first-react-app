import FilteredBreakfast from "../../components/FilteredRecipe/FilteredBreakfast/FilteredBreakfast"
import FilteredByPlace from "../../components/FilteredRecipe/FilteredByPlace/FilteredByPlace"
import FilteredDinner from "../../components/FilteredRecipe/FilteredDinner/FilteredDinner"
import FilteredLunch from "../../components/FilteredRecipe/FilteredLunch/FilteredLunch"
import FilteredMeal from "../../components/FilteredRecipe/FilteredMeal/FilteredMeal"
import FilteredVegetarian from "../../components/FilteredRecipe/FilteredVegetarian/FilteredVegetarian"
import RecipieFilteredIng from "../../components/FilteredRecipe/ RecipieFilteredIng/RecipieFilteredIng"
import TimeFilter from "../../components/FilteredRecipe/TimeFilter/TimeFilter"
import MultipleIng from "../../components/FilteredRecipe/MultipleIng/MultipleIng"
import CaloriesFilter from "../../components/FilteredRecipe/CaloriesFilter/CaloriesFilter"
import ExcludeIngredient from "../../components/FilteredRecipe/FilterExcluding/FilterExcluding"
import Carousel2 from "../../components/Carousel/Carousel2"

import { Container, Row, Col } from "react-bootstrap"

//import Carousel2 from "../../components/Carousel/Carousel2"

import './FiltersPage.css'


const FiltersPage = () => {


    return (

        <Container>
            <h1 className="title text-center mb-4">Advanced filtering:</h1>

            <Row className="g-4" >
                <Col>
                    <RecipieFilteredIng />
                </Col>

                <Col>
                    <FilteredMeal />
                </Col>

                <Col>
                    <FilteredDinner />
                </Col>

                <Col>
                    <FilteredBreakfast />
                </Col>

                <Col>
                    <FilteredLunch />
                </Col>

                <Col>
                    <FilteredVegetarian />
                </Col>

                <Col>
                    <FilteredByPlace />
                </Col>

                <Col>
                    <MultipleIng />
                </Col>

                <Col>
                    <CaloriesFilter />
                </Col>

                <Col>
                    <ExcludeIngredient />
                </Col>

                <Col>
                    <TimeFilter />
                </Col>
                <Carousel2 />
            </Row>
        </Container>
    );
};


export default FiltersPage