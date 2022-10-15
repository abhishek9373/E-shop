import { Divider } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

function Addproducts() {
  // storage
  const [name, setname] = useState(null);
  const [description, setdescription] = useState(null);
  const [detail, setdetail] = useState(null);
  const [price, setprice] = useState(null);
  const [qauntity, setqauntity] = useState(null);
  const [image, setimage] = useState();

  // function to send data to mongodb
  async function addproduct(e) {
    e.preventDefault();
    // console.log(name);
    // console.log(description);
    // console.log(detail);
    // console.log(price);
    // console.log(qauntity);
    // console.log(image);

    if (name!= null & description!= null & detail!= null & price!= null & qauntity!= null & image!=null) {

      const data = new FormData();
      data.append("testImage", image);
      data.append("name", name);
      data.append("description", description);
      data.append("details", detail);
      data.append("price", price);
      data.append("rating", 0);
      data.append("qauntity", qauntity);
      data.append("productid", 1);

      console.log(image.name);
      axios
        .post("http://localhost:5000/uploadproduct", data, {
          name: name,
          description: description,
          details: detail,
          price: price,
          rating: 0,
          qauntity: qauntity,
          productid: 1,
        })
        .then((e) => {
          console.log(e.data);
          alert(e.data + " Product Addedd Add Another Product Now");
        })
        .catch((e) => {
          console.log(e);
        });
    }
    else{
      alert("Empty")
    }
  }
  return (
    <div className="p-3">
      <div className="flex justify-center">
        <div className="text-2xl font-bold mt-3">
          Add New Product
          <Divider />
        </div>
      </div>
      <form>
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0123"
              required
              onChange={(e) => {
                setqauntity(e.target.value);
              }}
            />
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              htmlFor="file_input"
            >
              Upload Image For Product
            </label>
            <input
              accept="image/*"
              className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              name="testImage"
              type="file"
              onChange={(e) => {
                setimage(e.target.files[0]);
                const [file] = e.target.files;
                if (file) {
                  document.getElementById("getimg").src =
                    URL.createObjectURL(file);
                }
              }}
            />
          </div>
        </div>
        <img
          src="#"
          className="max-w-full h-auto rounded shadow-2xl"
          alt="..."
          id="getimg"
        />
        <div className="flex justify-center">
          <button className="btn btn-primary mt-4" onClick={addproduct}>
            Addproduct
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addproducts;
