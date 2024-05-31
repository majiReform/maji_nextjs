'use client'
import styles from "./Auth.module.css";
import Image from "next/image";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { useState } from "react";
import { SpinLoaderTwo } from "../LoadingAnimation/spinLoader";
import { loginFeature } from "@/lib/features/auth/login";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function LeftAreaComponent() {
  return (
    <div className="hidden xl:block w-1/2 h-screen relative" style={{ backgroundImage: `url('/auth_pic.jpeg')`, backgroundSize: "cover", backgroundPosition: "center" }}>
      {/* <Image src="/auth_pic.jpeg" alt="people_shaing_hands" fill={true} style={{backgroundSize: "cover!important"}} /> */}
    </div>
  );
}



function LoginComponent() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState("");
  const [loginButtonState, setLoginButtonState] = useState("idle");


  const handleLogin = async () => {
    try {
      setLoginButtonState("loading");

      await loginFeature(email, password);

      router.push("/admin/dashboard/thematicarea");

    } catch (error: any) {

      toast.error(error.response.data.message);

    } finally {
      setLoginButtonState("idle");
    }

  }

  return (
    <div className="flex justify-center items-center h-screen">

      <div className="flex flex-col gap-8 w-[80%] xl:w-[70%] xl:w-[60%]">

        <div className="w-[140px] h-[60px] relative mx-auto">
          <Image src="/maij_logo.png" fill={true} alt="Maij logo" />
        </div>

        <div>
          <input
            id="outlined"
            type="email"
            placeholder="Email"
            className="w-full bg-white py-3 px-4 rounded-[8px]"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
        </div>

        <div>
          <input
            id="outlined-password-input"
            placeholder="Password"
            type="password"
            className="w-full bg-white py-3 px-4 rounded-[8px]"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
          />
        </div>

        <div>
          <button
            className={`w-full ${loginButtonState == "loading" ? "bg-adminbg" : !email || !password ? "bg-adminbg" : "bg-yellow"}  text-black shadow-none py-2 rounded-[8px] font-bold`}
            onClick={handleLogin}
            disabled={loginButtonState == "loading" ? true : !email || !password ? true : false}
          >{loginButtonState == "loading" ? <SpinLoaderTwo /> : "Login"}</button>
        </div>

      </div>

    </div>
  );
}


export {
  LeftAreaComponent,
  LoginComponent
}
