import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import { useAuth } from "../components/Context/Auth";

export const Login = () => {
  

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();
  const [user, setUser] = useState("");
  

  const handleSign = () => {
    navigate("/signup");
    console.log("zaki");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (email, password) => {
    auth.login(!user);
    axios
      .post("https://nk-auth.herokuapp.com/email", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log("response", res.data);
        setShow(res.data);
        alert("Login Successfully");
        navigate("/");
      })
      .catch((e) => {
        navigate("/signup");
        console.log("Messgae:", e);
      });
  };

  return (
    <>
      <Box
        sx={{
          width: 500,
          height: 320,
          padding: "25px",
          margin: "auto",
          border: "1px solid transparent",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <img
            alt=""
          src="data:image/png;base64,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"
          width="150px"
        />
        <br />
        <br />
        <TextField
          sx={{ mb: "10px", width: "400px" }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={handleEmail}
        />
        <br />

        <TextField
          sx={{ mb: "10px", width: "400px" }}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onChange={handlePassword}
        />
        <br />
        <Button
          variant="contained"
          onClick={() => {
            handleLogin(email, password);
          }}
        >
          Login
        </Button>
        <br />
        <br />
        <br />
        <Button variant="outlined" onClick={handleSign}>
          Create account
        </Button>
      </Box>
    </>
  );
};
