import React from 'react'

const Detail = () => {
    return (
        <>
            <header>
                <nav
                    id="home-nav"
                    className="navbar fixed-top navbar-expand-lg navbar-light bg-light"
                >
                    <div className="blanja-icon">
                        <a className="logo-blanja mr-5" href="/index.html">
                            <img
                                src="../assets/img/blanja.png"
                                height={50}
                                className="d-inline-block align-top"
                                alt=""
                            />
                        </a>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item ml-2 form-inline row justify-content-center">
                                <input
                                    id="searchbox"
                                    className="form-control mr-sm-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <img
                                    className="searchLogo"
                                    src="../assets/img/search.png"
                                    alt=""
                                    style={{ position: "absolute", marginLeft: 400 }}
                                />
                                <img
                                    id="homeFilter"
                                    className="mr-4"
                                    src="../assets/img/filter.png"
                                    alt="filter"
                                />
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0 row justify-content-center">
                            <a href="./pages/orders.html">
                                <img className="mr-4" src="/assets/img/cart.png" alt="cart" />
                            </a>
                            <div className="btn-login-index">
                                <a href="./pages/login.html">
                                    <button
                                        className="btn btn-danger rounded-pill mr-2"
                                        style={{ width: 100, height: 36 }}
                                        type="button"
                                    >
                                        Login
                                    </button>
                                </a>
                                <a href="./pages/signup.html">
                                    <button
                                        className="btn border rounded-pill"
                                        style={{ width: 100, height: 36 }}
                                        type="button"
                                    >
                                        Signup
                                    </button>
                                </a>
                            </div>
                        </form>
                    </div>
                </nav>
            </header>
            <main>
                <section className="product" style={{ marginTop: 90 }}>
                    <div className="keterangan-product">
                        <p>Home &gt; Product &gt; Category</p>
                    </div>
                    <div className="image-product">
                        <div className="card-detail">
                            <img
                                className="card-img-top"
                                src="../assets/img/product/baju-cream.png"
                                alt="Card image cap"
                                style={{ borderRadius: 8 }}
                            />
                            <div
                                className="pilihan-baju"
                                style={{ display: "flex", marginTop: 17 }}
                            >
                                <img
                                    className="pilihan-baju-1"
                                    src="../assets/img/product/orange.png"
                                    alt=""
                                />
                                <img
                                    className="pilihan-baju-2"
                                    src="../assets/img/product/navy.png"
                                    alt=""
                                />
                                <img
                                    className="pilihan-baju-3"
                                    src="../assets/img/product/blue.png"
                                    alt=""
                                />
                                <img
                                    className="pilihan-baju-4"
                                    src="../assets/img/product/putih.png"
                                    alt=""
                                />
                                <img
                                    className="pilihan-baju-5"
                                    src="../assets/img/product/baju-cream.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="judul-product">
                            <h1>Baju muslim pria</h1>
                            <p>Zalora Cloth</p>
                            <p>⭐⭐⭐⭐⭐(10)</p>
                            <p>Price</p>
                            <h1>Rp 200.000</h1>
                            <h5>Color</h5>
                            <div style={{ display: "flex" }}>
                                <a href="">
                                    <img
                                        src="../assets/img/color/black.png"
                                        style={{ width: 32, height: 32 }}
                                    />
                                </a>
                                <a href="">
                                    <img
                                        src="../assets/img/color/red.png"
                                        style={{ width: 32, height: 32, marginLeft: 12 }}
                                    />
                                </a>
                                <a href="">
                                    <img
                                        src="../assets/img/color/blue.png"
                                        style={{ width: 32, height: 32, marginLeft: 12 }}
                                    />
                                </a>
                                <a href="">
                                    <img
                                        src="../assets/img/color/green.png"
                                        style={{ width: 32, height: 32, marginLeft: 12 }}
                                    />
                                </a>
                            </div>
                            <div className="btn-size-jumlah">
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
                                <div className="jumlah" style={{ marginLeft: 89 }}>
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
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <h4>Informasi Produk</h4>
                        <h6>Condition</h6>
                        <h6 style={{ color: "#DB3022" }}>New</h6>
                    </div>
                    <div className="description">
                        <h4>Description</h4>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
                            suscipit repudiandae nobis ducimus fuga, rerum labore minima repellat
                            perferendis doloribus mollitia natus voluptatem deserunt quos
                            similique. Cumque ut quod excepturi dignissimos quasi et error labore
                            amet, velit ipsum eaque modi, veritatis rerum eum quos soluta hic
                            obcaecati, ratione esse maiores! Quasi accusamus deleniti tenetur
                            eaque vitae necessitatibus minus nobis, omnis error perferendis
                            repudiandae neque recusandae similique amet alias. Quasi impedit
                            corporis modi animi, quos placeat voluptas sed totam, a beatae dicta
                            doloremque, adipisci vero aspernatur exercitationem magnam repellat
                            neque molestiae similique non voluptatem laborum? Laboriosam quam
                            assumenda laborum ipsum dicta.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit dolores
                            explicabo unde mollitia numquam suscipit repudiandae animi? Illo
                            quisquam consequatur quaerat eaque, expedita consectetur fugiat,
                            itaque tenetur assumenda deserunt cupiditate, similique fugit laborum
                            modi culpa maxime adipisci aliquid ipsum fuga repellendus magni!
                            Quisquam voluptatem laborum perspiciatis, consectetur nemo doloremque
                            libero.
                        </p>
                    </div>
                    <div className="review">
                        <h3>Product review</h3>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div className="review" style={{ display: "flex", marginTop: 22 }}>
                            <img src="../assets/img/5.0.png" alt="" />
                            <h4 style={{ marginTop: "auto" }}>/5</h4>
                            {/* <img src="../assets/img/10.png" style="width:30px; height: 20px;margin-top:40px;"> */}
                        </div>
                        <div className="ml-md-5 ml-auto" id="rate">
                            <div className="d-flex flex-column">
                                <div className="d-flex justify-content-center">
                                    <img src="../assets/img/activated.png" alt="stars" />
                                    <span>5</span>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <img src="../assets/img/activated.png" alt="stars" />
                                    <span>4</span>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <img src="../assets/img/activated.png" alt="stars" />
                                    <span>3</span>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <img src="../assets/img/activated.png" alt="stars" />
                                    <span>2</span>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <img src="../assets/img/activated.png" alt="stars" />
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
                    <img src="../assets/img/bintang.png" style={{ marginTop: 14 }} />
                    <hr />
                </section>
                <section className="mt-5">
                    <div className="container mt-5">
                        <h2 className="ml-3">You can also like this</h2>
                        <p className="ml-3">You've never seen before!</p>
                        <div className="row">
                            <div className="col-md-3 col-sm-6 mb-5">
                                <div>
                                    <img className="w-100" src="../assets/img/jas.png" alt="cloth" />
                                    <div className="p-2">
                                        <h5 className="card-title">
                                            Men's formal suit - Black &amp; White
                                        </h5>
                                        <h5 className="text-danger">$ 40.0</h5>
                                        <img src="../assets/img/star.png" alt="stars" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-5">
                                <div>
                                    <img className="w-100" src="../assets/img/jas.png" alt="cloth" />
                                    <div className="p-2">
                                        <h5 className="card-title">
                                            Men's formal suit - Black &amp; White
                                        </h5>
                                        <h5 className="text-danger">$ 40.0</h5>
                                        <img src="../assets/img/star.png" alt="stars" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-5">
                                <div>
                                    <img className="w-100" src="../assets/img/jas.png" alt="cloth" />
                                    <div className="p-2">
                                        <h5 className="card-title">
                                            Men's formal suit - Black &amp; White
                                        </h5>
                                        <h5 className="text-danger">$ 40.0</h5>
                                        <img src="../assets/img/star.png" alt="stars" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-5">
                                <div>
                                    <img className="w-100" src="../assets/img/jas.png" alt="cloth" />
                                    <div className="p-2">
                                        <h5 className="card-title">
                                            Men's formal suit - Black &amp; White
                                        </h5>
                                        <h5 className="text-danger">$ 40.0</h5>
                                        <img src="../assets/img/star.png" alt="stars" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-5">
                                <div>
                                    <img className="w-100" src="../assets/img/jas.png" alt="cloth" />
                                    <div className="p-2">
                                        <h5 className="card-title">
                                            Men's formal suit - Black &amp; White
                                        </h5>
                                        <h5 className="text-danger">$ 40.0</h5>
                                        <img src="../assets/img/star.png" alt="stars" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-5">
                                <div>
                                    <img className="w-100" src="../assets/img/jas.png" alt="cloth" />
                                    <div className="p-2">
                                        <h5 className="card-title">
                                            Men's formal suit - Black &amp; White
                                        </h5>
                                        <h5 className="text-danger">$ 40.0</h5>
                                        <img src="../assets/img/star.png" alt="stars" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-5">
                                <div>
                                    <img className="w-100" src="../assets/img/jas.png" alt="cloth" />
                                    <div className="p-2">
                                        <h5 className="card-title">
                                            Men's formal suit - Black &amp; White
                                        </h5>
                                        <h5 className="text-danger">$ 40.0</h5>
                                        <img src="../assets/img/star.png" alt="stars" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-5">
                                <div>
                                    <img className="w-100" src="../assets/img/jas.png" alt="cloth" />
                                    <div className="p-2">
                                        <h5 className="card-title">
                                            Men's formal suit - Black &amp; White
                                        </h5>
                                        <h5 className="text-danger">$ 40.0</h5>
                                        <img src="../assets/img/star.png" alt="stars" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <div className="footer">
                    <p>Copyright Blanja.com</p>
                </div>
            </footer>
        </>

    )
}

export default Detail