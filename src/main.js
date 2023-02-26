import React, { useRef, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
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

const Main = () => {
  const navigate = useNavigate();
  const back = ()=>{
    navigate('/login')
  }
  return (
    <>
      <ConsumerContext>
        {(value) => {
          const { initialToken, loadData, regStatus, setOpenModal, openModal } = value;
          console.log(typeof true);
          console.log(regStatus)
            if(initialToken){
              return (
                <>
                 { openModal ? <Modal/> : null}
              <div className="flex mt-16 lg:mt-20 flex-row justify-between px-4">
              <h3 className="text-sm"> Hi, {initialToken}</h3>
              <h3 className="text-sm">Status: {regStatus === 'undefined'? 'Not Registered': 'Registered'}</h3>
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
export default Main;
