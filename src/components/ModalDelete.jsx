import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDelete = ({id, children}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        axios.delete(`http://localhost:4000/products/${id}`)
            .then(() => {
                alert("Product Deleted")
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
            <Button variant="danger" onClick={handleShow}>
                {children}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{children} product</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <h3>Are you sure wanna delete this product?</h3>
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

export default ModalDelete;