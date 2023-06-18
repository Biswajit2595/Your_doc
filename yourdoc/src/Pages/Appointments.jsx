import { Box, Button, FormControl, FormLabel, Heading, Input, Select } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';

function Appointments() {
  const { authState }=useContext(AuthContext)

  const [data,setData]=useState({
    name:authState.username,
    gender:'',
    age:'',
    doctor:'',
    speciality:'',
    symptoms:'',
    dateandtime:''
  })
  // const [appointment,setAppointments]=useState([])


  const handleSubmit=(e)=>{
    e.preventDefault()
    
    axios({
      method:'post',
      url:'https://mock-server-app-tq8u.onrender.com/bookings',
      data:data
    })

    setData({
      name:authState.username,
    gender:'',
    age:'',
    doctor:'',
    speciality:'',
    symptoms:'',
    dateandtime:''
    })
  }

  const { name, gender, age, doctor, symptoms, speciality, dateandtime }=data;
  return (
    <Box  >
      <Heading>Appointments</Heading>
      <Box w='50%' margin='auto' boxShadow='md' p='15px' >
        <form onSubmit={handleSubmit} >
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input type='text' value={name} placeholder='Patients Name' onChange={(e)=>setData({...data,name:e.target.value})} />
            <FormLabel>Gender</FormLabel>
            <Select value={gender} onChange={(e)=>setData({...data,gender:e.target.value})} >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
            <FormLabel>Age</FormLabel>
            <Input type='number' value={age} placeholder='Enter age' onChange={(e)=>setData({...data,age:+e.target.value})}/>
            <FormLabel>Speciality</FormLabel>
            <Select value={speciality} onChange={(e)=>setData({...data,speciality:e.target.value})} >
              <option value="">Select Speciality</option>
              <option value="Neurology">Neurology</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Urology">Urology</option>
              <option value="Oncology">Oncology</option>
            </Select>
            <FormLabel>Doctor</FormLabel>
            <Select value={doctor} onChange={(e)=>setData({...data,doctor:e.target.value})}> 
              <option value="">Select Doctor</option>
              <option value="George Bluth">George Bluth (Cardiology)</option>
              <option value="Michael Lawson">Michael Lawson (Cardiology)</option>
              <option value="Lindsay Ferguson">Lindsay Ferguson (Cardiology)</option>
              <option value="Rachel Howell">Rachel Howell (Cardiology)</option>
              <option value="Janet Weaver">Janet Weaver (Neurology)</option>
              <option value="Tracey Ramos">Tracey Ramos (Neurology)</option>
              <option value="Tobias Funke">Tobias Funke (Neurology)</option>
              <option value="Eve Holt">Eve Holt (Oncology)</option> 
              <option value="Charles Morris">Charles Morris (Oncology)</option> 
              <option value=">Byron Fields">Byron Fields (Oncology)</option> 
              <option value="George Edwards">George Edwards (Urology)</option> 
              <option value="Emma Wong">Emma Wong (Urology)</option> 
            </Select>
            <FormLabel>Symptoms</FormLabel>
            <Input value={symptoms} placeholder='Symptoms' type='text' onChange={(e)=>setData({...data,symptoms:e.target.value})}/>
            <FormLabel>Select Date</FormLabel>
            <Input placeholder="Select Date and Time" value={dateandtime} size="md" type="datetime-local" onChange={(e)=>setData({...data,dateandtime:e.target.value})}/>
            <Button mt={4} colorScheme='teal' type='submit' > Book Appointment </Button>
          </FormControl>
        </form>
      </Box>
    </Box>
  )
}

export default Appointments;