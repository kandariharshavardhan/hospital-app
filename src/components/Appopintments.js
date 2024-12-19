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
import appointment from './pictures/appointment.png'

function Appointments() {
  const { isOpen, onOpen, onClose } = useDisclosure(); 
  

  const handleSubmit = () => {
    onOpen(); // Opens the modal
  };

  return (
    <Box>
       <Box 
     >
      <img src={appointment}  />
      </Box>
      <Button onClick={handleSubmit} colorScheme="teal" mb={4}>
        Add Appointments
      </Button>

      <div>
        <h2>Appointmentss Information</h2>
        <p>
          Our hospital has a variety of Appointments specializing in different fields such as Cardiology,
          Neurology, Orthopedics, and more.
        </p>
      </div>

      {/* Modal */}
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Add Appointments Details</DrawerHeader>
          <DrawerBody>
            <p>Form to add Appointments details goes here.</p>
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

export default Appointments;
