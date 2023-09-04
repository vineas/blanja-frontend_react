import Carousel from './Carousel'
import Category from './Category'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import Foot from './Foot'
import { Link } from 'react-router-dom'
import NavLogin from './NavLogin'
import { useDispatch } from 'react-redux'
import getProductAction from '../config/redux/actions/getProductAction'
const jasImage = require('../img/jas.png')
const starss = require('../img/bintang.png')

const Home = () => {
  let [products, setProduct] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch()
    axios.get(`${process.env.REACT_APP_API_KEY}/products`)
      .then((res) => {
        setProduct(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const loginTrue = localStorage.getItem("token");
  if (!loginTrue) {
    return (
      <>
        <Nav></Nav>
        <main className='mt-90'>
          <Carousel />
          <Category />

          <section className="container" style={{ marginTop: 50 }}>
            <h2 className="ml-3">New</h2>
            <p className="ml-3">You've never seen before!</p>
            <div className="container mt-5">
            <div className="row">
                {products.map((product) => (
                  <div className="col-md-3 col-sm-6 mb-5">
                    <Link to={`/product/${product.product_id}`}style={{color: 'black', textDecoration: 'none'}}>
                      <div className="border rounded product">
                        <img src={product.product_image} crossOrigin="anonymous" style={{ width: "100%" }} />
                        <div className="p-2">
                          <h5 className="card-title" style={{fontWeight:'bold'}}>
                            {product.product_name}
                          </h5>
                          <h5 className="text-danger">IDR {product && product.product_price ? product.product_price.toLocaleString() : 'N/A'}</h5>
                          <h6 className="text-warning">⭐⭐⭐⭐⭐</h6>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="container" style={{ marginTop: 50 }}>
            <h2 className="ml-3">Popular</h2>
            <p className="ml-3">Find clothes that are trending recently</p>
            <div className="container mt-5">
            <div className="row">
                {products.map((product) => (
                  <div className="col-md-3 col-sm-6 mb-5">
                    <Link to={`/product/${product.product_id}`}style={{color: 'black', textDecoration: 'none'}}>
                      <div className="border rounded product">
                        <img src={product.product_image} crossOrigin="anonymous" style={{ width: "100%" }} />
                        <div className="p-2">
                          <h5 className="card-title" style={{fontWeight:'bold'}}>
                            {product.product_name}
                          </h5>
                          <h5 className="text-danger">IDR {product && product.product_price ? product.product_price.toLocaleString() : 'N/A'}</h5>
                          <h6 className="text-warning">⭐⭐⭐⭐⭐</h6>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Foot />
      </>
    )
  }
  else {
    return (
      <>
        <NavLogin></NavLogin>
        <main className='mt-90'>
          <Carousel />
          <Category />

          <section className="container" style={{ marginTop: 50 }}>
            <h2 className="ml-3">New</h2>
            <p className="ml-3">You've never seen before!</p>
            <div className="container mt-5">
              <div className="row">
                {products.map((product) => (
                  <div className="col-md-3 col-sm-6 mb-5">
                    <Link to={`/product/${product.product_id}`}style={{color: 'black', textDecoration: 'none'}}>
                      <div className="border rounded product">
                        <img src={product.product_image} crossOrigin="anonymous" style={{ width: "100%" }} />
                        <div className="p-2">
                          <h5 className="card-title" style={{fontWeight:'bold'}}>
                            {product.product_name}
                          </h5>
                          <h5 className="text-danger">IDR {product && product.product_price ? product.product_price.toLocaleString() : 'N/A'}</h5>
                          <h6 className="text-warning">⭐⭐⭐⭐⭐</h6>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="container" style={{ marginTop: 50 }}>
            <h2 className="ml-3">Popular</h2>
            <p className="ml-3">Find clothes that are trending recently</p>
            <div className="container mt-5">
            <div className="row">
                {products.map((product) => (
                  <div className="col-md-3 col-sm-6 mb-5">
                    <Link to={`/product/${product.product_id}`}style={{color: 'black', textDecoration: 'none'}}>
                      <div className="border rounded product">
                        <img src={product.product_image} crossOrigin="anonymous" style={{ width: "100%" }} />
                        <div className="p-2">
                          <h5 className="card-title" style={{fontWeight:'bold'}}>
                            {product.product_name}
                          </h5>
                          <h5 className="text-danger">IDR {product && product.product_price ? product.product_price.toLocaleString() : 'N/A'}</h5>
                          <h6 className="text-warning">⭐⭐⭐⭐⭐</h6>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Foot />
      </>
    )
  }
}

export default Home