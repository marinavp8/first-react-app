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
import RangeForm from "../../components/RangeFilter/RangeFilter"


import './FiltersPage.css'
import MultipleFilter from "../../components/FilteredRecipe/MultipleFilter/MultipleFilter"


const FiltersPage = () => {


    return (
        <>

            <h1 className="title text-center mb-4 mt-5">Advanced filtering</h1>
            <div className="mb-5">
                < MultipleFilter />
            </div>

            <div className="mt-5 ms-5 mb-5 ">
                <h3 className=" d-flex justify-content-center mb-5">Discover by culture:</h3>

                < FilteredByPlace />
            </div>

        </>



    )
}


export default FiltersPage