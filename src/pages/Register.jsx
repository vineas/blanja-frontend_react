import axios from 'axios';
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom'
const blanjaIcon = require('../img/blanja.png')

const Register = () => {
  let [data, setData] = useState({
    email: "",
    password: "",
    fullname: "",
    role: ""
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
    axios.post("http://localhost:4000/users/register", data)
        .then((res) => {
            alert("Register success")
            localStorage.setItem('token', res.data.data.token)
            console.log(res.data.data);
        })
        .catch((err) => {
            alert(err);
        })
      }

  // let onClick = (e) => {
  //   axios.post("http://localhost:4000/users/register", data)
  //     .then((res) => {
  //       alert("Register success")
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }



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
            {/* <li className="nav-item" role="presentation">
                {/* <button
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
                </button> */}
                {/* </li> */}
              <div className='btn-group btn-group-toggle' data-toggle='button' >
                <label className='btn btn-secondary btn-danger'><input type="radio" name='role' id='option1' onChange={onChange} value={'customer'}/>
                Customer
                </label>
                <label className='btn btn-secondary btn-danger'><input type="radio" name='role' id='option2' onChange={onChange} value={'seller'}/>
                Seller
                </label>
              </div>

            {/* <li className="nav-item" role="presentation">
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
            </li> */}
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
                <form onSubmit={handleSubmit}>
                <div
                  className="form-group"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <input
                    name='email'
                    type="email"
                    className="form-control"
                    id="input-email-customer"
                    placeholder="Email"
                    onChange={onChange}
                    style={{ width: 400, height: 48 }}
                  />
                </div>
                <div
                  className="form-group"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <input
                    name='password'
                    type="password"
                    className="form-control"
                    id="input-password-customer"
                    placeholder="Password"
                    onChange={onChange}
                    style={{ width: 400, height: 48 }}
                  />
                </div>
                <div
                  className="form-group"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <input
                    name='fullname'
                    type="name"
                    className="form-control"
                    id="input-name-customer"
                    placeholder="Name"
                    onChange={onChange}
                    style={{ width: 400, height: 48 }}
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>

                <button type="submit" className="btn btn-primary" style={{width: 401,height: 48,borderRadius: 48,border: 1,backgroundColor: "#DB3022"
                    }}>Primary</button>


                </div>
              </form>
            </div>
            <div
              className="tab-pane fade show"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              {/* <form>

                <div
                  className="form-group"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <input
                    name='email'
                    type="email"
                    className="form-control"
                    id="input-email-seller"
                    placeholder="Email"
                    style={{ width: 400, height: 48 }}
                    onChange={onChange}

                  />
                </div>
                <div
                  className="form-group"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <input
                    name='password'
                    type="password"
                    className="form-control"
                    id="input-password-seller"
                    placeholder="Password"
                    style={{ width: 400, height: 48 }}
                    onChange={onChange}

                  />
                </div>
                <div
                  className="form-group"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <input
                    name='fullname'
                    type="name"
                    className="form-control"
                    id="input-name-seller"
                    placeholder="Name"
                    style={{ width: 400, height: 48 }}
                    onChange={onChange}

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
                    onClick={onClick}
                  >
                    Primary
                  </button>
                </div>
              </form> */}
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
              <p>Already have a Tokopedia account?</p>{" "}
              <Link to={'/login'}>
                <p className='text-danger'>Login</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register