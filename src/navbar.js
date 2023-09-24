import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { ContextComp, ContextCreate } from "./context";
import { useNavigate } from "react-router-dom";
import linkImg from './img/linklop-black.png'



const Navbar = () => {
  const navigate = useNavigate();
 const { topScroll, logout,   token} = useContext(ContextCreate)
 const [show, setShow] = useState(false)
    const showHandler = ()=>{
        setShow(!show)
    }
          return (
            <div className=" lg:mx-auto lg:grid lg:grid-cols-2 grid-rows-2 shadow-md z-20 fixed lg:w-full top-0 left-0 right-0  lg:grid bg-white  h-12  items-center">
            <div className="px-4 grid grid-cols-2 mx-auto">
              <div className="w-28 flex lg:items-center align-center lg:mt-5 mt-3">
                <Link to='/'>
                <img src={linkImg} className="  box text-black  w-24  "/>
                </Link>
              </div>
            <i onClick={showHandler} className={`w-4 ml-auto lg:hidden fa-solid text-lg text-blue-base ${show? 'fa-xmark': 'fa-bars'} mt-3 cursor-pointer`}/>
            </div>

            <div
                    className={`h-0 lg:bg-white  lg:visible ${
                        false ? "h-0" : "lg:h-0 w-0"
                      } bg-blue-400 top-0 z-40  block `}
                      >
                        <div className={`${
                            show ? " w-72 pt-20 pl-5 lg:pt-0 lg:pl-0 " : "w-0 lg:w-96"} lg:w-96 lg:text-end  bg-white h-screen fixed  lg:text-base transition-all delay-400 duration-500 space-y-4 lg:space-y-0  ease-in-out text-2xl lg:grid lg:grid-rows-2 lg:h-0    lg:grid lg:grid-cols-2   lg:text-blue-base text-white`}>
                          <div>
                            <Link to="/login">
                              <button
                                className={`block text-blue-500 text-start lg:block transition-opacity delay-600 duration-600 ease-in-out ${
                                   show ? "visilbe" : "hidden"
                                } `}
                                onClick={() => {
                                  setShow(!show);
                                  topScroll();
                                }}
                              >
                                Login
                              </button>
                            </Link>
                          </div>
                          <div
                            className={ ` lg:block transition-opacity delay-600 duration-600 ease-in-out ${ 
                               show ? "visible" : "hidden"
                            }`}
                          >
                            <Link to="/signUp">{
        
                              <button
                              className={`text-blue-500 lg:rounded-md `}
                              onClick={() => {
                                logout("register");
                                topScroll();
                                setShow(!show);
                              }}
                              >
                                Sign Up Free
                              </button>
                              }
                            </Link>
                          </div>
                        </div>
                      </div>
            </div>
          );
                    }
    
export default Navbar;
