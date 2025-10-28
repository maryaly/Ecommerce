import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { login, signup } from '../Firebase'

const LoginSignup = () => {

  const [signState, setSignState] = useState("Sign In")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const user_auth = async (event) => {
    event.preventDefault();
    if (signState === "Sign In") {
      await login(email, password)
    } else {
      await signup(name, email, password)
    }
  }


  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{signState}</h1>
        <form>
          <div className="loginsignup-fields">
            {signState === "Sign Up" && (
              <>
                <input
                  value={name}
                  onChange={(e) => { setName(e.target.value) }}
                  type="text"
                  placeholder='Your Name'
                />
              </>
            )}
            <input
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              type="email"
              placeholder='Email Address' />
            <input
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
              type="password"
              placeholder='Password' />
          </div>
          <button onClick={user_auth} type='submit'>{signState}</button>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p className='loginsignup-login'>
              New to SHOPPER?{" "}
              <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p className='loginsignup-login'>
              Already have an account?{" "}
              <span onClick={() => setSignState("Sign In")}>Login here</span>
            </p>
          )}
        </div>
      </div>

    </div>
  )
}

export default LoginSignup
