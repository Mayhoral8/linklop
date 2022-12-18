import { React, useRef, useState } from "react";
import { ConsumerContext } from "./context";
import { Navigate } from "react-router-dom";

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
              <div className="mt-20">
            <h1 className="text-center text-xl">Welcome Back <br/> Sign In</h1>
              <h2 className="text-center text-red-500 font-bold">{errorMsg}</h2>
              {isLoading ?  (<button type="button" className="mx-auto block" disabled>
         <i className="fas fa-spinner animate-spin"/>
        </button>): null }
                <div className="mx-auto w-96 mt-10 px-5 py-5 grid grid-cols-2 h-60 bg-orange-500">
                  <div className="grid grid-cols-1 mt-1 gap-y-5 text-white">
                    <span>Email: </span> <span>Password: </span>{" "}
                  </div>
                  <div className="grid grid-cols-1 text-sm">
                    <input
                      // ref={emailInputRef}
                      className="border-2 h-10 rounded-md px-1"
                      type="email"
                      placeholder="Email..."
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      // ref={passwordInputRef}
                      className="border-2 h-10 rounded-md px-1"
                      type="password"
                      placeholder="Password..."
                      onChange ={(e)=> {setPassword(e.target.value); setErrorMsg('')}}
                    />
                  </div>
                </div>
                <div className="mx-auto flex flex-row justify-between px-4 w-96 border-2 border-red-200">
                  <button className="box mt-2 box mx-auto" onClick={()=> login()}>Login</button>
                </div>
              </div>
             
            </>
          );
        }}
      </ConsumerContext>
    </>
  );
};
export default Login;
