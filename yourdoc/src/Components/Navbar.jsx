import React from 'react';
import logo from '../Components/yourdoc.svg'
import { NavLink } from 'react-router-dom';
import {  HStack, Image, VStack,Flex,Text, Spacer, Box } from '@chakra-ui/react';

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
return (
    <VStack >
        <Flex alignItems="center" bg='pink.100' w='95%'>
        <Box  justify='' >
            <Image src={logo} w='150px' h='50px' alt='logo' />
            </Box>
            <Spacer/>
            <Box>
                <HStack>
                <Text>Download |</Text>
                <Text>Hello username |</Text>
                <Text>Offers |</Text>
                <Text>cart</Text>
                </HStack>
        </Box>
        </Flex>

{/* /========================================================== */}

        <HStack boxShadow='base' w='95%' justify='space-between' bg='green.100' >
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