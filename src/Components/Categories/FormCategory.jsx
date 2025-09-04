import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { CgCloseO } from "react-icons/cg";

const FormCategory = ({ toggle, setToggle }) => {
    const [Name, setName] = useState("");
    const [Image, setIamge] = useState(null);

    // const handelSubmit = async (e) => {
    //     e.preventDefault();

    //     const formData = new FormData();
    //     formData.append("name", Name)
    //     formData.append("image", Image)

    //     console.log("New Category:", {
    //         name: categoryName,
    //         image: categoryImage,
    //     });

    //     try {
    //         const res = await axios.post(`http://localhost:5000/api/categories`, formData, {
    //             headers: {
    //                 "Authorization": `Bearer {token}`,
    //                 "Content-Type": "multipart/form-data",
    //             }
    //         });

    //         console.log("Category added:", res.data);

    //     setName("");
    //     setIamge(null);

    //     } catch (err) {
    //         console.log("Error adding category:", err);
    //     }



    // }

    return (
        <div>
            {toggle && (
                <div className="shadow-lg p-2 mb-5 position-relative rounded rounded-2">
                    <button
                        className="btn close-btn position-absolute p-1"
                        style={{ right: "10px", top: "10px" }}
                        onClick={() => setToggle(false)}
                    >
                        <span className="d-flex justify-content-center align-items-center bg-danger rounded-pill text-white">
                            <CgCloseO size={20} />
                        </span>
                    </button>

                    <h2 className="text-center mt-3">Add Category </h2>

                    <Form className="p-4">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Category Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Name"
                                value={Name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Image Category</Form.Label>
                            <Form.Control
                                type="file"
                                value={Image}
                                onChange={(e) => setIamge(e.target.value)}
                                required
                            />
                            <Form.Text className="text-muted">
                                Select image to Category
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

export default FormCategory;
