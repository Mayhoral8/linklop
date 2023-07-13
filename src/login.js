import { React, useRef, useState } from "react";
import { ConsumerContext } from "./context";
import { Link, Navigate } from "react-router-dom";
import TranscertLogo from './img/TranscertLogo.png'
import Footer from "./footer";
import { send } from "@emailjs/browser";

const Login = () => {
  const [state1, setState1] = useState(false);
  const [item, setItem] = useState([]);
  return (
    <>
      <ConsumerContext>
        {(value) => {
          const {
            setPassword,
            setEmail,
            setErrorMsg,
            emailInputRef,
            passwordInputRef,
            email,
            loginHandler,
            errorMsg,
            isLoading,
            token,
            resetPword,
        
          } = value;

          const handleInputs = () => {
            setEmail(emailInputRef.current.value);
            setPassword(passwordInputRef.current.value);
            console.log(email);
          };
       
          const resetErrMsg = ()=>{
            setErrorMsg('')
          }
       
        if(!token){

          return (
            <>
            <div className="mt-24 font-openSans">
                <img src={TranscertLogo} alt="" className="w-40 mt-5 mx-auto"/>
            </div>
            <h1 className="font-openSans text-center text-md mt-10 font-bold">Welcome Back!</h1>
              <div className="mt-8 h-screen">
              <h2 className="text-center text-red font-bold">{errorMsg}</h2>
              
       
            
                <div className=" mx-auto w-72 mt-10 h-44 font-openSans">
                  <div className="grid grid-rows-2  gap-y-10 text-sm">
                    
                    <input
                      className={`focus:outline-none border-b-2 mx-auto h-10 text-gray w-72 ${errorMsg === 'Invalid Email'? 'border-red border-2': null}`}
                      type="email"
                      placeholder="Email"
                      disabled={isLoading? true:false}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                     
                    <input
                      className={`focus:outline-none box border-b-2 h-8 w-72 text-gray-700 ${errorMsg === 'Wrong Password'? 'border-red border-2': null}`}
                      type="password"
                      placeholder="Password"
                      disabled={isLoading? true:false}
                      onChange ={(e)=> {setPassword(e.target.value); }}
                      />
                      
                  </div>
                </div>
                
                  <button className="px-auto font-openSans flex items-center mx-auto mt-5 px-32 w-72 bg-orange-base rounded-md h-8 my-auto text-white" disabled={isLoading? true:false} onClick={()=> loginHandler()}>{isLoading ?<i className="fas fa-spinner animate-spin"/>  : 'Login'}</button>
                
              {errorMsg === 'Wrong Password'?  
              (<div className="grid grid-cols-2 gap-x-2 text-sm mt-4"><h2 className="text-right text-red-400  " >Forgot Password?</h2> <span className="cursor-pointer text-orange-base" onClick={()=> resetPword()}>Click here to reset it</span></div>): null }
              <div className=" flex font-openSans flex-row text-center justify-center w-64 mx-auto pb-2 mt-4 text-sm">
              <h6 className="w-40">Don't have an account?</h6> 
              <Link to ='/signup'>
                <p className="text-sm text-orange-base w-18 block mx-auto text-center" onClick={resetErrMsg}>
                  Sign Up
                </p>
              </Link>
            
              </div>
              <div>
              </div>
       
    </div>
    <Footer/>
             
            </>
          );
        }else {
          return  <Navigate to = '/dashboard'  />
        }
        }}
      </ConsumerContext>
    </>
  );
};
export default Login;
