import { Spinner } from 'react-bootstrap'

const LoadingSpinner = ({ message, size }) => {
    return (
        <div className="d-flex justify-content-center align-items-center mt-5 text-info">
            <Spinner animation="border" size={size} variant="info">
                <span className="visually-hidden">{message}</span>
            </Spinner>
        </div>
    )
}

export default LoadingSpinner