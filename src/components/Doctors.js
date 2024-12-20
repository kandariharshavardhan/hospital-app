import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Text,
  Flex,
  ChakraProvider,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Input,
  FormLabel,
  VStack,
  Textarea,
  useDisclosure,
  HStack,
} from '@chakra-ui/react';
import doctor2 from './pictures/doctor2.png';

function Doctors() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);
  const [doctorDetails, setDoctorDetails] = useState({
    name: '',
    specialization: '',
    contact: '',
    patients: '',
  });

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/');
      setMessage(response.data);

      const usersResponse = await axios.get('http://localhost:3000/api/doctors');
      setUsers(usersResponse.data);
    } catch (error) {
      console.error("Error connecting to the backend:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorDetails({ ...doctorDetails, [name]: value });
  };

  const handleSave = async () => {
    try {
      const formattedDetails = {
        ...doctorDetails,
        patients: doctorDetails.patients
          ? doctorDetails.patients.split(',').map((id) => id.trim())
          : [],
      };

      const response = await axios.post('http://localhost:3000/api/doctors', formattedDetails);
      console.log('Doctor Added:', response.data);
      alert('Doctor added successfully!');
      onClose();
    } catch (error) {
      console.error('Error adding doctor:', error);
      alert('Failed to add doctor!');
    }
  };

  return (
    <Box>
      {/* Header Section */}
      <Box>
        <HStack>
          <img src={doctor2} alt="Doctor Illustration" />
          <ChakraProvider>
            <Box p={5}>
              <Text fontSize="2xl" mb={4}>
                Backend Response: {message}
              </Text>
              <Button onClick={fetchData} colorScheme="blue">
                Fetch Data Again
              </Button>
              <Box mt={4}>
                <Text fontWeight="bold">Users:</Text>
                {users.map((user, index) => (
                  <Box key={index} border="1px solid" p={2} mt={2}>
                    {user.name} - {user.specialization}-{user.contact}
                  </Box>
                ))}
              </Box>
            </Box>
          </ChakraProvider>
        </HStack>
      </Box>

      {/* Button to Open Drawer */}
      <Button onClick={onOpen} colorScheme="teal" mb={4}>
        Add Doctor
      </Button>

      {/* Doctors Information */}
      <div>
        <h2>Doctors Information</h2>
        <p>
          Our hospital has a variety of doctors specializing in different fields such as Cardiology,
          Neurology, Orthopedics, and more.
        </p>
      </div>

      {/* Drawer for Adding Doctor */}
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Add Doctors Details</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4}>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Enter doctor name"
                name="name"
                value={doctorDetails.name}
                onChange={handleChange}
              />
              <FormLabel>Specialization</FormLabel>
              <Input
                placeholder="Enter specialization"
                name="specialization"
                value={doctorDetails.specialization}
                onChange={handleChange}
              />
              <FormLabel>Contact</FormLabel>
              <Input
                placeholder="Enter contact number"
                name="contact"
                value={doctorDetails.contact}
                onChange={handleChange}
              />
              <FormLabel>Patients (comma-separated IDs)</FormLabel>
              <Textarea
                placeholder="Enter patient IDs separated by commas"
                name="patients"
                value={doctorDetails.patients}
                onChange={handleChange}
              />
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="solid" colorScheme="teal" onClick={handleSave}>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Doctors;
