import React from "react";
import { Link } from "react-router-dom";
import { ConsumerContext } from "./context";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase-config";
import TranscertLogo from "./img/TranscertLogo.png";
import Register1 from "./img/Register1.jpg";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <ConsumerContext>
        {(value) => {
          const {
            logout,
            currUser,
            show,
            setShow,
            setCurrUser,
            initialToken,
            topScroll,
          } = value;

          return (
            <section className="font-openSans lg:flex lg:justify-evenly lg:flex-row top-0 fixed h-12 lg:h-20 z-10 bg-white w-full shadow-md">
              <div className="my-auto flex flex-row justify-between px-2 ">
                <Link to="/">
                  <img
                    src={TranscertLogo}
                    alt=""
                    onClick={() =>
                      setShow((presShow) => {
                        if (presShow === true) {
                          return show;
                        } else {
                          return !show;
                        }
                      })
                    }
                    className="lg:ml-12 lg:mt-0 mt-2.5 box text-black  lg:w-40 w-28 "
                  />
                </Link>
                {show ? (
                  <i
                    className="fas fa-bars my-auto cursor-pointer  lg:hidden mt-4 text-blue-base"
                    onClick={() =>
                      setShow(() => {
                        return !show;
                      })
                    }
                  />
                ) : (
                  <i
                    className="fas fa-close my-auto cursor-pointer  lg:hidden mt-4 text-blue-base"
                    onClick={() =>
                      setShow(() => {
                        return !show;
                      })
                    }
                  />
                )}
              </div>
              <div
                className={`h-0 lg:mt-7 mt-4 lg:flex lg:pl-20  lg:justify-end navbar-project lg:visible sticky transition-all ease-in delay-400 ${
                  show ? "h-0" : "h-48 lg:h-0"
                } bg-orange-base w-full  top-0 z-20 absolute block`}
              >
                <div
                  className={` ${
                    show ? "hidden" : "block"
                  } lg:flex lg:justify-around lg:w-96 lg:ml-64 text-center text-white lg:text-gray`}
                >
                  <div
                    className={`${
                      show ? "hidden" : "block"
                    } text-center lg:block`}
                  >
                    <Link to="/registration">
                      <button
                        type="button"
                        className={`${initialToken ? "visible" : "hidden"}  `}
                        onClick={() => {
                          setShow(!show);
                        }}
                      >
                        Register
                      </button>
                    </Link>
                  </div>
                  <div className={`${initialToken ? "visible" : "hidden"}`}>
                    <Link to="/payment">
                      <button
                        onClick={() => {
                          setShow(!show);
                          topScroll();
                        }}
                      >
                        Payment
                      </button>
                    </Link>
                  </div>

                  <div>
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
                  </div>
                </div>
                <div className={`${
                    show ? "hidden" : "visible"}  lg:mr-40 lg:flex text-center lg:text-blue-base text-md text-white`}>
                  <div>
                    <Link to="/login">
                      <button
                        className={`${
                          initialToken ? "hidden" : "visible"
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
                    className={`${
                      initialToken ? "hidden" : "visible"
                    } lg:bg-orange-base lg:w-28 lg:h-8 lg:rounded-md text-white lg:ml-10 lg:leading-2 text-center mx-auto`}
                  >
                    <Link to="/signUp">
                      <button
                        className={`${
                          initialToken ? "hidden" : "visible"
                        } lg:mt-1  `}
                        onClick={() => {
                          logout("register");
                          topScroll();
                          setShow(!show);
                        }}
                      >
                        Sign Up Free
                      </button>
                    </Link>
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
