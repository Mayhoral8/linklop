import React, {useState, createContext} from "react";


export const ContextCreate = createContext();

const ContextComp = (props)=>{
    const [modal, setModal] = useState(false)
    const [modalMsg, setModalMsg] = useState('')
    const [isLoading, setIsLoading] = useState()

    return(
        <ContextCreate.Provider    
        value ={{
            modal,
            modalMsg,
            setModal,
            setModalMsg,
            isLoading,
            setIsLoading
        }}>
     

    {props.children}
    </ContextCreate.Provider>
    )
}

export {ContextComp}