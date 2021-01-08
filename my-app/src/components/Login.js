import React, { useState } from 'react';
import useLogin from '../apis/mutations/useLogin';

function Login() {
  const [ errorMessage, setErrorMessage ] = useState('')
  const [login, { error, isError }] = useLogin()


  async function loginUserHandler(event) {
    event.preventDefault();
    setErrorMessage('')
    const { target: { elements: { email, psw } } } = event
    login({
      email: email.value,
      password: psw.value
    })
  }

  console.log('ummm', login, error, isError)

  return (
    <div className="container">
      <form onSubmit={loginUserHandler}>
        <div className="row">
          <h1 style={{textAlign: 'center'}}>Login</h1>
          <div className="vl">
            <span className="vl-innertext">or</span>
          </div>
          <div className="col">
            <div className="hide-md-lg">
              <p>Or sign in manually:</p>
            </div>
            <hr />

            <label htmlFor="email"><b>Email</b></label>
            <input type="text" name="email" placeholder="Email" required />
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

            {errorMessage && <p>{errorMessage}</p>}

            <button type="submit" className="registerbtn">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;