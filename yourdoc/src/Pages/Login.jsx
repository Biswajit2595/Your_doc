import React, { useContext, useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Center,
  Button,
  Box,
  Heading,
  Alert,
  AlertIcon,
  AlertDescription,
  useBreakpointValue
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';

function Login() {
  const { loginUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios('https://mock-server-app-tq8u.onrender.com/users')
      .then((res) => {
        let data = res.data;
        data = data.find((ele) => {
          return ele.email === email && ele.password === password;
        });
        console.log(data);

        if (data) {
          loginUser(data.username);
          alert(`login successful ${data.username}`);
          navigate('/');
        } else {
          setLoginError(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setEmail('');
    setPassword('');
  };

  const boxWidth = useBreakpointValue({ base: '100%', md: '50%' });

  return (
    <Box boxShadow="lg" w={boxWidth} rounded="lg" padding="10" m="auto" mt="10">
      <Heading as="h1">Login Form</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired onSubmit={handleSubmit}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            placeholder="Enter Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormHelperText textAlign={'left'}>
            We'll never share your email.
          </FormHelperText>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Center>
            <Button variant="solid" mt={4} colorScheme="teal" type="submit">
              LOGIN
            </Button>
          </Center>
          {loginError && (
            <Alert status="error">
              <AlertIcon />
              <AlertDescription>
                User is not a member of YOURDOC! Please Sign Up
              </AlertDescription>
            </Alert>
          )}
          <FormHelperText>
            Not a member? <Link to={`/signup`}>SignUp here</Link>{' '}
          </FormHelperText>
        </FormControl>
      </form>
    </Box>
  );
}

export default Login;
