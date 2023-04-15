import {React, useState, useEffect} from 'react'
import { PaystackButton } from 'react-paystack'
import styled from 'styled-components'
import { auth } from "./firebase-config";
import { ConsumerContext } from "./context";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { set, ref, update, onValue } from "firebase/database";
import { db } from "./firebase-config";

const Paystack =()=> {

    const publicKey = "pk_test_c77789432ebc6458f202f41e8e30e0971371909d"
  const amount = 1000000 // Remember, set in kobo!
  const [email, setEmail] = useState()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  // const [password, setPassword] = useState('')
  
  let userInFinal = ''

  useEffect(()=>{

          onValue(ref(db), (snapshot) => {
            const responseData = snapshot.val();
            let allUsers = [];
            console.log(responseData)
  
            for (const key in responseData) {
              allUsers.push({
                id: key,
                name: responseData[key].name,
                email: responseData[key].email,
                password: responseData[key].password,
                regStatus: responseData[key].regStatus,
                phone: responseData[key].regPhoneNumber
              });
            }
            const userIn = allUsers.filter((obj) => {
              return obj.id === auth.currentUser.uid;
            });
            userInFinal = userIn[0];
            console.log(userInFinal)
            setEmail(()=>{
              return (userInFinal.email)
            })
            setName(()=>{
              return (userInFinal.name)
            })
            setPhone(()=>{
              return (userInFinal.phone)
            })
            console.log(userInFinal.email)
          })
        
      }, [])
              // console.log(allUsers);
 
              // if(alert())
              console.log(alert)
    // console.log(userInFinal)
      
// console.log(auth.currentUser.displayName)
   
   
  return (
    <>
      <ConsumerContext>
      {(value) => {
          const {
            paymentFunc
          } = value;
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: ()=>{

      alert("Thanks for doing business with us! Come back soon!!")
      paymentFunc();

      

    },
    onClose: () => alert("Are you sure you want to cancel?"),
  }
  return (
    <>
    <div className=" bg-blue-base h-72 font-openSans mx-auto lg:mt-20 block">
            <h2 className=" text-center mt-10 lg:mt-6 py-32  lg:text-3xl font-bold text-white">
              Welcome To The Payment Page
              </h2>
             
            </div>
  <PaymentStyle>
    <div className="checkout-form mx-auto mt-56
    ">
 
      <h1 className="text-center font-medium font-openSans text-sm lg:text-base font-bold">You are about to be redirected <br/> to our payment portal</h1>
  <PaystackButton onSuccess={()=> console.log('yes')} onClose={console.log('no')} className="block font-openSans bg-orange-base text-white w-48 mt-8 rounded-lg h-12 lg:h-12 mx-auto" {...componentProps} />
</div>
      </PaymentStyle>
    </>
)
}
}
       </ConsumerContext>
    </>
  )
}
const PaymentStyle = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid black;
`;
export default Paystack