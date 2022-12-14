import { useState } from "react";
import {Link} from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import { async } from "@firebase/util";


const ForgotPassword= () => {
const [email, setEmail] = useState('')

const onChange =( e) =>  setEmail(e.target.value)


const onSubmit =  async e =>  {

    e.preventDefault()

    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth,email)

      toast.success('email sent, please check your mail')

    }catch (err){
      toast.error('error occured,could not send reset email')
    }
}



     return ( 
    <div className="pageContainer">
     <header>
      <p className="pageHeader">Forgot Password </p>
     </header>

     <main>
      <form onSubmit={onSubmit}>
        <  input type='email'
        className='emailInput'
         id='email'
          value={email} 
          placeholder='Email' 
          onChange={onChange}
          />

          <Link className="forgotPasswordLink" to='/sign-in'/>
          <div className="signInText">Send Reset Link</div>
           <button className="signInButton">
            <ArrowRightIcon fill='#ffffff' width='34px'
            height='34px' />
           </button>

      </form>


     </main>
   
    </div>

      );
}
 
export default ForgotPassword;