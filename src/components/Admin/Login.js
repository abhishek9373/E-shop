import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {

    const navigate = useNavigate();
    // storage
    const [Adminid,setAdminid] = useState();
    const [password,setpassword] = useState();

    // login with id and password
    function login (e) {
        e.preventDefault();
        console.log(Adminid + password)
        axios.post('http://localhost:5000/adminlogin',{
            adminid:Adminid,
            password:password
        }).then((e)=>{
            if(e.data){

                localStorage.setItem('authtoken',e.data)
                props.data(false);
                navigate('/products')
            }
            else{
                alert("Wrong Credentials");
            }
        })
        
    }

  return (
    <div className='p-3 max-w-md m-auto shadow-2xl rounded bg-white'>
            <div className='flex justify-center mb-5'>
                <div className='text-2xl'>
                    Admin Login
                </div>
            </div>
            <form>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">AdminId</label>
                    <input type="email" className="form-control " required id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{
                        setAdminid(e.target.value);
                    }}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label ">Password</label>
                    <input type="password" className="form-control " id="exampleInputPassword1" onChange={(e)=>{
                        setpassword(e.target.value)
                    }}/>
                </div>
                <button className="btn btn-primary" onClick={login}>Login</button>
                <span className="cursor-pointer text-blue-600" onClick={() => navigate('/register')}>
                    &nbsp;&nbsp;New user
                    Register
                    here
                </span>
                <span className="cursor-pointer text-blue-600" onClick={() => navigate('/login')}>
                    <br/> <br/>
                    User Login
                </span>
            </form>
        </div>
  )
}

export default Login
