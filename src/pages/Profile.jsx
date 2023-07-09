import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ModalCreate from '../components/ModalCreate'
import ModalUpdate from '../components/ModalUpdate'
const profileImage = require ('../img/profile.png')

const Profile = () => {
  let  [products, setProduct ] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4000/products')
      .then((res) => {
        setProduct(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
  },[])
  return (
    <main className="container" id ="profile-container" style={{marginTop: 120}}>
      <div className="row">
        <div className="col-md-3">
          <div style={{ display: "flex" }}>
            <img
              src={profileImage}
              alt=""
              style={{ width: "20%", height: "20%" }}
            />
            <h5 className="card-title" style={{ marginLeft: 15 }}>
              Johanes Mikael
            </h5>
            <br />
          </div>
          <div style={{ marginLeft: 68 }}>
            <a href="#">
              <p>Ubah Profil</p>
            </a>
          </div>
          <div>
            <a href="">Store</a>
          </div>
          <div>
            <a href="">Product</a>
          </div>
          <div>
            <a href="">Order</a>
          </div>
        </div>
        <div
          id="card-summary"
          className="col-md-11 border"
          style={{
            boxShadow: "0px 0px 10px #29292940, 0px 0px 25px #fff",
            borderRadius: 8
          }}
        >
          {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
    data-whatever="@mdo">Open modal for @mdo</button> */}
          <div className="btn-payment">
            <ModalCreate/>
            {/* <button
              className="btn-choose-address"
              data-toggle="modal"
              data-target="#exampleModal"
              style={{
                color: "white",
                width: 190,
                height: 36,
                borderRadius: 24,
                border: 1,
                backgroundColor: "#DB3022",
                marginTop: 25
              }}
            >
              Add new product
            </button> */}
          </div>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    New product
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="recipient-name" className="col-form-label">
                        Name:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="recipient-name" className="col-form-label">
                        Price:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="recipient-name" className="col-form-label">
                        Stock:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="recipient-name" className="col-form-label">
                        Image:
                      </label>
                      <input type="file" id="myFile" name="filename" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="recipient-name" className="col-form-label">
                        Rating:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="recipient-name" className="col-form-label">
                        Aparel:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <form className="form-inline" style={{ marginTop: 20 }}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ borderRadius: 94 }}
            />
            <button
              className="btn btn-outline-success-danger my-2 my-sm-0"
              type="submit"
              style={{ borderRadius: 94 }}
            >
              Search
            </button>
          </form>
          <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Image</th>
            <th scope="col">Rating</th>
            <th scope="col">Aparel</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <th>{product.id}</th>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <img src={product.image} crossOrigin="anonymous" style={{width: 100, padding: 10}}/>
              <td>{product.rating_product}</td>
              <td>{product.nama_toko}</td>
              <td>
                <ModalUpdate/>
              </td>
            </tr>
          ))}

          {/* <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <button className='btn btn-primary mb-3'>Update</button>
              <button className='btn btn-danger mb-3'>Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <button className='btn btn-primary mb-3'>Update</button>
              <button className='btn btn-danger mb-3'>Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <button className='btn btn-primary mb-3'>Update</button>
              <button className='btn btn-danger mb-3'>Delete</button>
            </td>
          </tr> */}
        </tbody>
      </table>
        </div>
      </div>
    </main>
  )
}

export default Profile