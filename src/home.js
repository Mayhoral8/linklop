import React from "react";
import { useEffect } from "react";
// import { Link } from 'react-router-dom'
import UNIZIK from "./img/UNIZIK2.png";
// import Payment from "./img/Payment.png";
import Payment1 from "./img/Payment1.jpg";
import documentUpload from './img/documentUpload.png';
import Register1 from "./img/Register1.jpg";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { ConsumerContext } from "./context";
import Modal from "./modal";
import {useTypewriter, words, Cursor} from 'react-simple-typewriter'
import TypeWriterEffect from 'react-typewriter-effect'



const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  
  
  
   const {typeText} = useTypewriter({
     words: ['TRANSCRIPT', 'COVER LETTER', 'ENGLISH PROFICIENCY LETTER'],
     loop:{},
     typeSpeed: 120,
    });
  return (
    <ConsumerContext>
      {(value) => {
        const {topScroll, homeSignUpBtn, setCloseModal, setOpenModal, closeModal, openModal } = value;
        
    
        return (
          <>
          {/* {!closeModal ? <Modal/> : null} */}
            <section className="lg:flex lg:flex-row-reverse lg:justify-between lg:mt-12 py-8 w-full lg:w-full lg:h-96 bg-blue-base text-gray mx-auto">
              <div
                className="lg:mt-6 mt-16 lg:mx-52 mx-auto  lg:min-w-96   lg:h-64 w-44 h-56"
                data-aos="fade-left"
                data-aos-easing="ease-out"
                data-aos-duration="1200"
              >
                <img src={UNIZIK} alt="" className="" />
              </div>

              <div
                className="lg:mt-4   lg:ml-36 flex flex-col"
                data-aos="fade-right"
                data-aos-easing="ease-out"
                data-aos-duration="1200"
              >
                <div className="font-Opensans lg:text-large text-center text-2xl font-bold text-white mt-12  lg:text-left">
                  <h3>GET YOUR</h3>

                <span className=" text-orange-base "> 
                <TypeWriterEffect
        startDelay={1000}
        cursorColor="#3F3D56"
        textStyle={{
         textAlign: 'center',
        }}
        multiText={[
          'TRANSCRIPT',
          'COVER LETTER',
          'ENGLISH PROFICIENCY LETTER',
         
        ]}
        multiTextDelay={4000}
        typeSpeed={100}
        multiTextLoop
      />
                
                 </span>
                
                  <h3>FROM UNIZIK IN</h3> 
                  <h3>7-14 DAYS</h3>
                </div>
                
                  <button
                    className="block bg-orange-base text-white w-44 mt-8 rounded-lg h-12 lg:h-12 mx-auto lg:mx-0"
                    onClick={() => {topScroll(); homeSignUpBtn()}}
                  >
                    Create A Free Account
                  </button>
                
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-center">GET STARTED IN 3 EASY STEPS</h2>

              <article className="lg:flex lg:flex-row-reverse mx-auto justify-around">
                <div
                  className="mx-auto"
                  data-aos="fade-left"
                  data-aos-easing="ease-out"
                  data-aos-duration="1200"
                >
                  <img src={Register1} alt="" className="w-72 h-86 mx-auto" />
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
              <article className="lg:flex-row-reverse flex-col-reverse  justify-around flex mx-auto mt-10 lg:mt-0">
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
                    Process Your Transcript and Equivalents.
                  </p>
                </div>

                <div
                  className="mx-auto"
                  data-aos="fade-left"
                  data-aos-easing="ease-out"
                  data-aos-duration="1200"
                >
                  <img src={documentUpload} alt="" className="w-60 h-78" />
                </div>
              </article>
              <article className="lg:flex lg:flex-row-reverse justify-around flex-row  grid mx-auto mt-10 lg:mt-0">
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
                  <h2 className=" text-center font-bold block">PAYMENT</h2>
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
                <p className="font-light  text-sm"> Copyright</p>
                <i className="fas fa-copyright ml-1 mt-1" />
                <p className="ml-1 font-light text-sm ">2023 Transcert</p>
              </div>
            </div>
          </>
        );
      }}
    </ConsumerContext>
  );
};
export default Home;
