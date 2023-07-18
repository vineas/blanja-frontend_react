import React from 'react'
import { Link } from 'react-router-dom'
const blanja = require('../img/blanja.png')
const ForgotPassword = () => {
  return (
    <>
        <div className="container">
  <div style={{ display: "flex", justifyContent: "center", marginTop: 28 }}>
    <img src={blanja} alt="logo" className="img" />
  </div>
  <h4 className="text-center py-3">Reset password</h4>
  <div className="">
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
            style={{ display: "flex", justifyContent: "center", marginTop: 28 }}
          >
            <a href="./konfirmpass.html">
              <button
                type="button"
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
            </a>
          </div>
        </form>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <p>Don't have a Tokopedia account? </p>{" "}
        <Link to={'/register'}>
                    <p className='text-danger'>Register</p>
              </Link>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default ForgotPassword