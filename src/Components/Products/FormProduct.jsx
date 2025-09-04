import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CgCloseO } from "react-icons/cg";

const FormProduct = ({ toggle, setToggle }) => {
    const [Title, setTitle] = useState("");
    const [Price, setPrice] = useState(null);
    const [Max, setMax] = useState(null);
    const [Image, setIamge] = useState(null);

    // const handelSubmit = async (e) => {
    //     e.preventDefault();

    //     const formData = new FormData();
    //     formData.append("title", Title);
    //     formData.append("price", Price);
    //     formData.append("max", Max);
    //     formData.append("image", Image)

    //     console.log("New Product:", {
    //         name: ProductName,
    //         image: ProductImage,
    //     });

    //     try {
    //         const res = await axios.post(`http://localhost:5000/api/categories`, formData, {
    //             headers: {
    //                 "Authorization": `Bearer {token}`,
    //                 "Content-Type": "multipart/form-data",
    //             }
    //         });

    //         console.log("Product added:", res.data);

    //         setTitle("");
    //         setPrice(null);
    //         setMax(null);
    //         setImage(null);

    //     } catch (err) {
    //         console.log("Error adding Product:", err);
    //     }



    // }

    return (
        <div>
            {toggle && (
                <div className="shadow-lg p-2 mb-5 position-relative rounded rounded-2">

                    {/* Close Button */}
                    <button
                        className="btn close-btn position-absolute p-1"
                        style={{ right: "10px", top: "10px" }}
                        onClick={() => setToggle(false)}
                    >
                        <span className="d-flex justify-content-center align-items-center bg-danger rounded-pill text-white">
                            <CgCloseO size={20} />
                        </span>
                    </button>

                    <h2 className="text-center mt-3">Add Product </h2>

                    <Form className="p-4">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Name"
                                value={Title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter Name"
                                value={Price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Max</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter Name"
                                value={Max}
                                onChange={(e) => setMax(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Image Product</Form.Label>
                            <Form.Control
                                type="file"
                                value={Image}
                                onChange={(e) => setIamge(e.target.value)}
                                required
                            />
                            <Form.Text className="text-muted">
                                Select image to Product
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            )}
        </div>
    );
};

export default FormProduct;
