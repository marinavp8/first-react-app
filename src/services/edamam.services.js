import axios from 'axios'

class EdamamService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/api/edamam`
        })
    }

    getRecipes(ingredient) {
        return this.api.get(`/search?ingredient=${ingredient}`)
    }

    getOneRecipe(id) {
        return this.api.get(`/recipes/${id}`)
    }

    getRecipeByMeal(mealType) {
        return this.api.get(`/recipes?mealType=${mealType}`)
    }
    getRecipeByDiet(diet) {
        return this.api.get(`/recipes/diet`, diet)
    }
    getDinnerRecipe(ingredient) {
        return this.api.get(`/search/dinner?ingredient=${ingredient}`)

    }
    getBreakfastRecipe(ingredient) {
        return this.api.get(`/search/breakfast?ingredient=${ingredient}`)
    }
    getLunchRecipe(ingredient) {
        return this.api.get(`/search/lunch?ingredient=${ingredient}`)
    }
    getHealthRecipe(health) {
        return this.api.get(`/search/health?health=${health}`)
    }
    getFilteredByPlace(place) {
        return this.api.get(`/search/place?place=${place}`)
    }
    getMultiple(ingredient) {
        return this.api.get(`/multiple?ingredient=${ingredient}`)
    }
    getRecipeByTime(time) {
        return this.api.get(`/recipes/total-time?time=${time}`)
    }
    getRecipeByCalories(calories) {
        return this.api.get(`/calories?calories=${calories}`)
    }
    getRecipeExluding(excluded) {
        return this.api.get(`/excluding?excluded=${excluded}`)
    }


}

const edamamService = new EdamamService()

export default edamamService