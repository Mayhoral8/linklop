import {React, useState, useEffect, useContext} from 'react'
import { PaystackButton } from 'react-paystack'
import styled from 'styled-components'
import { ContextCreate } from './context';
import { ref, onValue } from "firebase/database";
import { db } from "./firebase-config";
import { useNavigate } from 'react-router-dom';


const Paystack =()=> {
const navigate = useNavigate()
    const publicKey = "pk_test_c77789432ebc6458f202f41e8e30e0971371909d"
  // const amount = 1000000 // Remember, set in kobo!
  const [email, setEmail] = useState()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [amount, setAmount] = useState("")


  // const [password, setPassword] = useState('')
  
 
const {token, regStatus, userId, setIsLoading, paymentFunc, paymentStatus, setPaymentStatus} = useContext(ContextCreate)

useEffect(()=>{

  onValue(ref(db, `/users/${userId}`), (snapshot) => 
  {
    const responseData = snapshot.val();
    setIsLoading(false)
    setEmail(()=>{
      return (responseData.email)
    })
    setName(()=>{
              return (responseData.name)
            })
            setPhone(()=>{
              return (responseData.phone)
            })
            setAmount(()=>{

                return responseData.amount
              
            
            })
          })
 
}, (error)=>{
  setIsLoading(false)
  console.log(error)    
    }, [userId])

    
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
      onerror: ()=> console.log('error')
  }


  if(token){
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
 
      <h1 className="text-center font-medium font-openSans mt-20 lg:text-base font-bold">{regStatus === '' ? 'You are about to be redirected': 'Please register before making payment'} <br/> {regStatus === '' ? 'to our payment portal': null}</h1>
  {regStatus === '' ?<PaystackButton onSuccess={()=> console.log('yes')} onClose={console.log('no')}  className={`block font-openSans bg-orange-base text-white w-48 mt-8 rounded-lg h-12 lg:h-12 mx-auto`} {...componentProps} /> : null}
</div>
      </PaymentStyle>
    </>
)
} else{
  return navigate('/login')
}
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