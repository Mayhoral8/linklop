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


    
    // .then(() => {
    //   emailjs
    //     .sendForm(
    //       "service_1kf8q4r",
    //       "template_7haozug",
    //       form.current,
    //       "HoDMgnKrRm2WdK2E_"
    //     )
    //     .then(
    //       (result) => {
    //         console.log(result.text);
    //         alert("mail sent");
    //       },
    //       (error) => {
    //         console.log(error.text);
    //       }
    //     );
    // })


    // .then(() => {
    //   emailjs
    //     .sendForm(
    //       "service_1kf8q4r",
    //       "template_7haozug",
    //       form.current,
    //       "HoDMgnKrRm2WdK2E_"
    //     )
    //     .then(
    //       (result) => {
    //         console.log(result.text);
    //         alert("mail sent");
    //       },
    //       (error) => {
    //         console.log(error.text);
    //       }
    //     );
    // })



    
          // const upload = (e)=>{
          //   e.preventDefault();
          //   if(image  === null)return;
          //   const imageRef = ref(storage, `${auth.currentUser.uid}/${image.name}`);
          //   uploadBytes(imageRef, image).then(()=>{
          //     alert('image uploaded');
          //   }).then(()=>{
          //     const dbImageRef = ref(storage, `${auth.currentUser.uid}`)
          //     listAll(dbImageRef).then((response)=>{
          //       console.log(response)
          //       const items = response.items
          //       console.log(items)
          //       let temp = []
          //       items.forEach((item, i)=>{            
          //             getDownloadURL(item).then((urlRaw)=>{
          //               console.log(urlRaw)
          //               updateFunc(e, urlRaw);
          //             })
                      
          //           })
                  
          //     }).then(()=>{
          //       alert('Registration Successful ✔')
          //     })
          //   })
          // }

            {/* <label>NIN Slip:</label>
                  <input
                   
                    type="file"
                    className="border-b-2 focus:outline-none px-4 pb-2"
                    required
                    onChange={(e)=> setImage(e.target.files[0])}
                  /> */}




                //   const string3 = JSON.stringify(text).replaceAll(',',',').replaceAll('"','').replaceAll('}', '').replaceAll('{', '')
                //   console.log(string3)
                //   string3.split(',').map((stringloop)=>{
                //     string1.push(' '+ stringloop)
                //   })
                // fetch( `https://api.callmebot.com/text.php?user=${username}&text=${string1.join(',').replaceAll(':', ': ')}`,{
                //   method: 'POST',
                //   mode: 'no-cors'