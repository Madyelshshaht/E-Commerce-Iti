import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

    const products = [
        {
            "id": 1,
            "title": "Regular Fit Jersey top",
            "price": 249,
            "cat_prefix": "men",
            "img": "https://i.pinimg.com/736x/2a/f9/e0/2af9e0a5ab117d7b8cfdc4a78b26a947.jpg",
            "max": 4
        },
        {
            "id": 2,
            "title": "Regular Fit Jersey top",
            "price": 229,
            "cat_prefix": "men",
            "img": "https://i.pinimg.com/736x/ea/a0/f3/eaa0f323ba0d52bf0f51135c5362cede.jpg",
            "max": 4
        },
        {
            "id": 3,
            "title": "Cotton polo shirt",
            "price": 200,
            "cat_prefix": "men",
            "img": "https://i.pinimg.com/736x/dd/de/14/ddde149b1134c4387cd174a99b8d2e31.jpg",
            "max": 3
        },
        {
            "id": 9,
            "title": "Jacket Jeans",
            "price": 300,
            "cat_prefix": "men",
            "img": "https://i.pinimg.com/736x/96/3c/48/963c48f7f5be5b7cf05df0eedf845cb6.jpg",
            "max": 4
        },
        {
            "id": 10,
            "title": "Hoodie shirt",
            "price": 550,
            "cat_prefix": "men",
            "img": "https://i.pinimg.com/736x/6c/ca/6f/6cca6fbebbc3a281e84d87fc284cf137.jpg",
            "max": 3
        },
        {
            "id": 11,
            "title": "Cargo Pants",
            "price": 400,
            "cat_prefix": "men",
            "img": "https://i.pinimg.com/736x/4e/29/e8/4e29e8acfea1ba6b39032bc5cd340291.jpg",
            "max": 4
        },
        {
            "id": 12,
            "title": "Blue Jeans",
            "price": 500,
            "cat_prefix": "men",
            "img": "https://i.pinimg.com/736x/59/ab/bd/59abbde767079e60d57e27b026906b25.jpg",
            "max": 5
        },
        {
            "id": 13,
            "title": "Balck Jeans",
            "price": 600,
            "cat_prefix": "men",
            "img": "https://i.pinimg.com/736x/48/c3/ad/48c3addfa8538cce13b8d4e25fe883a3.jpg",
            "max": 5
        },
        {
            "id": 4,
            "title": "Cotton t-shirt",
            "price": 100,
            "cat_prefix": "women",
            "img": "https://i.pinimg.com/736x/80/34/5c/80345c649454a970559f518cfad1b515.jpg",
            "max": 4
        },
        {
            "id": 5,
            "title": "Sweatshirt shorts",
            "price": 300,
            "cat_prefix": "women",
            "img": "https://i.pinimg.com/736x/e6/47/1a/e6471a4c3df791b656285424da40d3c3.jpg",
            "max": 5
        },
        {
            "id": 17,
            "title": "Womens Jacket Puffer",
            "price": 900,
            "cat_prefix": "women",
            "img": "https://i.pinimg.com/736x/53/d5/6c/53d56ce8593569f9c04411baac082228.jpg",
            "max": 4
        },
        {
            "id": 27,
            "title": "Sweatshirt shorts",
            "price": 550,
            "cat_prefix": "women",
            "img": "https://i.pinimg.com/736x/10/62/e9/1062e9a5ba68c963e903aec3d186b2bc.jpg",
            "max": 5
        },
        {
            "id": 14,
            "title": "Palazzo Pantolon",
            "price": 500,
            "cat_prefix": "women",
            "img": "https://i.pinimg.com/736x/b8/b6/5f/b8b65fd34014353b684d3ba761a9074b.jpg",
            "max": 5
        },
        {
            "id": 15,
            "title": "pantalon classique",
            "price": 430,
            "cat_prefix": "women",
            "img": "https://i.pinimg.com/736x/a2/c2/d8/a2c2d8afcb45cc63ce633d65284b3629.jpg",
            "max": 5
        },
        {
            "id": 16,
            "title": "Womens Skirt",
            "price": 400,
            "cat_prefix": "women",
            "img": "https://i.pinimg.com/736x/d2/17/aa/d217aad2effeb974bdcce61cd5ff5482.jpg",
            "max": 3
        },
        {
            "id": 6,
            "title": "Cotton Hoodie",
            "price": 350,
            "cat_prefix": "kids",
            "img": "https://i.pinimg.com/736x/03/af/bb/03afbbd64b949aa97fa73c6902e13428.jpg",
            "max": 2
        },
        {
            "id": 26,
            "title": "Sweatshirt",
            "price": 300,
            "cat_prefix": "kids",
            "img": "https://i.pinimg.com/736x/4f/d0/87/4fd087a2913dc8841850d6913c5a3504.jpg",
            "max": 4
        },
        {
            "id": 18,
            "title": "Cotton hoodie",
            "price": 350,
            "cat_prefix": "kids",
            "img": "https://i.pinimg.com/736x/40/68/a4/4068a4e666ce510d3b32e887319f768c.jpg",
            "max": 7
        },
        {
            "id": 19,
            "title": "Plus-Floral-Butterfly-Print-Thermal-Lined-Sweatshirt",
            "price": 300,
            "cat_prefix": "kids",
            "img": "https://i.pinimg.com/736x/ca/f1/ed/caf1edebaf0ce388ce60a6f36ac44c0c.jpg",
            "max": 2
        },
        {
            "id": 7,
            "title": "Pile all-in-one suit with ears",
            "price": 500,
            "cat_prefix": "baby",
            "img": "https://i.pinimg.com/736x/df/c1/55/dfc155d44e2b8e6e51239347ba9e88d1.jpg",
            "max": 3
        },
        {
            "id": 20,
            "title": "Newborn-velvet-autumn-and-winter-baby-boys-romper",
            "price": 600,
            "cat_prefix": "baby",
            "img": "https://i.pinimg.com/736x/4b/1f/1c/4b1f1c608e87a52751ebcf6f475371aa.jpg",
            "max": 3
        },
        {
            "id": 21,
            "title": "Newborn Baby Warm Panda",
            "price": 400,
            "cat_prefix": "baby",
            "img": "https://i.pinimg.com/736x/17/32/99/173299ab14fcf4e1ff1bfa2226cee8bd.jpg",
            "max": 5
        },
        {
            "id": 8,
            "title": "Regular Fit football shirt",
            "price": 449,
            "cat_prefix": "sport",
            "img": "https://i.pinimg.com/736x/23/34/c2/2334c26bad564115af5f6dd60f642480.jpg",
            "max": 3
        },
        {
            "id": 22,
            "title": "Running Shorts",
            "price": 1000,
            "cat_prefix": "sport",
            "img": "https://i.pinimg.com/736x/41/a3/e9/41a3e9ef830be6f973041eedf1d57164.jpg",
            "max": 5
        },
        {
            "id": 23,
            "title": "Sport Wear",
            "price": 700,
            "cat_prefix": "sport",
            "img": "https://i.pinimg.com/736x/17/f5/e9/17f5e9d51bdb396c7eb63241159938e0.jpg",
            "max": 3
        },
        {
            "id": 24,
            "title": "addids Sport",
            "price": 1300,
            "cat_prefix": "sport",
            "img": "https://i.pinimg.com/736x/4e/7e/7f/4e7e7fef9feed184d46a71782a66552c.jpg",
            "max": 3
        },
        {
            "id": 25,
            "title": "Womens Sport Suit",
            "price": 1050,
            "cat_prefix": "sport",
            "img": "https://i.pinimg.com/736x/34/1c/98/341c98fbb080e5e7cc9494ae66d57fe7.jpg",
            "max": 3
        }
    ]


const ProductProvider  = ({children}) => {

    const [product, setProduct] = useState([]);


    useEffect(() => {
        setProduct(products);
    }, [])

    return (
        <ProductContext.Provider value={{ product }}>
            {children}
        </ProductContext.Provider>
    )
    
}

export default ProductProvider;