import { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import menuService from "../../services/menu.services"
import { AuthContext } from "../../contexts/auth.contexts"
import { useContext } from "react"
import FilteredBreakfast from "../FilteredRecipe/FilteredBreakfast"
import FilteredLunch from "../FilteredRecipe/FilteredLunch"
import FilteredDinner from "../FilteredRecipe/FilteredDinner"
import { useNavigate, useParams } from "react-router-dom"
import Loader from "../Loader/Loader"
const menuBase = {

    name: "Change me",
    days: [{
        "day": "Monday",
        "recipeBreakfastId": "",
        "recipeLunchId": "",
        "recipeDinnerId": ""
    },
    {
        "day": "Tuesday",
        "recipeBreakfastId": "",
        "recipeLunchId": "",
        "recipeDinnerId": ""
    },
    {
        "day": "Wednesday",
        "recipeBreakfastId": "",
        "recipeLunchId": "",
        "recipeDinnerId": ""
    },
    {
        "day": "Thursday",
        "recipeBreakfastId": "",
        "recipeLunchId": "",
        "recipeDinnerId": ""
    },
    {
        "day": "Friday",
        "recipeBreakfastId": "",
        "recipeLunchId": "",
        "recipeDinnerId": ""
    },
    {
        "day": "Saturday",
        "recipeBreakfastId": "",
        "recipeLunchId": "",
        "recipeDinnerId": ""
    },
    {
        "day": "Sunday",
        "recipeBreakfastId": "",
        "recipeLunchId": "",
        "recipeDinnerId": ""
    }
    ]

}
const newMenuForm = () => {
    const { loggedUser } = useContext(AuthContext)
    const params = useParams()
    const navigate = useNavigate()

    // const { selectedRecipeId } = useContext(RecipeContext)
    useEffect(() => {
        if (!params.menuId) {
            menuService
                .createMenu(menuBase)
                .then((response) => { setMenuData(response.data); console.log(response.data) })
                .catch(err => console.log(err))
        }
    }, [])


    const [menuData, setMenuData] = useState(null)

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setMenuData({ ...menuData, [name]: value })
    }

    const handleDayChange = (index, field, value) => {
        const updatedDays = menuData.days.map((day, i) => {
            if (i === index) {
                return { ...day, [field]: value }
            }
            return day;
        })


        // const handleDayChange = (index, fieldName, value) => {
        //     const { selectedRecipeId } = useContext(RecipeContext);

        //     setMenuData(prevState => {
        //         const updatedDays = prevState.days.map((day, idx) => {
        //             if (idx === index) {
        //                 return {
        //                     ...day,
        //                     [fieldName]: fieldName === 'recipeBreakfastId' ? selectedRecipeId : value,
        //                 };
        //             }
        //             return day;
        //         });

        //         return { ...prevState, days: updatedDays };
        //     });

        setMenuData({
            ...menuData,
            days: updatedDays,
        })
    }

    const handleMenuSubmit = e => {

        e.preventDefault()

        menuData.owner = loggedUser._id

        menuService
            .createMenu(menuData)
            .then((response) => console.log(response))
            .catch(err => console.log(err))
    }

    const handleSearch = (menuId, day) => {

        navigate(`/breakfastprueba/${menuId}/${day}`)
    }

    // useEffect(() => {
    //     if (!loggedUser) {
    //         navigate("/login")
    //     }
    // }, [])


    return (
        !menuData
            ?
            <Loader />
            :
            <div className="newMenuForm">
                <Form onSubmit={handleMenuSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>{menuData._id}Menu name</Form.Label>
                        <Form.Control type="text" value={menuData.name} name="name" onChange={handleInputChange} />
                    </Form.Group>
                    {menuData.days.map((day, index) => (
                        <div key={index}>
                            <h5>{day.day}</h5>
                            <Form.Group className="mb-3">
                                <Form.Label>Breakfast Recipe ID</Form.Label>
                                <Button variant="dark" type="button" onClick={() => handleSearch(menuData._id, day.day)}>Buscar</Button>
                                <Form.Control type="text" value={day.recipeBreakfastId} onChange={(e) => handleDayChange(index, 'recipeBreakfastId', e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Lunch Recipe ID</Form.Label>
                                <Form.Control type="text" value={day.recipeLunchId} onChange={(e) => handleDayChange(index, 'recipeLunchId', e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Dinner Recipe ID</Form.Label>
                                <Form.Control type="text" value={day.recipeDinnerId} onChange={(e) => handleDayChange(index, 'recipeDinnerId', e.target.value)} />
                            </Form.Group>

                        </div>
                    ))}
                    <div className="d-grid">
                        <Button variant="dark" type="submit">Crear menú</Button>
                    </div>
                </Form>
            </div>
    )

}

export default newMenuForm





