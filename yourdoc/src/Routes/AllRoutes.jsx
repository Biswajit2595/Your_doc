import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Medicine from '../Pages/Medicine'
import Healthcare from '../Pages/Healthcare'
import HealthDevices from '../Pages/HealthDevices'
import LabTest from '../Pages/LabTest'
import Doctors from '../Pages/Doctors';
import Appointments from '../Pages/Appointments'
import Store from '../Pages/Store'
import Blogs from '../Pages/Blogs'

function AllRoutes() {



return (
    <div>
        <Routes>
            <Route path='/medicine' element={ <Medicine /> } />
            <Route path='/healthcare' element={ <Healthcare /> } />
            <Route path='/healthdevices' element={ <HealthDevices/> } />
            <Route path='/labtests' element={ <LabTest /> } />
            <Route path='/doctors' element={ <Doctors /> } />
            <Route path='/appointments' element={ <Appointments /> } />
            <Route path='/stores' element={ <Store /> } />
            <Route path='/blogs' element={ <Blogs /> } />
        </Routes>
    </div>
)
}

export default AllRoutes