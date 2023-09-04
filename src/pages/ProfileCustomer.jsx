import React, { useEffect, useState } from 'react'
import NavLogin from './NavLogin'
import Foot from './Foot'
import ModalNewAdd from '../components/ModalNewAdd'
import axios from 'axios'
const profileImage = require('../img/profileFoto.png')

const ProfileCustomer = () => {

  const [address, setAddress] = useState([]);
  const [order, setOrder] = useState([]);


  const user_customer = localStorage.getItem("customer_id");
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_KEY}/address/profile/${user_customer}`)
      .then((response) => {
        setAddress(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_KEY}/orders/customer/${user_customer}`)
      .then((response) => {
        setOrder(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);


  return (
    <>
      <NavLogin />
      <div style={{ marginTop: 60 }}>
        <div className="row">
          <div className="col-md-1"></div>
          <div
            className="col-md-3"
            style={{ width: "100vw", backgroundColor: "white", marginTop: 30 }}
          >
            <div className="col-md-12">
              <div className="col-md-10">
                <div className="col-md-12" style={{ display: "flex" }}>
                  <img
                    src={profileImage}
                    style={{ width: 80, height: 80 }}
                    alt="description of image"
                  />
                  <div className="col-md-12">
                    <h5 className="card-title">Johanes Mikael</h5>
                    <a href="#">
                      <p style={{color:'grey'}}>Ubah Profil</p>
                    </a>
                  </div>
                </div>
                <div style={{ marginTop: 78 }}>
                  <div
                    className="nav flex-column"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      style={{color:'grey'}}
                      className="nav-link active"
                      id="v-pills-home-tab"
                      data-toggle="pill"
                      data-target="#v-pills-home"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      My Account
                    </a>
                    <a
                    style={{color:'grey'}}
                      className="nav-link"
                      id="v-pills-profile-tab"
                      data-toggle="pill"
                      data-target="#v-pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      Shipping Address
                    </a>
                    <a
                    style={{color:'grey'}}
                      className="nav-link"
                      id="v-pills-messages-tab"
                      data-toggle="pill"
                      data-target="#v-pills-messages"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      My Order
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-8"
            style={{ height: "100vh", backgroundColor: "#F5F5F5" }}
          >
            <div
              className="col-md-11"
              style={{ backgroundColor: "white", marginTop: 26, borderRadius: 5 }}
            >
              <div className="tab-content" id="v-pills-tabContent">
                {/* My Profile */}
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                  style={{ paddingBottom: 30, paddingTop: 30, paddingLeft: 30 }}
                >
                  <h5>My Profile</h5>
                  <p>Manage your profile inoformation</p>
                  <hr />
                  <div className="row">
                    <div className="col-md-7">
                      <form>
                        <div className="form-group row">
                          <label
                            htmlFor="inputName"
                            className="col-sm-2 col-form-label"
                          >
                            Name
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword"
                              placeholder="Name"
                              style={{ marginLeft: 50 }}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            htmlFor="inputEmail"
                            className="col-sm-2 col-form-label"
                          >
                            Email
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword"
                              placeholder="Email"
                              style={{ marginLeft: 50 }}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            htmlFor="inputPassword"
                            className="col-sm-2 col-form-label"
                          >
                            Phone Number
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword"
                              placeholder="Phone number"
                              style={{ marginLeft: 50 }}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            htmlFor="inputPassword"
                            className="col-sm-2 col-form-label"
                          >
                            Gender
                          </label>
                          <div className="form-check" style={{ marginLeft: 60 }}>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios1"
                              defaultValue="option1"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleRadios1"
                            >
                              Laki-laki
                            </label>
                          </div>
                          <div className="form-check" style={{ marginLeft: 70 }}>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios2"
                              defaultValue="option2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleRadios2"
                            >
                              Perempuan
                            </label>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            htmlFor="inputPassword"
                            className="col-sm-2 col-form-label"
                          >
                            Date of Birth
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="date"
                              className="form-control"
                              id="inputPassword"
                              placeholder="Phone number"
                              style={{ marginLeft: 50 }}
                            />
                          </div>
                        </div>
                        <button
                          type="button"
                          className="btn btn-danger"
                          style={{
                            marginTop: 20,
                            borderRadius: 25,
                            marginLeft: 64,
                            width: 100
                          }}
                        >
                          Save
                        </button>
                      </form>
                    </div>
                    <div
                      className="col-md-3"
                      style={{ justifyContent: "center", marginLeft: 50 }}
                    >
                      <img
                        src="../assets/img/profileFoto.png"
                        alt=""
                        style={{ marginLeft: 64 }}
                      />
                      <button
                        type="button"
                        className="btn btn-danger"
                        style={{ marginTop: 20, borderRadius: 25, marginLeft: 64 }}
                      >
                        Select image
                      </button>
                    </div>
                  </div>
                </div>
                {/* address */}
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                  style={{ paddingTop: 30, paddingLeft: 30, paddingBottom: 30 }}
                >
                  <h5>Choose another address</h5>
                  <p>Manage your shipping address</p>
                  <hr />
                  <div className="row">
                    <div className="col-md-11">
                      <div className="col-md-12">
                        <ModalNewAdd />
                        {address.map((add) => (
                          <div
                            className="border"
                            style={{
                              width: "100%",
                              height: "100%",
                              marginTop: 35,
                              padding: 25
                            }}
                          >
                            <h5 style={{ fontWeight: 'bold' }}>{add.recipient_name}</h5>
                            <h6>{add.address_as}, {add.recipient_phone}</h6>
                            <p>
                              {add.address_line},
                              {add.city_or_subdistrict}, {add.postal_code}
                            </p>
                            <a href="#">Change address</a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Order  */}
                <div
                  className="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                    style={{ paddingBottom: 30, paddingTop: 30, paddingLeft: 30 }}
                  >
                    <h4>My Order</h4>
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a
                          className="nav-item nav-link active"
                          id="nav-home-tab"
                          data-toggle="tab"
                          href="#nav-home"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                        >
                          All items
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="nav-profile-tab"
                          data-toggle="tab"
                          href="#nav-profile"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                        >
                          Not yet paid
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="nav-contact-tab"
                          data-toggle="tab"
                          href="#nav-contact"
                          role="tab"
                          aria-controls="nav-contact"
                          aria-selected="false"
                        >
                          Packed
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="nav-home-tab"
                          data-toggle="tab"
                          href="#nav-home"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                        >
                          Sent
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="nav-profile-tab"
                          data-toggle="tab"
                          href="#nav-profile"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                        >
                          Completed
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="nav-contact-tab"
                          data-toggle="tab"
                          href="#nav-contact"
                          role="tab"
                          aria-controls="nav-contact"
                          aria-selected="false"
                        >
                          Order Cancel
                        </a>
                      </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                      >

                        {order.map((orderItem) => (
                          <div
                            key={orderItem.order_id}
                            className="col-md-12 border mt-2"
                            style={{
                              boxShadow: "0px 0px 10px #29292940, 0px 0px 25px #fff",
                              borderRadius: 8
                            }}
                          >
                            <div className="card-body" style={{ display: "flex" }}>
                              <img src={orderItem.product_image} style={{width:'13%'}}/>
                              <div style={{ marginLeft: 14 }}>
                                <h5 className="card-title" style={{ fontWeight: "bold" }}>
                                {orderItem.product_name}
                                </h5>
                                {/* <p className="card-text">Zalora Cloth</p> */}
                              </div>
                              <div style={{ marginLeft: "auto", marginRight: 22 }}>
                                <h5 className="card-title" style={{ fontWeight: "bold" }}>
                                  Quantity
                                </h5>
                                <p
                                  className="card-text"
                                  style={{ display: "flex", justifyContent: "center" }}
                                >
                                  {orderItem.order_quantity}
                                </p>
                              </div>
                              <div style={{ marginLeft: "auto", marginRight: 22 }}>
                                <h5 className="card-title" style={{ fontWeight: "bold" }}>
                                  Total
                                </h5>
                                <p className="card-text">IDR {orderItem && orderItem.product_price ? orderItem.product_price.toLocaleString() : 'N/A'}</p>
                              </div>
                              <div style={{ marginLeft: "auto", marginRight: 42 }}>
                                <h5 className="card-title" style={{ fontWeight: "bold" }}>
                                  Payment
                                </h5>
                                <p
                                  className="card-text"
                                  style={{ display: "flex", justifyContent: "center" }}
                                >
                                  Gopay
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}


                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                      >
                        waduh
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-contact"
                        role="tabpanel"
                        aria-labelledby="nav-contact-tab"
                      >
                        Waduh
                      </div>
                      <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                      >

                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                      >
                        Waduh
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-contact"
                        role="tabpanel"
                        aria-labelledby="nav-contact-tab"
                      >
                        Waduh
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Foot /> */}

    </>
  )
}

export default ProfileCustomer