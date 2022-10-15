import { Button, Divider } from "@mui/material";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Orderitemcard from "./Orderitemcard";

function Orders(props) {
  const [allorders, setallorders] = useState([]);
  // get all order details
  const navigate = useNavigate()

  const dt = useMemo(() => {
    axios
      .post("http://localhost:5000/getallorders", {
        token: localStorage.getItem("authtoken"),
      })
      .then((e) => {
        if (e.data) {
          console.log(e.data);
          setallorders(e.data);
         
          
        } else {
          console.log("no orders found");
        }
      });
  }, []);

  return (
    <div>
      <div className="flex justify-center font-bold text-2xl mt-2">
        <div>
          Your Orders
          <Divider light />
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <div className="grid grid-cols-1 w-11/12 md:w-3/4 lg: gap-y-4 space-y-3">
          {allorders.map((e, i) => {
              return (
                <div key={i}>
                  <Orderitemcard data={e}/>
                </div>
                // <div key={i} className='bg-white rounded p-3 md:p-5'>
                //   <img src={`data:image/jpg;base64,${e.img.data}`} alt=""/>
                //   <span className="font-bold">Arriving In Infinite Days</span> <br/>
                //   <span className="font-bold">Product Name:</span> {e.name} <br/>
                //   <span className="font-bold">Price:</span> {e.price}<br/>
                //   <span className="font-bold">ProductId:</span>{e.productid}<br/>
                //   <span className="font-bold">Description:</span> {e.description}<br/>
                //   <span className="font-bold">Details:</span> {e.details}
                //   <br/>
                //   <Button variant="contained" className="mt-2">
                //       Cancel Order?
                //   </Button>
                // </div>
              );
            })}
          
        </div>
      </div>
    </div>
  );
}

export default Orders;

{
  /* <div className="flex justify-center mt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {allusers.map((e, i) => {
            return (
              <div key={i}>
                <Usercard data={e} />
              </div>
            );
          })}
        </div>
      </div> */
}
