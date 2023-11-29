import { createContext, useState } from "react"

const RecipeContext = createContext()

const RecipeProvider = ({ children }) => {

    const [selectedRecipeId, setSelectedRecipeId] = useState("")

    const setRecipeId = (id) => {
        setSelectedRecipeId(id)
    }

    return (
        <RecipeContext.Provider value={{ selectedRecipeId, setRecipeId }}>
            {children}
        </RecipeContext.Provider>
    )
}

export { RecipeContext, RecipeProvider }
