import React from 'react'

const Product = ({ img, title, price, cat_prefix, max , onAdd }) => {
    return (
        <div className='d-flex justify-content-center align-items-center w-100 mb-2'>
            <div className='d-flex flex-column justify-content-center align-items-start px-3 py-3 shadow rounded rounded-3 w-100'>
                <img src={img} alt={title} height={160} style={{ objectFit: "cover" }} className='m-auto' />
                <div className='px-2 my-1'>
                    <h5 className=" mt-1" title={title}>{title.length > 15 ? title.slice(0,15) + "..." : title}</h5>
                    <h6> {price.toFixed(2)} EGP</h6>
                    {<p><strong>Available:</strong> {max}</p>}
                </div>
                <button className="btn btn-info text-white w-75 m-auto" onClick={onAdd}>Add to Cart</button>
            </div>
        </div>
    )
}


export default Product