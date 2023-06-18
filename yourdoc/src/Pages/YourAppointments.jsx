import { Box, Button, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function YourAppointment() {

  const [data,setData]=useState([]);

  const fetchData=()=>{
    axios(`https://mock-server-app-tq8u.onrender.com/bookings`)
    .then(res=>{
      console.log(res?.data)
      setData(res?.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    fetchData()
  },[])

  const handleCancel=(id)=>{
    axios.delete(`https://mock-server-app-tq8u.onrender.com/bookings/${id}`)
    .then(()=> fetchData())
    .catch(err=>{
      console.log(err)
    })
  }


  return (
    <Box w='95%' m='auto' >
      {
        data.length>0? (
          <TableContainer>
            <Table variant='striped' colorScheme='teal'>
              <Thead>
                <Tr>
                  <Th>S.NO</Th>
                  <Th>Name</Th>
                  <Th>GENDER</Th>
                  <Th>AGE</Th>
                  <Th>DOCTOR</Th>
                  <Th>SPECIALITY</Th>
                  <Th>SYMPTOMS</Th>
                  <Th>DATE AND TIME</Th>
                  <Th>CANCEL</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  data?.map(data=>(
                    <Tr key={data.id}>
                      <Td>{data?.id}</Td>
                      <Td>{data?.name}</Td>
                      <Td>{data?.gender}</Td>
                      <Td>{data?.age}</Td>
                      <Td>{data?.doctor}</Td>
                      <Td>{data?.speciality}</Td>
                      <Td>{data?.symptoms}</Td>
                      <Td>{data?.dateandtime}</Td>
                      <Td><Button onClick={()=>handleCancel(data.id)} colorScheme='teal' >Cancel</Button></Td>
                    </Tr>
                  ))
                }
              </Tbody>
            </Table>
          </TableContainer>):(<Heading >No appointments  yet </Heading>)}
      
    </Box>
  )
}

export default YourAppointment;