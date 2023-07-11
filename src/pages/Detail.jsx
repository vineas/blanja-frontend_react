import React, { useEffect, useState } from 'react'
import Nav from '../pages/Nav'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const bajuCream = require('../img/product/baju-cream.png')
const jasImg = require('../img/jas.png')
const lima = require('../img/5.0.png')
const star = require('../img/activated.png')
const stars = require('../img/bintang.png')
const black = require('../img/color/black.png')
const blue = require('../img/color/blue.png')
const red = require('../img/color/red.png')
const green = require('../img/color/green.png')

const Detail = () => {
    let {id} = useParams()
    let [product, setProduct]  = useState([])
    useEffect(() => {
        axios.get(`http://localhost:4000/products/${id}`)
          .then((res) => {
            setProduct(res.data.data[0]);
            // console.log(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          })
      }, [])

    let review = {
        width:124, 
        height: 60
    }

    let cardImg = {
        width: 140,
        height: 140
    }

    
    return (
        <>
        {/* <div>
            Name: {product.name}
            Price: {product.price}
            Stock: {product.stock}
        </div> */}
        <Nav />

            <main>
                <section className="container" style={{ marginTop: 90 }}>
                    <div className="keterangan-product">
                        <p>Home &gt; Product &gt; Category</p>
                    </div>
                    <div className="image-product">
                        <div className="card-detail">
                        <img src={product.image} crossOrigin="anonymous" style={{width: 500, padding: 10}}/>
                            <div
                                className="pilihan-baju"
                                style={{ display: "flex", marginTop: 17 }}
                            >
                                <img
                                    className="pilihan-baju-1"
                                    src="../assets/img/product/orange.png"
                                    alt=""
                                />
                                <img
                                    className="pilihan-baju-2"
                                    src="../assets/img/product/navy.png"
                                    alt=""
                                />
                                <img
                                    className="pilihan-baju-3"
                                    src="../assets/img/product/blue.png"
                                    alt=""
                                />
                                <img
                                    className="pilihan-baju-4"
                                    src="../assets/img/product/putih.png"
                                    alt=""
                                />
                                <img
                                    className="pilihan-baju-5"
                                    src="../assets/img/product/baju-cream.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="judul-product">
                            <h1>{product.name}</h1>
                            <p>{product.nama_toko}</p> 
                            <p>⭐⭐⭐⭐⭐(5)</p>
                            <p>Price</p>
                            <h1>Rp {product.price}</h1>
                            <h5>Color</h5>
                            <div style={{ display: "flex" }}>
                                <a href="">
                                    <img
                                        src={black}
                                        style={{ width: 32, height: 32 }}
                                    />
                                </a>
                                <a href="">
                                    <img
                                        src={red}
                                        style={{ width: 32, height: 32, marginLeft: 12 }}
                                    />
                                </a>
                                <a href="">
                                    <img
                                        src={blue}
                                        style={{ width: 32, height: 32, marginLeft: 12 }}
                                    />
                                </a>
                                <a href="">
                                    <img
                                        src={green}
                                        style={{ width: 32, height: 32, marginLeft: 12 }}
                                    />
                                </a>
                            </div>
                            <div className="btn-size-jumlah">
                                <div className="size">
                                    <h5>Size</h5>
                                    <div style={{ display: "flex" }}>
                                        <button
                                            style={{
                                                borderRadius: "50%",
                                                height: 36,
                                                width: 36,
                                                border: 1
                                            }}
                                        >
                                            -
                                        </button>
                                        <h6 style={{ marginLeft: 21 }}>28</h6>
                                        <button
                                            style={{
                                                marginLeft: 21,
                                                borderRadius: "50%",
                                                height: 36,
                                                width: 36,
                                                border: 1
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="jumlah" style={{ marginLeft: 89 }}>
                                    <h5>Jumlah</h5>
                                    <div style={{ display: "flex" }}>
                                        <button
                                            style={{
                                                borderRadius: "50%",
                                                height: 36,
                                                width: 36,
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
                                                height: 36,
                                                width: 36,
                                                border: 1
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-buy" style={{ marginTop: 20 }}>
                                <button
                                    type="button"
                                    className="btn btn-light"
                                    style={{ borderRadius: 25, width: 160, height: 48 }}
                                >
                                    Chat
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-light"
                                    style={{ borderRadius: 25, width: 160, height: 48 }}
                                >
                                    Add bag
                                </button>
                                <button
                                    type="button"
                                    className="btn-light-buy"
                                    style={{
                                        border: 1,
                                        borderRadius: 25,
                                        width: 213,
                                        height: 48,
                                        backgroundColor: "#DB3022",
                                        color: "#ffffff"
                                    }}
                                >
                                    Buy now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <h4>Informasi Produk</h4>
                        <h6>Condition</h6>
                        <h6 style={{ color: "#DB3022" }}>New</h6>
                    </div>
                    <div className="description">
                        <h4>Description</h4>
                        <p>{product.description_product}</p>
                    </div>
                    <div className="review">
                        <h3>Product review</h3>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div className="review" style={{ display: "flex", marginTop: 22 }}>
                            <h1>5</h1>
                            {/* <img src={lima} alt=""style={{width: 140}} /> */}
                            <h4 style={{ marginTop: "auto" }}>/5</h4>
                        </div>
                        <div className="ml-md-5 ml-auto" id="rate">
                            <div className="d-flex flex-column">
                                <div className="d-flex justify-content-center">
                                    <img src={star} alt="stars" />
                                    <span>5</span>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <img src={star} alt="stars" />
                                    <span>4</span>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <img src={star} alt="stars" />
                                    <span>3</span>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <img src={star} alt="stars" />
                                    <span>2</span>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <img src={star} alt="stars" />
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                        <div className="ml-3">
                            <hr
                                className="mt-2"
                                style={{
                                    border: "5px lightblue solid",
                                    width: 120,
                                    borderRadius: 8
                                }}
                            />
                        </div>
                        <div className="ml-1 d-flex flex-column">
                            <span>5</span>
                            <span>0</span>
                            <span>0</span>
                            <span>0</span>
                            <span>0</span>
                        </div>
                    </div>
                    <img src={stars} style={{ marginTop: 14 }} />
                    <hr />
                </section>
                <section className="mt-5">
                    <div className="container mt-5">
                        <h2 className="ml-3">You can also like this</h2>
                        <p className="ml-3">You've never seen before!</p>
                        <div className="row">
                            <div className="col-md-3 col-sm-6 mb-5">
                                <div>
                                    <img className="w-100" src={jasImg} alt="cloth" />
                                    <div className="p-2">
                                        <h5 className="card-title">
                                            Men's formal suit - Black &amp; White
                                        </h5>
                                        <h5 className="text-danger">Rp 500.000</h5>
                                        <img src={stars} alt="stars" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-5">
                                <div>
                                    <img className="w-100" src={jasImg} alt="cloth" />
                                    <div className="p-2">
                                        <h5 className="card-title">
                                            Men's formal suit - Black &amp; White
                                        </h5>
                                        <h5 className="text-danger">Rp 500.000</h5>
                                        <img src={stars} alt="stars" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-5">
                                <div>
                                    <img className="w-100" src={jasImg} alt="cloth" />
                                    <div className="p-2">
                                        <h5 className="card-title">
                                            Men's formal suit - Black &amp; White
                                        </h5>
                                        <h5 className="text-danger">Rp 500.000</h5>
                                        <img src={stars} alt="stars" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-5">
                                <div>
                                    <img className="w-100" src={jasImg} alt="cloth" />
                                    <div className="p-2">
                                        <h5 className="card-title">
                                            Men's formal suit - Black &amp; White
                                        </h5>
                                        <h5 className="text-danger">Rp 500.000</h5>
                                        <img src={stars} alt="stars" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-5">
                                <div>
                                    <img className="w-100" src={jasImg} alt="cloth" />
                                    <div className="p-2">
                                        <h5 className="card-title">
                                            Men's formal suit - Black &amp; White
                                        </h5>
                                        <h5 className="text-danger">Rp 500.000</h5>
                                        <img src={stars} alt="stars" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-5">
                                <div>
                                    <img className="w-100" src={jasImg} alt="cloth" />
                                    <div className="p-2">
                                        <h5 className="card-title">
                                            Men's formal suit - Black &amp; White
                                        </h5>
                                        <h5 className="text-danger">Rp 500.000</h5>
                                        <img src={stars} alt="stars" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-5">
                                <div>
                                    <img className="w-100" src={jasImg} alt="cloth" />
                                    <div className="p-2">
                                        <h5 className="card-title">
                                            Men's formal suit - Black &amp; White
                                        </h5>
                                        <h5 className="text-danger">Rp 500.000</h5>
                                        <img src={stars} alt="stars" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-5">
                                <div>
                                    <img className="w-100" src={jasImg} alt="cloth" />
                                    <div className="p-2">
                                        <h5 className="card-title">
                                            Men's formal suit - Black &amp; White
                                        </h5>
                                        <h5 className="text-danger">Rp 500.000</h5>
                                        <img src={stars} alt="stars" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>

    )
}

export default Detail