import React, {useContext} from 'react'
import styled from "styled-components"
import { ContextCreate } from "./context";
import linkImg from './img/linky.png'




const LoadingOverlay =()=>{
  const {isLoading} = useContext(ContextCreate)


        
  
  if(isLoading){
    return (
      <>
    <ModalStyle>
    <div className='text-5xl'>
   <span className='animate-pulse'>🔗</span>
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
z-index: 40;
align-items: center;
justify-content: center;
background: rgba(0, 0, 0, 0.8);
`;
export default LoadingOverlay