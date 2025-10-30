import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { login, signup } from '../Firebase'
import { showToast } from '../utils/toast'
import { isValidEmail } from '../utils/validators'

const LoginSignup = () => {

  const [signState, setSignState] = useState("Sign In")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const validateInputs = () => {
    let valid = true

    if (signState === "Sign Up" && !name.trim()) {
      setNameError(true)
      showToast("Please enter your name ❗", "error")
      valid = false
      setTimeout(() => setNameError(false), 3000)
      return
    }

    if (!email.trim()) {
      setEmailError(true);
      showToast("Please enter your email address ❗", "error")
      valid = false
      setTimeout(() => setEmailError(false), 3000);
      return
    } else if (!isValidEmail(email)) {
      setEmailError(true);
      showToast("Please enter a valid email address ⚠️", "error");
      valid = false
      setTimeout(() => setEmailError(false), 3000);
      return
    }

    if (!password.trim()) {
      setPasswordError(true)
      showToast("Please enter your password ❗", "error")
      valid = false
      setTimeout(() => setPasswordError(false), 3000)
      return
    }

    return valid
  };

  const user_auth = async (event) => {
    event.preventDefault();
    if (!validateInputs()) return

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
                <input className={`name-input ${nameError ? 'error-border' : ''}`}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                    if (nameError) {
                      setNameError(false)
                    }
                  }}
                  type="text"
                  placeholder='Your Name'
                />
              </>
            )}
            <input className={`email-input ${emailError ? 'error-border' : ''}`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (emailError) {
                  setEmailError(false)
                }
              }}
              type="email"
              placeholder='Email Address' />
            <input className={`password-input ${passwordError ? 'error-border' : ''}`}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                if (passwordError) {
                  setPasswordError(false)
                }
              }}
              type="password"
              placeholder='Password' />
          </div>
          <button onClick={async (e) => {
            await user_auth(e)
            validateInputs()
          }} type='submit'>{signState}</button>
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
