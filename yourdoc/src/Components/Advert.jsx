import { Box, Button, Grid, HStack, Heading, Image, Input, Text, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

const Advert = () => {
  const imageWidth = useBreakpointValue({ base: '100%', md: '50%' });
  const boxWidth = useBreakpointValue({ base: '100%', md: '70%' });

  return (
    <Box>
      <HStack>
        <Grid gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} p='10px'>
          <Box>
            <Image src='https://static.vecteezy.com/system/resources/previews/008/919/318/non_2x/online-medical-consultation-support-online-doctor-healthcare-services-vector.jpg' w={imageWidth} />
          </Box>
          <Box w={boxWidth} m='auto' textAlign='start' p='30px'>
            <Heading m='5px'>Download The YourDoc App</Heading>
            <Text m='5px'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt praesentium optio distinctio at magni a!</Text>
            <ul>
              <li m='5px'>Book Your Appointment Online</li>
              <li m='5px'>Online Consultation</li>
              <li m='5px'>Door to door Appointments</li>
            </ul>
            <Heading m='5px' fontSize='lg'>Get The App Download Link On Your Mobile</Heading>
            <HStack mt='15px'>
              <Input focusBorderColor='teal' type='number' />
              <Button colorScheme='teal'>Send</Button>
            </HStack>
            <Image mt='5px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-1WjhOE97zEew0wQH-9say6nSlIO6Fk2dQ&usqp=CAU' />
          </Box>
        </Grid>
      </HStack>
    </Box>
  );
};

export default Advert;
