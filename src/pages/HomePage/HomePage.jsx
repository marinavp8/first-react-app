
import CarouselFunc from "../../components/FilteredRecipe/Carrousel"
import "./HomePage.css"


const HomePage = () => {

    return (

        <div className="backgroundHome">
            <div className="centrarHome">
                <h1>Whats on your fridge?</h1>

                <CarouselFunc />
            </div>

        </div>
    )
}


export default HomePage
