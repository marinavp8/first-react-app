import FilteredBreakfast from "../../components/FilteredRecipe/FilteredBreakfast/FilteredBreakfast"
import FilteredByPlace from "../../components/FilteredRecipe/FilteredByPlace/FilteredByPlace"
import FilteredDinner from "../../components/FilteredRecipe/FilteredDinner/FilteredDinner"
import FilteredLunch from "../../components/FilteredRecipe/FilteredLunch/FilteredLunch"
import FilteredMeal from "../../components/FilteredRecipe/FilteredMeal/FilteredMeal"
import FilteredVegetarian from "../../components/FilteredRecipe/FilteredVegetarian/FilteredVegetarian"
import RecipieFilteredIng from "../../components/FilteredRecipe/ RecipieFilteredIng/RecipieFilteredIng"
import TimeFilter from "../../components/FilteredRecipe/TimeFilter/TimeFilter"

import Carousel2 from "../../components/Carousel/Carousel2"

import './FiltersPage.css'
import MultipleIng from "../../components/FilteredRecipe/MultipleIng/MultipleIng"

const FiltersPage = () => {

    return (
        <>
            <h1 className="title">Advanced filtering:</h1>
            <RecipieFilteredIng />
            <hr />
            <FilteredMeal />
            <hr />
            <FilteredDinner />
            <hr />
            <FilteredBreakfast />
            <hr />
            <FilteredLunch />
            <hr />
            <FilteredVegetarian />
            <hr />
            <FilteredByPlace />
            <hr />
            <MultipleIng />
            <hr />
            <TimeFilter />
        </>


    )

}


export default FiltersPage