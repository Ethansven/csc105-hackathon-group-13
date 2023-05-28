import { useState } from "react";
import "./App.css";
import login from "./pages/login";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Router,
} from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from "./axiosInstance";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Result from "./pages/result";
import axios from "axios";
import Error from "./pages/404";
function App() {
  
  return (
    <>
      <div>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regis" element={<Register />} />
          <Route path="/result" element={<Result/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
