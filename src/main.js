import React, { useRef, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ConsumerContext } from "./context";
import { db } from "./firebase-config";
import { auth, fetchUrl } from "./firebase-config";
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
          const { initialToken, loadData } = value;
          console.log(initialToken);
         
            if(initialToken){
              return (
                <>
            <div className="h-screen">
              <h3 className="mt-16 pl-2 ">Hi, {initialToken}</h3>
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
