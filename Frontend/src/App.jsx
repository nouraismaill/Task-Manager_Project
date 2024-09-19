import { React } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
const App = () => {
  return (
    <main className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <div className="">
          {" "}
          <Footer />
        </div>
      </BrowserRouter>
    </main>
  );
};

export default App;
