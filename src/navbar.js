import React from "react";
import { Link } from "react-router-dom";
import { ConsumerContext } from "./context";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase-config";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <ConsumerContext>
        {(value) => {
          const { logout, currUser, show, setShow, setCurrUser, initialToken } =
            value;

          return (
            <section className="lg:flex lg:justify-evenly lg:flex-row top-0 border-b  sticky h-12 lg:h-14 z-10 bg-white ">
              <div className="">

              <Link to="/">
                <h3 className="ml-2 mt-2 box text-white" onClick={() => 
                  
                  
                    setShow((presShow)=>{
                      if (presShow === true){
                          return show
                        }
                      else{
                        return !show
                      }
                      
                    })
                  
                }>
                  Transcert
                </h3>
              </Link>
              <i
                className="fas fa-bars my-auto cursor-pointer px-4 lg:hidden"
                onClick={() =>
                  setShow(() => {
                    return !show;
                  })
                }
                />
                </div>
              <div
                className={`h-0 lg:mt-3 mt-12 lg:flex lg:justify-end  mr-8 navbar-project lg:visible sticky transition-all ease-in delay-400 ${
                  show ? "h-0" : "h-56 lg:h-0"
                } bg-gray-500 w-full  top-0 z-20 absolute block`}
              >
                <div
                  className={`${
                    show ? "hidden" : "block"
                  } text-center lg:block`}
                >
                    <button
                      type="button"
                      className={`${initialToken ? "visible" : "hidden"}`}
                      onClick={() => {
                        logout();
                        setShow(!show);
                      }}
                    >
                      Sign Out
                    </button>
                  <div className="lg:mr-40 lg:flex text-blue-500">
                  
                    <div className={`${initialToken ? "hidden" : "visible"} lg:mt-1  `}>
                      <Link to="/login">
                        <button onClick={() => setShow(!show)}>Login</button>
                      </Link>
                    </div>
                    <div className={`${initialToken ? "hidden" : "visible"} bg-orange-500 w-28 h-8 rounded-md text-white ml-10 leading-7`}>
                      <Link to="/signUp">
                        <button
                          onClick={() => {
                            logout("register");
                            setShow(!show);
                          }}
                        >
                          Sign Up Free
                        </button>
                      </Link>
                    </div>
                    <div className={`${initialToken ? "visible" : "hidden"}`}>
                      <Link to="/payment">
                        <button onClick={() => setShow(!show)}>Payment</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </ConsumerContext>
    </>
  );
};
export default Navbar;
