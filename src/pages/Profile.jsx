import{useState, useEffect} from 'react'
import { getAuth } from 'firebase/auth';
import { useNavigate , Link } from 'react-router-dom';

const Profile = () => {

  const navigate = useNavigate

  const auth = getAuth()

  const [formData, setFormData] = useState({
    name : auth.currentUser.displayName,
    email: auth.currentUser.email,
  })

  const logOut =() =>  {

    auth.signOut()
    navigate('/')
  }






   return <div className='profile'>

       <header className='profileHeader'> 
       <p className='pageHeader'>My Profile </p>
       <button type='button' className='logOut' onClick={logOut}>LogOut </button>
       
              </header>


   </div>
     
}

 
export default Profile;