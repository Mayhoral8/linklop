import { React, useRef, useState } from "react";
import { ConsumerContext } from "./context";
import { Link, Navigate } from "react-router-dom";
import TranscertLogo from './img/TranscertLogo.png'
import Footer from "./footer";

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
            emailInputRef,
            passwordInputRef,
            email,
            currUser,
            login,
            errorMsg,
            isLoading,
            initialToken,
            setErrorMsg,
            resetPword
          } = value;

          const handleInputs = () => {
            setEmail(emailInputRef.current.value);
            setPassword(passwordInputRef.current.value);
            console.log(email);
          };
        // if(initialToken){
        //   return <Navigate to = '/main'/>
        // }
        // if(isLoading === true){
        //   return (<button type="button" class="bg-indigo-500 ..." disabled>
        //   Loading...
        // </button>)
        // }
        if(!initialToken){

          return (
            <>
            <div className="mt-24 font-openSans">
                <img src={TranscertLogo} alt="" className="w-40 mt-5 mx-auto"/>
            </div>
            <h1 className="font-openSans text-center text-md mt-10 font-medium">Welcome Back! <br/> Sign In</h1>
              <div className="mt-8 h-screen">
              <h2 className="text-center text-red-500 font-bold">{errorMsg}</h2>
              {isLoading ?  (<button type="button" className="mx-auto block" disabled>
         <i className="fas fa-spinner animate-spin"/>
        </button>): null }
                <div className=" mx-auto w-72 mt-10 h-44 font-openSans">
                  <div className="grid grid-rows-2  gap-y-10 text-sm">
                    
                    <input
                      className="focus:outline-none border-b-2 mx-auto h-10 text-gray w-72"
                      type="email"
                      placeholder="Email"
                      disabled={isLoading? true:false}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                     
                    <input
                      className="focus:outline-none box border-b-2 h-8 w-72 text-gray-700"
                      type="password"
                      placeholder="Password"
                      disabled={isLoading? true:false}
                      onChange ={(e)=> {setPassword(e.target.value); setErrorMsg('')}}
                      />
                      
                  </div>
                </div>
                
                  <button className="px-auto font-openSans flex items-center mx-auto mt-5 px-32 w-72 bg-orange-base rounded-md h-8 my-auto text-white" disabled={isLoading? true:false} onClick={()=> login()}>Login</button>
                
              {errorMsg === 'Wrong Password'? <h2 className="text-center text-sm mt-4" onClick={()=> resetPword()}>Forgot Password?</h2>: null }
              <div className=" flex font-openSans flex-row text-center justify-center w-64 mx-auto pb-2 mt-4 text-sm">
              <h6 className="w-40">Don't have an account?</h6> 
              <Link to ='/signup'>
                <p className="text-sm text-orange-base w-18 block mx-auto text-center">
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
          return  <Navigate to = '/main'  />
        }
        }}
      </ConsumerContext>
    </>
  );
};
export default Login;
