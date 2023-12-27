import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../HomePage";
import Navbar from "../../components/Navbar";
import ShowSideBar from '../../components/SideBar'
import Footer from "../../components/Footer";
import LoginPage from "../LoginPage";

function App() {
  const [showSideBar , setShowSideBar] = useState(false);
  const toggleSideBar = () => {
    setShowSideBar(prevState => !prevState)
  }
  return (
    <div>
      <Navbar toggleSideBar  = {toggleSideBar}/>
      <ShowSideBar showSideBar= {showSideBar}/>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/login" Component={LoginPage} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
