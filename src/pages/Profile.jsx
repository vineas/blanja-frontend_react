import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ModalCreate from '../components/ModalCreate'
import ModalUpdate from '../components/ModalUpdate'
import ModalDelete from '../components/ModalDelete'
import Nav from './Nav'
import { Link } from 'react-router-dom'
const profileImage = require('../img/profile.png')

const Profile = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = products.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Data.length / recordsPerPage)
  const numbers = [...Array(npage + 1).keys()].slice(1)


  let [products, setProduct] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4000/products')
      .then((res) => {
        setProduct(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  return (
    <>
      <Nav />
      <main id="profile-container" style={{ marginTop: 120, marginLeft: 100 }}>
        <div className="row" style={{ backgroundColor: 'white' }}>
          <div className="col-md-3" >
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
            style={{
              backgroundColor: "red"
            }}>

          </div>
          <div
            id="card-summary"
            className="col-md-8 border"
            style={{
              boxShadow: "0px 0px 10px #29292940, 0px 0px 25px #fff",
              borderRadius: 8,
              backgroundColor: "grey"
            }}
          >
            {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
    data-whatever="@mdo">Open modal for @mdo</button> */}
            <div className="btn-payment" >
              <ModalCreate />
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
            <form className="form-inline" style={{ marginTop: 20, marginBottom: 20 }}>
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
                  <th scope="col">Nama Toko</th>
                  <th scope="col">Deskripsi</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {records.map((product) => (
                  <tr>
                    <th>{product.id}</th>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <img src={product.image} crossOrigin="anonymous" style={{ width: 100, padding: 10 }} />
                    <td>{product.rating_product}</td>
                    <td>{product.nama_toko}</td>
                    <td>{product.description_product}</td>
                    <td>
                      <Link to={`/product/${product.id}`}>
                        <button className="btn btn-primary" style={{ margin: "10px" }}>Detail</button>
                      </Link>
                      <ModalUpdate id={product.id} name={product.name} price={product.price} stock={product.stock}
                        rating_product={product.rating_product} nama_toko={product.nama_toko}>Update</ModalUpdate>
                      <ModalDelete id={product.id} style={{ margin: "10px" }}>Delete</ModalDelete>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <nav>
              <ul className='pagination'>
                <li className='page-item'>
                  <a href="#" className='page-link'
                    onClick={prePage}>Prev</a>
                </li>
                {
                  numbers.map((n, i) => (
                    <li className={`page-item${currentPage === n ? 'active' : ''}`} key={i}>
                      <a href="#" className='page-item'
                        onClick={changePage} >{n}</a>
                    </li>
                  ))
                }
                <li className='page-item'>
                  <a href="#" className='page-link'
                    onClick={nextPage}>Next</a>
                </li>
              </ul>
            </nav>

          </div>
        </div>
      </main>
    </>
  )
}

export default Profile