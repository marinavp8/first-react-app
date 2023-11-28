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
}

const edamamService = new EdamamService()

export default edamamService