import { Box, Card, CardBody, CardFooter, Grid, Heading, Image, Spinner, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Doctors() {
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(false)

  const fetchData=()=>{
    setLoading(true)
    axios(`https://mock-server-app-tq8u.onrender.com/doctors`)
    .then(res=>{
      console.log(res.data);
      setData(res.data)
      setLoading(false)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    fetchData()
  },[])

  if(loading)
  {
    return <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  />
  }

  return (
    <Box w='95%' margin='auto'>
      <Heading>Our Doctors</Heading>
      <Grid gridTemplateColumns='repeat(3,1fr)' gap={4} >
      {
        data.map(item=>(
          <Card
          direction={{ base: 'column', sm: 'row' }}
          boxShadow='lg'
          overflow='hidden'
          variant='outline'
          key={item.id}
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={item.avatar}
    alt={item.first_name}
    />

  <Stack>
    <CardBody>
      <Heading size='md'>{item.first_name} {item.last_name}</Heading>

      <Text py='2'>
        Speciality: {item.speciality}
      </Text>
    </CardBody>

    <CardFooter>
    </CardFooter>
  </Stack>
</Card>
        ))
      }
      
      </Grid>
    </Box>
  )
}

export default Doctors;