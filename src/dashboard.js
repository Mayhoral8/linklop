import React, { useRef, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ConsumerContext } from "./context";
import { db } from "./firebase-config";
import { auth, fetchUrl } from "./firebase-config";
import Modal from "./modal";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  getBlob,
} from "firebase/storage";
import { storage } from "./firebase-config";
import FlutterWave from "./flutterwave";
import { useFlutterwave } from "flutterwave-react-v3";
import Footer from "./footer";
import { getAuth } from "firebase/auth";

const Dashboard = () => {
  const navigate = useNavigate();
 
  const auth = getAuth()
  console.log(auth.currentUser)
  return (
    <>
      <ConsumerContext>
        {(value) => {
          const { initialToken, initialToken2, loadData, regStatus, setOpenModal, openModal, paymentStatus } = value;
          console.log(typeof true);
          console.log(regStatus)
          console.log(paymentStatus)

            if(initialToken){
              return (
                <>
                 { openModal ? <Modal/> : null}
                 <div className="bg-blue-base  h-72 font-openSans mx-auto lg:mt-20 block">
            <h2 className=" text-center mt-10 lg:mt-6 py-32  lg:text-3xl text-xl font-bold text-white">
              
              Hi, {initialToken}

              </h2>
              <div className="grid ">

              <h2 className=" text-center mt-14 lg:mt-6 pt-12  lg:text-1xl  font-bold">
                Document Upload Status: {regStatus === 'undefined'? 'Not Uploaded': 'Uploaded'}
              </h2>
              {regStatus === 'undefined'?
              <Link to = '/registration'>
              <button
                    className="block font-openSans bg-orange-base text-white w-48 mt-2 rounded-lg h-12 lg:h-12 mx-auto"
                    
                    >
                    Upload Now
                  </button> </Link>:  null }
                      
              
              <h2 className=" text-center mt-14 lg:mt-6  lg:text-1xl font-bold">
                Payment Status: {paymentStatus === 'undefined'? 'Not Paid': 'Paid'}
              </h2>
              {paymentStatus === 'undefined'?
              <Link to = '/payment'>
              <button
                    className="block font-openSans bg-orange-base text-white w-48 mt-2 rounded-lg h-12 lg:h-12 mx-auto"
                    
                    >
                    Pay Now
                  </button> </Link>:  null }
                      
                    </div>
             
            </div>
             
            <div className="h-screen">
            </div>
            <Footer/>
            </>
          )
        }else{
          return  <Navigate to = '/login'  />
        }
      } 
          
        }
      </ConsumerContext>
    </>
  );
};
export default Dashboard;
