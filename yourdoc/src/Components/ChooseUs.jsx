import { Box, HStack, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const ChooseUs = () => {
  return (
    <Box w='95%' m='auto' h='25%' alignItems='flex-start' textAlign='start'>
        <Heading fontSize='3xl' >Why Choose Us?</Heading>
        <Stack>
            <HStack>
                <Box >
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vero beatae dolorem repellendus, eveniet enim non saepe reiciendis eos eaque minus sint nemo quia ullam deserunt quo quaerat laudantium voluptatibus unde facere.</Text>
                        
                    <Text>Rem quis nemo quasi rerum, aspernatur a magni reprehenderit magnam corporis obcaecati modi, porro officiis unde ad cumque culpa, adipisci incidunt similique reiciendis voluptatibus animi quisquam voluptas suscipit minima.
                    </Text>
                </Box>
                {/* ========================================================================= */}
                <Box>
                <HStack>
                <Box>
                        <Image w='100%' src='https://images.squarespace-cdn.com/content/v1/61f2c83140d17a29f07d179d/a34e28fa-f610-402e-8b04-632df50077a1/Blue+logo+with+words.jpg' />
                        <Text fontSize='lg' fontWeight='bold' >
                            Door to Door Appointments
                        </Text>
                    </Box>
                    <Box>
                        <Image w='100%' src='https://www.dhani.com/services/wp-content/uploads/2020/10/xhome-hero-mobile.png.pagespeed.ic.iPj_0lkd3C.png' />
                        <Text fontSize='lg' fontWeight='bold' >
                            Online Consultations
                        </Text>
                    </Box>
                    <Box>
                        <Image 
                        w='100%' src='https://thumbs.dreamstime.com/b/book-your-medical-appointment-online-190595834.jpg' />
                        <Text fontSize='lg' fontWeight='bold' >
                            Book Your appointments Online
                        </Text>
                    </Box>
                </HStack> 
                </Box>
                {/* ====================================================================== */}
            </HStack>
        </Stack>
    </Box>
  )
}

export default ChooseUs