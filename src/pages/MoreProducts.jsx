import React, { useEffect, useState } from 'react'
import NavLogin from './NavLogin'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import Foot from './Foot'
import Nav from './Nav'
const jas = require('../img/jas.png')
const MoreProducts = () => {

    let [products, setProduct] = useState([])
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
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const loginTrue = localStorage.getItem("token");
    return (
        <>
            {!loginTrue ? <Nav/> : <NavLogin />}
            <section className="container" style={{ marginTop: 90 }}>
                <h2 className="ml-3">Popular</h2>
                <p className="ml-3">Find clothes that are trending recently</p>
                <div className="container mt-5">
                    <div className="row">
                        {records.map((product) => (
                            <div className="col-md-3 col-sm-6 mb-5">
                                <Link to={`/product/${product.product_id}`} style={{ color: 'black', textDecoration: 'none' }}>
                                    <div className="border rounded product">
                                        <img src={product.product_image} crossOrigin="anonymous" style={{ width: "100%" }} />
                                        <div className="p-2">
                                            <h5 className="card-title" style={{ fontWeight: 'bold' }}>
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
                    <nav style={{ display: 'flex', justifyContent: 'center' }}>
                        <ul className='pagination'>
                            <li className='page-item'>
                                <a href="#" className='page-link'
                                    onClick={prePage}>Prev</a>
                            </li>
                            {
                                numbers.map((n, i) => (
                                    <li className={`page-item${currentPage === n ? 'active' : ''}`} key={i}>
                                        <a href="#" className='page-link'
                                            onClick={() => changePage(n)} >{n}</a>
                                    </li>
                                ))
                            }
                            <li className='page-item'>
                                <a href="#" className='page-link'
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