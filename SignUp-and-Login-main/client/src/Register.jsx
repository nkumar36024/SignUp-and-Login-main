import React, { useState } from "react";
import "./Register.css";
import { FaCircleUser, FaLock } from "react-icons/fa6";
import { FiMail, FiPhone } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = ({ text1, text2, c1, c2, c3, c4, c5 }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const [sup, setSup] = useState(true);
  const [lin, setLin] = useState(false);
  const signup = () => {
    setSup(true);
    setLin(false);
  };
  const login = () => {
    setSup(false);
    setLin(true);
  };

  const sendData = async () => {
    const burl = "http://localhost:5000/register";
    const data = { name, email, number, password };
    if(name && email && number && password){
    await axios.post(burl, data);
    setName("");
    setEmail("");
    setNumber("");
    setPassword("");
    navigate("/login");
    login();
    }
    else{
      alert("Can't leave any field empty")
    }
    
  };


  const getData = async () => {
    const burl = "http://localhost:5000/login";
    const result = await axios.post(burl, { email, password });
    if(email && password){
      if (result.data === "Success") {
        navigate('/homepage')
      }
      else{
        alert("Invalid I'd or password");
      }
    }
    else{
      alert("Can't leave any field empty")
    }
    
  };


  return (
    <>
      <div className="submit-container topsubmit">
        <Link to={"/"}>
          <div className="submit" onClick={signup}>
            Signup
          </div>
        </Link>
        <Link to={"/login"}>
          <div className="submit" onClick={login}>
            Login
          </div>
        </Link>
      </div>
      <div className="container">
        <div className="header">
          <div className="text">
            {text1}
            <span>{text2}</span>
          </div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {c1 && (
            <div className="input">
              <FaCircleUser className="icns" />
              <input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          {c2 && (
            <div className="input">
              <FiMail className="icns" />
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}
          {c3 && (
            <div className="input">
              <FiPhone className="icns" />
              <input
                type="phone"
                placeholder="Phone"
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
          )}
          {c4 && (
            <div className="input">
              <FaLock className="icns" />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          )}
        </div>
        {c5 && (
          <div className="forgot-password">
            Forgot Password? <span>Click here</span>
          </div>
        )}
        <div className="submit-container">
          {sup && (
            <div className="submit" onClick={sendData}>
              Signup
            </div>
          )}
          {lin && (
            <div className="submit" onClick={getData}>
              Login
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Register;
