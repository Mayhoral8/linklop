import React from 'react'
import styled from "styled-components"
import { ConsumerContext } from './context'
const Modal = ()=> {
  return (
    <ConsumerContext>
        {(value)=>{
            const {closeModal, setCloseModal, setOpenModal, openModal} = value
  
        return(
    <ModalStyle>
    <div className='bg-white w-66 h-44 text-center rounded-md border-orange-base border-2'>
        <h4 className='mt-2  font-bold' >Registration Successful!</h4>
        <p className='text-sm capitalize mt-3 text-center px-8'>You will be contacted via Whatsapp <br/> To Be Approved for Payment.</p>
        <button onClick={()=> setCloseModal(true)} className='bg-orange-base w-28 h-8 text-white rounded-md mt-10 '>Continue</button>
        </div>
    </ModalStyle>
        )
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