import React, { useEffect, useState } from 'react'
import NavLogin from './NavLogin'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { Skeleton } from '@mui/material';
import { useDispatch } from 'react-redux'
import Foot from './Foot'
import Nav from './Nav'
const starss = require('../img/bintang.png')



const MoreProducts = () => {

    let [products, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 8;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = products.slice(firstIndex, lastIndex);
    const npage = Math.ceil(products.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)


    useEffect(() => {
        // dispatch()
        axios.get(`${process.env.REACT_APP_API_KEY}/products`)
            .then((res) => {
                setProduct(res.data.data);
                setIsLoading(false);
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const loginTrue = localStorage.getItem("token");
    return (
        <>
            <style>
                <>
                    @media (max-width: 767px) {"{"}
                    .col-sm-6 {"{"}
                    flex: 0 0 50%; max-width: 50%;
                    {"}"}
                    {"}"}
                </>
            </style>
            {!loginTrue ? <Nav /> : <NavLogin />}
            <section className="container" style={{ marginTop: 90 }}>
                <h2 className="ml-3">Popular</h2>
                <p className="ml-3">Find clothes that are trending recently</p>
                <div className="container mt-5">
                    {isLoading ? (
                        <div className="row">
                            {Array.from({ length: 8 }).map((_, index) => (
                                <div
                                    className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4"
                                    key={index}
                                    style={{ width: 222 }}
                                >
                                    <div className="border rounded product" style={{ height: 340 }}>
                                        <Skeleton height={196} />
                                        <div className="p-2">
                                            <Skeleton width={184} height={48} />
                                            <Skeleton width={100} height={20} />
                                            <Skeleton width={120} height={16} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="row">
                            {records.map((product) => (
                                <div className="col-md-3 col-sm-6 mb-5" key={product.product_id}>
                                    {localStorage.getItem('customer_id') || localStorage.getItem('seller_id') ? (
                                        <Link to={`/product/${product.product_id}`} style={{ color: 'black', textDecoration: 'none' }}>
                                            <div className="border" style={{ boxShadow: "0px 0px 10px #29292940, 0px 0px 25px #fff", borderRadius: 20 }}>
                                                <img src={product.product_image} crossOrigin="anonymous" style={{ width: "100%", height: "auto", borderRadius: 20 }} alt={product.product_name} />
                                                <div className="p-2">
                                                    <h5 className="card-title" style={{ fontWeight: 'bold' }}>
                                                        {product.product_name}
                                                    </h5>
                                                    <h5 className="text-danger">IDR {product && product.product_price ? product.product_price.toLocaleString() : 'N/A'}</h5>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <img src={starss} crossOrigin="anonymous" style={{ width: "50%" }} alt="Stars" />
                                                        <p style={{ marginTop: 17, marginLeft: 10, color: 'grey', flex: 1 }}>(5)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ) : (
                                        <Link to="/login" style={{ color: 'black', textDecoration: 'none' }}>
                                          <div className="border" style={{ boxShadow: "0px 0px 10px #29292940, 0px 0px 25px #fff", borderRadius: 20 }}>
                                            <img src={product.product_image} crossOrigin="anonymous" style={{ width: "100%", height: "auto", borderRadius: 20 }} alt={product.product_name} />
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
                                      )}
                                </div>
                            ))}
                        </div>
                    )}
                    <nav style={{ display: 'flex', justifyContent: 'center' }}>
                        <ul className='pagination'>
                            <li className='page-item'>
                                <a href="#" className='page-link' style={{ color: 'red' }}
                                    onClick={prePage}>Prev</a>
                            </li>
                            {
                                numbers.map((n, i) => (
                                    <li className={`page-item`} key={i}>
                                        <a href="#" className='page-link' style={{ color: 'red' }}
                                            onClick={() => changePage(n)} >{n}</a>
                                    </li>
                                ))
                            }
                            <li className='page-item'>
                                <a href="#" className='page-link' style={{ color: 'red' }}
                                    onClick={nextPage}>Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <Foot />

        </>
    )
    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    function changePage(id) {
        setCurrentPage(id)
    }


    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }

    }
}

export default MoreProducts