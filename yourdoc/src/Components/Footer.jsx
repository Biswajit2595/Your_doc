import { Box, Flex, Grid, HStack, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { FiFacebook,FiInstagram } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";

const Footer = () => {

return (
    <Stack w='95%' margin='auto' >
    <Grid templateColumns='repeat(4,1fr)' margin='auto'  bg="#666666" color='#fff' textAlign='left' w='100%' alignItems="flex-start" fontWeight={100} marginBottom={-2} >
<Box  m='10px' p='10px'  >
    <Text fontWeight={500}>Company</Text>
    <Text>About Us</Text>
    <Text>Careers</Text>
    <Text>Blog</Text>
    <Text>Partner With YourDoc</Text>
    <Text>Sell At YourDoc</Text>
    <Text>Order Machine</Text>
    <Text>HealthCare Products</Text>
    <Text>Lab Tests</Text>
    <Text>Find Nearest Store</Text>
    <Text>Surgeries</Text>
</Box>
<Box m='10px' p='10px' >
    <Text fontWeight={500}>Featured Categories</Text>
    <Text>Featured Categories</Text>
    <Text>Most Loved Brands</Text>
    <Text>Mega Clearance Sale</Text>
    <Text>Personal Care</Text>
    <Text>Healthcare Devices</Text>
    <Text>Health Food and Drinks</Text>
    <Text>Home Care</Text>
    <Text>Mother and Baby Care</Text>
    <Text>Diabetic Care</Text>
    <Text>Fitness Supplements</Text>
    <Text>Skin</Text>
</Box>
<Box m='10px' p='10px' >
    <Text fontWeight={500}>Policy Info</Text>
    <Text>Editorial Policy</Text>
    <Text>Privacy Policy</Text>
    <Text>Vulnerability Disclosure Policy</Text>
    <Text>Terms And Conditions</Text>
    <Text>Customer Support Policy</Text>
    <Text>Return Policy</Text>
</Box>
<Box m='10px' p='10px' >
    <Text fontWeight={500} >Follow Us </Text>
    <HStack mt='10px' spacing={3}>
        <FiFacebook />
        <FiInstagram />
        <TbBrandTelegram />
    </HStack>
</Box>
</Grid>
<Flex flex='1'display='flex' bg='#505050' color='#fff' mt='0px' padding='10px'>
    <Text>We accept</Text>
    <Image src='https://1000logos.net/wp-content/uploads/2017/03/MasterCard-Logo-1990.png' ml={2} mr={2} w={10} />
    <Image mr={2} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT031oEu5_UkIHW7hrpQruynx00PcnA0wTR_g&usqp=CAU' w={10} />
    <Image mr={2} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJHcqQP86L4b1JgEwiZYiNvNH3xHet1PI4yw&usqp=CAU" w={10} />
    <Image mr={2} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNGLhWlbRZAFc7XcZWGoaDSeHEkPmXKXys3A&usqp=CAU' w={10} />
</Flex>
</Stack>
)
}

export default Footer;