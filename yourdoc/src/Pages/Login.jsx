import React, { useState } from 'react';
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Center,
    Button,
    Box,
    Heading
  } from '@chakra-ui/react'
import {  Link } from 'react-router-dom';

function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("====>",email,password)
    setEmail('')
    setPassword('')
}
console.log(email,password)


return (
    <Box boxShadow='lg' w='50%' rounded='lg' padding='10' m='auto' mt='10'>
        <Heading as="h1">Login Form</Heading>
        <form onSubmit={handleSubmit}>

    <FormControl isRequired onSubmit={handleSubmit} >
        <FormLabel>Email address</FormLabel>
            <Input type='email' value={email} placeholder='Enter Email Address' onChange={(e)=>setEmail(e.target.value)} />
            <FormHelperText textAlign={'left'} >We'll never share your email. 
            </FormHelperText>
        <FormLabel>Password</FormLabel>
            <Input type='password' value={password} placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} />
            <Center>
            <Button variant="solid" mt={4} colorScheme='teal' type="submit" >
                LOGIN
            </Button>
            </Center>
            <FormHelperText> Not a member? <Link 
            to={`/signup`}>SignUp here</Link> </FormHelperText>
    </FormControl>
            </form>
    </Box>
)
}

export default Login