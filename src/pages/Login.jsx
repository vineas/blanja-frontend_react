import React from 'react'

const Login = () => {
  return (
    <>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "center", marginTop: 28 }}>
          <img src="../assets/img/blanja.png" alt="logo" className="img" />
        </div>
        <p className=" text-center py-3">Please login with your account</p>
        <div>
          <ul
            className="nav nav-pills mb-3"
            id="pills-tab"
            role="tablist"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <li className="nav-item" role="presentation">
              {/* <button data-toggle="pill" data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"  class="btn-customer-pills" style="width: 123px; height: 48px; ">Customer</button> */}
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                data-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                style={{ width: 123, height: 48 }}
              >
                Customer
              </button>
            </li>
            <li className="nav-item" role="presentation">
              {/* <button data-toggle="pill" data-target="#pills-profile" type="button"class="btn-seller-pills" style="width: 123px; height: 48px;">Seller</button> */}
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                data-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
                style={{ width: 123, height: 48 }}
              >
                Seller
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <form>
                <div
                  className="form-group"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <input
                    type="email"
                    className="form-control"
                    id="input-email"
                    style={{ width: 400, height: 48 }}
                    placeholder="Email"
                  />
                </div>
                <div
                  className="form-group"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <input
                    type="password"
                    className="form-control"
                    id="input-password"
                    style={{ width: 400, height: 48 }}
                    placeholder="Password"
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <a href=" ./resetpassword.html" style={{ color: "#DB3022" }}>
                    Forgot password?
                  </a>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "center", marginTop: 28 }}
                >
                  <button
                    type="primary"
                    className="btn btn-primary"
                    style={{
                      width: 401,
                      height: 48,
                      borderRadius: 48,
                      border: 1,
                      backgroundColor: "#DB3022"
                    }}
                  >
                    Primary
                  </button>
                </div>
              </form>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <form>
                <div
                  className="form-group"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <input
                    type="email"
                    className="form-control"
                    id="input-email"
                    style={{ width: 400, height: 48 }}
                    placeholder="Email"
                  />
                </div>
                <div
                  className="form-group"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <input
                    type="password"
                    className="form-control"
                    id="input-password"
                    style={{ width: 400, height: 48 }}
                    placeholder="Password"
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <a href="./resetpassword.html" style={{ color: "#DB3022" }}>
                    Forgot password?
                  </a>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "center", marginTop: 28 }}
                >
                  <button
                    type="primary"
                    className="btn btn-primary"
                    style={{
                      width: 401,
                      height: 48,
                      borderRadius: 48,
                      border: 1,
                      backgroundColor: "#DB3022"
                    }}
                  >
                    Primary
                  </button>
                </div>
              </form>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
              <p>Don't have a Tokopedia account? </p>{" "}
              <a href="./signup.html" style={{ color: "#DB3022" }}>
                {" "}
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login