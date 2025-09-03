import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom';

const Category = ({ title, img, prefix }) => {
    return (
        <Link to={`/categories/products/${prefix}`} className="link">
            <div className="category">
                <div className="categoryImg">
                    <img
                        src={img}
                        alt={title}
                    />
                </div>
                <h4 className="categoryTitle">{title}</h4>
            </div>
        </Link>
    );
};

export default Category