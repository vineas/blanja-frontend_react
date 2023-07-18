import React from 'react'
import NavLogin from './NavLogin'
import Foot from './Foot'

const ProfileCustomer = () => {
  return (
    <>
    <NavLogin/>
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
                    src="../assets/img/profileFoto.png"
                    style={{ width: 80, height: 80 }}
                  />
                  <div className="col-md-12">
                    <h5 className="card-title">Johanes Mikael</h5>
                    <a href="#">
                      <p>Ubah Profil</p>
                    </a>
                  </div>
                </div>
                <div style={{ marginTop: 78 }}>
                  {/* <div style="display: flex;">
                  <div style="width: 32px; height: 32px; background-color: #456BF3; border-radius: 50px;">
                  </div>
                  <a href="" style="display: flex; align-items: center; margin-left: 10px;">My Account</a>
                </div>
                <div style="display: flex; margin-top: 20px;">
                  <div style="width: 32px; height: 32px; background-color: #F36F45; border-radius: 50px;">
                  </div>
                  <a href="" style="display: flex; align-items: center; margin-left: 10px;">Shipping Address</a>
                </div>
                <div style="display: flex; margin-top: 20px;">
                  <div style="width: 32px; height: 32px; background-color: #F3456F; border-radius: 50px;">
                  </div>
                  <a href="" style="display: flex; align-items: center; margin-left: 10px;">My Order</a>
                </div> */}
                  <div
                    className="nav flex-column"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
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
                        {/* Button trigger modal */}
                        {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style="width: 100%; height: 86px; border: 1px dashed black; background-color: white; color: black;">
                  Add New Adress
                </button> */}
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-toggle="modal"
                          data-target=".bd-example-modal-lg"
                          style={{
                            width: "100%",
                            height: 86,
                            border: "1px dashed black",
                            backgroundColor: "white",
                            color: "black"
                          }}
                        >
                          Add New Adress
                        </button>
                        <div
                          className="modal fade bd-example-modal-lg"
                          tabIndex={-1}
                          role="dialog"
                          aria-labelledby="myLargeModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog modal-lg">
                            <div className="modal-content" style={{ padding: 30 }}>
                              <h3
                                style={{ display: "flex", justifyContent: "center" }}
                              >
                                Add new address
                              </h3>
                              <div className="row">
                                <div className="col-md-12">
                                  <label
                                    htmlFor="inputName"
                                    className="col-sm-7 col-form-label"
                                  >
                                    Save address as (ex : home address, office
                                    address)
                                  </label>
                                  <div className="col-sm-12">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id=""
                                      placeholder="Rumah"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <label
                                    htmlFor="inputName"
                                    className="col-sm-7 col-form-label"
                                  >
                                    Recipient’s name
                                  </label>
                                  <div className="col-sm-12">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id=""
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <label
                                    htmlFor="inputName"
                                    className="col-sm-9 col-form-label"
                                  >
                                    Recipient’s telephone number
                                  </label>
                                  <div className="col-sm-12">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id=""
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <label
                                    htmlFor="inputName"
                                    className="col-sm-8 col-form-label"
                                  >
                                    Address
                                  </label>
                                  <div className="col-sm-12">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id=""
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <label
                                    htmlFor="inputName"
                                    className="col-sm-8 col-form-label"
                                  >
                                    Postal code
                                  </label>
                                  <div className="col-sm-12">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id=""
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <label
                                    htmlFor="inputName"
                                    className="col-sm-8 col-form-label"
                                  >
                                    City or Subdistrict
                                  </label>
                                  <div className="col-sm-12">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <div
                                    className="form-check"
                                    style={{ marginLeft: 20, marginTop: 20 }}
                                  >
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="defaultCheck1"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="defaultCheck1"
                                    >
                                      Make it the primary address
                                    </label>
                                  </div>
                                </div>
                                <div
                                  className="col-md-6"
                                  style={{
                                    display: "flex",
                                    justifyContent: "flex-end"
                                  }}
                                >
                                  <button
                                    type="button"
                                    className="btn"
                                    style={{
                                      marginTop: 20,
                                      borderRadius: 25,
                                      marginRight: 15,
                                      width: 100
                                    }}
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-danger"
                                    style={{
                                      marginTop: 20,
                                      borderRadius: 25,
                                      width: 100
                                    }}
                                  >
                                    Save
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="border"
                          style={{
                            width: "100%",
                            height: "100%",
                            marginTop: 35,
                            padding: 25
                          }}
                        >
                          <h6>Andreas Jane</h6>
                          <p>
                            Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                            Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note:
                            blok c 16] Sokaraja, Kab. Banyumas, 53181
                          </p>
                          <a href="#">Change address</a>
                        </div>
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
                        Wadidaw
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
      <Foot/>

    </>
  )
}

export default ProfileCustomer