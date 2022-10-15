import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Middleware = (props) => {
  const navigate = useNavigate();
  const Comp = props.Comp;
  const token = localStorage.getItem("authtoken");
  const [show, setshow] = useState(false);

  // validate token;
  useEffect(() => {
    if (localStorage.getItem("authtoken") != "null") {
      axios
        .post("http://localhost:5000/verifytoken", {
          token: localStorage.getItem("authtoken"),
        })
        .then((e) => {
          if (e.data) {
            if (e.data.admin === 'true') {
              // console.log(e.data.admin)
              props.data(false);
              setshow(true);
            } else {
              console.log("Comp is visible");
              props.data(true);
              setshow(true);
            }
          } else {
            localStorage.setItem("authtoken", null);
            console.log("problem");
            navigate("/login");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      setshow(false);
      navigate("/login");
    }
  }, [show]);

  return <>{show ? <Comp lftu={props.lftu}/> : ""}</>;
};

export default Middleware;
