import {React, useEffect} from 'react'
import styled from "styled-components"
import { ConsumerContext } from './context'
import Aos from "aos";
import "aos/dist/aos.css";

const Modal = ()=> {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);
  return (
    <ConsumerContext>
        {(value)=>{
            const {closeModal, setCloseModal, setOpenModal, openModal, userInFinal} = value
            console.log('urs')
            if(userInFinal.amount !== 'undefined'){

              return(
                <ModalStyle>
    <div className='bg-white w-66 h-48 text-center rounded-md border-orange-base border-2'   data-aos="fade-up"
                  data-aos-easing="ease-in"
                  data-aos-duration="600">
        <h4 className='mt-2  font-bold' >Registration Successful!</h4>
        <p className='text-sm mt-3 text-center px-8'>Click on the Whatsapp Icon on this page<br/> to chat with our representative <br/> and be cleared for payment.</p>
        <button onClick={()=> setOpenModal(false)} className='bg-orange-base w-28 h-8 text-white rounded-md mt-10 '>Continue</button>
        </div>
    </ModalStyle>
        )
      }else {
        setOpenModal(true)
        return(
          <>
                     <ModalStyle>
    <div className='bg-white w-66 h-48 text-center rounded-md border-orange-base border-2'   data-aos="fade-up"
                  data-aos-easing="ease-in"
                  data-aos-duration="600">
        <h4 className='mt-2  font-bold' >Registration Successful!</h4>
        <p className='text-sm mt-3 text-center px-8'>Click on the Whatsapp Icon on this page<br/> to chat with our representative <br/> and be cleared for payment.</p>
        <button onClick={()=> setOpenModal(false)} className='bg-orange-base w-28 h-8 text-white rounded-md mt-10 '>Continue</button>
        </div>
    </ModalStyle>
          
          </>
        )
      }
     }
}
    </ConsumerContext>
  )
}

const ModalStyle = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
display: flex;
z-index: 10;
align-items: center;
justify-content: center;
background: rgba(0, 0, 0, 0.8);
`;
export default Modal 