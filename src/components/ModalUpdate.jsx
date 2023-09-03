import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import updateProductAction from '../config/redux/actions/updateProductAction';

const ModalUpdate = ({ product_id, product_name, product_price, product_stock, product_image, description_product, category_id, children }) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [categories, setCategories] = useState([]);
    const [data, setData] = useState({
        product_name,
        product_price,
        product_stock,
        description_product,
        category_id,
    });

    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpload = (e) => {
        setImage(e.target.files[0]);
      };
    

      const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(updateProductAction(data, product_id, image, setShow))
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_KEY}/category`)
            .then((response) => {
                setCategories(response.data.data);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    const handleCategoryChange = (event) => {
        const selectedCategoryId = event.target.value;
        setData({ ...data, category_id: selectedCategoryId });
    };

    return (
        <>
            <Button variant="warning" onClick={handleShow} style={{ margin: "10px" }}>
                {children}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{children} product</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <input
                            className="form-control mt-3"
                            type="text"
                            placeholder="Product Name"
                            name="product_name"
                            value={data.product_name}
                            onChange={handleChange}
                        />
                        <input
                            className="form-control mt-3"
                            type="text"
                            placeholder="Price"
                            name="product_price"
                            value={data.product_price}
                            onChange={handleChange}
                        />
                        <input
                            className="form-control mt-3"
                            type="number"
                            placeholder="Stock"
                            name="product_stock"
                            value={data.product_stock}
                            onChange={handleChange}
                        />
                        <input
                            className="form-control mt-3"
                            type="file"
                            placeholder="Image"
                            name="product_image"
                            onChange={handleUpload}
                        />

                        <textarea
                            class="form-control mt-3"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            type="text"
                            placeholder="Description Product"
                            name="description_product"
                            value={data.description_product}
                            onChange={handleChange}
                        ></textarea>

                        <div style={{ marginTop: 20 }}>
                            <select
                                id="category"
                                name="category_id"
                                value={data.category_id}
                                onChange={handleCategoryChange}
                            >
                                <option value="">-- Pilih Kategori --</option>
                                {categories.map((category) => (
                                    <option key={category.category_id} value={category.category_id}>
                                        {category.category_name}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <button type="submit" className="btn btn-warning">
                            {children}
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}

export default ModalUpdate;