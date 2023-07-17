import React from 'react'
const filterIcon = require('../img/filter.png')

const ModalFilter = () => {
    return (
        <>
            <a
                type="button"
                className="btn"
                data-toggle="modal"
                data-target="#exampleModal1"
            >
                <img
                    className="mr-4"
                    src={filterIcon}
                    alt="filter"
                />
            </a>

            {/* Modal */}
            <div
                className="modal fade"
                id="exampleModal1"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel">
                                Filter
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
                            <div>
                                <h5>Colors</h5>
                                <img src="../assets/img/filter/Color.png" alt="" />
                                <img src="../assets/img/filter/Color-1.png" alt="" />
                                <img src="../assets/img/filter/Color-2.png" alt="" />
                                <img src="../assets/img/filter/Color-3.png" alt="" />
                                <img src="../assets/img/filter/Color-4.png" alt="" />
                                <img src="../assets/img/filter/Color-5.png" alt="" />
                            </div>
                            <hr />
                            <div>
                                <h5>Size</h5>
                                <div style={{ display: "flex" }}>
                                    <a href="">
                                        <div
                                            className="border"
                                            style={{ width: 40, height: 40, borderRadius: 8, margin: 7 }}
                                        >
                                            <h6
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    marginTop: 10
                                                }}
                                            >
                                                XS
                                            </h6>
                                        </div>
                                    </a>
                                    <a href="">
                                        <div
                                            className="border"
                                            style={{ width: 40, height: 40, borderRadius: 8, margin: 7 }}
                                        >
                                            <h6
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    marginTop: 10
                                                }}
                                            >
                                                S
                                            </h6>
                                        </div>
                                    </a>
                                    <a href="">
                                        <div
                                            className="border"
                                            style={{ width: 40, height: 40, borderRadius: 8, margin: 7 }}
                                        >
                                            <h6
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    marginTop: 10
                                                }}
                                            >
                                                M
                                            </h6>
                                        </div>
                                    </a>
                                    <a href="">
                                        <div
                                            className="border"
                                            style={{ width: 40, height: 40, borderRadius: 8, margin: 7 }}
                                        >
                                            <h6
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    marginTop: 10
                                                }}
                                            >
                                                L
                                            </h6>
                                        </div>
                                    </a>
                                    <a href="">
                                        <div
                                            className="border"
                                            style={{ width: 40, height: 40, borderRadius: 8, margin: 7 }}
                                        >
                                            <h6
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    marginTop: 10
                                                }}
                                            >
                                                XL
                                            </h6>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <h5>Category</h5>
                                <div className="row">
                                    <div className="col-md-12">
                                        <button
                                            className="btn border"
                                            style={{
                                                marginRight: 20,
                                                width: 100,
                                                height: 40,
                                                borderRadius: 8,
                                                marginTop: 14
                                            }}
                                        >
                                            All
                                        </button>
                                        <button
                                            className="btn border"
                                            style={{
                                                marginRight: 20,
                                                width: 100,
                                                height: 40,
                                                borderRadius: 8,
                                                marginTop: 14
                                            }}
                                        >
                                            Women
                                        </button>
                                        <button
                                            className="btn border"
                                            style={{
                                                marginRight: 20,
                                                width: 100,
                                                height: 40,
                                                borderRadius: 8,
                                                marginTop: 14
                                            }}
                                        >
                                            Men
                                        </button>
                                        <button
                                            className="btn border"
                                            style={{
                                                marginRight: 20,
                                                width: 100,
                                                height: 40,
                                                borderRadius: 8,
                                                marginTop: 14
                                            }}
                                        >
                                            Boys
                                        </button>
                                        <button
                                            className="btn border"
                                            style={{
                                                marginRight: 20,
                                                width: 100,
                                                height: 40,
                                                borderRadius: 8,
                                                marginTop: 14
                                            }}
                                        >
                                            Girls
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <h5>Brand</h5>
                            </div>
                        </div>
                        <div className="modal-footer">
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
        </>
    )
}

export default ModalFilter