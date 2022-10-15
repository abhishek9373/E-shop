import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authtoken") != 'null') {
      axios
        .post("http://localhost:5000/verifytoken", {
          token: localStorage.getItem("authtoken"),
        })
        .then((e) => {
          if (e.data) {
            console.log("Comp is visible")
            navigate('/')
          }
          else{
            localStorage.setItem('auth',null);
            console.log("problem");
            navigate('/login');
          }
        }).catch((e)=>{
          console.log(e)
        })
    } else {
         }
  },[]);

  // storage
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [address, setaddress] = useState();
  const [password, setpassword] = useState();
  const [conpassword, setconpassword] = useState();

  // create new user function

  async function createuser(e) {
    e.preventDefault();
    if (password === conpassword) {
      axios.post("http://localhost:5000/getid", {}).then((data) => {
        if (data) {
          console.log("user id is" + data.data.id);
          axios
            .post("http://localhost:5000/createuser", {
              name: name,
              email: email,
              address: address,
              password: password,
              userid: data.data.id,
            })
            .then((data2) => {
              console.log(data2);
              if (data2) {
                localStorage.setItem("authtoken", data2.data.token);
                navigate("/products");
              } else {
                alert("Validation Error");
              }
            });
        }
      });
    }
  }

  return (
    <div className="p-3 max-w-md m-auto  rounded shadow-2xl bg-white">
      <div className="flex justify-center mb-5">
        <div className="text-2xl">Register</div>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required={true}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required={true}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Delivery Address
          </label>
          <input
            type="text"
            required={true}
            className="form-control "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setaddress(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label ">
            Password
          </label>
          <input
            type="password"
            required={true}
            className="form-control "
            id="exampleInputPassword1"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label ">
            Confirm Password
          </label>
          <input
            type="password"
            required={true}
            className="form-control "
            id="exampleInputPassword1"
            onChange={(e) => {
              setconpassword(e.target.value);
            }}
          />
        </div>
        <button className="btn btn-primary" onClick={createuser}>
          Register
        </button>
        <span
          className="cursor-pointer text-blue-600"
          onClick={() => navigate("/login")}
        >
          &nbsp;&nbsp;or Login
        </span>
      </form>
    </div>
  );
};

export default Signup;
