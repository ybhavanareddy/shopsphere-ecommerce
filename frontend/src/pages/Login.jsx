import { useState,useRef, useEffect } from "react"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../services/authService";

function Login() {

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);

  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const emailRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await loginUser({email,password});

      if(response.token){
        //store token in localStorage
        login(response.name,response.token);

        
        //redirect to home page 
        navigate("/");
      }
      else{
      alert(response.message || "Login failed");

      

    }  }catch(error){
      console.error("Login error:", error);
      alert("Login failed. Please try again.");

    }
    

  }

  //Auto Focus on username input when component mounts
  useEffect(()=>{
    emailRef.current.focus();
  },[]);
  
  return (
    <div className="flex justify-center items-center h-screen">

      <form 
        onSubmit = {handleSubmit}
        className="border p-8 rounded shadow w-80"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          Login
        </h1>

        

        <div className="mb-4">
          <label className="block mb-1">
            Email
          </label>
          <input 
            ref={emailRef}
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">
            Password
          </label>
          <input 
            type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>

        <button 
          type="submit"
          className="bg-blue-900 text-white w-full py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>

        <p className ="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <span 
            className="text-blue-600 cursor-pointer"
            onClick={()=> navigate("/register")}
          >
            Register 
          </span>
        </p>
      </form>


    </div>
  )
}

export default Login