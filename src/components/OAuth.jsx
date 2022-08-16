import React from 'react';
import{useLocation, useNavigate} from 'react-router-dom'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import{doc, setDoc, getDoc} from 'firebase/firestore'
import{db} from '../firebase.config'
import {toast} from 'react-toastify'
import googleIcon from '../assets/svg/googleIcon.svg'





const OAuth = () => {

const navigate = useNavigate()
const location = useLocation()



//Google Auth function
const onGoogleClick = async() => {

     try {
          const auth = getAuth()
          const provider = new GoogleAuthProvider()

          const result = await signInWithPopup(auth, provider)

          const user = result.user


          const docRef = doc(db, 'users', user.uid)

          const docSnap = await getDoc(docRef) // ge this from the database


          //if user does not exist, create  new user
          if(!docSnap.exists()) {
    //  create  new  user from the  db
               await setDoc(doc(db,'users', user.uid), {
                    name: user.displayName,
                    email: user.email
               })

          }
          navigate('/')

     }catch (error) {
          toast.error('could not authorize with Google ! ')

     }

}
   
     return (
          <div className='socialLogin'>
               <p>Sign {location.pathname === '/sign-up' ? 'up' : 'in'}
               with </p>
               <button className="socialIconDiv">
                    <img className='socialIconImg' src={googleIcon} alt='google' onClick={onGoogleClick}></img>
               </button>
               
          </div>
     );
}

export default OAuth;
