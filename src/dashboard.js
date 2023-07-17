import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "./firebase-config";
import { ref, onValue } from "firebase/database";
import { ContextCreate } from "./context";
import Modal from "./modal";

import Footer from "./footer";
import { getAuth } from "firebase/auth";

const Dashboard = () => {
  const {token, openModal, userId, setIsLoading, regStatus, setRegStatus, paymentStatus, setPaymentStatus} = useContext(ContextCreate)
  const auth = getAuth()
  const navigate = useNavigate();
const [displayName, setDisplayName] = useState('')
// setIsLoading(true)
useEffect(()=>{
  if(userId){
    setIsLoading(true)
    onValue(ref(db, `/users/${userId}`), (snapshot) => 
    {
      const responseData = snapshot.val();
      setDisplayName(auth.currentUser.displayName)
      setRegStatus(responseData.regStatus === '' ? 'Not Uploaded': 'Uploaded')
      setPaymentStatus(responseData.paymentStatus === '' ? 'Not Paid': 'Paid')
     
  }, (error)=>{
    setIsLoading(false)
    console.log(error)
  }

  )
  setIsLoading(false)
}else{
  navigate('/login')
}
}, [regStatus, paymentStatus, userId])

  if(userId){
  return (
    <>
                 { openModal ? <Modal/> : null}
                 <div className="bg-blue-base  h-72 font-openSans mx-auto lg:mt-20 block">
            <h2 className=" text-center mt-10 lg:mt-6 py-32  lg:text-3xl text-xl font-bold text-white">
              
              Hi, {displayName}

              </h2>
              <div className="grid ">

              <h2 className=" text-center mt-14 lg:mt-6 pt-12  lg:text-1xl  font-bold">
                Document Upload Status: {regStatus}
              </h2>
              {regStatus === 'undefined'?
              <Link to = '/registration'>
              <button
                    className="block font-openSans bg-orange-base text-white w-48 mt-2 rounded-lg h-12 lg:h-12 mx-auto"
                    
                    >
                    Upload Now
                  </button> </Link>:  null }
                      
              
              <h2 className=" text-center mt-14 lg:mt-6  lg:text-1xl font-bold">
                Payment Status: {paymentStatus }
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
        } 
else{
  return navigate('/login')
}
;
}
export default Dashboard;

