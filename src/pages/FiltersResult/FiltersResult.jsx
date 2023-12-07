
import CardResults from '../../components/FilteredRecipe/CardResults/CardResults'


const FiltersResultPage = ({ recipes }) => {


    return (
        <>
            <h1>Results</h1>
            <CardResults recipes={recipes} />
        </>
    )
}


export default FiltersResultPage