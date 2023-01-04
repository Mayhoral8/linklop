import React from "react";
import { useEffect } from "react";
// import { Link } from 'react-router-dom'
import UNIZIK from "./img/UNIZIK2.png";
// import Payment from "./img/Payment.png";
import Payment1 from "./img/Payment1.jpg";
import Register1 from "./img/Register1.jpg";
import { Link } from "react-router-dom";
import Aos from "aos"; 
import "aos/dist/aos.css"

const Home = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])
  return (
    <>
      <section className="lg:flex lg:flex-row-reverse mt-8 w-96 lg:w-full">
        <div
          className="lg:mt-10 lg:mx-52 mx-auto lg:w-60 lg:h-78"
          data-aos="fade-left"
          data-aos-easing="ease-out"
          data-aos-duration="1200"
        >
          <img src={UNIZIK} alt="" className="" />
        </div>

        <div className="lg:mt-24  lg:ml-36 flex flex-col mx-auto  
        "
        data-aos="fade-right"
            data-aos-easing="ease-out"
            data-aos-duration="1200">
          <h3
            className="lg:text-5xl text-4xl font-bold text-gray-800 text-center lg:text-left"
            
          >
            GET YOUR TRANSCRIPT
            <br /> FROM UNIZIK IN
            <br /> 7-14 DAYS
          </h3>
          <Link to='/login'>
          <button className="block bg-orange-500 text-white w-44 mt-8 rounded-lg h-10 mx-auto lg:mx-0">
            Create A Free Account
          </button>
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-center">GET STARTED IN 3 EASY STEPS</h2>



        <article className="lg:flex lg:flex-row-reverse justify-around  grid">
          
            <div data-aos="fade-left"
                data-aos-easing="ease-out"
                data-aos-duration="1200" >
              <img src={Register1} alt="" className="w-72 h-86"
              />
            </div>
            <div>
            <h2 className="my-32 text-center block"
            data-aos="fade-top"
            data-aos-easing="ease-out"
            data-aos-duration="1200" >REGISTER</h2>
            </div>
          
        </article>
        <article className="lg:flex  justify-around grid">
          
            <div  data-aos="fade-left"
              data-aos-easing="ease-out"
              data-aos-duration="1200">
              <img src={Payment1} alt="" className="w-60 h-78" 
              />
            </div>
            <div  data-aos="fade-right"
              data-aos-easing="ease-out"
              data-aos-duration="1200">
            <h2 className="my-32 text-center block"
             >UPLOAD DETAILS</h2>
            </div>
          
        </article>
        <article className="lg:flex lg:flex-row-reverse justify-around grid">
          
            <div  data-aos="fade-left"
              data-aos-easing="ease-out"
              data-aos-duration="1200">
              <img src={Payment1} alt="" className="w-60 h-78" 
              />
            </div>
            <div>
            <h2 className="my-32 text-center block"
            data-aos="fade-right"
            data-aos-easing="ease-out"
            data-aos-duration="1200" >PAYMENT</h2>
            </div>
          
        </article>

      </section>
      <div className="bg-orange-500 h-16 my-auto text-white h-20 left-0 bottom-0 right-0 pb-14 mt-auto">
        <ul className="flex flex-row justify-center">
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Home;
