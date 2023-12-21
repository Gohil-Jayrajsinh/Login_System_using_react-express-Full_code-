import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'

function Login() {

  let [name, setName] = useState('')
  let [password, setPassword] = useState('')
  let [data, setData] = useState('')
  let [isLogin, setIsLogin] = useState()

  useEffect(() => {
    console.log(data);

    if (data && data.data && data.data[0].status === 'Founded') {
      setIsLogin(true)
    }
    
    if(data && data.data && data.data[0].status === 'Not Founded'){
      setIsLogin(false)
    }

  }, [data]); // Run the effect when 'data' changes


  function lognhendle(event) {
    event.preventDefault();
    const responce = axios.post('http://localhost:3002/Login', { name, password })
      .then((responce) => { setData(responce); })
      .catch((err) => { console.log(err)});
  }


  return (


    <div>
 {isLogin ? (
    <div className="alert alert-success" role="alert">
      Successfully Logined
    </div>
  ) : (
  <></>
  )}

  {
    (isLogin == false) ? (  <div className="alert alert-danger" role="alert">
    Username or password is invalid
  </div>) : (<></>)

  }
      <div>
        <form onSubmit={lognhendle} className="container mt-5 " >
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input type="text" onChange={(e) => { setName(e.target.value) }} className="form-control" id="inputEmail3" />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" onChange={(e) => { setPassword(e.target.value) }} className="form-control" id="inputPassword3" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Log in</button><br />
          <Link to="/Signup" >
            <button className="btn btn-primary mt-5 ">Go to Sign up</button>
          </Link>
        </form>
      </div>

    </div>
  )
}

export default Login
