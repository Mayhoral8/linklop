import React from "react";
import { Link } from "react-router-dom";
import { ConsumerContext } from "./context";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase-config";
import TranscertLogo from './img/TranscertLogo.png'
import Register1 from "./img/Register1.jpg";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <ConsumerContext>
        {(value) => {
          const { logout, currUser, show, setShow, setCurrUser, initialToken, topScroll } =
            value;

          return (
            <section className="lg:flex lg:justify-evenly lg:flex-row top-0 fixed border-black border-b h-12 lg:h-14 z-10 bg-white w-full ">
              <div className=" lg:block flex flex-row justify-between">
                <Link to="/">
                  <img src={TranscertLogo} alt=""   onClick={() =>
                      setShow((presShow) => {
                        if (presShow === true) {
                          return show;
                        } else {
                          return !show;
                        }
                      })
                    }
                    className="ml-2 lg:mt-4 mt-3 box text-black  lg:w-38 w-28 " />
                </Link>
                {show ?
                  <i
                  className="fas fa-bars my-auto cursor-pointer px-4 lg:hidden mt-4 text-blue-base"
                  onClick={() =>
                    setShow(() => {
                      return !show;
                    })
                  }
                  /> :   <i
                  className="fas fa-close my-auto cursor-pointer px-4 lg:hidden mt-4 text-blue-base"
                  onClick={() =>
                    setShow(() => {
                      return !show;
                    })
                  }
                  /> 
                }
              </div>
              <div
              className={`h-0 lg:mt-3 mt-3 lg:flex lg:justify-end  mr-8 navbar-project lg:visible sticky transition-all ease-in delay-400 ${
                show ? "h-0" : "h-48 lg:h-0"
              } bg-orange-base w-full  top-0 z-20 absolute block`}
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
                  <div className="lg:mr-40 lg:flex text-center lg:text-blue-base text-sm text-white">
                    <div
                      className={`${
                        initialToken ? "hidden" : "visible"
                      } lg:mt-1  `}
                    >
                      <Link to="/login">
                        <button onClick={() => {setShow(!show); topScroll()}}>Login</button>
                      </Link>
                    </div>
                    <div
                      className={`${
                        initialToken ? "hidden" : "visible"
                      } lg:bg-orange-base lg:w-28 lg:h-8 lg:rounded-md text-white lg:ml-10 lg:leading-7 text-center mx-auto`}
                    >
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
                        <button onClick={() => {setShow(!show); topScroll()}}>Payment</button>
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
