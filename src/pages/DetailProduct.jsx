import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import Foot from './Foot'
import NavLogin from './NavLogin'
import Swal from 'sweetalert2'
import Nav from './Nav'
import { Button } from 'react-bootstrap'
import { Skeleton } from '@mui/material';
import 'react-loading-skeleton/dist/skeleton.css'
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
    let { id } = useParams()
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    let [product, setProduct] = useState([])
    const [totalPrice, setTotalPrice] = useState(product.product_price);
    const customerId = localStorage.getItem("customer_id");
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [data, setData] = useState({
        order_quantity: quantity,
        // total_price: totalPrice,
        product_id: id,
        customer_id: customerId,
    });
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

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_KEY}/products`)
            .then((res) => {
                setProducts(res.data.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const handleIncrement = () => {
        const newQuantity = quantity + 1;
        if (newQuantity <= product.product_stock) {
            setQuantity(newQuantity);
            setData({
                ...data,
                order_quantity: newQuantity,
            });
            setTotalPrice(newQuantity * product.product_price);
        } else {
            console.log("Stok melebihi batas.");
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            setData({
                ...data,
                order_quantity: newQuantity,
            });
            setTotalPrice(newQuantity * product.product_price);
        }
    };

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`${process.env.REACT_APP_API_KEY}/orders`, data)
            .then((res) => {
                Swal.fire("Success", "Good choice", "success");
                navigate("/mybag");
            })
            .catch((err) => {
                console.log(err);
                alert(err);
            });
    };

    const loginTrue = localStorage.getItem("token");

    return (
        <>
            {!loginTrue ? <Nav /> : <NavLogin />}
            <div className="container" style={{ marginTop: 90 }}>
                <div className="keterangan-product">
                    <p>Home &gt; Product &gt; Category</p>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <div>
                            <img src={product.product_image} crossOrigin="anonymous" style={{ width: "93%", borderRadius: 8 }} />

                            <div style={{ marginTop: 20, }}>
                                <img
                                    src={product.product_image} crossOrigin="anonymous"
                                    alt=""
                                    style={{ width: "20%", borderRadius: 8, marginRight: 20 }}
                                />
                                <img
                                    src={product.product_image} crossOrigin="anonymous"
                                    alt=""
                                    style={{ width: "20%", borderRadius: 8, marginRight: 20 }}
                                />
                                <img
                                    src={product.product_image} crossOrigin="anonymous"
                                    alt=""
                                    style={{ width: "20%", borderRadius: 8, marginRight: 20 }}
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
                            <p>Stock: {product.product_stock}</p>
                            <h5>Rating: </h5>
                            {/* <p> <Rating/> ({product.rating_product})</p> */}
                            <p>Price</p>
                            <h1 name="total_price" value={data.total_price} onChange={handleChange}>IDR {product && product.product_price ? (product.product_price * quantity).toLocaleString() : 'N/A'}</h1>
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
                                <div className="col-md-6" style={{ marginTop: 20 }}>
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
                                                onClick={handleDecrement}
                                            >
                                                -
                                            </button>
                                            <input
                                                type="number"
                                                style={{
                                                    marginLeft: 21,
                                                    marginTop: 7,
                                                    width: 50,
                                                    textAlign: "center"
                                                }}
                                                //    value={quantity}
                                                name="order_quantity"
                                                value={data.order_quantity}
                                                // onChange={handleChange}
                                                min="0"
                                            />
                                            <button
                                                style={{
                                                    marginLeft: 21,
                                                    borderRadius: "50%",
                                                    height: 36,
                                                    width: 36,
                                                    border: 1
                                                }}
                                                onClick={handleIncrement}

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

                                {/* <Link to={`/mybag/${product.product_id}`}> */}
                                <form onSubmit={handleSubmit}>
                                    <button
                                        type="submit"
                                        className="btn-light-buy"
                                        style={{
                                            border: 1,
                                            borderRadius: 25,
                                            width: 213,
                                            height: 48,
                                            backgroundColor: localStorage.getItem('customer_id') ? "#DB3022" : "#ccc",
                                            color: "#ffffff",
                                            marginTop:15
                                        }}

                                        disabled={!localStorage.getItem('customer_id')}
                                    >
                                        Buy now
                                    </button>
                                </form>
                                {/* </Link> */}
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
                            <div className="container mt-5">
                                {isLoading ? (
                                    <div className="row">
                                        {products.slice(0, 4).map((product) => (
                                            <div className="col-md-3 col-sm-6 mb-5" key={product.product_id}>
                                                <Link to={`/product/${product.product_id}`} style={{ color: 'black', textDecoration: 'none' }} >
                                                    <div className="border rounded product">
                                                        <Skeleton variant="rounded" width={'100%'} height={136} />
                                                        <div className="p-2">
                                                            <Skeleton width={184} height={48} />
                                                            <Skeleton width={100} height={20} />
                                                            <Skeleton width={120} height={16} />
                                                            <Skeleton width={100} height={16} />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="row">
                                        {products.slice(0, 4).map((product) => (
                                            <div className="col-md-3 col-sm-6 mb-5" key={product.product_id}>
                                                <Link to={`/product/${product.product_id}`} style={{ color: 'black', textDecoration: 'none' }} >
                                                    <div className="border rounded product">
                                                        <img src={product.product_image} crossOrigin="anonymous" style={{ width: "100%" }} alt={product.product_name} />
                                                        <div className="p-2">
                                                            <h5 className="card-title" style={{ fontWeight: 'bold' }}>
                                                                {product.product_name}
                                                            </h5>
                                                            <h5 className="text-danger">IDR {product && product.product_price ? product.product_price.toLocaleString() : 'N/A'}</h5>
                                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                                <img src={starss} crossOrigin="anonymous" style={{ width: "50%" }} />
                                                                <p style={{ marginTop: 17, marginLeft: 10, color: 'grey', flex: 1 }}>(5)</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <div style={{ display: 'flex', justifyContent: 'center', }}>
                                    <Link to={`/products`} >
                                        <Button variant="danger" style={{ marginTop: 1, borderRadius: 10 }}>
                                            Load more
                                        </Button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Foot />
        </>
    )
}

export default DetailProduct