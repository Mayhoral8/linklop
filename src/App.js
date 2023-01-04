import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./login";
import Main from "./main";
import Register from "./register";
import Navbar from "./navbar";
import Home from "./home";
import RegistrationPage from "./registrationPage";
import FlutterWave from "./flutterwave";
import Footer from "./footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/signUp" element={<Register />} />
        <Route path="/payment" element={<FlutterWave />} />
      </Routes>
      {/* <Footer/> */}
    </>
  );
};
export default App;
