import React, {useState, createContext} from "react";


export const ContextCreate = createContext();

const ContextComp = (props)=>{
    const [modal, setModal] = useState(false)
    const [modalMsg, setModalMsg] = useState('')
    const [isLoading, setIsLoading] = useState()
    const [qrCode, setQrCode] = useState('')

    return(
        <ContextCreate.Provider    
        value ={{
            modal,
            modalMsg,
            setModal,
            setModalMsg,
            isLoading,
            setIsLoading,
            qrCode,
            setQrCode
        }}>
     

    {props.children}
    </ContextCreate.Provider>
    )
}

export {ContextComp}