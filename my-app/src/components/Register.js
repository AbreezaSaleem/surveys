import React from 'react';
import { useHistory } from "react-router-dom";
import { api } from '../utils';

function Register(props) {
  const history = useHistory();

  async function registerUser(event) {
    event.preventDefault();
    const { target: { elements: { email, psw, pswRepeat } } } = event
    if(pswRepeat.value !== psw.value) {
      alert("Please enter the same passwords")
      return
    }
    const token = await api('register', {
      method: "POST",
      body: JSON.stringify({
        email: email.value,
        password: psw.value
      })
    })
    localStorage.setItem('token', token);
    
    history.push("/");
  }

  return (
    <div>
      <form onSubmit={registerUser}>
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

          <label htmlFor="pswRepeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="pswRepeat" id="pswRepeat" required />
          <hr />

          <p>By creating an account you agree to our <br/><a target="_blank" href="https://www.bayt.com/en/pages/terms/">Terms & Conditions</a></p>
          <button type="submit" className="registerbtn">Register</button>
        </div>

        <div className="container signin">
          <p>Already have an account? <a href="/login">Sign in</a>.</p>
        </div>
      </form>
    </div>
  );
}

export default Register;