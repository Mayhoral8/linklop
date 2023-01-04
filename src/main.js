import React, { useRef } from "react";
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

const Main = () => {
  const navigate = useNavigate();
  const config = {
    public_key: process.env.REACT_APP_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phone_number: "070********",
      name: "john doe",
    },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  useFlutterwave(config);
  return (
    <>
      <ConsumerContext>
        {(value) => {
          const { initialToken, loadData } = value;
          console.log(initialToken);
          return (
            <>
              <h3 className="mt-2 pl-2 ">Hi {initialToken}</h3>
              <div>
                <div className="bg-orange-500 h-16 my-auto text-white h-20 fixed left-0 bottom-0 right-0 pb-14 mt-auto">
                  <ul className="flex flex-row justify-center">
                    <li>
                      <a href="">Contact Us</a>
                    </li>
                    <li>
                      <a href="">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          );
        }}
      </ConsumerContext>
    </>
  );
};
export default Main;
