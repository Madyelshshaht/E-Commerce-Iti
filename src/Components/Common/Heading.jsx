import React from 'react'

const Heading = ({ title, className }) => {
    return (
        <div className=''>
            <h2 className={`fw-bold fst-italic mb-2 ${className}`}>{title}</h2>
        </div>
    )
}

export default Heading