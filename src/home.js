import React from "react";
import { useEffect } from "react";
// import { Link } from 'react-router-dom'
import UNIZIK from "./img/UNIZIK2.png";
// import Payment from "./img/Payment.png";
import Payment1 from "./img/Payment1.jpg";
import Register1 from "./img/Register1.jpg";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { ConsumerContext } from "./context";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <ConsumerContext>
      {(value) => {
        const { topScroll } = value;
        return (
          <>
            <section className="lg:flex lg:flex-row-reverse py-8 w-96 lg:w-full bg-blue-base text-gray mx-auto">
              <div
                className="lg:mt-6 mt-16 lg:mx-40 mx-auto  lg:w-72 lg:h-86 w-44 h-56 ml-20 "
                data-aos="fade-left"
                data-aos-easing="ease-out"
                data-aos-duration="1200"
              >
                <img src={UNIZIK} alt="" className="" />
              </div>

              <div
                className="lg:mt-4 mr-8  lg:ml-36 flex flex-col"
                data-aos="fade-right"
                data-aos-easing="ease-out"
                data-aos-duration="1200"
              >
                <h3 className="font-Opensans lg:text-5xl text-center text-4xl font-bold text-white mt-4  lg:text-left">
                  GET YOUR TRANSCRIPT
                  <br /> FROM UNIZIK IN
                  <br /> 7-14 DAYS
                </h3>
                <Link to="/signUp">
                  <button
                    className="block bg-orange-base text-white w-44 mt-8 rounded-lg h-10 mx-auto lg:mx-0"
                    onClick={() => topScroll()}
                  >
                    Create A Free Account
                  </button>
                </Link>
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-center">GET STARTED IN 3 EASY STEPS</h2>

              <article className="lg:flex lg:flex-row-reverse justify-around">
                <div
                  className="mx-auto"
                  data-aos="fade-left"
                  data-aos-easing="ease-out"
                  data-aos-duration="1200"
                >
                  <img src={Register1} alt="" className="w-72 h-86" />
                </div>
                <div
                  className="text-center  lg:mt-10 max-w-xs mx-auto"
                  data-aos="fade-top"
                  data-aos-easing="ease-out"
                  data-aos-duration="1200 "
                >
                  <h2 className="text-center block font-bold ">REGISTER</h2>
                  <p className="mt-2 text-gray">
                    It's Quick, Easy, and Secure. Rest Assured That Your Details
                    Are Safe. Simply click the "Sign Up" button
                  </p>
                </div>
              </article>
              <article className="lg:flex lg:flex-row-reverse justify-around grid mx-auto mt-10 lg:mt-0">
                <div
                  className="text-center max-w-xs lg:mt-14 mx-auto"
                  data-aos="fade-right"
                  data-aos-easing="ease-out"
                  data-aos-duration="1200"
                >
                  <h2 className=" text-center block font-bold">
                    UPLOAD DETAILS
                  </h2>
                  <p className="mt-2 text-center">
                    Next, Supply Details and Official Documents From UNIZIK To
                    Process Your Trasncript and Equivalents.
                  </p>
                </div>

                <div
                  className="mx-auto"
                  data-aos="fade-left"
                  data-aos-easing="ease-out"
                  data-aos-duration="1200"
                >
                  <img src={Payment1} alt="" className="w-60 h-78" />
                </div>
              </article>
              <article className="lg:flex lg:flex-row-reverse justify-around grid mx-auto mt-10 lg:mt-0">
                <div
                  className="mx-auto"
                  data-aos="fade-left"
                  data-aos-easing="ease-out"
                  data-aos-duration="1200"
                >
                  <img src={Payment1} alt="" className="w-60 h-78" />
                </div>
                <div
                  className="text-center max-w-xs lg:mt-14 mx-auto pb-8"
                  data-aos="fade-right"
                  data-aos-easing="ease-out"
                  data-aos-duration="1200"
                >
                  <h2 className=" text-center block">PAYMENT</h2>
                  <p className="mt-2 text-center">
                    Finish by paying a token. We accept Flutterwave as a payment
                    method for all types of online transactions!
                  </p>
                </div>
              </article>
            </section>
            <div className="bg-gray my-auto text-white h-20 left-0 bottom-0 right-0 pb-14 mt-auto">
              <ul className="flex flex-row px-12 justify-around">
                <li>
                  <span>Contact us</span>
                </li>
                <li>
                  <span>Terms Of Service</span>
                </li>
              </ul>
              <div className="mt-6 text-center flex flex-row  mx-auto justify-center">
                <p className="font-light italic text-sm"> Copyright</p>
                <i className="fas fa-copyright ml-1 mt-1" />
                <p className="ml-1 font-light text-sm italic">2023 Transcert</p>
              </div>
            </div>
          </>
        );
      }}
    </ConsumerContext>
  );
};
export default Home;
