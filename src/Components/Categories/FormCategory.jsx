
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CgCloseO } from "react-icons/cg";
import useCategories from "../../Hooks/useCategories/useCategories";

const FormCategory = ({ toggle, setToggle, initialData, setInitialData, AddCategory, EditCategory  }) => {


    const [title, setTitle] = useState("");
    const [prefix, setPrefix] = useState("");
    const [image, setImage] = useState(null);


    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title || "");
            setPrefix(initialData.prefix || "");
            setImage(null);
        }
    }, [initialData]);


    const Cancel = async () => {

        // reset form
        setTitle("");
        setPrefix("");
        setImage(null);

        setInitialData(null);
        setToggle(false)
    }



    const handelSubmit = async (e) => {
        e.preventDefault();

        try {
            if (initialData) {

                await EditCategory(initialData.categoryId, title, prefix, image,);
                setInitialData(null);
                setToggle(false)
            } else {
                await AddCategory(title, prefix, image);
                setToggle(false)
            }

            setTitle("");
            setPrefix("");
            setImage(null);

        } catch (err) {
            console.error("Error adding category:", err);
        }
    };


    return (
        <div>
            {toggle && (
                <div className="shadow-lg p-2 mb-5 position-relative rounded rounded-2">
                    <button
                        className="btn close-btn position-absolute p-1"
                        style={{ right: "10px", top: "10px" }}
                        onClick={() => setToggle(false)}
                    >
                        <span className="d-flex justify-content-center align-items-center bg-danger rounded-pill text-white" onClick={Cancel}>
                            <CgCloseO size={20} />
                        </span>
                    </button>

                    <h2 className="text-center mt-3">
                        {initialData ? "Edit Category" : "Add Category"}
                    </h2>

                    <Form className="p-4" onSubmit={handelSubmit}>

                        <Form.Group className="mb-3">
                            <Form.Label>Category Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Name"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Category Prefix</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Prefix"
                                value={prefix}
                                onChange={(e) => setPrefix(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label> Category Image </Form.Label>
                            <Form.Control
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                                required
                            />
                            {initialData && !image && (
                                <p className="text-muted mt-1">Current image will remain if no new image is selected.</p>
                            )}
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
