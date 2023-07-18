import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import updateProductAction from '../config/redux/actions/updateProductAction';

const ModalUpdate = ({id, name, price, stock, rating_product, nama_toko, description_product, children}) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] = useState({
        name,
        price,
        stock,
        rating_product,
        nama_toko,
        description_product
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

        dispatch(updateProductAction(data, id, image, setShow))
    }

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
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
                            placeholder="Ratinng (with number 1-5)"
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

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <button type="submit" className="btn btn-primary">{children}</button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}

export default ModalUpdate;