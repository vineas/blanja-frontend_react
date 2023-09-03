import React, { useEffect, useState } from 'react'
import NavLogin from './NavLogin'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
const jas = require('../img/jas.png')

const Mybag = () => {
    let { id } = useParams()
    let [product, setProduct] = useState([])
    const [selectAllChecked, setSelectAllChecked] = useState(false);
    const [individualChecked, setIndividualChecked] = useState(false);
    const [quantity, setQuantity] = useState(1);


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_KEY}/products/${id}`)
            .then((res) => {
                setProduct(res.data.data[0]);
                // console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
        // dispatch(detailProductAction(id))

    }, [])

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

  
    const handleSelectAllChange = () => {
      setSelectAllChecked(!selectAllChecked);
      setIndividualChecked(!selectAllChecked);
    };
  
    const handleIndividualChange = () => {
      setIndividualChecked(!individualChecked);
    };
    return (
        <>
            <NavLogin />
            <main style={{ marginTop: 120 }}>
                <div className="container">
                    <h1>My bag</h1>
                    <div className="row" style={{ marginTop: 20 }}>
                        <div className="col-md-8">
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
                                        value=""
                                        id="flexCheckDefault"
                                        checked={selectAllChecked}
                                        onChange={handleSelectAllChange}
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
                                        value=""
                                        id="flexCheckDefault"
                                        style={{ marginTop: 45 }}
                                        checked={individualChecked}
                                        onChange={handleIndividualChange}
                                    />
                                </div>
                                <div className="card-body" style={{ display: "flex" }}>
                                    <img src={product.product_image} crossOrigin="anonymous" style={{ width: "13%", borderRadius: 8 }} alt='prop' />
                                    <div style={{ marginLeft: 14 }}>
                                        <h5 className="card-title">{product.product_name}</h5>
                                    </div>
                                    <div className="jumlah" style={{ display: 'flex', alignItems: 'center', marginLeft: 50 }}>
                                        <button className="quantity-button" style={{ borderRadius: "50%", height: 26, width: 26, border: "1px solid #000", marginRight: 10, display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }} onClick={handleDecrement}>
                                            -
                                        </button>
                                        <h6 className="quantity-label" style={{ marginLeft: 2, marginRight: 10 }}>{quantity}</h6>
                                        <button className="quantity-button" style={{ borderRadius: "50%", height: 26, width: 26, border: "1px solid #000", marginRight: 10, display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }} onClick={handleIncrement}>
                                            +
                                        </button>
                                    </div>
                                    <div className="harga" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                                        <h4>IDR {product && product.product_price ? (product.product_price * quantity).toLocaleString() : 'N/A'}</h4>
                                    </div>
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
                                <h5 style={{ marginLeft: "auto", marginRight: 42 }}>IDR {product && product.product_price ? (product.product_price * quantity).toLocaleString() : 'N/A'}</h5>
                            </div>

                            <Link to={`/order/${product.product_id}`}>
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
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Mybag