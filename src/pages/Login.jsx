import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Swal from "sweetalert2";
const blanjaIcon = require('../img/blanja.png')


const Login = () => {
  let [datacustomer, setCustomer] = useState({
    customer_email: "",
    customer_confirmpassword: ""
  })

  let [dataseller, setSeller] = useState({
    seller_email: "",
    seller_confirmpassword: ""

  })

  let [data, setData] = useState({
    email: "",
    password: ""
  })

  let onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_KEY}/users/login`, data)
      .then((res) => {
        alert("Login success")
        localStorage.setItem('token', res.data.data.token)
      })
      .catch((err) => {
        alert(err);
      })
  }


  let onChangeCustomer = (e) => {
    setCustomer({
      ...datacustomer,
      [e.target.name]: e.target.value
    });
  }
  console.log(datacustomer);

  let onChangeSeller = (e) => {
    setSeller({
      ...dataseller,
      [e.target.name]: e.target.value
    });
  }
  console.log(dataseller);

  let navigate = useNavigate();

  const handleSubmitCustomer = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_KEY}/customer/login`, datacustomer)
      .then((res) => {
        if (res.data.status === "success") {
          Swal.fire("Login Success", "Your account Success Login", "success")
            .then((result) => {
              localStorage.setItem("customer_id", res.data.data.customer_id);
              localStorage.setItem('token', res.data.data.token_user)
              navigate("/home");
            })
            .catch((err) => {
              console.log(res.data);
            });
        } else {
          console.log(res.data.message);
          Swal.fire("Login Error", res.data.message, "error");
        }
      })
      .catch((err) => {
        alert(err);
      })
  }

  const handleSubmitSeller = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_KEY}/seller/login`, dataseller)
      .then((res) => {
        if (res.data.status === "success") {
          Swal.fire("Login Success", "Your account Success Login", "success")
            .then((result) => {
              localStorage.setItem("seller_id", res.data.data.seller_id);
              localStorage.setItem('token', res.data.data.token_user)
              navigate("/home");
            })
            .catch((err) => {
              console.log(res.data);
            });
        } else {
          console.log(res.data.message);
          Swal.fire("Login Error", res.data.message, "error");
        }
      })
      .catch((err) => {
        alert(err);
      })
  }


  return (
    <>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "center", marginTop: 28 }}>
          <img src={blanjaIcon} alt="logo" className="img" />
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
                className="nav-link active btn-danger"
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
                className="nav-link btn-danger"
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
              <form onSubmit={handleSubmitCustomer}>
                <div
                  className="form-group"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <input
                    name='customer_email'
                    type="email"
                    className="form-control"
                    value={datacustomer.customer_email}
                    onChange={onChangeCustomer}
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
                    name='customer_confirmpassword'
                    type="password"
                    value={datacustomer.customer_confirmpassword}
                    onChange={onChangeCustomer}
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
                    type="danger"
                    className="btn btn-danger"
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
              <form onSubmit={handleSubmitSeller}>
                <div
                  className="form-group"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <input
                    name='seller_email'
                    value={dataseller.seller_email}
                    onChange={onChangeSeller}
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
                    name='seller_confirmpassword'
                    value={dataseller.seller_confirmpassword}
                    onChange={onChangeSeller}
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
                    type="danger"
                    className="btn btn-danger"
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