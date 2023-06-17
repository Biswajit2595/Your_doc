import { Box, Grid, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

const Appointment = () => {


return (
    <Box w='95%' m='auto' textAlign='start' >
        <Heading fontSize='xl'>Book Appointments</Heading>
        <Link to='/doctors' >
        <Grid templateColumns='repeat(4,1fr)' margin='10px'  textAlign='left' w='100%' alignItems="flex-start" fontWeight={100} gap={6}>
            <Box>
                <Image w='250px' h='200px' src='https://png.pngtree.com/png-vector/20220731/ourmid/pngtree-cardiologist-online-consultation-concept-vector-png-image_6077350.png' />
                <Text fontSize='lg' fontWeight='500' >Cardiology</Text>
            </Box>
            <Box>
                <Image w='250px' h='200px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1SHWyeypmkA3dLI_5jGWv9nQBZe1_mt3QUA&usqp=CAU' />
                <Text fontSize='lg' fontWeight='500' >Neurology</Text>
            </Box>
            <Box>
                <Image w='250px' h='200px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT_bF9EOtKpsB7IISyLfD6YahBn9ssUtzT0A&usqp=CAU' />
                <Text fontSize='lg' fontWeight='500' >Urology</Text>
            </Box>
            <Box>
                <Image w='250px' h='200px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoVq6QP-C2Nb5EUbVXfJkfCxwNbREeXr094A&usqp=CAU' />
                <Text fontSize='lg' fontWeight='500' >Oncology</Text>
            </Box>
        </Grid>
        </Link>
    </Box>
)
}

export default Appointment;