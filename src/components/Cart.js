import { Button, Divider } from "@mui/material";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import "../index.css";
import Cartitemcard from "./Cartitemcard";

function Cart(props) {
  const [allorders, setallorders] = useState([]);
  // get all order details

  const dt = useMemo(() => {
    axios
      .post("http://localhost:5000/getcartitem", {
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
  }, [props]);

  return (
    <div className="App">
      <div className="flex justify-center font-bold text-2xl mt-2">
        <div>
          Cart Products
          <Divider light />
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <div className="grid grid-cols-1 w-11/12 md:w-3/4 lg:gap-y-4 space-y-3">
          {allorders.map((e, i) => {
            return (
                <div key={i}>
                    <Cartitemcard data={e} lftu={props.lftu}/>
                </div>
            //   <div key={i} className="bg-white rounded p-3 md:p-5">
            //     <img src={`data:image/jpg;base64,${e.img.data}`} alt="" />
            //     <span className="font-bold">
            //       Arriving In Infinite Days
            //     </span>{" "}
            //     <br />
            //     <span className="font-bold">Product Name:</span> {e.name} <br />
            //     <span className="font-bold">Price:</span> {e.price}
            //     <br />
            //     <span className="font-bold">ProductId:</span>
            //     {e.productid}
            //     <br />
            //     <span className="font-bold">Description:</span> {e.description}
            //     <br />
            //     <span className="font-bold">Details:</span> {e.details}
            //     <br />
            //     <Button variant="contained" className="mt-2">
            //       Remove from Cart
            //     </Button>
            //     &nbsp;
            //     <Button variant="contained" className="mt-2">
            //       Buy Now
            //     </Button>
            //   </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center mt-6 shadow-2xl mb-10">
        <div>
          <Button variant="contained">Proceed To Buy All products</Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
