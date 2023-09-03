import React, { useState } from 'react'
import createAddressAction from '../config/redux/actions/createAddAction';
import { useDispatch } from 'react-redux';

const ModalNewAdd = () => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const user_customer = localStorage.getItem("customer_id");
    const [data, setData] = useState({
        address_as: "",
        recipient_name: "",
        recipient_phone: "",
        address_line: "",
        postal_code: "",
        city_or_subdistrict: "",
        customer_id: user_customer
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createAddressAction(data, setShow))
    }

    return (
        <>
            <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target=".bd-example-modal-lg1"
                style={{
                    width: "100%",
                    height: 86,
                    border: "1px dashed black",
                    backgroundColor: "white",
                    color: "black"
                }}
            >
                Add New Adress
            </button>

            <div
                className="modal fade bd-example-modal-lg1"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
            >
                <form onSubmit={handleSubmit}>
                    <div className="modal-dialog modal-lg1">
                        <div className="modal-content" style={{ padding: 30 }}>
                            <h3 style={{ display: "flex", justifyContent: "center" }}>
                                Add new address
                            </h3>
                            <div className="row">
                                <div className="col-md-12">
                                    <label htmlFor="inputName" className="col-sm-7 col-form-label">
                                        Save address as (ex : home address, office address)
                                    </label>
                                    <div className="col-sm-12">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id=""
                                            placeholder="Rumah"
                                            name="address_as"
                                            value={data.address_as}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputName" className="col-sm-7 col-form-label">
                                        Recipient’s name
                                    </label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" id=""
                                            name="recipient_name"
                                            value={data.recipient_name}
                                            onChange={handleChange} 
                                            required/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputName" className="col-sm-9 col-form-label">
                                        Recipient’s telephone number
                                    </label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" id=""
                                            name="recipient_phone"
                                            value={data.recipient_phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputName" className="col-sm-8 col-form-label">
                                        Address
                                    </label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" id=""
                                            name="address_line"
                                            value={data.address_line}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputName" className="col-sm-8 col-form-label">
                                        Postal code
                                    </label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" id=""
                                            name="postal_code"
                                            value={data.postal_code}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputName" className="col-sm-8 col-form-label">
                                        City or Subdistrict
                                    </label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" id=""
                                            name="city_or_subdistrict"
                                            value={data.city_or_subdistrict}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-check" style={{ marginLeft: 20, marginTop: 20 }}>
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="defaultCheck1"
                                        />
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            Make it the primary address
                                        </label>
                                    </div>
                                </div>
                                <div
                                    className="col-md-6"
                                    style={{ display: "flex", justifyContent: "flex-end" }}
                                >
                                    <button
                                        type="button"
                                        className="btn"
                                        style={{
                                            marginTop: 20,
                                            borderRadius: 25,
                                            marginRight: 15,
                                            width: 100
                                        }}
                                        onClick={handleClose}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-danger"
                                        style={{ marginTop: 20, borderRadius: 25, width: 100 }}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>


        </>
    )
}

export default ModalNewAdd