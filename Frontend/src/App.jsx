import { React } from "react";

import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Task from "./pages/Tasks";
import ProtectedRoute from "./routes/ProtectedRoute";
const App = () => {
  return (
    <main className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <Task />
            </ProtectedRoute>
          }
        />
      </Routes>
      <div className="">
        {" "}
        <Footer />
      </div>
    </main>
  );
};

export default App;
