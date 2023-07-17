import React from 'react'
const gopay = require('../img/payment/gopay.png')
const pos = require('../img/payment/pos.png')
const master = require('../img/payment/mastercard.png')

const ModalPayment = () => {
    return (
        <>
            <div className="btn-payment">
                <button
                    type="button"
                    className="btn"
                    data-toggle="modal"
                    data-target="#exampleModal2"
                    style={{
                        color: "white",
                        width: 322,
                        height: 36,
                        borderRadius: 24,
                        border: 1,
                        backgroundColor: "#DB3022",
                        marginTop: 25
                    }}
                >
                    Select payment
                </button>
            </div>
            <div
                className="modal fade"
                id="exampleModal2"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel">
                                Payment
                            </h3>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h4>Payment method</h4>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src={gopay} alt="" />
                                        </div>
                                        <div className="col-md-6">
                                            <h5>Gopay</h5>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="flexCheckDefault"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src={pos} alt="" />
                                        </div>
                                        <div className="col-md-6">
                                            <h5>Pos Indonesia</h5>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="flexCheckDefault"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src={master} alt="" />
                                        </div>
                                        <div className="col-md-6">
                                            <h5>Mastercard</h5>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="flexCheckDefault"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <h5>Shopping summary</h5>
                                <div className="row">
                                    <div className="col-md-9">Order</div>
                                    <div className="col-md-3">Rp 200.000</div>
                                    <div className="col-md-9">Delivery</div>
                                    <div className="col-md-3">Rp 200.000</div>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className="row">
                            <div className="col-md-7">
                                <div style={{ marginLeft: 25 }}>
                                    <h6>Shopping summary</h6>
                                    <h6>Rp 400.000</h6>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Discard
                                </button>
                                <button type="button" className="btn btn-danger">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ModalPayment