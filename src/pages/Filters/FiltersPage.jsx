import FilteredBreakfast from "../../components/FilteredRecipe/FilteredBreakfast"
import FilteredByPlace from "../../components/FilteredRecipe/FilteredByPlace"
import FilteredDinner from "../../components/FilteredRecipe/FilteredDinner"
import FilteredLunch from "../../components/FilteredRecipe/FilteredLunch"
import FilteredMeal from "../../components/FilteredRecipe/FilteredMeal"
import FilteredVegetarian from "../../components/FilteredRecipe/FilteredVegetarian"
import RecipieFilteredIng from "../../components/FilteredRecipe/RecipieFilteredIng"

import './FiltersPage.css'

const FiltersPage = () => {

    return (
        <>
            <h1 className="title">Los filtros</h1>
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
        </>


    )

}


export default FiltersPage