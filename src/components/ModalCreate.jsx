import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalCreate = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] = useState({
        name: "",
        price: "",
        stock: "",
        rating_product: "",
        nama_toko: ""
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
        const formData = new FormData();
        formData.append('name', data.name)
        formData.append('price', data.price)
        formData.append('stock', data.stock)
        formData.append('image', image)
        formData.append('rating_product', data.rating_product)
        formData.append('nama_toko', data.nama_toko)
        axios.post("http://localhost:4000/products", formData)
            .then(() => {
                alert("Product created")
                setShow(false)
                window.location.reload()
            })
            .catch((err) => {
                alert(err);
                setShow(false)
            })
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow} style={{marginTop:30}}>
                Create
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
                            placeholder="name"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                        />
                        <input
                            className="form-control mt-3"
                            type="text"
                            placeholder="price"
                            name="price"
                            value={data.price}
                            onChange={handleChange}
                        />
                        <input
                            className="form-control mt-3"
                            type="text"
                            placeholder="stock"
                            name="stock"
                            value={data.stock}
                            onChange={handleChange}
                        />
                        <input
                            className="form-control mt-3"
                            type="file"
                            placeholder="image"
                            name="image"
                            onChange={handleUpload}
                        />
                        <input
                            className="form-control mt-3"
                            type="text"
                            placeholder="rating_product"
                            name="rating_product"
                            value={data.rating_product}
                            onChange={handleChange}
                        />
                        <input
                            className="form-control mt-3"
                            type="text"
                            placeholder="nama_toko"
                            name="nama_toko"
                            value={data.nama_toko}
                            onChange={handleChange}
                        />
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