import React from "react";
// import { Link } from 'react-router-dom'
import UNIZIK from "./img/UNIZIK2.png";
import Payment from "./img/Payment.png";
const Home = () => {
  return (
    <>
      <section className="lg:flex lg:flex-row-reverse ">
        <div
          className="lg:mt-10 mx-52"
          data-aos="fade-left"
          data-aos-easing="ease-out"
          data-aos-duration="1200"
        >
          <img src={UNIZIK} alt="" className="w-60 h-78" />
        </div>

        <div className="lg:mt-20 mx-20">
          <h3
            className="text-3xl font-bold"
            data-aos="fade-right"
            data-aos-easing="ease-out"
            data-aos-duration="1200"
          >
            GET YOUR TRANSCRIPT FROM UNIZIK IN
            <br /> 7-14 DAYS
          </h3>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-center">GET STARTED IN 3 EASY STEPS</h2>



        <article className="lg:flex lg:flex-row-reverse justify-around  grid">
          
            <div>
              <img src={Payment} alt="" className="w-60 h-78" />
            </div>
            <div>
            <h2 className="my-32 text-center block">REGSITER</h2>
            </div>
          
        </article>
        <article className="lg:flex  justify-around grid">
          
            <div>
              <img src={Payment} alt="" className="w-60 h-78" />
            </div>
            <div>
            <h2 className="my-32 text-center block">UPLOAD DETAILS</h2>
            </div>
          
        </article>
        <article className="lg:flex lg:flex-row-reverse justify-around grid">
          
            <div>
              <img src={Payment} alt="" className="w-60 h-78" />
            </div>
            <div>
            <h2 className="my-32 text-center block">PAYMENT</h2>
            </div>
          
        </article>

      </section>
    </>
  );
};
export default Home;
