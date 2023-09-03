import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import Foot from './Foot'
import NavLogin from './NavLogin'
// import { useDispatch } from 'react-redux'
// import detailProductAction from '../config/redux/actions/detailProductsAction'
const jas = require('../img/jas.png')
const stars = require('../img/activated.png')
const starss = require('../img/bintang.png')
const color1 = require('../img/color/black.png')
const color2 = require('../img/color/blue.png')
const color3 = require('../img/color/green.png')
const color4 = require('../img/color/red.png')

const DetailProduct = () => {
    // const dispatch = useDispatch()
    let {id} = useParams()
    let [product, setProduct]  = useState([])
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
    return (
        <>
        <NavLogin/>
            <div className="container" style={{marginTop:90}}>
                <div className="keterangan-product">
                    <p>Home &gt; Product &gt; Category</p>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <div>
                        <img src={product.product_image} crossOrigin="anonymous" style={{ width: "93%", borderRadius: 8 }}/>

                            <div style={{ marginTop: 20,}}>
                                <img
                                    src={product.product_image} crossOrigin="anonymous"
                                    alt=""
                                    style={{ width: "20%", borderRadius: 8,  marginRight: 20  }}
                                />
                                <img
                                    src={product.product_image} crossOrigin="anonymous"
                                    alt=""
                                    style={{ width: "20%", borderRadius: 8, marginRight: 20 }}
                                />
                                <img
                                    src={product.product_image} crossOrigin="anonymous"
                                    alt=""
                                    style={{ width: "20%", borderRadius: 8,  marginRight: 20  }}
                                />
                                <img
                                    src={product.product_image} crossOrigin="anonymous"
                                    alt=""
                                    style={{ width: "20%", borderRadius: 8 }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="judul-product">
                            <h1>{product.product_name}</h1>
                            {/* <p>{product.product_nama_toko}</p> */}
                            <h5>Rating: </h5>
                            {/* <p> <Rating/> ({product.rating_product})</p> */}
                            <p>Price</p>
                            <h1>IDR {product && product.product_price ? product.product_price.toLocaleString() : 'N/A'}</h1>
                            <h5>Color</h5>
                            <div style={{ display: "flex" }}>
                                <a href="">
                                    <img
                                        src={color1}
                                        style={{ width: 32, height: 32 }}
                                    />
                                </a>
                                <a href="">
                                    <img
                                        src={color2}
                                        style={{ width: 32, height: 32, marginLeft: 12 }}
                                    />
                                </a>
                                <a href="">
                                    <img
                                        src={color3}
                                        style={{ width: 32, height: 32, marginLeft: 12 }}
                                    />
                                </a>
                                <a href="">
                                    <img
                                        src={color4}
                                        style={{ width: 32, height: 32, marginLeft: 12 }}
                                    />
                                </a>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
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
                                </div>
                                <div className="col-md-6">
                                    <div className="size">
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

                                <Link to={`/mybag/${product.product_id}`}>
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
                                </Link>


                            </div>
                        </div>
                    </div>
                    <div className="col-md-12" style={{ marginTop: 30 }}>
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
                                <h1>5.0</h1>
                                <h7 style={{ marginTop: 20 }}>/5</h7>
                                {/* <img src="../assets/img/10.png" style="width:30px; height: 20px;margin-top:40px;"> */}
                            </div>
                            <div className="ml-md-5 ml-auto" id="rate">
                                <div className="d-flex flex-column">
                                    <div className="d-flex justify-content-center">
                                        <img src={stars} alt="stars" />
                                        <span>5</span>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <img src={stars} alt="stars" />
                                        <span>4</span>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <img src={stars} alt="stars" />
                                        <span>3</span>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <img src={stars} alt="stars" />
                                        <span>2</span>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <img src={stars} alt="stars" />
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
                        <img src={starss} style={{ marginTop: 14 }} />
                    </div>
                    <hr />
                    <section className="mt-5">
                        <div className="container mt-5">
                            <h2 className="ml-3">You can also like this</h2>
                            <p className="ml-3">You've never seen before!</p>
                            <div className="row">
                                <div className="col-md-3 col-sm-6 mb-5">
                                    <div>
                                        <img className="w-100" src={jas} alt="cloth" />
                                        <div className="p-2">
                                            <h5 className="card-title">
                                                Men's formal suit - Black &amp; White
                                            </h5>
                                            <h5 className="text-danger">$ 40.0</h5>
                                            <img src={starss} alt="stars" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 mb-5">
                                    <div>
                                        <img className="w-100" src={jas} alt="cloth" />
                                        <div className="p-2">
                                            <h5 className="card-title">
                                                Men's formal suit - Black &amp; White
                                            </h5>
                                            <h5 className="text-danger">$ 40.0</h5>
                                            <img src={starss} alt="stars" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 mb-5">
                                    <div>
                                        <img className="w-100" src={jas} alt="cloth" />
                                        <div className="p-2">
                                            <h5 className="card-title">
                                                Men's formal suit - Black &amp; White
                                            </h5>
                                            <h5 className="text-danger">$ 40.0</h5>
                                            <img src={starss} alt="stars" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 mb-5">
                                    <div>
                                        <img className="w-100" src={jas} alt="cloth" />
                                        <div className="p-2">
                                            <h5 className="card-title">
                                                Men's formal suit - Black &amp; White
                                            </h5>
                                            <h5 className="text-danger">$ 40.0</h5>
                                            <img src={starss} alt="stars" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 mb-5">
                                    <div>
                                        <img className="w-100" src={jas} alt="cloth" />
                                        <div className="p-2">
                                            <h5 className="card-title">
                                                Men's formal suit - Black &amp; White
                                            </h5>
                                            <h5 className="text-danger">$ 40.0</h5>
                                            <img src={starss} alt="stars" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 mb-5">
                                    <div>
                                        <img className="w-100" src={jas} alt="cloth" />
                                        <div className="p-2">
                                            <h5 className="card-title">
                                                Men's formal suit - Black &amp; White
                                            </h5>
                                            <h5 className="text-danger">$ 40.0</h5>
                                            <img src={starss} alt="stars" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 mb-5">
                                    <div>
                                        <img className="w-100" src={jas} alt="cloth" />
                                        <div className="p-2">
                                            <h5 className="card-title">
                                                Men's formal suit - Black &amp; White
                                            </h5>
                                            <h5 className="text-danger">$ 40.0</h5>
                                            <img src={starss} alt="stars" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 mb-5">
                                    <div>
                                        <img className="w-100" src={jas} alt="cloth" />
                                        <div className="p-2">
                                            <h5 className="card-title">
                                                Men's formal suit - Black &amp; White
                                            </h5>
                                            <h5 className="text-danger">$ 40.0</h5>
                                            <img src={starss} alt="stars" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Foot/>
        </>
    )
}

export default DetailProduct