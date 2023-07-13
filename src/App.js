import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./login";
import Dashboard from "./dashboard";
import Register from "./register";
import Navbar from "./navbar";
import Home from "./home";
import RegistrationPage from "./registrationPage";
import LoadingOverlay from "./spinner";
import Paystack from "./paystack";
import { ConsumerContext } from "./context";
const App = () => {
  return (
    <>
      <ConsumerContext>
        {(value) => {
          const {
            logout,
            currUser,
            show,
            setShow,
            setCurrUser,
            initialToken,
            topScroll,
          } = value;
          return (
            <>
              <Navbar />
              <LoadingOverlay/>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<RegistrationPage />}  />
                <Route path='/home' element = {<Home/>}/>
                <Route path="/signUp" element={<Register />} />
                <Route path="/payment" element={<Paystack />} />
                <Route path="/paystack" element={<Paystack />} />
              </Routes>
            </>
          );
        }}
      </ConsumerContext>
    </>
  );
};
export default App;
