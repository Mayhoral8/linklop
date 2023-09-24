import React from "react";
import index from './index.css'
import Modal from "./modal";
import Home from "./home";
import Navbar from "./navbar";
import LoadingOverlay from "./spinner";

const App = () => {
  return (
    <>
    <Navbar/>
    <Modal/>
    <LoadingOverlay/>
      <Home/>
    </>
  );
};
export default App;
