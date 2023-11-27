import axios from 'axios'

class EdamamService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/api/edamam`
        })
    }

    getRecipes(ingredient) {
        return this.api.get(`/search?ingredient=${ingredient}`)  //aqui creo un objeto clave valor y recojo ingredient en req.query
    }

    getOneRecipe(id) {
        return this.api.get(`/recipes/${id}`)
    }
    getRecipeByMeal(mealtype) {
        return this.api.get(`/recipes/mealtype`, mealtype)
    }
    getRecipeByDiet(diet) {
        return this.api.get(`/recipes/diet`, diet)
    }
}

const edamamService = new EdamamService()

export default edamamService