import React, {useContext} from 'react'
import styled from "styled-components"
import { ContextCreate } from "./context";





const LoadingOverlay =()=>{
  const {isLoading} = useContext(ContextCreate)


        
  
  if(isLoading){
    return (
      <>
    <ModalStyle>
    <div className='text-5xl'>
   <i className='fa-solid fa-spinner animate-spin text-blue-500'/>
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
background: rgba(0, 0, 0, 0.7);
`;
export default LoadingOverlay