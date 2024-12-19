import React from 'react';
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
} from '@chakra-ui/react';
import patient from './pictures/patient.png';

function Patients() {
  const { isOpen, onOpen, onClose } = useDisclosure(); 

  const handleSubmit = () => {
    onOpen(); // Opens the modal
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
          <DrawerHeader>Add Patients Details</DrawerHeader>
          <DrawerBody>
            <p>Form to add Patients details goes here.</p>
          </DrawerBody>
          <DrawerFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Patients;
