import {color,clientLogo,manufacturerLogo} from '../comp.properties.js';
import login from './login.module.css';

const BasicLogin = (props) => {
  const loginAction = () => {
    console.log("----------------loginAction-----------------")
    props.onLoginButtonClicked();
  }
    
    return (
      <div className={login.bodyDiv}>
        <div className={login.centeredSquare}>
          <div className={login.leftHalf +  " " + color.basicLoginLeftBackGround}>
            <div className={login.innerSquareLeft} >
              
              <img className={login.logo} src={clientLogo} alt="Your Image"/>
              <div className={login.heading1}>Sri Lanka Railways</div>
              <div className={login.heading2}>Inventory Management System</div>
                <div className={login.footer}>© 2024 | <img className={login.logo2} src={manufacturerLogo} alt="Your Image"/> Software Technologies
                    (Pvt) Ltd</div>
            </div>  
          </div>
        <div className={login.rightHalf}>
          <div class={login.innerSquareRight}>
            <div>
              <div className={login.heading1Right}>Login</div>
              <div className={login.heading2Right}>UserName</div>
              <input className={login.input} type="text" id="fname" name="fname" /><br /><br />
              <div className={login.heading2Right}>Password</div>
              <input className={login.input} type="text" id="lname" name="lname" /><br /><br />
              <input onClick={loginAction} type="submit" class={login.submitButton} value="Login" />
            </div>
          </div>
        </div>
        </div>
      </div>

    )
  };
  export default BasicLogin;