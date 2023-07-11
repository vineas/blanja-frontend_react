import React from 'react'

const Mybag = () => {
    return (
        <>
            <main style={{ marginTop: 120 }}>
                <div className="container">
                    <h1>My bag</h1>
                    <div className="row" style={{ marginTop: 20 }}>
                        <div className="col-md-8 ">
                            <div
                                className="col-md-12 border"
                                style={{
                                    boxShadow: "0px 0px 10px #29292940, 0px 0px 25px #fff",
                                    borderRadius: 8,
                                    paddingTop: 9
                                }}
                            >
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        id="flexCheckDefault"
                                    />
                                </div>
                                <h6 className="card-title" style={{ marginLeft: 20 }}>
                                    Select all items
                                </h6>
                            </div>
                            <div
                                className="col-md-12 border mt-2"
                                style={{
                                    boxShadow: "0px 0px 10px #29292940, 0px 0px 25px #fff",
                                    borderRadius: 8
                                }}
                            >
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        id="flexCheckDefault"
                                        style={{ marginTop: 45 }}
                                    />
                                </div>
                                <div className="card-body" style={{ display: "flex" }}>
                                    <img src="../assets/img/jas-kotak.png" />
                                    <div style={{ marginLeft: 14 }}>
                                        <h5 className="card-title">Men's formal suit - Black</h5>
                                        <p className="card-text">Zalora Cloth</p>
                                    </div>
                                    <div className="jumlah">
                                        <button
                                            style={{
                                                borderRadius: "50%",
                                                height: 26,
                                                width: 26,
                                                border: 1
                                            }}
                                        >
                                            -
                                        </button>
                                        <h6 style={{ marginLeft: 21 }}>1</h6>
                                        <button
                                            style={{
                                                marginLeft: 21,
                                                borderRadius: "50%",
                                                height: 26,
                                                width: 26,
                                                border: 1
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className="harga">
                                        <h6>Rp 200.000</h6>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-md-12 border mt-2"
                                style={{
                                    boxShadow: "0px 0px 10px #29292940, 0px 0px 25px #fff",
                                    borderRadius: 8
                                }}
                            >
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        id="flexCheckDefault"
                                        style={{ marginTop: 45 }}
                                    />
                                </div>

                            </div>
                        </div>
                        <div
                            className="col-md-4 border"
                            style={{
                                boxShadow: "0px 0px 10px #29292940, 0px 0px 25px #fff",
                                borderRadius: 8
                            }}
                        >
                            <h5 className="card-title" style={{ marginTop: 26 }}>
                                Shopping summary
                            </h5>
                            <div style={{ display: "flex" }}>
                                <p className="card-text">Total price</p>
                                <h5 style={{ marginLeft: "auto", marginRight: 42 }}>Rp 400.000</h5>
                            </div>
                            <button
                                className="btn-choose-address"
                                style={{
                                    color: "white",
                                    width: 322,
                                    height: 36,
                                    borderRadius: 24,
                                    border: 1,
                                    backgroundColor: "#DB3022"
                                }}
                            >
                                Buy
                            </button>
                        </div>
                        <div className="card-body" style={{ display: "flex" }}>
                                    <img src="../assets/img/jas-kotak.png" />
                                    <div style={{ marginLeft: 14 }}>
                                        <h5 className="card-title">Men's formal suit - Black</h5>
                                        <p className="card-text">Zalora Cloth</p>
                                    </div>
                                    <div className="jumlah">
                                        <button
                                            style={{
                                                borderRadius: "50%",
                                                height: 26,
                                                width: 26,
                                                border: 1
                                            }}
                                        >
                                            -
                                        </button>
                                        <h6 style={{ marginLeft: 21 }}>1</h6>
                                        <button
                                            style={{
                                                marginLeft: 21,
                                                borderRadius: "50%",
                                                height: 26,
                                                width: 26,
                                                border: 1
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className="harga">
                                        <h6>Rp 200.000</h6>
                                    </div>
                                </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Mybag