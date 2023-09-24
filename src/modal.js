import {React, useEffect, useContext, useState} from 'react'
import styled from "styled-components"
import Aos from "aos";
import { ContextCreate } from './context';
import "aos/dist/aos.css";

const Modal = ()=> {
const [btnText, setBtnText] = useState('copy')
  const {modal, setModal, modalMsg} = useContext(ContextCreate)
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  const copyHandler = ()=>{
    navigator.clipboard.writeText(modalMsg)
    setBtnText('copied!')
  }

  const modalHandler = ()=>{
    setModal(false)
  }
  if(modal){

    return (<>
          
              
              
                <ModalStyle>
                  <div className='w-64 h-64 bg-white border-2 grid grid-rows-3 rounded-md justify-space-evenly border-blue-500 ' data-aos-easing="ease-in"
                  data-aos-duration="600">
                    <i className='fa-solid fa-x absolute ml-56  mt-2 text-sm text-white bg-red-500 rounded-full text-center font-bold w-5 h-5 py-auto cursor-pointer' onClick={modalHandler}/>
                    <div className=' flex items-center '>

       <i className='fa-solid fa-check mx-auto bg-blue-500 rounded-full border text-white h-10 w-10 justify-center font-bold text-2xl flex items-center'/>
                    </div>
                    <div className=' flex items-center flex-col'>
        <h1 className='text-xl'>✨</h1>
        <h2 className='mx-auto text-sm font-bold item-center'>Your link has been shortened</h2>
                    </div>
        <div className='flex flex-row mx-auto items-center'>
        <input value = {modalMsg} className='px-2 border h-8 w-36 rounded-l-md'/>
        <button className='bg-blue-500 text-white h-8 w-12 rounded-r-md text-xs' onClick={copyHandler}>{btnText}</button>
        </div>
                  </div>
   
    </ModalStyle>
          
          
          
        
        </>
  
  )
}
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
background: rgba(0, 0, 0, 0.6);
`;
export default Modal 