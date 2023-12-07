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
<<<<<<< HEAD

    <>

      <InputGroup className="mb-3" type="text" value={newIngredient} onChange={handleInputChange} >
=======

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
>>>>>>> cf1d9d8872d676ed2d6122a55cf8a10e45670645
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon2"
        />
        <Button variant="success" id="button-addon2" onClick={handleAddIngredient}>
          Add to list
        </Button>
      </InputGroup>
      <ul>
        {ingredients.map((ingredient, i) => (
          <>
            <Form.Check type="radio" aria-label="radio 1" key={i} > </Form.Check>
            {ingredient}
<<<<<<< HEAD
=======
            <Button style={{ backgroundColor: 'rgb(58, 125, 19)', border: 'none' }} id="button-addon1" onClick={() => handleDeleteIngredient(i)}>Borrar</Button>
>>>>>>> cf1d9d8872d676ed2d6122a55cf8a10e45670645
          </>
        ))}
      </ul>

      {

        dataList.map((elm, i) => {
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
        })
      }

    </>
  )
}

export default List




