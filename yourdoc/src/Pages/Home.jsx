import React from 'react';
import { Box } from '@chakra-ui/react';
import Footer from '../Components/Footer';
import ChooseUs from '../Components/ChooseUs';
import Appointment from '../Components/Appointment';
import Advert from '../Components/Advert';

function Home() {
return (
    <Box>
        <Box backgroundImage="url('https://img.freepik.com/free-vector/online-doctor-consultation-illustration_88138-414.jpg?w=1060&t=st=1687013053~exp=1687013653~hmac=3fcb89661a5792d68721f3f298d8816420b2474809c2d92190e7aa0da968b60d')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"

        height='500px'
        >
        </Box>
        <Appointment />
        <Advert />
        <ChooseUs />
        <Footer />
    </Box>
)
}

export default Home;