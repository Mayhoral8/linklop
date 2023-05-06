import React, { useState, useRef, useEffect } from "react";
import { db } from "./firebase-config";
import { set, ref, update, onValue } from "firebase/database";
import { getAuth, sendPasswordResetEmail, sendEmailVerification, UserCredential } from "firebase/auth";

// import {uid} from 'uid';
import { auth, fetchUrl } from "./firebase-config";
import { useNavigate, Navigate } from "react-router";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { storage } from "./firebase-config";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";

const ContextCreate = React.createContext();

const ContextProvider = (props) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [dataStatus, setDataStatus] = useState(false);
  const [currUser, setCurrUser] = useState();
  const ref1 = useRef();
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [emailVBtn, setEmailVBtn] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currDbUser, setCurrDbUser] = useState();
  const [testUser, setTestUser] = useState();
  const [show, setShow] = useState(true);
  const [dbImage, setDbImage] = useState(true);
  const [imgUrl, setImgUrl] = useState("");
  const [regPhoneNumber, setRegPhoneNumber] = useState("");
  const [openModal, setOpenModal] = useState(false)
  const [closeModal, setCloseModal] = useState(false)

  const form = useRef();

  // ----------------------------------------------------------
  const initialToken= localStorage.getItem("user");
  const regStatus = localStorage.getItem('regStatus');
  const paymentStatus = localStorage.getItem('paymentStatus')
  
  // STATE FOR FORM DETAILS
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [courseOfStudy, setCourseOfStudy] = useState("");
    
  const [durationOfStudy, setDurationOfStudy] = useState("");
  const [modeOfStudy, setModeOfStudy] = useState("");

  const [emailAdd, setEmailAdd] = useState("");
  const [emailAdd2, setEmailAdd2] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [department, setDepartment] = useState("");
  
  const [programme, setProgramme] = useState("");

  const [sessOfGraduation, setSessOfGraduation] = useState("");
  const [docType, setDocType] = useState("");

  // const Main = () => {
  
  // EMAIL FUNCTION

  const sendEmail = (e) => {
    e.preventDefault();
  };


  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  let userInFinal = [];
const sendEmailV = (funcType)=>{
  const auth = getAuth()
sendEmailVerification(auth.currentUser)
if(funcType === 'login'){
  alert('Verification email sent')
}
}
  const registerUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
         set(ref(db, `${response.user.uid}`), {
          name,
          email,
          password,
          regPhoneNumber,
          id: response.user.uid,
        })
        // const auth = getAuth()
        // sendEmailVerification(auth.currentUser)
      sendEmailV();
      alert('Email verification link sent. Please check your email inbox or spam to verify and sign in.')
      auth.signOut();
      })
      .then(() => {
        setIsLoading(false);
      //  <Navigate to='/login'/>
       navigate('/login')
        console.log("registered");
      }).catch((error) => {
        if (error) {
          setIsLoading(false);
          const errorString1 = error.message
            .split(" ")
            .splice(1, error.message.length);
          errorString1.pop();

          let words = [];
          errorString1.map((word) => {
            console.log(word);
            words.push(word);
          });
          console.log(words.join(" "));
          setErrorMsg(words.join(" "));
          console.log(error.message);
        }
      });
  };

  const obj = {
    name: 'tope',
    age: null

  };
 
 
   
  
