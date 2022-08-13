import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg';

import visibilityIcon from '../assets/svg/visibilityIcon.svg';

const Signin = () => {
   //set the states
   const [showPassword, setShowPassword] = useState (false);

   const [formData, setFormData] = useState( {
      email: '',
      password : ''
   });
   const {email, password} = formData;

   const onChange = (e) => {

      setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value, // get the property to be change  using  the id
      }))
 }


     return ( 
  <>

<div className="pageContainer">
      <header>
            <p className="pageHeader"> Welcome Back!</p>
      </header>
      <main>
            <form>
                  <input type='email' 
                  className="emailInput" 
                  placeholder="email"
                   id="email"
                   value={email}
                   onChange={onChange} />

                  <div className="passwordInputDiv">

                        <input 
                        type={showPassword ? 'text' : 'password'}
                        className='passwordInput'
                        placeholder="Password"
                        id='password'
                        value={password}
                        onChange ={onChange}
                        
                           />
                           <img src={visibilityIcon} alt="show password" className="showPassword" onClick={ () => {
                              setShowPassword(prevState => !prevState)
                           }} />
                        
                        </div> 
                        <Link  to='/forgot-password'
                        
                         className="forgotPasswordLink">
                         Forgot Password 
                         </Link>

                         <div className="sigInBar"></div>
                          <p className="signInText">
                              Sign In
                          </p>
                          <button className="signInButton">
                              <ArrowRightIcon fill="#ffffff" width='34px' height='34px'/>                          </button>
            </form>
      </main>
    {/* Google Auth */}
     <Link to ='/sign-up' className="registerLink">
       Sign Up Instead
     </Link>
</div>
</>

      );
}
 
export default Signin;