import {React, useState} from 'react'
import { PaystackButton } from 'react-paystack'
import styled from 'styled-components'

const Paystack =()=> {

    const publicKey = "pk_test_c77789432ebc6458f202f41e8e30e0971371909d"
  const amount = 1000000 // Remember, set in kobo!
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

    const componentProps = {
        email,
        amount,
        metadata: {
          name,
          phone,
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () =>
          alert("Thanks for doing business with us! Come back soon!!"),
        onClose: () => alert("Wait! You need this oil, don't go!!!!"),
      }
  return (
    <>
    <PaymentStyle>
    <div className="checkout-form mt-20 mx-auto
    ">
  <div className="checkout-field">
    <label>Name</label>
    <input
    className='focus:outline-none border-b-2 mx-auto h-10 text-gray w-72'
      type="text"
      id="name"
      onChange={(e) => setName(e.target.value)}
    />
  </div>
  <div className="checkout-field">
    <label>Email</label>
    <input
    className='focus:outline-none border-b-2 mx-auto h-10 text-gray w-72'
      type="text"
      id="email"
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <div className="checkout-field">
    <label>Phone</label>
    <input
    className='focus:outline-none border-b-2 mx-auto h-10 text-gray w-72'
      type="text"
      id="phone"
      onChange={(e) => setPhone(e.target.value)}
    />
  </div>
  <PaystackButton className="paystack-button mx-auto " {...componentProps} />
</div>
      </PaymentStyle>
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