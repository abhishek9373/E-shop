import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cartitemcard(props) {


    const {name,price,productid,description,details} =props.data;
    const imgs = props.data.img.data;
    const [visi,setvisi] = useState(true);
    const navigate = useNavigate();

    // remove from cart
    async function removeprd () {
        axios.post('http://localhost:5000/cancelorderandcartitem',{
            token:localStorage.getItem('authtoken'),
            condition:false,
            pid:productid
        }).then((e)=>{
            if(e.data){
                console.log("Removed")
                setvisi(false);
                props.lftu(-1);
            }
            
        })
    }
    // buy
    async function buyproduct (){
        axios.post('http://localhost:5000/takeoreder',{
            token:localStorage.getItem('authtoken'),
            pid:productid
        }).then((e)=>{
            if(e.data){
                console.log("Buyed")
                navigate('/orders')
            }
            
        })
    }
  return (
    <div  className={`bg-white rounded p-3 md:p-5 ${visi ? '' : 'hidden'}`}>
      <img src={`data:image/jpg;base64,${imgs}`} alt="" />
      <span className="font-bold">Arriving In Infinite Days</span> <br />
      <span className="font-bold">Product Name:</span> {name} <br />
      <span className="font-bold">Price:</span> {price}
      <br />
      <span className="font-bold">ProductId:</span>
      {productid}
      <br />
      <span className="font-bold">Description:</span> {description}
      <br />
      <span className="font-bold">Details:</span> {details}
      <br />
      <Button variant="contained" className="mt-2" onClick={removeprd}>
        Remove from Cart
      </Button>
      &nbsp;
      <Button variant="contained" className="mt-2" onClick={buyproduct}>
        Buy Now
      </Button>
    </div>
  );
}

export default Cartitemcard;
