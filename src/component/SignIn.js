import React from 'react'
import './SignIn.css'
import logo from '../image/logo.png'
import { useNavigate } from 'react-router-dom'


const SignIn = () => {
  const navigate = useNavigate()
  
  const navigateToLogin = () => {
    navigate("/login");
  };

  const handleSubmit = () => {};
  return (
    <section className="signIn">
      <img src={logo} alt="logo" className="logo" />
      <form className="signIn-form" onSubmit={handleSubmit}>
        <label htmlFor="name">An Automated Payroll System</label>
        <input
          className="signIn-btn"
          type="button"
          id="name"
          value="CREATE AN ACCOUNT"
        />
        <button className="signIn-btn" id="name" onClick={navigateToLogin}>
          SIGN IN
        </button>
      </form>
    </section>
  );
}

export default SignIn