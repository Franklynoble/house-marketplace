import { useState } from "react";
import {getAuth, createUserWithEmailAndPassword, updateProfile,} from 'firebase/auth'
import {db} from '../firebase.config'
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
//import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg';

import visibilityIcon from '../assets/svg/visibilityIcon.svg';
import { async } from "@firebase/util";


function SignUp () {
   //set the states
   const [showPassword, setShowPassword] = useState (false);

   const [formData, setFormData] = useState( {
    name : '',  
    email: '',
      password : '',

   });
   const {name, email, password} = formData

  const navigate = useNavigate()

   const onChange = (e) => {

      setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value, // get the property to be change  using  the id
      }))
 }


const onSubmit = async (e) => {

 e.preventDefault()
 try { 
  const auth = getAuth()

  const userCredential = await createUserWithEmailAndPassword (
    auth,
    email,
    password
  )

  const user = userCredential.user

  updateProfile(auth.currentUser, {
    displayName: name,
  })

  const formDataCopy = {...formData}  // create a  copy of the the form data
  delete formDataCopy.password      // remove the  password from the Object

  formDataCopy.timestamp = serverTimestamp()   // add time stamp


  await setDoc(doc(db, 'users', user.uid), formDataCopy)
 
  navigate('/')
}catch(err) {
   console.log()
  }
}

return ( 
  <>

<div className="pageContainer">
      <header>
            <p className="pageHeader"> Welcome Back!</p>
      </header>
      <main>
            <form onSubmit={onSubmit}>


            <input type='text' 
         className="nameInput" 
        placeholder="Name"
        id="name"
       value={name}
       onChange={onChange} />
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
                              Sign up
                          </p>
                          <button className="signInButton">
                              <ArrowRightIcon fill="#ffffff" width='34px' height='34px'/>                          </button>
            </form>
      </main>
    {/* Google Auth */}
     <Link to ='/sign-in' className="registerLink">
       Back to Sign in
     </Link>
</div>
</>

      );
}
 
export default SignUp;