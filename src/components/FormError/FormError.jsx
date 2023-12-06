import { useState } from 'react'
import { Toast } from 'react-bootstrap'

import triangle from '../../assets/exclamation-triangle-fill.svg'

const FormError = ({ children }) => {

    const [show, setShow] = useState(true)

    if (show) {

        return (
            < Toast onClose={() => setShow(false)} dismissible>
                <Toast.Header className="bg-danger text-dark">
                    <img src={triangle} className="rounded me-2" alt="" />
                    <strong className="me-auto">Oh snap! You got an error!</strong>
                </Toast.Header>
                <Toast.Body className='bg-danger text-dark'>{children}</Toast.Body>
            </Toast >
        )
    }
}

export default FormError
