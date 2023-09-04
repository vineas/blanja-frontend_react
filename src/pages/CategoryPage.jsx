import React, { useEffect, useState } from 'react'
import NavLogin from './NavLogin'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const jas = require('../img/jas.png')
const CategoryPage = () => {
    let { id } = useParams()
    let [category, setCategory] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_KEY}/category/${id}`)
            .then((res) => {
                setCategory(res.data.data[0]);
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])

    return (
        <>
        <NavLogin/>
            <div className="container">
                <div className="keterangan-product" style={{ marginTop: 90 }}>
                    <p>Home &gt; Product &gt; Category</p>
                </div>
                <h2 className="ml-3">T-Shirt</h2>
                <p className="ml-3">Find clothes that are trending recently</p>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 mb-5">
                            <div className="border rounded product">
                                <img className="w-100" src={category.product_image} alt="cloth" />
                                <div className="p-2">
                                    <h5 className="card-title">
                                        {category.product_name}
                                    </h5>
                                    <h5 className="text-danger">IDR {category && category.product_price ? category.product_price.toLocaleString() : 'N/A'}</h5>
                                    <img src={"assets\img\star.png"} alt="stars" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CategoryPage