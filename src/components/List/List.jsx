import { useContext, useEffect, useState } from 'react'
import { Form, InputGroup, Button, Row, Col } from 'react-bootstrap'
import listServices from '../../services/list.services'
import usersServices from '../../services/users.services'
import { AuthContext } from '../../contexts/auth.contexts'
import { IoTrash } from "react-icons/io5"

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
  const handleDeleteIngredient = (elm, i) => {
    const newList = [...ingredients]
    newList.splice(i, 1)
    setIngredients(newList)

    listServices
      .deleteIngredient(elm)
      .then(() => chargeList())
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
      <InputGroup className="mb-3" type="text" value={newIngredient} onChange={handleInputChange} >
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon2"
        />
        <Button style={{ backgroundColor: 'rgb(58, 125, 19)', color: 'white', border: 'none' }} id="button-addon2" onClick={handleAddIngredient}>
          Add to list
        </Button>
      </InputGroup>

      <ul>
        {ingredients.map((ingredient, i) =>
          <>
            <Form.Check type="radio" aria-label="radio 1" key={i}> </Form.Check>
            {ingredient}
          </>
           )}
       
      </ul>
        {dataList.map((elm, i) => {
          return (
            <>
            <Row>
            <Col key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <p>-   {elm}</p>
            </Col>
            <Col>
              <Button variant="outline-danger" id="button-addon1" onClick={() => handleDeleteIngredient(elm)}>
              <IoTrash />
                </Button>
            </Col>
          </Row>
          </>
          )
        }
        )
      }
        </>  
  )
}


export default List
