import React, { useEffect, useState } from 'react'
// import Nav from '../pages/Nav'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ModalChooseAdd from '../components/ModalChooseAdd'
// import ModalNewAdd from '../components/ModalNewAdd'
import NavLogin from './NavLogin'
import ModalPayment from '../components/ModalPayment'

const Order = () => {
    let { id } = useParams()
    let [product, setProduct] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:4000/products/${id}`)
            .then((res) => {
                setProduct(res.data.data[0]);
                // console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    })
    return (
        <>
        <NavLogin/>
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
                                <ModalChooseAdd/>
                                {/* <button
                                    className="btn-choose-address"
                                    style={{
                                        backgroundColor: "white",
                                        width: 240,
                                        height: 36,
                                        borderRadius: 24
                                    }}
                                >
                                    Choose another address
                                </button> */}
                            </div>
                        </div>
                        <div
                            className="col-md-12 border mt-2"
                            style={{boxShadow: "0px 0px 10px #29292940, 0px 0px 25px #fff", borderRadius: 8
                            }}
                        >
                            <div className="card-body" style={{ display: "flex" }}>
                                <img src={product.image} crossOrigin="anonymous" style={{ width: "13%", borderRadius: 8 }} alt='prop'/>
                                <div style={{ marginLeft: 14 }}>
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.nama_toko}</p>
                                </div>
                                <h5 style={{ marginLeft: "auto", marginTop: 25, marginRight: 42 }}>
                                    {product.price}
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
                            <h6 style={{ marginLeft: "auto", marginRight: 42 }}>Rp {product.price}</h6>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p className="card-text">Delivery</p>
                            <h6 style={{ marginLeft: "auto", marginRight: 42 }}>Rp {product.price}</h6>
                        </div>
                        <hr />
                        <div style={{ display: "flex" }}>
                            <h6 className="card-title">Shoping summary</h6>
                            <h6 style={{ marginLeft: "auto", marginRight: 42, color: "#DB3022" }}>
                                Rp {product.price}
                            </h6>
                        </div>
                        <div className="btn-payment">
                            <ModalPayment/>
                            {/* <button
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
                            </button> */}
                        </div>
                    </div>
                </div>
                {/* sampai sini */}
            </div>

        </>
    )
}

export default Order