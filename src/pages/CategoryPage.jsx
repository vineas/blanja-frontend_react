import React from 'react'
import NavLogin from './NavLogin'
const jas = require('../img/jas.png')
const CategoryPage = () => {
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
                                <img className="w-100" src={jas} alt="cloth" />
                                <div className="p-2">
                                    <h5 className="card-title">
                                        Men's formal suit - Black &amp; White
                                    </h5>
                                    <h5 className="text-danger">$ 40.0</h5>
                                    <img src={"assets\img\star.png"} alt="stars" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-5">
                            <div className="border rounded product">
                                <img className="w-100" src={jas} alt="cloth" />
                                <div className="p-2">
                                    <h5 className="card-title">
                                        Men's formal suit - Black &amp; White
                                    </h5>
                                    <h5 className="text-danger">$ 40.0</h5>
                                    <img src="assets\img\star.png" alt="stars" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-5">
                            <div className="border rounded product">
                                <img className="w-100" src={jas} alt="cloth" />
                                <div className="p-2">
                                    <h5 className="card-title">
                                        Men's formal suit - Black &amp; White
                                    </h5>
                                    <h5 className="text-danger">$ 40.0</h5>
                                    <img src="assets\img\star.png" alt="stars" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-5">
                            <div className="border rounded product">
                                <img className="w-100" src={jas} alt="cloth" />
                                <div className="p-2">
                                    <h5 className="card-title">
                                        Men's formal suit - Black &amp; White
                                    </h5>
                                    <h5 className="text-danger">$ 40.0</h5>
                                    <img src="assets\img\star.png" alt="stars" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-5">
                            <div className="border rounded product">
                                <img className="w-100" src={jas} alt="cloth" />
                                <div className="p-2">
                                    <h5 className="card-title">
                                        Men's formal suit - Black &amp; White
                                    </h5>
                                    <h5 className="text-danger">$ 40.0</h5>
                                    <img src="assets\img\star.png" alt="stars" />
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