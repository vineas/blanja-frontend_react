import axios from 'axios';
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom'
const blanjaIcon = require('../img/blanja.png')

const Register = () => {
  let [dataSeller, setSeller] = useState({
    seller_name: "",
    seller_email: "",
    seller_phone: "",
    seller_storename: "",
    seller_password: "",
    seller_confirmpassword: ""
  })

  let [dataCustomer, setCustomer] = useState({
    customer_name: "",
    customer_email: "",
    customer_password: "",
    customer_confirmpassword: ""
  })

  let onChangeSeller = (e) => {
    setSeller({
      ...dataSeller,
      [e.target.name]: e.target.value
    });
  }
  console.log(dataSeller);

  let onChangeCustomer = (e) => {
    setCustomer({
      ...dataCustomer,
      [e.target.name]: e.target.value
    });
  }
  console.log(dataCustomer);

  const handleSubmitSeller = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_KEY}/seller/register`, dataSeller)
      .then((res) => {
        alert("Register success")
        localStorage.setItem('token', res.data.data.token)
        navigate("/login");
        console.log(res.data.data.token);
        console.log(res.data.data);
      })
      .catch((err) => {
        alert(err);
      })
  }

  let navigate = useNavigate();
  const handleSubmitCustomer = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_KEY}/customer/register`, dataCustomer)
      .then((res) => {
        alert("Register success")
        localStorage.setItem('token', res.data.data.token)
        navigate("/login");
        console.log(res.data.data);
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
                className="nav-link active btn btn-danger"
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
                className="nav-link btn btn-danger"
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
                    type="name"
                    className="form-control"
                    id="input-name"
                    placeholder="Name"
                    name='customer_name'
                    onChange={onChangeCustomer}
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
                    name='customer_email'
                    onChange={onChangeCustomer}
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
                    name='customer_password'
                    onChange={onChangeCustomer}
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
                    placeholder="Confirm Password"
                    name='customer_confirmpassword'
                    onChange={onChangeCustomer}
                    style={{ width: 400, height: 48 }}
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    type="submit"
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
              <form onSubmit={handleSubmitSeller}>
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
                    name='seller_name'
                    onChange={onChangeSeller}
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
                    name='seller_email'
                    onChange={onChangeSeller}
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
                    name='seller_phone'
                    onChange={onChangeSeller}
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
                    name='seller_storename'
                    onChange={onChangeSeller}
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
                    name='seller_password'
                    onChange={onChangeSeller}
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
                    placeholder="Confirm Password"
                    name='seller_confirmpassword'
                    onChange={onChangeSeller}
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