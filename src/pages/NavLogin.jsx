import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ModalFilter from '../components/ModalFilter'
import axios from 'axios'
const profileImg = require('../img/profile.png')
const blanjaIcon = require('../img/blanja.png')
const cartIcon = require('../img/cart.png')
const notifIcon = require('../img/notif.png')
const dmIcon = require('../img/dm.png')
const searchIcon = require('../img/search.png')

const NavLogin = () => {
  let navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);

  };
  function Logout() {
    localStorage.clear();
    navigate("/home");
    window.location.reload();
  }

  let [products, setProduct] = useState([])
  useEffect(() => {
    // dispatch()
    axios.get(`${process.env.REACT_APP_API_KEY}/products`)
      .then((res) => {
        setProduct(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <style>
        {`
          .dropdown {
            position: relative;
            display: inline-block;
          }

          .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          }

          .dropdown-content.show {
            display: block;
          }

          .dropdown-content a {
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            color: #333;
          }

          .dropdown-content a:hover {
            background-color: #ddd;
          }

          .dropdown-content .btn-danger {
            color: white;
            border: none;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 15px;
            margin: 4px 2px;
            cursor: pointer;
          }
        `}
      </style>
      <header>
        <nav
          id="home-nav"
          className="navbar fixed-top navbar-expand-lg navbar-light bg-light"
        >
          <div className="blanja-icon">
            <Link to={'/home'}>
              <img
                src={blanjaIcon}
                className="d-inline-block align-top"
                alt=""
                height={50}
              />
            </Link>

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
                <div className='main'>
                  <input
                    id="searchbox"
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    list='data'
                  />
                  <datalist id='data' style={{width: '507px',height: '40px'}}>
                    {/* <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                    <option>Four</option> */}
                    {products.map((item)=><Link to={`/product/${item.product_id}`}><option style={{width: '507px',height: '40px'}}>{item.product_name}</option></Link>)}
                  </datalist>
                </div>
                <img
                  className="searchLogo"
                  src={searchIcon}
                  alt=""
                  style={{ position: "absolute", marginLeft: 380 }}
                />
                <ModalFilter />
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 row justify-content-center">
              <div className="btn-login-index">
                <Link to={`/mybag`}>
                  <img className="mr-4" src={cartIcon} alt="cart" />
                </Link>
                <a href="#">
                  <img className="mr-4" src={notifIcon} alt="cart" />
                </a>
                <a href="#">
                  <img className="mr-4" src={dmIcon} alt="cart" />
                </a>
                <div className="dropdown">
                  <img
                    className="mr-4 profile-img"
                    src={profileImg}
                    alt="cart"
                    onClick={toggleDropdown}
                  />
                  <div className={`dropdown-content ${dropdownVisible ? 'show' : ''}`}>
                    <Link to="/profile">Profile</Link>
                    <button className="btn-danger" onClick={Logout}>
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </nav>
      </header>

    </>
  )
}

export default NavLogin