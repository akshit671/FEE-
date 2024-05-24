import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../src/login.css"
const Login=()=>{
  const navigate = useNavigate();

  const goToAboutPage = () => {
    navigate('/about');
  };
    return(
        <main>
  <section id="brand-image">
    <img src="default.png" alt="" />
    <div className="horizontal-line" />
  </section>
  <section id="sign-up-form">
    <div className="form-wrapper">
      <h1 className="login-header">To continue, log in to Spotify.</h1>
      
      <button className="btn fb-btn" onClick={goToAboutPage}>
        <i className="fab fa-facebook-f" />
        continue with Facebook
      </button>

     
        <button className="btn apple-btn" onClick={goToAboutPage}>
          <i className="fab fa-apple" />
          continue with apple
        </button>
      
      
        <button className="btn google-btn" onClick={goToAboutPage}>
          <i className="fab fa-google-plus-g" />
          continue with google
        </button>
     
     
        <button className="btn ph-btn" onClick={goToAboutPage}>continue with phone number</button>
     
      <div className="divider">
        <div />
        <p>or</p>
        <div />
      </div>
      <label> Email address or username. </label>
      <input type="text" placeholder="Email address or Username" />
      <label>Password.</label>
      <input type="password" placeholder="Password" />
      
        <button className="sign-up-btn" onClick={goToAboutPage}>Log In</button>
     
    </div>
  </section>
</main>

    )
}
export default Login