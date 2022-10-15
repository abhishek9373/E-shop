import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = (props) => {

    // check for login
    useEffect(() => {
        if (localStorage.getItem("authtoken") != 'null') {
          axios
            .post("http://localhost:5000/verifytoken", {
              token: localStorage.getItem("authtoken"),
            })
            .then((e) => {
              if (e.data) {
                console.log("Comp is visible")
                props.data(false);
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
          navigate('/login');    }
      },[]);



    // usenavigate
    const navigate = useNavigate();

    // Storage
    const [email,setemail] = useState();
    const [password,setpassword] = useState();

    // function for Login user
    async function loguser(e){
        e.preventDefault()
        console.log(email + password)
        axios.post('http://localhost:5000/userlogin',{
            email:email,
            password:password
        }).then((data)=>{
            if(data.data){
                console.log(data.data);
                localStorage.setItem('authtoken',data.data)
                navigate('/')
            }
            else{
                alert("Wrong Credentials")
                console.log(data.data)
            }
        }).catch((E)=>{
            console.log(E);
        })
    }


    return (
        <div className='p-3 max-w-md m-auto shadow-2xl rounded bg-white'>
            <div className='flex justify-center mb-5'>
                <div className='text-2xl'>
                    Login
                </div>
            </div>
            <form>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
                    onChange={(e)=>{
                        setemail(e.target.value)
                    }} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label ">Password</label>
                    <input type="password" className="form-control " id="exampleInputPassword1" 
                    onChange={(e)=>{
                        setpassword(e.target.value)
                    }} />
                </div>
                <button className="btn btn-primary" onClick={loguser}>Login</button>
                <span className="cursor-pointer text-blue-600" onClick={() => navigate('/register')}>
                    &nbsp;&nbsp;New user
                    Register
                    here
                </span>
                <span className="cursor-pointer text-blue-600" onClick={() => navigate('/adminlogin')}>
                    <br/> <br/>
                    Admin/Vendor Login
                </span>
            </form>
        </div>
    )
}

export default Login
