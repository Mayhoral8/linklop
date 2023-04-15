import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import Footer from "./footer";
import styled from "styled-components"

const FlutterWave = () => {
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
      title: "Transcert",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay Now!",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <>
      <h1 className="capitalize mt-32 text-center">You are about to be redirected to our payment portal</h1>
    <PaymentStyle>
    <div className="">
      <FlutterWaveButton {...fwConfig} className='mt-5 px-24 w-72 bg-orange-base rounded-md h-12 my-auto text-white'/>
    </div>
    </PaymentStyle>
      {/* <Footer/> */}
    </>
  );
};
const PaymentStyle = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;

`;
export default FlutterWave;
 {/* <div className="checkout-field">
    <label>Name</label>
    <input
    className='focus:outline-none border-b-2 mx-auto h-10 text-gray w-72'
      type="text"
      id="name"
      value={name}
      // onChange={(e) => setName(e.target.value)}
      />
  </div>
  <div className="checkout-field">
  <label>Email</label>
  <input
  className='focus:outline-none border-b-2 mx-auto h-10 text-gray w-72'
  type="text"
  id="email"
      value={email}
      // onChange={(e)=> setEmail(e.target.value)}
    />
    </div>
    <div className="checkout-field">
    <label>Phone</label>
    <input
    className='focus:outline-none border-b-2 mx-auto h-10 text-gray w-72'
      type="text"
      id="phone"
      value={phone}
      // onChange={(e)=> setPhone(e.target.value)}
      />
    </div> */}