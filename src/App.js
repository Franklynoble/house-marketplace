
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';

  import { ToastContainer, } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
 
import Navbar from './components/navbar';
import Explore from './pages/Explore';
import Offers from './pages/Offers';
import SignUp from './pages/SignUp';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';


function App() {
  return (

    
    <><Router>
      <Routes>

        <Route path='/' element={<Explore />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
      <Navbar />
    </Router>
     
    <ToastContainer />
    </>
    
    
    
 )
 
 
 
 
 
 
}
export default App;
