import { Delete } from "@mui/icons-material";
import { Button, ButtonGroup } from "@mui/material";
import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Productcard(props) {
  const [hideshowproduct, sethideshowproduct] = useState(true);
  const [uadmin, setuadmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("http://localhost:5000/verifytoken", {
        token: localStorage.getItem("authtoken"),
      })
      .then((e) => {
        if (e.data.admin == "true") {
          setuadmin(true);
        } else {
          setuadmin(false);
        }
      });
  }, []);

  // function to delete product
  async function deleteproduct() {
    axios
      .post("http://localhost:5000/deleteproduct", {
        id: props.data.productid,
      })
      .then((e) => {
        if (e.data) {
          console.log("product deleted");
          sethideshowproduct(false);
        } else {
          console.log("Error in product deletion");
        }
      });
  }

  // place new order
  async function takeoreder() {
    if (localStorage.getItem("authtoken") != null) {
      await axios
        .post("http://localhost:5000/takeoreder", {
          token: localStorage.getItem("authtoken"),
          pid: props.data.productid,
        })
        .then((e) => {
          if (e.data) {
            console.log(e.data);
            navigate('/orders')
          } else {
            console.log("oreder not placed");
          }
        });
    }
    else{
      alert("You are not Authorized user please Log in again")
    }
  }
  // add to cart
  async function addtocart (e) {
    e.preventDefault();
    await axios.post('http://localhost:5000/addtocart',{
      token:localStorage.getItem('authtoken'),
      pid:props.data.productid
    }).then((e)=>{
      if(e.data){
        console.log("Product addedd to cart")
        props.lftu(1)
      }
      else{
        console.log("Product Not Addedd to cart")
      }
    })
  }

  return (
    <div style={{height:'100%'}}
      key={props.ind}
      className={`shadow-2xl p-1 bg-white rounded-md ${
        hideshowproduct ? "" : "hidden"
      }`}
    >
      <img
        src={`data:image/jpg;base64,${props.data.img.data}`}
        className="max-w-full h-auto rounded shadow-2xl"
        alt="..."
        id="getimg"
      />
      <span className="text-lg text-lime-800">
        {props.data.name}&nbsp;{props.data.description}
      </span>
      <br />
      <span className="font-medium">Rs {props.data.price}</span>&nbsp;
      <span>get it by tommarrow</span>
      <br />
      <span className="">{props.data.details}</span>
      <br />
      {uadmin ? (
        <Button variant="contained" onClick={deleteproduct} className="m-3">
          delete Product
          <Delete fontSize="large" />
        </Button>
      ) : (
        <ButtonGroup>
          <Button className="btn btn-danger" variant="contained" onClick={addtocart}>
            Add to Cart
          </Button>
          <Button
            className="btn btn-danger"
            variant="contained"
            onClick={takeoreder}
          >
            Buy Now
          </Button>
        </ButtonGroup>
      )}
    </div>
  );
}

export default Productcard;
