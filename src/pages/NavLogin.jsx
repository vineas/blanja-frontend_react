import React from 'react'
import { Link } from 'react-router-dom'
import ModalFilter from '../components/ModalFilter'
const profileImg = require('../img/profile.png')
const blanjaIcon = require('../img/blanja.png')
const cartIcon = require('../img/cart.png')
const notifIcon = require('../img/notif.png')
const dmIcon = require('../img/dm.png')
const searchIcon = require('../img/search.png')


const NavLogin = () => {
  function Logout() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <>
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
                <input
                  id="searchbox"
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <img
                  className="searchLogo"
                  src={searchIcon}
                  alt=""
                  style={{ position: "absolute", marginLeft: 380 }}
                />
                <ModalFilter/>
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
                <Link to={'/profile'}>
                  <img className="mr-4" src={profileImg} alt="cart" />
                </Link>
                <button className='btn-danger' onClick={Logout}>
                  Logout
                </button>
              </div>
            </form>
          </div>
        </nav>
      </header>

    </>
  )
}

export default NavLogin