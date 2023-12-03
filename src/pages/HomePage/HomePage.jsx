
import CarouselFunc from "../../components/FilteredRecipe/Carrousel"
import "./HomePage.css"
import React, { useLayoutEffect } from 'react'


const HomePage = () => {



    return (

        <div className="backgroundHome">
            <div className="centrarHome">
                {/* <h1>Explore foods from around the globe.</h1> */}
                {/* <h2>Whether you're looking for healthy recipes, or ideas on how to use leftovers from your fridge, we've numerous recipes to choose from, so you'll be able to find the perfect dish.</h2> */}
                <h2 className="heading heading--level1">
                    Explore foods from around the globe
                    <span className="gradient--text">.</span>
                </h2>
                <p className="paragraph color--gray--light">
                    Whether you're looking for healthy recipes, or ideas on how to use
                    leftovers from your fridge, we've numerous recipes to choose from,
                    so you'll be able to find the perfect dish.
                </p>
                <CarouselFunc />
            </div>

        </div>
    )
}


export default HomePage
