import {React, useRef} from "react";
import { ConsumerContext } from "./context";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Register = () => {
  const namRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <>
      <ConsumerContext>
        {(value) => {
          const {setPassword, setEmail, isLoading, setName, registerUser, createData, currUser, setErrorMsg, errorMsg, setRegPhoneNumber, form, sendEmail} = value

          return (
            <>
            <div className="mt-20">

              <h1 className="text-center text-2xl">Sign Up</h1>
                <h4 className="text-center text-red-500 font-bold h-6">{errorMsg}</h4>

                <span className="h-8 text-center mx-auto">
                  g
                  {isLoading ?  (<button type="button" className="mx-auto block" disabled>
         <i className="fas fa-spinner animate-spin"/>
        </button>): null }
                  </span>
              <div className="">
                <form ref={form} onSubmit={sendEmail}>

                 <div className=" mx-auto w-72 mt-10 grid grid-cols-2 h-60 ">
                  <div className="grid grid-cols-1 text-sm text-gray-900">
                  <input
                      className="focus:outline-none border-b mx-auto h-10 text-gray-900 w-72 border-gray-300"
                      type="text"
                      placeholder="Name"
                      name="user_name"
                      onChange={(e) => {setName(e.target.value); setErrorMsg('')}}
                    />
                     
                    
                    <input
                      className="focus:outline-none border-b mx-auto h-10 text-gray-900 w-72  border-gray-300"
                      type="email"
                      placeholder="Email"
                      name="user_email"
                      onChange={(e) => {setEmail(e.target.value); setErrorMsg('')}}
                    />
                     
                    <input
                      className="focus:outline-none box border-b h-10 w-72 text-gray-900 border-gray-300"
                      type="password"
                      placeholder="Password"
                      name="pass_word"
                      onChange ={(e)=> {setPassword(e.target.value); setErrorMsg('')}}
                      />
                      <input
                      className="focus:outline-none box border-b h-10 text-gray-900 w-72 border-gray-300"
                      type="text"
                      placeholder="Phone Number"
                      name="phone_number"
                      onChange={(e) => {setRegPhoneNumber(e.target.value); setErrorMsg('')}}
                    />
                      
                  </div>
                </div>
            
                <div className=" mx-auto flex flex-row justify-between w-72 bg-orange-500 rounded-md h-8 my-auto text-white">
                  <button className="box my-auto  mx-auto"  onClick={(e)=> {registerUser(e);}}>Register</button>
                </div>
                    
                    </form>
              </div>
                    </div>
                    <div className="mt-5 text-center block w-48 mx-auto">
              <h6 className="">Already have an account?</h6> 
              <Link to ='/login'>
                <p className="text-orange-500 w-20 block mx-auto text-center">
                 Login
                </p>
              </Link>
              </div>
            </>
          );
        }}
      </ConsumerContext>
    </>
  );
};
export default Register;
