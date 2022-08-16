import React from 'react';
import {Navigate, Outlet} from 'react-router-dom'
import {useAuthStatus} from '../hooks/useAuthStatus'
import Spinner from './Spinner';

const PrivateRoute = () => {

    const {loggedIn, checkingStatus} = useAuthStatus() // destructuring values from authstatus

    if(checkingStatus) {
     return  <Spinner />
    }
     return loggedIn ? <Outlet /> : <Navigate to ='/sign-in' />
}
        export default PrivateRoute;
