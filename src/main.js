import React, {useRef}from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ConsumerContext } from "./context";
import { db } from "./firebase-config";
import { auth, fetchUrl } from "./firebase-config";
import {ref, uploadBytes, listAll, getDownloadURL, getBlob} from 'firebase/storage'
import { storage } from "./firebase-config";

const Main = () => {  
  const navigate = useNavigate();
return(<>
<ConsumerContext>
{ value =>{
const  {initialToken, loadData} = value;
  console.log(initialToken)
  return (
    <h3 className="text-center mt-10 "> {initialToken}</h3>
    )
}
}
</ConsumerContext>
</>)

};
export default Main;
