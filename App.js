import React from "react";
import {} from "antd";
// import {Form} from 'antd';
import "./App.css";
// import{Typography} from "antd";
import { AiFillMail } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";
import {BiLogoGoogle} from "react-icons/bi";
import {BsMicrosoft} from "react-icons/bs";
import {FaFacebookSquare} from "react-icons/fa";
import {GrFormClose} from "react-icons/gr"


function App() {
  return (
    <div className="body">
      <header>
        <h2 className="logo">ValU</h2>
        <nav className="navigation">
          <a href="https://twitter.com/" target="_self">
            HOME
          </a>
          <a href="https://twitter.com/" target="_self">
            ABOUT
          </a>
          <a href="https://twitter.com/" target="_self">
            SERVICES
          </a>
          <button className="btnlogin-popup">login</button>
        </nav>
      </header>
      <div className="wrapper">
      <span className="icon-close">
        <GrFormClose/>
      </span>
        <div className="form-box login">
          <h2>Login</h2>
          <form>
            <div className="input-box">
              <span className="icon">
                <AiFillMail />
              </span>
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <AiFillLock />
              </span>
              <input type="password" required />
              <label>password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="https://twitter.com/">Forgot Password?</a>
            </div>

            <div>
              <button type="submit" className="btn">
                Login
              </button>
            </div>

            <div className="login-register">
              <p>
                Don't have an account?
                <a href="https://twitter.com/" className="register-link">
                  Register
                </a>
              </p>
            </div>
            <div className="login-alternative">
              <div style={{ display: "flex", alignItems: "center" }}>
                <hr style={{ flex: 1, height: "1px", backgroundcolor: "black",color:"black"}} />
                <p style={{ margin:  10}}>or login through</p>
                <hr style={{ flex: 1, height: "1px",backgroundcolor: "black", color:"black" }} />
              </div>
            <div className="signs">
            <span className="google"><BiLogoGoogle/></span>
            <span className="micro"><BsMicrosoft/></span>
            <span className="fb"><FaFacebookSquare/></span>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
