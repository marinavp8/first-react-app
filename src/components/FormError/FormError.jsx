import Alert from 'react-bootstrap/Alert'
import { useState } from 'react'


const FormError = ({ children }) => {

    const [show, setShow] = useState(true)

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    {children}
                </p>
            </Alert>
        )
    }

}


export default FormError

