import React, { useContext } from 'react';
import logo from '../Components/yourdoc.svg'
import { Link, NavLink } from 'react-router-dom';
import {  HStack, Image, VStack,Flex,Text, Spacer, Box } from '@chakra-ui/react';
import { AuthContext } from '../Context/AuthContext';

const link=[
    { to:'/medicine',title:'Medicine' },
    { to:'/healthcare',title:'Healthcare' },
    { to:'/healthdevices',title:'Health Devices' },
    { to:'/labtests',title:'Lab Tests' },
    { to:'/doctors',title:'Doctors' },
    { to:'/appointments',title:'Book Appointments' },
    { to:'/stores', title:'Stored Health'  },
    { to:'/blogs', title:'Blogs' }
]


function Navbar() {
    const { authState }=useContext(AuthContext)
    const { isAuth, username }=authState
    console.log(authState)
return (
    <VStack w='100%' m='auto' >
        <Flex alignItems="center" bg='pink.100' rounded='sm' w='95%'>
        <Box justify='center' padding='2px' >
            <Image src={logo}  marginLeft='10px' w='150px' h='50px' alt='logo' />
            </Box>
            <Spacer/>
            <Box justify='center' padding='2px' paddingRight='10px' >
                <HStack>
                <Text>Download |</Text>
                { 
                isAuth?(<Text> Hello {username}! |</Text>):(<Text><Link to='/login' >Login/SignUp</Link></Text>)
                }

                <Text>| cart</Text>
                </HStack>
        </Box>
        </Flex>
        <HStack boxShadow='base' rounded='sm' w='95%' justify='space-between' bg='green.100' >
                        {
                link.map((link)=>(
                    <NavLink 
                    style={{textDecoration:'none',fontWeight:'bolder'}}
                    to={link.to}
                    key={link.to}
                    >{link.title}</NavLink>
                ))
            }
        </HStack>
    </VStack>
)}



export default Navbar