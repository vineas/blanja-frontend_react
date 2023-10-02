import React, { useEffect, useState } from 'react'
import NavLogin from './NavLogin'
import { useParams } from 'react-router-dom'
import { Skeleton } from '@mui/material';
import axios from 'axios'
import Nav from './Nav'
import Foot from './Foot'
const jas = require('../img/jas.png')
const CategoryPage = () => {
    let { id } = useParams()
    let [category, setCategory] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    let [categories, setCategories] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_KEY}/category/${id}`)
            .then((res) => {
                setCategory(res.data.data);
                setIsLoading(false);
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
                            {category.map((categoryItems) => (
                                <div className="col-md-3 col-sm-6 mb-5">
                                    <div className="border" style={{ boxShadow: "0px 0px 10px #29292940, 0px 0px 25px #fff", borderRadius: 20 }}>
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
                    )}
                </div>
            </div>
            <Foot />

        </>
    )
}

export default CategoryPage