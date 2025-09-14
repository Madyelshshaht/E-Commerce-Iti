import React from 'react'
import Error_Page from "../assets/LotiFiles/Error_Page.json"
import Lottie from 'lottie-react'
const ErrorPage = () => {
    return (
        <>
            <div className='min-vh-100 bg-light pt-5'>
                <h1 className='text-center display-3 fw-bold mt-5'>Error Page 404</h1>
                <div className="m-auto w-100 mt-5" style={{ maxWidth: "700px" }} >
                    <Lottie animationData={Error_Page} loop={false} />
                </div>
            </div>
        </>
    )
}

export default ErrorPage;
