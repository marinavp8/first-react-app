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

import { Container } from "react-bootstrap"

import './FiltersPage.css'
import HealthyMeals from "../../components/HealthyMeals/HealthyMeals"
import MultipleFilter from "../../components/FilteredRecipe/MultipleFilter/MultipleFilter"


const FiltersPage = () => {


    return (

        <Container>
            <h1 className="title text-center mb-4">Advanced filtering:</h1>


            {/* <RecipieFilteredIng />

            {/* <FilteredMeal /> */}

            {/* <FilteredDinner /> */}

            {/* <FilteredBreakfast /> */}

            {/* <FilteredLunch /> */}

            {/* <FilteredVegetarian /> */}

            {/* <FilteredByPlace /> */}

            {/* <MultipleIng /> */}

            {/* <CaloriesFilter /> */}

            {/* <ExcludeIngredient /> */}

            {/* <TimeFilter /> */}

            {/* <HealthyMeals />   */}

            < MultipleFilter />
        </Container>
    )
}


export default FiltersPage