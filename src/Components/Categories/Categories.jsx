

const categories = [
    {
        "id": 1,
        "title": "men",
        "prefix": "men",
        "img": "https://i.pinimg.com/736x/67/d4/73/67d473ac5acd3069d909813c79d55942.jpg"
    },
    {
        "id": 2,
        "title": "women",
        "prefix": "women",
        "img": "https://i.pinimg.com/1200x/e6/ae/09/e6ae097ce28239977b19b0480c82748b.jpg"
    },
    {
        "id": 3,
        "title": "kids",
        "prefix": "kids",
        "img": "https://i.pinimg.com/736x/62/4c/4e/624c4e13a19f780e02dd59f181633f73.jpg"
    },
    {
        "id": 4,
        "title": "baby",
        "prefix": "baby",
        "img": "https://cdn-eu.dynamicyield.com/api/9876644/images/28948d47ae6e8__h_m-w39-28092022-4066c-1x1.jpg"
    },
    {
        "id": 5,
        "title": "sport",
        "prefix": "sport",
        "img": "https://i.pinimg.com/1200x/fb/ce/f6/fbcef681127496d8ae06c6c7fa7474df.jpg"
    }
]
import axios from 'axios';
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Category from './Category';

const Categories = () => {


    return (
        <>
            <h1 className='mb-5'>Categories</h1>
            <Row>
                {categories.length > 0 ?
                    categories.map(cat => (
                        <Col lg={3} md={4} xs={6}  className='d-flex justify-content-center mb-5 mt-2' key={cat.id}>
                            <Category title={cat.title} img={cat.img}  prefix={cat.prefix} />
                        </Col>
                    ))
                    : (
                        <p>No categories available</p>
                    )}
            </Row>
        </>
    )
}


export default Categories