import {React, useRef} from "react";
import { ConsumerContext } from "./context";
import { Navigate } from "react-router-dom";
const Register = () => {
  const namRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <>
      <ConsumerContext>
        {(value) => {
          const {setPassword, setEmail, isLoading, setName, registerUser, createData, currUser, setErrorMsg, errorMsg, setRegPhoneNumber, form} = value

          return (
            <>
            <div className="mt-20">

              <h1 className="text-center text-2xl">Sign Up</h1>
                <h4>{errorMsg}</h4>
                {isLoading ?  (<button type="button" className="mx-auto block" disabled>
         <i className="fas fa-spinner animate-spin"/>
        </button>): null }
              <div className="mx-auto mt-10 w-96 px-5 py-5 grid grid-cols-2 h-60 bg-purple-300">
                <form ref={form}>

                <div className="grid grid-cols-1 text-sm w-72 mx-7 gap-y-2">
                  <input
                    className="border-2 h-10 rounded-md px-1 "
                    type="text"
                    placeholder="Name..."
                    name="user_name"
                    onChange={(e)=> setName(e.target.value)}
                  />
                  
                  <input
                    className="border-2 h-10 rounded-md px-1"
                    type="email"
                    placeholder="Email..."
                    name="user_email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                    className="border-2 h-10 rounded-md px-1"
                    type="text"
                    placeholder="Phone Number..."
                    name="phone_number"
                    onChange={(e) => setRegPhoneNumber(e.target.value)}
                    />
                  <input
                    className="border-2 h-10 rounded-md px-1"
                    type="password"
                    placeholder="Password..."
                    name="pass_word"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                    className="border-2 h-10 rounded-md px-1"
                    type="email"
                    placeholder="destination."
                    name="email_to"
                    onChange={(e) => setPassword(e.target.value)}
                    
                    />
                    <input
                    className="border-2 h-10 rounded-md px-1"
                    type="email"
                    placeholder="sender"
                    name="email_from"
                    onChange={(e) => setPassword(e.target.value)}
                    
                    />
              </div>
            
                <button
                  className="block mt-1 ml-28 border-2 w-20"
                  onClick={(e)=> {registerUser(e);}}
                  type='submit'
                  >
                  Register
                </button>
                    
                    </form>
              </div>
                    </div>
            </>
          );
        }}
      </ConsumerContext>
    </>
  );
};
export default Register;
