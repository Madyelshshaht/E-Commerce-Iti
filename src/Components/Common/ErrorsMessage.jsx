import React from 'react'

const ErrorsMessage = ({ message, title }) => {
    return (
        <h3 className="text-danger fw-bold display-4 text-center mt-5">
            {title && " " } {" "} Error: {message}
        </h3>
    )
}
export default ErrorsMessage