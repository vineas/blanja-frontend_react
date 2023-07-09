import React from 'react'

const Home = () => {
  return (
    <main>
      <section className="container" style={{ marginTop: 110 }}>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval={10000}>
              <img
                src="assets\img\card1.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-interval={2000}>
              <img
                src="assets\img\card2.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-target="#carouselExampleInterval"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-target="#carouselExampleInterval"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </button>
        </div>
      </section>
      <section className="container" id="category">
        <h2 className="ml-3">Category</h2>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-3 col-sm-3 mb-5">
              <div className="border rounded product">
                <img
                  className="w-100"
                  src="/assets/assets/img/category/t-shirt.png"
                  alt="cloth"
                />
              </div>
            </div>
            <div className="col-md-3 col-md-3 mb-5">
              <div className="border rounded product">
                <img
                  className="w-100"
                  src="/assets/assets/img/category/pants.png"
                  alt="cloth"
                />
              </div>
            </div>
            <div className="col-md-3 col-md-3 mb-5">
              <div className="border rounded product">
                <img
                  className="w-100"
                  src="/assets/assets/img/category/jacket.png"
                  alt="cloth"
                />
              </div>
            </div>
            <div className="col-md-3 col-md-3 mb-5">
              <div className="border rounded product">
                <img
                  className="w-100"
                  src="/assets/assets/img/category/shorts.png"
                  alt="cloth"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ marginTop: 50 }}>
        <h2 className="ml-3">New</h2>
        <p className="ml-3">You've never seen before!</p>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-5">
              <div className="border rounded product">
                <img className="w-100" src="./jas.png" alt="cloth" />
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
                <img className="w-100" src="assets\img\jas.png" alt="cloth" />
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
                <img className="w-100" src="assets\img\jas.png" alt="cloth" />
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
                <img className="w-100" src="assets\img\jas.png" alt="cloth" />
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
                <img className="w-100" src="assets\img\jas.png" alt="cloth" />
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
                <img className="w-100" src="assets\img\jas.png" alt="cloth" />
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
                <img className="w-100" src="assets\img\jas.png" alt="cloth" />
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
                <img className="w-100" src="assets\img\jas.png" alt="cloth" />
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
      <section className="container" style={{ marginTop: 50 }}>
        <h2 className="ml-3">Popular</h2>
        <p className="ml-3">Find clothes that are trending recently</p>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-5">
              <div className="border rounded product">
                <img className="w-100" src="assets\img\jas.png" alt="cloth" />
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
                <img className="w-100" src="assets\img\jas.png" alt="cloth" />
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
                <img className="w-100" src="assets\img\jas.png" alt="cloth" />
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
                <img className="w-100" src="assets\img\jas.png" alt="cloth" />
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
                <img className="w-100" src="assets\img\jas.png" alt="cloth" />
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
                <img className="w-100" src="assets\img\jas.png" alt="cloth" />
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
                <img className="w-100" src="assets\img\jas.png" alt="cloth" />
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
                <img className="w-100" src="assets\img\jas.png" alt="cloth" />
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
  )
}

export default Home