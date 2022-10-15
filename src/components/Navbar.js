import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import '@fontsource/roboto/500.css';
import { Badge } from "@mui/material";
import { AddShoppingCart, CardTravel, DeleteOutline, DeleteSweep, Logout, Luggage, Notifications } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import Orders from "./Orders";
import axios from "axios";

function Navbar(props) {
  const navigate = useNavigate();

  const [condtionadmin,setconditionadmin] = useState(props.cond);
  const [lftdata,setlftdata] = useState(props.num);

  // lift up data for cart value updation



  useEffect(()=>{
    axios.post('http://localhost:5000/getcartno',{token:localStorage.getItem('authtoken')}).then((e)=>{
      if(e.data){
        setnum(e.data.no);
      }
      else{
        console.log("Error in cart values")
      }
    })
    setconditionadmin(props.cond)
  })

  // function for logout
  async function logout () {
    
    localStorage.setItem('authtoken',null);
    navigate('/login');
  }

  async function showcartcontent () {
    navigate('/cart');
  }

  // cart badge content
  const [num,setnum] = useState(0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800">
      <div className="container-fluid font-bold ">
        <Link className="navbar-brand" to='/products'>
          Products
        </Link>
        <span className={`p-3 navbar-brand ${condtionadmin ? '' : 'hidden'} `}style={{float:"right"}} onClick={showcartcontent}>
          <Badge badgeContent={`${lftdata ? lftdata+num : num}`} color="error" className="cursor-pointer">
            <AddShoppingCart fontSize="large" />
          </Badge>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>

        </button>
        <div className={`collapse navbar-collapse`} id="navbarText">
          <ul className={`navbar-nav me-auto mb-2 mb-lg-0 `}>
            <li className={`nav-item text-xl align-baseline`}>
              <Link className="nav-link active" to='/orders'>
                Orders
              </Link>
            </li>
            <li className={`nav-item text-xl align-baseline ${!condtionadmin ? '' : 'hidden'}`}>
              <Link className="nav-link active" to='/addproducts'>
                Addproducts
              </Link>
            </li>
            <li className={`nav-item text-xl align-baseline ${!condtionadmin ? '' : 'hidden'}`}>
              <Link className="nav-link active" to='/updateproducts'>
                Updateproducts
              </Link>
            </li>
            <li className={`nav-item text-xl align-baseline ${!condtionadmin ? '' : 'hidden'}`}>
              <Link className="nav-link active" to='/users'>
                Users
              </Link>
            </li>
          </ul>

          <span className="cursor-pointer" onClick={logout} >
            <Logout fontSize="large" />
          </span>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar
