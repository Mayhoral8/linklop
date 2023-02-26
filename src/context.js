import React, { useState, useRef, useEffect } from "react";
import { db } from "./firebase-config";
import { set, ref, update, onValue } from "firebase/database";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

// import {uid} from 'uid';
import { auth, fetchUrl } from "./firebase-config";
import { useNavigate } from "react-router";
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
  
  // STATE FOR FORM DETAILS
  const [fullName, setFullName] = useState("");
  const [emailAdd1, setEmailAdd1] = useState("");
  const [emailAdd2, setEmailAdd2] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [faculty, setFaculty] = useState("");
  const [programme, setProgramme] = useState("");
  const [sessOfEntry, setSessOfEntry] = useState("");
  const [sessOfGraduation, setSessOfGraduation] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  // const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    
 
 
  }, []);

  // EMAIL FUNCTION

  const sendEmail = (e) => {
    e.preventDefault();
  };


  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  let userInFinal = [];

  const registerUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        return set(ref(db, `${response.user.uid}`), {
          name,
          email,
          password,
          regPhoneNumber,
          id: response.user.uid,
        });
      })
      .then(() => {
        setIsLoading(false);
        navigate("/login");
        console.log("registered");
      })
      .then(() => {
        emailjs
          .sendForm(
            "service_1kf8q4r",
            "template_7haozug",
            form.current,
            "HoDMgnKrRm2WdK2E_"
          )
          .then(
            (result) => {
              console.log(result.text);
              alert("mail sent");
            },
            (error) => {
              console.log(error.text);
            }
          );
      })
      .catch((error) => {
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
  // const user1 = auth.currentUser.getIdTokenResult
  // console.log(user1)
  const login = () => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((response) => {
        onValue(ref(db), (snapshot) => {
          const responseData = snapshot.val();
          let allUsers = [];

          for (const key in responseData) {
            allUsers.push({
              id: key,
              name: responseData[key].name,
              email: responseData[key].email,
              password: responseData[key].password,
              // regData: responseData[key].regData,
              regStatus: responseData[key].regStatus
            });

            console.log(allUsers);
      
            
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
         
          //   if(regStatusFinal){

          //     const userData = {
          //     fullNameLocal: userInFinal.regData.fullName,
          //     emailAdd1Local: userInFinal.regData.emailAdd1,
          //     emailAdd2Local: userInFinal.regData.emailAdd2,
          //     phoneNumberLocal: userInFinal.regData.phoneNumber,
          //     regNumberLocal: userInFinal.regData.regNumber,
          //     facultyLocal: userInFinal.regData.faculty,
          //     departmentLocal: userInFinal.regData.department,
          //     programmeLocal: userInFinal.regData.programme,
          //     sessOfEntryLocal: userInFinal.regData.sessOfEntry,
          //     sessOfGraduationLocal: userInFinal.regData.sessOfGraduation,
          //     dateOfBirthLocal: userInFinal.regData.dateOfBirth,
          //     regStatus: userInFinal.regData.RegStatus,
          //     displayName: userName
          //   }
          //   localStorage.setItem('user',  JSON.stringify(userData));
          // } else if(!regStatusFinal){
            
            
            // const sessionData ={
            //   user: userName,
            //   regStatus: userInFinal.regStatus
            // }
          localStorage.setItem('user',  auth.currentUser.displayName);
          localStorage.setItem('regStatus', userInFinal.regStatus)
          console.log(userInFinal.regStatus)
          auth.currentUser.phoneNumber = 
          navigate("/main");
          setErrorMsg("");
        });
        setIsLoading(false);
        // setTimeout(()=> logout(), 10000)
        localStorage.setItem('logout', 360000)
  
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
    setTimeout(()=> logout(), localStorage.getItem('logout'))
    
    }, [initialToken])
 
  const logout = async (pop) => {
    await signOut(auth);
    localStorage.removeItem("user");
    localStorage.removeItem("logout");

    // console.log(auth.currentUser.displayName)
    setErrorMsg("");
    if (pop === "register") {
      navigate("/signUp");
    } else {
      navigate("/login");
    }
  };

  const homeSignUpBtn = ()=>{
      if(!initialToken){
        navigate("/signUp");
      }else{
        navigate("/home");
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
    console.log('Password reset email sent!')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });
  }
  const updateFunc = (e, urlRaw) => {
    e.preventDefault();

    // const regData = {
    //   // fullName,
    //   // emailAdd1,
    //   // emailAdd2,
    //   // phoneNumber,
    //   // regNumber,
    //   // faculty,
    //   // department,
    //   // programme,
    //   // sessOfEntry,
    //   // sessOfGraduation,
    //   // dateOfBirth,
    //   // IDdoc: urlRaw,
    //   RegStatus: true,
    // };

    update(ref(db, `/${auth.currentUser.uid}`), {
      regStatus: true
    });
  };
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
        setEmailAdd1,
        setEmailAdd2,
        setPhoneNumber,
        setRegNumber,
        setDepartment,
        setFaculty,
        setProgramme,
        setSessOfEntry,
        setSessOfGraduation,
        setDateOfBirth,
        setImgUrl,
        setRegPhoneNumber,
        form,
        navigate,
        sendEmail,
        topScroll,
        homeSignUpBtn,
        regStatus,
        fullName,
        emailAdd1,
        emailAdd2,
        phoneNumber,
        regNumber,
        department,
        faculty,
        programme,
        sessOfEntry,
        sessOfGraduation,
        dateOfBirth,
        openModal,
        setOpenModal,
        closeModal,
        setCloseModal,
        handleCloseModal,
        handleOpenModal,
        resetPword
      }}
    >
      {props.children}
    </ContextCreate.Provider>
  );
};
const ConsumerContext = ContextCreate.Consumer;

export { ContextProvider, ConsumerContext };
