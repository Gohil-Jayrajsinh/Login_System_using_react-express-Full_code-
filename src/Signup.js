import { Link, json } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Signup() {
  let [name, setName] = useState('');
  let [password, setPassword] = useState('');
  let [cpassword, setCpassword] = useState('');
  let [data, setData] = useState();
  let [already, setAlready] = useState(false);
  let [passNotMatch, setPassNotMatch] = useState(false);
  let [isInsert, setIsInsert] = useState(false);

  useEffect(() => {
    console.log(data);

    if (data && data.data && data.data[0].status === "Done") {
      setPassNotMatch(false);
      setIsInsert(true);
      setAlready(false);
    } else if (data && data.data && data.data[0].status === "Already Exists") {
      setPassNotMatch(false);
      setIsInsert(false);
      setAlready(true);
    }

  }, [data]); // Run the effect when 'data' changes


  function signupRequest(event) {
    event.preventDefault();

    if (password == cpassword) {

      try {
        const response = axios.post('http://localhost:3002/Signup', { name, password })
          .then((response) => { setData(response);console.log(data.data[0].status);})
          .catch((error) => {console.log(error)});
      } catch (err) {
        console.log(err);
      }
      // console.log("Hello world",name,password,cpassword);
    } else {
      setPassNotMatch(true);
      setIsInsert(false);
      setAlready(false);
      // console.log(passNotMatch);
    }
  }



  return (

    <div>
      {passNotMatch ? (
        <div className="alert alert-danger" role="alert">
          Both password not match
        </div>
      ) : (
        <></>
      )}

      {isInsert ? (
        <div className="alert alert-success" role="alert">
          record inserted successfully
        </div>
      ) : (
        <></>
      )}

      {already ? (
        <div className="alert alert-danger" role="alert">
          Username Already Taken
        </div>
      ) : (
        <></>
      )}



      <form className="container mt-5" onSubmit={signupRequest}>
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="cpassword" className="col-sm-2 col-form-label">
            Confirm Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              id="cpassword"
              className="form-control"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
        <br />
        <Link to="/Login">
          <button className="btn btn-primary mt-5">Go to Login Page</button>
        </Link>
      </form>
    </div>
  );
}

