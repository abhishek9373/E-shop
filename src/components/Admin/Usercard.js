import { Button, Typography } from "@mui/material";
import React from "react";

function Usercard(props) {
    const {address,email,name,userid} = props.data;
  return (
    <div className="flex justify-center flex-wrap rounded bg-white">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="flex justify-center">
          <img
            className="w-40 h-40 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo374JLD-0KO4w2ms4-_i97bzSxiSzpPYtIw&usqp=CAU"
            alt="Sunset in the mountains"
          />
        </div>
        <div className="px-6 py-4 ">
          <div className="font-bold text-xl mb-2">{name}</div>
          <Typography>Customerid: {userid}</Typography>
          E-mail:
          <p className="text-gray-700 text-base bg">
            {email}
          </p>
          Address:
          <p className="text-gray-700 text-base bg">
            {address}
          </p>
          <Button className="mt-3" variant="contained">
            Orders
          </Button>
        </div>
        <div className="px-6 pt-4 pb-2"></div>
      </div>
    </div>
  );
}

export default Usercard;
