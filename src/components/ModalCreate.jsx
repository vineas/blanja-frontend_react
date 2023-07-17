import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import createProductAction from '../config/redux/actions/createProductsAction';

const ModalCreate = () => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] = useState({
        name: "",
        price: "",
        stock: "",
        rating_product: "",
        nama_toko: "",
        description_product: ""
    })

    const [image, setImage] = useState(null)

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    const handleUpload = (e) => {
        setImage(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProductAction(data, image, setShow))
    }

    return (
        <>
            <Button variant="danger" onClick={handleShow} style={{ marginTop: 30, borderRadius: 30 }}>
                Add new product
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create product</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <input
                            className="form-control mt-3"
                            type="text"
                            placeholder="Product Name"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                        />
                        <input
                            className="form-control mt-3"
                            type="text"
                            placeholder="Price"
                            name="price"
                            value={data.price}
                            onChange={handleChange}
                        />
                        <input
                            className="form-control mt-3"
                            type="number"
                            placeholder="Stock"
                            name="stock"
                            value={data.stock}
                            onChange={handleChange}
                        />
                        <input
                            className="form-control mt-3"
                            type="file"
                            placeholder="Image"
                            name="image"
                            onChange={handleUpload}
                        />
                        <input
                            className="form-control mt-3"
                            type="text"
                            placeholder="Rating (with number 1-5)"
                            name="rating_product"
                            value={data.rating_product}
                            onChange={handleChange}
                        />
                        <input
                            className="form-control mt-3"
                            type="text"
                            placeholder="Aparel"
                            name="nama_toko"
                            value={data.nama_toko}
                            onChange={handleChange}
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

                        {/* <input
                            className="form-control mt-3"
                            type="text"
                            placeholder="Description Product"
                            name="description_product"
                            value={data.description_product}
                            onChange={handleChange}
                        />  */}

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <button type="submit" className="btn btn-primary">Create</button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}

export default ModalCreate;