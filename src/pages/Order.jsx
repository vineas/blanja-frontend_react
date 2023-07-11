import React from 'react'

const Order = () => {
    return (
        <>
            <div className="container" style={{ marginTop: 110 }}>
                <div>
                    <h1>Checkout</h1>
                </div>
                <div>
                    <h4>Shipping Address</h4>
                </div>
                <div className="row" style={{ marginTop: 24 }}>
                    <div className="col-md-8">
                        <div
                            className="col-md-12 border"
                            style={{
                                boxShadow: "0px 0px 10px #29292940, 0px 0px 25px #fff",
                                borderRadius: 8
                            }}
                        >
                            <h5 className="card-title" style={{ marginTop: 26 }}>
                                Andreas Jane
                            </h5>
                            <p className="card-text">
                                Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten
                                Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja,
                                Kab. Banyumas, 53181
                            </p>
                            <div style={{ paddingBottom: 30 }}>
                                <button
                                    className="btn-choose-address"
                                    style={{
                                        backgroundColor: "white",
                                        width: 240,
                                        height: 36,
                                        borderRadius: 24
                                    }}
                                >
                                    Choose another address
                                </button>
                            </div>
                        </div>
                        <div
                            className="col-md-12 border mt-2"
                            style={{
                                boxShadow: "0px 0px 10px #29292940, 0px 0px 25px #fff",
                                borderRadius: 8
                            }}
                        >
                            <div className="card-body" style={{ display: "flex" }}>
                                <img src="../assets/img/jas-kotak.png" />
                                <div style={{ marginLeft: 14 }}>
                                    <h5 className="card-title">Men's formal suit - Black</h5>
                                    <p className="card-text">Zalora Cloth</p>
                                </div>
                                <h5 style={{ marginLeft: "auto", marginTop: 25, marginRight: 42 }}>
                                    Rp 200.000
                                </h5>
                            </div>
                        </div>
                        <div
                            className="col-md-12 border mt-2"
                            style={{
                                boxShadow: "0px 0px 10px #29292940, 0px 0px 25px #fff",
                                borderRadius: 8
                            }}
                        >
                            <div className="card-body" style={{ display: "flex" }}>
                                <img src="../assets/img/jas-kotak.png" />
                                <div style={{ marginLeft: 14 }}>
                                    <h5 className="card-title">Men's formal suit - Black</h5>
                                    <p className="card-text">Zalora Cloth</p>
                                </div>
                                <h5 style={{ marginLeft: "auto", marginTop: 25, marginRight: 42 }}>
                                    Rp 200.000
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div
                        id="card-summary"
                        className="col-md-4 border"
                        style={{
                            boxShadow: "0px 0px 10px #29292940, 0px 0px 25px #fff",
                            borderRadius: 8
                        }}
                    >
                        <h5 className="card-title" style={{ marginTop: 26 }}>
                            Shoping summary
                        </h5>
                        <div style={{ display: "flex" }}>
                            <p className="card-text">Order</p>
                            <h6 style={{ marginLeft: "auto", marginRight: 42 }}>Rp 200.000</h6>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p className="card-text">Delivery</p>
                            <h6 style={{ marginLeft: "auto", marginRight: 42 }}>Rp 200.000</h6>
                        </div>
                        <hr />
                        <div style={{ display: "flex" }}>
                            <h6 className="card-title">Shoping summary</h6>
                            <h6 style={{ marginLeft: "auto", marginRight: 42, color: "#DB3022" }}>
                                Rp 400.000
                            </h6>
                        </div>
                        <div className="btn-payment">
                            <button
                                className="btn-choose-address"
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
                    </div>
                </div>
                {/* sampai sini */}
            </div>

        </>
    )
}

export default Order