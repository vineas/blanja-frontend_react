import React, { useEffect, useState } from 'react'
import NavLogin from './NavLogin'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav'
import Foot from './Foot'
const jas = require('../img/jas.png')
const CategoryPage = () => {
    let { id } = useParams()
    let [category, setCategory] = useState([])
    let [categories, setCategories] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_KEY}/category/${id}`)
            .then((res) => {
                setCategory(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])

    // useEffect(() => {
    //     axios.get(`${process.env.REACT_APP_API_KEY}/category/${id}`)
    //         .then((res) => {
    //             setCategories(res.data.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })

    // }, [])

    const loginTrue = localStorage.getItem("token");
    return (
        <>
        { !loginTrue ? <Nav /> : <NavLogin /> }

            <div className="container">
            {/* {categories.map((categoryItem) => ( */}
                <div>
                <div className="ml-3" style={{ marginTop: 90 }}>
                    <p>Home &gt; Product &gt; Category
                        {/* &gt;  */}
                        {/* {categoryItem.kategori}  */}
                    </p>
                </div>
                <h2 className="ml-3">
                    {/* {categoryItem.kategori} */} Category
                </h2>
                </div>
                {/* ))} */}
                <p className="ml-3">Find clothes that are trending recently</p>
                <div className="container mt-5">
                    <div className="row">
                        {category.map((categoryItems) => (
                            <div className="col-md-3 col-sm-6 mb-5">
                                <div className="border rounded product">
                                    <img className="w-100" src={categoryItems.product_image} alt="Product" />
                                    <div className="p-2">
                                        <h5 className="card-title">
                                            {categoryItems.product_name}
                                        </h5>
                                        <h5 className="text-danger">IDR {categoryItems && categoryItems.product_price ? categoryItems.product_price.toLocaleString() : 'N/A'}</h5>
                                        <h6 className="text-warning">⭐⭐⭐⭐⭐</h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Foot/>

        </>
    )
}

export default CategoryPage