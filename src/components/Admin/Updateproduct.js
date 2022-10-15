import { Button, Divider } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

function Updateproduct() {
  // storage
  const [name, setname] = useState(0);
  const [description, setdescription] = useState(0);
  const [detail, setdetail] = useState(0);
  const [price, setprice] = useState(0);
  const [qauntity, setqauntity] = useState(0);

  const [vpid,setvpid] = useState(0);

  // function to send data to mongodb
  async function updateproducts(e) {
    e.preventDefault();
    if (name!= null & description!= null & detail!= null & price!= null & qauntity!= null ) {
      axios
        .post("http://localhost:5000/updateproduct", {
          name: name,
          description: description,
          details: detail,
          price: price,
          rating: 0,
          qauntity: qauntity,
          pid:vpid
        })
        .then((e) => {
          if(e.data)
          alert(e.data)
        })
        .catch((e) => {
          console.log(e);
        });
    }
    else{
      alert("Empty")
    }
  }
  // verify product
  const [visibility,setvisibility] = useState(false);
  const [base64,setbase64] = useState();
  async function verifyproduct(e){

    e.preventDefault();
    if(vpid > 0 & vpid !=null){
      await axios.post('http://localhost:5000/verifyproduct',{pid:vpid}).then((e)=>{
        if(e.data){
          console.log(e.data);
          setvisibility(true);
          setname(e.data.name)
          setdetail(e.data.details)
          setdescription(e.data.description)
          setprice(e.data.price)
          setqauntity(e.data.qauntity)
          setbase64(e.data.img.data)
        }
        else{
          alert("No product Found")
        }
      })
    }
    else{
      alert("Product Id Wrong!")
    }
  }


  return (
    <div className="p-3">
      <div className="flex justify-center">
        <div className="text-2xl font-bold mt-3">
          Update Product
          <Divider />
        </div>
      </div>
      <div className="">
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Enter productid to update product:
            </label>
            <input
              type="number"
              id="last_name com"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Specifications"
              required
              onChange={(e) => {
                setvpid(e.target.value);
              }}
            />
            <button className="btn btn-primary" onClick={verifyproduct}>
              Verify product
            </button>
          </div>
      <form className={`${visibility ? '' : 'hidden'}`}>
        <div className="grid gap-6 mb-6 md:grid-cols-2 mt-3 p-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name of Product
            </label>
            <input
              type="text"
              id="first_name com"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Laptop,Table.."
              required
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Description
            </label>
            <input
              type="text"
              id="last_name com"
              value={description}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Specifications"
              required
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Dtails Of Product
            </label>
            <input
              type="text"
              id="company com"
              value={detail}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="About"
              required
              onChange={(e) => {
                setdetail(e.target.value);
              }}
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Price Of Product
            </label>
            <input
              type="number"
              id="phone com"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Rs 200"
              required
              value={price}
              onChange={(e) => {
                setprice(e.target.value);
              }}
            />
          </div>
          <div>
            <label
              htmlFor="website"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Quantity Of Product
            </label>
            <input
              type="number"
              id="website com"
              value={qauntity}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0123"
              required
              onChange={(e) => {
                setqauntity(e.target.value);
              }}
            />
          </div>
        </div>
        {base64 ? <img
          src={`data:image/jpg;base64,${base64}`}
          className="max-w-full h-auto rounded shadow-2xl"
          alt="..."
          id="getimg"
        /> : ''}
        <div className="flex justify-center">
          <button className="btn btn-primary mt-4" onClick={updateproducts}>
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default Updateproduct;
