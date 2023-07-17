import React from 'react'

const ModalNewAdd = () => {
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
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputName" className="col-sm-7 col-form-label">
                                    Recipient’s name
                                </label>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control" id="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputName" className="col-sm-9 col-form-label">
                                    Recipient’s telephone number
                                </label>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control" id="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputName" className="col-sm-8 col-form-label">
                                    Address
                                </label>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control" id="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputName" className="col-sm-8 col-form-label">
                                    Postal code
                                </label>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control" id="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputName" className="col-sm-8 col-form-label">
                                    City or Subdistrict
                                </label>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control" id="" />
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
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    style={{ marginTop: 20, borderRadius: 25, width: 100 }}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ModalNewAdd