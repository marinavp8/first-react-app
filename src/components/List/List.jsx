import { useContext, useEffect, useState } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import listServices from '../../services/list.services'
import usersServices from '../../services/users.services'
import { AuthContext } from '../../contexts/auth.contexts'



const List = () => {

  const { loggedUser } = useContext(AuthContext)

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  const [dataList, setDataList] = useState([])

  const handleInputChange = (e) => {
    setNewIngredient(e.target.value)
  }

  const handleAddIngredient = () => {
    if (newIngredient.trim() !== '') {
      setIngredients([...ingredients, newIngredient])

      listServices
        .postIngredient(newIngredient)
        .then(() => console.log(newIngredient))
        .catch(err => console.log(err))
    }

  }
  const handleDeleteIngredient = (i) => {
    const newList = [...ingredients]
    newList.splice(i, 1)
    setIngredients(newList)

    listServices
      .deleteIngredient(newIngredient)
      .then(() => console.log(newIngredient))
      .catch(err => console.log(err))

  }
  const handleDeleteIngredient2 = (elm) => {

    listServices
      .deleteIngredient(elm)
      .then(() => setNewIngredient())
      .catch(err => console.log(err))
  }


  const chargeList = () => {


    usersServices
      .getOneUser(loggedUser._id)
      .then(({ data }) => setDataList(data.myList)
      )
      .catch(err => console.log(err))
  }

  useEffect(() => {
    chargeList()

  }, [])



  return (

    <>
      {

        dataList.map((elm, i) => {
          return (
            <>
              <p>{elm}</p>
              <Button style={{ backgroundColor: 'rgb(58, 125, 19)', border: 'none' }} id="button-addon1" onClick={() => handleDeleteIngredient2(elm)}>Delete</Button>
            </>
          )
        })
      }
      <InputGroup className="mb-3" type="text" value={newIngredient} onChange={handleInputChange} >
        <Button style={{ backgroundColor: 'rgb(58, 125, 19)', border: 'none' }} id="button-addon1" onClick={handleAddIngredient}>
          Button
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <ul>
        {ingredients.map((ingredient, i) => (
          <>
            <Form.Check type="radio" aria-label="radio 1" key={i} > </Form.Check>
            {ingredient}
            <Button style={{ backgroundColor: 'rgb(58, 125, 19)', border: 'none' }} id="button-addon1" onClick={() => handleDeleteIngredient(i)}>Borrar</Button>
          </>
        ))}
      </ul>



    </>
  )
}

export default List




