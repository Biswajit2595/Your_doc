import React from 'react';
import logo from '../Components/yourdoc.svg'
import { NavLink } from 'react-router-dom';

const link=[
    { to:'/medicine',title:'Medicine' },
    { to:'/healthcare',title:'Healthcare' },
    { to:'/healtdevices',title:'Health Devices' },
    { to:'/labtests',title:'Lab Tests' },
    { to:'/doctors',title:'Doctors' },
    { to:'/appointments',title:'Book Appointments' },
    { to:'/stores', title:'Stored Health'  },
    { to:'/blogs', title:'Blogs' }
]


function Navbar() {
return (
    <div>
        <div style={{ display:'flex', justifyContent:'space-between',padding:'10px'}} >
            <img src={logo} width='150px' alt='logo' />
            <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between' }}>
                <h4> Download | </h4>
                <h4> Hello username | </h4>
                <h4> Offers |</h4>
                <h4>cart</h4>
            </div>
        </div>
        <div style={{ display:'flex',alignItems:'center', justifyContent:'space-between',width:'90%',margin:'auto', padding:'10px' }} >
            {
                link.map(link=>(
                    <NavLink key={link.to} >{link.title}</NavLink>
                ))
            }
        </div>
    </div>
)}



export default Navbar