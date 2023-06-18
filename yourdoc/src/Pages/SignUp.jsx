import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Center,
  Button,
  Box,
  Heading,
  useBreakpointValue
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: 'post',
      url: `https://mock-server-app-tq8u.onrender.com/users`,
      data: user,
    })
      .then(() => {
        alert('Sign up Successful');
        navigate('/login');
      })
      .catch(err => {
        console.log(err);
      });

    setUser({
      username: '',
      email: '',
      password: ''
    });
  };

  const boxWidth = useBreakpointValue({ base: '100%', md: '50%' });

  const { email, password, username } = user;

  return (
    <Box boxShadow='lg' w={boxWidth} rounded='lg' padding='10' m='auto' mt='10'>
      <Heading as="h3" fontSize='2xl' mb={2}>SignUp</Heading>

      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>UserName</FormLabel>
          <Input
            type='text'
            value={username}
            placeholder='Enter User Name'
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <FormLabel>Email address</FormLabel>
          <Input
            type='email'
            value={email}
            placeholder='Enter Email Address'
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <FormHelperText textAlign={'left'} >We'll never share your email.</FormHelperText>
          <FormLabel>Password</FormLabel>
          <Input
            type='password'
            value={password}
            placeholder='Enter Password'
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <Center>
            <Button variant="solid" mt={4} colorScheme='teal' type="submit">
              SIGN UP
            </Button>
          </Center>
          <FormHelperText>
            Already a member? <Link to={`/login`}>Login here</Link>
          </FormHelperText>
        </FormControl>
      </form>
    </Box>
  );
}

export default SignUp;