const emailVerResendMsg = "Please verify your email first to sign in. Check your mail inbox/spam"
  const login = () => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((response) => {
      if(response.user.emailVerified) {
          return true
      }else{
        alert('please Verify email')
        setErrorMsg(emailVerResendMsg)
        signOut(auth)
        

       
      }
    }).then(()=>{
      console.log('still ran')
      onValue(ref(db), (snapshot) => {
        const responseData = snapshot.val();
        console.log(responseData)
        let allUsers = [];

        for (const key in responseData) {
          allUsers.push({
            id: key,
            name: responseData[key].name,
            email: responseData[key].email,
            password: responseData[key].password,
            // regData: responseData[key].regData,
            regStatus: responseData[key].regStatus,
            paymentStatus: responseData[key].paymentStatus
          });
          
          const userIn = allUsers.filter((obj) => {
            return obj.id === auth.currentUser.uid;
          });
          userInFinal = userIn[0];
          
          const displayName = userIn.map((obj) => {
            return obj.name;
          });
          auth.currentUser.displayName = displayName[0];
        
         
        } 
        const userName = auth.currentUser.displayName;
        localStorage.setItem('user',  auth.currentUser.displayName);
        localStorage.setItem('regStatus', userInFinal.regStatus)
        localStorage.setItem('paymentStatus', userInFinal.paymentStatus)

        
        navigate('/dashboard')
        setErrorMsg("");
      });
      setIsLoading(false);
      localStorage.setItem('logout', null)

    })
      .catch((error) => {
        if (error) {
          setIsLoading(false);
          console.log(error.message);
          const errorString1 = error.message
            .split(" ")
            .slice(2, 4)
            .join("")
            .split("/")
            .slice(1, 2)
            .join("")
            .split("-")
            .join(" ");
          const errorString2 = errorString1
            .slice(0, errorString1.length - 2)
            .split(" ")
            .map((word) => {
              const word1 = word.replace(word[0], word[0].toUpperCase());
              return word1;
            });
          setErrorMsg(errorString2.join(" "));
        }
      });
  };

  useEffect(()=>{
    async function logTimer(){
      const logoutTime =  +(localStorage.getItem('logout'))
      if(logoutTime){     
          return  setTimeout(()=> logout(), logoutTime)  
      }else{
        return;
      }
    }
    logTimer()
    }, [initialToken])
 
  const logout = async (pop) => {
    await signOut(auth);
    localStorage.removeItem("user");
    localStorage.removeItem("logout");

    // console.log(auth.currentUser.displayName)
    setErrorMsg("");
    if (pop === "register") {
      
      navigate('/signUp')
    } else {
    
      navigate('/login')
    }
  };

  const homeSignUpBtn = ()=>{
      if(!initialToken){
        
        navigate('/signUp')
      }else{
    
        navigate('/home')
      }
  }
  const handleAddData = () => {
    setDataStatus(true);
  };
  const modal= ()=>{

  }

  
  const resetPword =()=>{
const auth = getAuth();
sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
    alert('Password reset link has been sent. Please check your email inbox/spam')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });
  }
  const updateFunc = (e, funcType) => {
    e.preventDefault();
    if (funcType === 'registration'){

      update(ref(db, `/${auth.currentUser.uid}`), {
        regStatus: true,
        documentType: docType
      });
    }
   
  };

  const paymentFunc= ()=>{
    update(ref(db, `/${auth.currentUser.uid}`), {
      paymentStatus: true
    });
    console.log('payment')
  }
  const topScroll = ()=>{
    window.scrollTo({
      top:0, left:0 , behavior: "smooth"
    });
  }
   const newString = []   
        const string1 = 'Fullname:tope,EmailAddress1:tope@gmail.com,EmailAddress2:tope@gmail.com,Phonenumber:55555555555,RegistrationNumber:555555555,Department:Physiology,Faculty:BMS,Programme:Special,Sessionofentry:2011/2012,Sessionofgraduation:,DateofBirth:2023-02-16'
        const string2 = string1.split(',').map((string1)=>{
              newString.push(' '+ string1)
        })
       
      const string3 = 'taa:po'
   

      const handleOpenModal =()=>{
          setOpenModal(true);
      }
      const handleCloseModal =()=>{
        setCloseModal(true);
    }
  return (
    <ContextCreate.Provider
      value={{
        handleAddData,
        users,
        setUsers,
        email,
        setEmail,
        password,
        setName,
        setPassword,
        nameInputRef,
        passwordInputRef,
        emailInputRef,
        status,
        setStatus,
        currUser,
        setCurrUser,
        image,
        setImage,
        registerUser,
        logout,
        login,
        setErrorMsg,
        errorMsg,
        isLoading,
        setTestUser,
        updateFunc,
        ref1,
        show,
        setShow,
        initialToken,
        setFullName,
        setEmailAdd,
        setPhoneNumber,
        setRegNumber,
        setDepartment,
        
        setProgramme,
        
        setSessOfGraduation,
        
        setImgUrl,
        setRegPhoneNumber,
        form,
        sendEmail,
        topScroll,
        homeSignUpBtn,
        regStatus,
        fullName,
        emailAdd,
        phoneNumber,
        regNumber,
        department,
       
        programme,
       
        
        openModal,
        setOpenModal,
        closeModal,
        setCloseModal,
        handleCloseModal,
        handleOpenModal,
        resetPword,
        paymentFunc,
        paymentStatus,
        emailVBtn,
        setEmailVBtn,
        sendEmailV,
        emailVerResendMsg,
        setDocType,
        setDurationOfStudy,
        setCourseOfStudy,
        setModeOfStudy,
        courseOfStudy,
        docType,
        modeOfStudy,
        durationOfStudy,
        navigate
      }}
    >
      {props.children}
    </ContextCreate.Provider>
  );
};
const ConsumerContext = ContextCreate.Consumer;

export { ContextProvider, ConsumerContext };

