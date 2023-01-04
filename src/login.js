import { React, useRef, useState } from "react";
import { ConsumerContext } from "./context";
import { Link, Navigate } from "react-router-dom";
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
            setErrorMsg
          } = value;

          const handleInputs = () => {
            setEmail(emailInputRef.current.value);
            setPassword(passwordInputRef.current.value);
            console.log(email);
          };
        if(initialToken){
          return <Navigate to = '/main'/>
        }
        // if(isLoading === true){
        //   return (<button type="button" class="bg-indigo-500 ..." disabled>
        //   Loading...
        // </button>)
        // }
          return (
            <>
              <div className="mt-20 h-screen">
            <h1 className="text-center text-xl">Welcome Back <br/> Sign In</h1>
              <h2 className="text-center text-red-500 font-bold">{errorMsg}</h2>
              {isLoading ?  (<button type="button" className="mx-auto block" disabled>
         <i className="fas fa-spinner animate-spin"/>
        </button>): null }
                <div className=" mx-auto w-72 mt-10 h-44 ">
                  <div className="grid grid-rows-2  gap-y-10 text-sm">
                    
                    <input
                      className="focus:outline-none border-b-2 mx-auto h-10 text-gray-700 w-72"
                      type="email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                     
                    <input
                      className="focus:outline-none box border-b-2 h-8 w-72 text-gray-700"
                      type="password"
                      placeholder="Password"
                      onChange ={(e)=> {setPassword(e.target.value); setErrorMsg('')}}
                      />
                      
                  </div>
                </div>
                
                  <button className="px-auto flex items-center mx-auto px-32 w-72 bg-orange-500 rounded-md h-8 my-auto text-white" onClick={()=> login()}>Login</button>
                
              <div className="mt-5 text-center block w-48 mx-auto pb-10">
              <h6 className="">Don't have an account?</h6> 
              <Link to ='/signup'>
                <p className="text-orange-500 w-20 block mx-auto text-center">
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
        }}
      </ConsumerContext>
    </>
  );
};
export default Login;
