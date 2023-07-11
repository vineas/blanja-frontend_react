import Carousel from './Carousel'
import Category from './Category'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import Foot from './Foot'
import { Link } from 'react-router-dom'
const jasImage = require('../img/jas.png')


const Home = () => {
  let [products, setProduct] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4000/products')
      .then((res) => {
        setProduct(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
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
                  <Link to={`/product/${product.id}`}>
                  <div className="border rounded product">
                    <img src={product.image} crossOrigin="anonymous" style={{ width: 240, padding: 10 }} />
                    <div className="p-2">
                      <h5 className="card-title">
                        {product.name}
                      </h5>
                      <h5 className="text-danger">Rp {product.price}</h5>
                      <h6 className="text-warning">Rating: ({product.rating_product})</h6>
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
              <div className="col-md-3 col-sm-6 mb-5">
                <div className="border rounded product">
                  <img className="w-100" src={jasImage} alt="cloth" />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp 500.000</h5>
                    <img src="assets\img\star.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-5">
                <div className="border rounded product">
                  <img className="w-100" src={jasImage} alt="cloth" />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp 500.000</h5>
                    <img src="assets\img\star.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-5">
                <div className="border rounded product">
                  <img className="w-100" src={jasImage} alt="cloth" />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp 500.000</h5>
                    <img src="assets\img\star.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-5">
                <div className="border rounded product">
                  <img className="w-100" src={jasImage} alt="cloth" />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp 500.000</h5>
                    <img src="assets\img\star.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-5">
                <div className="border rounded product">
                  <img className="w-100" src={jasImage} alt="cloth" />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp 500.000</h5>
                    <img src="assets\img\star.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-5">
                <div className="border rounded product">
                  <img className="w-100" src={jasImage} alt="cloth" />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp 500.000</h5>
                    <img src="assets\img\star.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-5">
                <div className="border rounded product">
                  <img className="w-100" src={jasImage} alt="cloth" />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp 500.000</h5>
                    <img src="assets\img\star.png" alt="stars" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-5">
                <div className="border rounded product">
                  <img className="w-100" src={jasImage} alt="cloth" />
                  <div className="p-2">
                    <h5 className="card-title">
                      Men's formal suit - Black &amp; White
                    </h5>
                    <h5 className="text-danger">Rp 500.000</h5>
                    <img src="assets\img\star.png" alt="stars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Foot/>
    </>
  )
}

export default Home