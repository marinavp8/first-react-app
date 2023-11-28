import FilteredBreakfast from "../../components/FilteredRecipe/FilteredBreakfast"
import FilteredDinner from "../../components/FilteredRecipe/FilteredDinner"
import FilteredLunch from "../../components/FilteredRecipe/FilteredLunch"
import FilteredMeal from "../../components/FilteredRecipe/FilteredMeal"
import RecipieFilteredIng from "../../components/RecipieFilteredIng/RecipieFilteredIng"

const FiltersPage = () => {

    return (
        <>
            <h1>Los filtros</h1>
            <RecipieFilteredIng />
            <hr />
            <FilteredMeal />
            <hr />
            <FilteredDinner />
            <hr />
            <FilteredBreakfast />
            <hr />
            <FilteredLunch />
        </>


    )

}


export default FiltersPage