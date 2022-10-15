import { Delete, LineAxisOutlined } from "@mui/icons-material";
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Button, ButtonGroup, Divider } from "@mui/material";
import Productcard from "./Productcard";

const Products = (props) => {
  // storage
  const [products, setproducts] = useState([]);

  // get all products;
  useEffect(() => {
    axios.post("http://localhost:5000/getproducts", {data:"vfdvs"}).then((dt) => {
      if (dt.data) {
        console.log(dt.data);
        setproducts(dt.data);
      } else {
        console.log("no data found");
      }
    });
  },[]);

  // console.log(products);
  return (
    <div className="text-black  pt-4">
      <div className="flex justify-center font-bold text-2xl">
        <div>
          All Products
          <Divider />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 mt-3 p-3 gap-4 md:gap-6 lg:gap-10 ">
          {products.map((e, i) => (   
            <div key={i} className='self-stretch' style={{height:'100%'}}>
              <Productcard data={e} ind={i} lftu={props? props.lftu : ''}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

{
  /* <ButtonGroup>
              <Button className="btn btn-danger" variant="contained">
                Add to Cart
              </Button>
              <Button className="btn btn-danger" variant="contained">
                Buy Now
              </Button>
            </ButtonGroup> */
}
