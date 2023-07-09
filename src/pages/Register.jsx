import React from 'react'

const Register = () => {
  return (
    <>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "center", marginTop: 28 }}>
          <img src="../assets/img/blanja.png" alt="logo" className="img" />
        </div>
        <p className="text-center py-3">Please sign up with your account</p>
        <div className="">
          <ul
            className="nav nav-pills mb-3"
            id="pills-tab"
            role="tablist"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <li className="nav-item" role="presentation">
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
                    type="name"
                    className="form-control"
                    id="input-name"
                    placeholder="Name"
                    style={{ width: 400, height: 48 }}
                  />
                </div>
                <div
                  className="form-group"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <input
                    type="email"
                    className="form-control"
                    id="input-email"
                    placeholder="Email"
                    style={{ width: 400, height: 48 }}
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
                    placeholder="Password"
                    style={{ width: 400, height: 48 }}
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
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
                    type="name"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Name"
                    style={{ width: 400, height: 48 }}
                  />
                </div>
                <div
                  className="form-group"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Email"
                    style={{ width: 400, height: 48 }}
                  />
                </div>
                <div
                  className="form-group"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <input
                    type="phone"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Phone number"
                    style={{ width: 400, height: 48 }}
                  />
                </div>
                <div
                  className="form-group"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <input
                    type="name"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Store name"
                    style={{ width: 400, height: 48 }}
                  />
                </div>
                <div
                  className="form-group"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    style={{ width: 400, height: 48 }}
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
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
              <p>Already have a Tokopedia account?</p>{" "}
              <a href="./login.html" style={{ color: "#DB3022" }}>
                {" "}
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register