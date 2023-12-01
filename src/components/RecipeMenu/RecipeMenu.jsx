import React from 'react'

function RecipeMenu({ recipe }) {
    return (

        <div>
            {
                <div>
                    <img
                        src={recipe.images.SMALL.url}
                        alt='img'
                    />
                    <p>{recipe.label}</p>
                </div>
            }
        </div>
    )
}

export default RecipeMenu