import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const { authState }=useContext(AuthContext);
    console.log(authState.isAuth)

    if(!authState.isAuth){
        console.log(authState.isAuth)
        return <Navigate to='/login' />
    }

    return children;
}

export default PrivateRoutes;