import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom'
const blanjaIcon = require('../img/blanja.png')


const Login = () => {
  let [data, setData] = useState({
    email:"",
    password:""
  })

  let onChange = (e) =>{
    setData({
      ...data,
      [e.target.name]: e.target.value
  });
  }
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/users/login", data)
        .then((res) => {
            alert("Login success")
            localStorage.setItem('token', res.data.data.token)
        })
        .catch((err) => {
            alert(err);
        })
      }
  
  // let onClick = (e) =>{
  //   axios.post("http://localhost:4000/users/login", data)
  //   .then((res) => {
  //       alert("Login success")
  //       // localStorage.setItem('token', res.data.data.token)
  //       console.log('res.data');
  //   })
  //   .catch((err) => {
  //       console.log(err);
  //   })
  // }
  return (
    <>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "center", marginTop: 28 }}>
          <img src={blanjaIcon} alt="logo" className="img" />
        </div>
        <p className=" text-center py-3">Please login with your account</p>
        <div>
          
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
                    value={data.email}
                    onChange={onChange}
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
                    name='password'
                    value={data.password}
                    onChange={onChange}            
                    type="password"
                    className="form-control"
                    id="input-password"
                    style={{ width: 400, height: 48 }}
                    placeholder="Password"
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {/* <a href=" ./resetpassword.html" style={{ color: "#DB3022" }}>
                    Forgot password?
                  </a> */}
                </div>
                <div
                  style={{ display: "flex", justifyContent: "center", marginTop: 28 }}
                >
                  {/* <button
                  onClick={onClick}
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
                  </button> */}
                  <button type="submit" className="btn btn-primary" style={{width: 401,height: 48,borderRadius: 48,border: 1,backgroundColor: "#DB3022"
                    }}>Primary</button>
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

export default Login