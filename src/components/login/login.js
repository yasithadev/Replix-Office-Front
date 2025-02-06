import {loginColor,clientLogo,manufacturerLogo} from '../comp.properties.js';
import login from './login.module.css';
import { useRef, useState } from "react";
import InvalidCredentialException from './InvalidCredentialException';

const BasicLogin = (props) => {
  const username = useRef();
  const password = useRef();
  const [validationMessage,setValidationMessage] = useState();
  const loginAction = async() => {
    console.log("----------------loginAction-----------------")
    try{
      await props.onLoginButtonClicked(username.current.value,password.current.value);
    }
    catch(e){
      if (e instanceof InvalidCredentialException) {
        console.log("----------------Invalid Username or Password-----------------");
        setValidationMessage('Invalid Username or Password');
      }
    }
  }
  document.addEventListener("keypress", loginAction, false);
    return (
      <div className={login.bodyDiv}>
        <div className={login.centeredSquare}>
          <div className={login.leftHalf +  " " + loginColor.leftHalf}>
            <div className={login.innerSquareLeft} >
              
              <img className={login.logo} src={clientLogo} alt="Your Image"/>
              <div className={login.heading1}>Sri Lanka Railways</div>
              <div className={login.heading2}>Inventory&nbsp;Management&nbsp;System</div>
                <div className={login.footer}>© 2024 | <img className={login.logo2} src={manufacturerLogo} alt="Your Image"/> Software Technologies
                    (Pvt) Ltd</div>
            </div>  
          </div>
        <div className={login.rightHalf}>
          <div class={login.innerSquareRight}>
            <div>
              <div className={login.heading1Right}>Sign in</div>
              <div className={login.heading2Right}>Email</div>
              <input className={login.inputField} type="text" ref={username} id="fname" name="fname" /><br /><br />
              <div className={login.heading2Right}>Password</div>
              <input className={login.inputField} type="password" ref={password} id="lname" name="lname" />
              <div className={login.showPassword}>show password</div>
              <div className={login.validation +  " " + loginColor.validation}>{validationMessage}</div>
              <input onClick={loginAction} type="submit" class={login.submitButton+  " " + loginColor.submitButton} value="Sign in" />
              <a className={login.link +  " " + loginColor.link}>Forgot password</a>
            </div>
          </div>
        </div>
        </div>
      </div>

    )
  };
  export default BasicLogin;