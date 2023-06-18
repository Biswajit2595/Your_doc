import React, { useContext } from 'react';
import logo from '../Components/yourdoc.svg'
import { Link, NavLink } from 'react-router-dom';
import { HStack, Image, VStack, Flex, Text, Spacer, Box, useBreakpointValue } from '@chakra-ui/react';
import { AuthContext } from '../Context/AuthContext';

const link = [
  { to: '/yourappointment', title: 'Your Appointments' },
  { to:'', title: 'Healthcare' },
  { to: '/doctors', title: 'Doctors' },
  { to: '/appointments', title: 'Book Appointments' },
  { to: '/about', title: 'About Us' }
];

function Navbar() {
  const { authState, logoutUser } = useContext(AuthContext);
  const { isAuth, username } = authState;
  
  const logoWidth = useBreakpointValue({ base: '120px', md: '150px' });
  
  return (
    <VStack w='100%' m='auto'>
      <Flex alignItems="center" bg='pink.100' rounded='sm' w='95%'>
        <Box justify='center' padding='2px'>
          <Link to='/'>
            <Image src={logo} marginLeft='10px' w={logoWidth} h='50px' alt='logo' />
          </Link>
        </Box>
        <Spacer />
        <Box justify='center' padding='2px' paddingRight='10px'>
          <HStack>
            <Text>Download |</Text>
            {isAuth ? (
              <Text> Hello {username}! |</Text>
            ) : (
              <Text><Link to='/login'>Login/SignUp</Link></Text>
            )}
            {isAuth && (
              <button onClick={logoutUser}>Logout</button>
            )}
          </HStack>
        </Box>
      </Flex>
      <HStack boxShadow='base' p='10px' rounded='sm' w='95%' justify='space-between' bg='green.100'>
        {link.map((link) => (
          <NavLink
            style={{ textDecoration: 'none', fontWeight: 'bolder' }}
            to={link.to}
            key={link.to}
          >
            {link.title}
          </NavLink>
        ))}
      </HStack>
    </VStack>
  );
}

export default Navbar;
