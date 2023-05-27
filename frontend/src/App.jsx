import { useState } from 'react';
import './App.css';
import login from "../src/assets/page/login"
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
import Login from './assets/page/login'
import Register from '../src/assets/page/register'
import home from '../src/assets/page/home'
function App() {
  return (
    <>
      <div>
        <ToastContainer />
        {/* <Login/> */}
        {/* <Register/> */}
        <Routes>
          <Route path='/' Component={<home/>}
        <Route path="/login" component={<Login/>} />
        <Route path="/register" component={<Register/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
