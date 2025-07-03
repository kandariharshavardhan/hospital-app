import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Input,
  Textarea,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import patient from './pictures/patient.png';

function Patients() {
  const { isOpen, onOpen, onClose } = useDisclosure(); 

  const handleSubmit = () => {
    onOpen(); // Opens the modal
  };
  const [patientDetails, setPatientDetails] = useState({
    patientName: "",
    causeForCheckup: "",
    joiningDate: "",
    relievingDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Patient Details:", patientDetails);
    // Add logic to save details to the database
    onClose(); // Close the drawer after saving
  };

  return (
    <Box>
      <img src={patient} />
      <Button onClick={handleSubmit} colorScheme="teal" mb={4}>
        Add Patients
      </Button>

      <div>
        <h2>Patientss Information</h2>
        <p>
          Our hospital has a variety of Patients specializing in different fields such as Cardiology,
          Neurology, Orthopedics, and more.
        </p>
      </div>

      {/* Modal */}
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Add Patient Details</DrawerHeader>
          <DrawerBody>
            <FormControl mb={4}>
              <FormLabel>Patient Name</FormLabel>
              <Input
                type="text"
                name="patientName"
                placeholder="Enter patient name"
                value={patientDetails.patientName}
                onChange={handleChange}
              />
            </FormControl>
  
            <FormControl mb={4}>
              <FormLabel>Cause for Checkup</FormLabel>
              <Textarea
                name="causeForCheckup"
                placeholder="Enter the reason for the checkup"
                value={patientDetails.causeForCheckup}
                onChange={handleChange}
              />
            </FormControl>
  
            <FormControl mb={4}>
              <FormLabel>Previous Patient Time of Joining</FormLabel>
              <Input
                type="datetime-local"
                name="joiningDate"
                value={patientDetails.joiningDate}
                onChange={handleChange}
              />
            </FormControl>
  
            <FormControl mb={4}>
              <FormLabel>Relieving Date</FormLabel>
              <Input
                type="datetime-local"
                name="relievingDate"
                value={patientDetails.relievingDate}
                onChange={handleChange}
              />
            </FormControl>
          </DrawerBody>
          <DrawerFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={handleSave}>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Patients;
