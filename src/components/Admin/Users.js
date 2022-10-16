import { Button, Divider, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import Usercard from "./Usercard";

function Users(props) {
  const [allusers, setallusers] = useState([]);

  useEffect( () => {
    axios.post("http://localhost:5000/getusers", {token:localStorage.getItem('authtoken')}).then((e) => {
      if (e.data) {
        console.log(e.data);
        setallusers(e.data);
      } else {
        console.log("no users false");
      }
    }).catch((e)=>{
      console.log(e)
    })
  },[]);

  return (
    <div>
      {allusers ? <div className="">
        <div className="mt-3 flex justify-center">
          <div className="font-bold text-2xl">All Users</div>
          <Divider />
        </div>
        <div className="flex justify-center mt-5">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allusers.map((e, i) => {
              return (
                <div key={i}>
                  <Usercard data={e} />
                </div>
              );
            })}
          </div>
        </div>
      </div> : ''}
    </div>
  );
}

export default Users;
