import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

function Orderitemcard(props) {
    const {name,price,productid,description,details} = props.data;
    const imgs = props.data.img.data;
    const [visi,setvisi] = useState(true);

    // cancelorder

    async function cancelorder(){
        await axios.post('http://localhost:5000/cancelorderandcartitem',{
            token:localStorage.getItem('authtoken'),
            pid:productid,
            condition:true
        }).then((e)=>{
            if(e.data){
                setvisi(false);
            }
        }).catch((e)=>{
            console.log(e);
        })
    }

  return (
    <div className={`bg-white rounded p-3 md:p-5 ${visi ? '' : 'hidden'}`}>
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
      <Button variant="contained" className="mt-2" onClick={cancelorder}>
        Cancel Order?
      </Button>
    </div>
  );
}

export default Orderitemcard;
