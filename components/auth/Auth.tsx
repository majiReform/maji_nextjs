'use client'
import styles from "./Auth.module.css";
import Image from "next/image";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { useState } from "react";
import { SpinLoaderTwo } from "../LoadingAnimation/spinLoader";

function LeftAreaComponent() {
  return (
    <div className="w-1/2 h-screen relative">
      <Image src="/auth_pic.jpeg" alt="people_shaing_hands" fill={true} style={{backgroundSize: "cover!important"}} />
    </div>
  );
}



function LoginComponent() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState("");
  const [loginButtonState, setLoginButtonState] = useState("idle");


  const handleLogin = () => {
    setLoginButtonState("loading");
  }

  return (
    <div className="flex justify-center items-center h-screen">

      <div className="flex flex-col gap-8 w-1/2">

      <div className="w-[140px] h-[60px] relative mx-auto">
      <Image src="/maij_logo.png" fill={true} alt="Maij logo" />
    </div>

        <div>
          <TextField
            id="outlined"
            type="email"
            label="Email"
            className="w-full bg-white"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
          />
        </div>

        <div>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            className="w-full bg-white"
            onChange={(e) => {setPassword(e.target.value)}}
          />
        </div>

        <div>
          <Button
          variant="contained"
          className="w-full bg-yellow text-black shadow-none py-2"
          >{loginButtonState == "loading" ? <SpinLoaderTwo /> : "Login"}</Button>
        </div>

      </div>

    </div>
  );
}


export {
  LeftAreaComponent,
  LoginComponent
}
