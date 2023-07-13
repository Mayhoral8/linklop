import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ConsumerContext } from "./context";
import { db } from "./firebase-config";
import { set, ref, update, onValue } from "firebase/database";
import { ContextCreate } from "./context";
import Modal from "./modal";

import Footer from "./footer";
import { getAuth } from "firebase/auth";

const Dashboard = () => {
  const {token, setIsLoading, regStatus, setRegStatus, paymentStatus, setPaymentStatus} = useContext(ContextCreate)
  const auth = getAuth()
  const navigate = useNavigate();
  let userInFinal;

const [displayName, setDisplayName] = useState('')

useEffect(()=>{
  if(auth){
    setIsLoading(true)
    onValue(ref(db), (snapshot) => {
      const responseData = snapshot.val();
      // console.log(responseData)
      let allUsers = [];
      for (const key in responseData) {
        allUsers.push({
        id: key,
        name: responseData[key].name,
        email: responseData[key].email,
        password: responseData[key].password,
        regStatus: responseData[key].regStatus,
        paymentStatus: responseData[key].paymentStatus
      });
    }
    const userIn = allUsers.filter((obj) => {
      return obj.id === auth.currentUser.uid;
    });
    setDisplayName(auth.currentUser.displayName)
    userInFinal = userIn[0]
    console.log(allUsers)
    console.log(userInFinal)
    setRegStatus(userInFinal.regStatus === '' ? 'Not Uploaded': 'Uploaded')
    setPaymentStatus(userInFinal.paymentStatus === '' ? 'Not Paid': 'Paid')
    setIsLoading(false)
  }

  );
}else{
  navigate('/login')
}
}, [regStatus, paymentStatus, auth])

  console.log(auth)
  if(auth.currentUser){
  return (
    <>
      <ConsumerContext>
        {(value) => {
          const { token, setOpenModal, openModal } = value;
         
if(token){

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
          
}
        }
      </ConsumerContext>
    </>
  );
}else{
  return  navigate('/login')
}
};
export default Dashboard;
