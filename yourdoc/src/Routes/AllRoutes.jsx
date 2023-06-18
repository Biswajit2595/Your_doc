import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Doctors from '../Pages/Doctors';
import Appointments from '../Pages/Appointments'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import YourAppointment from '../Pages/YourAppointments'
import PrivateRoutes from './PrivateRoute';
import AboutUs from '../Pages/About';

function AllRoutes() {

return (
    <div>
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/signup' element={ <SignUp /> } />
            <Route path='/yourappointment' element={ 
            <PrivateRoutes>
                <YourAppointment />
            </PrivateRoutes>
            } />
            {/* <Route path='/healthcare' element={ <Healthcare /> } /> */}
            <Route path='/doctors' element={ <Doctors /> } />
            <Route path='/appointments' element={ 
            <PrivateRoutes>
                <Appointments />
            </PrivateRoutes>
            } />
            <Route path='/about' element={ <AboutUs /> } />
        </Routes>
    </div>
)
}

export default AllRoutes