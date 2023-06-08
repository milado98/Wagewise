import {useState, useEffect} from 'react'
import axios from '../api/axios';
import './Login.css'
import background from '../image/withlogo.png'
import { CiFacebook } from "react-icons/ci";
import {FcGoogle} from 'react-icons/fc'
import {TiSocialTwitterCircular} from 'react-icons/ti'
import { AiOutlineEyeInvisible, AiOutlineEye } from 
"react-icons/ai";
import { Link } from 'react-router-dom';
import logo from '../image/logo.png'
import { ethers } from 'ethers';


async function requestAccount() {
  if(window.ethereum) {
    console.log('detected');

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
    } catch (error) {
      console.log('Error Connecting....')
    }
  } else {
    console.log('MetaMask not detected')
  }
}

async function connectWallet() {
  if(typeof window.ethereum !== 'undefined') {
    await requestAccount();

    // const provider = new ethers.providers.Web3Provider(window.ethereum);
  }
}

const Login = () => {
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdType, setPwdType] = useState('password');
  const [pwdFocus, setPwdFocus] = useState(false);

    const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/g;
   
    useEffect(()=>{
     const result = PWD_REGEX.test(pwd);
     setValidPwd(result)

    }, [pwd])

     const toggle_btn = () => {
       if (pwdType === "password") {
         setPwdType("text");
       } else {
         setPwdType("password");
       }
     };

  
  const handleSubmit =async(e)=>{
    e.preventDefault()
    console.log(email);
    console.log(pwd);
  }
  
 
  return (
    <div className="login">
      <section>
        <img className="login-img" src={background} alt="" />
      </section>
      <section className="login-main">
        <div className="profile-top">
          <img className="login-logo" src={logo} alt="logo" />
          <div className="line-break"></div>
        </div>
        <div>
          <h1>Sign in</h1>
          <p>Enter your E-mail & password</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-label" htmlFor="email">
            E-mail
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="example@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label className="login-label" htmlFor="password">
            Password
          </label>
          <input
            type={pwdType}
            name="password"
            required
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
            // aria-invalid={validPwd ? "false" : "true"}
          />
          <div className="btn_eye">
            <i onClick={toggle_btn} className="toggle_btn">
              {pwdType === "password" ? (
                <AiOutlineEye />
              ) : (
                <AiOutlineEyeInvisible />
              )}
            </i>
          </div>
          <p className={!validPwd && pwdFocus ? "pwd_para" : "offscreen"}>
            6 to 24 characters. <br />
            Must include uppercase and lowercase letters, a number and a special
            character (@$!%*#?&).
            <br />
          </p>
          <div className="text">
            <input type="checkbox" name="" id="check" />
            <label htmlFor="check" className="login-check">
              Remember me <span className="check-span">Forgot Password</span>
            </label>
          </div>
          <button
            type="submit"
            className={!validPwd ? "invalid_btn" : "login-btn"}
            disabled={!validPwd ? true : false}
            onClick={requestAccount}
          >
            SIGN IN
          </button>
        </form>
        <p className="login-para">
          Don't have an account? <span>Sign up Now</span>
        </p>
        <div>
          <div className="line"></div> or <div className="line"></div>
        </div>
        <p className="login-para">Continue with social media</p>
        <div>
          <Link to="https://www.facebook.com" target="_blank">
            <CiFacebook className="icon" />
          </Link>
          <Link to="https://www.google.com" target="_blank">
            <FcGoogle className="login-icon" />
          </Link>
          <Link to="https://www.twitter.com" target="_blank">
            <TiSocialTwitterCircular className="icon" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Login