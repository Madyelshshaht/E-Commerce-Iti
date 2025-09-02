import React from 'react'
import img from '../assets/1.jpg'

const Home = () => {
    return (
        <div className='container-fluid'>
            <h1 className='fs-3 fw-bold'> Welcome Home</h1>

            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card" >
                        <div className="card-body">
                        <img src={img} alt="" className='img-fluid' width={100} height={100}/>
                            <h5 className="card-title mt-1">Card Title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Add To Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home